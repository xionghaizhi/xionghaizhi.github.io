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
    "revision": "209cb2b125966b65c820b8ff76b9fd2a"
  },
  {
    "url": "assets/css/0.styles.f43f6c2c.css",
    "revision": "423ad34e9346a4af4964345185e84d54"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.c5a84480.js",
    "revision": "abaac272ed0d7f8f81fa31a73ba693fe"
  },
  {
    "url": "assets/js/10.ff406e66.js",
    "revision": "7610e37f60564b0626118234790cebe1"
  },
  {
    "url": "assets/js/11.1987f49d.js",
    "revision": "e294c4525c4c14d1bda9b0c20e6a0f34"
  },
  {
    "url": "assets/js/12.8e557504.js",
    "revision": "36036489042deee7dc729433b128cfe2"
  },
  {
    "url": "assets/js/13.79e8a5ac.js",
    "revision": "7c9135153b20cb0cc49f5d0bac60a200"
  },
  {
    "url": "assets/js/14.94145892.js",
    "revision": "da8c7f38d2cf7bff533a40298d09662a"
  },
  {
    "url": "assets/js/15.c19e45f4.js",
    "revision": "f5cbe2ddc0110fe0a3c98b6b3ddca355"
  },
  {
    "url": "assets/js/16.07d72cc9.js",
    "revision": "8fd34c1e6427f5772ded0211ead193f0"
  },
  {
    "url": "assets/js/17.1e6f0f1e.js",
    "revision": "13e88b0d54d0f0555e1493c94294b058"
  },
  {
    "url": "assets/js/18.ffb3c631.js",
    "revision": "5369067441c039d914f64d3fdf22b56e"
  },
  {
    "url": "assets/js/19.fc058078.js",
    "revision": "b6d1653a111a33d6e797c84dc08ca837"
  },
  {
    "url": "assets/js/20.7ec1d62e.js",
    "revision": "64f1b80696624c90aeb6368bcacdffc2"
  },
  {
    "url": "assets/js/21.cff10b3c.js",
    "revision": "1f77c4395de7d39d1fbac14f6702d4ed"
  },
  {
    "url": "assets/js/22.1f92f9f4.js",
    "revision": "7a20a1d8d2f38ba764d95a18a151afcb"
  },
  {
    "url": "assets/js/23.97d66717.js",
    "revision": "dfe84d9d36b3677620de7e60b09650be"
  },
  {
    "url": "assets/js/24.a6c6dec1.js",
    "revision": "1997f42d8c36c19d25780f97b43d58ac"
  },
  {
    "url": "assets/js/25.e526f1b4.js",
    "revision": "f0e9f6790c6f50a6d729fe678c1fe9b9"
  },
  {
    "url": "assets/js/26.86479998.js",
    "revision": "c084253a050fda86b39c913f2044e3e8"
  },
  {
    "url": "assets/js/27.5a734730.js",
    "revision": "12d24a54beae2d252ea0c9b26ee4b3f5"
  },
  {
    "url": "assets/js/28.31f51e8c.js",
    "revision": "7ed8eac5ef1bb3f844f0861e7ff7f729"
  },
  {
    "url": "assets/js/29.243b1d07.js",
    "revision": "fc76d6f119dd32649cdf5756744e69c0"
  },
  {
    "url": "assets/js/30.2296b248.js",
    "revision": "f307da4d0750f8c7f6ff4d14e7ecf9cf"
  },
  {
    "url": "assets/js/31.382d2705.js",
    "revision": "d60d00d5313ee0db06bfde026b203991"
  },
  {
    "url": "assets/js/32.ba00b8d2.js",
    "revision": "4d603853511ecf5dd2941d9f7e5b113b"
  },
  {
    "url": "assets/js/33.2fcea69e.js",
    "revision": "5289b54365a19ca408974e1fe02519d8"
  },
  {
    "url": "assets/js/34.6442f644.js",
    "revision": "ea607e2d2a50c41d17c3580bc46ca483"
  },
  {
    "url": "assets/js/35.706fbd10.js",
    "revision": "781df29330ca2639eb33f60504a211ac"
  },
  {
    "url": "assets/js/36.e90b1e26.js",
    "revision": "d93a6042e90d39497c08187b042d969a"
  },
  {
    "url": "assets/js/37.9e49b210.js",
    "revision": "133da0fe31a9c7a5f6b00559103f156d"
  },
  {
    "url": "assets/js/38.b6fcf18e.js",
    "revision": "806e9488291fe8c60087752dbed97d8b"
  },
  {
    "url": "assets/js/39.34dfaa70.js",
    "revision": "fde89041868351fcda50e7d8dfae0060"
  },
  {
    "url": "assets/js/4.31e96a78.js",
    "revision": "f6f137ebfe20503791fccd2b3aae5190"
  },
  {
    "url": "assets/js/40.9f3a875c.js",
    "revision": "f63b9277be1c67c2e6f6348b1be9df6e"
  },
  {
    "url": "assets/js/41.d0686563.js",
    "revision": "e37230621198de06628f9c26ddd311ce"
  },
  {
    "url": "assets/js/42.0a33f239.js",
    "revision": "4cf755877a5bf87e944466942e31ee79"
  },
  {
    "url": "assets/js/43.9a229b00.js",
    "revision": "774b06a2557fc49bb9c2017e02c908cd"
  },
  {
    "url": "assets/js/44.053971fb.js",
    "revision": "4a4d13919d10b2c80076540b2c97b0eb"
  },
  {
    "url": "assets/js/45.4750cd45.js",
    "revision": "5e54f74eb57bbf7bf1966722b72dea4f"
  },
  {
    "url": "assets/js/46.0bf4bcf3.js",
    "revision": "1f7042e714243cfc29442fdd5ed4ff2c"
  },
  {
    "url": "assets/js/47.8a6249eb.js",
    "revision": "91be78493798b3b8b73c4f70fdb46b72"
  },
  {
    "url": "assets/js/48.a10f7748.js",
    "revision": "097ced0966e594fe01080d30162f73d0"
  },
  {
    "url": "assets/js/49.1ab0b49c.js",
    "revision": "4f3ec80256d4056a272f107aed74e3a5"
  },
  {
    "url": "assets/js/5.578b1b35.js",
    "revision": "432b3d320e730683e97c1d227bbc7901"
  },
  {
    "url": "assets/js/50.015d377b.js",
    "revision": "722e74f5b3165500b377067eaf8380ea"
  },
  {
    "url": "assets/js/51.8ac1d46f.js",
    "revision": "d412c22f37cdb3286090764a8241399d"
  },
  {
    "url": "assets/js/52.fc308b2c.js",
    "revision": "7fd3d95f3b80c29a611f5ed0a0872e1b"
  },
  {
    "url": "assets/js/53.53923b5b.js",
    "revision": "6d90258a03a4fbcbf03d6cfec3d80578"
  },
  {
    "url": "assets/js/54.65dc29ef.js",
    "revision": "a0679a346c4c0333dfb275b18e4c3c65"
  },
  {
    "url": "assets/js/55.4cd1c958.js",
    "revision": "13fa5db380637ac31b7930d943cbf062"
  },
  {
    "url": "assets/js/56.c8c03284.js",
    "revision": "4948b6acdabe17ef564ae88f6a7a174d"
  },
  {
    "url": "assets/js/57.41960cc0.js",
    "revision": "262a61bad4321b9b85ac7ae5783f0b0c"
  },
  {
    "url": "assets/js/58.f2e395f8.js",
    "revision": "6b1afa649d0521e0e1458abb875e0bb1"
  },
  {
    "url": "assets/js/59.160b9c4e.js",
    "revision": "1c69e835e0272a855799cd743ac5a068"
  },
  {
    "url": "assets/js/6.0dff1b62.js",
    "revision": "812652aae850db380fc8e979a7290747"
  },
  {
    "url": "assets/js/60.451f0475.js",
    "revision": "4b6768cf8b097d61808739fd9ddc1fe1"
  },
  {
    "url": "assets/js/61.3ca7dedd.js",
    "revision": "81386125dd6103ecbe7c53fa1cafee2b"
  },
  {
    "url": "assets/js/62.5453eb04.js",
    "revision": "9491f3064cf80119031e34a0470ac0ec"
  },
  {
    "url": "assets/js/63.67dcc609.js",
    "revision": "ed366cd29592771542adf53dc54accb7"
  },
  {
    "url": "assets/js/64.c495dd38.js",
    "revision": "fe66404dcf259f4b0c83b0f40a98b4df"
  },
  {
    "url": "assets/js/7.d6e0010f.js",
    "revision": "87c94eb254055b5101c391a5af4943c9"
  },
  {
    "url": "assets/js/8.c459de0c.js",
    "revision": "c8d5f6208907bb10ebbc25a44ec27122"
  },
  {
    "url": "assets/js/9.55e7c931.js",
    "revision": "6e1322bedb90e65eefca8134d9db270c"
  },
  {
    "url": "assets/js/app.d329ce70.js",
    "revision": "d9136e844f93724af3464d97e5827c0e"
  },
  {
    "url": "assets/js/vendors~flowchart.fe3ed183.js",
    "revision": "fa3fc13bd5a50f3f077766aa9d686086"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "baidu_verify_code-VYw3ARNxXW.html",
    "revision": "47f722b7b0091473b9316162930e0b20"
  },
  {
    "url": "blogs/category1/20200603.html",
    "revision": "900e73b693ddf5afc29c8a6e3c207ff4"
  },
  {
    "url": "blogs/category1/2020060302.html",
    "revision": "569d9da76d2c73f59e1fd017651f633d"
  },
  {
    "url": "blogs/category1/2020060303.html",
    "revision": "6db3439879d05532b05497c9d7794cdc"
  },
  {
    "url": "blogs/category1/2020061001.html",
    "revision": "4f46d560cc8c0d464063ecec1ec31881"
  },
  {
    "url": "blogs/category1/2020070401.html",
    "revision": "f5d999f65dcf6c9ffad7b8e99b381a36"
  },
  {
    "url": "blogs/category1/2020071001.html",
    "revision": "e8d02bb40150c7ae23172857871ef3fd"
  },
  {
    "url": "blogs/category1/2020071301.html",
    "revision": "78d2160d2a4fc5b8360a4503787af374"
  },
  {
    "url": "blogs/category1/2020072401.html",
    "revision": "4f333de7b6656de8c41129fb5526fda5"
  },
  {
    "url": "blogs/category1/2020082401.html",
    "revision": "7373e3b2ecd3fdf8b4ceade0d53417c8"
  },
  {
    "url": "blogs/category1/2020093001.html",
    "revision": "530435261a47cf5e644c95e850661d4c"
  },
  {
    "url": "blogs/category1/2020100901.html",
    "revision": "7aff4231bea629264c19bf09912c6ff9"
  },
  {
    "url": "blogs/category1/2020110201.html",
    "revision": "bccc83276c7d3afc6309aebc05769c1d"
  },
  {
    "url": "blogs/category1/2020111601.html",
    "revision": "a6a42517623d7660b007ee460eb5d188"
  },
  {
    "url": "blogs/category1/2020112501.html",
    "revision": "13acbe050b184400aeeb288cca6154d3"
  },
  {
    "url": "blogs/category1/2020112601.html",
    "revision": "8367148c36617d44a9bad474f922d2fd"
  },
  {
    "url": "blogs/category1/20201203001.html",
    "revision": "c1a24a13969369dbad157e758177b0a4"
  },
  {
    "url": "blogs/category1/2020122101.html",
    "revision": "95c7ff0f930ac694f7670e99e1356bbe"
  },
  {
    "url": "blogs/category1/Cannot connect to the Docker daemon at.html",
    "revision": "47d3945da3b95ee29627b9d5f608ba21"
  },
  {
    "url": "blogs/category1/CentOS下关闭防火墙.html",
    "revision": "09526eb9445c8f6088fc932f8a708e94"
  },
  {
    "url": "blogs/category1/GitLab Runner 持续部署安装使用.html",
    "revision": "6021c6cef28ad4fb566e693b9120c6b5"
  },
  {
    "url": "blogs/category1/GitLab Runner 构建文件记录.html",
    "revision": "083e6e1c702b05f242ee50982cca816f"
  },
  {
    "url": "blogs/category1/GitLab Runner修改用户权限为root.html",
    "revision": "47650832abb2c42271a58e4a01862788"
  },
  {
    "url": "blogs/category1/Gitlab修改项目克隆（Clone）地址.html",
    "revision": "cdcc3369a29f6be7dd32305f9f3a8ab8"
  },
  {
    "url": "blogs/category1/Git推送仓库命令.html",
    "revision": "dce64933d4b63a8002ce081ce371dbf6"
  },
  {
    "url": "blogs/category1/Git撤销命令的使用.html",
    "revision": "423fe64cbd9738fc4f9d1aca55cf9087"
  },
  {
    "url": "blogs/category1/java后台与MySQL时间交互问题.html",
    "revision": "549a8cb27d8332eebaec7b71bf64f67f"
  },
  {
    "url": "blogs/category1/jenkins流水线作业问题mvn，docker-compose找不到命令.html",
    "revision": "2ed2514e7c99f23ffd2c484b3226584a"
  },
  {
    "url": "blogs/category1/Linux curl 发送消息通知记录.html",
    "revision": "606f23f00eb1987c06c4ff040a438710"
  },
  {
    "url": "blogs/category1/Linux 安装zerotier.html",
    "revision": "533b03841a3520f26b1006475dcef874"
  },
  {
    "url": "blogs/category1/Linux安装node环境.html",
    "revision": "41ec34ae4837e6c50a6196ed8b648282"
  },
  {
    "url": "blogs/category1/maven 提示 JAVA_HOME should point to a JDK not a JRE.html",
    "revision": "8e3fbb3746e4af979706eb4c4ae28707"
  },
  {
    "url": "blogs/category1/Nacos服务注册地址改为公网ip.html",
    "revision": "0102e2490ceff461df68063716383ff3"
  },
  {
    "url": "blogs/category1/nginx报错nginx [error] invalid PID number.html",
    "revision": "7eff883a0a2cad41db2ae7c25132af2a"
  },
  {
    "url": "blogs/category1/yapi关闭shell后，服务停止问题.html",
    "revision": "88accd96f5a2e3f2979e47d1b8c23d9e"
  },
  {
    "url": "blogs/category1/yapi同步swagger文档.html",
    "revision": "ae291261b6c1d9d87ff10bdcc4ffb1b7"
  },
  {
    "url": "blogs/category1/yapi安装.html",
    "revision": "56f5242b28fd92b6b7cfa8e969d2ced0"
  },
  {
    "url": "blogs/category1/微信内https转http报跨域问题.html",
    "revision": "b37b10d031cf75a19fb5aa65278ffa85"
  },
  {
    "url": "blogs/category1/微信朋友圈分享.html",
    "revision": "1e07b358a02fa73e3fac3e2e7af5d240"
  },
  {
    "url": "blogs/category1/数组转list后操作异常解决方案.html",
    "revision": "30691b3054cdc3ffb5d2b7901c226147"
  },
  {
    "url": "blogs/category2/2020080801.html",
    "revision": "6cf956748eba0ecd0936f0b8b93b8c66"
  },
  {
    "url": "blogs/category2/2020092601.html",
    "revision": "d4534eea2ae85e550d47321e9e3b1c65"
  },
  {
    "url": "blogs/docker/docker clean logs.html",
    "revision": "32f27b8495a6031b937ca44d75ddb83d"
  },
  {
    "url": "blogs/elasticsearch/es安装.html",
    "revision": "28645695cef6d0b516cf706856ee2617"
  },
  {
    "url": "blogs/java/activiti7 Profile.html",
    "revision": "d9c946ad55ac45c53d49dcf79875e6ee"
  },
  {
    "url": "blogs/java/seata client.html",
    "revision": "cc7bf66b46b3cd3a37cae3a3315b2673"
  },
  {
    "url": "blogs/java/seata server.html",
    "revision": "182eb65bc75f3aad038b44876c2b5a11"
  },
  {
    "url": "blogs/java/spring cloud activiti7.html",
    "revision": "778e90f42b9614e737768118aead4024"
  },
  {
    "url": "categories/index.html",
    "revision": "209c3b3b971d6ed003052c5d469d694e"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "c065e0c2944a66193349cbe668f5c7f5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "02a60c5a56afb8a8324c6cf22a02d87a"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "efdb0bc19dac66ecd95003e76fe1898d"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "44cdb1486c23b678421a0c396c2a1b28"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "38021d61c7c8f76c26e539e092976103"
  },
  {
    "url": "categories/工具使用/index.html",
    "revision": "e1987bbed9c5a4c04aa485a9c45868dc"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "d4bb0b17d4e203186675453ff95c1817"
  },
  {
    "url": "categories/运维/page/2/index.html",
    "revision": "4a496a876d9bd05ace173b4966888bb1"
  },
  {
    "url": "categories/运维/page/3/index.html",
    "revision": "008e88abfca96551b127d99b5f4f0468"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "3ecc0fb85eb8cc21a1e11bbe9b5cc749"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "df64ae299d6769de62cbce817f739ef3"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "000fa73f23a8535e1b1e82f2d7f66991"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "a5d6e101cf8e2d315f263d66b6cab0f5"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "70f328d8222463d972798a24b9488bf3"
  },
  {
    "url": "logo.png",
    "revision": "233991c6c7110c8326ed0d0c5aa6b451"
  },
  {
    "url": "logo1.png",
    "revision": "3ef8a5cdc14484aee59b95377186a20d"
  },
  {
    "url": "qq.jpg",
    "revision": "9691e454a94f326248b5ffd2537c9dbb"
  },
  {
    "url": "tag/activiti/index.html",
    "revision": "b89384a251dc1b6a94c14828e0d31fc5"
  },
  {
    "url": "tag/CI/CD/index.html",
    "revision": "bcfc8c1bf51675d54d4eb3fecc46be64"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "ea3493bfcce718aa44edbe71c4ba30c4"
  },
  {
    "url": "tag/elasticsearch/index.html",
    "revision": "7ef80981e70787717389629fc7311d13"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bc1b46b8722dcffbc3db752ca586e550"
  },
  {
    "url": "tag/gitlab/index.html",
    "revision": "b322860e1e937511b219a6202096d904"
  },
  {
    "url": "tag/index.html",
    "revision": "24ad1976edb9a3e70896e570332f0cc8"
  },
  {
    "url": "tag/java/index.html",
    "revision": "50be7b5e1ed982ee32227e4bb0550645"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "f9a6fd19d72f821dfd15c5c3145c93a9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7876990f69dbd8ed6d9e7f2b77b34ff1"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d1677b5cfb3bb5735585cdf47ae902f8"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "c12fdd0927d5196c5f637916bdcd2a48"
  },
  {
    "url": "tag/Liunx/index.html",
    "revision": "f03bdcb001695b67d353589f93cf1948"
  },
  {
    "url": "tag/maven/index.html",
    "revision": "b447a508924cbdddeb947219facf7084"
  },
  {
    "url": "tag/mysql/index.html",
    "revision": "988c9060c99aa2d9f0da4fa781896a47"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "4e095eca2f81e8c7329a577ab495fac1"
  },
  {
    "url": "tag/node/index.html",
    "revision": "9ab186e34c0beb12214d455184b3cc46"
  },
  {
    "url": "tag/python/index.html",
    "revision": "8578c770259df06871063f52242c2951"
  },
  {
    "url": "tag/seata/index.html",
    "revision": "4b1bee032029cc3214d0fcf34851dc17"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "70ed01e132a69f3d01b38d295218760f"
  },
  {
    "url": "tag/yapi/index.html",
    "revision": "45091b066d0e22771ba20e70b1b9be03"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "d3c14bf5a40e0ada9ab8c40f025a7893"
  },
  {
    "url": "tag/常用方法/index.html",
    "revision": "2b31e1c90fb06dd6111c64dde131aad3"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "2c8f779111f428106739482a5288660e"
  },
  {
    "url": "tag/消息队列/index.html",
    "revision": "b5068f4f01be83c7bb3d738cd47beafb"
  },
  {
    "url": "tag/部署问题记录/index.html",
    "revision": "9d7e0a9bfccee36e97f155e735534746"
  },
  {
    "url": "timeline/index.html",
    "revision": "9d97c9ed61f3a6427ae8506384e7d909"
  },
  {
    "url": "touxiang.png",
    "revision": "ce6183540d9265519a73924e1c78f558"
  },
  {
    "url": "weixin.jpg",
    "revision": "a8ec754a68dc17b89e318d4e0aa1dab5"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "1875aea78aaeedfc8c1e4a37597931c8"
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
