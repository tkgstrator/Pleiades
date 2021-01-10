<template>
  <v-container>
    <div class="contents">
      <h1>Salmonia</h1>
      <p>
        SalmoniaはPC・iOS(iPhone, iPad)・Androidで動作するサーモンランに特化したデータ収集・分析ツールです.
        Salmon Statsという姉妹サイトと連携して自分のプレイを他のユーザーと比較することができます.
      </p>
      <v-spacer></v-spacer>
      <li
        @click="openURL('https://github.com/tkgstrator/Salmonia/releases')"
      >Python版(Windows, Mac向け)</li>
      <li
        @click="openURL('https://apps.apple.com/jp/app/salmonia/id1480684492')"
      >Swift版(iPhone, iPad向け)</li>
      <li
        @click="openURL('https://github.com/tkgstrator/ReactNative-Salmonia')"
      >React Native版(Android向け)</li>
    </div>
    <div class="contents">
      <h1>
        AltServer App
      </h1>
      <p>AltServer経由でインストールできるアプリです</p>
        <h2><a href="altstore://install?url=https://github.com/tkgstrator/Pleiades/releases/download/IPAs/Twitter.8.44.1.Owl.1.5.ipa">Twitter Owl v8.44.1</a></h2>
        <p>広告非表示、動画保存、Face ID認証、確認ダイアログ表示</p>
        <h2><a href="altstore://install?url=https://github.com/tkgstrator/Pleiades/releases/download/IPAs/TwitterPlus_v7.47_T1.2r-82.ipa">Twitter++ v7.47</a></h2>
        <p>Youtube動画保存、デフォルトブラウザ設定、フルスクリーン、角煮ダイアログ表示、動画保存</p>
        <h2><a href="altstore://install?url=https://github.com/tkgstrator/Pleiades/releases/download/IPAs/Twitch-plus-v1.1.ipa">Twitch++ v9.3.1</a></h2>
        <p>動画保存、広告非表示</p>
        <h2><a href="altstore://install?url=https://github.com/tkgstrator/Pleiades/releases/download/IPAs/YouTubePlus_v13.02.9_T1.4r-91.ipa">Youtube++ v13.15.7</a></h2>
        <p>動画保存、広告ブロック、バックグラウンド再生、自動リピート、再生速度変更</p>
    </div>
    <div class="contents">
      <h1>
        <a href="https://tkgstrator.github.io/GilemmaGame/">ジレンマゲーム</a>
      </h1>
      <p>
        ジレンマゲームは囚人のジレンマを元にしたブラウザで遊べる心理戦ゲームです.
        まだデモテストができる段階なのですが, 最終的には気軽に遊べるレベルまで完成させたいところです.
      </p>
    </div>
    <div class="contents">
      <h1>
        <a href="https://github.com/tkgstrator/Starlight">Starlight</a>
      </h1>
      <p>
        Starlightはスプラトゥーン2のバージョン3.1.0以下で任意のC++コードを実行させることができるShadowninja108氏が開発したツールです.
        これをサーモンラン用に特化させたものがうちのレポジトリにあるので使いたい方は是非どうぞ.
      </p>
      <p>これを利用するとどんなことができるのかは以下の動画で確認してみてください。</p>
      <video width="640" height="360" controls>
        <source
          src="https://video.twimg.com/ext_tw_video/1269163478151028739/pu/vid/1280x720/FeKJ80EtvMVR91_W.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="contents">
      <h1>
        <a href="https://github.com/tkgstrator/StarlightSeedHack">SeedHack</a>
      </h1>
      <p>
        SeedHackはサーモンランのWAVE情報を決定する初期シードを変更し, どんな初期シードからどのようなWAVEが来るかを完全に予測するHackです.
        @container12345氏によりイベント種類およびキンシャケ探しにおけるアタリ位置計算アルゴリズムが解析され, Pythonコードが公開されています.
        本ツールは@container12345氏のコードをC++に移植し, 使いやすくしたものです.
      </p>
    </div>
    <div class="contents">
      <h1>
        <a href="http://shogi.mydns.jp/">将棋局面ジェネレータ</a>
      </h1>
      <img
        src="https://shogi.mydns.jp/board?sfen=lnsgkgsnl%2F1r5b1%2Fppppppppp%2F9%2F9%2F9%2FPPPPPPPPP%2F1B5R1%2FLNSGKGSNL+b+-+1&type=noap&lmv=noap&eval=&tsume=0"
      />
      <p>将棋の局面図をSVG形式で出力することができるウェブサイトです. SVGですので拡大縮小に対して無劣化で非常に軽量で使いやすいです.</p>
    </div>
    <div class="contents">
      <h1>
        <a href="https://github.com/tkgstrator/kifviewer">棋譜ビューワー</a>
      </h1>
      <p>局面ジェネレーターを改良してSFEN形式の棋譜を読み込んでブラウザ上で動かせるウェブサイトです. GitHub上でデモがみれます.</p>
    </div>
    <div class="contents">
      <h1>
        <a href="https://tkgstrator.github.io/ShogiBoard/#/">リアルタイム将棋盤</a>
      </h1>
      <p>リアルタイムで友人と将棋が指せるオンラインの将棋盤です.対局がメイン機能ではないので時間制限がなく待った機能もあるので指導将棋にどうぞ.</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "About",
  methods: {
    openURL(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
<style>
.contents {
  margin-bottom: 30px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

li {
  color: blue;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
}

a {
  display: inline;
  padding: 0 auto;
  color: blue;
  text-decoration: none;
}
</style>
