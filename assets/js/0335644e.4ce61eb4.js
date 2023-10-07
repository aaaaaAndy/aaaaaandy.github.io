"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[53938],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>k});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(i),g=a,k=u["".concat(o,".").concat(g)]||u[g]||m[g]||r;return i?n.createElement(k,l(l({ref:t},c),{},{components:i})):n.createElement(k,l({ref:t},c))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=g;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:a,l[1]=d;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},45527:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={sidebar_position:2},l=void 0,d={unversionedId:"git/git add",id:"git/git add",title:"git add",description:"1. \u6587\u6863",source:"@site/docs/git/git add.md",sourceDirName:"git",slug:"/git/git add",permalink:"/docs/git/git add",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gitSidebar",previous:{title:"git",permalink:"/docs/git"},next:{title:"git commit",permalink:"/docs/git/git commit"}},o={},p=[{value:"1. \u6587\u6863",id:"1-\u6587\u6863",level:2},{value:"2. \u57fa\u7840\u547d\u4ee4",id:"2-\u57fa\u7840\u547d\u4ee4",level:2},{value:"2.1 <code>git add xxx</code>",id:"21-git-add-xxx",level:3},{value:"2.2 <code>git add -u</code>",id:"22-git-add--u",level:3},{value:"2.3 <code>git add -A</code>",id:"23-git-add--a",level:3},{value:"2.4 <code>git add -i</code>",id:"24-git-add--i",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u6587\u6863"},"1. \u6587\u6863"),(0,a.kt)("p",null,"\u57fa\u7840\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git add")),(0,a.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-add"},"https://git-scm.com/docs/git-add")),(0,a.kt)("p",null,"\u529f\u80fd\uff1a\u5c06\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u5efa/\u4fee\u6539/\u5220\u9664\u7684\u6587\u4ef6\u5185\u5bb9"),"\u6dfb\u52a0\u5230\u6682\u5b58\u533a\uff0c\u5f53\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"git commit"),"\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\u5c06\u4f9d\u636e\u7d22\u5f15\u5e93\u4e2d\u7684\u5185\u5bb9\u6765\u8fdb\u884c\u6587\u4ef6\u7684\u63d0\u4ea4\u3002"),(0,a.kt)("h2",{id:"2-\u57fa\u7840\u547d\u4ee4"},"2. \u57fa\u7840\u547d\u4ee4"),(0,a.kt)("h3",{id:"21-git-add-xxx"},"2.1 ",(0,a.kt)("inlineCode",{parentName:"h3"},"git add xxx")),(0,a.kt)("p",null,"\u6b64\u4e3a\u4e0d\u52a0\u53c2\u6570\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"git add"),"\u7528\u6cd5\uff0c\u9ed8\u8ba4\u5c06\u4fee\u6539\u64cd\u4f5c\u7684\u6587\u4ef6\u548c\u672a\u8ddf\u8e2a\u65b0\u6dfb\u52a0\u7684\u6587\u4ef6\u6dfb\u52a0\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"git "),"\u6682\u5b58\u533a\uff0c\u4e0d\u5305\u62ec\u5220\u9664\u7684\u6587\u4ef6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git add file1"),"\uff1a\u53ea\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"file1"),"\u4e00\u4e2a\u6587\u4ef6\uff1a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git add file1 file2"),"\uff1a\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"file1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"file2"),"\u4e24\u4e2a\u6587\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git add *.html"),"\uff1a\u4f7f\u7528\u901a\u914d\u7b26\uff0c\u6dfb\u52a0\u6240\u6709\u540e\u7f00\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"html"),"\u7684\u6587\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git add dir1"),"\uff1a\u6dfb\u52a0\u76ee\u5f55",(0,a.kt)("inlineCode",{parentName:"li"},"dir1"),"\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git add dir1/git-*.sh"),"\uff1a\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"dir1"),"\u76ee\u5f55\u4e0b\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"git-"),"\u5f00\u5934\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"sh"),"\u6587\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git add ."),"\uff1a\u9ed8\u8ba4\u6dfb\u52a0\u6240\u6709\u6587\u4ef6\uff0c\u6ce8\u610f\u662f\u6240\u6709\u6587\u4ef6\uff0c\u5305\u62ec\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"."),"\u5f00\u5934\u7684\u6587\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git add *"),"\uff1a\u9ed8\u8ba4\u6dfb\u52a0\u6240\u6709\u6587\u4ef6\uff0c\u4f46\u662f\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"."),"\u5f00\u5934\u7684\u6587\u4ef6\u9664\u5916\u3002")),(0,a.kt)("h3",{id:"22-git-add--u"},"2.2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"git add -u")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u7b49\u540c\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git add --update"),"\u3002"),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u8868\u793a\u5c06\u4fee\u6539\u7684\u6587\u4ef6\u548c\u5220\u9664\u7684\u6587\u4ef6\u6dfb\u52a0\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\u6682\u5b58\u533a\uff0c\u4e0d\u5305\u62ec\u65b0\u589e\u52a0\u7684\u6587\u4ef6\u3002\u6ce8\u610f\u8fd9\u4e9b\u88ab\u5220\u9664\u7684\u6587\u4ef6\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93\u518d\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93\u540e\uff0c\u6587\u4ef6\u5c31\u4f1a\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\u7cfb\u7edf\u4e2d\u6d88\u5931\u3002"),(0,a.kt)("h3",{id:"23-git-add--a"},"2.3 ",(0,a.kt)("inlineCode",{parentName:"h3"},"git add -A")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u7b49\u540c\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git add --all"),"\u3002"),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u8868\u793a\u5c06\u6240\u6709\u5df2\u8ddf\u8e2a\u7684\u4fee\u6539\u7684\u6587\u4ef6\u3001\u65b0\u589e\u7684\u6587\u4ef6\u3001\u5df2\u5220\u9664\u7684\u6587\u4ef6\u6dfb\u52a0\u5230\u6682\u5b58\u533a\u3002"),(0,a.kt)("h3",{id:"24-git-add--i"},"2.4 ",(0,a.kt)("inlineCode",{parentName:"h3"},"git add -i")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u7b49\u540c\u4e8e\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git add --interactive"),"\u3002"),(0,a.kt)("p",null,"\u8fdb\u5165\u4e00\u4e2a\u53ef\u4ee5\u8fdb\u884c\u4ea4\u4e92\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"shell"),"\u754c\u9762\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"~/workspace/github/git-study(dev \u2714) git add -i\n\n*** Commands ***\n  1: status   2: update   3: revert   4: add untracked\n  5: patch    6: diff     7: quit     8: help\nWhat now>\n")),(0,a.kt)("p",null,"\u9009\u62e9\u5bf9\u5e94\u7684\u6570\u5b57\u6216\u5355\u8bcd\u7684\u9996\u5b57\u6bcd\u5373\u53ef\u6267\u884c\u5bf9\u5e94\u7684\u64cd\u4f5c\u3002"))}m.isMDXComponent=!0}}]);