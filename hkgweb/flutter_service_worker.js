'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "fe07f09e080b950531bb2be6869cfad5",
"/main.dart.js": "f1aa929d8c9f19b9f68599fe026d9600",
"/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"/icons/favicon-16x16.png": "2bd7daf64f1ddcdbb3a1ea907a649250",
"/icons/favicon.ico": "f3cc852f79f73ebb2796258e1e8cd564",
"/icons/apple-icon.png": "61d9549fa02691917152641734edd8a1",
"/icons/apple-icon-144x144.png": "4c7fd1d2c3c42d0181cab7ec2d0e37db",
"/icons/android-icon-192x192.png": "2f2513bfafed4cff55300aa3910cc1e6",
"/icons/apple-icon-precomposed.png": "61d9549fa02691917152641734edd8a1",
"/icons/apple-icon-114x114.png": "8087792ed2c943f0a7f9b670006055de",
"/icons/ms-icon-310x310.png": "0ae0cdfae6981a5540c750bf09f2cda5",
"/icons/Icon-192.png": "baf9bde96ac2c7ca89aef23ee937ddc2",
"/icons/ms-icon-144x144.png": "4c7fd1d2c3c42d0181cab7ec2d0e37db",
"/icons/apple-icon-57x57.png": "6e406c6588e3479a7f60007b1c8ad252",
"/icons/apple-icon-152x152.png": "d79fc807bd94c3e6685a4a6de016cf57",
"/icons/ms-icon-150x150.png": "962f34fa31065e011d5c50deb8e6a25d",
"/icons/android-icon-72x72.png": "ee02872413831f3ffb64cbcf17896bac",
"/icons/android-icon-96x96.png": "131fc3db4de8f1a931e2bc0753b64280",
"/icons/android-icon-36x36.png": "6adc32cfe0be03b4d441d6b4fff004c2",
"/icons/apple-icon-180x180.png": "91e2c9edcf664cf0241e302a49a007f1",
"/icons/favicon-96x96.png": "131fc3db4de8f1a931e2bc0753b64280",
"/icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"/icons/android-icon-48x48.png": "e507dbc7562d3450a92544e73d0bb633",
"/icons/apple-icon-76x76.png": "9830b6d7b0bcf3e85e50c2b2aad83135",
"/icons/apple-icon-60x60.png": "d19ff00163111e92d80dea91c18e8a26",
"/icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/icons/android-icon-144x144.png": "4c7fd1d2c3c42d0181cab7ec2d0e37db",
"/icons/apple-icon-72x72.png": "ee02872413831f3ffb64cbcf17896bac",
"/icons/apple-icon-120x120.png": "4cfe001ba5ea0be491305150366f8019",
"/icons/Icon-512.png": "baf9bde96ac2c7ca89aef23ee937ddc2",
"/icons/favicon-32x32.png": "a6dbf3e2aa97d874f8b1709aa694b8fd",
"/icons/ms-icon-70x70.png": "348e9315383b36a28724c4207d4a041c",
"/manifest.json": "42a6dba6c9960e8f12497de622940676",
"/assets/LICENSE": "348d9abc5dec94015b591bf336438457",
"/assets/AssetManifest.json": "9767429443103460bea3c7afd7c15661",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"/assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"/assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"/assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"/assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"/assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"/assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"/assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"/assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"/assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"/assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"/assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"/assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"/assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"/assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"/assets/lib/assets/ui/mission.png": "f70c5a573ff0f9ef2dd6f7b3a970d585",
"/assets/lib/assets/ui/icon_bg.png": "53426094d49c8e72dee80851aa5120bc",
"/assets/lib/assets/ui/ad.png": "83f65dc73a57b32ef94ccbd85f0c4728",
"/assets/lib/assets/ui/hs_3_2.png": "4e510d6191c0696227cfd8db23144c69",
"/assets/lib/assets/ui/brownBar.png": "ac2c7c4b5a7cc53f8ffd6c23d345c0b4",
"/assets/lib/assets/ui/no.png": "0f17a8057ef1d515329968676262bce8",
"/assets/lib/assets/ui/finish_mission.png": "f5b8777787baa7c3d47a176cd99fbf76",
"/assets/lib/assets/ui/m.png": "18fddb114ef2f7ef096b016feeed43c8",
"/assets/lib/assets/ui/time.png": "ead2e8094f903773a225ef32bc40f4e3",
"/assets/lib/assets/ui/title.png": "dcd640c2601b86810ba9aa32fe70e134",
"/assets/lib/assets/ui/urgent.png": "1c36d294ee4c32844e4bb983e73cfa68",
"/assets/lib/assets/ui/yellowBar.png": "ce76750fc17d5d37065fab6472d74bce",
"/assets/lib/assets/ui/yellowshop.png": "608eb0f450127fa6a03226522eb6dc88",
"/assets/lib/assets/ui/yellowshop/map.png": "abed842f9cda2d65ab5f107b96825a38",
"/assets/lib/assets/ui/yellowshop/openrice.png": "48077a5f3c4d0f6794db8f6a53773549",
"/assets/lib/assets/ui/yellowshop/bookmark.png": "7a56955c9e96486eabfcf77c8ce3f577",
"/assets/lib/assets/ui/yellowshop/share.png": "09c2983ee3237e66c10ea2d7737c3b5d",
"/assets/lib/assets/ui/yellowshop/qr.png": "c0009e9d9c3aaf78cc9c06b7fcf0c184",
"/assets/lib/assets/ui/map.png": "3ff39d270f700a48d5e8d918e8e08303",
"/assets/lib/assets/ui/cancel.png": "4fd28eeaa594904c53535af1066c09b5",
"/assets/lib/assets/ui/mButton.png": "2340be663455738c3a47ab152a3b9da7",
"/assets/lib/assets/ui/hs_2_1.png": "855054f6bad45f7330fb3a3072b8d369",
"/assets/lib/assets/ui/fButton.png": "7c622ebb0705b6b49401fa54e7ceebe8",
"/assets/lib/assets/ui/mensuen.png": "897bd893c5d030a1fde9283852f4163c",
"/assets/lib/assets/ui/watch_ad.png": "435cfb919f14cc79b9487cf5228093fe",
"/assets/lib/assets/ui/mis_notfin.png": "abb93d6ac1b426df40f8d7f5f209ae2a",
"/assets/lib/assets/ui/yes.png": "9cf9597ef561de9d90823265a1aae3ff",
"/assets/lib/assets/ui/search.png": "1db86306d4945999e3e2df4a6a69ad53",
"/assets/lib/assets/ui/mission/month.png": "1162ee079412371cee2e703ccafe6659",
"/assets/lib/assets/ui/mission/day.png": "6035ef185bcffcb679afb8862a5794cd",
"/assets/lib/assets/ui/mission/urgent.png": "cfd76f1231fba09e7de13ac762c783a3",
"/assets/lib/assets/ui/mission/m_shout.png": "5be4e08c622f01cc21333429253c5c72",
"/assets/lib/assets/ui/mission/m_tvb.png": "a055b79e193240a8f727074735439066",
"/assets/lib/assets/ui/mission/m_email.png": "e9e7d11f59050996e00abbd653759c30",
"/assets/lib/assets/ui/mission/m_reddit.png": "8a3088f78b94bbc88c0fee70729992c9",
"/assets/lib/assets/ui/mission/titleBar.png": "eb86f4b191cabee447b3bc4cc45d247b",
"/assets/lib/assets/ui/mission/missonBar2.png": "1e8e836399678cb0ac53dd59bb569d52",
"/assets/lib/assets/ui/mission/monthly_mis.png": "730dddc1eed170b192009da54f3d275e",
"/assets/lib/assets/ui/mission/missonBar.png": "434d18a409a287267a0cacbb201daa59",
"/assets/lib/assets/ui/mission/m_fitness.png": "49543dcee4fdc7f179bda94f26e1d369",
"/assets/lib/assets/ui/mission/m_lihkg.png": "15ce40a85a9b4daf72dbf09390815c81",
"/assets/lib/assets/ui/mission/m_mtr.png": "eeea06b49bd8db47422842479fd7baaf",
"/assets/lib/assets/ui/mission/tutor.png": "57c906c10b7d642bfb2f63e9c59ce667",
"/assets/lib/assets/ui/mission/m_wearmask.png": "f345fda885e9f71e5ae368244f92b4f4",
"/assets/lib/assets/ui/mission/misson_sheet.png": "e14636734099563b29d761edd109e097",
"/assets/lib/assets/ui/mission/m_twitter.png": "86e96e8c1f54126d9cbcc752405e2e87",
"/assets/lib/assets/ui/m_icon.png": "2236962d32f934130adbd1bbe57575cd",
"/assets/lib/assets/ui/hs_1.png": "b727802455600897a4620a2ebf0c1db7",
"/assets/lib/assets/ui/portal.png": "23d7a09f4ee4902bd199973bee1334ac",
"/assets/lib/assets/ui/f_icon.png": "88855d987482d5b1e8eb9bf98e6db841",
"/assets/lib/assets/ui/mis_fin.png": "495da85519ee58073e859c89d6ac392c",
"/assets/lib/assets/ui/bookmark.png": "74d4c0a4f0c2bd5bfcaa78c06264a340",
"/assets/lib/assets/ui/enter.png": "0b6f49cd4a9b725c23c6f668965e865b",
"/assets/lib/assets/ui/hs_3.png": "97d6f5a4552bba3d330e756649b5ef57",
"/assets/lib/assets/ui/calendar.png": "e6fde87d2a894d54576b2d032053ca29",
"/assets/lib/assets/ui/share.png": "b49551c4de240c8e9e2b01daa54a2a88",
"/assets/lib/assets/ui/profile.png": "ace890871bd8442065b271c8ec95511f",
"/assets/lib/assets/ui/board.png": "858ccafc50a34ae0cca8303a8662bc60",
"/assets/lib/assets/ui/shopboard.png": "4a6a1e2e3374519f1f44bba67b1517d0",
"/assets/lib/assets/ui/profileBoard.png": "0290c29813d6dc74b78b38d953e82132",
"/assets/lib/assets/ui/boliu.png": "7d9ec4d687aa98ae1a26cd633b367aa0",
"/assets/lib/assets/ui/back.png": "d5f6bf03ec3d9e76d0bad5c618d4b161",
"/assets/lib/assets/ui/hs_1_textonly.png": "4ff0382e2200527c10a182841bdbf5d7",
"/assets/lib/assets/ui/reload.png": "4c3cb2b03cdfb7a574e4ced2718c9dab",
"/assets/lib/assets/ui/f.png": "13a23af93e823d2047c94c23014ce985",
"/assets/lib/assets/watchAds.gif": "40915f057c8953c71e0770d74663cc9d",
"/assets/lib/assets/ok.png": "537b3faac49599a92756790875cbcaa6",
"/assets/lib/assets/yes1.png": "30a99347963a632d29837d71ee0296b4",
"/assets/lib/assets/loading_new.JPG": "3ac96c8e0ab9fb77f61eeefc064b9a15",
"/assets/lib/assets/loading_black.jpeg": "4efeb6732cddf10a33e6c59d224ee52f",
"/assets/lib/assets/yes2.png": "d641b2cb215a6694d92baed09c10f3f2",
"/assets/lib/assets/gone.png": "208f1692255d3856c32dda47f6de636b",
"/assets/lib/assets/empty.png": "75db99b125fe4e9afbe58696320bea73",
"/assets/lib/assets/shopping.png": "feed09cdcabd98afffa5bfe599ec671a",
"/assets/lib/assets/distance.png": "f06538b82d965cc8ebffa2e085b79892",
"/assets/lib/assets/aug.png": "08d29c1f28f0745cf4e49b36f00cc0c5",
"/assets/lib/assets/set.png": "8af8901841d9cd62a8ab5e4a3de348e5",
"/assets/lib/assets/food.png": "752065464d408782054663bca0be18ca",
"/assets/lib/assets/go.png": "68a284b0b33303737e036b8e43841bed",
"/assets/lib/assets/oct.png": "1f4d7f3f4fa51a7916a531a966222a81",
"/assets/lib/assets/lennon.png": "39f659d0a6c2d80ab46f5c498c8ec34b",
"/assets/lib/assets/cover.jpg": "3ac96c8e0ab9fb77f61eeefc064b9a15",
"/assets/lib/assets/new.png": "668da1cae2f97efe7a0a494882944200",
"/assets/lib/assets/eat.png": "03b731125d077186f35b36b9e4f23159",
"/assets/lib/assets/location.png": "ef9def6da2dbba6d369177afdb0804d8",
"/assets/lib/assets/discuss.png": "7b9f049d7d2a9d5877114e53ca833340",
"/assets/lib/assets/jun.png": "95edd959d9630897217c9ed4212a2672",
"/assets/lib/assets/searchButton.png": "e6a88ab2dd6c87687dfff05b01c93677",
"/assets/lib/assets/jul.png": "eb294d967b6a9c62a91d910d1b6f08aa",
"/assets/lib/assets/app_intro_page_4.png": "dfb5caa49e1d9e37f020ce3571f282db",
"/assets/lib/assets/app_intro_page_5.png": "a30aed4cc5e1220509f6c5539f5c3ec6",
"/assets/lib/assets/app_intro_page_1.png": "fab3ab4a4fcafe12300efa2ec15bd437",
"/assets/lib/assets/doMission.png": "01ca2d20c60560cccc618bba578a8077",
"/assets/lib/assets/startmission.png": "f2c6c2deb08a0a03155678e5b7ee106c",
"/assets/lib/assets/app_intro_page_2.png": "5c1fc52cfb6ef6b79de6cc00e3a3d310",
"/assets/lib/assets/app_intro_page_3.png": "fc0d9032045a7192dd21aa55fdcd031d",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
