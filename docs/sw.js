if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let t={};const a=e=>s(e,r),c={module:{uri:r},exports:t,require:a};n[r]=Promise.all(i.map((e=>c[e]||a(e)))).then((e=>(o(...e),t)))}}define(["./workbox-f77d3598"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2712792d.css",revision:null},{url:"assets/index-6181cf35.js",revision:null},{url:"index.html",revision:"88b8763b5a9ade85ba0421655f421a23"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/favicon.svg",revision:"5de94d53507593e5ddb0e333b2ae4eac"},{url:"icons/transparent/manifest-icon-192.png",revision:"913c47954b2bb459bdee94c13bb22433"},{url:"icons/transparent/manifest-icon-512.png",revision:"e102e5656bcfb82b6a1db95d46daf813"},{url:"icons/maskable/manifest-icon-192.png",revision:"f8e824fce767038170a9e1833ecfa207"},{url:"icons/maskable/manifest-icon-512.png",revision:"a2aac3eca9af903a64d5843ad78afc9e"},{url:"manifest.webmanifest",revision:"be3fc6e6c821f91fa6b6ca38e8946b78"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/localhost:3000\/.*/iu,new e.CacheFirst({cacheName:"app-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,maxEntries:100})]}),"GET"),e.registerRoute(/^(?!https:\/\/localhost:3000\/).*/iu,new e.NetworkOnly,"GET")}));
