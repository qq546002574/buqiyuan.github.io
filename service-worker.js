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
    "revision": "e04794e551d5cd9b3b1457dd56047468"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "68323e3d4ecae65d0ad9081822b4666e"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "b2ccb6e4a87a8fb1c4773ebd4eb03467"
  },
  {
    "url": "Another/Project.html",
    "revision": "c2c4ff9d61283e89a01d91cc182f83ed"
  },
  {
    "url": "Another/Review.html",
    "revision": "433460376dcb8a834be34cc55d32820f"
  },
  {
    "url": "assets/css/0.styles.260327ac.css",
    "revision": "3f59ff991a6b1a5016919976b2a727a6"
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
    "url": "assets/js/1.4c70b22e.js",
    "revision": "bf419d82ecb82512eb99ac08ae4ad69e"
  },
  {
    "url": "assets/js/10.a0a3fc25.js",
    "revision": "1b6cafa006e60ce77148fb05ad6a2376"
  },
  {
    "url": "assets/js/11.23e73723.js",
    "revision": "c7ddcbb1750010968b9f873332237d93"
  },
  {
    "url": "assets/js/12.25ff6a6b.js",
    "revision": "e21a0c35a9300aa7479e903e5ae7e97c"
  },
  {
    "url": "assets/js/13.4f352fa7.js",
    "revision": "c02496f7db45646f9f37b4a6b7055738"
  },
  {
    "url": "assets/js/14.b50adc19.js",
    "revision": "778b9c76f475397f202b6907f9fc33fa"
  },
  {
    "url": "assets/js/15.1fe2d013.js",
    "revision": "2b3333edcd96e2e53a65b275daba82ef"
  },
  {
    "url": "assets/js/16.2cf613bf.js",
    "revision": "236c26f723953b621af390241103acff"
  },
  {
    "url": "assets/js/17.121baac9.js",
    "revision": "aa23b65d67f6df8a06888f6ec226781a"
  },
  {
    "url": "assets/js/18.e0e4dc70.js",
    "revision": "e7c77f2fca796d236d400e3e4a4e2c93"
  },
  {
    "url": "assets/js/19.ea8f7ee4.js",
    "revision": "0088fd5f32d3d8d6fb107d8221a7b574"
  },
  {
    "url": "assets/js/2.223feb7e.js",
    "revision": "a43afad8968e11ebf7a2f9e4a625c716"
  },
  {
    "url": "assets/js/20.50140870.js",
    "revision": "ebe37dfac4a54336f6c30db8eddf0dd2"
  },
  {
    "url": "assets/js/21.f49c89e2.js",
    "revision": "5829d31863c07be3616719549c1c0bce"
  },
  {
    "url": "assets/js/22.2479b232.js",
    "revision": "0b402d5b0af329a369ceab9f11b2792d"
  },
  {
    "url": "assets/js/23.0b21ac55.js",
    "revision": "75063108ecc2109ed4d3555b2e9fa4a5"
  },
  {
    "url": "assets/js/24.20455b99.js",
    "revision": "a49e37f97cf59f76101ba593e503d115"
  },
  {
    "url": "assets/js/25.6887d7d6.js",
    "revision": "8ad9ffe84cdb46b1dea911554b9c0c4b"
  },
  {
    "url": "assets/js/26.20bc23eb.js",
    "revision": "46e8f591294f0d904eb9d859ad46d015"
  },
  {
    "url": "assets/js/27.70ed33e2.js",
    "revision": "984cf74fd696dc1f51014cd7cc189f7c"
  },
  {
    "url": "assets/js/28.346d5e0e.js",
    "revision": "9203f5b5713e90cac34e9d31c8f5bf7c"
  },
  {
    "url": "assets/js/29.f18cdb2f.js",
    "revision": "c4c2f820c134b6c411562d06656f7e60"
  },
  {
    "url": "assets/js/30.b1bf17fb.js",
    "revision": "0e45501a09aa1fb4e8cb3f94fd87fc81"
  },
  {
    "url": "assets/js/31.4778f560.js",
    "revision": "52a7ee523b6ab8848ae27ccce6d1c08b"
  },
  {
    "url": "assets/js/32.d98ebb0a.js",
    "revision": "81c854d7d81a455ca84751eb081b1854"
  },
  {
    "url": "assets/js/33.27ba1e21.js",
    "revision": "aeaee2a2cf63fd18c79e956c0da5335a"
  },
  {
    "url": "assets/js/34.83f5a2a6.js",
    "revision": "d7a90242b07e06f8cefe918d7d5ea9a2"
  },
  {
    "url": "assets/js/35.aaec1851.js",
    "revision": "bc9955c64aa4bac16dbb6d54eceadc02"
  },
  {
    "url": "assets/js/36.df5615f5.js",
    "revision": "d85166f3f7cccff1d1148c5ab3e96dab"
  },
  {
    "url": "assets/js/37.a29fad89.js",
    "revision": "c01c03c6e414979f385feefb4dc273a9"
  },
  {
    "url": "assets/js/38.0c2dce70.js",
    "revision": "766bc6f6fe33ec259a42ffaf39ca7339"
  },
  {
    "url": "assets/js/4.9fb5e8b1.js",
    "revision": "57e58aad09ea8990a0bf12be2e599ba5"
  },
  {
    "url": "assets/js/5.da7b1c48.js",
    "revision": "c11a50bdebb62f2dcc34647c500a1233"
  },
  {
    "url": "assets/js/6.03148bf4.js",
    "revision": "cc6011593c8ce3b9728771fde0652448"
  },
  {
    "url": "assets/js/7.12b10d64.js",
    "revision": "2e74ac9ed73ee156a68ec2a5cfebc851"
  },
  {
    "url": "assets/js/8.e16909ad.js",
    "revision": "d52568b05b30c03bfde241388f77132b"
  },
  {
    "url": "assets/js/9.0d9d4cf5.js",
    "revision": "578988e465caab5f329366942869120c"
  },
  {
    "url": "assets/js/app.90f42eb4.js",
    "revision": "5b6ab23d858daf2736090a6989db78d3"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "568f1b21a44ef300cc87276ec212e342"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "6e5c28280376854cfad2671867a0e364"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "ae14f1f62498dd456fc4ce6be87f9d9c"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "cb6a697de5143a5bbb0a2a240682d2ff"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "47ae6e2f7e5bb040e416768421526b19"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "b2eb2ecd4ea7e384a702559bbbd84aca"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "f2bd1466d8854a7ea8f2f245f122f821"
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
    "revision": "ef174fdaacf8ab1d27a3de41110cf436"
  },
  {
    "url": "js/canvas_ribbon.js",
    "revision": "c9e4544af77252c4bd97b416b4e4cb44"
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
    "revision": "d3c8721a42ec3cbd7baf8e0990658cdf"
  },
  {
    "url": "live2dModels/live2d/model/epsilon/moc/Epsilon2.1.2048/texture_00.png",
    "revision": "abee4cdeb8018032163ffdc0a16020b0"
  },
  {
    "url": "live2dModels/live2d/model/kesshouban/textures/texture_00.png",
    "revision": "2e6411636e81d3e58e8315bfa586ba8d"
  },
  {
    "url": "live2dModels/live2d/model/pio/getJSON.js",
    "revision": "88a9e6692713b0a3db56857c0ac08d6f"
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
    "revision": "e0758befd3c45b50fe18cac964b825a5"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "9fd928a13db0cee8bce95b12614d1733"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "4884d36a5debd56e07e549d0d433ae97"
  },
  {
    "url": "Store/index.html",
    "revision": "dec13287af8029ff1ddf2257843b56c8"
  },
  {
    "url": "Thought/index.html",
    "revision": "3fc91cdeee13e36d54ba59179b6f5f3f"
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
