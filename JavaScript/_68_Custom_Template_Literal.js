import { readFile } from "fs/promises";
const filePath = new URL("./_68_Custom_Template_Literal.html", import.meta.url);
let contents = await readFile(filePath, { encoding: "utf-8" });
const data = { name: "Mohammad Sadiq" };
for (const [key, value] of Object.entries(data)) {
  contents = contents.replace(`#{${key}}`, value);
}
console.log(contents);