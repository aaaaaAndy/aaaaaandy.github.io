"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[7291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),b=l,k=m["".concat(o,".").concat(b)]||m[b]||s[b]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},30578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={},i="\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f60\u5bf9\u5192\u6ce1\u6392\u5e8f\u7684\u7406\u89e3\uff1f\u5982\u4f55\u5b9e\u73b0\uff1f\u5e94\u7528\u573a\u666f\uff1f",p={unversionedId:"algorithm/bubbleSort",id:"algorithm/bubbleSort",title:"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f60\u5bf9\u5192\u6ce1\u6392\u5e8f\u7684\u7406\u89e3\uff1f\u5982\u4f55\u5b9e\u73b0\uff1f\u5e94\u7528\u573a\u666f\uff1f",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/algorithm/bubbleSort.md",sourceDirName:"algorithm",slug:"/algorithm/bubbleSort",permalink:"/docs/algorithm/bubbleSort",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f60\u5bf9\u94fe\u8868\u7684\u7406\u89e3\uff1f\u5e38\u89c1\u7684\u64cd\u4f5c\u6709\u54ea\u4e9b\uff1f",permalink:"/docs/algorithm/Linked List"},next:{title:"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f60\u5bf9\u5206\u800c\u6cbb\u4e4b\u3001\u52a8\u6001\u89c4\u5212\u7684\u7406\u89e3\uff1f\u533a\u522b\uff1f",permalink:"/docs/algorithm/design1"}},o={},u=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001\u5982\u4f55\u5b9e\u73b0",id:"\u4e8c\u5982\u4f55\u5b9e\u73b0",level:2},{value:"\u4f18\u5316",id:"\u4f18\u5316",level:3},{value:"\u4e09\u3001\u5e94\u7528\u573a\u666f",id:"\u4e09\u5e94\u7528\u573a\u666f",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9762\u8bd5\u5b98\u8bf4\u8bf4\u4f60\u5bf9\u5192\u6ce1\u6392\u5e8f\u7684\u7406\u89e3\u5982\u4f55\u5b9e\u73b0\u5e94\u7528\u573a\u666f"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f60\u5bf9\u5192\u6ce1\u6392\u5e8f\u7684\u7406\u89e3\uff1f\u5982\u4f55\u5b9e\u73b0\uff1f\u5e94\u7528\u573a\u666f\uff1f"),(0,l.kt)("p",null," ",(0,l.kt)("img",{parentName:"p",src:"https://static.vue-js.com/6f5e0850-2652-11ec-a752-75723a64e8f5.png",alt:null})),(0,l.kt)("h2",{id:"\u4e00\u662f\u4ec0\u4e48"},"\u4e00\u3001\u662f\u4ec0\u4e48"),(0,l.kt)("p",null,"\u5192\u6ce1\u6392\u5e8f\uff08Bubble Sort\uff09\uff0c\u662f\u4e00\u79cd\u8ba1\u7b97\u673a\u79d1\u5b66\u9886\u57df\u7684\u8f83\u7b80\u5355\u7684\u6392\u5e8f\u7b97\u6cd5"),(0,l.kt)("p",null,"\u5192\u6ce1\u6392\u5e8f\u7684\u601d\u60f3\u5c31\u662f\u5728\u6bcf\u6b21\u904d\u5386\u4e00\u904d\u672a\u6392\u5e8f\u7684\u6570\u5217\u4e4b\u540e\uff0c\u5c06\u4e00\u4e2a\u6570\u636e\u5143\u7d20\u6d6e\u4e0a\u53bb\uff08\u4e5f\u5c31\u662f\u6392\u597d\u4e86\u4e00\u4e2a\u6570\u636e\uff09"),(0,l.kt)("p",null,"\u5982\u540c\u78b3\u9178\u996e\u6599\u4e2d\u4e8c\u6c27\u5316\u78b3\u7684\u6c14\u6ce1\u6700\u7ec8\u4f1a\u4e0a\u6d6e\u5230\u9876\u7aef\u4e00\u6837\uff0c\u6545\u540d\u201c\u5192\u6ce1\u6392\u5e8f\u201d"),(0,l.kt)("p",null,"\u5047\u5982\u6211\u4eec\u8981\u628a 12\u300135\u300199\u300118\u300176 \u8fd9 5 \u4e2a\u6570\u4ece\u5927\u5230\u5c0f\u8fdb\u884c\u6392\u5e8f\uff0c\u90a3\u4e48\u6570\u8d8a\u5927\uff0c\u8d8a\u9700\u8981\u628a\u5b83\u653e\u5728\u524d\u9762"),(0,l.kt)("p",null,"\u601d\u8def\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece\u540e\u5f00\u59cb\u904d\u5386\uff0c\u9996\u5148\u6bd4\u8f83 18 \u548c 76\uff0c\u53d1\u73b0 76 \u6bd4 18 \u5927\uff0c\u5c31\u628a\u4e24\u4e2a\u6570\u4ea4\u6362\u987a\u5e8f\uff0c\u5f97\u5230 12\u300135\u300199\u300176\u300118"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u7740\u6bd4\u8f83 76 \u548c 99\uff0c\u53d1\u73b0 76 \u6bd4 99 \u5c0f\uff0c\u6240\u4ee5\u4e0d\u7528\u4ea4\u6362\u987a\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u7740\u6bd4\u8f83 99 \u548c 35\uff0c\u53d1\u73b0 99 \u6bd4 35 \u5927\uff0c\u4ea4\u6362\u987a\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u7740\u6bd4\u8f83 99 \u548c 12\uff0c\u53d1\u73b0 99 \u6bd4 12 \u5927\uff0c\u4ea4\u6362\u987a\u5e8f")),(0,l.kt)("p",null,"\u6700\u7ec8\u7b2c 1 \u8d9f\u6392\u5e8f\u7684\u7ed3\u679c\u53d8\u6210\u4e86 99\u300112\u300135\u300176\u300118\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null," ",(0,l.kt)("img",{parentName:"p",src:"https://static.vue-js.com/7a363770-2652-11ec-8e64-91fdec0f05a1.png",alt:null})),(0,l.kt)("p",null,"\u4e0a\u8ff0\u53ef\u4ee5\u770b\u5230\uff0c\u7ecf\u8fc7\u7b2c\u4e00\u8d9f\u7684\u6392\u5e8f\uff0c\u53ef\u4ee5\u5f97\u5230\u6700\u5927\u7684\u5143\u7d20\uff0c\u63a5\u4e0b\u6765\u7b2c\u4e8c\u8d9f\u6392\u5e8f\u5219\u5bf9\u5269\u4e0b\u7684\u76844\u4e2a\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null," ",(0,l.kt)("img",{parentName:"p",src:"https://static.vue-js.com/84b9ddf0-2652-11ec-a752-75723a64e8f5.png",alt:null})),(0,l.kt)("p",null,"\u7ecf\u8fc7\u7b2c 2 \u8d9f\u6392\u5e8f\uff0c\u7ed3\u679c\u4e3a 99\u300176\u300112\u300135\u300118"),(0,l.kt)("p",null,"\u7136\u540e\u5f00\u59cb\u7b2c3\u8d9f\u7684\u6392\u5e8f\uff0c\u7ed3\u679c\u4e3a99\u300176\u300135\u300112\u300118"),(0,l.kt)("p",null,"\u7136\u540e\u7b2c\u56db\u8d9f\u6392\u5e8f\u7ed3\u679c\u4e3a99\u300176\u300135\u300118\u300112"),(0,l.kt)("p",null,"\u7ecf\u8fc7 4 \u8d9f\u6392\u5e8f\u4e4b\u540e\uff0c\u53ea\u5269\u4e00\u4e2a 12 \u9700\u8981\u6392\u5e8f\u4e86\uff0c\u8fd9\u65f6\u5df2\u7ecf\u6ca1\u6709\u53ef\u6bd4\u8f83\u7684\u5143\u7d20\u4e86\uff0c\u8fd9\u65f6\u6392\u5e8f\u5b8c\u6210"),(0,l.kt)("h2",{id:"\u4e8c\u5982\u4f55\u5b9e\u73b0"},"\u4e8c\u3001\u5982\u4f55\u5b9e\u73b0"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u5b9e\u73b0\u4e00\u4e2a\u4ece\u5c0f\u5230\u5927\u7684\u6392\u5e8f\uff0c\u7b97\u6cd5\u539f\u7406\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u6bd4\u8f83\u76f8\u90bb\u7684\u5143\u7d20\uff0c\u5982\u679c\u7b2c\u4e00\u4e2a\u5143\u7d20\u6bd4\u7b2c\u4e8c\u4e2a\u5143\u7d20\u5927\uff0c\u5219\u4ea4\u6362\u5b83\u4eec"),(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u6bcf\u4e00\u5bf9\u76f8\u90bb\u5143\u7d20\u505a\u540c\u6837\u7684\u5de5\u4f5c\uff0c\u4ece\u5f00\u59cb\u7b2c\u4e00\u5bf9\u5230\u7ed3\u5c3e\u7684\u6700\u540e\u4e00\u5bf9\uff0c\u8fd9\u6837\uff0c\u6700\u540e\u7684\u5143\u7d20\u56de\u4e8b\u6700\u5927\u7684\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u6240\u6709\u7684\u5143\u7d20\u91cd\u590d\u4ee5\u4e0a\u7684\u6b65\u9aa4\uff0c\u9664\u4e86\u6700\u540e\u4e00\u4e2a"),(0,l.kt)("li",{parentName:"ul"},"\u6301\u7eed\u6bcf\u6b21\u5bf9\u8d8a\u6765\u8d8a\u5c11\u7684\u5143\u7d20\u91cd\u590d\u4e0a\u9762\u7684\u6b65\u9aa4\uff0c\u76f4\u5230\u6ca1\u6709\u4efb\u4f55\u4e00\u5bf9\u6570\u5b57\u9700\u8981\u6bd4\u8f83")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.runoob.com/wp-content/uploads/2019/03/bubbleSort.gif",alt:null})),(0,l.kt)("p",null,"\u7528\u4ee3\u7801\u8868\u793a\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function bubbleSort(arr) {\n    const len = arr.length;\n    for (let i = 0; i < len - 1; i++) {\n        for (let j = 0; j < len - 1 - i; j++) {\n            if (arr[j] > arr[j+1]) {        // \u76f8\u90bb\u5143\u7d20\u4e24\u4e24\u5bf9\u6bd4\n                var temp = arr[j+1];        // \u5143\u7d20\u4ea4\u6362\n                arr[j+1] = arr[j];\n                arr[j] = temp;\n            }\n        }\n    }\n    return arr;\n}\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff1a\u5192\u6ce1\u6392\u5e8f\u5728\u6bcf\u4e00\u8f6e\u6392\u5e8f\u4e2d\u90fd\u4f1a\u4f7f\u4e00\u4e2a\u5143\u7d20\u6392\u5230\u4e00\u8d9f\uff0c \u4e5f\u5c31\u662f\u6700\u7ec8\u9700\u8981 n-1 \u8f6e\u8fd9\u6837\u7684\u6392\u5e8f"),(0,l.kt)("p",null,"\u800c\u5728\u6bcf\u8f6e\u6392\u5e8f\u4e2d\u90fd\u9700\u8981\u5bf9\u76f8\u90bb\u7684\u4e24\u4e2a\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83\uff0c\u5728\u6700\u574f\u7684\u60c5\u51b5\u4e0b\uff0c\u6bcf\u6b21\u6bd4\u8f83\u4e4b\u540e\u90fd\u9700\u8981\u4ea4\u6362\u4f4d\u7f6e\uff0c\u6b64\u65f6\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"O(n^2)")),(0,l.kt)("h3",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,l.kt)("p",null,"\u5bf9\u5192\u6ce1\u6392\u5e8f\u5e38\u89c1\u7684\u6539\u8fdb\u65b9\u6cd5\u662f\u52a0\u5165\u4e00\u6807\u5fd7\u6027\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"exchange"),"\uff0c\u7528\u4e8e\u6807\u5fd7\u67d0\u4e00\u8d9f\u6392\u5e8f\u8fc7\u7a0b\u4e2d\u662f\u5426\u6709\u6570\u636e\u4ea4\u6362"),(0,l.kt)("p",null,"\u5982\u679c\u8fdb\u884c\u67d0\u4e00\u8d9f\u6392\u5e8f\u65f6\u5e76\u6ca1\u6709\u8fdb\u884c\u6570\u636e\u4ea4\u6362\uff0c\u5219\u8bf4\u660e\u6570\u636e\u5df2\u7ecf\u6309\u8981\u6c42\u6392\u5217\u597d\uff0c\u53ef\u7acb\u5373\u7ed3\u675f\u6392\u5e8f\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6bd4\u8f83\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u6807\u5fd7\u6027\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"pos"),"\uff0c\u7528\u4e8e\u8bb0\u5f55\u6bcf\u8d9f\u6392\u5e8f\u4e2d\u6700\u540e\u4e00\u6b21\u8fdb\u884c\u4ea4\u6362\u7684\u4f4d\u7f6e\uff0c\u7531\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"pos"),"\u4f4d\u7f6e\u4e4b\u540e\u7684\u8bb0\u5f55\u5747\u5df2\u4ea4\u6362\u5230\u4f4d\uff0c\u6545\u5728\u8fdb\u884c\u4e0b\u4e00\u8d9f\u6392\u5e8f\u65f6\u53ea\u8981\u626b\u63cf\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"pos"),"\u4f4d\u7f6e\u5373\u53ef\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function bubbleSort1(arr){\n const i=arr.length-1;//\u521d\u59cb\u65f6,\u6700\u540e\u4f4d\u7f6e\u4fdd\u6301\u4e0d\u53d8  \n while(i>0){\n  let pos = 0;//\u6bcf\u8d9f\u5f00\u59cb\u65f6,\u65e0\u8bb0\u5f55\u4ea4\u6362\n  for(let j = 0; j < i; j++){\n   if(arr[j] > arr[j+1]){\n        let tmp = arr[j];\n        arr[j] = arr[j+1];\n        arr[j+1] = tmp;\n    pos = j;//\u8bb0\u5f55\u6700\u540e\u4ea4\u6362\u7684\u4f4d\u7f6e  \n   }   \n  }\n  i = pos;//\u4e3a\u4e0b\u4e00\u8d9f\u6392\u5e8f\u4f5c\u51c6\u5907\n }\n return arr;\n}\n")),(0,l.kt)("p",null,"\u5728\u5f85\u6392\u5e8f\u7684\u6570\u5217\u6709\u5e8f\u7684\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u8981\u4e00\u8f6e\u6392\u5e8f\u5e76\u4e14\u4e0d\u7528\u4ea4\u6362\uff0c\u6b64\u65f6\u60c5\u51b5\u6700\u597d\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")),(0,l.kt)("p",null,"\u5e76\u4e14\u4ece\u4e0a\u8ff0\u6bd4\u8f83\u4e2d\u770b\u5230\uff0c\u53ea\u6709\u540e\u4e00\u4e2a\u5143\u7d20\u6bd4\u524d\u9762\u7684\u5143\u7d20\u5927\uff08\u5c0f\uff09\u65f6\u624d\u4f1a\u5bf9\u5b83\u4eec\u4ea4\u6362\u4f4d\u7f6e\u5e76\u5411\u4e0a\u5192\u51fa\uff0c\u5bf9\u4e8e\u540c\u6837\u5927\u5c0f\u7684\u5143\u7d20\uff0c\u662f\u4e0d\u9700\u8981\u4ea4\u6362\u4f4d\u7f6e\u7684\uff0c\u6240\u4ee5\u5bf9\u4e8e\u540c\u6837\u5927\u5c0f\u7684\u5143\u7d20\u6765\u8bf4\uff0c\u76f8\u5bf9\u4f4d\u7f6e\u662f\u4e0d\u4f1a\u6539\u53d8\u7684\uff0c\u56e0\u6b64\uff0c \u5192\u6ce1\u6392\u5e8f\u662f\u7a33\u5b9a\u7684"),(0,l.kt)("h2",{id:"\u4e09\u5e94\u7528\u573a\u666f"},"\u4e09\u3001\u5e94\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u5192\u6ce1\u6392\u7684\u6838\u5fc3\u90e8\u5206\u662f\u53cc\u91cd\u5d4c\u5957\u5faa\u73af\uff0c\n\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(N 2 )\uff0c\u76f8\u6bd4\u5176\u5b83\u6392\u5e8f\u7b97\u6cd5\uff0c\u8fd9\u662f\u4e00\u4e2a\u76f8\u5bf9\u8f83\u9ad8\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u4e00\u822c\u60c5\u51b5\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u7531\u4e8e\u5192\u6ce1\u6392\u5e8f\u7684\u7b80\u6d01\u6027\uff0c\u901a\u5e38\u88ab\u7528\u6765\u5bf9\u4e8e\u7a0b\u5e8f\u8bbe\u8ba1\u5165\u95e8\u7684\u5b66\u751f\u4ecb\u7ecd\u7b97\u6cd5\u7684\u6982\u5ff5"),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F/4602306"},"https://baike.baidu.com/item/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F/4602306")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.runoob.com/w3cnote/bubble-sort.html"},"https://www.runoob.com/w3cnote/bubble-sort.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://data.biancheng.net/view/116.html"},"http://data.biancheng.net/view/116.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dsb123dsb.github.io/2017/03/07/js%E5%AE%9E%E7%8E%B0%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F%E4%BB%A5%E5%8F%8A%E4%BC%98%E5%8C%96/"},"https://dsb123dsb.github.io/2017/03/07/js%E5%AE%9E%E7%8E%B0%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F%E4%BB%A5%E5%8F%8A%E4%BC%98%E5%8C%96/"))))}s.isMDXComponent=!0}}]);