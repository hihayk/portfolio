"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio/index.html","6008933f8b3ce917496cf5e1fc8604f9"],["/portfolio/static/js/main.eda99beb.js","3705d13745e619fa97e8139b11b77b9c"],["/portfolio/static/media/bicefal1-hayk-an-design.7743e254.png","7743e254cefea98270e950832d468d6f"],["/portfolio/static/media/bicefal2-hayk-an-design.73e3f890.png","73e3f8902d094fdf905e787beea1537f"],["/portfolio/static/media/modulator1-hayk-an-design.75fbf729.png","75fbf7290cf209d729882de2019cee47"],["/portfolio/static/media/travelperk11-hayk-an-design.01b40faf.png","01b40faf666434a806ba88a0668ed9cc"],["/portfolio/static/media/travelperk2-hayk-an-design.2589c3f7.png","2589c3f7826133b4135f5f6aa307444b"],["/portfolio/static/media/travelperk6-hayk-an-design.2930e79f.png","2930e79fbe746b6988139d544a87f0e4"],["/portfolio/static/media/travelperk7-hayk-an-design.c567ed08.png","c567ed082009bc3b3ee24cde007342ae"],["/portfolio/static/media/travelperk8-hayk-an-design.0966ae9a.png","0966ae9adb831c2c02a5b24a1ceb6b76"],["/portfolio/static/media/travelperk9-hayk-an-design.9f73638f.png","9f73638f108481f090cbb8018e56f22f"],["/portfolio/static/media/unit1-hayk-an-design.6ab40b25.png","6ab40b259e441e6846f38aea0df099fa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});