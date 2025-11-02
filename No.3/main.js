// No.3: 数字を並べ替えて最小値を求める

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

    const inputNumber = lines[0].trim();
    // 1桁ずつ配列にして、昇順に並び替える
    const digits = inputNumber.split("").sort();
    // 最初に見つかった0ではない数字
    if (digits[0] === "0") {
        const isNonZero = (digit) => digit !== "0";
        const idx = digits.findIndex(isNonZero)
        if (idx > 0) {
            const temp = digits[0]
            digits[0] = digits[idx]
            digits[idx] = temp
        }

    }
    // 並び替えた桁を結合して、最小の数値を表す文字列にする
    const min = digits.join('')
    console.log(min)
});