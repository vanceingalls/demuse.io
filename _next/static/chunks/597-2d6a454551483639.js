(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{92236:function(e,i,t){"use strict";t.d(i,{Z:function(){return $}});var r,n=[],o="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var a,s=function(e){return Object.freeze(e)},u=function(e,i){this.inlineSize=e,this.blockSize=i,s(this)},c=function(){function e(e,i,t,r){return this.x=e,this.y=i,this.width=t,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,s(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(i){return new e(i.x,i.y,i.width,i.height)},e}(),l=function(e){return e instanceof SVGElement&&"getBBox"in e},b=function(e){if(l(e)){var i=e.getBBox(),t=i.width,r=i.height;return!t&&!r}var n=e,o=n.offsetWidth,a=n.offsetHeight;return!(o||a||e.getClientRects().length)},d=function(e){var i,t;if(e instanceof Element)return!0;var r=null===(t=null===(i=e)||void 0===i?void 0:i.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},f="undefined"!==typeof window?window:{},w=new WeakMap,p=/auto|scroll/,h=/^tb|vertical/,v=/msie|trident/i.test(f.navigator&&f.navigator.userAgent),m=function(e){return parseFloat(e||"0")},g=function(e,i,t){return void 0===e&&(e=0),void 0===i&&(i=0),void 0===t&&(t=!1),new u((t?i:e)||0,(t?e:i)||0)},y=s({devicePixelContentBoxSize:g(),borderBoxSize:g(),contentBoxSize:g(),contentRect:new c(0,0,0,0)}),x=function(e,i){if(void 0===i&&(i=!1),w.has(e)&&!i)return w.get(e);if(b(e))return w.set(e,y),y;var t=getComputedStyle(e),r=l(e)&&e.ownerSVGElement&&e.getBBox(),n=!v&&"border-box"===t.boxSizing,o=h.test(t.writingMode||""),a=!r&&p.test(t.overflowY||""),u=!r&&p.test(t.overflowX||""),d=r?0:m(t.paddingTop),f=r?0:m(t.paddingRight),x=r?0:m(t.paddingBottom),O=r?0:m(t.paddingLeft),S=r?0:m(t.borderTopWidth),k=r?0:m(t.borderRightWidth),E=r?0:m(t.borderBottomWidth),T=O+f,z=d+x,B=(r?0:m(t.borderLeftWidth))+k,C=S+E,_=u?e.offsetHeight-C-e.clientHeight:0,A=a?e.offsetWidth-B-e.clientWidth:0,P=n?T+B:0,I=n?z+C:0,M=r?r.width:m(t.width)-P-A,R=r?r.height:m(t.height)-I-_,j=M+T+A+B,N=R+z+_+C,U=s({devicePixelContentBoxSize:g(Math.round(M*devicePixelRatio),Math.round(R*devicePixelRatio),o),borderBoxSize:g(j,N,o),contentBoxSize:g(M,R,o),contentRect:new c(O,d,M,R)});return w.set(e,U),U},O=function(e,i,t){var n=x(e,t),o=n.borderBoxSize,a=n.contentBoxSize,s=n.devicePixelContentBoxSize;switch(i){case r.DEVICE_PIXEL_CONTENT_BOX:return s;case r.BORDER_BOX:return o;default:return a}},S=function(e){var i=x(e);this.target=e,this.contentRect=i.contentRect,this.borderBoxSize=s([i.borderBoxSize]),this.contentBoxSize=s([i.contentBoxSize]),this.devicePixelContentBoxSize=s([i.devicePixelContentBoxSize])},k=function(e){if(b(e))return 1/0;for(var i=0,t=e.parentNode;t;)i+=1,t=t.parentNode;return i},E=function(){var e=1/0,i=[];n.forEach((function(t){if(0!==t.activeTargets.length){var r=[];t.activeTargets.forEach((function(i){var t=new S(i.target),n=k(i.target);r.push(t),i.lastReportedSize=O(i.target,i.observedBox),n<e&&(e=n)})),i.push((function(){t.callback.call(t.observer,r,t.observer)})),t.activeTargets.splice(0,t.activeTargets.length)}}));for(var t=0,r=i;t<r.length;t++){(0,r[t])()}return e},T=function(e){n.forEach((function(i){i.activeTargets.splice(0,i.activeTargets.length),i.skippedTargets.splice(0,i.skippedTargets.length),i.observationTargets.forEach((function(t){t.isActive()&&(k(t.target)>e?i.activeTargets.push(t):i.skippedTargets.push(t))}))}))},z=function(){var e=0;for(T(e);n.some((function(e){return e.activeTargets.length>0}));)e=E(),T(e);return n.some((function(e){return e.skippedTargets.length>0}))&&function(){var e;"function"===typeof ErrorEvent?e=new ErrorEvent("error",{message:o}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=o),window.dispatchEvent(e)}(),e>0},B=[],C=function(e){if(!a){var i=0,t=document.createTextNode("");new MutationObserver((function(){return B.splice(0).forEach((function(e){return e()}))})).observe(t,{characterData:!0}),a=function(){t.textContent=""+(i?i--:i++)}}B.push(e),a()},_=0,A={attributes:!0,characterData:!0,childList:!0,subtree:!0},P=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],I=function(e){return void 0===e&&(e=0),Date.now()+e},M=!1,R=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var i=this;if(void 0===e&&(e=250),!M){M=!0;var t,r=I(e);t=function(){var t=!1;try{t=z()}finally{if(M=!1,e=r-I(),!_)return;t?i.run(1e3):e>0?i.run(e):i.start()}},C((function(){requestAnimationFrame(t)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,i=function(){return e.observer&&e.observer.observe(document.body,A)};document.body?i():f.addEventListener("DOMContentLoaded",i)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),P.forEach((function(i){return f.addEventListener(i,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),P.forEach((function(i){return f.removeEventListener(i,e.listener,!0)})),this.stopped=!0)},e}()),j=function(e){!_&&e>0&&R.start(),!(_+=e)&&R.stop()},N=function(){function e(e,i){this.target=e,this.observedBox=i||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,i=O(this.target,this.observedBox,!0);return e=this.target,l(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=i),this.lastReportedSize.inlineSize!==i.inlineSize||this.lastReportedSize.blockSize!==i.blockSize},e}(),U=function(e,i){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=i},q=new WeakMap,D=function(e,i){for(var t=0;t<e.length;t+=1)if(e[t].target===i)return t;return-1},V=function(){function e(){}return e.connect=function(e,i){var t=new U(e,i);q.set(e,t)},e.observe=function(e,i,t){var r=q.get(e),o=0===r.observationTargets.length;D(r.observationTargets,i)<0&&(o&&n.push(r),r.observationTargets.push(new N(i,t&&t.box)),j(1),R.schedule())},e.unobserve=function(e,i){var t=q.get(e),r=D(t.observationTargets,i),o=1===t.observationTargets.length;r>=0&&(o&&n.splice(n.indexOf(t),1),t.observationTargets.splice(r,1),j(-1))},e.disconnect=function(e){var i=this,t=q.get(e);t.observationTargets.slice().forEach((function(t){return i.unobserve(e,t.target)})),t.activeTargets.splice(0,t.activeTargets.length)},e}(),W=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");V.connect(this,e)}return e.prototype.observe=function(e,i){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!d(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");V.observe(this,e,i)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!d(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");V.unobserve(this,e)},e.prototype.disconnect=function(){V.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}(),F=t(67294);var L=F["undefined"!==typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];var X=e=>{const i=F.useRef(e);return F.useEffect((()=>{i.current=e})),i};const G="undefined"!==typeof window&&"ResizeObserver"in window?window.ResizeObserver:W;function H(){}let Y;const Z=()=>Y||(Y=function(){let e=!1,i=[];const t=new Map,r=new G(((r,n)=>{i=i.concat(r),e||window.requestAnimationFrame((function(){const r=new Set;for(let e=0;e<i.length;e++){if(r.has(i[e].target))continue;r.add(i[e].target);const o=t.get(i[e].target);null===o||void 0===o||o.forEach((t=>t(i[e],n)))}i=[],e=!1})),e=!0}));return{observer:r,subscribe(e,i){var n;r.observe(e);const o=null!==(n=t.get(e))&&void 0!==n?n:[];o.push(i),t.set(e,o)},unsubscribe(e,i){var n;const o=null!==(n=t.get(e))&&void 0!==n?n:[];if(1===o.length)return r.unobserve(e),void t.delete(e);const a=o.indexOf(i);-1!==a&&o.splice(a,1),t.set(e,o)}}}());var $=function(e,i){const t=Z(),r=X(i);return L((()=>{let i=!1;const n=e&&"current"in e?e.current:e;if(!n)return H;function o(e,t){i||r.current(e,t)}return t.subscribe(n,o),()=>{i=!0,t.unsubscribe(n,o)}}),[e,t,r]),t.observer}},85518:function(e,i,t){"use strict";var r,n=t(67294),o=(r=n)&&"object"===typeof r&&"default"in r?r.default:r,a=t(23451),s=new a,u=s.getBrowser(),c=s.getCPU(),l=s.getDevice(),b=s.getEngine(),d=s.getOS(),f=s.getUA(),w=function(e){return s.setUA(e)},p=function(e){if(e){var i=new a(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(e){return i.setUA(e)}}}console.error("No userAgent string was provided")},h=Object.freeze({ClientUAInstance:s,browser:u,cpu:c,device:l,engine:b,os:d,ua:f,setUa:w,parseUserAgent:p});function v(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function m(e){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function x(){return x=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function S(e,i){return S=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e},S(e,i)}function k(e,i){if(null==e)return{};var t,r,n=function(e,i){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,n,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!i||o.length!==i);a=!0);}catch(u){s=!0,n=u}finally{try{a||null==t.return||t.return()}finally{if(s)throw n}}return o}(e,i)||function(e,i){if(!e)return;if("string"===typeof e)return z(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,i)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,r=new Array(i);t<i;t++)r[t]=e[t];return r}var B="mobile",C="tablet",_="smarttv",A="console",P="wearable",I="embedded",M=void 0,R={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},j={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},N={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},U=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},q=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},D=function(e){var i=q();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},V=function(e,i,t,r){return function(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?v(Object(t),!0).forEach((function(i){y(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}({},e,{vendor:U(i.vendor),model:U(i.model),os:U(t.name),osVersion:U(t.version),ua:U(r)})};var W=function(e){return e.type===B},F=function(e){return e.type===C},L=function(e){var i=e.type;return i===B||i===C},X=function(e){return e.type===_},G=function(e){return e.type===M},H=function(e){return e.type===P},Y=function(e){return e.type===A},Z=function(e){return e.type===I},$=function(e){var i=e.vendor;return U(i)},J=function(e){var i=e.model;return U(i)},K=function(e){var i=e.type;return U(i,"browser")},Q=function(e){return e.name===j.Android},ee=function(e){return e.name===j.Windows},ie=function(e){return e.name===j.MAC_OS},te=function(e){return e.name===j.WindowsPhone},re=function(e){return e.name===j.IOS},ne=function(e){var i=e.version;return U(i)},oe=function(e){var i=e.name;return U(i)},ae=function(e){return e.name===R.Chrome},se=function(e){return e.name===R.Firefox},ue=function(e){return e.name===R.Chromium},ce=function(e){return e.name===R.Edge},le=function(e){return e.name===R.Yandex},be=function(e){var i=e.name;return i===R.Safari||i===R.MobileSafari},de=function(e){return e.name===R.MobileSafari},fe=function(e){return e.name===R.Opera},we=function(e){var i=e.name;return i===R.InternetExplorer||i===R.Ie},pe=function(e){return e.name===R.MIUI},he=function(e){return e.name===R.SamsungBrowser},ve=function(e){var i=e.version;return U(i)},me=function(e){var i=e.major;return U(i)},ge=function(e){var i=e.name;return U(i)},ye=function(e){var i=e.name;return U(i)},xe=function(e){var i=e.version;return U(i)},Oe=function(){var e=q(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)},Se=function(e){return"string"===typeof e&&-1!==e.indexOf("Edg/")},ke=function(){var e=q();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},Ee=function(){return D("iPad")},Te=function(){return D("iPhone")},ze=function(){return D("iPod")},Be=function(e){return U(e)};function Ce(e){var i=e||h,t=i.device,r=i.browser,n=i.os,o=i.engine,a=i.ua;return{isSmartTV:X(t),isConsole:Y(t),isWearable:H(t),isEmbedded:Z(t),isMobileSafari:de(r)||Ee(),isChromium:ue(r),isMobile:L(t)||Ee(),isMobileOnly:W(t),isTablet:F(t)||Ee(),isBrowser:G(t),isDesktop:G(t),isAndroid:Q(n),isWinPhone:te(n),isIOS:re(n)||Ee(),isChrome:ae(r),isFirefox:se(r),isSafari:be(r),isOpera:fe(r),isIE:we(r),osVersion:ne(n),osName:oe(n),fullBrowserVersion:ve(r),browserVersion:me(r),browserName:ge(r),mobileVendor:$(t),mobileModel:J(t),engineName:ye(o),engineVersion:xe(o),getUA:Be(a),isEdge:ce(r)||Se(a),isYandex:le(r),deviceType:K(t),isIOS13:ke(),isIPad13:Ee(),isIPhone13:Te(),isIPod13:ze(),isElectron:Oe(),isEdgeChromium:Se(a),isLegacyEdge:ce(r)&&!Se(a),isWindows:ee(n),isMacOs:ie(n),isMIUI:pe(r),isSamsungBrowser:he(r)}}var _e=X(l),Ae=Y(l),Pe=H(l),Ie=Z(l),Me=de(u)||Ee(),Re=ue(u),je=L(l)||Ee(),Ne=W(l),Ue=F(l)||Ee(),qe=G(l),De=G(l),Ve=Q(d),We=te(d),Fe=re(d)||Ee(),Le=ae(u),Xe=se(u),Ge=be(u),He=fe(u),Ye=we(u),Ze=ne(d),$e=oe(d),Je=ve(u),Ke=me(u),Qe=ge(u),ei=$(l),ii=J(l),ti=ye(b),ri=xe(b),ni=Be(f),oi=ce(u)||Se(f),ai=le(u),si=K(l),ui=ke(),ci=Ee(),li=Te(),bi=ze(),di=Oe(),fi=Se(f),wi=ce(u)&&!Se(f),pi=ee(d),hi=ie(d),vi=pe(u),mi=he(u);function gi(e){var i=e||window.navigator.userAgent;return p(i)}i.tq=je},23451:function(e,i,t){var r;!function(n,o){"use strict";var a="function",s="undefined",u="object",c="string",l="model",b="name",d="type",f="vendor",w="version",p="architecture",h="console",v="mobile",m="tablet",g="smarttv",y="wearable",x="embedded",O="Amazon",S="Apple",k="ASUS",E="BlackBerry",T="Firefox",z="Google",B="Huawei",C="LG",_="Microsoft",A="Motorola",P="Opera",I="Samsung",M="Sony",R="Xiaomi",j="Zebra",N="Facebook",U=function(e){for(var i={},t=0;t<e.length;t++)i[e[t].toUpperCase()]=e[t];return i},q=function(e,i){return typeof e===c&&-1!==D(i).indexOf(D(e))},D=function(e){return e.toLowerCase()},V=function(e,i){if(typeof e===c)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof i===s?e:e.substring(0,255)},W=function(e,i){for(var t,r,n,s,c,l,b=0;b<i.length&&!c;){var d=i[b],f=i[b+1];for(t=r=0;t<d.length&&!c;)if(c=d[t++].exec(e))for(n=0;n<f.length;n++)l=c[++r],typeof(s=f[n])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):o:this[s[0]]=l?s[1].call(this,l,s[2]):o:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):o):this[s]=l||o;b+=2}},F=function(e,i){for(var t in i)if(typeof i[t]===u&&i[t].length>0){for(var r=0;r<i[t].length;r++)if(q(i[t][r],e))return"?"===t?o:t}else if(q(i[t],e))return"?"===t?o:t;return e},L={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},X={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,w],[/opios[\/ ]+([\w\.]+)/i],[w,[b,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[w,[b,P]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[b,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[b,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[w,[b,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[w,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[b,"IE"]],[/yabrowser\/([\w\.]+)/i],[w,[b,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure Browser"],w],[/\bfocus\/([\w\.]+)/i],[w,[b,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[w,[b,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[b,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[b,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[w,[b,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 Browser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[b,w],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,N],w],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[b,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[b,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[b,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,"Chrome WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[b,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,w],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[w,[b,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[w,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[w,F,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[b,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[b,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,D]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",D]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,D]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[f,I],[d,m]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[f,I],[d,v]],[/\((ip(?:hone|od)[\w ]*);/i],[l,[f,S],[d,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[f,S],[d,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[f,B],[d,m]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[l,[f,B],[d,v]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[f,R],[d,v]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[f,R],[d,m]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[f,"OPPO"],[d,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[f,"Vivo"],[d,v]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[f,"Realme"],[d,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[f,A],[d,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[f,A],[d,m]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[f,C],[d,m]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[f,C],[d,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[f,"Lenovo"],[d,m]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[f,"Nokia"],[d,v]],[/(pixel c)\b/i],[l,[f,z],[d,m]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[f,z],[d,v]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[f,M],[d,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[f,M],[d,m]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[f,"OnePlus"],[d,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[f,O],[d,m]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[f,O],[d,v]],[/(playbook);[-\w\),; ]+(rim)/i],[l,f,[d,m]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[f,E],[d,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[f,k],[d,m]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[f,k],[d,v]],[/(nexus 9)/i],[l,[f,"HTC"],[d,m]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[f,[l,/_/g," "],[d,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[f,"Acer"],[d,m]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[f,"Meizu"],[d,v]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[f,"Sharp"],[d,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,l,[d,v]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,l,[d,m]],[/(surface duo)/i],[l,[f,_],[d,m]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[f,"Fairphone"],[d,v]],[/(u304aa)/i],[l,[f,"AT&T"],[d,v]],[/\bsie-(\w*)/i],[l,[f,"Siemens"],[d,v]],[/\b(rct\w+) b/i],[l,[f,"RCA"],[d,m]],[/\b(venue[\d ]{2,7}) b/i],[l,[f,"Dell"],[d,m]],[/\b(q(?:mv|ta)\w+) b/i],[l,[f,"Verizon"],[d,m]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[f,"Barnes & Noble"],[d,m]],[/\b(tm\d{3}\w+) b/i],[l,[f,"NuVision"],[d,m]],[/\b(k88) b/i],[l,[f,"ZTE"],[d,m]],[/\b(nx\d{3}j) b/i],[l,[f,"ZTE"],[d,v]],[/\b(gen\d{3}) b.+49h/i],[l,[f,"Swiss"],[d,v]],[/\b(zur\d{3}) b/i],[l,[f,"Swiss"],[d,m]],[/\b((zeki)?tb.*\b) b/i],[l,[f,"Zeki"],[d,m]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],l,[d,m]],[/\b(ns-?\w{0,9}) b/i],[l,[f,"Insignia"],[d,m]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[f,"NextBook"],[d,m]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],l,[d,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],l,[d,v]],[/\b(ph-1) /i],[l,[f,"Essential"],[d,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[f,"Envizen"],[d,m]],[/\b(trio[-\w\. ]+) b/i],[l,[f,"MachSpeed"],[d,m]],[/\btu_(1491) b/i],[l,[f,"Rotor"],[d,m]],[/(shield[\w ]+) b/i],[l,[f,"Nvidia"],[d,m]],[/(sprint) (\w+)/i],[f,l,[d,v]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[f,_],[d,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[f,j],[d,m]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[f,j],[d,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,l,[d,h]],[/droid.+; (shield) bui/i],[l,[f,"Nvidia"],[d,h]],[/(playstation [345portablevi]+)/i],[l,[f,M],[d,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[f,_],[d,h]],[/smart-tv.+(samsung)/i],[f,[d,g]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[f,I],[d,g]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,C],[d,g]],[/(apple) ?tv/i],[f,[l,"Apple TV"],[d,g]],[/crkey/i],[[l,"Chromecast"],[f,z],[d,g]],[/droid.+aft(\w)( bui|\))/i],[l,[f,O],[d,g]],[/\(dtv[\);].+(aquos)/i],[l,[f,"Sharp"],[d,g]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[f,V],[l,V],[d,g]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,g]],[/((pebble))app/i],[f,l,[d,y]],[/droid.+; (glass) \d/i],[l,[f,z],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[l,[f,j],[d,y]],[/(quest( 2)?)/i],[l,[f,N],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[d,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[d,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[d,m]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,m]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[d,v]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[b,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,w],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[b,[w,F,L]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,"Windows"],[w,F,L]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,"Mac OS"],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[w,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,w],[/\(bb(10);/i],[w,[b,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[b,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[b,"webOS"]],[/crkey\/([\d\.]+)/i],[w,[b,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[b,"Chromium OS"],w],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,w],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[b,w]]},G=function(e,i){if(typeof e===u&&(i=e,e=o),!(this instanceof G))return new G(e,i).getResult();var t=e||(typeof n!==s&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),r=i?function(e,i){var t={};for(var r in e)i[r]&&i[r].length%2===0?t[r]=i[r].concat(e[r]):t[r]=e[r];return t}(X,i):X;return this.getBrowser=function(){var e,i={};return i.name=o,i.version=o,W.call(i,t,r.browser),i.major=typeof(e=i.version)===c?e.replace(/[^\d\.]/g,"").split(".")[0]:o,i},this.getCPU=function(){var e={};return e.architecture=o,W.call(e,t,r.cpu),e},this.getDevice=function(){var e={};return e.vendor=o,e.model=o,e.type=o,W.call(e,t,r.device),e},this.getEngine=function(){var e={};return e.name=o,e.version=o,W.call(e,t,r.engine),e},this.getOS=function(){var e={};return e.name=o,e.version=o,W.call(e,t,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=typeof e===c&&e.length>255?V(e,255):e,this},this.setUA(t),this};G.VERSION="1.0.2",G.BROWSER=U([b,w,"major"]),G.CPU=U([p]),G.DEVICE=U([l,f,d,h,v,g,m,y,x]),G.ENGINE=G.OS=U([b,w]),typeof i!==s?(e.exports&&(i=e.exports=G),i.UAParser=G):t.amdO?(r=function(){return G}.call(i,t,i,e))===o||(e.exports=r):typeof n!==s&&(n.UAParser=G);var H=typeof n!==s&&(n.jQuery||n.Zepto);if(H&&!H.ua){var Y=new G;H.ua=Y.getResult(),H.ua.get=function(){return Y.getUA()},H.ua.set=function(e){Y.setUA(e);var i=Y.getResult();for(var t in i)H.ua[t]=i[t]}}}("object"===typeof window?window:this)}}]);
//# sourceMappingURL=597-2d6a454551483639.js.map