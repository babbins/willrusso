import fs from "fs";
import path from "path";

export function getMarkdown(mdFileName) {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), `content/${mdFileName}`),
    "utf8"
  );
  return fileContents;
}
