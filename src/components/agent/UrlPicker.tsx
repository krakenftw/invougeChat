import { Button } from "../ui/button";
import EachUrl from "./EachUrl";

function UrlPicker({
  urls,
  handleCreateBot,
  loading,
}: {
  urls: string[];
  handleCreateBot: any;
  loading: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h1>We found the following follow-up links</h1>
      {urls.slice(0, 5).map((each: string, key) => (
        <div key={key} className="flex">
          <EachUrl url={each} />
        </div>
      ))}
      <Button disabled={loading} className="w-fit" onClick={handleCreateBot}>
        Create
      </Button>
    </div>
  );
}
export default UrlPicker;
