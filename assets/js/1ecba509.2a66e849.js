"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[14774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),g=p(n),u=r,k=g["".concat(o,".").concat(u)]||g[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[g]="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},l=void 0,d={unversionedId:"git/git\u5e38\u7528\u64cd\u4f5c",id:"git/git\u5e38\u7528\u64cd\u4f5c",title:"git\u5e38\u7528\u64cd\u4f5c",description:"1. .gitignore\u6587\u4ef6\u7528\u6cd5",source:"@site/docs/git/git\u5e38\u7528\u64cd\u4f5c.md",sourceDirName:"git",slug:"/git/git\u5e38\u7528\u64cd\u4f5c",permalink:"/docs/git/git\u5e38\u7528\u64cd\u4f5c",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gitSidebar",previous:{title:"git\u4e2d\u7684object",permalink:"/docs/git/git\u4e2d\u7684object"},next:{title:"git\u5e38\u7528\u7684\u547d\u4ee4",permalink:"/docs/git/git\u5e38\u7528\u7684\u547d\u4ee4"}},o={},p=[{value:"1. <code>.gitignore</code>\u6587\u4ef6\u7528\u6cd5",id:"1-gitignore\u6587\u4ef6\u7528\u6cd5",level:2},{value:"2. <code>Git</code>\u5168\u5c40\u914d\u7f6e",id:"2-git\u5168\u5c40\u914d\u7f6e",level:2},{value:"3. \u65b0\u5efa\u9879\u76ee",id:"3-\u65b0\u5efa\u9879\u76ee",level:2},{value:"3.1 \u672c\u5730\u9879\u76ee\u63a8\u9001\u5230\u8fdc\u7a0b",id:"31-\u672c\u5730\u9879\u76ee\u63a8\u9001\u5230\u8fdc\u7a0b",level:3},{value:"3.2 \u514b\u9686\u8fdc\u7a0b\u9879\u76ee",id:"32-\u514b\u9686\u8fdc\u7a0b\u9879\u76ee",level:3},{value:"4. \u63d0\u4ea4\u4ee3\u7801",id:"4-\u63d0\u4ea4\u4ee3\u7801",level:2},{value:"5. \u65b0\u5efa\u4e0e\u5207\u6362\u5206\u652f",id:"5-\u65b0\u5efa\u4e0e\u5207\u6362\u5206\u652f",level:2},{value:"6. \u5408\u5e76\u4ee3\u7801",id:"6-\u5408\u5e76\u4ee3\u7801",level:2},{value:"7. \u5220\u9664\u5206\u652f",id:"7-\u5220\u9664\u5206\u652f",level:2},{value:"7.1 \u5220\u9664\u672c\u5730\u5206\u652f",id:"71-\u5220\u9664\u672c\u5730\u5206\u652f",level:3},{value:"7.2 \u5220\u9664\u8fdc\u7a0b\u5206\u652f",id:"72-\u5220\u9664\u8fdc\u7a0b\u5206\u652f",level:3},{value:"8. \u64a4\u9500\u56de\u6eda",id:"8-\u64a4\u9500\u56de\u6eda",level:2},{value:"8.1 \u53ea\u4fee\u6539\u672a<code>add</code>",id:"81-\u53ea\u4fee\u6539\u672aadd",level:3},{value:"8.2 \u5df2<code>add</code>\u672a<code>commit</code>",id:"82-\u5df2add\u672acommit",level:3},{value:"8.3 \u5df2<code>commit</code>\u672a<code>push</code>",id:"83-\u5df2commit\u672apush",level:3},{value:"8.4 \u5df2<code>push</code>",id:"84-\u5df2push",level:3},{value:"8.5 git reset\u53c2\u6570\u95ee\u9898",id:"85-git-reset\u53c2\u6570\u95ee\u9898",level:3}],c={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-gitignore\u6587\u4ef6\u7528\u6cd5"},"1. ",(0,r.kt)("inlineCode",{parentName:"h2"},".gitignore"),"\u6587\u4ef6\u7528\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u914d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"#")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6240\u6709\u7a7a\u884c\u6216\u8005\u4ee5#\u5f00\u5934\u7684\u884c\u90fd\u4f1a\u88abgit\b\u5ffd\u7565")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"*.log")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5ffd\u7565\u6240\u6709\u65e5\u5fd7\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"/TODO")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5ffd\u7565\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684TODO\u6587\u4ef6\uff0c\u9632\u6b62\u9012\u5f52")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},".idea/")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5ffd\u7565\u6307\u5b9a\u7684idea\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"doc/**/*.doc")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5ffd\u7565doc\u76ee\u5f55\u4e0b\u7684\u6240\u6709doc\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"!")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5ffd\u7565\u7f6e\u9876\u6a21\u5f0f\u4ee5\u5916\u7684\u6587\u4ef6\u6216\u76ee\u5f55")))),(0,r.kt)("h2",{id:"2-git\u5168\u5c40\u914d\u7f6e"},"2. ",(0,r.kt)("inlineCode",{parentName:"h2"},"Git"),"\u5168\u5c40\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e0d\u540c\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6587\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u547d\u4ee4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"/etc/gitconfig")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5bf9\u7cfb\u7edf\u6240\u6709\u7528\u6237\u6709\u6548"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"git config --system"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"~/.gitconfig")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5bf9\u5f53\u524d\u7528\u6237\u6709\u6548"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"git config --global"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},".git/config")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u4ed3\u5e93\u76ee\u5f55\u4e0b\u7684\u4ec5\u5bf9\u8be5\u4ed3\u5e93\u6709\u6548"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5168\u5c40\u914d\u7f6e\ngit config --list\n\n# \u914d\u7f6e\u5168\u5c40\u7528\u6237\u540d\ngit config --global user.name 'aaaaaAndy'\n\n# \u914d\u7f6e\u5168\u5c40\u90ae\u7bb1\ngit config --global user.email '980381110@qq.com'\n")),(0,r.kt)("h2",{id:"3-\u65b0\u5efa\u9879\u76ee"},"3. \u65b0\u5efa\u9879\u76ee"),(0,r.kt)("h3",{id:"31-\u672c\u5730\u9879\u76ee\u63a8\u9001\u5230\u8fdc\u7a0b"},"3.1 \u672c\u5730\u9879\u76ee\u63a8\u9001\u5230\u8fdc\u7a0b"),(0,r.kt)("p",null,"\u672c\u65b9\u5f0f\u9002\u7528\u4e8e\u672c\u5730\u5df2\u7ecf\u65b0\u5efa\u5b58\u5728\u4e86\u9879\u76ee\uff0c\u4e14\u5de5\u4f5c\u533a\u5df2\u7ecf\u6709\u4e86\u4fee\u6539\u884c\u4e3a\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5728\u8fdc\u7a0b\u7ba1\u7406\u5e73\u53f0\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"github"),"\uff09\u65b0\u5efa\u4e00\u4e2a\u7a7a\u9879\u76ee\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316\u5de5\u7a0b.git\u76ee\u5f55\ngit init                \n\n# \u6dfb\u52a0\u6240\u6709\u6587\u4ef6\u5230\u6682\u5b58\u533a\uff0c\u4e5f\u53ef\u5355\u72ec\u6307\u5b9a\u6587\u4ef6\u6dfb\u52a0\ngit add .   \n\n# \u63d0\u4ea4\u6682\u5b58\u533a\u6587\u4ef6\u95ee\u672c\u5730\u4ed3\u5e93\ngit commit -m 'xxx'         \n\n# \u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u540d\u4e3aorigin\uff0c\u94fe\u63a5\u4e3agit@github.xxx\ngit remote add origin git@github.xxx    \n\n# \u5c06\u672c\u5730\u4ed3\u5e93\u7684\u6587\u4ef6\u63a8\u9001\u5230\u540d\u4e3aorigin\u7684\u8fdc\u7a0b\u4ed3\u5e93\u7684master\u5206\u652f \ngit push -u origin master       \n")),(0,r.kt)("h3",{id:"32-\u514b\u9686\u8fdc\u7a0b\u9879\u76ee"},"3.2 \u514b\u9686\u8fdc\u7a0b\u9879\u76ee"),(0,r.kt)("p",null,"\u672c\u65b9\u5f0f\u9002\u5408\u672c\u5730\u6ca1\u6709\u9879\u76ee\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5148\u5728\u8fdc\u7a0b\u7ba1\u7406\u5e73\u53f0\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"github"),"\uff09\u65b0\u5efa\u4e00\u4e2a\u7a7a\u9879\u76ee\uff0c\u7136\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"clone"),"\u5230\u672c\u5730\uff0c\u6b64\u65f6\u672c\u5730\u4ed3\u5e93\u4e0e\u8fdc\u7a0b\u4ed3\u5e93\u5df2\u7ecf\u5efa\u7acb\u4e86\u8fde\u63a5\uff0c\u53ef\u76f4\u63a5\u63d0\u4ea4\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.xxx\n")),(0,r.kt)("h2",{id:"4-\u63d0\u4ea4\u4ee3\u7801"},"4. \u63d0\u4ea4\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0\u6240\u6709\u6587\u4ef6\u5230\u6682\u5b58\u533a\uff0c\u4e5f\u53ef\u5355\u72ec\u6307\u5b9a\u6587\u4ef6\u6dfb\u52a0\ngit add .\n\n# \u63d0\u4ea4\u6682\u5b58\u533a\u6587\u4ef6\u95ee\u672c\u5730\u4ed3\u5e93\ngit commit -m 'xxx'\n\n# \u4ece\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u4e0b\u6700\u65b0\u4ee3\u7801\uff0c\u5e76\u4e0e\u672c\u5730\u4ee3\u7801\u5408\u5e76\ngit pull\n\n# \u5c06\u672c\u5730\u4ed3\u5e93\u540c\u6b65\u5230\u8fdc\u7a0b\u4ed3\u5e93\ngit push\n")),(0,r.kt)("h2",{id:"5-\u65b0\u5efa\u4e0e\u5207\u6362\u5206\u652f"},"5. \u65b0\u5efa\u4e0e\u5207\u6362\u5206\u652f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5f53\u524d\u5206\u652f\ngit branch\n\n# \u5207\u6362\u5206\u652f\ngit checkout <branch_name>\n\n# \u65b0\u5efa\u5e76\u5207\u6362\u5230\u8be5\u5206\u652f\n# checkout\u662f\u5207\u6362\uff0c-b\u662f\u65b0\u5efa\ngit checkout -b <brandh_name>\n\n# \u5c06\u65b0\u5efa\u5206\u652f\u63a8\u9001\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5efa\u7acb\u8ffd\u8e2a\u5173\u7cfb\ngit push -u origin <branch_name>\n")),(0,r.kt)("h2",{id:"6-\u5408\u5e76\u4ee3\u7801"},"6. \u5408\u5e76\u4ee3\u7801"),(0,r.kt)("p",null,"\u5982\u679c\b\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"brandh_B"),"\u5206\u652f\u4ee3\u7801\u5408\u5e76\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"brandh_A"),"\u5206\u652f\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5148\u5207\u6362A\u5206\u652f\u4e0a\ngit checkout <brandh_A>\n\n# \u5c06B\u5206\u652f\u4ee3\u7801\u5408\u5e76\u5230A\u5206\u652f\u4e0a\n# \u6b64\u65f6\u53ef\u80fd\u4f1a\u6709\u51b2\u7a81\uff0c\u9700\u8981\u5148\u89e3\u51b3\u51b2\u7a81\u624d\u80fd\u7ee7\u7eed\u4e0b\u4e00\u6b65\ngit merge <branch_B>\n\n# \u5c06\u672c\u5730\u4ee3\u7801\u63a8\u9001\u5230\u8fdc\u7a0b\u5206\u652f\ngit push\n")),(0,r.kt)("h2",{id:"7-\u5220\u9664\u5206\u652f"},"7. \u5220\u9664\u5206\u652f"),(0,r.kt)("h3",{id:"71-\u5220\u9664\u672c\u5730\u5206\u652f"},"7.1 \u5220\u9664\u672c\u5730\u5206\u652f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5220\u9664\u672c\u5730\u5206\u652f\ngit branch -d <branch_name>\n")),(0,r.kt)("h3",{id:"72-\u5220\u9664\u8fdc\u7a0b\u5206\u652f"},"7.2 \u5220\u9664\u8fdc\u7a0b\u5206\u652f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u8fdc\u7a0b\u5206\u652f\ngit push origin -d <branch_name>\ngit push origin \u2013-delete <branch_name>\n")),(0,r.kt)("h2",{id:"8-\u64a4\u9500\u56de\u6eda"},"8. \u64a4\u9500\u56de\u6eda"),(0,r.kt)("h3",{id:"81-\u53ea\u4fee\u6539\u672aadd"},"8.1 \u53ea\u4fee\u6539\u672a",(0,r.kt)("inlineCode",{parentName:"h3"},"add")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u64a4\u9500\u6240\u6709\u7684\u4fee\u6539\ngit checkout .\n\n# \u64a4\u9500\u672aadd\u7684\u6587\u4ef6\u4fee\u6539\uff0c\u7ea2\u5b57\u53d8\u65e0\ngit checkout -- <filename>\n")),(0,r.kt)("h3",{id:"82-\u5df2add\u672acommit"},"8.2 \u5df2",(0,r.kt)("inlineCode",{parentName:"h3"},"add"),"\u672a",(0,r.kt)("inlineCode",{parentName:"h3"},"commit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u64a4\u9500\u6240\u6709\u7684\u5df2\u7ecfadd\u7684\u6587\u4ef6\ngit reset HEAD .\n\n# \u64a4\u9500\u67d0\u4e2a\u6587\u4ef6\u6216\u6587\u4ef6\u5939\ngit reset HEAD <filename>\n")),(0,r.kt)("h3",{id:"83-\u5df2commit\u672apush"},"8.3 \u5df2",(0,r.kt)("inlineCode",{parentName:"h3"},"commit"),"\u672a",(0,r.kt)("inlineCode",{parentName:"h3"},"push")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u56de\u9000\u5185\u5bb9\u5230\u4e0a\u4e00\u6b21\u63d0\u4ea4\ngit reset --hard HEAD^\n\n# \u56de\u9000\u5185\u5bb9\u5230\u6307\u5b9a\u7684\u63d0\u4ea4\ngit reset --hard <commit-id>\n")),(0,r.kt)("h3",{id:"84-\u5df2push"},"8.4 \u5df2",(0,r.kt)("inlineCode",{parentName:"h3"},"push")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"revert"),(0,r.kt)("inlineCode",{parentName:"li"},"revert"),"\u662f\u653e\u5f03\u6307\u5b9a\u63d0\u4ea4\u7684\u4fee\u6539\uff0c\u4f46\u662f\u4f1a\u751f\u6210\u4e00\u6b21\u65b0\u7684\u63d0\u4ea4\uff0c\u9700\u8981\u586b\u5199\u63d0\u4ea4\u6ce8\u91ca\uff0c\u4ee5\u524d\u7684\u5386\u53f2\u8bb0\u5f55\u90fd\u5728\uff1b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u64a4\u9500\u524d\u4e00\u6b21\u63d0\u4ea4\ngit revert HEAD\n\n# \u64a4\u9500\u524d\u524d\u4e00\u6b21\u63d0\u4ea4\ngit revert HEAD^\n\n# \u64a4\u9500\u6307\u5b9a\u7684\u63d0\u4ea4\ngit revert <commit-id>\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u9009\u4e00\u4e2a\u6267\u884c\u5c31\u597d\uff0c\u6267\u884c\u5b8c\u4e4b\u540e\u8fd8\u9700\u8981\u63a8\u9001\u5230\u8fdc\u7a0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin master\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"reset"),(0,r.kt)("inlineCode",{parentName:"li"},"reset"),"\u662f\u6307\u5c06HEAD\u6307\u9488\u6307\u5230\u6307\u5b9a\u63d0\u4ea4\uff0c\u5386\u53f2\u8bb0\u5f55\u4e2d\u4e0d\u4f1a\u51fa\u73b0\u653e\u5f03\u7684\u63d0\u4ea4\u8bb0\u5f55\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u56de\u9000\u5185\u5bb9\u5230\u4e0a\u4e00\u6b21\u63d0\u4ea4\ngit reset --hard HEAD^\n\n# \u56de\u9000\u5185\u5bb9\u5230\u6307\u5b9a\u7684\u63d0\u4ea4\ngit reset --hard <commit-id>\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u9009\u4e00\u4e2a\u6267\u884c\u5c31\u597d\uff0c\u6267\u884c\u5b8c\u4e4b\u540e\u8fd8\u9700\u8981\u63a8\u9001\u5230\u8fdc\u7a0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin master -f\n")),(0,r.kt)("h3",{id:"85-git-reset\u53c2\u6570\u95ee\u9898"},"8.5 git reset\u53c2\u6570\u95ee\u9898"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u56de\u9000\u4e00\u4e2a\u7248\u672c,\u4e14\u4f1a\u5c06\u6682\u5b58\u533a\u7684\u5185\u5bb9\u548c\u672c\u5730\u5df2\u63d0\u4ea4\u7684\u5185\u5bb9\u5168\u90e8\u6062\u590d\u5230\u672a\u6682\u5b58\u7684\u72b6\u6001,\u4e0d\u5f71\u54cd\u539f\u6765\u672c\u5730\u6587\u4ef6(\u672a\u63d0\u4ea4\u7684\u4e5f\u4e0d\u53d7\u5f71\u54cd)\ngit reset (-\u2013mixed) HEAD~1\n\n# \u56de\u9000\u4e00\u4e2a\u7248\u672c,\u4e0d\u6e05\u7a7a\u6682\u5b58\u533a,\u5c06\u5df2\u63d0\u4ea4\u7684\u5185\u5bb9\u6062\u590d\u5230\u6682\u5b58\u533a,\u4e0d\u5f71\u54cd\u539f\u6765\u672c\u5730\u7684\u6587\u4ef6(\u672a\u63d0\u4ea4\u7684\u4e5f\u4e0d\u53d7\u5f71\u54cd)\ngit reset -\u2013soft HEAD~1\n\n# \u56de\u9000\u4e00\u4e2a\u7248\u672c,\u6e05\u7a7a\u6682\u5b58\u533a,\u5c06\u5df2\u63d0\u4ea4\u7684\u5185\u5bb9\u7684\u7248\u672c\u6062\u590d\u5230\u672c\u5730,\u672c\u5730\u7684\u6587\u4ef6\u4e5f\u5c06\u88ab\u6062\u590d\u7684\u7248\u672c\u66ff\u6362\ngit reset -\u2013hard HEAD~1\n")))}m.isMDXComponent=!0}}]);