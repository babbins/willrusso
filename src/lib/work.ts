import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

export function getWorkMarkdown() {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), "content/work.mdx"),
    "utf8"
  );
  return fileContents;
}
