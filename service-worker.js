/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5e37c885e6e94f9e7836c8ff9ae11c4d"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "6281d5d59edf42bee15706c66eb7495a"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "03741e5c145cb2e4fd2330a7f64016ac"
  },
  {
    "url": "Another/Project.html",
    "revision": "3a5ac112e6d84cadd0117034137a8e8a"
  },
  {
    "url": "Another/Review.html",
    "revision": "8ace09b2fc61074e444d375344a87587"
  },
  {
    "url": "assets/css/0.styles.efab919f.css",
    "revision": "05c798614e3dad2f347928dfbf3c3719"
  },
  {
    "url": "assets/img/001.b9fa5ca8.jpg",
    "revision": "b9fa5ca84f89cadc463d44c68ea8e33e"
  },
  {
    "url": "assets/img/002.3813aefb.jpg",
    "revision": "3813aefbd1ce44d9db5ed98db9cc0f4c"
  },
  {
    "url": "assets/img/003.d5ecd8fe.jpg",
    "revision": "d5ecd8fe28a5033d57d79f2bb9f4fb42"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/005.5ee4517a.jpg",
    "revision": "5ee4517ae8ecac8f06ba683930d8a7f3"
  },
  {
    "url": "assets/img/githubLink.7fabd7af.jpg",
    "revision": "7fabd7af2a1a06803aa35aabfe33c5a2"
  },
  {
    "url": "assets/img/google_analysis.2edd12f3.jpg",
    "revision": "2edd12f37a95dc9fe395cb91122332b9"
  },
  {
    "url": "assets/img/google_post.e19082be.jpg",
    "revision": "e19082be1304dc86ecea9fa64a2a1dad"
  },
  {
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
  },
  {
    "url": "assets/img/little_luffy.a6c7690d.png",
    "revision": "a6c7690d32cba92a1015f9b1c3ddce07"
  },
  {
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "assets/img/poke_ball.d6cc89a7.gif",
    "revision": "d6cc89a7bef9301e7e47242a3f046bbe"
  },
  {
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sw_popup_my.507a1597.png",
    "revision": "507a15970a1fbc312959602df805c514"
  },
  {
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/1.fe869874.js",
    "revision": "026d9f4ffa0095c1d00aa06ee2e5c0a5"
  },
  {
    "url": "assets/js/10.748d6e8a.js",
    "revision": "df08abe5a343fe7e561320034e3c376a"
  },
  {
    "url": "assets/js/11.734ead9f.js",
    "revision": "392bcd42b3d02c84de11c1fbc85874d7"
  },
  {
    "url": "assets/js/12.245d1692.js",
    "revision": "4c0737297611cac7d12048bac318fafc"
  },
  {
    "url": "assets/js/13.d6443efb.js",
    "revision": "afec5871e6dc02eaa8c76c0606689691"
  },
  {
    "url": "assets/js/14.448d1515.js",
    "revision": "ac922cf5e3b9fb66773711b67def6f35"
  },
  {
    "url": "assets/js/15.639965a9.js",
    "revision": "fc28bb380f64be100b4943865f44ba0e"
  },
  {
    "url": "assets/js/16.ecf73196.js",
    "revision": "c6748c58d985e1558faad5a6eea3cfde"
  },
  {
    "url": "assets/js/17.d8525821.js",
    "revision": "9685aa2209d96cfc68ce9ccf5b5a7406"
  },
  {
    "url": "assets/js/18.237af943.js",
    "revision": "1214d854867c2324c6724dbf3f276d6a"
  },
  {
    "url": "assets/js/19.487701cc.js",
    "revision": "d76b11f0dfa1c759e67134f8d3da6b21"
  },
  {
    "url": "assets/js/20.004309b5.js",
    "revision": "c120ab153309886495f5eff06fef5242"
  },
  {
    "url": "assets/js/21.d6e6b640.js",
    "revision": "2856d66cbaae756d995c1ed89dffb608"
  },
  {
    "url": "assets/js/22.f7c5dca7.js",
    "revision": "b3fc5914d8672496711028c05945b5be"
  },
  {
    "url": "assets/js/23.75770bfc.js",
    "revision": "72c8454e8fd082d805733aedc3012c29"
  },
  {
    "url": "assets/js/24.9bed2a9b.js",
    "revision": "4657812d13afb5846cac4d4dd0e8a312"
  },
  {
    "url": "assets/js/25.a0ddff36.js",
    "revision": "5b40c5750546ea36ebc652d8d7a73ebb"
  },
  {
    "url": "assets/js/26.66d3292e.js",
    "revision": "cd5678f97d6288b57fba11455e5126e0"
  },
  {
    "url": "assets/js/27.08c40953.js",
    "revision": "77228c5142df197e8814e3ace5200c9a"
  },
  {
    "url": "assets/js/28.ddaa48e2.js",
    "revision": "35abbfbf15ef8f95c73950fb85116c27"
  },
  {
    "url": "assets/js/29.a582b8a2.js",
    "revision": "67301f1d6bf298e079099cd127c70385"
  },
  {
    "url": "assets/js/3.8adedda8.js",
    "revision": "b56957fbade6b77c935690300f1fdd77"
  },
  {
    "url": "assets/js/30.578458cc.js",
    "revision": "e8f9ca219377332fe5f96460f766bae0"
  },
  {
    "url": "assets/js/31.30beac4b.js",
    "revision": "357ab54caa7c8fc8054c4acb1870e1bf"
  },
  {
    "url": "assets/js/32.604ec7bb.js",
    "revision": "7a2afeb25735a0e89931d1b296e73c99"
  },
  {
    "url": "assets/js/33.cccb923e.js",
    "revision": "e3e6392e01eba4a612b008ef5c288bdb"
  },
  {
    "url": "assets/js/34.8c672493.js",
    "revision": "db6622643345ad58ba8fe17e48bd00c0"
  },
  {
    "url": "assets/js/35.267d2011.js",
    "revision": "3ae6b92da94a9c8130f3eb5870a52af4"
  },
  {
    "url": "assets/js/36.4a2dbd2a.js",
    "revision": "3ef53325d921180291b9ae9bb85b0616"
  },
  {
    "url": "assets/js/37.7e4db4e1.js",
    "revision": "962ce1d0f1f3ba0decdab8d472a3cf11"
  },
  {
    "url": "assets/js/38.eb145807.js",
    "revision": "73f7665bfb453d30fe010b69d6023e95"
  },
  {
    "url": "assets/js/4.57ad6199.js",
    "revision": "a505c771850b3ea909dfc7dcd4879dc4"
  },
  {
    "url": "assets/js/5.a3dbb655.js",
    "revision": "56f09bc76787491a45857c23d843624d"
  },
  {
    "url": "assets/js/6.7f41c5ae.js",
    "revision": "bebc1505cbed8704f6b606a919930630"
  },
  {
    "url": "assets/js/7.8c463dcd.js",
    "revision": "86672ca7f2247e02dcf4c9f2086a3117"
  },
  {
    "url": "assets/js/8.f0e01754.js",
    "revision": "c4fd1a4f8a39c852be75c4b407b5ebc8"
  },
  {
    "url": "assets/js/9.3d4b2f2e.js",
    "revision": "a7732aa0a6bb9a7fd157981608cdf243"
  },
  {
    "url": "assets/js/app.31ef8f1e.js",
    "revision": "49be530ef5794cb5e97ca579e8f35a3c"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "72354a4f3f0d833ec8803359e5303659"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "594942b2b75fc9d69270fe99df60fe62"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "ad8935a7063e3406b49da11c08a32af6"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "441d1a5a62aa2769e3f6337b27c63517"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "2b468d4ead3c9fd0c75e6b53fb3aac56"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "1238c3a999f745689d95133250a38747"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "7a5fdbda278fb0b952e44bde15dd5f21"
  },
  {
    "url": "img/images.png",
    "revision": "124eacef3c84742af7451b26db7b294b"
  },
  {
    "url": "img/links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/little_luffy.png",
    "revision": "a6c7690d32cba92a1015f9b1c3ddce07"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.gif",
    "revision": "21d3e097707ea47c3be011cfbf50e93b"
  },
  {
    "url": "img/logo.jpg",
    "revision": "f513a6d436ef5cc5cbf273b9665816e0"
  },
  {
    "url": "img/logo.png",
    "revision": "03345d37b5250ea2d0a752481fd982b0"
  },
  {
    "url": "img/lol_yasso.jpg",
    "revision": "b1bf4c7d549b57218c62a2f232fe52eb"
  },
  {
    "url": "img/modelLeft.jpg",
    "revision": "998c2aecfad6fe303f29b4abdbc5e813"
  },
  {
    "url": "img/modelRight.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
  },
  {
    "url": "img/poke_ball.gif",
    "revision": "d6cc89a7bef9301e7e47242a3f046bbe"
  },
  {
    "url": "img/users/finen.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "img/users/orange.jpg",
    "revision": "dfdf9f5b6e8122ac76479ee38297b42e"
  },
  {
    "url": "img/wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "img/wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "img/wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "img/wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "img/wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "img/wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "img/wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "img/wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
  },
  {
    "url": "index.html",
    "revision": "8d7d7b0e974b84766dd6453344712df9"
  },
  {
    "url": "js/canvas_ribbon.js",
    "revision": "4a1db1906f8b1191f65f32752ee2cc61"
  },
  {
    "url": "js/loadAsyncScript.js",
    "revision": "60cd267be0386002d2041e0f7674133e"
  },
  {
    "url": "lib/bomb.js",
    "revision": "52bcbf8f12e13c4b88a64074af99149a"
  },
  {
    "url": "lib/L2Dwidget.0.min.js",
    "revision": "f9c7211c9fab319db580d8c2e75e62a9"
  },
  {
    "url": "lib/L2Dwidget.min.js",
    "revision": "c7ee4e8c7c9dd8f6abea404eaf68e30a"
  },
  {
    "url": "live2dModels/demo.html",
    "revision": "78d1aa185e192a9340e8109c15e4b083"
  },
  {
    "url": "live2dModels/live2d/css/live2d_xiaoban.css",
    "revision": "9e48ebaac7e67f408cb32a01b0d78db8"
  },
  {
    "url": "live2dModels/live2d/css/live2d.css",
    "revision": "e460c988554ef76d5f4479976c62de88"
  },
  {
    "url": "live2dModels/live2d/css/wife.css",
    "revision": "d1f32639be1b0ce59a352bf95eab3f91"
  },
  {
    "url": "live2dModels/live2d/js/live2d.js",
    "revision": "39bed86fa5a22c8c902ef38b543734b3"
  },
  {
    "url": "live2dModels/live2d/js/message.js",
    "revision": "233de74bff11344bdd871267bf119ab1"
  },
  {
    "url": "live2dModels/live2d/js/wife.js",
    "revision": "c7288ba107510e3eb3ff30326e400616"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2016.xmas/texture_01.png",
    "revision": "63341fb53356574f0675f1e715012716"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2016.xmas/texture_02.png",
    "revision": "20494a1fea4e1515eaeb80c9a48ae80d"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2016.xmas/texture_03_1.png",
    "revision": "50565b1ee73536ecdbab36c6872841a6"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2016.xmas/texture_03_2.png",
    "revision": "e51ac78ba1c7e67950300d6b94b2c3c6"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.cba-normal/texture_01.png",
    "revision": "b65c4a7d19a71d0193b91ecb61ba9b54"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.cba-normal/texture_02.png",
    "revision": "8d7736ebf957f305d8a2ff9692789dd2"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.cba-normal/texture_03.png",
    "revision": "bb20d37476dbaa2e1945f316ded3c52e"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.cba-super/texture_01.png",
    "revision": "bfd113fdb26c4463dfbc9854f4a797a3"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.cba-super/texture_02.png",
    "revision": "01c80a87541e299503ade422c4ad3ff0"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.cba-super/texture_03.png",
    "revision": "bb20d37476dbaa2e1945f316ded3c52e"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.newyear/texture_01.png",
    "revision": "c5b74274e5cb2c611f1fe915879cab4a"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.newyear/texture_02.png",
    "revision": "971a86fb8a55fd85c1633bc0d2fc2e14"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.newyear/texture_03.png",
    "revision": "99b4c1cb8b2b1cd31996c47da8f09e49"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.school/texture_01.png",
    "revision": "4face07d63e41b82b49ba81f673a6745"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.school/texture_02.png",
    "revision": "78c2f7776be314023119bec23e26c575"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.school/texture_03.png",
    "revision": "3f3c13b6099ccd48e3e161e36678f51e"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.summer.normal/texture_01.png",
    "revision": "cc4899b11e4c1f22fd6354604ec461d7"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.summer.normal/texture_02.png",
    "revision": "eaab66805c7d54a4e47c2ca9ff1bd9ec"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.summer.normal/texture_03_1.png",
    "revision": "8033c2b67738614fa5283306cb69c281"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.summer.normal/texture_03_2.png",
    "revision": "602fa57f8304b894648bb6e69dd51a88"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.summer.super/texture_01.png",
    "revision": "5e0e4f87c8d6bd5e774f3514b0adb891"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.summer.super/texture_02.png",
    "revision": "3b3be38acc8060a1e422f518d08e5175"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.summer.super/texture_03_1.png",
    "revision": "8033c2b67738614fa5283306cb69c281"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.summer.super/texture_03_2.png",
    "revision": "602fa57f8304b894648bb6e69dd51a88"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.tomo-bukatsu.high/texture_01.png",
    "revision": "35e56980eb1126746d3edb0096939a0f"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.tomo-bukatsu.high/texture_02.png",
    "revision": "027078b71799003008b223a585b9bc3d"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.tomo-bukatsu.high/texture_03.png",
    "revision": "2ccdba9b978542501051500aff8f9420"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.tomo-bukatsu.low/texture_01.png",
    "revision": "855dda8cb9573c0a0b8708e3acea2b56"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.tomo-bukatsu.low/texture_02.png",
    "revision": "5657f6c91bae74d4c493377a4aa115ce"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.tomo-bukatsu.low/texture_03.png",
    "revision": "00c01f994775626e4a4bc65b21cef57c"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.valley/texture_01.png",
    "revision": "487c55960893a9d3833cd53ffe5a9ba7"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.valley/texture_02.png",
    "revision": "9a155d5c94b285ad2726114894d25c16"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.valley/texture_03.png",
    "revision": "979b2eec4d56803218df33aceff033ad"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.vdays/texture_01.png",
    "revision": "afc88b7aec7dc859b3b7b1772c5fd48c"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.vdays/texture_02.png",
    "revision": "fc095afeeae1c1955bcefa1d0a2ea9ef"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2017.vdays/texture_03.png",
    "revision": "a6eddbe0a23ac31b9e1d33edc544a9f2"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.bls-summer/texture_01.png",
    "revision": "2cd3377420ae60850a45e7bbf9396ff9"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.bls-summer/texture_02.png",
    "revision": "62b06d84ac1c2a88be21bf22392c8823"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.bls-summer/texture_03.png",
    "revision": "d5f50ee5d3aa8a555b568cab1d3ab1f2"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.bls-winter/texture_01.png",
    "revision": "4cb034944d850069f630ce43c14ba29c"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.bls-winter/texture_02.png",
    "revision": "aaa5be09a8a0074b40798c505f22358f"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.bls-winter/texture_03.png",
    "revision": "9f4ca435deb101516ca68454ee880741"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.lover/texture_01.png",
    "revision": "5cd5ecb5d3ce951ed04ddb6f83da120d"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.lover/texture_02.png",
    "revision": "b7b96732c7c2354eb4392dae670eed41"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.lover/texture_03.png",
    "revision": "915c59ad23c6a1700b93a84783282cf9"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.spring/texture_01.png",
    "revision": "111f42b5f8ece92b9df9f9db8760516a"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.spring/texture_02.png",
    "revision": "526a98b2f2fb32902006392a42ed8e34"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.2018.spring/texture_03.png",
    "revision": "8d0052424548e063f74a024e0b6b954e"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.default.v2/texture_00.png",
    "revision": "3b25bafe060883837bc59ac3d7d13985"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.default.v2/texture_01.png",
    "revision": "c2ea84dd614477162463a727cba06061"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.default.v2/texture_02.png",
    "revision": "827dcaace5dc27ddbe297902db1fd02b"
  },
  {
    "url": "live2dModels/live2d/model/22/22.1024/closet.default.v2/texture_03.png",
    "revision": "d6caab31b818ad9de9e3ae8d7538a47b"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2016.xmas/texture_01.png",
    "revision": "2bcf94bc9d9ce523fad40f254822fff0"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2016.xmas/texture_02.png",
    "revision": "6e34e2f4df0e4d038ecdf83a3b173cde"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2016.xmas/texture_03_1.png",
    "revision": "d0bbb2defaecb5d4c0ef52ab360c3265"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2016.xmas/texture_03_2.png",
    "revision": "eb41b0556d6d31fe17d2032b3632c778"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.cba-normal/texture_01.png",
    "revision": "cbdb60dc59b6a08c64821aaa97512742"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.cba-normal/texture_02.png",
    "revision": "13ad7bf3aa1a42a5e1dd1e2f31ea31da"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.cba-normal/texture_03.png",
    "revision": "7f42a4d361ac032cd737e695a7feba1d"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.cba-super/texture_01.png",
    "revision": "758799940c83fae9c2ae914e53524ed2"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.cba-super/texture_02.png",
    "revision": "9e502802683d219c7affecc3e291dd92"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.cba-super/texture_03.png",
    "revision": "7f42a4d361ac032cd737e695a7feba1d"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.newyear/texture_01.png",
    "revision": "f15ada8a27eb4431e81c36582ad4c5eb"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.newyear/texture_02.png",
    "revision": "7e33d1c03c5916193050f71341b4a7a8"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.newyear/texture_03.png",
    "revision": "4aa01901e8825803f713dcc936358a15"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.school/texture_01.png",
    "revision": "defcfa6952f742dda0e1db15a1a36f1a"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.school/texture_02.png",
    "revision": "4387272e066ab932ebbf3465aae7521c"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.school/texture_03.png",
    "revision": "4ad14efbe80725cd817dfea8adee4e04"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.summer.normal/texture_01.png",
    "revision": "1952c6094c4a6395fcc220ff3cb5b13e"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.summer.normal/texture_02.png",
    "revision": "0352fb78c14e385aca9404819d44ca30"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.summer.normal/texture_03_1.png",
    "revision": "27419e6883558b98d87defd1a68c042d"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.summer.normal/texture_03_2.png",
    "revision": "3b1ee34c813f7646d5c4955cc724426d"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.summer.super/texture_01.png",
    "revision": "f1ffb745920c7e6647ec5f3bf5505434"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.summer.super/texture_02.png",
    "revision": "3f7cf4cc9d5e25f164d85c7ba58e84f6"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.summer.super/texture_03_1.png",
    "revision": "27419e6883558b98d87defd1a68c042d"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.summer.super/texture_03_2.png",
    "revision": "3b1ee34c813f7646d5c4955cc724426d"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.tomo-bukatsu.high/texture_01.png",
    "revision": "adaae15046f327ca0487b3fa7eb4a851"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.tomo-bukatsu.high/texture_02.png",
    "revision": "79b74fc078412d335029e51a60b5d52e"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.tomo-bukatsu.high/texture_03.png",
    "revision": "cae282aed0ee8820ce2466700537adce"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.tomo-bukatsu.low/texture_01.png",
    "revision": "f7787616bb8becf875eb2287cd5b75e0"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.tomo-bukatsu.low/texture_02.png",
    "revision": "29f35b59f6c42324d19f0f3ab08ba050"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.tomo-bukatsu.low/texture_03.png",
    "revision": "8fc09a82177fb337f9cc20856e46037c"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.valley/texture_01.png",
    "revision": "1a8b5d61f235847e1819f1c18bfb50be"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.valley/texture_02.png",
    "revision": "11a57782793a2932ea8c42e7affbd589"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.valley/texture_03.png",
    "revision": "97445440e605da915613e44ff7829656"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.vdays/texture_01.png",
    "revision": "e1ff4f7a54645a73a4a68b2d8d4809c4"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.vdays/texture_02.png",
    "revision": "116183fcdd5f52e08be83f17ac36f0fb"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2017.vdays/texture_03.png",
    "revision": "7723d023b27259ad45e09bde6c7acb79"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.bls-summer/texture_01.png",
    "revision": "3bc34d3d7ee364fdb5ec3b29360b81d3"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.bls-summer/texture_02.png",
    "revision": "44aecaf97661c4436487b0003c0f2b05"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.bls-summer/texture_03.png",
    "revision": "530b5076465faa9fe50b10f37fd8a238"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.bls-winter/texture_01.png",
    "revision": "81d3667ecf365b72a60334e945c876e8"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.bls-winter/texture_02.png",
    "revision": "e59104f54881a99644383ae90fac5bc4"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.bls-winter/texture_03.png",
    "revision": "702ab2516adf58700879ecfe0e1e5868"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.lover/texture_01.png",
    "revision": "86c09cc094a2ce258562d2bcd06b1d82"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.lover/texture_02.png",
    "revision": "6582de8e686bc673ab94626a7f40de52"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.lover/texture_03.png",
    "revision": "42fb0c3df5d37d37aa9a1777501dc480"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.spring/texture_01.png",
    "revision": "2a1b2ac3471f8f62258fbf0bd369d726"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.spring/texture_02.png",
    "revision": "3b9ad7e69909bea9a4a9d31787079cbc"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.2018.spring/texture_03.png",
    "revision": "13c77f51a6aabe3ca2d525813d6ac3c2"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.default.v2/texture_00.png",
    "revision": "121525748ef0a5beffc4adcef1e8385f"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.default.v2/texture_01.png",
    "revision": "45954db1e5f5703228a389e2f341b83d"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.default.v2/texture_02.png",
    "revision": "ebad9aa8610cff82e9edbc02b8b6c6ba"
  },
  {
    "url": "live2dModels/live2d/model/33/33.1024/closet.default.v2/texture_03.png",
    "revision": "ff84419bbde867efa962b8d9c2d3457c"
  },
  {
    "url": "live2dModels/live2d/model/epsilon/moc/Epsilon2.1.2048/texture_00.png",
    "revision": "abee4cdeb8018032163ffdc0a16020b0"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_classic/textures.1024/00.png",
    "revision": "9d0c689285e6021efdc75656dd0cdd5f"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_classic/textures.1024/01.png",
    "revision": "6c0151376e387aa3c0c1545458227e95"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_classic/textures.1024/02.png",
    "revision": "7f065538a31167a833cf9e91ae2754bf"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_classic/textures.1024/03.png",
    "revision": "4bffae039fdbdb6e126e1bceabf6852d"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_normal/textures.1024/00.png",
    "revision": "9d0c689285e6021efdc75656dd0cdd5f"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_normal/textures.1024/01.png",
    "revision": "6c0151376e387aa3c0c1545458227e95"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_normal/textures.1024/02.png",
    "revision": "06fac404eb7ce7576c27408a66d2d195"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_normal/textures.1024/03.png",
    "revision": "a7db1d8ecc7fa18c461c4169ba4ae706"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_swimwear/textures.1024/00.png",
    "revision": "9d0c689285e6021efdc75656dd0cdd5f"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_swimwear/textures.1024/01.png",
    "revision": "256e987dbccb87793437690cab5ebbdd"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/blanc_swimwear/textures.1024/02.png",
    "revision": "01506addfc8c859d82c0d02fe322062e"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/histoire/textures.1024/00.png",
    "revision": "45552f931019f59422e912d74277671d"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/histoire/textures.1024/01.png",
    "revision": "8a7ea0601f56314cabe3554b363ea193"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/histoire/textures.1024/02.png",
    "revision": "4d9ed0f240ae7242f70e8ca245f40610"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/histoire/textures.1024/03.png",
    "revision": "c56fe341422cd8f8e1b627d18881f156"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/histoirenohover/textures.1024/00.png",
    "revision": "45552f931019f59422e912d74277671d"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/histoirenohover/textures.1024/01.png",
    "revision": "8a7ea0601f56314cabe3554b363ea193"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/histoirenohover/textures.1024/02.png",
    "revision": "4d9ed0f240ae7242f70e8ca245f40610"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/histoirenohover/textures.1024/03.png",
    "revision": "c56fe341422cd8f8e1b627d18881f156"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_default/textures.1024/00.png",
    "revision": "9b7f9c129596ba92319a14196bebff81"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_default/textures.1024/01.png",
    "revision": "8b1d2336dd37cd8a8c3b760e73108c4a"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_default/textures.1024/02.png",
    "revision": "a7fc5f441b3873a2a9617c3194f81935"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_default/textures.1024/03.png",
    "revision": "ab748b6b04b8f4653a65057e2b8cb88f"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_extra/textures.1024/00.png",
    "revision": "6816376f851dcd084a923e1d87bfe6a3"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_extra/textures.1024/01.png",
    "revision": "e7a8948cb249938c96b5661e51d61cf6"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_extra/textures.1024/02.png",
    "revision": "ce91d5e1626c30022d50e6c75c6789b1"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_extra/textures.1024/03.png",
    "revision": "1918cb5ad275f2797938b255a859ffd7"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgearswim/textures.1024/00.png",
    "revision": "9b7f9c129596ba92319a14196bebff81"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgearswim/textures.1024/01.png",
    "revision": "8b1d2336dd37cd8a8c3b760e73108c4a"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgearswim/textures.1024/02.png",
    "revision": "785652eb751b6c0fa72b160fee9b3791"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepgearswim/textures.1024/03.png",
    "revision": "3e8267a0afd9101961d843bab1d5b705"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepmaid/textures.1024/00.png",
    "revision": "318efe6cbd2ae78487afe1ca3858b150"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepmaid/textures.1024/01.png",
    "revision": "c69c1d64699e43e2553f0cb094c4facc"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepmaid/textures.1024/02.png",
    "revision": "8c35940c4c8a007833d30fc512555416"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepnep/textures.1024/00.png",
    "revision": "318efe6cbd2ae78487afe1ca3858b150"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepnep/textures.1024/01.png",
    "revision": "c69c1d64699e43e2553f0cb094c4facc"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepnep/textures.1024/02.png",
    "revision": "16d8e01a69d41333d065bff2f4ac5bae"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepswim/textures.1024/00.png",
    "revision": "318efe6cbd2ae78487afe1ca3858b150"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepswim/textures.1024/01.png",
    "revision": "c69c1d64699e43e2553f0cb094c4facc"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/nepswim/textures.1024/02.png",
    "revision": "eb9b00a62e9dc676166e86e0c513b3c9"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/neptune_classic/textures.1024/00.png",
    "revision": "318efe6cbd2ae78487afe1ca3858b150"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/neptune_classic/textures.1024/01.png",
    "revision": "04ab2348970a7d57364846c7adfbedbc"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/neptune_classic/textures.1024/02.png",
    "revision": "03378670972cf1fe424efb70e95ac47b"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/neptune_santa/textures.1024/00.png",
    "revision": "318efe6cbd2ae78487afe1ca3858b150"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/neptune_santa/textures.1024/01.png",
    "revision": "04ab2348970a7d57364846c7adfbedbc"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/neptune_santa/textures.1024/02.png",
    "revision": "41c5250769ad4927fa842eb6229ab3c9"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_classic/textures.1024/00.png",
    "revision": "26e570fe69e86985eb5e19654171a648"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_classic/textures.1024/01.png",
    "revision": "bb72d2b90e1efac90dfa5c555de4fca5"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_classic/textures.1024/02.png",
    "revision": "db1362999c2e8949851b8af461cb499c"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_default/textures.1024/00.png",
    "revision": "26e570fe69e86985eb5e19654171a648"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_default/textures.1024/01.png",
    "revision": "bb72d2b90e1efac90dfa5c555de4fca5"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_default/textures.1024/02.png",
    "revision": "ff789d0058cb3178013d5a60ed83c0e0"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_santa/textures.1024/00.png",
    "revision": "26e570fe69e86985eb5e19654171a648"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_santa/textures.1024/01.png",
    "revision": "bb72d2b90e1efac90dfa5c555de4fca5"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noir_santa/textures.1024/02.png",
    "revision": "5eed30ce6845c8d0901d4a99345112eb"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noireswim/textures.1024/00.png",
    "revision": "26e570fe69e86985eb5e19654171a648"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noireswim/textures.1024/01.png",
    "revision": "bb72d2b90e1efac90dfa5c555de4fca5"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/noireswim/textures.1024/02.png",
    "revision": "40b387f0fbf3ea6f31bd4ee631d1543e"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_classic/textures.1024/00.png",
    "revision": "355595542ce8b87e3c01ddf6df88d630"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_classic/textures.1024/01.png",
    "revision": "0961e2d850247ca9b4c8ce261c1df13f"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_classic/textures.1024/02.png",
    "revision": "3f2ede6201f36fb4054f545b1210fbe8"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_classic/textures.1024/03.png",
    "revision": "e12e95e1975953711ded30593b7436d1"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_normal/textures.1024/00.png",
    "revision": "355595542ce8b87e3c01ddf6df88d630"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_normal/textures.1024/01.png",
    "revision": "0961e2d850247ca9b4c8ce261c1df13f"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_normal/textures.1024/02.png",
    "revision": "1f0a36d7abef0cf615b34f3eadc25042"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_normal/textures.1024/03.png",
    "revision": "9e969e5137242f83c4416bb08cde6b7b"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_swimwear/textures.1024/00.png",
    "revision": "355595542ce8b87e3c01ddf6df88d630"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_swimwear/textures.1024/01.png",
    "revision": "0961e2d850247ca9b4c8ce261c1df13f"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_swimwear/textures.1024/02.png",
    "revision": "5230c719aed0724fc97e231a7ef25c58"
  },
  {
    "url": "live2dModels/live2d/model/HyperdimensionNeptunia/vert_swimwear/textures.1024/03.png",
    "revision": "8c4e10348c7b42598c16dfb0cb21f8be"
  },
  {
    "url": "live2dModels/live2d/model/kesshouban/textures/texture_00.png",
    "revision": "2e6411636e81d3e58e8315bfa586ba8d"
  },
  {
    "url": "live2dModels/live2d/model/miku/15.jpg",
    "revision": "e17ee7dfb7498cf9b6adb314652e91ac"
  },
  {
    "url": "live2dModels/live2d/model/murakumo/textures.1024/00.png",
    "revision": "a6e1e162ce3db2e76b572f6c62821ba6"
  },
  {
    "url": "live2dModels/live2d/model/nero/17.jpg",
    "revision": "55747baef5cbab1060f7c483ba540cc7"
  },
  {
    "url": "live2dModels/live2d/model/pio/getJSON.js",
    "revision": "209eb0430abc719b598014fc1ddaa1a6"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/0.png",
    "revision": "589c5e0d0af529bf2105223f5b07743e"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/1.png",
    "revision": "f019f0e114e00d873921957239da9948"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/10.png",
    "revision": "3da14d96bf5b1a7acb9e99e456878683"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/11.png",
    "revision": "ac2f96a0f875ae72880f2be18597de71"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/12.png",
    "revision": "eaf0dae1d65587db28f9381efb6a2aee"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/13.png",
    "revision": "232d84a83c6b1e5b9bd09043fa8cc022"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/14.png",
    "revision": "3fbcaaa40b17ba4334d294c28aedce0c"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/15.png",
    "revision": "9bb8dd82bc906fb60ee55d1030c676a8"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/16.png",
    "revision": "9dbd01c19000c98bd19450aab7e166c7"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/17.png",
    "revision": "aa8d1f95975de14cb0e8d7efa2cf46cd"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/18.png",
    "revision": "3fcc8fc8478cbfb3efb5eb5337533f31"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/19.png",
    "revision": "555f955641a0efe437e4209504bf90f5"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/2.png",
    "revision": "fd150e783c4e9f43266ba8595eb170ad"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/20.png",
    "revision": "d67c4aa0270b88d3b36bc9856d4c08b1"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/21.png",
    "revision": "70a2e22dfb1786f9275646a9d902d212"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/22.png",
    "revision": "d6eaf5472fa693cc20aec882c48a7cf8"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/23.png",
    "revision": "e91c01cbe27d7fff5798c61fcbaae2ba"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/24.png",
    "revision": "22073d5b44d7076d8446a45462452f23"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/25.png",
    "revision": "7e541e43e01dbc3ff4954f10e6ce7c81"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/26.png",
    "revision": "44095a4a95e49f65bb45340566181fe8"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/27.png",
    "revision": "be3983955fd060e290f63deb0651fe6e"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/28.png",
    "revision": "77f6d468da4e3a64e628cb70110e4bd8"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/29.png",
    "revision": "b10bc67d2406c4d03433e8e4462f47b3"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/3.png",
    "revision": "1604fdcfc62e420c240dc7c931b4ab79"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/30.png",
    "revision": "9bfbe84595123699526b59ebae1bc520"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/31.png",
    "revision": "beaa0699b9df759f8068886ac910d3ef"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/32.png",
    "revision": "c50744c50f719aad2a5dde5731755490"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/33.png",
    "revision": "a85c56ea23edbfb5dafae69bb5d3497b"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/34.png",
    "revision": "7e9cfd052ff915b655eae6cf6f2e454b"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/35.png",
    "revision": "09e7b605575a63e27b033d87fef6b162"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/36.png",
    "revision": "d8f77264282e2fed946721a13661b9e5"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/37.png",
    "revision": "125aff5644c4803497ead55609f636d2"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/38.png",
    "revision": "b9a0fbb1ef74dc2a9dec86e8e4492b74"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/39.png",
    "revision": "637e1345a20954aa51a80ca7fdea1881"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/4.png",
    "revision": "d0452dd45809d14eca4d8c651aadb809"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/40.png",
    "revision": "03a43c659223acadd0ee6c15e46f339f"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/41.png",
    "revision": "255eb9bf5f863e6c35e38f70445c9849"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/42.png",
    "revision": "3e69ec40d92a86256f459fffbf986fac"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/43.png",
    "revision": "7bfdbc7718fd613a176e9d89dd4ed4d7"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/44.png",
    "revision": "fcdd89878365c7ff017d6de91967f19d"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/45.png",
    "revision": "d912848919fc97a147de8a41cb4ceea7"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/46.png",
    "revision": "9a4050e463c9721c3e68728e07b15b17"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/47.png",
    "revision": "224ed13f035f30fb65fd730acd8ee4ab"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/48.png",
    "revision": "b8016d14b9e24392ede728a7532eb097"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/49.png",
    "revision": "75aeb4f3d0df5130651c82f5f9b0aedb"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/5.png",
    "revision": "7d5cd87a5377f5d25740dd3055cb6554"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/50.png",
    "revision": "112d7b16c58ff2ad931b01e28d74f01c"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/6.png",
    "revision": "7108196ab91086524fc671a23eecb4fb"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/7.png",
    "revision": "208f6d752b5fd1a5c7c372714ecf9845"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/8.png",
    "revision": "12bc692819d62afd273399ce9dd5b5ab"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/9.png",
    "revision": "df1d786de387426e7cb3884ce5a8df57"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/default-costume.png",
    "revision": "125aff5644c4803497ead55609f636d2"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/pajamas-costume.png",
    "revision": "d67c4aa0270b88d3b36bc9856d4c08b1"
  },
  {
    "url": "live2dModels/live2d/model/pio/textures/school-costume.png",
    "revision": "e91c01cbe27d7fff5798c61fcbaae2ba"
  },
  {
    "url": "live2dModels/live2d/model/remu/11.jpg",
    "revision": "ca04cd60a4f26d8e965a1acde0edcdda"
  },
  {
    "url": "live2dModels/live2d/model/remu/remu2048/texture_00.png",
    "revision": "28e5e7d70b20a30a2ce1dd48e88e960e"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-48/textures.512/00.png",
    "revision": "65f35fe8642a9a7fa36df5fdaa455e65"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-48/textures.512/01.png",
    "revision": "cd908aa9a1cd257a90c1e9d1fa537153"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-48/textures.512/02.png",
    "revision": "0a60d532b129f3b9fd0b579771cb55b4"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-48/textures.512/03.png",
    "revision": "cc8e797d1162bdca5a7d34b80ba773df"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-48/textures.512/04.png",
    "revision": "95338fe1ad033d97f4328a3f49c73a76"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-48/textures.512/05.png",
    "revision": "f940ba794b80b35cdc620d715b03d369"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-48/textures.512/06.png",
    "revision": "65f35fe8642a9a7fa36df5fdaa455e65"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-48/textures.512/07.png",
    "revision": "65f35fe8642a9a7fa36df5fdaa455e65"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/00.png",
    "revision": "65f35fe8642a9a7fa36df5fdaa455e65"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/01.png",
    "revision": "0a60d532b129f3b9fd0b579771cb55b4"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/02.png",
    "revision": "23ceac1e2295b76b9376c9360c8be10c"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/03.png",
    "revision": "95338fe1ad033d97f4328a3f49c73a76"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/04.png",
    "revision": "1091e937e2e1745cd915da007849a49f"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/05.png",
    "revision": "f940ba794b80b35cdc620d715b03d369"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/06.png",
    "revision": "65f35fe8642a9a7fa36df5fdaa455e65"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/07.png",
    "revision": "65f35fe8642a9a7fa36df5fdaa455e65"
  },
  {
    "url": "live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/textures.512/08.png",
    "revision": "65f35fe8642a9a7fa36df5fdaa455e65"
  },
  {
    "url": "live2dModels/live2d/model/tamamo/16.jpg",
    "revision": "4d3ad59a89371670d0a5ba1c54e08a89"
  },
  {
    "url": "live2dModels/live2d/model/tia/textures/13.png",
    "revision": "232d84a83c6b1e5b9bd09043fa8cc022"
  },
  {
    "url": "live2dModels/live2d/model/tia/textures/14.png",
    "revision": "3fbcaaa40b17ba4334d294c28aedce0c"
  },
  {
    "url": "live2dModels/live2d/model/tia/textures/9.png",
    "revision": "df1d786de387426e7cb3884ce5a8df57"
  },
  {
    "url": "live2dModels/live2d/model/tia/textures/default-costume.png",
    "revision": "68187b65d79e05a7144b8b13d2962709"
  },
  {
    "url": "live2dModels/live2d/model/tia/textures/jersey-costume-blue.png",
    "revision": "da158e8949a46da85ad92779e93700e8"
  },
  {
    "url": "live2dModels/live2d/model/tia/textures/pajamas-costume-green.png",
    "revision": "68def1fa8a60bf5a69189d89e96d20ee"
  },
  {
    "url": "live2dModels/live2d/model/umaru/13.jpg",
    "revision": "6fcf123674cf28b91837605f7a835c84"
  },
  {
    "url": "live2dModels/live2d/model/violet/14.jpg",
    "revision": "65837c79f3bcfe24441c850e721c65d3"
  },
  {
    "url": "live2dModels/live2d/model/violet/Violet.1024/texture_00.png",
    "revision": "00c034d08af4966cf79d634b9c0cb060"
  },
  {
    "url": "live2dModels/live2d/model/xiaoban/model.2048/texture_00.png",
    "revision": "2e6411636e81d3e58e8315bfa586ba8d"
  },
  {
    "url": "live2dModels/live2d/model/z16/moc/z16.1024/texture_00.png",
    "revision": "0a1969e9c0d0f1509604bb2b19de0783"
  },
  {
    "url": "live2dModels/live2d/model/z16/moc/z16.256/texture_00.png",
    "revision": "b925d20a4fdfe8a65b09199a1224e581"
  },
  {
    "url": "live2dModels/live2d/model/z16/moc/z16.512/texture_00.png",
    "revision": "96f5efb6dd9e3c69de8424b142214452"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "dba011065509153b578fe35feb5d04a5"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "eece53027a05cf283da60bbe7addd24e"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "b8af1b30bb473ad000a4801183caaf5d"
  },
  {
    "url": "Store/index.html",
    "revision": "6a0213c0e292b4cfe9301db92a57f2f2"
  },
  {
    "url": "Thought/index.html",
    "revision": "6ae0f293a2eaff2e33359c8616f6acdd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
