import fs from "fs";
import path from "path";

export interface OnePager {
  fileName: string;
  title: string;
  date: Date;
}

const ONE_PAGERS_DIR = path.join(process.cwd(), "public", "one-pagers");
const DATE_PREFIX = /^(\d{4}-\d{2}-\d{2})_/;
const VERSION_SUFFIX = /_v\d+$/i;

function toTitleWord(word: string): string {
  if (word !== word.toLowerCase()) return word; // preserve mixed-case (e.g. "AI")
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function deriveTitleAndDate(fileName: string, mtime: Date): { title: string; date: Date } {
  const withoutExt = fileName.replace(/\.pdf$/i, "");
  const dateMatch = withoutExt.match(DATE_PREFIX);
  const date = dateMatch
    ? new Date(
        Number(dateMatch[1].slice(0, 4)),
        Number(dateMatch[1].slice(5, 7)) - 1,
        Number(dateMatch[1].slice(8, 10)),
      )
    : mtime;

  let stem = dateMatch ? withoutExt.slice(dateMatch[0].length) : withoutExt;
  stem = stem.replace(VERSION_SUFFIX, "");

  const title = stem
    .split(/[_-]+/)
    .filter(Boolean)
    .map(toTitleWord)
    .join(" ");

  return { title: title || fileName, date };
}

export function getOnePagers(): OnePager[] {
  if (!fs.existsSync(ONE_PAGERS_DIR)) return [];

  const files = fs
    .readdirSync(ONE_PAGERS_DIR)
    .filter((file) => file.toLowerCase().endsWith(".pdf"));

  const onePagers = files.map((fileName) => {
    const stats = fs.statSync(path.join(ONE_PAGERS_DIR, fileName));
    const { title, date } = deriveTitleAndDate(fileName, stats.mtime);
    return { fileName, title, date };
  });

  return onePagers.sort((a, b) => b.date.getTime() - a.date.getTime());
}
