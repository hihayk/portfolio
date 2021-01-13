"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","19e61a78216b32f5457d2006a9d1479c"],["/static/js/main.e06d3816.js","058bb01d7870e215c92643b45250253e"],["/static/media/AtlasGrotesk-400.49390c11.woff2","49390c118d719fe8909b07b6e7882565"],["/static/media/AtlasGrotesk-400.a879ca75.woff","a879ca7505476a72eb30e07b7168bec0"],["/static/media/AtlasGrotesk-700.01d0652d.woff","01d0652d1819dd999882704027e8fa93"],["/static/media/AtlasGrotesk-700.6c092d42.woff2","6c092d428c25aef1979150c72cfcc98e"],["/static/media/aylevs-001.4cdd9d62.jpg","4cdd9d626e3f124eec3138df3315319a"],["/static/media/bicefal.c9c6492f.png","c9c6492fa382be1ba400f499aca6f30a"],["/static/media/bicefal2-hayk-an-design.7627ec09.png","7627ec09155d7544381f8a875a97996a"],["/static/media/bicefal3-hayk-an-design.80628cbc.png","80628cbc23439ed75bdd2dfb40638506"],["/static/media/colors.f52edf4c.png","f52edf4c33affad68ba35a3a2344eee8"],["/static/media/components-mix.be8f362b.png","be8f362befa24046623c58cb6a00a1fd"],["/static/media/components.84ded235.png","84ded235f13f9746cc11012a37468854"],["/static/media/ds-process.7b413bf8.svg","7b413bf88ac5eedd427d4b5da93e6f63"],["/static/media/embed.813311fc.png","813311fc96aff116bdc83f28db38a28c"],["/static/media/icons-preview.a8cdd2ec.svg","a8cdd2ecb4270e64d91c86f2cd3efee8"],["/static/media/icons.b9461521.png","b9461521909964976b57be284c9e5502"],["/static/media/integrate.a36758c0.png","a36758c09e980ac28c10c7b867ec04ce"],["/static/media/layouts.b8869f0d.png","b8869f0deae6059f1c3cf17ccf3f8d23"],["/static/media/modulator2-hayk-an-design.aba5d3a2.gif","aba5d3a2ad1d5ea11f4f0ff56d9690c5"],["/static/media/modulator3-hayk-an-design.a172f0f5.png","a172f0f5d067f28117fb8ea7ccedc5e1"],["/static/media/modulator4-hayk-an-design.7a46967f.gif","7a46967fedb30d058d401b3aa3c798f0"],["/static/media/poster-four.287aa16c.png","287aa16c104bae10d42ada6504465a05"],["/static/media/poster-three.81f3534c.png","81f3534cecbddbd0573bdbbdf9a8211f"],["/static/media/rmx-cover.33a98696.jpg","33a98696c3da39ba03e4994000c2c218"],["/static/media/sb-button.d02456b1.png","d02456b1e79f358d4318a1f5375ead00"],["/static/media/scale1-hayk-an-design.9b13b328.png","9b13b328db53ff59f31ea26acc784a82"],["/static/media/scale2-hayk-an-design.053a877c.png","053a877ca5122199ef5c181415d61a97"],["/static/media/scale3-hayk-an-design.1263e799.gif","1263e799f058d5626f42d1c2dc996a84"],["/static/media/scale5-hayk-an-design.2504ba7a.gif","2504ba7a2262129c9323a473d0edcb71"],["/static/media/scale6-hayk-an-design.410f485e.gif","410f485e6b9fa9cfdd313feef846673d"],["/static/media/sequence1-hayk-an-design.3e8353a2.png","3e8353a23afcd06b121fbb4ecdab8835"],["/static/media/sequence3-hayk-an-design.ca61f64a.png","ca61f64a07cabd1ca858596b64922626"],["/static/media/sequence4-hayk-an-design.a552949f.png","a552949f87ed3a1e1dddb4546d84a84a"],["/static/media/sequence5-hayk-an-design.017273bd.png","017273bda4f466c66e233c997cf0c117"],["/static/media/settings.b6592ee2.png","b6592ee24ade18f70f98139a30a44c4f"],["/static/media/sp-bg.95b76944.png","95b7694448c3f2ee850d9ad96a7304fb"],["/static/media/sp-typography.ba9c6303.png","ba9c63033f289276d62d065b1a0aa02d"],["/static/media/travelperk11-hayk-an-design.01b40faf.png","01b40faf666434a806ba88a0668ed9cc"],["/static/media/travelperk12-hayk-an-design.d1da0113.png","d1da011393e38e5e1d080db1fa12c372"],["/static/media/travelperk13-hayk-an-design.5fc90936.png","5fc90936951c1ec8a9f1b74d381d2dc6"],["/static/media/travelperk14-hayk-an-design.ae5c72bb.png","ae5c72bb2a3a3415bd846d905cfded84"],["/static/media/travelperk18-hayk-an-design.15098173.png","150981730191428ee119d1b945a82900"],["/static/media/travelperk21-hayk-an-design.d88ee08d.png","d88ee08d37209e1d17f47ac80ea7e960"],["/static/media/travelperk22-hayk-an-design.f6c974d2.png","f6c974d2c3236d5ce7f37d6a4ed31175"],["/static/media/travelperk23-hayk-an-design.7031afb7.png","7031afb7734ce93b328c63440aac8e01"],["/static/media/travelperk24-hayk-an-design.3124c64a.png","3124c64a4a165d5f945ba8a37513037e"],["/static/media/travelperk25-hayk-an-design.8446a6ff.png","8446a6ffe78acbbb582ed27e34c96f22"],["/static/media/travelperk26-hayk-an-design.8b85575f.png","8b85575fd03630d15792b8b8138255b8"],["/static/media/type.799fb0a6.svg","799fb0a6678a94097c8b4f937c6d068b"],["/static/media/unit.588df930.png","588df930036df8d96366ae24bc9165b4"],["/static/media/unsplash.a8225da6.png","a8225da6e353afb23a5b85f642b8d719"],["/static/media/versal.4d3ce5fc.png","4d3ce5fc1d2ef523df9bef8f44cea87e"],["/static/media/vg-radius.3ace2c11.png","3ace2c1194b34f4477515aa248fef3b7"],["/static/media/vg-shadows.9df7e4fb.png","9df7e4fb1905edbb1b0b0e251044e746"],["/static/media/vg-space.1edaa1dc.png","1edaa1dc52c456f3ca6ce91209d3d30d"],["/static/media/vg-type.0ea424fb.png","0ea424fbba4f7800ac65be032e8488f9"],["/static/media/wheel1-hayk-an-design.ad8bf9bc.png","ad8bf9bc913be2943c8d92874954e7d6"],["/static/media/wheel2-hayk-an-design.00d09e8f.gif","00d09e8f415739b3f81952cecf11f2cf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});