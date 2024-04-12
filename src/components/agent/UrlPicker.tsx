import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import EachUrl from "./EachUrl";

function UrlPicker({
  urls,
  handleCreateBot,
  loading,
  setWebsiteName,
  websiteName,
}: {
  urls: string[];
  handleCreateBot: any;
  loading: boolean;
  setWebsiteName: any;
  websiteName: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h1>We found the following follow-up links</h1>
      {urls.slice(0, 5).map((each: string, key) => (
        <div key={key} className="flex">
          <EachUrl url={each} />
        </div>
      ))}
      <Separator className="my-2" />
      <div className="my-2">
        <Label>Website Name</Label>
        <Input
          value={websiteName}
          onChange={(e) => setWebsiteName(e.target.value)}
          placeholder="Website Name"
        />
      </div>

      <Button disabled={loading} className="w-fit" onClick={handleCreateBot}>
        Create
      </Button>
    </div>
  );
}
export default UrlPicker;
