"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[23804],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return t?l.createElement(k,i(i({ref:n},c),{},{components:t})):l.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=t(87462),a=(t(67294),t(3905));const r={tags:["es6","Promise"]},i=void 0,o={unversionedId:"es6/ES6\u4e2d\u7684Promise",id:"es6/ES6\u4e2d\u7684Promise",title:"ES6\u4e2d\u7684Promise",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/docs/es6/ES6\u4e2d\u7684Promise.md",sourceDirName:"es6",slug:"/es6/ES6\u4e2d\u7684Promise",permalink:"/docs/es6/ES6\u4e2d\u7684Promise",draft:!1,tags:[{label:"es6",permalink:"/docs/tags/es-6"},{label:"Promise",permalink:"/docs/tags/promise"}],version:"current",frontMatter:{tags:["es6","Promise"]},sidebar:"es6Sidebar",previous:{title:"ES6\u4e2d\u7684Module",permalink:"/docs/es6/ES6\u4e2d\u7684Module"},next:{title:"ES6\u4e2d\u7684Proxy",permalink:"/docs/es6/ES6\u4e2d\u7684Proxy"}},p={},s=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u72b6\u6001",id:"\u72b6\u6001",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:3},{value:"\u4e8c\u3001\u7528\u6cd5",id:"\u4e8c\u7528\u6cd5",level:2},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:3},{value:"then()",id:"then",level:4},{value:"catch",id:"catch",level:4},{value:"finally()",id:"finally",level:4},{value:"\u6784\u9020\u51fd\u6570\u65b9\u6cd5",id:"\u6784\u9020\u51fd\u6570\u65b9\u6cd5",level:3},{value:"all()",id:"all",level:4},{value:"race()",id:"race",level:4},{value:"allSettled()",id:"allsettled",level:4},{value:"resolve()",id:"resolve",level:4},{value:"reject()",id:"reject",level:4},{value:"\u4e09\u3001\u4f7f\u7528\u573a\u666f",id:"\u4e09\u4f7f\u7528\u573a\u666f",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise "),"\uff0c\u8bd1\u4e3a\u627f\u8bfa\uff0c\u662f\u5f02\u6b65\u7f16\u7a0b\u7684\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\uff0c\u6bd4\u4f20\u7edf\u7684\u89e3\u51b3\u65b9\u6848\uff08\u56de\u8c03\u51fd\u6570\uff09\u66f4\u52a0\u5408\u7406\u548c\u66f4\u52a0\u5f3a\u5927"),(0,a.kt)("p",null,"\u5728\u4ee5\u5f80\u6211\u4eec\u5982\u679c\u5904\u7406\u591a\u5c42\u5f02\u6b65\u64cd\u4f5c\uff0c\u6211\u4eec\u5f80\u5f80\u4f1a\u50cf\u4e0b\u9762\u90a3\u6837\u7f16\u5199\u6211\u4eec\u7684\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"doSomething(function(result) {\n  doSomethingElse(result, function(newResult) {\n    doThirdThing(newResult, function(finalResult) {\n      console.log('\u5f97\u5230\u6700\u7ec8\u7ed3\u679c: ' + finalResult);\n    }, failureCallback);\n  }, failureCallback);\n}, failureCallback);\n")),(0,a.kt)("p",null,"\u9605\u8bfb\u4e0a\u9762\u4ee3\u7801\uff0c\u662f\u4e0d\u662f\u5f88\u96be\u53d7\uff0c\u4e0a\u8ff0\u5f62\u6210\u4e86\u7ecf\u5178\u7684\u56de\u8c03\u5730\u72f1"),(0,a.kt)("p",null,"\u73b0\u5728\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u7684\u6539\u5199\u4e0a\u9762\u7684\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"doSomething().then(function(result) {\n  return doSomethingElse(result);\n})\n.then(function(newResult) {\n  return doThirdThing(newResult);\n})\n.then(function(finalResult) {\n  console.log('\u5f97\u5230\u6700\u7ec8\u7ed3\u679c: ' + finalResult);\n})\n.catch(failureCallback);\n")),(0,a.kt)("p",null,"\u77ac\u95f4\u611f\u53d7\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"promise"),"\u89e3\u51b3\u5f02\u6b65\u64cd\u4f5c\u7684\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u94fe\u5f0f\u64cd\u4f5c\u51cf\u4f4e\u4e86\u7f16\u7801\u96be\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u53ef\u8bfb\u6027\u660e\u663e\u589e\u5f3a")),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6b63\u5f0f\u6765\u8ba4\u8bc6",(0,a.kt)("inlineCode",{parentName:"p"},"promise"),"\uff1a"),(0,a.kt)("h3",{id:"\u72b6\u6001"},"\u72b6\u6001"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"promise"),"\u5bf9\u8c61\u4ec5\u6709\u4e09\u79cd\u72b6\u6001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pending"),"\uff08\u8fdb\u884c\u4e2d\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fulfilled"),"\uff08\u5df2\u6210\u529f\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rejected"),"\uff08\u5df2\u5931\u8d25\uff09")),(0,a.kt)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684\u72b6\u6001\u4e0d\u53d7\u5916\u754c\u5f71\u54cd\uff0c\u53ea\u6709\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\uff0c\u53ef\u4ee5\u51b3\u5b9a\u5f53\u524d\u662f\u54ea\u4e00\u79cd\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u65e6\u72b6\u6001\u6539\u53d8\uff08\u4ece",(0,a.kt)("inlineCode",{parentName:"li"},"pending"),"\u53d8\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"fulfilled"),"\u548c\u4ece",(0,a.kt)("inlineCode",{parentName:"li"},"pending"),"\u53d8\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"rejected"),"\uff09\uff0c\u5c31\u4e0d\u4f1a\u518d\u53d8\uff0c\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u5f97\u5230\u8fd9\u4e2a\u7ed3\u679c")),(0,a.kt)("h3",{id:"\u6d41\u7a0b"},"\u6d41\u7a0b"),(0,a.kt)("p",null,"\u8ba4\u771f\u9605\u8bfb\u4e0b\u56fe\uff0c\u6211\u4eec\u80fd\u591f\u8f7b\u677e\u4e86\u89e3",(0,a.kt)("inlineCode",{parentName:"p"},"promise"),"\u6574\u4e2a\u6d41\u7a0b\n",(0,a.kt)("img",{parentName:"p",src:"https://static.vue-js.com/1b02ae90-58a9-11eb-85f6-6fac77c0c9b3.png",alt:null})),(0,a.kt)("h2",{id:"\u4e8c\u7528\u6cd5"},"\u4e8c\u3001\u7528\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u662f\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const promise = new Promise(function(resolve, reject) {});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u6784\u9020\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u7684\u4e24\u4e2a\u53c2\u6570\u5206\u522b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"resolve"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"reject")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolve"),"\u51fd\u6570\u7684\u4f5c\u7528\u662f\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"Promise"),"\u5bf9\u8c61\u7684\u72b6\u6001\u4ece\u201c\u672a\u5b8c\u6210\u201d\u53d8\u4e3a\u201c\u6210\u529f\u201d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reject"),"\u51fd\u6570\u7684\u4f5c\u7528\u662f\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"Promise"),"\u5bf9\u8c61\u7684\u72b6\u6001\u4ece\u201c\u672a\u5b8c\u6210\u201d\u53d8\u4e3a\u201c\u5931\u8d25\u201d")),(0,a.kt)("h3",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u6784\u5efa\u51fa\u6765\u7684\u5b9e\u4f8b\u5b58\u5728\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"then()"),(0,a.kt)("li",{parentName:"ul"},"catch()"),(0,a.kt)("li",{parentName:"ul"},"finally()")),(0,a.kt)("h4",{id:"then"},"then()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"then"),"\u662f\u5b9e\u4f8b\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"resolved"),"\u72b6\u6001\u7684\u56de\u8c03\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"rejected"),"\u72b6\u6001\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"then(onFulfilled)\nthen(onFulfilled, onRejected)\n")),(0,a.kt)("p",null,"\u7528\u6cd5\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const p1 = new Promise((resolve, reject) => {\n  resolve("Success!");\n  // or\n  // reject(new Error("Error!"));\n});\n\np1.then(\n  (value) => {\n    console.log(value); // Success!\n  },\n  (reason) => {\n    console.error(reason); // Error!\n  },\n);\n\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"then"),"\u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u65b0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"promise"),"\u80fd\u94fe\u5f0f\u4e66\u5199\u7684\u539f\u56e0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'getJSON("/posts.json").then(function(json) {\n  return json.post;\n}).then(function(post) {\n  // ...\n});\n')),(0,a.kt)("h4",{id:"catch"},"catch"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"catch()"),"\u65b9\u6cd5\u662f",(0,a.kt)("inlineCode",{parentName:"p"},".then(null, rejection)"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},".then(undefined, rejection)"),"\u7684\u522b\u540d\uff0c\u7528\u4e8e\u6307\u5b9a\u53d1\u751f\u9519\u8bef\u65f6\u7684\u56de\u8c03\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"getJSON('/posts.json').then(function(posts) {\n  // ...\n}).catch(function(error) {\n  // \u5904\u7406 getJSON \u548c \u524d\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u8fd0\u884c\u65f6\u53d1\u751f\u7684\u9519\u8bef\n  console.log('\u53d1\u751f\u9519\u8bef\uff01', error);\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise "),"\u5bf9\u8c61\u7684\u9519\u8bef\u5177\u6709\u201c\u5192\u6ce1\u201d\u6027\u8d28\uff0c\u4f1a\u4e00\u76f4\u5411\u540e\u4f20\u9012\uff0c\u76f4\u5230\u88ab\u6355\u83b7\u4e3a\u6b62"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"getJSON('/post/1.json').then(function(post) {\n  return getJSON(post.commentURL);\n}).then(function(comments) {\n  // some code\n}).catch(function(error) {\n  // \u5904\u7406\u524d\u9762\u4e09\u4e2aPromise\u4ea7\u751f\u7684\u9519\u8bef\n});\n")),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u65b9\u6cd5\u4ee3\u66ff",(0,a.kt)("inlineCode",{parentName:"p"},"then()"),"\u7b2c\u4e8c\u4e2a\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise "),"\u5bf9\u8c61\u629b\u51fa\u7684\u9519\u8bef\u4e0d\u4f1a\u4f20\u9012\u5230\u5916\u5c42\u4ee3\u7801\uff0c\u5373\u4e0d\u4f1a\u6709\u4efb\u4f55\u53cd\u5e94"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const someAsyncThing = function() {\n  return new Promise(function(resolve, reject) {\n    // \u4e0b\u9762\u4e00\u884c\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3ax\u6ca1\u6709\u58f0\u660e\n    resolve(x + 2);\n  });\n};\n")),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u8fd0\u884c\u5230\u8fd9\u4e00\u884c\uff0c\u4f1a\u6253\u5370\u51fa\u9519\u8bef\u63d0\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"ReferenceError: x is not defined"),"\uff0c\u4f46\u662f\u4e0d\u4f1a\u9000\u51fa\u8fdb\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"catch()"),"\u65b9\u6cd5\u4e4b\u4e2d\uff0c\u8fd8\u80fd\u518d\u629b\u51fa\u9519\u8bef\uff0c\u901a\u8fc7\u540e\u9762",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u65b9\u6cd5\u6355\u83b7\u5230"),(0,a.kt)("h4",{id:"finally"},"finally()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"finally()"),"\u65b9\u6cd5\u7528\u4e8e\u6307\u5b9a\u4e0d\u7ba1 Promise \u5bf9\u8c61\u6700\u540e\u72b6\u6001\u5982\u4f55\uff0c\u90fd\u4f1a\u6267\u884c\u7684\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"promise\n.then(result => {\xb7\xb7\xb7})\n.catch(error => {\xb7\xb7\xb7})\n.finally(() => {\xb7\xb7\xb7});\n")),(0,a.kt)("h3",{id:"\u6784\u9020\u51fd\u6570\u65b9\u6cd5"},"\u6784\u9020\u51fd\u6570\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u6784\u9020\u51fd\u6570\u5b58\u5728\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"all()"),(0,a.kt)("li",{parentName:"ul"},"race()"),(0,a.kt)("li",{parentName:"ul"},"allSettled()"),(0,a.kt)("li",{parentName:"ul"},"resolve()"),(0,a.kt)("li",{parentName:"ul"},"reject()"),(0,a.kt)("li",{parentName:"ul"},"try()")),(0,a.kt)("h4",{id:"all"},"all()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all()"),"\u65b9\u6cd5\u7528\u4e8e\u5c06\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise "),"\u5b9e\u4f8b\uff0c\u5305\u88c5\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise "),"\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const p = Promise.all([p1, p2, p3]);\n")),(0,a.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\uff08\u8fed\u4ee3\u5bf9\u8c61\uff09\u4f5c\u4e3a\u53c2\u6570\uff0c\u6570\u7ec4\u6210\u5458\u90fd\u5e94\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u5b9e\u4f8b",(0,a.kt)("inlineCode",{parentName:"p"},"p"),"\u7684\u72b6\u6001\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"p1"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"p2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"p3"),"\u51b3\u5b9a\uff0c\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"p1"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"p2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"p3"),"\u7684\u72b6\u6001\u90fd\u53d8\u6210",(0,a.kt)("inlineCode",{parentName:"li"},"fulfilled"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"p"),"\u7684\u72b6\u6001\u624d\u4f1a\u53d8\u6210",(0,a.kt)("inlineCode",{parentName:"li"},"fulfilled"),"\uff0c\u6b64\u65f6",(0,a.kt)("inlineCode",{parentName:"li"},"p1"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"p2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"p3"),"\u7684\u8fd4\u56de\u503c\u7ec4\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u4f20\u9012\u7ed9",(0,a.kt)("inlineCode",{parentName:"li"},"p"),"\u7684\u56de\u8c03\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8981",(0,a.kt)("inlineCode",{parentName:"li"},"p1"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"p2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"p3"),"\u4e4b\u4e2d\u6709\u4e00\u4e2a\u88ab",(0,a.kt)("inlineCode",{parentName:"li"},"rejected"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"p"),"\u7684\u72b6\u6001\u5c31\u53d8\u6210",(0,a.kt)("inlineCode",{parentName:"li"},"rejected"),"\uff0c\u6b64\u65f6\u7b2c\u4e00\u4e2a\u88ab",(0,a.kt)("inlineCode",{parentName:"li"},"reject"),"\u7684\u5b9e\u4f8b\u7684\u8fd4\u56de\u503c\uff0c\u4f1a\u4f20\u9012\u7ed9",(0,a.kt)("inlineCode",{parentName:"li"},"p"),"\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c\u4f5c\u4e3a\u53c2\u6570\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u5b9e\u4f8b\uff0c\u81ea\u5df1\u5b9a\u4e49\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u65b9\u6cd5\uff0c\u90a3\u4e48\u5b83\u4e00\u65e6\u88ab",(0,a.kt)("inlineCode",{parentName:"p"},"rejected"),"\uff0c\u5e76\u4e0d\u4f1a\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all()"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const p1 = new Promise((resolve, reject) => {\n  resolve('hello');\n})\n.then(result => result)\n.catch(e => e);\n\nconst p2 = new Promise((resolve, reject) => {\n  throw new Error('\u62a5\u9519\u4e86');\n})\n.then(result => result)\n.catch(e => e);\n\nPromise.all([p1, p2])\n.then(result => console.log(result))\n.catch(e => console.log(e));\n// [\"hello\", Error: \u62a5\u9519\u4e86]\n")),(0,a.kt)("p",null,"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"p2"),"\u6ca1\u6709\u81ea\u5df1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u65b9\u6cd5\uff0c\u5c31\u4f1a\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all()"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const p1 = new Promise((resolve, reject) => {\n  resolve('hello');\n})\n.then(result => result);\n\nconst p2 = new Promise((resolve, reject) => {\n  throw new Error('\u62a5\u9519\u4e86');\n})\n.then(result => result);\n\nPromise.all([p1, p2])\n.then(result => console.log(result))\n.catch(e => console.log(e));\n// Error: \u62a5\u9519\u4e86\n")),(0,a.kt)("h4",{id:"race"},"race()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise.race()"),"\u65b9\u6cd5\u540c\u6837\u662f\u5c06\u591a\u4e2a Promise \u5b9e\u4f8b\uff0c\u5305\u88c5\u6210\u4e00\u4e2a\u65b0\u7684 Promise \u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const p = Promise.race([p1, p2, p3]);\n")),(0,a.kt)("p",null,"\u53ea\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"p1"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"p2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"p3"),"\u4e4b\u4e2d\u6709\u4e00\u4e2a\u5b9e\u4f8b\u7387\u5148\u6539\u53d8\u72b6\u6001\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"p"),"\u7684\u72b6\u6001\u5c31\u8ddf\u7740\u6539\u53d8"),(0,a.kt)("p",null,"\u7387\u5148\u6539\u53d8\u7684 Promise \u5b9e\u4f8b\u7684\u8fd4\u56de\u503c\u5219\u4f20\u9012\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"p"),"\u7684\u56de\u8c03\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const p = Promise.race([\n  fetch('/resource-that-may-take-a-while'),\n  new Promise(function (resolve, reject) {\n    setTimeout(() => reject(new Error('request timeout')), 5000)\n  })\n]);\n\np\n.then(console.log)\n.catch(console.error);\n")),(0,a.kt)("h4",{id:"allsettled"},"allSettled()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise.allSettled()"),"\u65b9\u6cd5\u63a5\u53d7\u4e00\u7ec4 Promise \u5b9e\u4f8b\u4f5c\u4e3a\u53c2\u6570\uff0c\u5305\u88c5\u6210\u4e00\u4e2a\u65b0\u7684 Promise \u5b9e\u4f8b"),(0,a.kt)("p",null,"\u53ea\u6709\u7b49\u5230\u6240\u6709\u8fd9\u4e9b\u53c2\u6570\u5b9e\u4f8b\u90fd\u8fd4\u56de\u7ed3\u679c\uff0c\u4e0d\u7ba1\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"fulfilled"),"\u8fd8\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"rejected"),"\uff0c\u5305\u88c5\u5b9e\u4f8b\u624d\u4f1a\u7ed3\u675f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const promises = [\n  fetch('/api-1'),\n  fetch('/api-2'),\n  fetch('/api-3'),\n];\n\nawait Promise.allSettled(promises);\nremoveLoadingIndicator();\n")),(0,a.kt)("h4",{id:"resolve"},"resolve()"),(0,a.kt)("p",null,"\u5c06\u73b0\u6709\u5bf9\u8c61\u8f6c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise "),"\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Promise.resolve('foo')\n// \u7b49\u4ef7\u4e8e\nnew Promise(resolve => resolve('foo'))\n")),(0,a.kt)("p",null,"\u53c2\u6570\u53ef\u4ee5\u5206\u6210\u56db\u79cd\u60c5\u51b5\uff0c\u5206\u522b\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u662f\u4e00\u4e2a Promise \u5b9e\u4f8b\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"promise.resolve"),"\u5c06\u4e0d\u505a\u4efb\u4f55\u4fee\u6539\u3001\u539f\u5c01\u4e0d\u52a8\u5730\u8fd4\u56de\u8fd9\u4e2a\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"thenable"),"\u5bf9\u8c61\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"promise.resolve"),"\u4f1a\u5c06\u8fd9\u4e2a\u5bf9\u8c61\u8f6c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise "),"\u5bf9\u8c61\uff0c\u7136\u540e\u5c31\u7acb\u5373\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"thenable"),"\u5bf9\u8c61\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"then()"),"\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u4e0d\u662f\u5177\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"then()"),"\u65b9\u6cd5\u7684\u5bf9\u8c61\uff0c\u6216\u6839\u672c\u5c31\u4e0d\u662f\u5bf9\u8c61\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.resolve()"),"\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise \u5bf9\u8c61\uff0c\u72b6\u6001\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"resolved")),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u53c2\u6570\u65f6\uff0c\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"resolved"),"\u72b6\u6001\u7684 Promise \u5bf9\u8c61")),(0,a.kt)("h4",{id:"reject"},"reject()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise.reject(reason)"),"\u65b9\u6cd5\u4e5f\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise \u5b9e\u4f8b\uff0c\u8be5\u5b9e\u4f8b\u7684\u72b6\u6001\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"rejected")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const p = Promise.reject('\u51fa\u9519\u4e86');\n// \u7b49\u540c\u4e8e\nconst p = new Promise((resolve, reject) => reject('\u51fa\u9519\u4e86'))\n\np.then(null, function (s) {\n  console.log(s)\n});\n// \u51fa\u9519\u4e86\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise.reject()"),"\u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u4f1a\u539f\u5c01\u4e0d\u52a8\u5730\u53d8\u6210\u540e\u7eed\u65b9\u6cd5\u7684\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Promise.reject('\u51fa\u9519\u4e86')\n.catch(e => {\n  console.log(e === '\u51fa\u9519\u4e86')\n})\n// true\n")),(0,a.kt)("h2",{id:"\u4e09\u4f7f\u7528\u573a\u666f"},"\u4e09\u3001\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u5c06\u56fe\u7247\u7684\u52a0\u8f7d\u5199\u6210\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\uff0c\u4e00\u65e6\u52a0\u8f7d\u5b8c\u6210\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u7684\u72b6\u6001\u5c31\u53d1\u751f\u53d8\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const preloadImage = function (path) {\n  return new Promise(function (resolve, reject) {\n    const image = new Image();\n    image.onload  = resolve;\n    image.onerror = reject;\n    image.src = path;\n  });\n};\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u94fe\u5f0f\u64cd\u4f5c\uff0c\u5c06\u591a\u4e2a\u6e32\u67d3\u6570\u636e\u5206\u522b\u7ed9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"then"),"\uff0c\u8ba9\u5176\u5404\u53f8\u5176\u804c\u3002\u6216\u5f53\u4e0b\u4e2a\u5f02\u6b65\u8bf7\u6c42\u4f9d\u8d56\u4e0a\u4e2a\u8bf7\u6c42\u7ed3\u679c\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e5f\u80fd\u591f\u901a\u8fc7\u94fe\u5f0f\u64cd\u4f5c\u53cb\u597d\u89e3\u51b3\u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5404\u53f8\u5176\u804c\ngetInfo().then(res=>{\n    let { bannerList } = res\n    //\u6e32\u67d3\u8f6e\u64ad\u56fe\n    console.log(bannerList)\n    return res\n}).then(res=>{\n    \n    let { storeList } = res\n    //\u6e32\u67d3\u5e97\u94fa\u5217\u8868\n    console.log(storeList)\n    return res\n}).then(res=>{\n    let { categoryList } = res\n    console.log(categoryList)\n    //\u6e32\u67d3\u5206\u7c7b\u5217\u8868\n    return res\n})\n")),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"all()"),"\u5b9e\u73b0\u591a\u4e2a\u8bf7\u6c42\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u6c47\u603b\u6240\u6709\u8bf7\u6c42\u7ed3\u679c\uff0c\u53ea\u9700\u8bbe\u7f6e\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),"\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function initLoad(){\n    // loading.show() //\u52a0\u8f7dloading\n    Promise.all([getBannerList(),getStoreList(),getCategoryList()]).then(res=>{\n        console.log(res)\n        loading.hide() //\u5173\u95edloading\n    }).catch(err=>{\n        console.log(err)\n        loading.hide()//\u5173\u95edloading\n    })\n}\n//\u6570\u636e\u521d\u59cb\u5316    \ninitLoad()\n")),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"race"),"\u53ef\u4ee5\u8bbe\u7f6e\u56fe\u7247\u8bf7\u6c42\u8d85\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u8bf7\u6c42\u67d0\u4e2a\u56fe\u7247\u8d44\u6e90\nfunction requestImg(){\n    var p = new Promise(function(resolve, reject){\n        var img = new Image();\n        img.onload = function(){\n           resolve(img);\n        }\n        //img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"; \u6b63\u786e\u7684\n        img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg1";\n    });\n    return p;\n}\n\n//\u5ef6\u65f6\u51fd\u6570\uff0c\u7528\u4e8e\u7ed9\u8bf7\u6c42\u8ba1\u65f6\nfunction timeout(){\n    var p = new Promise(function(resolve, reject){\n        setTimeout(function(){\n            reject(\'\u56fe\u7247\u8bf7\u6c42\u8d85\u65f6\');\n        }, 5000);\n    });\n    return p;\n}\n\nPromise\n.race([requestImg(), timeout()])\n.then(function(results){\n    console.log(results);\n})\n.catch(function(reason){\n    console.log(reason);\n});\n')),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://es6.ruanyifeng.com/#docs/promise"},"https://es6.ruanyifeng.com/#docs/promise"))))}u.isMDXComponent=!0}}]);