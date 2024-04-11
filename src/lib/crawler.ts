import Spider from "node-spider";
import TurndownService from "turndown";
import * as cheerio from "cheerio";
import parse from "url-parse";

const turndownService = new TurndownService();

interface pageOptions {
  url: string;
  text: string;
  title: string;
}

interface crawlerOptions {
  pages: pageOptions[];
  limit: number;
  urls: string[];
  count: number;
  textLengthMinimum: number;
}

class Crawler implements crawlerOptions {
  pages = [];
  limit = 4;
  urls: string[] = [];
  spider = {};
  count = 0;
  textLengthMinimum = 200;

  constructor(urls: string[], limit: number, textLengthMinimum: number) {
    this.urls = urls;
    this.limit = limit;
    this.textLengthMinimum = textLengthMinimum || 200;
    this.count = 0;
    this.pages = [];
    this.spider = {};
  }

  handleRequest = (doc) => {
    const $ = cheerio.load(doc.res.body);
    $("script").remove();
    $("#hub-sidebar").remove();
    $("header").remove();
    $("nav").remove();
    $("img").remove();
    const title = $("title").text() || $(".article-title").text();
    const html = $("body").html();
    const text = turndownService.turndown(html);
    console.log("crawling ", doc.url);
    const page: page = {
      url: doc.url,
      text,
      title,
    };
    if (text.length > this.textLengthMinimum) {
      this.pages.push(page);
    }

    doc.$("a").each((i, elem) => {
      var href = doc.$(elem).attr("href")?.split("#")[0];
      var targetUrl = href && doc.resolve(href);
      // crawl more
      if (
        targetUrl &&
        this.urls.some((u) => {
          const targetUrlParts = parse(targetUrl);
          const uParts = parse(u);
          return targetUrlParts.hostname === uParts.hostname;
        }) &&
        this.count < this.limit
      ) {
        this.urls.push(targetUrl);
        this.spider.queue(targetUrl, this.handleRequest);
        this.count = this.count + 1;
      }
    });
  };

  start = async () => {
    this.pages = [];
    return new Promise((resolve, reject) => {
      this.spider = new Spider({
        concurrent: 5,
        delay: 0,
        allowDuplicates: false,
        catchErrors: true,
        addReferrer: false,
        xhr: false,
        keepAlive: false,
        error: (err: any, url: string) => {
          console.log(err, url);
          reject(err);
        },
        done: () => {
          resolve(this.pages);
        },
        headers: { "user-agent": "node-spider" },
        encoding: "utf8",
      });
      this.urls.forEach((url) => {
        this.spider?.queue(url, this.handleRequest);
      });
    });
  };
}

export { Crawler };
