<template>
  <v-container>
    <div class="home">
      <img alt="Web logo" src="../assets/logo.png" />
      <p>ここは@tkglingが運営する姉妹サイトです.</p>
      <div class="contents">
        <h1>本サイトの意味</h1>
        <p>
          本サイト（tkgstrator.work）がPHPとSQLを組み合わせる動的サイトなのに対して最近覚えたVue.jsを使って静的サイトをつくってみようというのが本サイト設立のきっかけ.
          記事とかを投稿する予定はいまのところなく, 適当につくったもののまとめページ的な存在として使いたい所存.
        </p>
      </div>
      <div class="contents">
        <h1>@tkglingとは</h1>
        <p>
          友達がプレイしているスプラトゥーンをみていて「あれ, このキャラクター可愛くない？」とゲーム性よりもイカちゃんにドハマリした人.
          TPSやFPSはおろか, 10年近くコンシューマゲームから離れていたので最初の数戦のナワバリバトルで0キル60デスという記録を残す(スペシャルの使い方も全然わからんかった).
          ちょっと前までカナダでちまちまバイトしながら生活していたが, COVID-19の影響でレイオフされて現在は自宅でプログラミングをする毎日.
        </p>
      </div>
      <div class="contents">
        <h1>@tkglingを応援する</h1>
        <p>
          LanPlay, Salmoniaなどのツールは無料で誰でも自由にご利用いただけますが, 無償で提供している以上@tkglingは一円も利益を得ていません.
          利益を得ていないということはこれらだけを開発していても収入を得ることが不可能で, それはつまり他に仕事をして生計を立てる必要があるということです.
          他にやることがある以上, Salmoniaやそれらのツールだけの開発に専念することができないことをご了承ください.
          アップデートも可能な限り対応しますが, 確実なお約束はできません.
        </p>
        <p>
          ですが, もしもこれらの開発である程度の収入を得ることができるのであれば開発に割くことができる時間を増やすことができるはずです.
          ツールをより便利に, より安定したものにアップデートすることも可能でしょう.
          言ってしまえば無償ツールであれば自分の趣味が失われれば放置してトンズラもできますが, お金を頂いているのであれば開発を続ける責任と義務が生じますし, 可能であれば自分もこれらのツールの開発を続けていきたいと思っているのもまた本心です.
        </p>
        <p>なので, もしも@tkglingを応援・期待して（投資するともいいます）いただけたのであればご支援していただけるとありがたいです. PaypalとAmazonギフト券に対応しています.</p>
        <li>
          <a href="https://www.paypal.me/salmonia">PayPalで応援する</a>
        </li>
        <li>
          <router-link to="/donate">アマゾンギフト券で応援する</router-link>
        </li>
        <li>
          <a href="https://www.amazon.co.jp/hz/wishlist/ls/1OVWKJ7C5R9XK">ほしいものリストから何か送る</a>
        </li>
      </div>
    </div>
  </v-container>
</template>

<script>
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
li a,
li {
  font-size: 26px;
  list-style: none;
  text-decoration: none;
}
img {
  width: 400px;
}
</style>