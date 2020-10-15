// 3行目の「`(Ctr + ＠)」の後ろから歌詞を書いていく
var lyric = 
`
`

var target = document.getElementById('00_track_name');
// 「04_sagan」のところをhtmlで書いたid="〇〇"の〇〇同じなるように書き換える

target.innerText = lyric;

// HTMLの歌詞を表示させたい箇所
// <p class="lyric" id="00_track_name"></p>

// HTMLの下の方に追加するコード
// <script src="./lyrics/このファイルのファイル名"></script>