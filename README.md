# UFO society 公式ホームページ

友人が加入しているバンド「UFO society」の公式サイト。元々バンドメンバーが作成した HTML,CSS のみの静的サイトに機能追加する形で開発しました。 メンバー間で HTML を操作することなく Web 経由で楽曲の歌詞や音声ファイルを投稿する為に作成した管理アプリに合わせて、リソースを使う為に改修しました。

## quick start

- `$ git clone https://github.com/diskszk/ufo-society1974.git`
- `$ cd ufo-society1974-dev`
- `$ npm install`
- ローカル環境に.envファイルを作成し下記コードを貼り付け、それぞれの右辺にfirebaseより取得した値を入力してください
  ```
  REACT_APP_FIREBASE_KEY=
  REACT_APP_FIREBASE_APP_ID=
  REACT_APP_FIREBASE_MEASUREMENT_ID=
  ```
- `$ npm run watch`
- `$ firebase serve`
