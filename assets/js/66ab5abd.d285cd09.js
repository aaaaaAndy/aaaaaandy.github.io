"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[96298],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={},o=void 0,i={unversionedId:"vue/axios\u5c01\u88c5",id:"vue/axios\u5c01\u88c5",title:"axios\u5c01\u88c5",description:"\u4e00\u3001axios\u662f\u4ec0\u4e48",source:"@site/docs/vue/axios\u5c01\u88c5.md",sourceDirName:"vue",slug:"/vue/axios\u5c01\u88c5",permalink:"/docs/vue/axios\u5c01\u88c5",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"vueSidebar",previous:{title:"Vue\u9879\u76ee\u4e2d\u4f60\u662f\u5982\u4f55\u89e3\u51b3\u8de8\u57df",permalink:"/docs/vue/Vue\u9879\u76ee\u4e2d\u4f60\u662f\u5982\u4f55\u89e3\u51b3\u8de8\u57df"},next:{title:"axios\u7684\u6e90\u7801\u5206\u6790",permalink:"/docs/vue/axios\u7684\u6e90\u7801\u5206\u6790"}},p={},s=[{value:"\u4e00\u3001axios\u662f\u4ec0\u4e48",id:"\u4e00axios\u662f\u4ec0\u4e48",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:3},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u4e8c\u3001\u4e3a\u4ec0\u4e48\u8981\u5c01\u88c5",id:"\u4e8c\u4e3a\u4ec0\u4e48\u8981\u5c01\u88c5",level:2},{value:"\u4e09\u3001\u5982\u4f55\u5c01\u88c5",id:"\u4e09\u5982\u4f55\u5c01\u88c5",level:2},{value:"\u8bbe\u7f6e\u63a5\u53e3\u8bf7\u6c42\u524d\u7f00",id:"\u8bbe\u7f6e\u63a5\u53e3\u8bf7\u6c42\u524d\u7f00",level:3},{value:"\u8bbe\u7f6e\u8bf7\u6c42\u5934\u4e0e\u8d85\u65f6\u65f6\u95f4",id:"\u8bbe\u7f6e\u8bf7\u6c42\u5934\u4e0e\u8d85\u65f6\u65f6\u95f4",level:3},{value:"\u5c01\u88c5\u8bf7\u6c42\u65b9\u6cd5",id:"\u5c01\u88c5\u8bf7\u6c42\u65b9\u6cd5",level:3},{value:"\u8bf7\u6c42\u62e6\u622a\u5668",id:"\u8bf7\u6c42\u62e6\u622a\u5668",level:3},{value:"\u54cd\u5e94\u62e6\u622a\u5668",id:"\u54cd\u5e94\u62e6\u622a\u5668",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00axios\u662f\u4ec0\u4e48"},"\u4e00\u3001axios\u662f\u4ec0\u4e48"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"axios")," \u662f\u4e00\u4e2a\u8f7b\u91cf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),"\u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," \u670d\u52a1\u6765\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42\uff0c\u652f\u6301\u4e30\u5bcc\u7684\u914d\u7f6e\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\uff0c\u652f\u6301\u6d4f\u89c8\u5668\u7aef\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," \u7aef\u3002\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"Vue"),"2.0\u8d77\uff0c\u5c24\u5927\u5ba3\u5e03\u53d6\u6d88\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"vue-resource")," \u7684\u5b98\u65b9\u63a8\u8350\uff0c\u8f6c\u800c\u63a8\u8350 ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"\u3002\u73b0\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," \u5df2\u7ecf\u6210\u4e3a\u5927\u90e8\u5206 ",(0,r.kt)("inlineCode",{parentName:"p"},"Vue")," \u5f00\u53d1\u8005\u7684\u9996\u9009"),(0,r.kt)("h3",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ece\u6d4f\u89c8\u5668\u4e2d\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"XMLHttpRequests")),(0,r.kt)("li",{parentName:"ul"},"\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"node.js")," \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"http"),"\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," API"),(0,r.kt)("li",{parentName:"ul"},"\u62e6\u622a\u8bf7\u6c42\u548c\u54cd\u5e94"),(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u8bf7\u6c42\u6570\u636e\u548c\u54cd\u5e94\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u8f6c\u6362",(0,r.kt)("inlineCode",{parentName:"li"}," JSON")," \u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u652f\u6301\u9632\u5fa1",(0,r.kt)("inlineCode",{parentName:"li"},"XSRF"))),(0,r.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",null,"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u9879\u76ee\u4e2d\u5b89\u88c5\nnpm install axios --S\n// cdn \u5f15\u5165\n<script src="https://unpkg.com/axios/dist/axios.min.js"><\/script>\n')),(0,r.kt)("p",null,"\u5bfc\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import axios from 'axios'\n")),(0,r.kt)("p",null,"\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"axios({        \n  url:'xxx',    // \u8bbe\u7f6e\u8bf7\u6c42\u7684\u5730\u5740\n  method:\"GET\", // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u6cd5\n  params:{      // get\u8bf7\u6c42\u4f7f\u7528params\u8fdb\u884c\u53c2\u6570\u51ed\u501f,\u5982\u679c\u662fpost\u8bf7\u6c42\u7528data\n    type: '',\n    page: 1\n  }\n}).then(res => {  \n  // res\u4e3a\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\n  console.log(res);   \n})\n")),(0,r.kt)("p",null,"\u5e76\u53d1\u8bf7\u6c42",(0,r.kt)("inlineCode",{parentName:"p"},"axios.all([])")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getUserAccount() {\n    return axios.get('/user/12345');\n}\n\nfunction getUserPermissions() {\n    return axios.get('/user/12345/permissions');\n}\n\naxios.all([getUserAccount(), getUserPermissions()])\n    .then(axios.spread(function (res1, res2) { \n    // res1\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u7684\u8fd4\u56de\u7684\u5185\u5bb9\uff0cres2\u7b2c\u4e8c\u4e2a\u8bf7\u6c42\u8fd4\u56de\u7684\u5185\u5bb9\n    // \u4e24\u4e2a\u8bf7\u6c42\u90fd\u6267\u884c\u5b8c\u6210\u624d\u4f1a\u6267\u884c\n}));\n")),(0,r.kt)("h2",{id:"\u4e8c\u4e3a\u4ec0\u4e48\u8981\u5c01\u88c5"},"\u4e8c\u3001\u4e3a\u4ec0\u4e48\u8981\u5c01\u88c5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"axios")," \u7684 API \u5f88\u53cb\u597d\uff0c\u4f60\u5b8c\u5168\u53ef\u4ee5\u5f88\u8f7b\u677e\u5730\u5728\u9879\u76ee\u4e2d\u76f4\u63a5\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u4e0d\u8fc7\u968f\u7740\u9879\u76ee\u89c4\u6a21\u589e\u5927\uff0c\u5982\u679c\u6bcf\u53d1\u8d77\u4e00\u6b21",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),"\u8bf7\u6c42\uff0c\u5c31\u8981\u628a\u8fd9\u4e9b\u6bd4\u5982\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u3001\u8bbe\u7f6e\u8bf7\u6c42\u5934\u3001\u6839\u636e\u9879\u76ee\u73af\u5883\u5224\u65ad\u4f7f\u7528\u54ea\u4e2a\u8bf7\u6c42\u5730\u5740\u3001\u9519\u8bef\u5904\u7406\u7b49\u7b49\u64cd\u4f5c\uff0c\u90fd\u9700\u8981\u5199\u4e00\u904d"),(0,r.kt)("p",null,"\u8fd9\u79cd\u91cd\u590d\u52b3\u52a8\u4e0d\u4ec5\u6d6a\u8d39\u65f6\u95f4\uff0c\u800c\u4e14\u8ba9\u4ee3\u7801\u53d8\u5f97\u5197\u4f59\u4e0d\u582a\uff0c\u96be\u4ee5\u7ef4\u62a4\u3002\u4e3a\u4e86\u63d0\u9ad8\u6211\u4eec\u7684\u4ee3\u7801\u8d28\u91cf\uff0c\u6211\u4eec\u5e94\u8be5\u5728\u9879\u76ee\u4e2d\u4e8c\u6b21\u5c01\u88c5\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," \u518d\u4f7f\u7528"),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"axios('http://localhost:3000/data', {\n  // \u914d\u7f6e\u4ee3\u7801\n  method: 'GET',\n  timeout: 1000,\n  withCredentials: true,\n  headers: {\n    'Content-Type': 'application/json',\n    Authorization: 'xxx',\n  },\n  transformRequest: [function (data, headers) {\n    return data;\n  }],\n  // \u5176\u4ed6\u8bf7\u6c42\u914d\u7f6e...\n})\n.then((data) => {\n  // todo: \u771f\u6b63\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\n  console.log(data);\n}, (err) => {\n  // \u9519\u8bef\u5904\u7406\u4ee3\u7801  \n  if (err.response.status === 401) {\n  // handle authorization error\n  }\n  if (err.response.status === 403) {\n  // handle server forbidden error\n  }\n  // \u5176\u4ed6\u9519\u8bef\u5904\u7406.....\n  console.log(err);\n});\n")),(0,r.kt)("p",null,"\u5982\u679c\u6bcf\u4e2a\u9875\u9762\u90fd\u53d1\u9001\u7c7b\u4f3c\u7684\u8bf7\u6c42\uff0c\u90fd\u8981\u5199\u4e00\u5806\u7684\u914d\u7f6e\u4e0e\u9519\u8bef\u5904\u7406\uff0c\u5c31\u663e\u5f97\u8fc7\u4e8e\u7e41\u7410\u4e86"),(0,r.kt)("p",null,"\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"\u8fdb\u884c\u4e8c\u6b21\u5c01\u88c5\uff0c\u8ba9\u4f7f\u7528\u66f4\u4e3a\u4fbf\u5229"),(0,r.kt)("h2",{id:"\u4e09\u5982\u4f55\u5c01\u88c5"},"\u4e09\u3001\u5982\u4f55\u5c01\u88c5"),(0,r.kt)("p",null,"\u5c01\u88c5\u7684\u540c\u65f6\uff0c\u4f60\u9700\u8981\u548c \u540e\u7aef\u534f\u5546\u597d\u4e00\u4e9b\u7ea6\u5b9a\uff0c\u8bf7\u6c42\u5934\uff0c\u72b6\u6001\u7801\uff0c\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4......."),(0,r.kt)("p",null,"\u8bbe\u7f6e\u63a5\u53e3\u8bf7\u6c42\u524d\u7f00\uff1a\u6839\u636e\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u751f\u4ea7\u73af\u5883\u7684\u4e0d\u540c\uff0c\u524d\u7f00\u9700\u8981\u52a0\u4ee5\u533a\u5206"),(0,r.kt)("p",null,"\u8bf7\u6c42\u5934 :  \u6765\u5b9e\u73b0\u4e00\u4e9b\u5177\u4f53\u7684\u4e1a\u52a1\uff0c\u5fc5\u987b\u643a\u5e26\u4e00\u4e9b\u53c2\u6570\u624d\u53ef\u4ee5\u8bf7\u6c42(\u4f8b\u5982\uff1a\u4f1a\u5458\u4e1a\u52a1)"),(0,r.kt)("p",null,"\u72b6\u6001\u7801:   \u6839\u636e\u63a5\u53e3\u8fd4\u56de\u7684\u4e0d\u540c",(0,r.kt)("inlineCode",{parentName:"p"},"status")," \uff0c \u6765\u6267\u884c\u4e0d\u540c\u7684\u4e1a\u52a1\uff0c\u8fd9\u5757\u9700\u8981\u548c\u540e\u7aef\u7ea6\u5b9a\u597d"),(0,r.kt)("p",null,"\u8bf7\u6c42\u65b9\u6cd5\uff1a\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"post"),"\u7b49\u65b9\u6cd5\u8fdb\u884c\u4e00\u4e2a\u518d\u6b21\u5c01\u88c5\uff0c\u4f7f\u7528\u8d77\u6765\u66f4\u4e3a\u65b9\u4fbf"),(0,r.kt)("p",null,"\u8bf7\u6c42\u62e6\u622a\u5668:  \u6839\u636e\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u8bbe\u5b9a\uff0c\u6765\u51b3\u5b9a\u54ea\u4e9b\u8bf7\u6c42\u53ef\u4ee5\u8bbf\u95ee"),(0,r.kt)("p",null,"\u54cd\u5e94\u62e6\u622a\u5668\uff1a \u8fd9\u5757\u5c31\u662f\u6839\u636e \u540e\u7aef`\u8fd4\u56de\u6765\u7684\u72b6\u6001\u7801\u5224\u5b9a\u6267\u884c\u4e0d\u540c\u4e1a\u52a1"),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u63a5\u53e3\u8bf7\u6c42\u524d\u7f00"},"\u8bbe\u7f6e\u63a5\u53e3\u8bf7\u6c42\u524d\u7f00"),(0,r.kt)("p",null,"\u5229\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"\u73af\u5883\u53d8\u91cf\u6765\u4f5c\u5224\u65ad\uff0c\u7528\u6765\u533a\u5206\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u751f\u4ea7\u73af\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (process.env.NODE_ENV === 'development') {\n  axios.defaults.baseURL = 'http://dev.xxx.com'\n} else if (process.env.NODE_ENV === 'production') {\n  axios.defaults.baseURL = 'http://prod.xxx.com'\n}\n")),(0,r.kt)("p",null,"\u5728\u672c\u5730\u8c03\u8bd5\u7684\u65f6\u5019\uff0c\u8fd8\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"vue.config.js"),"\u6587\u4ef6\u4e2d\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"devServer"),"\u5b9e\u73b0\u4ee3\u7406\u8f6c\u53d1\uff0c\u4ece\u800c\u5b9e\u73b0\u8de8\u57df"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"devServer: {\n    proxy: {\n      '/proxyApi': {\n        target: 'http://dev.xxx.com',\n        changeOrigin: true,\n        pathRewrite: {\n          '/proxyApi': ''\n        }\n      }\n    }\n  }\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u8bf7\u6c42\u5934\u4e0e\u8d85\u65f6\u65f6\u95f4"},"\u8bbe\u7f6e\u8bf7\u6c42\u5934\u4e0e\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("p",null,"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u8bf7\u6c42\u5934\u90fd\u662f\u56fa\u5b9a\u7684\uff0c\u53ea\u6709\u5c11\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u4f1a\u9700\u8981\u4e00\u4e9b\u7279\u6b8a\u7684\u8bf7\u6c42\u5934\uff0c\u8fd9\u91cc\u5c06\u666e\u9002\u6027\u7684\u8bf7\u6c42\u5934\u4f5c\u4e3a\u57fa\u7840\u914d\u7f6e\u3002\u5f53\u9700\u8981\u7279\u6b8a\u8bf7\u6c42\u5934\u65f6\uff0c\u5c06\u7279\u6b8a\u8bf7\u6c42\u5934\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u8986\u76d6\u57fa\u7840\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const service = axios.create({\n    ...\n    timeout: 30000,  // \u8bf7\u6c42 30s \u8d85\u65f6\n      headers: {\n        get: {\n          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'\n          // \u5728\u5f00\u53d1\u4e2d\uff0c\u4e00\u822c\u8fd8\u9700\u8981\u5355\u70b9\u767b\u5f55\u6216\u8005\u5176\u4ed6\u529f\u80fd\u7684\u901a\u7528\u8bf7\u6c42\u5934\uff0c\u53ef\u4ee5\u4e00\u5e76\u914d\u7f6e\u8fdb\u6765\n        },\n        post: {\n          'Content-Type': 'application/json;charset=utf-8'\n          // \u5728\u5f00\u53d1\u4e2d\uff0c\u4e00\u822c\u8fd8\u9700\u8981\u5355\u70b9\u767b\u5f55\u6216\u8005\u5176\u4ed6\u529f\u80fd\u7684\u901a\u7528\u8bf7\u6c42\u5934\uff0c\u53ef\u4ee5\u4e00\u5e76\u914d\u7f6e\u8fdb\u6765\n        }\n  },\n})\n")),(0,r.kt)("h3",{id:"\u5c01\u88c5\u8bf7\u6c42\u65b9\u6cd5"},"\u5c01\u88c5\u8bf7\u6c42\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5148\u5f15\u5165\u5c01\u88c5\u597d\u7684\u65b9\u6cd5\uff0c\u5728\u8981\u8c03\u7528\u7684\u63a5\u53e3\u91cd\u65b0\u5c01\u88c5\u6210\u4e00\u4e2a\u65b9\u6cd5\u66b4\u9732\u51fa\u53bb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// get \u8bf7\u6c42\nexport function httpGet({\n  url,\n  params = {}\n}) {\n  return new Promise((resolve, reject) => {\n    axios.get(url, {\n      params\n    }).then((res) => {\n      resolve(res.data)\n    }).catch(err => {\n      reject(err)\n    })\n  })\n}\n\n// post\n// post\u8bf7\u6c42\nexport function httpPost({\n  url,\n  data = {},\n  params = {}\n}) {\n  return new Promise((resolve, reject) => {\n    axios({\n      url,\n      method: 'post',\n      transformRequest: [function (data) {\n        let ret = ''\n        for (let it in data) {\n          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'\n        }\n        return ret\n      }],\n      // \u53d1\u9001\u7684\u6570\u636e\n      data,\n      // \burl\u53c2\u6570\n      params\n\n    }).then(res => {\n      resolve(res.data)\n    })\n  })\n}\n")),(0,r.kt)("p",null,"\u628a\u5c01\u88c5\u7684\u65b9\u6cd5\u653e\u5728\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"api.js"),"\u6587\u4ef6\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { httpGet, httpPost } from './http'\nexport const getorglist = (params = {}) => httpGet({ url: 'apps/api/org/list', params })\n")),(0,r.kt)("p",null,"\u9875\u9762\u4e2d\u5c31\u80fd\u76f4\u63a5\u8c03\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// .vue\nimport { getorglist } from '@/assets/js/api'\n\ngetorglist({ id: 200 }).then(res => {\n  console.log(res)\n})\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"\u7edf\u4e00\u7ba1\u7406\u8d77\u6765\uff0c\u4ee5\u540e\u7ef4\u62a4\u4fee\u6539\u53ea\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"api.js"),"\u6587\u4ef6\u64cd\u4f5c\u5373\u53ef"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u62e6\u622a\u5668"},"\u8bf7\u6c42\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u8bf7\u6c42\u62e6\u622a\u5668\u53ef\u4ee5\u5728\u6bcf\u4e2a\u8bf7\u6c42\u91cc\u52a0\u4e0atoken\uff0c\u505a\u4e86\u7edf\u4e00\u5904\u7406\u540e\u7ef4\u62a4\u8d77\u6765\u4e5f\u65b9\u4fbf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u8bf7\u6c42\u62e6\u622a\u5668\naxios.interceptors.request.use(\n  config => {\n    // \u6bcf\u6b21\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\u5224\u65ad\u662f\u5426\u5b58\u5728token\n    // \u5982\u679c\u5b58\u5728\uff0c\u5219\u7edf\u4e00\u5728http\u8bf7\u6c42\u7684header\u90fd\u52a0\u4e0atoken\uff0c\u8fd9\u6837\u540e\u53f0\u6839\u636etoken\u5224\u65ad\u4f60\u7684\u767b\u5f55\u60c5\u51b5\uff0c\u6b64\u5904token\u4e00\u822c\u662f\u7528\u6237\u5b8c\u6210\u767b\u5f55\u540e\u50a8\u5b58\u5230localstorage\u91cc\u7684\n    token && (config.headers.Authorization = token)\n    return config\n  },\n  error => {\n    return Promise.error(error)\n  })\n")),(0,r.kt)("h3",{id:"\u54cd\u5e94\u62e6\u622a\u5668"},"\u54cd\u5e94\u62e6\u622a\u5668"),(0,r.kt)("p",null,"\u54cd\u5e94\u62e6\u622a\u5668\u53ef\u4ee5\u5728\u63a5\u6536\u5230\u54cd\u5e94\u540e\u5148\u505a\u4e00\u5c42\u64cd\u4f5c\uff0c\u5982\u6839\u636e\u72b6\u6001\u7801\u5224\u65ad\u767b\u5f55\u72b6\u6001\u3001\u6388\u6743"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u54cd\u5e94\u62e6\u622a\u5668\naxios.interceptors.response.use(response => {\n  // \u5982\u679c\u8fd4\u56de\u7684\u72b6\u6001\u7801\u4e3a200\uff0c\u8bf4\u660e\u63a5\u53e3\u8bf7\u6c42\u6210\u529f\uff0c\u53ef\u4ee5\u6b63\u5e38\u62ff\u5230\u6570\u636e\n  // \u5426\u5219\u7684\u8bdd\u629b\u51fa\u9519\u8bef\n  if (response.status === 200) {\n    if (response.data.code === 511) {\n      // \u672a\u6388\u6743\u8c03\u53d6\u6388\u6743\u63a5\u53e3\n    } else if (response.data.code === 510) {\n      // \u672a\u767b\u5f55\u8df3\u8f6c\u767b\u5f55\u9875\n    } else {\n      return Promise.resolve(response)\n    }\n  } else {\n    return Promise.reject(response)\n  }\n}, error => {\n  // \u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc\u5bf9\u5f02\u5e38\u72b6\u6001\u4f5c\u7edf\u4e00\u5904\u7406\n  if (error.response.status) {\n    // \u5904\u7406\u8bf7\u6c42\u5931\u8d25\u7684\u60c5\u51b5\n    // \u5bf9\u4e0d\u540c\u8fd4\u56de\u7801\u5bf9\u76f8\u5e94\u5904\u7406\n    return Promise.reject(error.response)\n  }\n})\n")),(0,r.kt)("h3",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c01\u88c5\u662f\u7f16\u7a0b\u4e2d\u5f88\u6709\u610f\u4e49\u7684\u624b\u6bb5\uff0c\u7b80\u5355\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"axios"),"\u5c01\u88c5\uff0c\u5c31\u53ef\u4ee5\u8ba9\u6211\u4eec\u53ef\u4ee5\u9886\u7565\u5230\u5b83\u7684\u9b45\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u5c01\u88c5 ",(0,r.kt)("inlineCode",{parentName:"li"},"axios")," \u6ca1\u6709\u4e00\u4e2a\u7edd\u5bf9\u7684\u6807\u51c6\uff0c\u53ea\u8981\u4f60\u7684\u5c01\u88c5\u53ef\u4ee5\u6ee1\u8db3\u4f60\u7684\u9879\u76ee\u9700\u6c42\uff0c\u5e76\u4e14\u7528\u8d77\u6765\u65b9\u4fbf\uff0c\u90a3\u5c31\u662f\u4e00\u4e2a\u597d\u7684\u5c01\u88c5\u65b9\u6848")),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.html.cn/qa/vue-js/20544.html"},"https://www.html.cn/qa/vue-js/20544.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904033782611976"},"https://juejin.cn/post/6844904033782611976")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903801451708429"},"https://juejin.cn/post/6844903801451708429"))))}d.isMDXComponent=!0}}]);