"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[54044],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),k=r,c=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},34363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:2},i=void 0,p={unversionedId:"JavaScript/readme",id:"JavaScript/readme",title:"readme",description:"ES6",source:"@site/docs/JavaScript/readme.md",sourceDirName:"JavaScript",slug:"/JavaScript/",permalink:"/docs/JavaScript/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"javascriptSidebar",previous:{title:"\u6ce8\u91ca",permalink:"/docs/JavaScript/\u7f16\u5199\u53ef\u7ef4\u62a4\u7684JavaScript/\u6ce8\u91ca"},next:{title:"JavaScript\u600e\u4e48\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362",permalink:"/docs/JavaScript/JavaScript\u600e\u4e48\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362"}},o={},d=[{value:"<code>ES6</code>",id:"es6",level:2},{value:"6.1 Promise(\u57fa\u672c\u4e0a\u8981\u6c42\u53ef\u4ee5\u624b\u5199Promise.all\u65b9\u6cd5)",id:"61-promise\u57fa\u672c\u4e0a\u8981\u6c42\u53ef\u4ee5\u624b\u5199promiseall\u65b9\u6cd5",level:4},{value:"6.2 \u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u6709\u4ec0\u4e48\u533a\u522b",id:"62-\u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u6709\u4ec0\u4e48\u533a\u522b",level:4},{value:"6.2.1 \u7bad\u5934\u51fd\u6570\u8bed\u6cd5\u66f4\u52a0\u7b80\u6d01\u6e05\u6670",id:"621-\u7bad\u5934\u51fd\u6570\u8bed\u6cd5\u66f4\u52a0\u7b80\u6d01\u6e05\u6670",level:5},{value:"6.2.2 \u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684<code>this</code>",id:"622-\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684this",level:5},{value:"6.2.3 \u7bad\u5934\u51fd\u6570\u7ee7\u627f\u800c\u6765\u7684this\u6307\u5411\u6c38\u8fdc\u4e0d\u53d8",id:"623-\u7bad\u5934\u51fd\u6570\u7ee7\u627f\u800c\u6765\u7684this\u6307\u5411\u6c38\u8fdc\u4e0d\u53d8",level:5},{value:"6.2.4 .call()/.apply()/.bind()\u65e0\u6cd5\u6539\u53d8\u7bad\u5934\u51fd\u6570\u4e2dthis\u7684\u6307\u5411",id:"624-callapplybind\u65e0\u6cd5\u6539\u53d8\u7bad\u5934\u51fd\u6570\u4e2dthis\u7684\u6307\u5411",level:5},{value:"6.2.5 \u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u4f7f\u7528",id:"625-\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u4f7f\u7528",level:5},{value:"6.2.6 \u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684arguments",id:"626-\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684arguments",level:5},{value:"6.2.7 \u7bad\u5934\u51fd\u6570\u6ca1\u6709\u539f\u578bprototype",id:"627-\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u539f\u578bprototype",level:5},{value:"6.2.8 \u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u4f5cGenerator\u51fd\u6570\uff0c\u4e0d\u80fd\u4f7f\u7528yeild\u5173\u952e\u5b57",id:"628-\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u4f5cgenerator\u51fd\u6570\u4e0d\u80fd\u4f7f\u7528yeild\u5173\u952e\u5b57",level:5},{value:"6.3 Map",id:"63-map",level:4},{value:"6.4 Set",id:"64-set",level:4},{value:"JavaScript \u91cc\u6700\u5927\u7684\u5b89\u5168\u7684\u6574\u6570\u4e3a\u4ec0\u4e48\u662f2\u768453\u6b21\u65b9\u51cf\u4e00",id:"javascript-\u91cc\u6700\u5927\u7684\u5b89\u5168\u7684\u6574\u6570\u4e3a\u4ec0\u4e48\u662f2\u768453\u6b21\u65b9\u51cf\u4e00",level:2},{value:"JavaScript\u91cc\u4e3a\u4ec0\u4e480.1+0.1\u4e0d\u7b49\u4e8e0.3",id:"javascript\u91cc\u4e3a\u4ec0\u4e480101\u4e0d\u7b49\u4e8e03",level:2},{value:"H5\u62c9\u8d77App\uff0c\u5982\u679c\u6ca1\u6709\u5b89\u88c5\u8df3\u8f6c\u5e94\u7528\u5e02\u573a",id:"h5\u62c9\u8d77app\u5982\u679c\u6ca1\u6709\u5b89\u88c5\u8df3\u8f6c\u5e94\u7528\u5e02\u573a",level:2},{value:"Object.defineProperties\u90fd\u6709\u54ea\u4e9b\u53c2\u6570\uff0c\u4ee5\u53ca\u53c2\u6570\u89e3\u91ca",id:"objectdefineproperties\u90fd\u6709\u54ea\u4e9b\u53c2\u6570\u4ee5\u53ca\u53c2\u6570\u89e3\u91ca",level:2},{value:"requestAnimation",id:"requestanimation",level:2},{value:"\u5982\u4f55\u904d\u5386\u5bf9\u8c61\uff0c\u6709\u4f55\u4e0d\u540c",id:"\u5982\u4f55\u904d\u5386\u5bf9\u8c61\u6709\u4f55\u4e0d\u540c",level:2},{value:"\u539f\u751f\u5b9e\u73b0insertAfter",id:"\u539f\u751f\u5b9e\u73b0insertafter",level:2},{value:"\u5b9e\u73b0\u4e00\u4e2aEventEmitter",id:"\u5b9e\u73b0\u4e00\u4e2aeventemitter",level:2},{value:"node\u600e\u4e48\u8d77\u4e00\u4e2a\u670d\u52a1",id:"node\u600e\u4e48\u8d77\u4e00\u4e2a\u670d\u52a1",level:2},{value:"node\u4e2dbody-parse\u6709\u4ec0\u4e48\u4f5c\u7528",id:"node\u4e2dbody-parse\u6709\u4ec0\u4e48\u4f5c\u7528",level:2},{value:"web component",id:"web-component",level:2},{value:"\u600e\u4e48\u7528\u539f\u751fjs\u5b9e\u73b0\u9875\u9762\u8df3\u8f6c",id:"\u600e\u4e48\u7528\u539f\u751fjs\u5b9e\u73b0\u9875\u9762\u8df3\u8f6c",level:2},{value:"\u6700\u8fd1\u5728\u770b\u4ec0\u4e48\u65b0\u6280\u672f",id:"\u6700\u8fd1\u5728\u770b\u4ec0\u4e48\u65b0\u6280\u672f",level:2},{value:"TODO",id:"todo",level:2}],m={toc:d},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"es6"},(0,r.kt)("inlineCode",{parentName:"h2"},"ES6")),(0,r.kt)("h4",{id:"61-promise\u57fa\u672c\u4e0a\u8981\u6c42\u53ef\u4ee5\u624b\u5199promiseall\u65b9\u6cd5"},"6.1 Promise(\u57fa\u672c\u4e0a\u8981\u6c42\u53ef\u4ee5\u624b\u5199Promise.all\u65b9\u6cd5)"),(0,r.kt)("h4",{id:"62-\u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u6709\u4ec0\u4e48\u533a\u522b"},"6.2 \u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u6709\u4ec0\u4e48\u533a\u522b"),(0,r.kt)("h5",{id:"621-\u7bad\u5934\u51fd\u6570\u8bed\u6cd5\u66f4\u52a0\u7b80\u6d01\u6e05\u6670"},"6.2.1 \u7bad\u5934\u51fd\u6570\u8bed\u6cd5\u66f4\u52a0\u7b80\u6d01\u6e05\u6670"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6b63\u5e38\u51fd\u6570\u5199\u6cd5\n[1,2,3].map(function (x) {\n  return x * x;\n});\n\n// \u7bad\u5934\u51fd\u6570\u5199\u6cd5\n[1,2,3].map(x => x * x);\n\n// \u6b63\u5e38\u51fd\u6570\u5199\u6cd5\nvar result = [2, 5, 1, 4, 3].sort(function (a, b) {\n  return a - b;\n});\n\n// \u7bad\u5934\u51fd\u6570\u5199\u6cd5\nvar result = [2, 5, 1, 4, 3].sort((a, b) => a - b);\n")),(0,r.kt)("h5",{id:"622-\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684this"},"6.2.2 \u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684",(0,r.kt)("inlineCode",{parentName:"h5"},"this")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u6240\u4ee5\u5b83\u6ca1\u6709\u81ea\u5df1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u5b83\u53ea\u4f1a\u4ece\u81ea\u5df1\u7684\u4f5c\u7528\u57df\u94fe\u7684\u4e0a\u4e00\u5c42\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u3002")),(0,r.kt)("p",null,"\u200b\t\t\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c \u5b9a\u4e49\u65f6",(0,r.kt)("strong",{parentName:"p"},"\uff08\u6ce8\u610f\uff0c\u662f\u5b9a\u4e49\u65f6\uff0c\u4e0d\u662f\u8c03\u7528\u65f6\uff09\u6240\u5904\u7684"),"\u5916\u5c42\u6267\u884c\u73af\u5883\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"**\uff0c\u5e76\u7ee7\u627f\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u503c\u3002\u6240\u4ee5\uff0c\u7bad\u5934\u51fd\u6570\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u7684\u6307\u5411\u5728\u5b83\u88ab\u5b9a\u4e49\u7684\u65f6\u5019\u5c31\u5df2\u7ecf\u786e\u5b9a\u4e86\uff0c\u4e4b\u540e\u6c38\u8fdc\u4e0d\u4f1a\u6539\u53d8\u3002"),(0,r.kt)("h5",{id:"623-\u7bad\u5934\u51fd\u6570\u7ee7\u627f\u800c\u6765\u7684this\u6307\u5411\u6c38\u8fdc\u4e0d\u53d8"},"6.2.3 \u7bad\u5934\u51fd\u6570\u7ee7\u627f\u800c\u6765\u7684this\u6307\u5411\u6c38\u8fdc\u4e0d\u53d8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var id = 'GLOBAL';\nvar obj = {\n  id: 'OBJ',\n  a: function(){\n    console.log(this.id);\n  },\n  b: () => {\n    console.log(this.id);\n  }\n};\n\nobj.a();    // 'OBJ'\nobj.b();    // 'GLOBAL'\n")),(0,r.kt)("p",null,"\u200b\t\t\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5c31\u5b8c\u5168\u53ef\u4ee5\u8bf4\u660e\u7bad\u5934\u51fd\u6570\u7ee7\u627f\u800c\u6765\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411\u6c38\u8fdc\u4e0d\u53d8\u3002\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"\u7684\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"\u662f\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u5b9a\u4e49\u7684\uff0c\u8fd9\u4e2a\u51fd\u6570\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u5c31",(0,r.kt)("strong",{parentName:"p"},"\u6c38\u8fdc\u6307\u5411"),"\u5b83\u5b9a\u4e49\u65f6\u6240\u5904\u7684\u5168\u5c40\u6267\u884c\u73af\u5883\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u5373\u4fbf\u8fd9\u4e2a\u51fd\u6570\u662f\u4f5c\u4e3a\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"obj"),"\u7684\u65b9\u6cd5\u8c03\u7528\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u4f9d\u65e7\u6307\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"Window"),"\u5bf9\u8c61\u3002"),(0,r.kt)("h5",{id:"624-callapplybind\u65e0\u6cd5\u6539\u53d8\u7bad\u5934\u51fd\u6570\u4e2dthis\u7684\u6307\u5411"},"6.2.4 .call()/.apply()/.bind()\u65e0\u6cd5\u6539\u53d8\u7bad\u5934\u51fd\u6570\u4e2dthis\u7684\u6307\u5411"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var id = 'Global';\n// \u7bad\u5934\u51fd\u6570\u5b9a\u4e49\u5728\u5168\u5c40\u4f5c\u7528\u57df\nlet fun1 = () => {\n    console.log(this.id)\n};\n\nfun1();     // 'Global'\n// this\u7684\u6307\u5411\u4e0d\u4f1a\u6539\u53d8\uff0c\u6c38\u8fdc\u6307\u5411Window\u5bf9\u8c61\nfun1.call({id: 'Obj'});     // 'Global'\nfun1.apply({id: 'Obj'});    // 'Global'\nfun1.bind({id: 'Obj'})();   // 'Global'\n")),(0,r.kt)("h5",{id:"625-\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u4f7f\u7528"},"6.2.5 \u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u4f7f\u7528"),(0,r.kt)("p",null,"\u200b\t\t\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u5b83\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u5176\u5b9e\u662f\u7ee7\u627f\u4e86\u5916\u5c42\u6267\u884c\u73af\u5883\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u4e14",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411\u6c38\u8fdc\u4e0d\u4f1a\u968f\u5728\u54ea\u91cc\u8c03\u7528\u3001\u88ab\u8c01\u8c03\u7528\u800c\u6539\u53d8\uff0c\u6240\u4ee5\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u4f7f\u7528\uff0c\u6216\u8005\u8bf4\u6784\u9020\u51fd\u6570\u4e0d\u80fd\u5b9a\u4e49\u6210\u7bad\u5934\u51fd\u6570\uff0c\u5426\u5219\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"new"),"\u8c03\u7528\u65f6\u4f1a\u62a5\u9519\uff01"),(0,r.kt)("h5",{id:"626-\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684arguments"},"6.2.6 \u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684arguments"),(0,r.kt)("h5",{id:"627-\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u539f\u578bprototype"},"6.2.7 \u7bad\u5934\u51fd\u6570\u6ca1\u6709\u539f\u578bprototype"),(0,r.kt)("h5",{id:"628-\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u4f5cgenerator\u51fd\u6570\u4e0d\u80fd\u4f7f\u7528yeild\u5173\u952e\u5b57"},"6.2.8 \u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u4f5cGenerator\u51fd\u6570\uff0c\u4e0d\u80fd\u4f7f\u7528yeild\u5173\u952e\u5b57"),(0,r.kt)("h4",{id:"63-map"},"6.3 Map"),(0,r.kt)("p",null,"Map\u7684\u952e\u548c\u503c\u53ef\u4ee5\u662f\u4efb\u4f55\u6570\u636e\u7c7b\u578b\uff0c\u952e\u503c\u5bf9\u6309\u7167\u63d2\u5165\u987a\u5e8f\u6392\u5217\uff0c\u5982\u679c\u63d2\u5165\u91cd\u590d\u7684\u952e\u503c\uff0c\u540e\u9762\u7684\u952e\u503c\u4f1a\u8986\u76d6\u524d\u8005\uff0c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5bf9\u6bd4\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6620\u5c04\u5bf9\u8c61Map"),(0,r.kt)("th",{parentName:"tr",align:null},"Object\u5bf9\u8c61"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u904d\u5386\u6240\u6709\u7684\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u662f\u5426\u5305\u542b\u6307\u5b9a\u7684\u952e\u503c\u5bf9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5b57\u7b26\u4e32\u4f5c\u4e3a\u952e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Symbol\u4f5c\u4e3a\u952e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4efb\u610f\u5bf9\u8c61\u4f5c\u4e3a\u952e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5f97\u77e5\u952e\u503c\u5bf9\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"64-set"},"6.4 Set"),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u96c6\u5408\u7ef4\u62a4\u4e00\u4e2a\u6709\u5e8f\u7684\u72b6\u6001\uff0c\u751a\u81f3\u6709\u4e9b\u573a\u666f\u9700\u8981\u65e0\u5e8f\u96c6\u5408\uff0c\u56e0\u6b64ES6\u91cc\u52a0\u5165\u4e86\u65e0\u5e8f\u96c6\u5408Set\u548c\u5176\u7684Weak\u7248\u672cWeakSet\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5bf9\u6bd4\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"Array"),(0,r.kt)("th",{parentName:"tr",align:null},"Set"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u5e8f\u5217"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6709\u5e8f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u5e8f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u91cd\u590d\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u53ef\u91cd\u590d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u4e0d\u53ef\u91cd\u590d")))),(0,r.kt)("h2",{id:"javascript-\u91cc\u6700\u5927\u7684\u5b89\u5168\u7684\u6574\u6570\u4e3a\u4ec0\u4e48\u662f2\u768453\u6b21\u65b9\u51cf\u4e00"},"JavaScript \u91cc\u6700\u5927\u7684\u5b89\u5168\u7684\u6574\u6570\u4e3a\u4ec0\u4e48\u662f2\u768453\u6b21\u65b9\u51cf\u4e00"),(0,r.kt)("h2",{id:"javascript\u91cc\u4e3a\u4ec0\u4e480101\u4e0d\u7b49\u4e8e03"},"JavaScript\u91cc\u4e3a\u4ec0\u4e480.1+0.1\u4e0d\u7b49\u4e8e0.3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://bartaz.github.io/ieee754-visualization/"},"http://bartaz.github.io/ieee754-visualization/")),(0,r.kt)("h2",{id:"h5\u62c9\u8d77app\u5982\u679c\u6ca1\u6709\u5b89\u88c5\u8df3\u8f6c\u5e94\u7528\u5e02\u573a"},"H5\u62c9\u8d77App\uff0c\u5982\u679c\u6ca1\u6709\u5b89\u88c5\u8df3\u8f6c\u5e94\u7528\u5e02\u573a"),(0,r.kt)("h2",{id:"objectdefineproperties\u90fd\u6709\u54ea\u4e9b\u53c2\u6570\u4ee5\u53ca\u53c2\u6570\u89e3\u91ca"},"Object.defineProperties\u90fd\u6709\u54ea\u4e9b\u53c2\u6570\uff0c\u4ee5\u53ca\u53c2\u6570\u89e3\u91ca"),(0,r.kt)("h2",{id:"requestanimation"},"requestAnimation"),(0,r.kt)("h2",{id:"\u5982\u4f55\u904d\u5386\u5bf9\u8c61\u6709\u4f55\u4e0d\u540c"},"\u5982\u4f55\u904d\u5386\u5bf9\u8c61\uff0c\u6709\u4f55\u4e0d\u540c"),(0,r.kt)("h2",{id:"\u539f\u751f\u5b9e\u73b0insertafter"},"\u539f\u751f\u5b9e\u73b0insertAfter"),(0,r.kt)("h2",{id:"\u5b9e\u73b0\u4e00\u4e2aeventemitter"},"\u5b9e\u73b0\u4e00\u4e2aEventEmitter"),(0,r.kt)("h2",{id:"node\u600e\u4e48\u8d77\u4e00\u4e2a\u670d\u52a1"},"node\u600e\u4e48\u8d77\u4e00\u4e2a\u670d\u52a1"),(0,r.kt)("h2",{id:"node\u4e2dbody-parse\u6709\u4ec0\u4e48\u4f5c\u7528"},"node\u4e2dbody-parse\u6709\u4ec0\u4e48\u4f5c\u7528"),(0,r.kt)("h2",{id:"web-component"},"web component"),(0,r.kt)("h2",{id:"\u600e\u4e48\u7528\u539f\u751fjs\u5b9e\u73b0\u9875\u9762\u8df3\u8f6c"},"\u600e\u4e48\u7528\u539f\u751fjs\u5b9e\u73b0\u9875\u9762\u8df3\u8f6c"),(0,r.kt)("h2",{id:"\u6700\u8fd1\u5728\u770b\u4ec0\u4e48\u65b0\u6280\u672f"},"\u6700\u8fd1\u5728\u770b\u4ec0\u4e48\u65b0\u6280\u672f"),(0,r.kt)("h2",{id:"todo"},"TODO"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("inlineCode",{parentName:"li"},"symbol"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"bigInt")," \u8be6\u60c5"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("inlineCode",{parentName:"li"},"Set"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"map"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"weakSet"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"weakMap"),"\u8be6\u60c5"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5b57\u7b26\u4e321\u52a0\u4e0a\u6570\u5b571\u3001\u5b57\u7b26\u4e321\u51cf\u53bb\u6570\u5b571")))}u.isMDXComponent=!0}}]);