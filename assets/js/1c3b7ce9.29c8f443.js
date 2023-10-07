"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[24439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||g[u]||a;return n?i.createElement(k,l(l({ref:t},d),{},{components:n})):i.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:4},l=void 0,o={unversionedId:"git/git fetch",id:"git/git fetch",title:"git fetch",description:"1. \u6587\u6863",source:"@site/docs/git/git fetch.md",sourceDirName:"git",slug:"/git/git fetch",permalink:"/docs/git/git fetch",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"gitSidebar",previous:{title:"git pull",permalink:"/docs/git/git pull"},next:{title:"git push",permalink:"/docs/git/git push"}},p={},c=[{value:"1. \u6587\u6863",id:"1-\u6587\u6863",level:2},{value:"2. \u6982\u5ff5\u539f\u7406",id:"2-\u6982\u5ff5\u539f\u7406",level:2},{value:"2.1 <code>FETCH_HEAD</code>\u6982\u5ff5",id:"21-fetch_head\u6982\u5ff5",level:3},{value:"2.2 \u6267\u884c\u8fc7\u7a0b",id:"22-\u6267\u884c\u8fc7\u7a0b",level:3},{value:"3. \u57fa\u7840\u547d\u4ee4",id:"3-\u57fa\u7840\u547d\u4ee4",level:2},{value:"3.1 <code>git fetch</code>",id:"31-git-fetch",level:3},{value:"3.2 <code>git fetch origin</code>",id:"32-git-fetch-origin",level:3},{value:"3.3 <code>git fetch origin master</code>",id:"33-git-fetch-origin-master",level:3},{value:"3.4 <code>git fetch origin master:temp</code>",id:"34-git-fetch-origin-mastertemp",level:3},{value:"3.5 <code>git fetch origin :temp</code>",id:"35-git-fetch-origin-temp",level:3}],d={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u6587\u6863"},"1. \u6587\u6863"),(0,r.kt)("p",null,"\u57fa\u7840\u547d\u4ee4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"git fetch")),(0,r.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-fetch"},"https://git-scm.com/docs/git-fetch")),(0,r.kt)("p",null,"\u529f\u80fd\uff1a\u7528\u4e8e\u4ece\u53e6\u4e00\u4e2a\u8fdc\u7a0b\u4ed3\u5e93\u4e0b\u8f7d\u6700\u65b0\u7684\u5bf9\u8c61\u548c\u5f15\u7528\uff0c\u4f46\u662f\u4e0d\u4e0e\u672c\u5730\u5206\u652f\u8fdb\u884c\u5408\u5e76\u3002\u5982\u679c\u8981\u67e5\u770b\u4e0b\u8f7d\u4e0b\u6765\u7684\u6700\u65b0\u4ee3\u7801\uff0c\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"origin/xxx"),"\u5206\u652f\u91cc\u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u533a\u522b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"git fetch"),"\u4e3b\u8981\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"git pull"),"\u4f5c\u5bf9\u6bd4\uff0c\u5e38\u8bf4\u7684\u4e00\u53e5\u8bdd\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"git pull = git fetch + git merge"),"\u3002\u4e5f\u5c31\u662f\u8bf4",(0,r.kt)("inlineCode",{parentName:"p"},"git fetch"),"\u53ea\u662f\u628a\u6700\u65b0\u4ee3\u7801\u66f4\u65b0\u5230\u672c\u5730\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"origin/xxx"),"\u5206\u652f\uff0c\u4f46\u662f\u4e0d\u4f1a\u4e0e\u672c\u5730\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"xxx"),"\u5206\u652f\u8fdb\u884c\u4ee3\u7801\u5408\u5e76\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"git pull"),"\u5219\u662f\u76f4\u63a5\u62c9\u53d6\u6700\u65b0\u4ee3\u7801\u5e76\u4e0e\u672c\u5730\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"xxx"),"\u5206\u652f\u8fdb\u884c\u4ee3\u7801\u5408\u5e76\u3002"),(0,r.kt)("h2",{id:"2-\u6982\u5ff5\u539f\u7406"},"2. \u6982\u5ff5\u539f\u7406"),(0,r.kt)("h3",{id:"21-fetch_head\u6982\u5ff5"},"2.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"FETCH_HEAD"),"\u6982\u5ff5"),(0,r.kt)("p",null,"\u6307\u5b9a\u67d0\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"branch"),"\u5728\u670d\u52a1\u5668\u4e0a\u7684\u6700\u65b0\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"~/workspace/github/git-study(dev \u2714)cat .git/FETCH_HEAD\nf715a6d5196fae48d0be4e5e163d3a35cc6f6bc1    branch 'dev' of git@github.com:aaaaaAndy/git-study.git\n")),(0,r.kt)("p",null,"\u7b2c\u4e00\u5217\u662f\u7248\u672c\u53f7\uff0c\u7b2c\u4e8c\u5217\u662f\u5f53\u524d",(0,r.kt)("inlineCode",{parentName:"p"},"FETCH_HEAD"),"\u5c06\u8981\u88ab\u5408\u5e76\u7684\u672c\u5730\u5206\u652f\uff0c\u7b2c\u4e09\u5217\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"\u7248\u672c\u5e93\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u6b64\u65f6\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),"\u5206\u652f\u76f4\u63a5\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"git merge"),"\uff0c\u5373\u53ef\u5c06\u672c\u5730",(0,r.kt)("inlineCode",{parentName:"p"},"origin/dev"),"\u5206\u652f\u7684\u4ee3\u7801\u5408\u5e76\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),"\u5206\u652f\u4e0a\u3002"),(0,r.kt)("h3",{id:"22-\u6267\u884c\u8fc7\u7a0b"},"2.2 \u6267\u884c\u8fc7\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get fetch"),"\u7684\u6267\u884c\u8fc7\u7a0b\u5177\u4f53\u53ef\u5206\u4e3a\u4e24\u6b65\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5e76\u66f4\u65b0\u672c\u5730\u8fdc\u7a0b\u5206\u652f",(0,r.kt)("inlineCode",{parentName:"li"},"origin/xxx"),"\uff0c\u5373\u5f53\u4e0d\u5b58\u5728\u672c\u5730\u8fdc\u7a0b\u5206\u652f\u65f6\u5148\u521b\u5efa\u672c\u5730\u8fdc\u7a0b\u5206\u652f",(0,r.kt)("inlineCode",{parentName:"li"},"origin/xxx"),"\uff0c\u7136\u540e\u5c06\u8fdc\u7a0b\u4ed3\u5e93\u4ee3\u7801\u66f4\u65b0\u5230\u672c\u5730\u8fdc\u7a0b\u5206\u652f",(0,r.kt)("inlineCode",{parentName:"li"},"origin/xxx"),"\u4e0a\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"FETCH_HEAD"),"\u4e2d\u8bbe\u5b9a\u5f53\u524d\u8fdc\u7a0b\u5206\u652f",(0,r.kt)("inlineCode",{parentName:"li"},"origin/xxx"),"\u5bf9\u5e94\u7684\u672c\u5730\u5206\u652f\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"git merge"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"git"),"\u5c31\u4f1a\u5c06\u8fdc\u7a0b\u5206\u652f",(0,r.kt)("inlineCode",{parentName:"li"},"origin/xxx"),"\u4e0a\u7684\u66f4\u65b0\u5408\u5e76\u5230\u672c\u5730\u5206\u652f",(0,r.kt)("inlineCode",{parentName:"li"},"xxx"),"\u4e0a\u3002")),(0,r.kt)("h2",{id:"3-\u57fa\u7840\u547d\u4ee4"},"3. \u57fa\u7840\u547d\u4ee4"),(0,r.kt)("h3",{id:"31-git-fetch"},"3.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"git fetch")),(0,r.kt)("p",null,"\u83b7\u53d6\u8fdc\u7a0b\u6240\u6709\u5206\u652f\u66f4\u65b0\u5230\u672c\u5730\u3002"),(0,r.kt)("h3",{id:"32-git-fetch-origin"},"3.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"git fetch origin")),(0,r.kt)("p",null,"\u83b7\u53d6\u67d0\u4e2a\u8fdc\u7a0b\u4e3b\u673a\u7684\u4ee3\u7801\u5230\u672c\u5730\uff0c\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"git fetch"),"\u529f\u80fd\u76f8\u540c,\u53ea\u662f\u6307\u5b9a\u4e86\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"remote"),"\u3002"),(0,r.kt)("h3",{id:"33-git-fetch-origin-master"},"3.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"git fetch origin master")),(0,r.kt)("p",null,"\u8bbe\u5b9a\u5f53\u524d\u5206\u652f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"FETCH_HEAD"),"\u4e3a\u8fdc\u7a0b\u670d\u52a1\u5668\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u3002\u6ce8\u610f: \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b, \u4e0d\u4f1a\u5728\u672c\u5730\u521b\u5efa\u672c\u5730\u8fdc\u7a0b\u5206\u652f, \u8fd9\u662f\u56e0\u4e3a\uff1a\u8fd9\u4e2a\u64cd\u4f5c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"git pull origin master"),"\u7684\u7b2c\u4e00\u6b65, \u800c\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"pull"),"\u64cd\u4f5c,\u5e76\u4e0d\u4f1a\u5728\u672c\u5730\u521b\u5efa\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"branch"),"\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a\u9644\u52a0\u6548\u679c\u662f\uff1a\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\u8fdc\u7a0b\u4e3b\u673a\u7684\u8fdc\u7a0b\u5206\u652f",(0,r.kt)("inlineCode",{parentName:"p"},"xxx"),"\u662f\u5426\u5b58\u5728, \u5982\u679c\u5b58\u5728, \u8fd4\u56de0, \u5982\u679c\u4e0d\u5b58\u5728, \u8fd4\u56de128, \u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u672c\u5730\u90fd\u4f1a\u5b58\u5728\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"origin/xxx"),"\u5206\u652f\uff0c\u6240\u4ee5\u4e5f\u5e76\u4e0d\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"origin/xxx"),"\u5206\u652f\u3002"),(0,r.kt)("h3",{id:"34-git-fetch-origin-mastertemp"},"3.4 ",(0,r.kt)("inlineCode",{parentName:"h3"},"git fetch origin master:temp")),(0,r.kt)("p",null,"\u9996\u5148\u6267\u884c\u4e0a\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),"\u64cd\u4f5c\uff0c \u4f7f\u7528\u8fdc\u7a0b",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u5728\u672c\u5730\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"temp"),"\u5206\u652f(\u4f46\u4e0d\u4f1a\u5207\u6362\u5230\u8be5\u5206\u652f)\uff0c \u5982\u679c\u672c\u5730\u4e0d\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"temp"),"\u5206\u652f, \u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"temp"),"\u5206\u652f\uff0c \u5982\u679c\u672c\u5730\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"temp"),"\u5206\u652f, \u5e76\u4e14\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"fast forward'"),", \u5219\u81ea\u52a8\u5408\u5e76\u4e24\u4e2a\u5206\u652f, \u5426\u5219, \u4f1a\u963b\u6b62\u4ee5\u4e0a\u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"35-git-fetch-origin-temp"},"3.5 ",(0,r.kt)("inlineCode",{parentName:"h3"},"git fetch origin :temp")),(0,r.kt)("p",null,"\u7b49\u4ef7\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"git fetch origin master:temp"),"\u3002"))}g.isMDXComponent=!0}}]);