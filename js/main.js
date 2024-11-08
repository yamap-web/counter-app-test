"use strict"; // Strictモードを使用

// DOMの取得
const counter = document.getElementById("counter");
const up = document.getElementById("up");
const down = document.getElementById("down");

// 変数を宣言
let count = 0;

// 「カウントアップ」をクリックした時に数字を「1」増やす処理
up.addEventListener("click", () => {
  count += 1; // カウントを1増やす
  if (count > 100) {
    count = 0;
  } // カウントが100を超えたら0に戻す
  counter.innerHTML = count; // カウントを画面に表示
});

// 「カウントダウン」をクリックした時に数字を「1」減らす処理
down.addEventListener("click", () => {
  count -= 1; // カウントを1減らす
  if (count < 0) {
    count = 0;
  } // カウントが0未満になったら0に戻す
  counter.innerHTML = count; // カウントを画面に表示
});
