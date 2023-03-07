"use strict";

// DOM操作定義
const displayCount = (count) => {
  const counter = document.getElementById("accessCounter");
  counter.innerHTML = count;
};

const url =
  "https://asia-northeast2-ufo-society-1974.cloudfunctions.net/access/count";

const fetchCurrentAccessCount = async () => {
  const response = await fetch(url, { method: "GET" });

  const json = await response.json();
  return json.accessCount;
};

const incrementAccessCount = async () => {
  await fetch(`${url}/increment`, { method: "PUT" });
};

// DBの値を取得-> update関数に渡す -> DOM操作実行
const listenData = async () => {
  // TODO: 開発時にupdateしないようにする-> serverのcors設定すれば行けそう

  try {
    const currentAccessCount = await fetchCurrentAccessCount();
    displayCount(currentAccessCount + 1);
    await incrementAccessCount();
  } catch {
    throw new Error(
      "データの取得に失敗しました。\n通信環境をご確認の上再度お試しください。"
    );
  }
};

// 実行
listenData();
