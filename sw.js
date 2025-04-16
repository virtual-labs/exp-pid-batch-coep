importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"0c7a47371c396efbb0f660f4cc1c6d92","url":"feedback.html"},{"revision":"1f799811f28ff440f59006c87d0aac8d","url":"images/Batch_Process_Piping.png"},{"revision":"e54437cfd34312ac4da7d16788fef383","url":"images/Batch_Process_Sensors.png"},{"revision":"3f96ba4fb37db88dcdcca012a0f67913","url":"images/Mimic.png"},{"revision":"b03134734855b6e2989c3cf59642f742","url":"index.html"},{"revision":"129013cb643bde37838fa84604a41152","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"3f933ca2b8e2453b35998ec85391877d","url":"posttest.html"},{"revision":"dbb19a6048b7f3fc2e91f225cf41a112","url":"posttest.json"},{"revision":"144b9e3116aa8b419d90030854102485","url":"pretest.html"},{"revision":"66d117f78cfb97ac646fbb4838eb811d","url":"pretest.json"},{"revision":"9b5c0fd6ee8b7f67c6b3220c4bcea972","url":"procedure.html"},{"revision":"ced5a7b5c3b06725b39e3fdc65e250c7","url":"references.html"},{"revision":"8247f5b3423c0bb1372445ed7ab6f6aa","url":"simulation.html"},{"revision":"30a7f8321f1b54271380c01593a2d211","url":"simulation/css/dryer.css"},{"revision":"069a46be8243f7a724ad24ba882d7b00","url":"simulation/css/header.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"bc080f56368a522817321e1807f7f6d6","url":"simulation/css/pageStyle.css"},{"revision":"0cc8ff9b75cf89c228abf273ca2a530b","url":"simulation/css/question.css"},{"revision":"3fb8b8d4d48e9a24e5b0bad1f3a42e51","url":"simulation/css/result.css"},{"revision":"62e2723022d58dcd019d816413d7d5f9","url":"simulation/css/style.css"},{"revision":"f32243e48c4923d6db7f7871490fd64a","url":"simulation/css/toastr.min.css"},{"revision":"284047ad8682d04b53b11202f6be9528","url":"simulation/images/angleValveClose.png"},{"revision":"074fbe5add5bd8e036d4f3ff6c8d55f4","url":"simulation/images/angleValveOpen.png"},{"revision":"424c091dc9fbca111c340bbe0fcb4f7f","url":"simulation/images/bearing.png"},{"revision":"1f799811f28ff440f59006c87d0aac8d","url":"simulation/images/BP_withoutSensor.png"},{"revision":"e54437cfd34312ac4da7d16788fef383","url":"simulation/images/BP_withSensor.png"},{"revision":"7507ef7138ed540b78ae8a310c73ce1a","url":"simulation/images/COEPlogo.png"},{"revision":"46e47c29558f33d25599b1e9792a1f19","url":"simulation/images/controlValve.png"},{"revision":"490c8980d4e2f8a572efe84a871fc26a","url":"simulation/images/green.png"},{"revision":"822cf1c2a7e1a59eeb6039c5f8030417","url":"simulation/images/hand.png"},{"revision":"d7ecc5889194985fededdca69f4f19c3","url":"simulation/images/LCHanger.png"},{"revision":"23f3d563900391f6bdedb5e56967870b","url":"simulation/images/loadcell.png"},{"revision":"d848de3258961e871300c7d7e5a6e90d","url":"simulation/images/loadCellBatch1.png"},{"revision":"fc04f5f7beb20e18f1ad82ec21867a54","url":"simulation/images/motor.png"},{"revision":"65266f3dc3c7160f1ed47b7db19161ca","url":"simulation/images/motorGreen.png"},{"revision":"84bf13aab20fbc6c94aa3948e98ac4f6","url":"simulation/images/motorRed.png"},{"revision":"dee0555cf5320feb97daa11fb15c0a4f","url":"simulation/images/mototStrOff.png"},{"revision":"4965fe797fd082ec943ee68b0a6a21cc","url":"simulation/images/mototStrOn.png"},{"revision":"9762fd1463455bac7a9a653fdc9e1488","url":"simulation/images/partA.png"},{"revision":"f3e8374b1dee188d81f60918549a27e6","url":"simulation/images/pipe1.png"},{"revision":"ef2731c8fca164a78bce3928afdf1374","url":"simulation/images/pipe2.png"},{"revision":"827b81846786fc046bfed1892c3ffb48","url":"simulation/images/red.png"},{"revision":"ec626d535a3386f574f8b15a28491c6c","url":"simulation/images/robot.png"},{"revision":"8bc364b35904a0ba959005a5aaa923ff","url":"simulation/images/robotBase.png"},{"revision":"8d513d4e2935a60feae1a3f62e415531","url":"simulation/images/stirrer_frame1.png"},{"revision":"5c4fa0f239b1c92b73223797ea699db5","url":"simulation/images/stirrer_frame21.png"},{"revision":"49d0a3d0137f7f94f0c3d72321178ea0","url":"simulation/images/stirrerRod.png"},{"revision":"900abe518dad827a13dbd88b2a7f5f79","url":"simulation/images/svValveV1R.png"},{"revision":"b60881b7a89064724d1cf2ac382cb096","url":"simulation/images/svValveV2G.png"},{"revision":"3dc20bee8f7237425823194b92cea8ce","url":"simulation/images/tankInit.png"},{"revision":"0692229dcba6798708b70d0085c2e1b9","url":"simulation/images/topRobot.png"},{"revision":"9cebfd5e9cfc0dc2ffcf88cb6e9c046f","url":"simulation/images/ttSensor.png"},{"revision":"fc18f27e83cdf19b409910ab7c73e71e","url":"simulation/images/ultrasonic.png"},{"revision":"9738b4d8d48d0cd4ad7f64c9f7713763","url":"simulation/images/verticalValveOff.png"},{"revision":"3ae55bdd5a90bc5445d9ace14dcc4bd7","url":"simulation/images/verticalValveOn.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlablogo.jpg"},{"revision":"24428bd460df9bccb39996e86871d4a8","url":"simulation/index.html"},{"revision":"2f34b630ffe30ba2ff2b91e3f3c322a1","url":"simulation/js/bootstrap.min.js"},{"revision":"87685c9b4445f247d3253bedbd1cf650","url":"simulation/js/chart.js"},{"revision":"4f252523d4af0b478c810c2547a63e19","url":"simulation/js/jquery.js"},{"revision":"0927441ac23b008d64e75ca217ebcc47","url":"simulation/js/jquery.min.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"074952d02fd65490bb6e8eb97ed36bcf","url":"simulation/js/raphael.js"},{"revision":"28c964ed8001f7e9930dc7c0a6daf2e1","url":"simulation/js/raphael.min.js"},{"revision":"b648915f7cee680fddac2670a61b9b73","url":"simulation/js/toastr.min.js"},{"revision":"a008d66c062fb7d2213421991fb64e31","url":"simulation/src/BatchProcessBottleFillingInstrument.js"},{"revision":"f501f4b448d94c46f1f861d08fb8a175","url":"simulation/src/BatchProcessBottleFillingMimic.js"},{"revision":"02d8e25ef44b2a190b959f34fc6cd725","url":"simulation/src/BatchProcessBottleFillingMimic2.js"},{"revision":"81890ff47050383f25ef1969aa03b6e7","url":"simulation/src/BatchProcessBottleFillingPiping.js"},{"revision":"c69c97ab506244f25a79785d5a1c3cea","url":"simulation/src/BatchProcessBottleFillingSquActivities.js"},{"revision":"bd57e2f52afe7f643e28c6ad62212250","url":"simulation/src/BatchProcessDatasheet.js"},{"revision":"fc4cd03e73723a02cf3e00a4e3735666","url":"simulation/src/batchProcessGraph.js"},{"revision":"28b440a8e27e3adbd6ef21e7bc49abfd","url":"simulation/src/landingPage.js"},{"revision":"45ff29644a4e93a0c5885b0a5a5eb43f","url":"simulation/src/popupData.js"},{"revision":"dec6516a336474bb830c777011e763f9","url":"simulation/src/questionJson.js"},{"revision":"b46ec7360ccc70dea8cf615a7a4030ca","url":"simulation/src/result.js"},{"revision":"ae79cdb2d065368ee2b5fe51bd6e74fc","url":"simulation/src/stdJson.js"},{"revision":"1756bdb369ab634afd87d20e4ebbb9ad","url":"simulation/src/timer.js"},{"revision":"9e055cf1f1c6b0356b25e65e597d4511","url":"theory.html"},{"revision":"e9f82c8979f5de59396183ed25a2c430","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );