(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{6815:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[page]",function(){return s(3235)}])},1819:function(e,t,s){"use strict";s.d(t,{F:function(){return r}});var a=s(5893),l=s(9008),n=s.n(l),c=s(1163),i=s(3454);function r(e){var t,s;let{title:l,description:r,imagePath:o,imageAlt:d,type:m="website"}=e,x="Raphael Batagini"+(l?" - ".concat(l):""),p=null!=r?r:"Technology, Programming, and other stuff",{asPath:u}=(0,c.useRouter)();return(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:x}),(0,a.jsx)("meta",{name:"description",content:p}),(0,a.jsx)("meta",{property:"og:title",content:x}),(0,a.jsx)("meta",{property:"og:type",content:m}),(0,a.jsx)("meta",{property:"og:image",content:(null!==(t=i.env.NEXT_PUBLIC_SITE_ROOT)&&void 0!==t?t:"")+(null!=o?o:"/static/images/me.jpeg")}),(0,a.jsx)("meta",{property:"og:url",content:(null!==(s=i.env.NEXT_PUBLIC_SITE_ROOT)&&void 0!==s?s:"")+u}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{property:"og:description",content:p}),(0,a.jsx)("meta",{property:"og:site_name",content:"Raphael Batagini"}),!!d&&(0,a.jsx)("meta",{name:"og:image:alt",content:d}),(0,a.jsx)("meta",{name:"twitter:site",content:"@raphaelbatagini"})]})}},3235:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return p},default:function(){return u}});var a=s(5893),l=s(6893),n=s(1163),c=s(1664),i=s.n(c),r=s(5675),o=s.n(r);function d(e){let{post:t,className:s}=e;return(0,a.jsx)(o(),{src:"/static/images/posts/thumbnails/".concat(t.id,".").concat(t.image.split(".").pop()),width:522,height:522,alt:"Post thumbnail",className:s,loading:"eager"})}function m(e){var t;let{post:s}=e;return(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 p-4 mb-8 grid grid-cols-12 gap-4",children:[s.image&&(0,a.jsx)("div",{className:"col-span-12 md:col-span-4 aspect-square",children:(0,a.jsx)(d,{post:s,className:"rounded-lg w-full"})}),(0,a.jsxs)("div",{className:"col-span-12 md:col-span-8 flex flex-col",children:[(0,a.jsxs)("div",{className:"flex-grow flex flex-col",children:[(0,a.jsx)("p",{className:"font-bold text-gray-950",children:null===(t=s.categories)||void 0===t?void 0:t[0]}),(0,a.jsx)("h2",{className:"text-xl font-bold mb-2",children:s.title}),(0,a.jsxs)("p",{className:"mb-2",children:[(s.description||s.content).replace(/(<([^>]+)>)/gi,"").substring(0,120),"..."]}),(0,a.jsx)("ul",{className:"flex flex-wrap space-x-2 mb-2",children:s.tags.map(e=>(0,a.jsxs)("li",{className:"bg-gray-200 rounded-full px-3 py-1 text-sm",children:["#",e]},e))})]}),(0,a.jsxs)("div",{className:"grid sm:grid-cols-2 gap-4 mt-2",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(l.fzv,{className:"inline-block mr-1"}),(0,a.jsx)("p",{className:"text-sm text-gray-600",children:s.author.name})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(l.vlc,{className:"inline-block mr-1"}),(0,a.jsx)("p",{className:"text-sm text-gray-600",children:s.publishDate})]})]})]})]},s.id)}var x=s(1819),p=!0;function u(e){let{posts:t,currentPage:s,totalPages:c,totalPosts:r}=e,o=(0,n.useRouter)(),d=e=>{let t=s;"previous"===e&&s>1?t=s-1:"next"===e&&s<c&&(t=s+1),o.push("/articles/".concat(t))};return(0,a.jsxs)("div",{className:"grid grid-cols-12",children:[(0,a.jsx)(x.F,{title:"Articles",description:"See my blog posts"}),(0,a.jsxs)("div",{className:"col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4",children:[(0,a.jsx)("h1",{className:"text-3xl my-4",children:"Articles"}),t.map(e=>(0,a.jsx)(i(),{href:"/article/".concat(e.id),children:(0,a.jsx)(m,{post:e})},e.id)),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row place-content-between",children:[(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsxs)("p",{children:["Showing articles ",5*(s-1)+1,"-",5*s," of a total of ",r," ",1===r?"article":"articles"]})}),(0,a.jsxs)("div",{className:"flex mt-4 justify-center lg:mt-0",children:[(0,a.jsxs)("button",{className:"px-2 py-1 rounded-md ".concat(1===s?"text-gray-500 cursor-not-allowed":"text-gray-700 hover:text-gray-900"),onClick:()=>d("previous"),disabled:1===s,children:[(0,a.jsx)(l.Ao2,{className:"inline-block mr-1"}),"Previous"]}),(0,a.jsxs)("button",{className:"ml-4 px-2 py-1 rounded-md ".concat(s===c?"text-gray-500 cursor-not-allowed":"text-gray-700 hover:text-gray-900"),onClick:()=>d("next"),disabled:s===c,children:["Next",(0,a.jsx)(l.Rgz,{className:"inline-block ml-1"})]})]})]})]})]})}}},function(e){e.O(0,[752,774,888,179],function(){return e(e.s=6815)}),_N_E=e.O()}]);