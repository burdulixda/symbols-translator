const fs = require("fs");
const path = require("path");
const translator = require("./translator");

const filePath = path.resolve(process.argv[2]);
const htmlContent = fs.readFileSync(filePath, "utf8");

const result = translator(htmlContent);
console.log(JSON.stringify(result, null, 2));
