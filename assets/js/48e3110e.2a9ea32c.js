"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[53285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||k[m]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},o="\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f60\u5bf9\u5de5\u5382\u6a21\u5f0f\u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f",p={unversionedId:"design/Factory  Pattern",id:"design/Factory  Pattern",title:"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f60\u5bf9\u5de5\u5382\u6a21\u5f0f\u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/design/Factory  Pattern.md",sourceDirName:"design",slug:"/design/Factory  Pattern",permalink:"/docs/design/Factory  Pattern",draft:!1,tags:[],version:"current",frontMatter:{}},c={},i=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001\u5b9e\u73b0",id:"\u4e8c\u5b9e\u73b0",level:2},{value:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",id:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",level:3},{value:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",id:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",level:3},{value:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",id:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",level:3},{value:"\u4e09\u3001\u5e94\u7528\u573a\u666f",id:"\u4e09\u5e94\u7528\u573a\u666f",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],u={toc:i},s="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9762\u8bd5\u5b98\u8bf4\u8bf4\u4f60\u5bf9\u5de5\u5382\u6a21\u5f0f\u7684\u7406\u89e3\u5e94\u7528\u573a\u666f"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f60\u5bf9\u5de5\u5382\u6a21\u5f0f\u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f"),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://static.vue-js.com/27a84d10-3bea-11ec-8e64-91fdec0f05a1.png",alt:null})),(0,a.kt)("h2",{id:"\u4e00\u662f\u4ec0\u4e48"},"\u4e00\u3001\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"\u5de5\u5382\u6a21\u5f0f\u662f\u7528\u6765\u521b\u5efa\u5bf9\u8c61\u7684\u4e00\u79cd\u6700\u5e38\u7528\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4e0d\u66b4\u9732\u521b\u5efa\u5bf9\u8c61\u7684\u5177\u4f53\u903b\u8f91\uff0c\u800c\u662f\u5c06\u5c06\u903b\u8f91\u5c01\u88c5\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u90a3\u4e48\u8fd9\u4e2a\u51fd\u6570\u5c31\u53ef\u4ee5\u88ab\u89c6\u4e3a\u4e00\u4e2a\u5de5\u5382"),(0,a.kt)("p",null,"\u5176\u5c31\u50cf\u5de5\u5382\u4e00\u6837\u91cd\u590d\u7684\u4ea7\u751f\u7c7b\u4f3c\u7684\u4ea7\u54c1\uff0c\u5de5\u5382\u6a21\u5f0f\u53ea\u9700\u8981\u6211\u4eec\u4f20\u5165\u6b63\u786e\u7684\u53c2\u6570\uff0c\u5c31\u80fd\u751f\u4ea7\u7c7b\u4f3c\u7684\u4ea7\u54c1"),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7a0b\u4e2d\uff0c\u5728\u4e00\u4e2a A \u7c7b\u4e2d\u901a\u8fc7 new \u7684\u65b9\u5f0f\u5b9e\u4f8b\u5316\u4e86\u7c7b B\uff0c\u90a3\u4e48 A \u7c7b\u548c B \u7c7b\u4e4b\u95f4\u5c31\u5b58\u5728\u5173\u8054\uff08\u8026\u5408\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u671f\u56e0\u4e3a\u9700\u8981\u4fee\u6539\u4e86 B \u7c7b\u7684\u4ee3\u7801\u548c\u4f7f\u7528\u65b9\u5f0f\uff0c\u6bd4\u5982\u6784\u9020\u51fd\u6570\u4e2d\u4f20\u5165\u53c2\u6570\uff0c\u90a3\u4e48 A \u7c7b\u4e5f\u8981\u8ddf\u7740\u4fee\u6539\uff0c\u4e00\u4e2a\u7c7b\u7684\u4f9d\u8d56\u53ef\u80fd\u5f71\u54cd\u4e0d\u5927\uff0c\u4f46\u82e5\u6709\u591a\u4e2a\u7c7b\u4f9d\u8d56\u4e86 B \u7c7b\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5de5\u4f5c\u91cf\u5c06\u4f1a\u76f8\u5f53\u7684\u5927\uff0c\u5bb9\u6613\u51fa\u73b0\u4fee\u6539\u9519\u8bef\uff0c\u4e5f\u4f1a\u4ea7\u751f\u5f88\u591a\u7684\u91cd\u590d\u4ee3\u7801\uff0c\u8fd9\u65e0\u7591\u662f\u4ef6\u975e\u5e38\u75db\u82e6\u7684\u4e8b\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c31\u9700\u8981\u5c06\u521b\u5efa\u5b9e\u4f8b\u7684\u5de5\u4f5c\u4ece\u8c03\u7528\u65b9\uff08A\u7c7b\uff09\u4e2d\u5206\u79bb\uff0c\u4e0e\u8c03\u7528\u65b9",(0,a.kt)("strong",{parentName:"li"},"\u89e3\u8026"),"\uff0c\u4e5f\u5c31\u662f\u4f7f\u7528\u5de5\u5382\u65b9\u6cd5\u521b\u5efa\u5b9e\u4f8b\u7684\u5de5\u4f5c\u5c01\u88c5\u8d77\u6765\uff08",(0,a.kt)("strong",{parentName:"li"},"\u51cf\u5c11\u4ee3\u7801\u91cd\u590d"),"\uff09\uff0c\u7531\u5de5\u5382\u7ba1\u7406\u5bf9\u8c61\u7684\u521b\u5efa\u903b\u8f91\uff0c\u8c03\u7528\u65b9\u4e0d\u9700\u8981\u77e5\u9053\u5177\u4f53\u7684\u521b\u5efa\u8fc7\u7a0b\uff0c\u53ea\u7ba1\u4f7f\u7528\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u800c\u964d\u4f4e\u8c03\u7528\u8005\u56e0\u4e3a\u521b\u5efa\u903b\u8f91\u5bfc\u81f4\u7684\u9519\u8bef"),"\uff1b")),(0,a.kt)("h2",{id:"\u4e8c\u5b9e\u73b0"},"\u4e8c\u3001\u5b9e\u73b0"),(0,a.kt)("p",null,"\u5de5\u5382\u6a21\u5f0f\u6839\u636e\u62bd\u8c61\u7a0b\u5ea6\u7684\u4e0d\u540c\u53ef\u4ee5\u5206\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\uff08Simple Factory\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\uff08Factory Method\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\uff08Abstract Factory\uff09")),(0,a.kt)("h3",{id:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f"},"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f"),(0,a.kt)("p",null,"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u4e5f\u53eb\u9759\u6001\u5de5\u5382\u6a21\u5f0f\uff0c\u7528\u4e00\u4e2a\u5de5\u5382\u5bf9\u8c61\u521b\u5efa\u540c\u4e00\u7c7b\u5bf9\u8c61\u7c7b\u7684\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u8981\u5f00\u53d1\u4e00\u4e2a\u516c\u53f8\u5c97\u4f4d\u53ca\u5176\u5de5\u4f5c\u5185\u5bb9\u7684\u5f55\u5165\u4fe1\u606f\uff0c\u4e0d\u540c\u5c97\u4f4d\u7684\u5de5\u4f5c\u5185\u5bb9\u4e0d\u4e00\u81f4"),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function Factory(career) {\n    function User(career, work) {\n        this.career = career \n        this.work = work\n    }\n    let work\n    switch(career) {\n        case 'coder':\n            work =  ['\u5199\u4ee3\u7801', '\u4feeBug'] \n            return new User(career, work)\n            break\n        case 'hr':\n            work = ['\u62db\u8058', '\u5458\u5de5\u4fe1\u606f\u7ba1\u7406']\n            return new User(career, work)\n            break\n        case 'driver':\n            work = ['\u5f00\u8f66']\n            return new User(career, work)\n            break\n        case 'boss':\n            work = ['\u559d\u8336', '\u5f00\u4f1a', '\u5ba1\u6279\u6587\u4ef6']\n            return new User(career, work)\n            break\n    }\n}\nlet coder = new Factory('coder')\nconsole.log(coder)\nlet boss = new Factory('boss')\nconsole.log(boss)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Factory"),"\u5c31\u662f\u4e00\u4e2a\u7b80\u5355\u5de5\u5382\u3002\u5f53\u6211\u4eec\u8c03\u7528\u5de5\u5382\u51fd\u6570\u65f6\uff0c\u53ea\u9700\u8981\u4f20\u9012name\u3001age\u3001career\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u5305\u542b\u7528\u6237\u5de5\u4f5c\u5185\u5bb9\u7684\u5b9e\u4f8b\u5bf9\u8c61"),(0,a.kt)("h3",{id:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f"},"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u8ddf\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u5dee\u4e0d\u591a\uff0c\u4f46\u662f\u628a\u5177\u4f53\u7684\u4ea7\u54c1\u653e\u5230\u4e86\u5de5\u5382\u51fd\u6570\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"prototype"),"\u4e2d"),(0,a.kt)("p",null,"\u8fd9\u6837\u4e00\u6765\uff0c\u6269\u5c55\u4ea7\u54c1\u79cd\u7c7b\u5c31\u4e0d\u5fc5\u4fee\u6539\u5de5\u5382\u51fd\u6570\u4e86\uff0c\u548c\u5fc3\u7d2f\u5c31\u53d8\u6210\u62bd\u8c61\u7c7b\uff0c\u4e5f\u53ef\u4ee5\u968f\u65f6\u91cd\u5199\u67d0\u79cd\u5177\u4f53\u7684\u4ea7\u54c1"),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u76f8\u5f53\u4e8e\u5de5\u5382\u603b\u90e8\u4e0d\u751f\u4ea7\u4ea7\u54c1\u4e86\uff0c\u4ea4\u7ed9\u4e0b\u8f96\u5206\u5de5\u5382\u8fdb\u884c\u751f\u4ea7\uff1b\u4f46\u662f\u8fdb\u5165\u5de5\u5382\u4e4b\u524d\uff0c\u9700\u8981\u6709\u4e2a\u5224\u65ad\u6765\u9a8c\u8bc1\u4f60\u8981\u751f\u4ea7\u7684\u4e1c\u897f\u662f\u5426\u662f\u5c5e\u4e8e\u6211\u4eec\u5de5\u5382\u6240\u751f\u4ea7\u8303\u56f4\uff0c\u5982\u679c\u662f\uff0c\u5c31\u4e22\u7ed9\u4e0b\u8f96\u5de5\u5382\u6765\u8fdb\u884c\u751f\u4ea7"),(0,a.kt)("p",null,"\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5de5\u5382\u65b9\u6cd5\nfunction Factory(career){\n    if(this instanceof Factory){\n        var a = new this[career]();\n        return a;\n    }else{\n        return new Factory(career);\n    }\n}\n// \u5de5\u5382\u65b9\u6cd5\u51fd\u6570\u7684\u539f\u578b\u4e2d\u8bbe\u7f6e\u6240\u6709\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\nFactory.prototype={\n    'coder': function(){\n        this.careerName = '\u7a0b\u5e8f\u5458'\n        this.work = ['\u5199\u4ee3\u7801', '\u4feeBug'] \n    },\n    'hr': function(){\n        this.careerName = 'HR'\n        this.work = ['\u62db\u8058', '\u5458\u5de5\u4fe1\u606f\u7ba1\u7406']\n    },\n    'driver': function () {\n        this.careerName = '\u53f8\u673a'\n        this.work = ['\u5f00\u8f66']\n    },\n    'boss': function(){\n        this.careerName = '\u8001\u677f'\n        this.work = ['\u559d\u8336', '\u5f00\u4f1a', '\u5ba1\u6279\u6587\u4ef6']\n    }\n}\nlet coder = new Factory('coder')\nconsole.log(coder)\nlet hr = new Factory('hr')\nconsole.log(hr)\n")),(0,a.kt)("p",null,"\u5de5\u5382\u65b9\u6cd5\u5173\u952e\u6838\u5fc3\u4ee3\u7801\u662f\u5de5\u5382\u91cc\u9762\u7684\u5224\u65adthis\u662f\u5426\u5c5e\u4e8e\u5de5\u5382\uff0c\u4e5f\u5c31\u662f\u505a\u4e86\u5206\u652f\u5224\u65ad\uff0c\u8fd9\u4e2a\u5de5\u5382\u53ea\u505a\u6211\u80fd\u505a\u7684\u4ea7\u54c1"),(0,a.kt)("h3",{id:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f"},"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7b80\u5355\u5de5\u5382\u6a21\u5f0f\u548c\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u90fd\u662f\u76f4\u63a5\u751f\u6210\u5b9e\u4f8b\uff0c\u4f46\u662f\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u4e0d\u540c\uff0c\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u5e76\u4e0d\u76f4\u63a5\u751f\u6210\u5b9e\u4f8b\uff0c \u800c\u662f\u7528\u4e8e\u5bf9\u4ea7\u54c1\u7c7b\u7c07\u7684\u521b\u5efa"),(0,a.kt)("p",null,"\u901a\u4fd7\u70b9\u6765\u8bb2\u5c31\u662f\uff1a\u7b80\u5355\u5de5\u5382\u548c\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u7684\u5de5\u4f5c\u662f\u751f\u4ea7\u4ea7\u54c1\uff0c\u90a3\u4e48\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u7684\u5de5\u4f5c\u5c31\u662f\u751f\u4ea7\u5de5\u5382\u7684"),(0,a.kt)("p",null,"\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u4e2d\u5e76\u6ca1\u6709\u62bd\u8c61\u7c7b\u7684\u6982\u5ff5\uff0c\u53ea\u80fd\u6a21\u62df\uff0c\u53ef\u4ee5\u5206\u6210\u56db\u90e8\u5206\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u521b\u5efa\u62bd\u8c61\u7c7b\u7684\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"\u5177\u4f53\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5316\u5177\u4f53\u7c7b")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"coder"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"hr"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"boss"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"driver"),"\u56db\u79cd\u5c97\u4f4d\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"coder"),"\u53ef\u80fd\u4f7f\u7528\u4e0d\u540c\u7684\u5f00\u53d1\u8bed\u8a00\u8fdb\u884c\u5f00\u53d1\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Java"),"\u7b49\u7b49\u3002\u90a3\u4e48\u8fd9\u4e24\u79cd\u8bed\u8a00\u5c31\u662f\u5bf9\u5e94\u7684\u7c7b\u7c07"),(0,a.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let CareerAbstractFactory = function(subType, superType) {\n  // \u5224\u65ad\u62bd\u8c61\u5de5\u5382\u4e2d\u662f\u5426\u6709\u8be5\u62bd\u8c61\u7c7b\n  if (typeof CareerAbstractFactory[superType] === 'function') {\n    // \u7f13\u5b58\u7c7b\n    function F() {}\n    // \u7ee7\u627f\u7236\u7c7b\u5c5e\u6027\u548c\u65b9\u6cd5\n    F.prototype = new CareerAbstractFactory[superType]()\n    // \u5c06\u5b50\u7c7b\u7684constructor\u6307\u5411\u7236\u7c7b\n    subType.constructor = subType;\n    // \u5b50\u7c7b\u539f\u578b\u7ee7\u627f\u7236\u7c7b\n    subType.prototype = new F()\n  } else {\n    throw new Error('\u62bd\u8c61\u7c7b\u4e0d\u5b58\u5728')\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"CareerAbstractFactory"),"\u5c31\u662f\u4e00\u4e2a\u62bd\u8c61\u5de5\u5382\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u5728\u53c2\u6570\u4e2d\u4f20\u9012\u5b50\u7c7b\u548c\u7236\u7c7b\uff0c\u5728\u65b9\u6cd5\u4f53\u5185\u90e8\u5b9e\u73b0\u4e86\u5b50\u7c7b\u5bf9\u7236\u7c7b\u7684\u7ee7\u627f"),(0,a.kt)("h2",{id:"\u4e09\u5e94\u7528\u573a\u666f"},"\u4e09\u3001\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u770b\u5230\uff0c\u7b80\u5355\u7b80\u5355\u5de5\u5382\u7684\u4f18\u70b9\u5c31\u662f\u6211\u4eec\u53ea\u8981\u4f20\u9012\u6b63\u786e\u7684\u53c2\u6570\uff0c\u5c31\u80fd\u83b7\u5f97\u6240\u9700\u7684\u5bf9\u8c61\uff0c\u800c\u4e0d\u9700\u8981\u5173\u5fc3\u5176\u521b\u5efa\u7684\u5177\u4f53\u7ec6\u8282"),(0,a.kt)("p",null,"\u5e94\u7528\u573a\u666f\u4e5f\u5bb9\u6613\u8bc6\u522b\uff0c\u6709\u6784\u9020\u51fd\u6570\u7684\u5730\u65b9\uff0c\u5c31\u5e94\u8be5\u8003\u8651\u7b80\u5355\u5de5\u5382\uff0c\u4f46\u662f\u5982\u679c\u51fd\u6570\u6784\u5efa\u51fd\u6570\u592a\u591a\u4e0e\u590d\u6742\uff0c\u4f1a\u5bfc\u81f4\u5de5\u5382\u51fd\u6570\u53d8\u5f97\u590d\u6742\uff0c\u6240\u4ee5\u4e0d\u9002\u5408\u590d\u6742\u7684\u60c5\u51b5"),(0,a.kt)("p",null,"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\u4e00\u822c\u7528\u4e8e\u4e25\u683c\u8981\u6c42\u4ee5\u9762\u5411\u5bf9\u8c61\u601d\u60f3\u8fdb\u884c\u5f00\u53d1\u7684\u8d85\u5927\u578b\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u4e00\u822c\u5e38\u89c4\u7684\u5f00\u53d1\u7684\u8bdd\u4e00\u822c\u5c31\u662f\u7b80\u5355\u5de5\u5382\u548c\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u4f1a\u7528\u7684\u6bd4\u8f83\u591a\u4e00\u4e9b"),(0,a.kt)("p",null,"\u7efc\u4e0a\uff0c\u5de5\u5382\u6a21\u5f0f\u9002\u7528\u573a\u666f\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4e0d\u60f3\u8ba9\u67d0\u4e2a\u5b50\u7cfb\u7edf\u4e0e\u8f83\u5927\u7684\u90a3\u4e2a\u5bf9\u8c61\u4e4b\u95f4\u5f62\u6210\u5f3a\u8026\u5408\uff0c\u800c\u662f\u60f3\u8fd0\u884c\u65f6\u4ece\u8bb8\u591a\u5b50\u7cfb\u7edf\u4e2d\u8fdb\u884c\u6311\u9009\u7684\u8bdd\uff0c\u90a3\u4e48\u5de5\u5382\u6a21\u5f0f\u662f\u4e00\u4e2a\u7406\u60f3\u7684\u9009\u62e9"),(0,a.kt)("li",{parentName:"ul"},"\u5c06new\u64cd\u4f5c\u7b80\u5355\u5c01\u88c5\uff0c\u9047\u5230new\u7684\u65f6\u5019\u5c31\u5e94\u8be5\u8003\u8651\u662f\u5426\u7528\u5de5\u5382\u6a21\u5f0f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u4f9d\u8d56\u5177\u4f53\u73af\u5883\u521b\u5efa\u4e0d\u540c\u5b9e\u4f8b\uff0c\u8fd9\u4e9b\u5b9e\u4f8b\u90fd\u6709\u76f8\u540c\u7684\u884c\u4e3a,\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5de5\u5382\u6a21\u5f0f\uff0c\u7b80\u5316\u5b9e\u73b0\u7684\u8fc7\u7a0b\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u51cf\u5c11\u6bcf\u79cd\u5bf9\u8c61\u6240\u9700\u7684\u4ee3\u7801\u91cf\uff0c\u6709\u5229\u4e8e\u6d88\u9664\u5bf9\u8c61\u95f4\u7684\u8026\u5408\uff0c\u63d0\u4f9b\u66f4\u5927\u7684\u7075\u6d3b\u6027")),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.runoob.com/design-pattern/factory-pattern.html"},"https://www.runoob.com/design-pattern/factory-pattern.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903653774458888"},"https://juejin.cn/post/6844903653774458888")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/344119981"},"https://zhuanlan.zhihu.com/p/344119981"))))}k.isMDXComponent=!0}}]);