"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[48653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,p={unversionedId:"nginx/Nginx\u5e38\u7528\u914d\u7f6e",id:"nginx/Nginx\u5e38\u7528\u914d\u7f6e",title:"Nginx\u5e38\u7528\u914d\u7f6e",description:"\ud83d\udcc657:12",source:"@site/docs/nginx/Nginx\u5e38\u7528\u914d\u7f6e.md",sourceDirName:"nginx",slug:"/nginx/Nginx\u5e38\u7528\u914d\u7f6e",permalink:"/docs/nginx/Nginx\u5e38\u7528\u914d\u7f6e",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"nginxSidebar",previous:{title:"Nginx\u57fa\u7840",permalink:"/docs/nginx"},next:{title:"Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",permalink:"/docs/nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790"}},o={},m=[{value:"\u4e00\u3001\u5e38\u7528\u914d\u7f6e",id:"\u4e00\u5e38\u7528\u914d\u7f6e",level:2},{value:"1. gzip\u538b\u7f29",id:"1-gzip\u538b\u7f29",level:3},{value:"2. \u914d\u7f6ehttps",id:"2-\u914d\u7f6ehttps",level:3},{value:"3. \u5141\u8bb8\u8de8\u57df\u8bbf\u95ee",id:"3-\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee",level:3},{value:"4. iframe\u540c\u6e90\u7b56\u7565\u9650\u5236",id:"4-iframe\u540c\u6e90\u7b56\u7565\u9650\u5236",level:3},{value:"5. \u6807\u51c6root\u9875\u9762\u914d\u7f6e",id:"5-\u6807\u51c6root\u9875\u9762\u914d\u7f6e",level:3},{value:"6. \u6839\u636e\u8def\u5f84\u8bbf\u95ee\u4e0d\u540c\u524d\u7aef\u9759\u6001\u9875\u9762\u9879\u76ee",id:"6-\u6839\u636e\u8def\u5f84\u8bbf\u95ee\u4e0d\u540c\u524d\u7aef\u9759\u6001\u9875\u9762\u9879\u76ee",level:3},{value:"7. \u63a5\u53e3\u53cd\u5411\u4ee3\u7406",id:"7-\u63a5\u53e3\u53cd\u5411\u4ee3\u7406",level:3},{value:"8. upstream\u8d1f\u8f7d\u5747\u8861",id:"8-upstream\u8d1f\u8f7d\u5747\u8861",level:3},{value:"9. \u914d\u7f6e\u957f\u8fde\u63a5",id:"9-\u914d\u7f6e\u957f\u8fde\u63a5",level:3},{value:"10. \u9650\u5236ip\u8bbf\u95ee",id:"10-\u9650\u5236ip\u8bbf\u95ee",level:3},{value:"11. \u914d\u7f6e\u79fb\u52a8\u7aef\u8bbf\u95ee",id:"11-\u914d\u7f6e\u79fb\u52a8\u7aef\u8bbf\u95ee",level:3},{value:"12. \u914d\u7f6e\u6587\u4ef6\u670d\u52a1\u5668",id:"12-\u914d\u7f6e\u6587\u4ef6\u670d\u52a1\u5668",level:3},{value:"\u4e8c\u3001\u5177\u4f53\u53c2\u6570\u542b\u4e49",id:"\u4e8c\u5177\u4f53\u53c2\u6570\u542b\u4e49",level:2},{value:"location\u8def\u5f84\u5339\u914d",id:"location\u8def\u5f84\u5339\u914d",level:3}],s={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcc6: 2023-03-27 07:57:12\n\ud83c\udff7: #nginx "),(0,r.kt)("h2",{id:"\u4e00\u5e38\u7528\u914d\u7f6e"},"\u4e00\u3001\u5e38\u7528\u914d\u7f6e"),(0,r.kt)("h3",{id:"1-gzip\u538b\u7f29"},"1. gzip\u538b\u7f29"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"http {\n    include          mime.conf;\n    default_type     application/octet-stream;\n    # ....\n\n    gzip             on;\n    gzip_min_length  1k;\n    gzip_comp_level  5;\n    gzip_types       text/plain text/css application/x-javascript application/javascript text/javascript;\n\n    server {\n        # ....\n    }\n")),(0,r.kt)("p",null,"\u90e8\u5206\u53c2\u6570\u542b\u4e49\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gzip_min_length"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c\u4e5f\u53ef\u7528k\u8868\u793a\u5343\u5b57\u8282\uff0c\u6bd4\u5982\u5199\u62101024\u4e0e1k\u90fd\u53ef\u4ee5\uff0c\u6548\u679c\u662f\u4e00\u6837\u7684\uff0c\u8868\u793a\u5f53\u8d44\u6e90\u5927\u4e8e1k\u65f6\u624d\u8fdb\u884c\u538b\u7f29\uff0c\u8d44\u6e90\u5927\u5c0f\u53d6\u54cd\u5e94\u5934\u4e2d\u7684Content-Length\u8fdb\u884c\u6bd4\u8f83\uff0c\u7ecf\u6d4b\u8bd5\u5982\u679c\u54cd\u5e94\u5934\u4e0d\u5b58\u5728Content_length\u4fe1\u606f\uff0c\u8be5\u9650\u5236\u53c2\u6570\u5bf9\u4e8e\u8fd9\u4e2a\u54cd\u5e94\u5305\u662f\u4e0d\u8d77\u4f5c\u7528\u7684\uff1b\u53e6\u5916\u6b64\u5904\u53c2\u6570\u503c\u4e0d\u5efa\u8bae\u8bbe\u7684\u592a\u5c0f\uff0c\u56e0\u4e3a\u8bbe\u7684\u592a\u5c0f\uff0c\u4e00\u4e9b\u672c\u6765\u5f88\u5c0f\u7684\u6587\u4ef6\u7ecf\u8fc7\u538b\u7f29\u540e\u53cd\u800c\u53d8\u5927\u4e86\uff0c\u5b98\u7f51\u6ca1\u6709\u7ed9\u51fa\u5efa\u8bae\u503c\uff0c\u5728\u6b64\u5efa\u8bae1k\u8d77\uff0c\u56e0\u4e3a\u5c0f\u4e8e1k\u7684\u4e5f\u6ca1\u5fc5\u8981\u538b\u7f29\uff0c\u5e76\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6765\u8c03\u6574\u8bbe\u5b9a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gzip_comp_level"),(0,r.kt)("td",{parentName:"tr",align:null},"1-9\u7684\u6b63\u6574\u6570\uff0c1\u6700\u4f4e\uff0c\u538b\u7f29\u65f6\u95f4\u77ed\uff0c9\u6700\u9ad8\uff0c\u538b\u7f29\u65f6\u95f4\u957f\uff0c\u5403cpu\uff0c\u4f46\u662f\u538b\u7f29\u6548\u679c\u597d\uff0c\u5b9e\u8d28\u662f\u7528cpu\u6362\u6d41\u91cf\uff0c\u89c6\u60c5\u51b5\u800c\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gzip_types"),(0,r.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u62a5\u6587\u6570\u636e\u683c\u5f0f\uff0c\u6216\u8005\u8bf4\u7c7b\u578b\uff0c\u5bf9\u5e94http\u54cd\u5e94\u5934\u4e2d\u7684Content-type\u5b57\u6bb5\uff0c\u5982\u5e38\u89c1\u7684\u6709text/html\u3001text/css\u3001application/json\u3001application/javaScript\u7b49\u3002\u7528\u4e8e\u6307\u5b9a\u8981\u538b\u7f29\u7684\u54cd\u5e94\u62a5\u6587\u7c7b\u578b\u3002\u201d*\u201d\u8868\u793a\u538b\u7f29\u6240\u6709\u683c\u5f0f\u7684\u54cd\u5e94\u62a5\u6587\uff0c\u591a\u79cd\u683c\u5f0f\u7528\u7a7a\u683c\u9694\u5f00\u3002\u5982text/html text/css\u3002\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gzip_http_version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a1.1\uff0c\u6b64\u5904\u53ea\u80fd\u662f1.0\uff0c\u6216\u80051.1\u3002\u8bbe\u7f6e\u538b\u7f29\u54cd\u5e94\u6240\u9700\u7684\u6700\u5c0fhttp\u534f\u8bae\u7248\u672c\u3002")))),(0,r.kt)("h3",{id:"2-\u914d\u7f6ehttps"},"2. \u914d\u7f6ehttps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen       80;\n    server_name  127.0.0.1;\n\n        # \u4ee5\u4e0b\u662f\u652f\u6301https\u7684\u914d\u7f6e\uff0c\u5176\u4e2dpem\u548ckey\u8bc1\u4e66\u6587\u4ef6\u9700\u8981\u53bbCA\u673a\u6784\u7533\u8bf7\uff0c\n        # \u7533\u8bf7\u540e\u4f1a\u83b7\u5f97\u8fd9\u4e24\u4e2a\u6587\u4ef6\uff0c\u5c06\u8fd9\u4e24\u4e2a\u653e\u5728\u670d\u52a1\u5668\u6307\u5b9a\u76ee\u5f55\uff0c\u5982\u6b64\u914d\u7f6e\u80fd\u8bbf\u95ee\u5230\u5373\u53ef\n    ssl_certificate      /etc/nginx/ssl_certs/draw.lyan.me.pem;\n    ssl_certificate_key  /etc/nginx/ssl_certs/draw.lyan.me.key;\n    ssl_session_timeout  5m;\n    ssl_ciphers  HIGH:!aNULL:!MD5;\n    ssl_prefer_server_ciphers  on;\n}\n")),(0,r.kt)("h3",{id:"3-\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee"},"3. \u5141\u8bb8\u8de8\u57df\u8bbf\u95ee"),(0,r.kt)("p",null,"\u53ef\u5c06\u4e0b\u9762\u914d\u7f6e\u6dfb\u52a0\u5230\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"location"),"\u4e2d\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"# *\u8868\u793a\u5141\u8bb8\u6240\u6709\u7ad9\u8de8\u57df\u8bbf\u95ee\uff08\u4e0d\u5b89\u5168\uff0c\u5efa\u8bae\u6307\u5b9a\u5177\u4f53\u5141\u8bb8\u7684\u57df\u540d\u5982\uff1ahttp://b.domain.com:9000\uff08\u6ce8\u610f\u683c\u5f0f\uff1ahttp(s):// + domain + port\uff0c\u672b\u5c3e\u4e5f\u4e0d\u80fd\u52a0/\uff09\nadd_header Access-Control-Allow-Origin *;  \n\n#\u6b64\u9879\u4e3a\u5141\u8bb8\u5e26cookie\u8de8\u57df\u8bbf\u95ee\uff0c\u82e5\u8bbe\u7f6etrue\uff0c\u4e0a\u9762\u57df\u540d\u914d\u7f6e\u4e0d\u80fd\u4e3a*\uff0c\u5fc5\u987b\u6307\u5b9a\u5177\u4f53\u57df\u540d\nadd_header Access-Control-Allow-Credentials true;  \n")),(0,r.kt)("h3",{id:"4-iframe\u540c\u6e90\u7b56\u7565\u9650\u5236"},"4. iframe\u540c\u6e90\u7b56\u7565\u9650\u5236"),(0,r.kt)("p",null,"\u9650\u5236iframe\u63d2\u5165\uff0c\u53ef\u8bbe\u7f6e\u4e3a\u975e\u540c\u6e90\u4e0d\u63d2\u5165\uff0c\u6307\u5b9aorigin\u63d2\u5165\uff0c\u9ed8\u8ba4\u4e3a\u4e0d\u9650\u5236"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},'# \u9650\u5236\u4e3a\u540c\u6e90\u53ef\u7528\nadd_header X-Frame-Options SAMEORIGIN\n\n# \u6307\u5b9a\u7f51\u7ad9\u53ef\u7528\nadd_header X-Frame-Options "ALLOW-FROM http://xxx.com:8000";\nadd_header Content-Security-Policy "frame-ancestors http://xxx.com:8000"; # \u517c\u5bb9chrome\n')),(0,r.kt)("h3",{id:"5-\u6807\u51c6root\u9875\u9762\u914d\u7f6e"},"5. \u6807\u51c6root\u9875\u9762\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e00\u822c\u7528\u5728\u5b98\u7f51\u7b49\u80fd\u76f4\u63a5\u901a\u8fc7\u57df\u540d\u5c31\u6253\u5f00\u7684\u9879\u76ee\uff0c\u4e0d\u9700\u8981\u6dfb\u52a0\u5176\u4ed6\u7684location\u914d\u7f6e\uff0c\u53ea\u5339\u914d\u6839\u8def\u5f84\uff0c\u5982\u4ee5\u4e0b\u9879\u76ee\u53ef\u76f4\u63a5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"http://www.xxx.com"),"\u8bbf\u95ee\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen       80;\n    server_name  www.xxx.com;\n\n    location / {\n        root   /app/xxx;  # \u9879\u76ee\u6240\u5728\u76ee\u5f55\n        index  index.html index.htm;\n        try_files  $uri $uri/ /index.html;  # vue\u5355\u9875\u5e94\u7528\u9700\u8981\u8def\u7531\u59cb\u7ec8\u6307\u5411index.html\n    }\n}\n")),(0,r.kt)("h3",{id:"6-\u6839\u636e\u8def\u5f84\u8bbf\u95ee\u4e0d\u540c\u524d\u7aef\u9759\u6001\u9875\u9762\u9879\u76ee"},"6. \u6839\u636e\u8def\u5f84\u8bbf\u95ee\u4e0d\u540c\u524d\u7aef\u9759\u6001\u9875\u9762\u9879\u76ee"),(0,r.kt)("p",null,"\u5339\u914d\u7279\u6b8a\u8def\u5f84\uff0c\u7528\u5728\u5f53\u524d\u57df\u540d\u4e0b\u6709\u591a\u4e2a\u9879\u76ee\uff0c\u9700\u8981\u901a\u8fc7\u8def\u5f84\u6765\u533a\u5206\u8bbf\u95ee\u7684\u60c5\u51b5\uff0c\u5982\u4ee5\u4e0b\u914d\u7f6e\u5219\u9700\u8981\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"http://www.xxx.com/app-h5"),"\u624d\u80fd\u8bbf\u95ee\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n        listen       80;\n    server_name  www.xxx.com;\n\n    location /app-h5 {\n              try_files $uri $uri/ /app-h5/index.html;\n              alias /usr/share/nginx/html/h5/mobile/app-h5;\n              index index.html index.htm;\n        }\n}\n")),(0,r.kt)("h3",{id:"7-\u63a5\u53e3\u53cd\u5411\u4ee3\u7406"},"7. \u63a5\u53e3\u53cd\u5411\u4ee3\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location /app-api {\n    proxy_pass   http://b.domain.com:9000;  # \u76f8\u5bf9\u8def\u5f84\uff0c\u6700\u7ec8\u5730\u5740\u4f1a\u52a0\u4e0a/app-api\uff0c\u53d8\u6210 /app-api/xxx\n    \n        # proxy_pass   http://b.domain.com:9000/;  # \u7edd\u5bf9\u5730\u5740\uff0c\u6700\u7ec8\u5730\u5740\u4f1a\u820d\u5f03/app-api\uff0c\u53d8\u6210 /xxx\n    \n        # proxy_cookie_domain   b.domain.com a.domain.com; # \u9700\u8981\u4fee\u6539\u63a5\u53e3\u8fd4\u56de\u7684cookie\u57df\u540d\u65f6\u4f7f\u7528\n}\n")),(0,r.kt)("h3",{id:"8-upstream\u8d1f\u8f7d\u5747\u8861"},"8. upstream\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("aside",null,"\ud83d\udca1 upstream \u7528\u6765\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f upstream \u4e0d\u80fd\u914d\u7f6e\u5728 server \u5757\u5185\uff0c\u5373\u4e0d\u80fd\u8ddf location \u5728\u540c\u4e00\u7ea7\u522b\uff0c\u9700\u8981\u914d\u7f6e\u5728 http \u5757\u5185\uff0cserver \u5757\u5916\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"# \u9ed8\u8ba4\u8f6e\u8be2\u914d\u7f6e\nupstream appServer {\n    server 10.0.0.80:5000;\n    server 10.0.0.81:5000;\n}\n\nserver {\n    listen       80;\n    server_name  127.0.0.1;\n\n    location /app-api {\n        proxy_pass   http://appServer;\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u516d\u5927\u8d1f\u8f7d\u5747\u8861\u8c03\u5ea6\u7b56\u7565\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"# \u52a0\u6743\u8f6e\u8be2\nupstream appServer {\n    server 10.0.0.80:5000 weight=10;\n    server 10.0.0.81:5000 weight=20; # \u8be5\u670d\u52a1\u5668\u6536\u5230\u7684\u8fde\u63a5\u6570\u53602/3\n}\n\n# ip_hash\uff0c\u4e0d\u53ef\u7ed9\u670d\u52a1\u5668\u52a0\u6743\u91cd\nupstream appServer {\n    ip_hash;\n    server 10.0.0.80:5000;\n    server 10.0.0.81:5000;\n}\n\n# url_hash\nupstream appServer {\n    server 10.0.0.80:5000;\n    server 10.0.0.81:5000;\n    hash $request_uri;\n}\n\n# fair(\u7b2c\u4e09\u65b9)\nupstream appServer {\n    server 10.0.0.80:5000;\n    server 10.0.0.81:5000;\n    fair;\n}\n\n# least_conn\uff0c\u6700\u5c11\u8fde\u63a5\u6570\nupstream appServer {\n    least_conn;\n    server 10.0.0.80:5000;\n    server 10.0.0.81:5000;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8c03\u5ea6\u7b97\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8f6e\u8be2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9010\u4e00\u8f6e\u8be2\uff0c\u9ed8\u8ba4\u7b97\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weight\u8f6e\u8be2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a0\u6743\u8f6e\u8be2\uff0cweight\u8d8a\u5927\uff0c\u8f6e\u8be2\u5230\u7684\u51e0\u7387\u8d8a\u5927")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fair"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u540e\u7aef\u670d\u52a1\u5668\u7684\u54cd\u5e94\u65f6\u95f4\u6765\u5206\u914d\uff0c\u54cd\u5e94\u65f6\u95f4\u77ed\u7684\u4f18\u5148\u5206\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ip_hash"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636eip\u7684hash\u7ed3\u679c\u8fdb\u884c\u5206\u914d\uff0c\u6765\u81ea\u540c\u4e00\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u53ef\u4ee5\u6253\u5728\u540c\u4e00\u53f0\u673a\u5668\u4e0a\uff0c\u80fd\u89e3\u51b3\u540e\u53f0session\u4e0d\u5171\u4eab\u7684\u95ee\u9898")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url_hash"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u8bbf\u95ee\u7684url\u8fdb\u884chash\u5206\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"least_conn"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u8fde\u63a5\u6570\uff0c\u54ea\u4e2a\u670d\u52a1\u5668\u8fde\u63a5\u6570\u5c11\u5206\u914d\u7ed9\u54ea\u4e2a\u670d\u52a1\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash\u5173\u952e\u6570\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"hash\u81ea\u5b9a\u4e49key")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nginx\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"# \u52a0\u6743\u8f6e\u8be2\nupstream appServer {\n    server 10.0.0.80:5000 weight=10;\n    server 10.0.0.81:5000 weight=20; # \u8be5\u670d\u52a1\u5668\u6536\u5230\u7684\u8fde\u63a5\u6570\u53602/3\n}\n\n# max_fails  fail_timeout\uff0c\u5141\u8bb8\u8bf7\u6c42\u5931\u8d25\u6b21\u6570\u548c\u5931\u8d25\u4e4b\u540e\u7b49\u5f85\u65f6\u95f4\uff0c\u4e24\u4e2a\u5fc5\u987b\u540c\u65f6\u914d\u7f6e\n# \u4e00\u4e0b\u914d\u7f6e\u4ee3\u886880\u7684\u670d\u52a1\u5668\u5141\u8bb8\u5931\u8d253\u6b21\uff0c\u8d85\u8fc73\u6b21\u540e\uff0c\u572815\u79d2\u5185\u8bf7\u6c42\u5c06\u4e0d\u518d\u53d1\u9001\u7ed9\u8be5\u670d\u52a1\u5668\nupstream appServer {\n    server 10.0.0.80:5000 weight=10 max_fails=3 fail_timeout=15;\n    server 10.0.0.81:5000 weight=20;\n}\n\n# backup \u5907\u4efd\u673a\uff0c\u6240\u6709\u670d\u52a1\u6302\u4e86\u4e4b\u540e\u624d\u4f1a\u751f\u6548\nupstream appServer {\n    server 10.0.0.80:5000 weight=10;\n    server 10.0.0.81:5000 weight=20;\n    server 10.0.0.82:5000 backup;\n}\n\n# down \u6807\u8bc6\u4e00\u53f0\u670d\u52a1\u5668\u4e0d\u53ef\u7528\uff0c\u8c8c\u4f3c\u6ca1\u5565\u7528\nupstream appServer {\n    server 10.0.0.80:5000 weight=10;\n    server 10.0.0.81:5000 weight=20;\n        server 10.0.0.81:5000 down;\n}\n\n# max_conn \u6700\u5927\u8fde\u63a5\u6570\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u8fde\u63a5\u6570\u91cf\uff0c\u5c06\u4e0d\u4f1a\u5206\u914d\u65b0\u7684\u8fde\u63a5\u7ed9\u5b83\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u6ca1\u6709\u9650\u5236\nupstream appServer {\n    server 10.0.0.80:5000 weight=10;\n    server 10.0.0.81:5000 max_conn=1000;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"down"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7684server\u6682\u4e0d\u53c2\u4e0e\u8d1f\u8f7d\u5747\u8861")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backup"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7684\u5907\u4efd\u670d\u52a1\u5668\uff0c\u5f53\u5176\u4ed6\u670d\u52a1\u5668\u90fd\u6302\u4e86\u7684\u65f6\u5019\u542f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_fails"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8bf7\u6c42\u5931\u8d25\u7684\u6b21\u6570 \uff0c\u5982\u679c\u8bf7\u6c42\u5931\u8d25\u6b21\u6570\u8d85\u8fc7\u9650\u5236\uff0c\u5219\u8fdb\u8fc7fail_timeout \u65f6\u95f4\u540e\u4ece\u865a\u62df\u670d\u52a1\u6c60\u4e2dkill\u6389\u8be5\u670d\u52a1\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fail_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ecf\u8fc7max_fails\u5931\u8d25\u540e\uff0c\u670d\u52a1\u6682\u505c\u65f6\u95f4\uff0cmax_fails\u8bbe\u7f6e\u540e\uff0c\u5fc5\u987b\u8bbe\u7f6efail_timeout \u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_conn"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u6700\u5927\u7684\u8fde\u63a5\u6570\uff0c\u7528\u4e8e\u670d\u52a1\u5668\u786c\u4ef6\u914d\u7f6e\u4e0d\u540c\u7684\u60c5\u51b5\u4e0b")))),(0,r.kt)("h3",{id:"9-\u914d\u7f6e\u957f\u8fde\u63a5"},"9. \u914d\u7f6e\u957f\u8fde\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},'# \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4ee5\u4e0b\u5b9e\u73b0\u7684\u662f\u4e00\u4e2a\u7ef4\u630190\u79d2\u7684\u957f\u8fde\u63a5\n# \u5982\u679c\u60f3\u5b9e\u73b0\u4e00\u4e2a\u6c38\u4e45\u4e0d\u65ad\u7684\u94fe\u63a5\uff0c\u6709\u4e24\u79cd\u65b9\u6848\uff1a\u4e00\u662f\u76f4\u8fde\u540e\u7aef\u670d\u52a1\uff0c\u4e0d\u7ecf\u8fc7nginx\uff1b\u4e8c\u662f\u7528\u4e0b\u9762\u7684\u914d\u7f6e\uff0c\u540c\u65f6\u8981\u5b9e\u73b0\u4e00\u4e2a90\u79d2\u4ee5\u5185\u7684\u5fc3\u8df3\uff0c\u4fdd\u8bc1\u8fde\u63a5\u4e0d\u65ad\u5f00\nhttp {\n  keepalive_timeout  90s 90s; # \u6b64\u4e24\u4e2a\u53c2\u6570\u4e3b\u8981\u5b9e\u73b0\u4ece\u5ba2\u6237\u7aef\u5230nginx\u7684\u957f\u8fde\u63a5\n  keepalive_requests 10000;\n\n  server {\n    listen       80;\n    server_name  www.xxx.com;\n\n    client_max_body_size    100m;\n\n    upstream  BACKEND {\n      server   192.168.0.1\uff1a8080  weight=1 max_fails=2 fail_timeout=30s;\n        server   192.168.0.2\uff1a8080  weight=1 max_fails=2 fail_timeout=30s;\n      keepalive 300;        // \u8fd9\u4e2a\u5f88\u91cd\u8981\uff01\n    }\n\n    location / {\n      root   /app/xxx;  # \u9879\u76ee\u6240\u5728\u76ee\u5f55\n      index  index.html index.htm;\n      try_files  $uri $uri/ /index.html;  # vue\u5355\u9875\u5e94\u7528\u9700\u8981\u8def\u7531\u59cb\u7ec8\u6307\u5411index.html\n    }\n\n    location /mqtt {\n       proxy_pass http://BACKEND;\n       proxy_http_version 1.1;  # \u6b64\u5904\u4e24\u4e2a\u53c2\u6570\u5b9e\u73b0nginx\u5230\u540e\u7aef\u7684\u957f\u8fde\u63a5\n       proxy_set_header Upgrade $http_upgrade;\n       proxy_set_header Connection "upgrade";\n       proxy_read_timeout 90;\n       proxy_send_timeout 90;\n       proxy_connect_timeout 90;\n    }\n    }\n}\n')),(0,r.kt)("h3",{id:"10-\u9650\u5236ip\u8bbf\u95ee"},"10. \u9650\u5236ip\u8bbf\u95ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"#\u9650\u5236IP\u8bbf\u95ee\nlocation / {\n    deny 192.168.0.2\uff1b\n    allow 192.168.0.0/24;\n    allow 192.168.1.1;\n    deny all;\n}\n")),(0,r.kt)("h3",{id:"11-\u914d\u7f6e\u79fb\u52a8\u7aef\u8bbf\u95ee"},"11. \u914d\u7f6e\u79fb\u52a8\u7aef\u8bbf\u95ee"),(0,r.kt)("p",null,"\u6b64\u914d\u7f6e\u53ef\u4ee5\u7528\u6765\u505a\u4e0d\u540c\u7aef\u7684\u81ea\u9002\u5e94\uff0c\u5373\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"$http_user_agent"),"\u5224\u65ad\u8bbe\u5907\u7c7b\u578b\uff0c\u8fd4\u56de\u4e0d\u540c\u7684\u6587\u4ef6\uff0c\u6216\u8005\u91cd\u5b9a\u5411\u5230\u4e0d\u540c\u7684\u7f51\u5740\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"# \u653e\u5728server\u91cc\nif ($http_user_agent !~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {\n  rewrite  ^(.*)    http://www.abc.com$1 permanent;\n}\n")),(0,r.kt)("h3",{id:"12-\u914d\u7f6e\u6587\u4ef6\u670d\u52a1\u5668"},"12. \u914d\u7f6e\u6587\u4ef6\u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u6240\u8c13\u6587\u4ef6\u670d\u52a1\u5668\u5c31\u662f\u901a\u8fc7\u6d4f\u89c8\u5668\u53ef\u4ee5\u76f4\u63a5\u6253\u5f00\u670d\u52a1\u5668\u7684\u6587\u4ef6\uff0c\u70b9\u51fb\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\uff0c\u8fd9\u6837\u5c31\u4e0d\u7528\u4e13\u95e8\u5199\u4e0b\u8f7d\u7684\u9875\u9762\uff0c\u7b80\u5355\u660e\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},'# \u9700\u8981\u6ce8\u610f\u7684\u662f\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u4ee5root\u7528\u6237\u542f\u52a8\nuser root root;\n\n# \u914d\u7f6e\u76ee\u5f55\u6811\u9875\u9762url\nlocation /download {\n        alias /home/download/;\n        autoindex on;\n        autoindex_exact_size off;\n        autoindex_localtime on;\n        charset utf-8,gbk;\n    }\n\n# \u4fee\u6539\u5934\u90e8\u5b57\u6bb5Content-Disposition\uff0c\u76f4\u63a5\u6253\u5f00\u4e0b\u8f7d\u6846\nlocation ~ ^/home/download(.*)$ {\n        add_header Content-Disposition "attachment;\n        filename=$1";\n    }\n')),(0,r.kt)("h2",{id:"\u4e8c\u5177\u4f53\u53c2\u6570\u542b\u4e49"},"\u4e8c\u3001\u5177\u4f53\u53c2\u6570\u542b\u4e49"),(0,r.kt)("h3",{id:"location\u8def\u5f84\u5339\u914d"},"location\u8def\u5f84\u5339\u914d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5f00\u5934"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 = \u5f00\u5934"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u7cbe\u786e\u5339\u914d\uff1b\u5982\u53ea\u5339\u914d\u6839\u76ee\u5f55\u7ed3\u5c3e\u7684\u8bf7\u6c42\uff0c\u540e\u9762\u4e0d\u80fd\u5e26\u4efb\u4f55\u5b57\u7b26\u4e32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 ~ \u5f00\u5934"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u533a\u5206\u5927\u5c0f\u5199\u7684\u6b63\u5219\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 ~* \u5f00\u5934"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\u6b63\u5219\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 ^~ \u5f00\u5934"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793auri\u4ee5\u67d0\u4e2a\u5e38\u89c4\u5b57\u7b26\u4e32\u5f00\u5934\uff0c\u4e0d\u662f\u6b63\u5219\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 / \u5f00\u5934"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u7528\u5339\u914d, \u5982\u679c\u6ca1\u6709\u5176\u5b83\u5339\u914d,\u4efb\u4f55\u8bf7\u6c42\u90fd\u4f1a\u5339\u914d\u5230")))))}d.isMDXComponent=!0}}]);