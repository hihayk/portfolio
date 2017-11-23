"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio/index.html","4556abcb6225ee2aafe1347e14bf66e8"],["/portfolio/static/js/main.10a038f3.js","18a8346474ecef280643b96e48765223"],["/portfolio/static/media/Graphik-400.4b5cf6a3.woff2","4b5cf6a38749301ff5f8cd19066fda08"],["/portfolio/static/media/Graphik-400.b85fc122.woff","b85fc122097aac8608bae69fe472dbc3"],["/portfolio/static/media/Graphik-400.ed1882cf.eot","ed1882cfa4a66c001a3b8e84d65ce0e2"],["/portfolio/static/media/Graphik-700.44c69b3c.woff","44c69b3ce20ef8f733224f1b7560f432"],["/portfolio/static/media/Graphik-700.541512ff.eot","541512ff766b6df19690f3b70fd7f0ef"],["/portfolio/static/media/Graphik-700.fffc533e.woff2","fffc533ed59626970df939d2c84d557f"],["/portfolio/static/media/bicefal1-hayk-an-design.7743e254.png","7743e254cefea98270e950832d468d6f"],["/portfolio/static/media/bicefal2-hayk-an-design.73e3f890.png","73e3f8902d094fdf905e787beea1537f"],["/portfolio/static/media/modulator2-hayk-an-design.aba5d3a2.gif","aba5d3a2ad1d5ea11f4f0ff56d9690c5"],["/portfolio/static/media/modulator3-hayk-an-design.a172f0f5.png","a172f0f5d067f28117fb8ea7ccedc5e1"],["/portfolio/static/media/modulator4-hayk-an-design.7a46967f.gif","7a46967fedb30d058d401b3aa3c798f0"],["/portfolio/static/media/travelperk11-hayk-an-design.01b40faf.png","01b40faf666434a806ba88a0668ed9cc"],["/portfolio/static/media/travelperk12-hayk-an-design.d1da0113.png","d1da011393e38e5e1d080db1fa12c372"],["/portfolio/static/media/travelperk13-hayk-an-design.5fc90936.png","5fc90936951c1ec8a9f1b74d381d2dc6"],["/portfolio/static/media/travelperk14-hayk-an-design.ddc6ce24.png","ddc6ce248ed6d3503ad37ab97a2b3c17"],["/portfolio/static/media/travelperk2-hayk-an-design.2589c3f7.png","2589c3f7826133b4135f5f6aa307444b"],["/portfolio/static/media/travelperk6-hayk-an-design.2930e79f.png","2930e79fbe746b6988139d544a87f0e4"],["/portfolio/static/media/travelperk7-hayk-an-design.c567ed08.png","c567ed082009bc3b3ee24cde007342ae"],["/portfolio/static/media/travelperk8-hayk-an-design.0966ae9a.png","0966ae9adb831c2c02a5b24a1ceb6b76"],["/portfolio/static/media/travelperk9-hayk-an-design.9f73638f.png","9f73638f108481f090cbb8018e56f22f"],["/portfolio/static/media/unit1-hayk-an-design.6ab40b25.png","6ab40b259e441e6846f38aea0df099fa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/portfolio/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});