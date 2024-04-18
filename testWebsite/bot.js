const botTag = document.getElementsByTagName("chatBotInvouge")[0];
const botId = botTag.getAttribute("agent-id");
let defaultSettings;

const socialIcons = {
  twitter: {
    twitterIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>`,
  },
  facebook: {
    facebookIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>`,
  },
  Airbnb: {
    twitterIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>`,
  },

  Amazon: {
    twitterIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>`,
  },
  Android: {
    twitterIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>`,
  },
};

var popupStyle = "";
var popupStyleArrow = "";
let selectedRating = 0;

let soundEffect;

function createChatWidget(defaultSettings) {
  if (defaultSettings.style == "solid") {
    popupStyle = "background:" + defaultSettings.widgetColor + ";color:white;";
    popupStyleArrow = "background:" + defaultSettings.widgetColor + ";";
  } else if (defaultSettings.style == "gradient") {
    popupStyle =
      "background:linear-gradient(to right,white," +
      defaultSettings.widgetColor +
      ");color:black;";
    popupStyleArrow = "background:" + defaultSettings.widgetColor + ";";
  } else {
    popupStyle = "background:white;";
    popupStyleArrow = "background:white;";
  }

  const chatWrapper = document.createElement("div");
  chatWrapper.classList.add("chat-wrapper-f12asd");
  chatWrapper.style.position = "fixed";

  soundEffect = document.createElement("audio");
  soundEffect.setAttribute("id", "sound-effect-sdf12d");
  soundEffect.setAttribute(
    "src",
    "https://cdn.pixabay.com/audio/2022/10/30/audio_f5dbe8213e.mp3",
  );

  var widget = document.createElement("div");
  widget.classList.add("widget-dfs234asdf");

  var widgetHeader = document.createElement("header");
  widgetHeader.classList.add("widget-header-sdfe32e2");

  var headerParagraph = document.createElement("p");
  headerParagraph.style.fontSize = "larger";
  headerParagraph.style.letterSpacing = "1px";
  headerParagraph.style.fontWeight = "700";
  headerParagraph.style.color = "white";
  headerParagraph.textContent = defaultSettings.chatBotTitle;

  const headerLeftDiv = document.createElement("div");
  headerLeftDiv.classList.add("header-left-div-dsf124wd");

  const headerAgentTyping = document.createElement("p");
  headerAgentTyping.setAttribute("id", "header-agent-typing");
  headerAgentTyping.innerText = defaultSettings.typingMessage;

  headerLeftDiv.appendChild(headerParagraph);

  headerLeftDiv.appendChild(headerAgentTyping);

  const profileViewButton = document.createElement("button");
  profileViewButton.innerText = "Profile";
  profileViewButton.classList.add("profile-view-button-sdg2r2e2");

  const chatViewButton = document.createElement("button");
  chatViewButton.innerText = "Chat";
  chatViewButton.classList.add("chat-view-button-sdr23d");

  const closeBtn = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  closeBtn.classList.add("close-btn");
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fill = "white";
  closeBtn.style.width = "14px";
  closeBtn.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  closeBtn.setAttribute("viewBox", "0 0 384 512");

  const closeBtnPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  closeBtnPath.setAttribute(
    "d",
    "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
  );
  closeBtn.appendChild(closeBtnPath);

  const headerRightDiv = document.createElement("div");
  headerRightDiv.classList.add("header-right-div-3daer234");
  headerRightDiv.appendChild(profileViewButton);
  headerRightDiv.appendChild(chatViewButton);
  headerRightDiv.appendChild(closeBtn);

  widgetHeader.appendChild(headerLeftDiv);
  widgetHeader.appendChild(headerRightDiv);

  var chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container-kasl12csd");
  chatContainer.style.width = "100%";
  chatContainer.style.height = "100%";

  var allChats = document.createElement("div");
  allChats.setAttribute("id", "all-chats");

  var profilePage = document.createElement("div");
  profilePage.classList.add("profile-page");

  var profileContent = document.createElement("div");
  profileContent.classList.add("profile-content-cdj4fiuq3");

  if (!defaultSettings.botImg) {
    const svgElement2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    svgElement2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement2.setAttribute("viewBox", "0 0 640 512");
    svgElement2.classList.add("profile-tab-icon-n13bopj");

    const pathElement2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    pathElement2.setAttribute(
      "d",
      "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z",
    );

    svgElement2.appendChild(pathElement2);
    profileContent.appendChild(svgElement2);
  } else {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", defaultSettings.botImg);
    imgElement.classList.add("profile-tab-icon-n13bopj");
    profileContent.appendChild(imgElement);
  }

  const chatBotTitle2 = document.createElement("p");
  chatBotTitle2.innerText = defaultSettings.chatBotTitle;
  chatBotTitle2.classList.add("profile-chat-bot-title-thnu7ru");

  const profileTabDescription = document.createElement("p");
  profileTabDescription.innerText = defaultSettings.profileDescription;
  profileTabDescription.classList.add("profile-tab-description-ot1uhdl");

  const profileInput = document.createElement("input");
  profileInput.setAttribute("placeholder", defaultSettings.placeholder);
  profileInput.classList.add("profile-input-iejl9vu");

  const profileInputSend = document.createElement("button");
  profileInputSend.textContent = "Submit";
  profileInputSend.classList.add("widget-send-button-profile-y3zyj5k");

  const socialIconsContainer = document.createElement("div");
  socialIconsContainer.classList.add("social-icons-container-59j3jc3");

  // for (const [social, { icon, socialLink }] of Object.entries(
  //   defaultSettings.profile.socials,
  // )) {
  //   const socialIconElement = document.createElement("a");
  //   socialIconElement.setAttribute("href", socialLink);
  //   socialIconElement.setAttribute("target", "_blank");

  //   const socialIconSvg = document.createElementNS(
  //     "http://www.w3.org/2000/svg",
  //     "svg",
  //   );
  //   socialIconSvg.classList.add("social-icon-3ypjpan");
  //   socialIconSvg.innerHTML = icon;

  //   socialIconElement.appendChild(socialIconSvg);
  //   socialIconsContainer.appendChild(socialIconElement);
  // }

  profileContent.appendChild(chatBotTitle2);
  profileContent.appendChild(profileTabDescription);
  profileContent.appendChild(profileInput);
  profileContent.appendChild(profileInputSend);
  // profileContent.appendChild(socialIconsContainer);
  profilePage.appendChild(profileContent);
  chatContainer.appendChild(profilePage);

  chatContainer.appendChild(allChats);
  if (defaultSettings.collectVisitorInfo) {
    var emailForm = document.createElement("div");
    emailForm.setAttribute("id", "email-form");

    var emailFormTopDiv = document.createElement("div");
    emailFormTopDiv.classList.add("email-form-top-div-exlgu8x");

    var emailFormParagraph = document.createElement("p");
    emailFormParagraph.style.color = "black";
    emailFormParagraph.style.textAlign = "center";
    emailFormParagraph.style.margin = "0";
    emailFormParagraph.textContent = "Your email in case we get disconnected";

    const closeBtnEmail = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    closeBtnEmail.classList.add("close-btn-email-s185rwx");
    closeBtnEmail.setAttribute("id", "close-btn-email");
    closeBtnEmail.style.cursor = "pointer";
    closeBtnEmail.style.fill = "black";
    closeBtnEmail.style.width = "14px";
    closeBtnEmail.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    closeBtnEmail.setAttribute("viewBox", "0 0 384 512");

    const closeBtnPathEmail = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    closeBtnPathEmail.setAttribute(
      "d",
      "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
    );
    closeBtnEmail.appendChild(closeBtnPathEmail);

    emailFormTopDiv.appendChild(emailFormParagraph);
    emailFormTopDiv.appendChild(closeBtnEmail);
    emailForm.appendChild(emailFormTopDiv);

    var widgetUserName = document.createElement("input");
    widgetUserName.classList.add("widget-input-email-byl793h");
    widgetUserName.setAttribute("id", "widget-user-email");
    widgetUserName.setAttribute("placeholder", "Name");
    emailForm.appendChild(widgetUserName);

    var widgetUserEmail = document.createElement("input");
    widgetUserEmail.classList.add("widget-input-email-byl793h");
    widgetUserEmail.setAttribute("id", "widget-user-name");
    widgetUserEmail.setAttribute("placeholder", "Email");
    widgetUserEmail.setAttribute("type", "email");
    emailForm.appendChild(widgetUserEmail);

    var emailSubmitButton = document.createElement("button");
    emailSubmitButton.setAttribute("id", "email-submit-button");
    emailSubmitButton.addEventListener("click", submitUserInfo);
    emailSubmitButton.textContent = "Submit";
    emailForm.appendChild(emailSubmitButton);

    chatContainer.appendChild(emailForm);
  }

  widget.appendChild(widgetHeader);

  widget.appendChild(chatContainer);

  var interactiveBar = document.createElement("div");
  interactiveBar.setAttribute("id", "iteractive-bar");

  var inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div-ow7s31y");
  inputDiv.style.position = "relative";

  var widgetInput = document.createElement("input");
  widgetInput.classList.add("widget-input-1wlknav");
  widgetInput.setAttribute("onkeydown", "return handleOnEnterPressed(event)");
  widgetInput.setAttribute("placeholder", "Type your message...");

  const resetButton = document.createElement("button");
  resetButton.classList.add("reset-button-fn3gbxl");
  resetButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" class="reset-btn" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>';
  resetButton.addEventListener("click", resetChat);

  inputDiv.appendChild(widgetInput);
  inputDiv.appendChild(resetButton);

  const widgetSendButton = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  widgetSendButton.classList.add("widget-send-button-2xgz14i");
  widgetSendButton.addEventListener("click", () => addUserMessageToChat()); // Update to use addEventListener
  widgetSendButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  widgetSendButton.setAttribute("viewBox", "0 0 512 512");

  const widgetSendButtonPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  widgetSendButtonPath.setAttribute(
    "d",
    "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3.3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z",
  );
  widgetSendButton.appendChild(widgetSendButtonPath);
  inputDiv.appendChild(widgetSendButton);

  const fileInput = document.createElement("input");
  fileInput.setAttribute("accept", ".jpg, .jpeg, .png");

  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("id", "file-input");
  fileInput.style.display = "none";
  fileInput.onchange = handleFileUpload;

  function handleFileUpload() {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (allowedTypes.includes(selectedFile.type)) {
        displayImageInChat(selectedFile);
      } else {
        alert("Please select a valid file type (JPG or PNG).");
        fileInput.value = "";
      }
    }
  }
  function displayImageInChat(file) {
    const imageElement = document.createElement("img");
    const allChats = document.getElementById("all-chats");
    imageElement.setAttribute("src", URL.createObjectURL(file));
    imageElement.setAttribute("alt", "Uploaded Image");
    imageElement.classList.add("user-image-47ubx3h");

    allChats.appendChild(imageElement);

    autoScroll();
  }

  function displayFileInChat(file) {
    const allChats = document.getElementById("all-chats");
    const fileContainer = document.createElement("div");
    fileContainer.className = "file-container-u6tr22e";

    const fileIcon = document.createElement("span");

    fileIcon.innerHTML = "&#128193;";
    const fileNameLabel = document.createElement("span");
    fileNameLabel.textContent = file.name;

    fileContainer.appendChild(fileIcon);
    fileContainer.appendChild(fileNameLabel);

    allChats.appendChild(fileContainer);
    autoScroll();
    hideConvoStarters();
  }

  const fileInputSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  fileInputSvg.classList.add("file-input-svg-kpk670t");
  fileInputSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  fileInputSvg.setAttribute("viewBox", "0 0 448 512");
  fileInputSvg.onclick = openFilePicker;

  const fileInputSvgPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  fileInputSvgPath.setAttribute(
    "d",
    "M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z",
  );
  fileInputSvg.appendChild(fileInputSvgPath);

  function openFilePicker() {
    document.getElementById("file-input").click();
  }

  inputDiv.appendChild(fileInput);
  inputDiv.appendChild(fileInputSvg);

  interactiveBar.appendChild(inputDiv);

  widget.appendChild(interactiveBar);

  if (!defaultSettings.removePoweredBy) {
    var poweredText = document.createElement("p");
    poweredText.classList.add("powered-text-kpk670t");
    poweredText.innerHTML = "Powered by <b>InvougeChat.ai</b>";
    widget.appendChild(poweredText);
  }

  chatWrapper.appendChild(widget);

  var widgetOpenDiv = document.createElement("div");
  widgetOpenDiv.classList.add("widget-open-div-s185rwx");

  var widgetButton = document.createElement("button");
  widgetButton.setAttribute("id", "widgetButton");
  widgetButton.classList.add("widget-btn-6n23t4f");

  if (defaultSettings.style == "highEngagement") {
    const notificationPopup = document.createElement("div");
    notificationPopup.innerText = "1";
    notificationPopup.classList.add("noti-popup-7gm67xq");
    widgetButton.appendChild(notificationPopup);
  }
  if (defaultSettings.widgetIcon) {
    const widgetIcon = document.createElement("img");
    widgetIcon.setAttribute("src", defaultSettings.widgetIcon);
    widgetIcon.classList.add("widget-icon-rr3g5oy");
    widgetButton.appendChild(widgetIcon);
  } else {
    const widgetButtonSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    widgetButtonSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    widgetButtonSvg.setAttribute("fill", "none");
    widgetButtonSvg.setAttribute("viewBox", "0 0 24 24");
    widgetButtonSvg.setAttribute("stroke-width", "1.5");
    widgetButtonSvg.setAttribute("stroke", "currentColor");
    widgetButtonSvg.classList.add("widget-icon-rr3g5oy");

    const widgetButtonPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    widgetButtonPath.setAttribute("stroke-linecap", "round");
    widgetButtonPath.setAttribute("stroke-linejoin", "round");
    widgetButtonPath.setAttribute(
      "d",
      "M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018",
    );

    widgetButtonSvg.appendChild(widgetButtonPath);
    widgetButton.appendChild(widgetButtonSvg);
  }

  widgetOpenDiv.appendChild(widgetButton);

  if (defaultSettings.showPopupText) {
    const widgetPopup = document.createElement("div");
    widgetPopup.classList.add("widget-popup-6n23t4f");
    widgetPopup.setAttribute("id", "widget-popup");

    const widgetPopupContent = document.createElement("div");
    widgetPopup.classList.add("widget-popup-content-kpk670t");

    const widgetPopupText = document.createElement("p");
    widgetPopupText.classList.add("widget-popup-text-rpnvogd");
    widgetPopupText.innerText = defaultSettings.popupText;
    widgetPopupContent.appendChild(widgetPopupText);

    const closeBtnPopup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    closeBtnPopup.classList.add("close-btn-popup-g469949");
    closeBtnPopup.setAttribute("id", "close-btn-popup");
    closeBtnPopup.style.cursor = "pointer";
    closeBtnPopup.style.fill = "black";
    closeBtnPopup.style.width = "14px";
    closeBtnPopup.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    closeBtnPopup.setAttribute("viewBox", "0 0 384 512");

    const closeBtnPathPopup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    closeBtnPathPopup.setAttribute(
      "d",
      "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
    );
    closeBtnPopup.appendChild(closeBtnPathPopup);

    closeBtnPopup.appendChild(closeBtnPathPopup);
    widgetPopupContent.appendChild(closeBtnPopup);

    const widgetPopupArrow = document.createElement("div");
    widgetPopupArrow.classList.add("widget-popup-arrow-7gm67xq");

    widgetPopup.appendChild(widgetPopupContent);
    widgetPopup.appendChild(widgetPopupArrow);

    chatWrapper.appendChild(widgetPopup);
  }

  chatWrapper.appendChild(widgetOpenDiv);
  botTag.appendChild(chatWrapper);
  const styleElement = document.createElement("style");

  const cssStyles = `
    ${defaultSettings.fontUrl};

      #widgetButton:hover {
        transform: scale(1.1) !important;
      }
      a{
        color:${defaultSettings.widgetColor}
      }

      .widget-btn-6n23t4f {
        width: 60px;
        height: 60px;
        border: 0px;
        cursor: pointer;
        border-radius: 100%;
        padding: 10px;
        padding-top: 12px;
        display: flex;
        align-content: center;
        align-items: center;
        box-sizing: border-box;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        justify-content: center;
        background-color: ${defaultSettings.widgetColor};
        transition: all 0.6s ease;
        opacity: 0;
      }
      .noti-popup-7gm67xq{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:10px;
        color:white;
        border:1px solid white;
        width:20px;
        height:20px;
        background:red;
        position:absolute;
        top:-2px;
        right:-2px;
        border-radius:100%;
        text-align:center;
      }
      .widget-btn-show {
        opacity: 1;
      }
    
      .widget-dfs234asdf {
        padding-bottom:10px;
        visibility: hidden;
        opacity: 0;
        height: 700px;
        width: 420px;
        transition: opacity 0.5s ease;
        background-color:white;
        box-sizing: border-box;
        border-radius: 25px;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .widget-header-sdfe32e2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 20px;
        width: 100%;
        height:100px;
        max-height:70px;
        background-color: ${defaultSettings.widgetColor};
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
      }
      .header-left-div-dsf124wd{
        display:flex;
        flex-direction:column;
      }
      #header-agent-typing{
        display:none;
        font-size:13px;
      }
      .header-left-div-dsf124wd p{
        margin:0px;
        color:white;
      }

      .show-widget {
        visibility: visible;
        opacity: 1;
      }

      .hide-widget-button {
        display: none;
      }
      svg {
        width: 40px;
        height: 40px;
        color: white;
      }
      .widget-dfs234asdf header,
      .widget-dfs234asdf .iteractive-bar {
        transition: opacity 0.5s ease;
      }
      .each-message{
      }
      .user-message {
        max-width:80%;
        border-radius: 10px;
        padding: 10px 20px;
        color: white;
        align-self: flex-end;
        background-color: ${defaultSettings.widgetColor};
        float: right;
        word-wrap: break-word;
      }
      .bot-message {
        display: flex;
        align-items: flex-end;
        border-radius:10px;
        word-wrap:break-word;
      }
      .chat-wrapper-f12asd {
        width:100%;
        font-family:${defaultSettings.fontFamily},sans-serif;
        position:fixed;
        ${defaultSettings.widgetButtonPosition}: 20px;
        align-items:${
          defaultSettings.widgetButtonPosition == "left"
            ? "flex-start"
            : "flex-end"
        };
        display:flex;
        flex-direction:column;
        bottom: 20px;
        box-sizing: border-box;
      }
      .profile-img-bot {
        width: 35px;
        height: 35px;
        border-radius:100%;
        margin: 0 7px;
        fill: ${defaultSettings.widgetColor};
      }
      #all-chats {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .user-message a{
        color:white;
      }
      .user-image-47ubx3h{
        align-self: flex-end;
        width:200px;
        float:right;
        border-radius:10px;
      }
       .bot-message a{
        color:black;
      }
      .message-content-bot {
        max-width:80%;
        border-radius: 10px;
        color: black;
        align-self: flex-start;
        padding: 10px 10px;
        background-color: rgb(241, 241, 241);
      }
      .chat-container-kasl12csd {
        scrollbar-width: none;
        font-weight: 300;
        font-size: 15px;
        box-sizing: border-box;
        padding: 15px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 4px;
        overflow-y: scroll;
      }
      .rating-container{
        direction:rtl;
        box-sizing:border-box;
        padding:50px;
        height:100%;
        width:100%;
        display:flex;
        justify-content:space-around;
        gap:10px;
      }
      .star{
        transition:all 0.3s ease;
        fill:gray;
     box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px; 
      }
      .star:hover{
        fill:gold;
        transform:scale(1.15);
      }
      .selected{
        fill:gold;
      }
      .s1:hover ~ .star{
        fill:gold;
      }
      .s2:hover ~ .star{
        fill:gold;
      }
      .s3:hover ~ .star{
        fill:gold;
      }
      .s4:hover ~ .star{
        fill:gold;
      }

      .s5:hover ~ .star{
        fill:gold;
      }
      .header-right-div-3daer234{
        display:flex;
        gap:20px;
        align-items:center;
        justify-content:center;
      }
    .profile-view-button-sdg2r2e2{
        cursor:pointer;
        border-radius:20px;
        padding:9px 20px;
        border:2px solid white;
        color:white;
        background-color:transparent;
      }
      .chat-view-button-sdr23d{
        display:none;
        cursor:pointer;
        border-radius:20px;
        padding:9px 20px;
        border:2px solid white;
        color:white;
        background-color:transparent;
      }
      .input-div-ow7s31y{
        display:flex;
      }

      #email-form {
        padding: 20px;
        gap: 7px;
        display: flex;
        flex-direction: column;
        margin: 20px;
        border-radius: 20px;
        background-color: rgb(244, 243, 246);
        transition: box-shadow 0.3s ease;
        box-shadow:
          rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
      #email-form:hover {
        box-shadow:
          rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }
      .email-form-top-div-exlgu8x{
        display:flex;
        justify-content:space-between;
        align-items:center;
      }
      .close-btn-email-s185rwx{
        fill:black;
        margin-right:3px;
      }
      .widget-input-email-byl793h {
        width: 100%;
        border-radius: 5px;
        border: 1px solid ${defaultSettings.widgetColor};
        font-size: 13px;
        padding: 15px 10px;
        outline: 0px;
        box-sizing: border-box;
        z-index: 9;
      }
      #iteractive-bar {
        box-sizing:border-box;
        border-top: 1px solid gray;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        padding: 10px;
        padding-bottom:0px;
        width:100%;
      }
      .file-input-svg-kpk670t{
        fill:${defaultSettings.widgetColor};
        z-index: 9999;
        position: absolute;
        top: 5px;
        right: 75px;
        width: 18px;
        cursor: pointer;
      }
      #email-submit-button {
        width: 100%;
        border-radius: 5px;
        border: 0px;
        padding: 12px 15px;
        font-size: 13px;
        color: white;
        background-color: ${defaultSettings.widgetColor};
        cursor: pointer;
      }
      .widget-input-1wlknav {
        width: 100%;
        border-radius: 10px;
        border: 1.5px solid ${defaultSettings.widgetColor};
        font-size: 15px;
        padding: 15px 10px;
        padding-right:70px;
        outline: 0px;
        box-sizing: border-box;
        z-index: 9;
      }
      .reset-btn{
        width:20px;
        margin:0px 5px;
      }
      .reset-button-fn3gbxl{
        margin-left:5px;
        padding:0px;
        border:0;
        background:transparent;
      }
      
      .email-form-text {
        text-align: center;
        color: black;
        font-size: 15px;
        font-weight: bold;
        margin: 0;
      }
      .widget-send-button-2xgz14i {
        fill:${defaultSettings.widgetColor};
        z-index: 9999;
        position: absolute;
        top: 5px;
        right: 45px;
        width: 18px;
        cursor: pointer;
      }
      .widget-send-button-profile-y3zyj5k {
        color:white;
        border:2px solid ${defaultSettings.widgetColor};
        background:${defaultSettings.widgetColor};
        z-index: 9999;
        cursor: pointer;
        font-size:15px;
        outline:0px;
        width:80%;
        padding:15px 10px;
        border-radius:10px;
        border:1px solid black;
        position:relative;
      }
      .widget-open-div-s185rwx {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        z-index: 9999;
        position: relative;
      }
      .widget-icon-rr3g5oy{
        width:40px;
      }
      .powered-text-kpk670t {
        margin: 0 15px;
        color: gray;
        text-align: center;
        margin-top: 6px;
      }
      .convo-starter{
        cursor:pointer;
        width:100%;
        display:grid;
        gap:2px;
        place-items:center;
      }
      .profile-page{
            height:100%;
        flex-direction:column;
        align-items:center;
        justift-content:center;
        display:none;
      }
      .social-icons-container-59j3jc3{
        margin-top:50px;
        display:flex;
        gap:30px;
      }
      .social-icon-3ypjpan{
        width:30px;
        fill:${defaultSettings.widgetColor};
        transition:transform 0.3s ease;
        
      }
      .social-icon-3ypjpan:hover{
        transform:scale(1.2);
        box-shadow: rgba(99, 99, 99, 0.2);
      }
      .convo-starter p:hover{
            box-shadow:
          rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; 
          transform:scale(1.05);
      }
      .convo-starter > p{ 
        padding:4px 8px;
        border-radius:20px;
        width:fit-content;
        margin:0;
        transition: transform 0.3s ease, box-shadow .3s ease;
         box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
      .profile-content-cdj4fiuq3{
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:5px;
      }
      .profile-tab-icon-n13bopj{
        fill:${defaultSettings.widgetColor};
        height:80px;
        width:80px;
        margin:0;
      }
      .profile-chat-bot-title-thnu7ru{
        color:black;
        font-weight:600;
        font-size:25px;
        margin:0px;
        text-align:center;
      }
      .profile-tab-description-ot1uhdl{
        text-align:center;
        font-size:15px;
        margin:5px 0px;
      }
      .profile-input-iejl9vu{
        font-size:15px;
        outline:0px;
        width:80%;
        padding:15px 10px;
        border-radius:10px;
        border:1px solid black;
        position:relative;
      }
      .profile-input-iejl9vu{
        width: 80%;
        border-radius: 10px;
        border: 1.5px solid ${defaultSettings.widgetColor};
        font-size: 15px;
        padding: 15px 10px;
        outline: 0px;
        box-sizing: border-box;
        z-index: 9;
    }
    .widget-popup-6n23t4f{
        transition:display 0.4s ease;
        padding: 10px 25px;
        border-radius: 10px;
        color: black;
        display:none;
        ${popupStyle}
        margin-bottom:15px;
    }
  
     .widget-popup-content-kpk670t{
        
        z-index: 2147483646;
            min-width: 80px;
            max-width: 250px;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px 0px;
            border-radius: 10px;
            height: auto;
            cursor: pointer;
            transform: translateX(0%) translateZ(0px);
        }
        .widget-popup-arrow-7gm67xq{
            
            position: absolute;
            bottom: -4px;
            width: 10px;
            height: 10px;
            z-index: 0;
            transform: rotate(45deg);
            background: center center white;
            border-radius: 3px;
            ${defaultSettings.widgetButtonPosition}: 27px;
            ${popupStyleArrow}
        }
        .close-btn-popup-g469949{
            top:0px;
            position:absolute;
            right:10px;
        }
        .feedback-p-g469949{
          font-size:20px;
          text-align:center;
          font-weight:500;
        }
        .feedback-g469949{
          box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
          margin:5px;
          border:2px solid ${defaultSettings.widgetColor};
          border-radius:10px;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          text-align:cetner;
          padding:20px 0px;
        }
        
      @media only screen and (max-width: 600px) {
        .widget-dfs234asdf {
          box-sizing: border-box;
          padding: 0;
          width: calc(100vw - 40px);
          height: calc(100vh - 40px);
          right: 0;
        }
        .chat-wrapper-f12asd {
          box-sizing:border-box;
          padding:20px;
          
          ${defaultSettings.widgetButtonPosition}: 0px;
          bottom: 0px;
        }
        .widget-popup-6n23t4f{
            display:none;
        }
      }
       @media only screen and (max-width: 400px) {
        .widget-dfs234asdf {
          box-sizing: border-box;
          padding: 0;
          width: calc(100vw - 20px);
          height: calc(100vh - 20px);
          right: 0;
        }
        .chat-wrapper-f12asd {
          padding: 10px;
          right: 0px;
          bottom: 0px;
        }
       
      }`;

  styleElement.textContent = cssStyles;

  document.head.appendChild(styleElement);
}

let themeColor;

document.addEventListener("DOMContentLoaded", async function () {
  botTag.classList.add("invouge-bot-chat");
  let isWidgetOpened = false;

  try {
    const response = await fetch("http://localhost:3000/api/bot/settings", {
      method: "POST",
      body: JSON.stringify({
        botId,
      }),
    });

    if (response.error) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
      return;
    }
    const body = await response.json();
    const data = body.data;
    defaultSettings = data;
    createChatWidget(data);
    addBotMessageToChat(data.welcomeMessage);
    const allChat = document.getElementById("all-chats");

    const closeBtnPopup = document.getElementById("widget-popup");
    setTimeout(() => {
      if (!isWidgetOpened) {
        closeBtnPopup.style.display = "block";
      }
    }, 3000);

    defaultSettings.convoStarters.forEach((each) => {
      const convoStarter = document.createElement("div");
      convoStarter.classList.add("convo-starter");
      const convoStarterText = document.createElement("p");
      convoStarterText.innerText = each;
      convoStarterText.addEventListener("click", () => {
        addUserMessageToChat(each);
        hideConvoStarters();
      });
      convoStarter.appendChild(convoStarterText);
      allChat.appendChild(convoStarter);
    });
    if (defaultSettings.expandByDefault) {
      toggleWidget();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
  const closeBtn = document.querySelector(".close-btn");
  const widget = document.querySelector(".widget-dfs234asdf");
  const widgetButton = document.getElementById("widgetButton");
  const popup = document.querySelector(".widget-popup-6n23t4f");

  widgetButton.classList.add("widget-btn-show");
  widgetButton.addEventListener("click", toggleWidget);
  closeBtn.addEventListener("click", toggleWidget);
  popup.addEventListener("click", toggleWidget);

  widgetButton.style.opacity = "0";
  widgetButton.classList.add("widget-btn-show");
  setTimeout(() => {
    widgetButton.style.opacity = "1";
  }, 100);

  function toggleWidget() {
    const widgetPopup = document.querySelector(".widget-popup-6n23t4f");
    const widget = document.querySelector(".widget-dfs234asdf");
    const widgetButton = document.getElementById("widgetButton");
    widget.classList.toggle("show-widget");
    widgetButton.classList.toggle("hide-widget-button");
    widgetPopup.style.display = "none";
    isWidgetOpened = true;
  }

  const profileViewButton = document.querySelector(
    ".profile-view-button-sdg2r2e2",
  );

  const chatViewButton = document.querySelector(".chat-view-button-sdr23d");
  const profilePage = document.querySelector(".profile-page");

  const allChat = document.getElementById("all-chats");
  const emailForm = document.querySelector("#email-form");
  const interactiveBar = document.querySelector("#iteractive-bar");
  profileViewButton.addEventListener("click", function () {
    chatViewButton.style.display = "block";
    allChat.style.display = "none";
    if (emailForm) {
      emailForm.style.display = "none";
    }
    profileViewButton.style.display = "none";
    profilePage.style.display = "flex";
    interactiveBar.style.display = "none";
  });

  chatViewButton.addEventListener("click", function () {
    allChat.style.display = "flex";
    if (emailForm) {
      emailForm.style.display = "flex";
    }
    chatViewButton.style.display = "none";
    profileViewButton.style.display = "block";
    profilePage.style.display = "none";
    interactiveBar.style.display = "block";
  });

  const closeBtnPopup = document.getElementById("close-btn-popup");
  const widgetPopup = document.querySelector(".widget-popup-6n23t4f");
  closeBtnPopup.addEventListener("click", () => {
    widgetPopup.style.display = "none";
  });

  const closeBtnEmail = document.getElementById("close-btn-email");
  if (closeBtnEmail) {
    closeBtnEmail.addEventListener("click", handleRemoveEmailForm);
  }
});

function submitUserInfo() {
  const emailForm = document.querySelector("#email-form");
  emailForm.style.display = "none";
  const name = document.getElementById("widget-user-email").value;
  const email = document.getElementById("widget-user-name").value;
  console.log(name, email);
  fetch("http://localhost:3000/api/bot/visitor", {
    method: "POST",
    body: JSON.stringify({ name: name, email: email, botId: botId }),
  });
}
function handleOnEnterPressed(event) {
  if (event.key === "Enter") {
    addUserMessageToChat();
  }
}

async function addUserMessageToChat(custom_message) {
  const chatContainer = document.querySelector(".chat-container-kasl12csd");
  const allChat = document.getElementById("all-chats");
  const widgetInput = document.querySelector(".widget-input-1wlknav");
  const message = custom_message || widgetInput.value;
  if (!message) return;
  widgetInput.value = "";

  const messageElement = document.createElement("div");
  messageElement.classList.add("user-message", "each-message");
  messageElement.style.backgroundColor = defaultSettings.widgetColor;
  const messageText = document.createElement("p");
  messageText.classList.add("user-message-content");
  messageText.style.margin = "0";
  messageText.innerHTML = linkify(message);
  messageElement.appendChild(messageText);
  allChat.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
  hideConvoStarters();
  setAgentTyping();
  const data = await fetch("http://localhost:3000/api/bot/message", {
    method: "POST",
    body: JSON.stringify({ botId: botId, query: message }),
  });
  const answer = await data.json();
  if (answer) {
    addBotMessageToChat(answer.answer.text);
  }
}
function addBotMessageToChat(message) {
  const chatContainer = document.querySelector(".chat-container-kasl12csd");
  const widgetInput = document.querySelector(".widget-input-1wlknav");
  widgetInput.value = "";

  const messageElement = document.createElement("div");
  messageElement.classList.add("bot-message", "each-message");

  if (!defaultSettings.botImg) {
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("viewBox", "0 0 640 512");
    svgElement.classList.add("profile-img-bot");

    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    pathElement.setAttribute(
      "d",
      "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z",
    );

    svgElement.appendChild(pathElement);
    messageElement.appendChild(svgElement);
  } else {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", defaultSettings.botImg);
    imgElement.classList.add("profile-img-bot");
    messageElement.appendChild(imgElement);
  }
  soundEffect.play();
  const chatElement = document.createElement("div");
  chatElement.classList.add("message-content-bot");
  const messageText = document.createElement("p");
  messageText.style.margin = "0";
  messageText.innerHTML = linkify(message);
  chatElement.appendChild(messageText);
  messageElement.appendChild(chatElement);
  const allChat = document.getElementById("all-chats");
  allChat.appendChild(messageElement);
  autoScroll();
}

function hideConvoStarters() {
  const allChat = document.getElementById("all-chats");
  const convoStarters = document.querySelectorAll(".convo-starter");
  convoStarters.forEach((convoStarter) => {
    allChat.removeChild(convoStarter);
  });
}

function setAgentTyping() {
  const agentP = document.getElementById("header-agent-typing");
  agentP.style.display = "block";
  setTimeout(() => {
    agentP.style.display = "none";
  }, 4000);
}

function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
  // Ensure text is a string
  const inputText = String(text);

  return inputText.replace(urlRegex, (url) => {
    if (url.startsWith("www.")) {
      url = "http://" + url;
    }
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
}

function handleRemoveEmailForm() {
  const emailForm = document.getElementById("email-form");
  emailForm.style.display = "none";
}

function autoScroll() {
  const chatContainer = document.querySelector(".chat-container-kasl12csd");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function resetChat() {
  const allChats = document.querySelector("#all-chats");
  allChats.innerHTML = "";
  addBotMessageToChat(defaultSettings.welcomeMessage);
}
function sendRatingMessage() {
  const feedback = document.createElement("div");
  feedback.classList.add("feedback-g469949");

  const feedbackp = document.createElement("p");
  feedbackp.textContent = "your opinion matters to us! 😇";
  feedbackp.classList.add("feedback-p-g469949");

  feedback.appendChild(feedbackp);

  const ratingContainer = document.createElement("div");
  let selectedRating = 0;

  function handleRating(rating) {
    selectedRating = rating;
    updateStars();
  }

  function updateStars() {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
      if (stars.length - index <= selectedRating) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  }

  ratingContainer.classList.add("rating-container");
  for (let i = 5; i >= 1; i--) {
    const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    star.classList.add("star", "s" + i);
    star.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    star.onclick = () => {
      handleRating(i);
    };
    star.setAttribute("viewBox", "0 0 576 512");
    star.innerHTML = `
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18>"/>
    `;
    star.addEventListener("click", () => handleRating(i));
    ratingContainer.appendChild(star);
  }

  feedback.appendChild(ratingContainer);

  const allChats = document.querySelector("#all-chats");
  allChats.appendChild(feedback);
  const interactiveBar = document.querySelector("#iteractive-bar");
  interactiveBar.style.display = "none";
}
