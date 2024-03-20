import { readFile, writeFile } from "fs/promises";

const filePath = new URL("./_68_Custom_Template_Literal.html", import.meta.url);
let contents = await readFile(filePath, { encoding: "utf-8" });
const data = { name: "Mohammad Sadiq", age: 19 };
for (const [key, value] of Object.entries(data)) {
  contents = contents.replace(`#{${key}}`, value);
}
console.log(contents); // The File Read and replaced the template literal with corresponding Values

await writeFile(new URL("./index.html", import.meta.url), contents); // This will create a new file with name "index.html" and write the data of "_68_Custom_Template_Literal.html" in the new file and it will be write the template Literal
