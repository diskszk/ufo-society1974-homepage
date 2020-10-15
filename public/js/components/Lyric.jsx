import React from 'react'

const style = {
  "white-space": "pre-line",
  "color": "blue"
}

const kite =
  `ちゃちな指輪で 夢を見せるように
さみしい公園で描いた迷路

きみには愛が きみには風景が
ガラス瓶の中に ずっと
影を落としている

ビー玉あそびを
町が透けるまで
そうだ
きみは何か思うのに

音も無く
機体はきみの空を覆う
明滅に向かうように
空をのぼったら

着地しないはずの
目盛りだらけの月
きみの手で 白い手で
空をこじあけて

`;

const Lyric = () => {
  return (
    <div>
      <h2>kite</h2>
      <p style={style}>{kite}</p>
    </div>
  );
}

export default Lyric;