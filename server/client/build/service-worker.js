"use strict";var precacheConfig=[["/index.html","3135ce32af5bc01bc6164051fa3222a5"],["/static/css/main.ed1b6c5c.css","7738e5c7afcbd59c7e726a89967b5e48"],["/static/js/main.8b9dbbfb.js","0e20f32de5c58d5c7ba85ecb75174877"],["/static/media/MaterialIcons-Regular.012cf6a1.woff","012cf6a10129e2275d79d6adac7f3b02"],["/static/media/MaterialIcons-Regular.570eb838.woff2","570eb83859dc23dd0eec423a49e147fe"],["/static/media/MaterialIcons-Regular.a37b0c01.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/static/media/MaterialIcons-Regular.e79bfd88.eot","e79bfd88537def476913f3ed52f4f4b3"],["/static/media/_variables.571509ea.scss","571509ea614b3e5864e195ac7dab7502"],["/static/media/tw-codesnippet.b36392b2.svg","b36392b20383a5f5098a8e3271f45c01"],["/static/media/tw-consultant.cea2bbff.svg","cea2bbffd756e978f4b62657cc1ed338"],["/static/media/tw-github.d0a1965a.svg","d0a1965a8f83ad876d27dbebe0b48b87"],["/static/media/tw-linkedin.23ace475.svg","23ace4759cf03e9b7347e48268065654"],["/static/media/tw-official-logo-white.177bec20.svg","177bec2059fa7ea89c1ef353b9a020f8"],["/static/media/tw-project-chatbox.432892a6.jpg","432892a6351c987ca22ef6c772459c7f"],["/static/media/tw-project-twitch-api.e012994a.jpg","e012994aa6f7f9c61ad11e8aa69b22ab"],["/static/media/tw-project-weather-app.acfb87e4.jpg","acfb87e49943086a11e845ef549f806b"],["/static/media/tw-project-wikipedia-api.047ff82f.jpg","047ff82f9faa6d03c3ddd097edd2b3ff"],["/static/media/tw-strtup.ee2606f1.svg","ee2606f1a5ca5d06f329676c83c5915e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});