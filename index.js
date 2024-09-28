const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const argv = process.argv[2];
const langCode = franc(argv);

if (langCode === "und") {
  console.log("違う文章で再チャレンジしてください".red);
} else {
  const language = langs.where("3", langCode).name;
  console.log(`${language}ですか？`.rainbow);
}
