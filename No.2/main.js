// リバーシの最終盤面を計算する
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
    // 標準入力を取得
    const S = lines[0];
    // 初期盤面
    const stones = ["black", "white"]

    for (let i = 0; i < S.length; i++) {
        const side = S[i];
        const turn = i + 1;
        let color;
        if (turn % 2 === 0) {
            color = "white"
        } else {
            color = "black"
        }

        // Sが”L”の時
        if (side === "L") {
            // 左端にコマを置く
            stones.unshift(color);

            // 同色を見つけた石の位置
            let k = -1;

            // 同色探し
            for (let j = 1; j < stones.length; j++) {
                if (stones[j] === color) {
                    k = j;
                    break;
                }
            }
            if (k > 1) {
                // ひっくり返す処理
                for (let j = 1; j < k; j++) {
                    if (stones[j] === "black") {
                        stones[j] = "white"
                    } else {
                        stones[j] = "black"
                    }
                }
            }
        }

        // Sが”R”の時
        if (side === "R") {

            // 右端にコマを置く
            stones.push(color);
            // 同色を見つけた石の位置
            let k = -1;

            // 同色探し
            for (let j = stones.length - 2; j >= 0; j--) {
                if (stones[j] === color) {
                    k = j;
                    break;
                }
            }
            if (k !== -1 && k < stones.length - 2) {
                // ひっくり返す処理
                for (let j = k + 1; j <= stones.length - 2; j++) {
                    if (stones[j] === "black") {
                        stones[j] = "white"
                    } else {
                        stones[j] = "black"
                    }
                }
            }
        }
    }
    // 駒の個数を数える
    const black = stones.filter(stone => stone === "black").length;
    const white = stones.length - black;
    console.log(`${black} ${white}`);


});
