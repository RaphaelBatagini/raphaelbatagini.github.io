(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2851)}])},1819:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var n=r(5893),o=r(9008),i=r.n(o),a=r(7341);function l(e){let{title:t,description:r}=e,o=a.lz.TN+(t?" - ".concat(t):""),l=r||a.lz.WL;return(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:o}),(0,n.jsx)("meta",{name:"description",content:l})]})}},3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return u}});let o="refresh",i="navigate",a="restore",l="server-patch",c="prefetch",s="fast-refresh",u="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return k}});let n=r(8754),o=n._(r(7294)),i=r(4532),a=r(3353),l=r(1410),c=r(9064),s=r(370),u=r(9955),f=r(4224),d=r(508),h=r(1516),p=r(4266),x=r(3991),g=new Set;function v(e,t,r,n,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(g.has(i))return;g.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let m=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:g,children:m,prefetch:k=null,passHref:b,replace:j,shallow:w,scroll:_,locale:O,onClick:N,onMouseEnter:C,onTouchStart:L,legacyBehavior:E=!1,...P}=e;r=m,E&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let T=!1!==k,A=null===k?x.PrefetchKind.AUTO:x.PrefetchKind.FULL,M=o.default.useContext(u.RouterContext),R=o.default.useContext(f.AppRouterContext),S=null!=M?M:R,B=!M,{href:I,as:z}=o.default.useMemo(()=>{if(!M){let e=y(l);return{href:e,as:g?y(g):e}}let[e,t]=(0,i.resolveHref)(M,l,!0);return{href:e,as:g?(0,i.resolveHref)(M,g):t||e}},[M,l,g]),W=o.default.useRef(I),F=o.default.useRef(z);E&&(n=o.default.Children.only(r));let U=E?n&&"object"==typeof n&&n.ref:t,[q,D,K]=(0,d.useIntersection)({rootMargin:"200px"}),H=o.default.useCallback(e=>{(F.current!==z||W.current!==I)&&(K(),F.current=z,W.current=I),q(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[z,U,I,K,q]);o.default.useEffect(()=>{S&&D&&T&&v(S,I,z,{locale:O},{kind:A},B)},[z,I,D,O,T,null==M?void 0:M.locale,S,B,A]);let V={ref:H,onClick(e){E||"function"!=typeof N||N(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,i,l,c,s,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:l,locale:s,scroll:c}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?o.default.startTransition(p):p()}(e,S,I,z,j,w,_,O,B,T)},onMouseEnter(e){E||"function"!=typeof C||C(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(T||!B)&&v(S,I,z,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:A},B)},onTouchStart(e){E||"function"!=typeof L||L(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(T||!B)&&v(S,I,z,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:A},B)}};if((0,c.isAbsoluteUrl)(z))V.href=z;else if(!E||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,h.getDomainLocale)(z,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);V.href=t||(0,p.addBasePath)((0,s.addLocale)(z,e,null==M?void 0:M.defaultLocale))}return E?o.default.cloneElement(n,V):o.default.createElement("a",{...P,...V},r)}),k=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,a=new Map,l=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,s=c||!i,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||u)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,u,d.current]);let p=(0,n.useCallback)(()=>{f(!1)},[]);return[h,u,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2851:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893);r(3753);var o=r(7294),i=r(1664),a=r.n(i),l=r(6893),c=r(7341);function s(){let[e,t]=(0,o.useState)(!1);return(0,n.jsxs)("nav",{className:"bg-gray-800",children:[(0,n.jsx)("div",{className:"container mx-auto px-4",children:(0,n.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)(a(),{href:c.Ok.LE,className:"text-white text-lg font-bold",children:c.lz.TN})}),(0,n.jsx)("div",{className:"hidden md:block",children:(0,n.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[(0,n.jsx)(a(),{href:c.Ok.Dq,className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Articles"}),(0,n.jsx)(a(),{href:c.Ok.Jx,className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Contacts"})]})}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)("button",{type:"button",className:"text-gray-300 hover:text-white focus:outline-none focus:text-white",onClick:()=>{t(!e)},children:e?(0,n.jsx)(l.q5L,{size:24}):(0,n.jsx)(l.cur,{size:24})})})]})}),e&&(0,n.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[(0,n.jsx)(a(),{href:c.Ok.Dq,className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Articles"}),(0,n.jsx)(a(),{href:c.Ok.Jx,className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Contacts"})]})]})}var u=()=>(0,n.jsx)("footer",{className:"bg-gray-900 py-6",children:(0,n.jsxs)("div",{className:"container mx-auto text-white text-center",children:[(0,n.jsx)("p",{className:"text-lg mb-2",children:"Stay Connected"}),(0,n.jsx)("p",{className:"text-sm",children:"Follow me on social media to get the latest updates, articles, and videos on software engineering and technology."}),(0,n.jsxs)("div",{className:"flex justify-center mt-4",children:[(0,n.jsx)("a",{href:c.xs.km,target:"_blank",rel:"noopener noreferrer",className:"mr-4",children:(0,n.jsx)(l.Ccr,{className:"text-2xl text-white hover:text-blue-400"})}),(0,n.jsx)("a",{href:c.xs.kG,target:"_blank",rel:"noopener noreferrer",className:"mr-4",children:(0,n.jsx)(l.qOw,{className:"text-2xl text-white hover:text-blue-400"})}),(0,n.jsx)("a",{href:c.xs.bW,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(l.uOf,{className:"text-2xl text-white hover:text-blue-400"})})]}),(0,n.jsxs)("p",{className:"mt-4 text-sm",children:["\xa9 ",new Date().getFullYear()," ",c.lz.TN,". All rights reserved."]})]})});function f(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)(s,{}),(0,n.jsx)("main",{className:"flex-grow flex",children:(0,n.jsx)("div",{className:"container mx-auto px-4 my-1",children:t})}),(0,n.jsx)(u,{})]})}var d=r(1819);function h(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(d.F,{}),(0,n.jsx)(f,{children:(0,n.jsx)(t,{...r})})]})}},3753:function(){},9008:function(e,t,r){e.exports=r(2636)},1664:function(e,t,r){e.exports=r(5569)},6893:function(e,t,r){"use strict";r.d(t,{Ao2:function(){return o},BVE:function(){return u},Ccr:function(){return d},E25:function(){return f},Rgz:function(){return i},cur:function(){return s},fzv:function(){return h},q5L:function(){return p},qOw:function(){return c},uOf:function(){return l},vlc:function(){return a}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(e)}function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(e)}function s(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function u(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polygon",attr:{points:"10 8 16 12 10 16 10 8"}}]})(e)}function f(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(e)}function d(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(e)}function h(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function p(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function c(e){return function(t){return n.createElement(s,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,o=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},7341:function(e){"use strict";e.exports=JSON.parse('{"lz":{"TN":"Raphael Batagini","WL":"Technology, Programming, and other stuff"},"xs":{"ZB":"https://www.youtube.com/channel/UCVL1yn5X1RBkBMqi1K2W7iA","km":"https://twitter.com/raphaelbatagini","kG":"https://www.linkedin.com/in/raphael-batagini/","bW":"https://github.com/RaphaelBatagini"},"Ok":{"LE":"/","Dq":"/articles/1","Jx":"/contacts"}}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);