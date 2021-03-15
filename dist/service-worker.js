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
    "revision": "958aee4a8776d8a633b7d10ea023ec08"
  },
  {
    "url": "assets/css/2.styles.2edc83c2.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.a2e7a8c4.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.d05118c3.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.f9095636.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.60d58c51.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.e092abfe.css",
    "revision": "70586d9ff10af0c43cc17cf648d93698"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/16pic_9349989_s.e3e09d23.png",
    "revision": "e3e09d2326b904e177fffe31cc5f5ca9"
  },
  {
    "url": "assets/img/adjacency-lists.35fd593a.png",
    "revision": "35fd593acbd708487097e24c5b38fc43"
  },
  {
    "url": "assets/img/bars.7034b50f.png",
    "revision": "7034b50f73d054836b400fbec48315ad"
  },
  {
    "url": "assets/img/eventloop.91bb5a6d.gif",
    "revision": "91bb5a6db47fde9ac4f1634c772d9fac"
  },
  {
    "url": "assets/img/graph-input.5aee2e11.png",
    "revision": "5aee2e11ec34431a495f820193beb070"
  },
  {
    "url": "assets/img/html5.a2eaf051.jpeg",
    "revision": "a2eaf0519e990cc35d2748661c38edc4"
  },
  {
    "url": "assets/img/insertion.237bcb0e.png",
    "revision": "237bcb0ec06dbc8b1fdcd844699a4033"
  },
  {
    "url": "assets/img/lifecycle.ca6594f5.png",
    "revision": "ca6594f5afd63257f86ddffde635e7a4"
  },
  {
    "url": "assets/img/merge.2eb6042d.png",
    "revision": "2eb6042d11119b1de7bb39a3613cdd4f"
  },
  {
    "url": "assets/img/mergesortBU.a978b9bd.png",
    "revision": "a978b9bd80dc03f9494e6a1a9f2ffe1d"
  },
  {
    "url": "assets/img/mergesortTD.2df0cda5.png",
    "revision": "2df0cda543c78cabffae95aa945d1e28"
  },
  {
    "url": "assets/img/niuniu.a01b0649.jpg",
    "revision": "a01b0649a71fcefcf095cce6d2b0e4a0"
  },
  {
    "url": "assets/img/origin-upstream.55d70183.png",
    "revision": "55d70183d4d17fc61cf7fc8dc9f42cf9"
  },
  {
    "url": "assets/img/quicksort.ceae7063.png",
    "revision": "ceae706337d16f795fda3666e0abbcf5"
  },
  {
    "url": "assets/img/reactprocess.043150d7.png",
    "revision": "043150d776364d6ab4303ff7caa0c4f4"
  },
  {
    "url": "assets/img/render.ee2c6c44.jpg",
    "revision": "ee2c6c442a5c9be33a205c7c8a490f2c"
  },
  {
    "url": "assets/img/scorder.6332a379.png",
    "revision": "6332a379e5acaa5ee95685944e0ddb55"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selection.e8f57bf1.png",
    "revision": "e8f57bf154b86227d605451d0ad63fd4"
  },
  {
    "url": "assets/img/shell.66e23e7a.png",
    "revision": "66e23e7a536bc512b8ca5bee376f0495"
  },
  {
    "url": "assets/img/test2.89ec9eaa.jpg",
    "revision": "89ec9eaae873b085cef4cec061825ccb"
  },
  {
    "url": "assets/img/testresult.8843a16c.jpg",
    "revision": "8843a16c63d0f673422df61f0f234904"
  },
  {
    "url": "assets/js/10.41d6a3d2.js",
    "revision": "e7deaa5e6069c5d27688cf751b0fa768"
  },
  {
    "url": "assets/js/11.1dddfe9f.js",
    "revision": "063e1d498f6ba3f4f8e152d3b23d62a2"
  },
  {
    "url": "assets/js/12.bc4e39b5.js",
    "revision": "8472c12bf3e9c2c804a1370f1a09af07"
  },
  {
    "url": "assets/js/13.48b4db36.js",
    "revision": "ddb778ac5f07351f5977c0568a6bee6e"
  },
  {
    "url": "assets/js/14.93a63b18.js",
    "revision": "850a65f94a6a27ac587b1a99eae9c8c7"
  },
  {
    "url": "assets/js/15.94097432.js",
    "revision": "13fae6db93e0000e39b0c0ae8a82ba7a"
  },
  {
    "url": "assets/js/16.91636369.js",
    "revision": "9b8b947a305e84975fa85e845d2b4d20"
  },
  {
    "url": "assets/js/17.1a70ae54.js",
    "revision": "b658b1bfea50c33af21071fc29af8488"
  },
  {
    "url": "assets/js/18.be5e7a09.js",
    "revision": "9987d12bac299fc089ae18978ae2cdba"
  },
  {
    "url": "assets/js/19.b79ba2f9.js",
    "revision": "de4f18aa1ea7d02b30bd293893b8f723"
  },
  {
    "url": "assets/js/20.efe1a4c6.js",
    "revision": "6879fe45a0ef56e00f49577b98a73294"
  },
  {
    "url": "assets/js/21.d5878a39.js",
    "revision": "ff0841be9db74f2556fd6cea61f71830"
  },
  {
    "url": "assets/js/22.d66f28d0.js",
    "revision": "ea5538f1bea56047a62275c0f9e400f8"
  },
  {
    "url": "assets/js/23.e65f9d60.js",
    "revision": "6524707c3717a8a8eae55b84193c2219"
  },
  {
    "url": "assets/js/24.9c74214a.js",
    "revision": "64e11586b47d9a6afdaac1e71790be61"
  },
  {
    "url": "assets/js/25.860d40b6.js",
    "revision": "9128e53fea55ea1e33d23e4857a57140"
  },
  {
    "url": "assets/js/26.6e45775a.js",
    "revision": "176af036db675967a27c55b68b6e0d06"
  },
  {
    "url": "assets/js/27.d5b903e1.js",
    "revision": "ba0c721b257f38d759dbe81be0e6f915"
  },
  {
    "url": "assets/js/28.099d72db.js",
    "revision": "84446bd89e50afa821be72138fa99356"
  },
  {
    "url": "assets/js/29.6dc233e6.js",
    "revision": "53b828275bf13db745bcc0818af66e23"
  },
  {
    "url": "assets/js/30.46e26a08.js",
    "revision": "0669ba181f6cc013e5ad351423768f0a"
  },
  {
    "url": "assets/js/31.4dc893f8.js",
    "revision": "88e5ba158bbddd053fe8352f45fe4286"
  },
  {
    "url": "assets/js/32.fa1d65c0.js",
    "revision": "1edb99300628e081ecc84b6faca3b25e"
  },
  {
    "url": "assets/js/33.a32a92e6.js",
    "revision": "1e887db7e9cad6f228165b75e1343c05"
  },
  {
    "url": "assets/js/34.2107ae55.js",
    "revision": "09afe8672994f89995faebb310067c05"
  },
  {
    "url": "assets/js/35.e18d0bae.js",
    "revision": "6e569a9af73c98207f15777466e8a573"
  },
  {
    "url": "assets/js/36.05e7a040.js",
    "revision": "38749ca20130100f026af16469d69daf"
  },
  {
    "url": "assets/js/37.ecb449ed.js",
    "revision": "e25674f16d9a572c802769d3d24e06a2"
  },
  {
    "url": "assets/js/38.85564bb5.js",
    "revision": "40217acd3b181a7c12f8360cfa96aad2"
  },
  {
    "url": "assets/js/39.d28747cd.js",
    "revision": "0e3397145e3db0d238fdedfeddd1216b"
  },
  {
    "url": "assets/js/40.3c9900e1.js",
    "revision": "9aa1602b63570a4c549626cae433175b"
  },
  {
    "url": "assets/js/41.472ab898.js",
    "revision": "c4b740bbcdd15c7f8bce4a0bce48b8ff"
  },
  {
    "url": "assets/js/42.abc9b6ca.js",
    "revision": "93805f3613fbf983927de2c47d855495"
  },
  {
    "url": "assets/js/43.7f5d3510.js",
    "revision": "d34d85608a5d00c55da46be22efaa0a2"
  },
  {
    "url": "assets/js/44.857a3bd8.js",
    "revision": "d828b5f3b1f0c8d92266db25c3ab9b96"
  },
  {
    "url": "assets/js/45.25ad6955.js",
    "revision": "34b21440a4fe6d53978999ad91f42e9c"
  },
  {
    "url": "assets/js/46.706261e1.js",
    "revision": "56de4674f8c9bd0c836a4c66079b94f1"
  },
  {
    "url": "assets/js/47.b6ee0421.js",
    "revision": "dc8e910e222a252ca065e5d1a504e976"
  },
  {
    "url": "assets/js/48.c447fa6a.js",
    "revision": "5f252c0ae0c8d1fbb2ea93dbf7c3929d"
  },
  {
    "url": "assets/js/49.fe9ca5d0.js",
    "revision": "cc4ff9619a2cefeeba68e0667e31cbf0"
  },
  {
    "url": "assets/js/5.a2e7a8c4.js",
    "revision": "44ffa21108ce9a40a08e16bf5852ecdf"
  },
  {
    "url": "assets/js/50.095e3422.js",
    "revision": "44bb054e1989f7d944a4d3e6f4686676"
  },
  {
    "url": "assets/js/51.9c76d83b.js",
    "revision": "50fdc2e4db697a4b9772b640470ba225"
  },
  {
    "url": "assets/js/52.17589299.js",
    "revision": "8413faa392fe207012f70f57f0d9b5d1"
  },
  {
    "url": "assets/js/53.33ba2818.js",
    "revision": "be6bb5036326b4392acf47a32391cf5f"
  },
  {
    "url": "assets/js/54.74d2f5ef.js",
    "revision": "328721ae681654ecdbb0668acb2daeea"
  },
  {
    "url": "assets/js/55.c05499a3.js",
    "revision": "f625f26d9ab4d70ca400526edc235823"
  },
  {
    "url": "assets/js/6.d05118c3.js",
    "revision": "6017134dbfd3d3afb244aa655452df9e"
  },
  {
    "url": "assets/js/7.f9095636.js",
    "revision": "36aab030427295684267d438cca51d86"
  },
  {
    "url": "assets/js/8.60d58c51.js",
    "revision": "ba8ad4caf15b41be7165b63a23cc93af"
  },
  {
    "url": "assets/js/9.e092abfe.js",
    "revision": "baa93aab37a344b5b0d32694f70fc587"
  },
  {
    "url": "assets/js/app.280189ca.js",
    "revision": "f0992974767f0d2371d4ed480e7807df"
  },
  {
    "url": "assets/js/chunk-elementUI.93e00502.js",
    "revision": "2ad094d8e2c0d32835026c44030721bf"
  },
  {
    "url": "assets/js/chunk-libs.2edc83c2.js",
    "revision": "39ec3914ec872b623d2b9aa9cf9dd79f"
  },
  {
    "url": "assets/js/runtime.7d33364b.js",
    "revision": "28b0905cfd359dd9dc4218762f0f44fc"
  },
  {
    "url": "images/code/1604035974.jpg",
    "revision": "bcb32c7c89c628c72d42109ee104a421"
  },
  {
    "url": "images/code/23tree-anatomy.png",
    "revision": "3641a3ae76e6edcd6040610ae4875dc4"
  },
  {
    "url": "images/code/adjacency-lists.png",
    "revision": "8df51a00dce29bbf354e778889fe9ca4"
  },
  {
    "url": "images/code/bars.png",
    "revision": "e18f7b1c1fbbf9370a5d21039810cad4"
  },
  {
    "url": "images/code/graph-input.png",
    "revision": "30cdfe2477deb76b6e54bf4de7560e83"
  },
  {
    "url": "images/code/h-sorted.png",
    "revision": "58f37bb61fd93c9d4ddd19e91ab35d70"
  },
  {
    "url": "images/code/insertion.png",
    "revision": "0dc151e6e98011b3387c908817d4b9ac"
  },
  {
    "url": "images/code/merge.png",
    "revision": "cc2191ea1e9e9ba9c403e1a342f0b7ee"
  },
  {
    "url": "images/code/mergesortBU.png",
    "revision": "7b75626747ab5855d31e6eda8634bfe4"
  },
  {
    "url": "images/code/mergesortTD.png",
    "revision": "62b68c89c600f2bbf41ce454e8e35a05"
  },
  {
    "url": "images/code/partitioning-overview.png",
    "revision": "9bad24d23d5b92e4a4e9790eb260f7a5"
  },
  {
    "url": "images/code/partitioning3-overview.png",
    "revision": "03ac1071a6cae190ba8c7187fa7c8ffe"
  },
  {
    "url": "images/code/quicksort.png",
    "revision": "e58479677bc8b2ddce2e4ba91a2523c9"
  },
  {
    "url": "images/code/selection.png",
    "revision": "388ad62ff8636e15db86ef4e54f6ddc4"
  },
  {
    "url": "images/code/shell.png",
    "revision": "0e110674a2beb3041925d71acdefdca6"
  },
  {
    "url": "images/head/mine.png",
    "revision": "7f824fd01f5d9a65a3bbcda372b0d427"
  },
  {
    "url": "images/home/16pic_9349989_s.png",
    "revision": "d040010eed68257e2c0ffd9672b810c6"
  },
  {
    "url": "images/home/computer.jpg",
    "revision": "97ae1c5927263d0105cf36e7da744750"
  },
  {
    "url": "images/home/html5.jpeg",
    "revision": "c1cc4e65f0b6a3602b29303fc54c97fa"
  },
  {
    "url": "images/home/html5.jpg",
    "revision": "7e44b57641afaf7aa8fd87604a94f39e"
  },
  {
    "url": "images/home/mockup.jpg",
    "revision": "8f0ebcb1b2685810cb910ed0a2980f16"
  },
  {
    "url": "images/home/niu.png",
    "revision": "b55eab3c8cf7ddfd80cd7162ffae8c5e"
  },
  {
    "url": "images/home/niuniu.jpg",
    "revision": "1792a09e876a5d3c045542b59aef149c"
  },
  {
    "url": "images/home/shibuyasky.jpg",
    "revision": "77d3e465755dd1e46e93c7a145e26c43"
  },
  {
    "url": "images/home/vue.png",
    "revision": "1edf13fafa9bab2e621bb1733501a314"
  },
  {
    "url": "images/home/webworker.jpg",
    "revision": "7f6acf3d207c6ebca3593fb7ac38a920"
  },
  {
    "url": "images/react/reactprocess.png",
    "revision": "80251dc0c1285c4ed15cff62e0ea05ef"
  },
  {
    "url": "images/sidebar/browers/render.jpg",
    "revision": "fc676777d5463f6f7f640f5674d8644d"
  },
  {
    "url": "images/sidebar/css/sc.png",
    "revision": "9366a7616e8400768f454bc0b1019de2"
  },
  {
    "url": "images/sidebar/css/scorder.png",
    "revision": "adc4481dfa173ce1500017f64e992e98"
  },
  {
    "url": "images/sidebar/git/origin-upstream.png",
    "revision": "c0285318a1a42508336e27cfb70f390f"
  },
  {
    "url": "images/sidebar/javascript/eventloop.gif",
    "revision": "778d214a75a2a7a0abd63b891d357b4f"
  },
  {
    "url": "images/sidebar/jest/test2.jpg",
    "revision": "6c436acf42ebfbbfe6653c2c47320f42"
  },
  {
    "url": "images/sidebar/jest/testresult.jpg",
    "revision": "a5937ea69f5b0f1c3fe1f909dfa6af69"
  },
  {
    "url": "images/web/lifecycle.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "index.html",
    "revision": "9fa47bfbb414414ab9988ff0ff49abb7"
  },
  {
    "url": "nav/code/index.html",
    "revision": "c30cce00656e08a530611386db19b720"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "98ee9dacbdcb43afbfa3bda63f002392"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "33a7f6bcbaaf38c466baf8b65bde4df2"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "33e146e99e0a2148d77bd54650c994e3"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "e0d92674b631f59d27343ffd231c0d08"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "6a9e905a8e0dc6d8ab35b7d87bc96671"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "bc99e223087b284995dce0764b1f9fc5"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "374796cc17d45a2db91821c20f99c196"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "ffd3d9bdb358d7a8c5c408fd873bec52"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "506bbe0d6a30fcfd3813ac3aea1d6d94"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "6e1088a105ac0e22a82d2f2c8e7f8849"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "375248b6d97d37d6453c3b4f12e0669f"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "c711b5f9fd0b458f0497dbeb7ce46371"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "79f2b388db284762f6fb74d39a5891b7"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "0c0b661462453d608d4c87bcfd6db655"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "a867128517813a28777b63f6f23f53f3"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "fd2718d78d5c3c28cf5b60cfd61415b2"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "ff3cce033e7533438777b93b236b9532"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "81774b9aa0ad035df93ea06865197eb0"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "d01c77c0880df1bed9a2d6757c5c39b3"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "9297fb0441a9bc49020b7bb6bec0eee1"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "47299456ccfcb50c2c2c061926d97845"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "745ce7bf8c79f058790a3a3a0109f0f6"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "30d0d021202aa7aa45f72a5f41e9b5be"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "dad0aa337514d37ad342f6d774929533"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "428e3372a23ec0285b8b3fb0274b8492"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "66619916101910c8b2d668e5bd0325b3"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "0b6a6ddcd0cc1d53bd9997358fc638fb"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "5d52301cdc6a01e5bb81fec2894eeb38"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "defd8aa9c7f729d103280494b3978c15"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "8a3425e3790e684013bf0f9ea0cfa444"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "3f0eecc955aa52e167b30ddd74ae0756"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "d573544370e46f875c869c5a058d827c"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "7abbd57877eed4647c98455b2cc624cd"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "4999187d06e05362af3c9021c719728c"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "afa81f2a95d342d446f2f9678acc65c3"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "bb595a9f3d8d5831a6923ab1806226e6"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "981b4af91e38b234fb4fe840bc6cc99e"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "8142163c40bf98b00591a4b3af997684"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "12c08548f9c2a4e4682e347879b5a9c6"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "9dd1e613630b651e87f55c60b635c655"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "d511def423537d0517b394a6fe1be657"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "ea040605e5c450a6e8cc4a6409f2bf70"
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
