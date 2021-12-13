import fs from "fs";
import path from "path";

export function getWorkMarkdown() {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), "content/work.md"),
    "utf8"
  );
  return fileContents;
}
