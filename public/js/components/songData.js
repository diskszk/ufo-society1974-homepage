

export const kite = {
  id: 1,
  title: "kite",
  titleJP: "カイト",
  story: 'TR-3B, Masuo TV, "レストー夫人"',
  lyric:
    `
ちゃちな指輪で 夢を見せるように
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

`
};

export const young = {
  id: 2,
  title: "young",
  titleJP: "ヤング",
  story: '谷川俊太郎',
  lyric:
    `
わかいおまえが
そんなに多くを知っているとは思えない
そのささやかな出口を通るものは何だと言う

ガラス瓶がほしい
青い水がほしい
おまえはそこに立ち 許せばいい

そのささやかな出口を通り
銃弾のように駆けぬけていく

曇り空がほしい
ドブの川がほしい
おまえはそこに立ち 許せばいい

かなしいことかい
  
`
};



export const songs = [
  {
    id: kite.id,
    title: kite.title,
    titleJP: kite.titleJP,
    story: kite.story,
    lyric: kite.lyric,
  },
  {
    id: young.id,
    title: young.title,
    titleJP: young.titleJP,
    story: young.story,
    lyric: young.lyric,
  },
];