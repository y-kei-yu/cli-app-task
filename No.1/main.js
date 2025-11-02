// すごろくの最小サイコロ回数を求める

const readline = require("readline");

const lines = [];
const reader = readline.createInterface({
    input: process.stdin,
    output: undefined,
});

reader.on("line", (line) => {
    lines.push(line);
});

reader.on("close", () => {
    const A = parseInt(lines[0].trim());

    // 1〜6のサイコロで最小回数進む
    const answer = Math.ceil((A - 1) / 6);

    console.log(answer);
});