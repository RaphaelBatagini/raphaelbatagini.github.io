(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{8371:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return n(9085)}])},1819:function(e,t,n){"use strict";n.d(t,{F:function(){return s}});var l=n(5893),r=n(9008),a=n.n(r),i=n(1163);function s(e){let{title:t,description:n,imagePath:r,imageAlt:s,type:o="website"}=e,c="Raphael Batagini"+(t?" - ".concat(t):""),u=null!=n?n:"Technology, Programming, and other stuff",{asPath:p}=(0,i.useRouter)();return(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:c}),(0,l.jsx)("meta",{name:"description",content:u}),(0,l.jsx)("meta",{property:"og:title",content:c}),(0,l.jsx)("meta",{property:"og:type",content:o}),(0,l.jsx)("meta",{property:"og:image",content:null!=r?r:"/static/images/me.jpeg"}),(0,l.jsx)("meta",{property:"og:url",content:p}),(0,l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,l.jsx)("meta",{property:"og:description",content:u}),(0,l.jsx)("meta",{property:"og:site_name",content:"Raphael Batagini"}),!!s&&(0,l.jsx)("meta",{name:"og:image:alt",content:s}),(0,l.jsx)("meta",{name:"twitter:site",content:"@raphaelbatagini"})]})}},9085:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return e1},default:function(){return e2}});var l,r,a=n(5893);let i=e=>e.toString().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/_/g,"-").replace(/--+/g,"-").replace(/-$/g,"");var s=n(6893),o=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}let u=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"“"},m=["style","script"],d=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,g=/\n{2,}$/,h=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,x=/^ *> ?/gm,y=/^ {2,}\n/,k=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,b=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,$=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,N=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,v=/^(?:\n *)*\n/,j=/\r\n?/g,_=/^\[\^([^\]]+)](:.*)\n/,H=/^\[\^([^\]]+)]/,w=/\f/g,I=/^\s*?\[(x|\s)\]/,M=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,E=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,L=/&([a-zA-Z]+);/g,O=/^<!--[\s\S]*?(?:-->)/,A=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,C=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,R=/^\{.*\}$/,G=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,T=/^<([^ >]+@[^ >]+)>/,z=/^<([^ >]+:\/[^ >]+)>/,B=/-([a-z])?/gi,F=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,X=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,P=/^\[([^\]]*)\] ?\[([^\]]*)\]/,W=/(\[|\])/g,U=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,q=/^ *\| */,V=/(^ *\||\| *$)/g,K=/ *$/,Q=/^ *:-+: *$/,J=/^ *:-+ *$/,Y=/^ *-+: *$/,ee=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,et=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,en=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,el=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,er=/^\\([^0-9A-Za-z\s])/,ea=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ei=/^\n+/,es=/^([ \t]*)/,eo=/\\([^\\])/g,ec=/ *\n+$/,eu=/(?:^|\n)( *)$/,ep="(?:\\d+\\.)",em="(?:[*+-])";function ed(e){return"( *)("+(1===e?ep:em)+") +"}let ef=ed(1),eg=ed(2);function eh(e){return RegExp("^"+(1===e?ef:eg))}let ex=eh(1),ey=eh(2);function ek(e){return RegExp("^"+(1===e?ef:eg)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ep:em)+" )[^\\n]*)*(\\n|$)","gm")}let eb=ek(1),e$=ek(2);function eN(e){let t=1===e?ep:em;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}let ev=eN(1),ej=eN(2);function e_(e,t){let n=1===t,l=n?ev:ej,a=n?eb:e$,i=n?ex:ey;return{t(e,t,n){let r=eu.exec(n);return r&&(t.o||!t._&&!t.u)?l.exec(e=r[1]+e):null},i:r.HIGH,l(e,t,l){let r=n?+e[2]:void 0,s=e[0].replace(g,"\n").match(a),o=!1;return{p:s.map(function(e,n){let r;let a=i.exec(e)[0].length,c=RegExp("^ {1,"+a+"}","gm"),u=e.replace(c,"").replace(i,""),p=n===s.length-1,m=-1!==u.indexOf("\n\n")||p&&o;o=m;let d=l._,f=l.o;l.o=!0,m?(l._=!1,r=u.replace(ec,"\n\n")):(l._=!0,r=u.replace(ec,""));let g=t(r,l);return l._=d,l.o=f,g}),m:n,g:r}},h:(t,n,l)=>e(t.m?"ol":"ul",{key:l.k,start:t.g},t.p.map(function(t,r){return e("li",{key:r},n(t,l))}))}}let eH=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,ew=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eI=[h,b,$,M,S,O,F,eb,ev,e$,ej],eM=[...eI,/^[^\n]+(?:  \n|\n{2,})/,E,C];function eS(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function eE(e){return Y.test(e)?"right":Q.test(e)?"center":J.test(e)?"left":null}function eL(e,t,n){let l=n.v;n.v=!0;let r=t(e.trim(),n);n.v=l;let a=[[]];return r.forEach(function(e,t){"tableSeparator"===e.type?0!==t&&t!==r.length-1&&a.push([]):("text"!==e.type||null!=r[t+1]&&"tableSeparator"!==r[t+1].type||(e.$=e.$.replace(K,"")),a[a.length-1].push(e))}),a}function eO(e,t,n){n._=!0;let l=eL(e[1],t,n),r=e[2].replace(V,"").split("|").map(eE),a=e[3].trim().split("\n").map(function(e){return eL(e,t,n)});return n._=!1,{S:r,A:a,L:l,type:"table"}}function eA(e,t){return null==e.S[t]?{}:{textAlign:e.S[t]}}function eC(e){return function(t,n){return n._?e.exec(t):null}}function eR(e){return function(t,n){return n._||n.u?e.exec(t):null}}function eG(e){return function(t,n){return n._||n.u?null:e.exec(t)}}function eT(e){return function(t){return e.exec(t)}}function ez(e,t,n){if(t._||t.u||n&&!n.endsWith("\n"))return null;let l="";e.split("\n").every(e=>!eI.some(t=>t.test(e))&&(l+=e+"\n",e.trim()));let r=l.trimEnd();return""==r?null:[l,r]}function eB(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function eF(e){return e.replace(eo,"$1")}function eX(e,t,n){let l=n._||!1,r=n.u||!1;n._=!0,n.u=!0;let a=e(t,n);return n._=l,n.u=r,a}function eD(e,t,n){return n._=!1,e(t+"\n\n",n)}let eP=(e,t,n)=>({$:eX(t,e[1],n)});function eW(){return{}}function eU(){return null}function eZ(e,t,n){let l=e,r=t.split(".");for(;r.length&&void 0!==(l=l[r[0]]);)r.shift();return l||n}function eq(e){let{level:t,children:n,...l}=e,r="h".concat(t);switch(l.className=l.className||"",t){case 1:default:l.className+=" text-4xl font-bold mt-6 mb-2";break;case 2:l.className+=" text-3xl font-bold mt-6 mb-2";break;case 3:l.className+=" text-2xl font-bold mt-6 mb-2";break;case 4:l.className+=" text-xl font-bold mt-6 mb-2";break;case 5:l.className+=" text-lg font-bold mt-6 mb-2";break;case 6:l.className+=" text-base font-bold mt-6 mb-2"}return(0,a.jsx)(r,{...l,children:n})}function eV(e){let{children:t,...n}=e;return n.className=n.className||"",n.className+=" text-base mt-4 mb-2 leading-relaxed",(0,a.jsx)("p",{...n,children:t})}function eK(e){let{children:t,...n}=e;return n.className=n.className||"",n.className+=" text-sm font-mono bg-gray-900 text-green-300 rounded p-2 overflow-x-auto block",(0,a.jsx)("code",{...n,children:t})}(l=r||(r={}))[l.MAX=0]="MAX",l[l.HIGH=1]="HIGH",l[l.MED=2]="MED",l[l.LOW=3]="LOW",l[l.MIN=4]="MIN";var eQ=n(1819),eJ=n(5675),eY=n.n(eJ);function e0(e){let{post:t}=e;return(0,a.jsx)(eY(),{src:"/static/images/posts/banners/".concat(t.id,".").concat(t.image.split(".").pop()),width:752,height:423,alt:"Post banner",className:"rounded-lg mb-4",priority:!0})}var e1=!0;function e2(e){var t;let{post:n}=e,l=function(e,t={}){let n;t.overrides=t.overrides||{},t.slugify=t.slugify||eS,t.namedCodesToUnicode=t.namedCodesToUnicode?c({},p,t.namedCodesToUnicode):p;let l=t.createElement||o.createElement;function a(e,n,...r){let i=eZ(t.overrides,`${e}.props`,{});return l(function(e,t){let n=eZ(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:eZ(t,`${e}.component`,e):e}(e,t.overrides),c({},n,i,{className:function(...e){return e.filter(Boolean).join(" ")}(null==n?void 0:n.className,i.className)||void 0}),...r)}function i(e){let n,l=!1;t.forceInline?l=!0:t.forceBlock||(l=!1===U.test(e));let r=J(Q(l?e:`${e.trimEnd().replace(ei,"")}

`,{_:l}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===t.wrapper)return r;let i=t.wrapper||(l?"span":"div");if(r.length>1||t.forceWrapper)n=r;else{if(1===r.length)return"string"==typeof(n=r[0])?a("span",{key:"outer"},n):n;n=null}return o.createElement(i,{key:"outer"},n)}function s(e){let t=e.match(d);return t?t.reduce(function(e,t,n){let l=t.indexOf("=");if(-1!==l){var r,a;let s=(-1!==(r=t.slice(0,l)).indexOf("-")&&null===r.match(A)&&(r=r.replace(B,function(e,t){return t.toUpperCase()})),r).trim(),c=function(e){let t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(l+1).trim()),p=u[s]||s,m=e[p]=(a=c,"style"===s?a.split(/;\s?/).reduce(function(e,t){let n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=t.slice(n.length+1).trim(),e},{}):"href"===s?eB(a):(a.match(R)&&(a=a.slice(1,a.length-1)),"true"===a||"false"!==a&&a));"string"==typeof m&&(E.test(m)||C.test(m))&&(e[p]=o.cloneElement(i(m.trim()),{key:n}))}else"style"!==t&&(e[u[t]||t]=!0);return e},{}):null}let g=[],V={},K={blockQuote:{t:eG(h),i:r.HIGH,l:(e,t,n)=>({$:t(e[0].replace(x,""),n)}),h:(e,t,n)=>a("blockquote",{key:n.k},t(e.$,n))},breakLine:{t:eT(y),i:r.HIGH,l:eW,h:(e,t,n)=>a("br",{key:n.k})},breakThematic:{t:eG(k),i:r.HIGH,l:eW,h:(e,t,n)=>a("hr",{key:n.k})},codeBlock:{t:eG($),i:r.MAX,l:e=>({$:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(e,t,n)=>a("pre",{key:n.k},a("code",c({},e.I,{className:e.M?`lang-${e.M}`:""}),e.$))},codeFenced:{t:eG(b),i:r.MAX,l:e=>({I:s(e[3]||""),$:e[4],M:e[2]||void 0,type:"codeBlock"})},codeInline:{t:eR(N),i:r.LOW,l:e=>({$:e[2]}),h:(e,t,n)=>a("code",{key:n.k},e.$)},footnote:{t:eG(_),i:r.MAX,l:e=>(g.push({O:e[2],B:e[1]}),{}),h:eU},footnoteReference:{t:eC(H),i:r.HIGH,l:e=>({$:e[1],R:`#${t.slugify(e[1])}`}),h:(e,t,n)=>a("a",{key:n.k,href:eB(e.R)},a("sup",{key:n.k},e.$))},gfmTask:{t:eC(I),i:r.HIGH,l:e=>({T:"x"===e[1].toLowerCase()}),h:(e,t,n)=>a("input",{checked:e.T,key:n.k,readOnly:!0,type:"checkbox"})},heading:{t:eG(M),i:r.HIGH,l:(e,n,l)=>({$:eX(n,e[2],l),j:t.slugify(e[2]),C:e[1].length}),h:(e,t,n)=>a(`h${e.C}`,{id:e.j,key:n.k},t(e.$,n))},headingSetext:{t:eG(S),i:r.MAX,l:(e,t,n)=>({$:eX(t,e[1],n),C:"="===e[2]?1:2,type:"heading"})},htmlComment:{t:eT(O),i:r.HIGH,l:()=>({}),h:eU},image:{t:eR(ew),i:r.HIGH,l:e=>({D:e[1],R:eF(e[2]),N:e[3]}),h:(e,t,n)=>a("img",{key:n.k,alt:e.D||void 0,title:e.N||void 0,src:eB(e.R)})},link:{t:eC(eH),i:r.LOW,l:(e,t,n)=>({$:function(e,t,n){let l=n._||!1,r=n.u||!1;n._=!1,n.u=!0;let a=e(t,n);return n._=l,n.u=r,a}(t,e[1],n),R:eF(e[2]),N:e[3]}),h:(e,t,n)=>a("a",{key:n.k,href:eB(e.R),title:e.N},t(e.$,n))},linkAngleBraceStyleDetector:{t:eC(z),i:r.MAX,l:e=>({$:[{$:e[1],type:"text"}],R:e[1],type:"link"})},linkBareUrlDetector:{t:(e,t)=>t.Z?null:eC(G)(e,t),i:r.MAX,l:e=>({$:[{$:e[1],type:"text"}],R:e[1],N:void 0,type:"link"})},linkMailtoDetector:{t:eC(T),i:r.MAX,l(e){let t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{$:[{$:t.replace("mailto:",""),type:"text"}],R:n,type:"link"}}},orderedList:e_(a,1),unorderedList:e_(a,2),newlineCoalescer:{t:eG(v),i:r.LOW,l:eW,h:()=>"\n"},paragraph:{t:ez,i:r.LOW,l:eP,h:(e,t,n)=>a("p",{key:n.k},t(e.$,n))},ref:{t:eC(X),i:r.MAX,l:e=>(V[e[1]]={R:e[2],N:e[4]},{}),h:eU},refImage:{t:eR(D),i:r.MAX,l:e=>({D:e[1]||void 0,F:e[2]}),h:(e,t,n)=>a("img",{key:n.k,alt:e.D,src:eB(V[e.F].R),title:V[e.F].N})},refLink:{t:eC(P),i:r.MAX,l:(e,t,n)=>({$:t(e[1],n),P:t(e[0].replace(W,"\\$1"),n),F:e[2]}),h:(e,t,n)=>V[e.F]?a("a",{key:n.k,href:eB(V[e.F].R),title:V[e.F].N},t(e.$,n)):a("span",{key:n.k},t(e.P,n))},table:{t:eG(F),i:r.HIGH,l:eO,h:(e,t,n)=>a("table",{key:n.k},a("thead",null,a("tr",null,e.L.map(function(l,r){return a("th",{key:r,style:eA(e,r)},t(l,n))}))),a("tbody",null,e.A.map(function(l,r){return a("tr",{key:r},l.map(function(l,r){return a("td",{key:r,style:eA(e,r)},t(l,n))}))})))},tableSeparator:{t:function(e,t){return t.v?q.exec(e):null},i:r.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:eT(ea),i:r.MIN,l:e=>({$:e[0].replace(L,(e,n)=>t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e)}),h:e=>e.$},textBolded:{t:eR(ee),i:r.MED,l:(e,t,n)=>({$:t(e[2],n)}),h:(e,t,n)=>a("strong",{key:n.k},t(e.$,n))},textEmphasized:{t:eR(et),i:r.LOW,l:(e,t,n)=>({$:t(e[2],n)}),h:(e,t,n)=>a("em",{key:n.k},t(e.$,n))},textEscaped:{t:eR(er),i:r.HIGH,l:e=>({$:e[1],type:"text"})},textMarked:{t:eR(en),i:r.LOW,l:eP,h:(e,t,n)=>a("mark",{key:n.k},t(e.$,n))},textStrikethroughed:{t:eR(el),i:r.LOW,l:eP,h:(e,t,n)=>a("del",{key:n.k},t(e.$,n))}};!0!==t.disableParsingRawHTML&&(K.htmlBlock={t:eT(E),i:r.HIGH,l(e,t,n){let[,l]=e[3].match(es),r=RegExp(`^${l}`,"gm"),a=e[3].replace(r,""),i=eM.some(e=>e.test(a))?eD:eX,o=e[1].toLowerCase(),c=-1!==m.indexOf(o);n.Z=n.Z||"a"===o;let u=c?e[3]:i(t,a,n);return n.Z=!1,{I:s(e[2]),$:u,G:c,H:c?o:e[1]}},h:(e,t,n)=>a(e.H,c({key:n.k},e.I),e.G?e.$:t(e.$,n))},K.htmlSelfClosing={t:eT(C),i:r.HIGH,l:e=>({I:s(e[2]||""),H:e[1]}),h:(e,t,n)=>a(e.H,c({},e.I,{key:n.k}))});let Q=((n=Object.keys(K)).sort(function(e,t){let n=K[e].i,l=K[t].i;return n!==l?n-l:e<t?-1:1}),function(e,t){return function e(t,l){let r=[],a="";for(;t;){let i=0;for(;i<n.length;){let s=n[i],o=K[s],c=o.t(t,l,a);if(c){let n=c[0];t=t.substring(n.length);let i=o.l(c,e,l);null==i.type&&(i.type=s),r.push(i),a=n;break}i++}}return r}(e.replace(j,"\n").replace(w,"").replace(Z,"    "),t)}),J=function e(t,n={}){var l;if(Array.isArray(t)){let l=n.k,r=[],a=!1;for(let l=0;l<t.length;l++){n.k=l;let i=e(t[l],n),s="string"==typeof i;s&&a?r[r.length-1]+=i:null!==i&&r.push(i),a=s}return n.k=l,r}return l=e,K[t.type].h(t,l,n)},Y=i(e);return g.length?a("div",null,Y,a("footer",{key:"footer"},g.map(function(e){return a("div",{id:t.slugify(e.B),key:e.B},e.B,J(Q(e.O,{_:!0})))}))):Y}(n.content,{wrapper:null,overrides:{h2:{component:eq,props:{level:2}},h3:{component:eq,props:{level:3}},h4:{component:eq,props:{level:4}},h5:{component:eq,props:{level:5}},h6:{component:eq,props:{level:6}},p:{component:eV},code:{component:eK}}});return(0,a.jsxs)("div",{className:"grid grid-cols-12 my-4",children:[(0,a.jsx)(eQ.F,{title:n.title,description:n.description,imagePath:(t=n.image,"/static/images/posts/banners/".concat(t.split(".")[0],"-twitter.").concat(t.split(".")[1])),type:"article"}),(0,a.jsxs)("div",{className:"col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4",children:[(0,a.jsxs)("div",{className:"relative aspect-video mb-4",children:[n.image&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e0,{post:n}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"})]}),(0,a.jsx)(eq,{level:1,className:"text-white absolute bottom-4 left-4 right-4",children:n.title})]}),(0,a.jsxs)("div",{className:"my-8 flex flex-col sm:flex-row items-start lg:items-center justify-between gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center text-gray-600",children:[(0,a.jsx)(s.fzv,{className:"mr-2"}),(0,a.jsx)("p",{children:"Written by:"}),(0,a.jsx)("p",{className:"ml-2",children:n.author.name})]}),(0,a.jsxs)("div",{className:"flex items-center text-gray-600",children:[(0,a.jsx)(s.vlc,{className:"mr-2"}),(0,a.jsx)("p",{children:"Published on:"}),(0,a.jsx)("p",{className:"ml-2",children:n.publishDate})]})]}),(0,a.jsx)("div",{className:"prose max-w-none text-justify text-base leading-6",children:l}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Tags:"}),(0,a.jsx)("div",{className:"flex flex-wrap mt-2",children:n.tags.map(e=>(0,a.jsxs)("span",{className:"mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-lg",children:[(0,a.jsx)(s.E25,{className:"inline-block mr-1"}),e]},e))})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Categories:"}),(0,a.jsx)("ul",{children:n.categories.map(e=>(0,a.jsx)("li",{children:e},i(e)))})]})]})]})}}},function(e){e.O(0,[345,774,888,179],function(){return e(e.s=8371)}),_N_E=e.O()}]);