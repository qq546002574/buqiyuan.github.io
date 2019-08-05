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
    "revision": "53c9c8a5eef47b9a37e1d471be7f1776"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "cc971dc42a1bb541b8c5460f13d2c190"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "7e81ef2312120107a524e41e99e2253a"
  },
  {
    "url": "Another/Project.html",
    "revision": "3045cb1b7e5a27a528f2072938905ea0"
  },
  {
    "url": "Another/Review.html",
    "revision": "29f9ebfd24f8008c661203f88e403357"
  },
  {
    "url": "assets/css/0.styles.4cf50261.css",
    "revision": "6d36a15a3f211bcd9587635b875dbddc"
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
    "url": "assets/js/1.60f2c964.js",
    "revision": "d5d93a700f50f459d80e550216a99b7d"
  },
  {
    "url": "assets/js/10.e567db53.js",
    "revision": "cf7e9a9aeb8f0cee2360124bd0d5e5a0"
  },
  {
    "url": "assets/js/11.69724bb3.js",
    "revision": "bcf86006c4a39a7acdc34e2d9ea2d8b7"
  },
  {
    "url": "assets/js/12.cf0df9b5.js",
    "revision": "94205202391b7b707ddb8ce803fef4c5"
  },
  {
    "url": "assets/js/13.9793d390.js",
    "revision": "7f4c9d4a2acee92dd4731a52c197468f"
  },
  {
    "url": "assets/js/14.7c037dd6.js",
    "revision": "5ff0fe3cc72c6348b6e4b0cdb15607ea"
  },
  {
    "url": "assets/js/15.f3450d26.js",
    "revision": "744a76a5aaf5c14af0be8a9c659e1612"
  },
  {
    "url": "assets/js/16.09401478.js",
    "revision": "24e6706ee900b515cf6c399c09de6c3b"
  },
  {
    "url": "assets/js/17.f8066039.js",
    "revision": "8f7051678eed15b70a9c04c154899c44"
  },
  {
    "url": "assets/js/18.b689ae41.js",
    "revision": "ed8a54d75bb884fc37191c6ecdb86fc5"
  },
  {
    "url": "assets/js/19.5aeceb9a.js",
    "revision": "c0abaaa1536c7934f597aab41f5653f6"
  },
  {
    "url": "assets/js/2.b8944258.js",
    "revision": "a014a187961a09463b8a87a49ebc0c3f"
  },
  {
    "url": "assets/js/20.91f9a85d.js",
    "revision": "48d89e4b912fda522934b19f49276b0b"
  },
  {
    "url": "assets/js/21.9cee0e72.js",
    "revision": "50e409aa5cdaf76db01eb0a642ace5fa"
  },
  {
    "url": "assets/js/22.ea8f609d.js",
    "revision": "c0429307dc75c62e488fa385c7421910"
  },
  {
    "url": "assets/js/23.9d9294df.js",
    "revision": "d209e487463ef983e8683c3df697f947"
  },
  {
    "url": "assets/js/24.966b82ac.js",
    "revision": "e8c1ccac2841dac2cdfa043f414eb95b"
  },
  {
    "url": "assets/js/25.b96e719a.js",
    "revision": "fd15cc361f503124be1ab1a5aa6859b3"
  },
  {
    "url": "assets/js/26.0bc15538.js",
    "revision": "d89a699f157389e44ebdc3a4108f537f"
  },
  {
    "url": "assets/js/27.d316d931.js",
    "revision": "69aeb20c7d9cfb65b47dff163e7f2ff6"
  },
  {
    "url": "assets/js/28.d71f70c9.js",
    "revision": "85f5211b53d82f1e54850889937ec818"
  },
  {
    "url": "assets/js/29.a1c41cdd.js",
    "revision": "f48995bc6605d88be41818e91bae36f7"
  },
  {
    "url": "assets/js/30.28bcffe0.js",
    "revision": "2dbff632760d02234c849987ce596cf6"
  },
  {
    "url": "assets/js/31.d7078d56.js",
    "revision": "d9ce33b39a9dfbc2b2fdad29038e1e06"
  },
  {
    "url": "assets/js/32.09731416.js",
    "revision": "4be1d76183e3cbd4fc72b66507981941"
  },
  {
    "url": "assets/js/33.a5b71637.js",
    "revision": "7bbcb1035b2030aef8e7c612ab0416a8"
  },
  {
    "url": "assets/js/34.0d826c67.js",
    "revision": "1cf42617a4dfca3a17d6314fc721edac"
  },
  {
    "url": "assets/js/35.68075b0c.js",
    "revision": "a7ccc9898aa1942edfadc6a30a295592"
  },
  {
    "url": "assets/js/36.f2b8df2c.js",
    "revision": "abfd14054446e236a369ef6c5cf16ea6"
  },
  {
    "url": "assets/js/37.fd9d57ea.js",
    "revision": "b354ef41a36b6c2aa480cd1c1d263bbc"
  },
  {
    "url": "assets/js/38.fc26eb7a.js",
    "revision": "fd9fa55e7c4276639d0de8c2f234c880"
  },
  {
    "url": "assets/js/39.3fc9a897.js",
    "revision": "fef8e004097a1662c45bd9993059b2ba"
  },
  {
    "url": "assets/js/4.583fda86.js",
    "revision": "0bf0f7a924d407dbb7e40a0db739b630"
  },
  {
    "url": "assets/js/5.ec17ba9c.js",
    "revision": "2c0b30c1f17496a170b4b3f0651fdbef"
  },
  {
    "url": "assets/js/6.f1adf1ae.js",
    "revision": "98a15af75e96b5c243919697473d15aa"
  },
  {
    "url": "assets/js/7.2c78e78b.js",
    "revision": "15f2e837a2d6a26e21d5a9a007a3e514"
  },
  {
    "url": "assets/js/8.6993251f.js",
    "revision": "517a53cac4678373258fc7bf8a564ce1"
  },
  {
    "url": "assets/js/9.634b58c8.js",
    "revision": "af899f54839e515590b0fb0d656b4629"
  },
  {
    "url": "assets/js/app.4b94d4cd.js",
    "revision": "3b434e247aa1987eadcbd8b2f34fadd3"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "f4772e7b8fca38b1d62ca9b6d77da28b"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "d1fde0494cd11b3ee0fcc21238d9d436"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "bcf0465fb8e545584fa4964669e41cc3"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "2aea82a0707c56d3e34a47b1fd7a420e"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "07b72ab72eaf72824c6597ba2a42e7ea"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "95ad7b9b921f1a5eb51bf0c680c06222"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "b447a2b1d941f4252c5d916942739a38"
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
    "revision": "3d631fe23e91f213eeefac260baf7886"
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
    "revision": "843ffb70893bb281019b0509e47ecab9"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "9d9541f52141c41a773ed3fd87af6964"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "165409fef1584b992d723a9b3baedd2f"
  },
  {
    "url": "Store/index.html",
    "revision": "0f50702bf341d15ddd7fcde0bf6af1f8"
  },
  {
    "url": "Thought/index.html",
    "revision": "98bdf850285bc6a301c5913c148faebe"
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
