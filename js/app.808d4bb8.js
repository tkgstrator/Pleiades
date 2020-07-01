(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Pleiades/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0721":function(t,e,n){},"3ce8":function(t,e,n){"use strict";var a=n("7fec"),o=n.n(a);o.a},4230:function(t,e,n){},5472:function(t,e,n){"use strict";var a=n("0721"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap",rel:"stylesheet"}}),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),n("router-link",{attrs:{to:"/release"}},[t._v("Release")])],1),n("router-view")],1)},r=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,o,r,!1,null,null,null),l=c.exports,u=n("f309");a["a"].use(u["a"]);var p=new u["a"]({}),d=n("8c4f"),v=n("bb51"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"contents"},[n("h1",[t._v("Salmonia")]),n("p",[t._v(" SalmoniaはPC・iOS(iPhone, iPad)・Androidで動作するサーモンランに特化したデータ収集・分析ツールです. Salmon Statsという姉妹サイトと連携して自分のプレイを他のユーザーと比較することができます. ")]),n("v-spacer"),n("li",{on:{click:function(e){return t.openURL("https://github.com/tkgstrator/Salmonia/releases")}}},[t._v("Python版(Windows, Mac向け)")]),n("li",{on:{click:function(e){return t.openURL("https://apps.apple.com/jp/app/salmonia/id1480684492")}}},[t._v("Swift版(iPhone, iPad向け)")]),n("li",{on:{click:function(e){return t.openURL("https://github.com/tkgstrator/ReactNative-Salmonia")}}},[t._v("React Native版(Android向け)")])],1),n("div",{staticClass:"contents"},[n("h1",[n("a",{attrs:{href:"https://tkgstrator.github.io/GilemmaGame/"}},[t._v("ジレンマゲーム")])]),n("p",[t._v(" ジレンマゲームは囚人のジレンマを元にしたブラウザで遊べる心理戦ゲームです. まだデモテストができる段階なのですが, 最終的には気軽に遊べるレベルまで完成させたいところです. ")])]),n("div",{staticClass:"contents"},[n("h1",[n("a",{attrs:{href:"https://github.com/tkgstrator/Starlight"}},[t._v("Starlight")])]),n("p",[t._v(" Starlightはスプラトゥーン2のバージョン3.1.0以下で任意のC++コードを実行させることができるShadowninja108氏が開発したツールです. これをサーモンラン用に特化させたものがうちのレポジトリにあるので使いたい方は是非どうぞ. ")]),n("p",[t._v("これを利用するとどんなことができるのかは以下の動画で確認してみてください。")]),n("video",{attrs:{width:"640",height:"360",controls:""}},[n("source",{attrs:{src:"https://video.twimg.com/ext_tw_video/1269163478151028739/pu/vid/1280x720/FeKJ80EtvMVR91_W.mp4",type:"video/mp4"}})])]),n("div",{staticClass:"contents"},[n("h1",[n("a",{attrs:{href:"https://github.com/tkgstrator/StarlightSeedHack"}},[t._v("SeedHack")])]),n("p",[t._v(" SeedHackはサーモンランのWAVE情報を決定する初期シードを変更し, どんな初期シードからどのようなWAVEが来るかを完全に予測するHackです. @container12345氏によりイベント種類およびキンシャケ探しにおけるアタリ位置計算アルゴリズムが解析され, Pythonコードが公開されています. 本ツールは@container12345氏のコードをC++に移植し, 使いやすくしたものです. ")])]),n("div",{staticClass:"contents"},[n("h1",[n("a",{attrs:{href:"http://shogi.mydns.jp/"}},[t._v("将棋局面ジェネレータ")])]),n("img",{attrs:{src:"https://shogi.mydns.jp/board?sfen=lnsgkgsnl%2F1r5b1%2Fppppppppp%2F9%2F9%2F9%2FPPPPPPPPP%2F1B5R1%2FLNSGKGSNL+b+-+1&type=noap&lmv=noap&eval=&tsume=0"}}),n("p",[t._v("将棋の局面図をSVG形式で出力することができるウェブサイトです. SVGですので拡大縮小に対して無劣化で非常に軽量で使いやすいです.")])]),n("div",{staticClass:"contents"},[n("h1",[n("a",{attrs:{href:"https://github.com/tkgstrator/kifviewer"}},[t._v("棋譜ビューワー")])]),n("p",[t._v("局面ジェネレーターを改良してSFEN形式の棋譜を読み込んでブラウザ上で動かせるウェブサイトです. GitHub上でデモがみれます.")])])])},h=[],m={name:"Release",methods:{openURL:function(t){window.open(t,"_blank")}}},b=m,g=(n("5472"),n("6544")),_=n.n(g),y=n("a523"),k=n("2fa4"),w=Object(i["a"])(b,f,h,!1,null,null,null),P=w.exports;_()(w,{VContainer:y["a"],VSpacer:k["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{alt:"Web logo",src:n("cf05")}}),a("h1",[t._v("応援コーナー")]),a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{rules:t.nameRules,counter:15,label:"お名前(任意です)",optional:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{rules:t.codeRules,counter:16,label:"ギフトコード(ハイフン不要)",onkeyup:"this.value = this.value.toUpperCase()",required:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)],1)],1)],1),a("button",{attrs:{disabled:!t.valid},on:{click:function(e){return t.sendCode()}}},[t._v("送信")])],1)},C=[],x=(n("b0c0"),n("d3b7"),{data:function(){return{valid:!1,name:"",code:"",nameRules:[function(t){return t.length<=15||"名前は15文字以下です"}],codeRules:[function(t){return!!t||"ギフトコードは必須です"},function(t){return/^[A-Za-z0-9]*$/.test(t)||"ギフトコードが有効な形式ではありません"},function(t){return 16==t.length||"ギフトコードはハイフンなしで16桁である必要があります"}]}},methods:{sendCode:function(){var t="https://hooks.slack.com/services/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",e={text:this.code,username:""==this.name?"匿名希望":this.name};fetch(t,{method:"POST",body:JSON.stringify(e)}),confirm("Thank you for your donation.")}}}),O=x,j=(n("3ce8"),n("62ad")),R=n("4bd4"),V=n("0fd9"),F=n("8654"),E=Object(i["a"])(O,S,C,!1,null,null,null),L=E.exports;_()(E,{VCol:j["a"],VContainer:y["a"],VForm:R["a"],VRow:V["a"],VTextField:F["a"]}),a["a"].use(d["a"]);var G=[{path:"/",name:"Home",component:v["default"]},{path:"/release",name:"Release",component:P},{path:"/donate",name:"Donate",component:L}],H=new d["a"]({mode:"hash",base:"/Pleiades/",routes:G}),T=H;a["a"].config.productionTip=!1,new a["a"]({vuetify:p,router:T,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("7694"),o=n.n(a);o.a},"6b99":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Web logo",src:n("cf05")}}),a("p",[t._v("ここは@tkglingが運営する姉妹サイトです.")]),a("div",{staticClass:"contents"},[a("h1",[t._v("本サイトの意味")]),a("p",[t._v(" 本サイト（tkgstrator.work）がPHPとSQLを組み合わせる動的サイトなのに対して最近覚えたVue.jsを使って静的サイトをつくってみようというのが本サイト設立のきっかけ. 記事とかを投稿する予定はいまのところなく, 適当につくったもののまとめページ的な存在として使いたい所存. ")])]),a("div",{staticClass:"contents"},[a("h1",[t._v("@tkglingとは")]),a("p",[t._v(" 友達がプレイしているスプラトゥーンをみていて「あれ, このキャラクター可愛くない？」とゲーム性よりもイカちゃんにドハマリした人. TPSやFPSはおろか, 10年近くコンシューマゲームから離れていたので最初の数戦のナワバリバトルで0キル60デスという記録を残す(スペシャルの使い方も全然わからんかった). ちょっと前までカナダでちまちまバイトしながら生活していたが, COVID-19の影響でレイオフされて現在は自宅でプログラミングをする毎日. ")])]),a("div",{staticClass:"contents"},[a("h1",[t._v("@tkglingを応援する")]),a("p",[t._v(" LanPlay, Salmoniaなどのツールは無料で誰でも自由にご利用いただけますが, 無償で提供している以上@tkglingは一円も利益を得ていません. 利益を得ていないということはこれらだけを開発していても収入を得ることが不可能で, それはつまり他に仕事をして生計を立てる必要があるということです. 他にやることがある以上, Salmoniaやそれらのツールだけの開発に専念することができないことをご了承ください. アップデートも可能な限り対応しますが, 確実なお約束はできません. ")]),a("p",[t._v(" ですが, もしもこれらの開発である程度の収入を得ることができるのであれば開発に割くことができる時間を増やすことができるはずです. ツールをより便利に, より安定したものにアップデートすることも可能でしょう. 言ってしまえば無償ツールであれば自分の趣味が失われれば放置してトンズラもできますが, お金を頂いているのであれば開発を続ける責任と義務が生じますし, 可能であれば自分もこれらのツールの開発を続けていきたいと思っているのもまた本心です. ")]),a("p",[t._v("なので, もしも@tkglingを応援・期待して（投資するともいいます）いただけたのであればご支援していただけるとありがたいです. PaypalとAmazonギフト券に対応しています.")]),a("li",[a("a",{attrs:{href:"https://www.paypal.me/salmonia"}},[t._v("PayPalで応援する")])]),a("li",[a("router-link",{attrs:{to:"/donate"}},[t._v("Amazonギフト券で応援する")])],1),a("li",[a("a",{attrs:{href:"https://www.amazon.co.jp/hz/wishlist/ls/1OVWKJ7C5R9XK"}},[t._v("ほしいものリストから何か送る")])])])])])},o=[]},7694:function(t,e,n){},"7ad4":function(t,e,n){"use strict";var a=n("ddbe"),o=n.n(a);e["default"]=o.a},"7fec":function(t,e,n){},bb51:function(t,e,n){"use strict";var a=n("6b99"),o=n("7ad4"),r=(n("cccb"),n("2877")),i=n("6544"),s=n.n(i),c=n("a523"),l=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports,s()(l,{VContainer:c["a"]})},cccb:function(t,e,n){"use strict";var a=n("4230"),o=n.n(a);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.46ca23ae.png"},ddbe:function(t,e){}});