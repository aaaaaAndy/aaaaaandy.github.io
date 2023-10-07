"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[88406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},i=void 0,o={unversionedId:"nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",id:"nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",title:"Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",description:"\ud83d\udcc652 PM",source:"@site/docs/nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790.md",sourceDirName:"nginx",slug:"/nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",permalink:"/docs/nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"nginxSidebar",previous:{title:"Nginx\u5e38\u7528\u914d\u7f6e",permalink:"/docs/nginx/Nginx\u5e38\u7528\u914d\u7f6e"}},p={},s=[{value:"\u4e00\u3001Nginx\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",id:"\u4e00nginx\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",level:2},{value:"\u4e8c\u3001\u793a\u4f8b\u914d\u7f6e",id:"\u4e8c\u793a\u4f8b\u914d\u7f6e",level:2},{value:"\u4e09\u3001\u5185\u90e8\u53d8\u91cf",id:"\u4e09\u5185\u90e8\u53d8\u91cf",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcc6: 2022/5/25 10:52 PM\n\ud83c\udff7: #nginx "),(0,a.kt)("h2",{id:"\u4e00nginx\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"},"\u4e00\u3001Nginx\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"#\u5168\u5c40\u5757\n...              \n\n#events\u5757\nevents {         \n   ...\n}\n\n#http\u5757\nhttp {\n\n        #server\u5757\n        server {\n\n       #location\u5757\n       location [PATTERN] {\n           ...\n       }\n\n                # \u53ef\u914d\u7f6e\u591a\u4e2alocation\u5757\n       location [PATTERN] {\n           ...\n       }\n    }\n\n        # \u53ef\u914d\u7f6e\u591a\u4e2aserver\u5757\n    server {\n      ...\n    }\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u5168\u5c40\u5757")),"\uff1a\u914d\u7f6e\u5f71\u54cd",(0,a.kt)("inlineCode",{parentName:"li"},"nginx"),"\u5168\u5c40\u7684\u6307\u4ee4\u3002\u4e00\u822c\u6709\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"nginx"),"\u670d\u52a1\u5668\u7684\u7528\u6237\u7ec4\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"nginx"),"\u8fdb\u7a0b",(0,a.kt)("inlineCode",{parentName:"li"},"pid"),"\u5b58\u653e\u8def\u5f84\uff0c\u65e5\u5fd7\u5b58\u653e\u8def\u5f84\uff0c\u914d\u7f6e\u6587\u4ef6\u5f15\u5165\uff0c\u5141\u8bb8\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"li"},"worker process"),"\u6570\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"events\u5757")),"\uff1a\u914d\u7f6e\u5f71\u54cd",(0,a.kt)("inlineCode",{parentName:"li"},"nginx"),"\u670d\u52a1\u5668\u6216\u4e0e\u7528\u6237\u7684\u7f51\u7edc\u8fde\u63a5\u3002\u6709\u6bcf\u4e2a\u8fdb\u7a0b\u7684\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9009\u53d6\u54ea\u79cd\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u5904\u7406\u8fde\u63a5\u8bf7\u6c42\uff0c\u662f\u5426\u5141\u8bb8\u540c\u65f6\u63a5\u53d7\u591a\u4e2a\u7f51\u8def\u8fde\u63a5\uff0c\u5f00\u542f\u591a\u4e2a\u7f51\u7edc\u8fde\u63a5\u5e8f\u5217\u5316\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"http\u5757")),"\uff1a\u53ef\u4ee5\u5d4c\u5957\u591a\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"server"),"\uff0c\u914d\u7f6e\u4ee3\u7406\uff0c\u7f13\u5b58\uff0c\u65e5\u5fd7\u5b9a\u4e49\u7b49\u7edd\u5927\u591a\u6570\u529f\u80fd\u548c\u7b2c\u4e09\u65b9\u6a21\u5757\u7684\u914d\u7f6e\u3002\u5982\u6587\u4ef6\u5f15\u5165\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"mime-type"),"\u5b9a\u4e49\uff0c\u65e5\u5fd7\u81ea\u5b9a\u4e49\uff0c\u662f\u5426\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"sendfile"),"\u4f20\u8f93\u6587\u4ef6\uff0c\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u8fde\u63a5\u8bf7\u6c42\u6570\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"server\u5757")),"\uff1a\u914d\u7f6e\u865a\u62df\u4e3b\u673a\u7684\u76f8\u5173\u53c2\u6570\uff0c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"http"),"\u4e2d\u53ef\u4ee5\u6709\u591a\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"server"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"location\u5757")),"\uff1a\u914d\u7f6e\u8bf7\u6c42\u7684\u8def\u7531\uff0c\u4ee5\u53ca\u5404\u79cd\u9875\u9762\u7684\u5904\u7406\u60c5\u51b5\u3002")),(0,a.kt)("h2",{id:"\u4e8c\u793a\u4f8b\u914d\u7f6e"},"\u4e8c\u3001\u793a\u4f8b\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"########### \u6bcf\u4e2a\u6307\u4ee4\u5fc5\u987b\u6709\u5206\u53f7\u7ed3\u675f\u3002#################\nuser administrator administrators;  #\u914d\u7f6e\u7528\u6237\u6216\u8005\u7ec4\uff0c\u9ed8\u8ba4\u4e3anobody nobody\u3002\nworker_processes 2;  #\u5141\u8bb8\u751f\u6210\u7684\u8fdb\u7a0b\u6570\uff0c\u9ed8\u8ba4\u4e3a1\npid /nginx/pid/nginx.pid;   #\u6307\u5b9anginx\u8fdb\u7a0b\u8fd0\u884c\u6587\u4ef6\u5b58\u653e\u5730\u5740\n\n#\u5236\u5b9a\u65e5\u5fd7\u8def\u5f84\uff0c\u7ea7\u522b\u3002\u8fd9\u4e2a\u8bbe\u7f6e\u53ef\u4ee5\u653e\u5165\u5168\u5c40\u5757\uff0chttp\u5757\uff0cserver\u5757\uff0c\u7ea7\u522b\u4ee5\u6b64\u4e3a\uff1adebug|info|notice|warn|error|crit|alert|emerg\nerror_log log/error.log debug;  \n\nevents {\n    accept_mutex on;   #\u8bbe\u7f6e\u7f51\u8def\u8fde\u63a5\u5e8f\u5217\u5316\uff0c\u9632\u6b62\u60ca\u7fa4\u73b0\u8c61\u53d1\u751f\uff0c\u9ed8\u8ba4\u4e3aon\n    multi_accept on;  #\u8bbe\u7f6e\u4e00\u4e2a\u8fdb\u7a0b\u662f\u5426\u540c\u65f6\u63a5\u53d7\u591a\u4e2a\u7f51\u7edc\u8fde\u63a5\uff0c\u9ed8\u8ba4\u4e3aoff\n    use epoll;      #\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\uff0cselect|poll|kqueue|epoll|resig|/dev/poll|eventport\n    worker_connections  1024;    #\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u4e3a512\n}\n\nhttp {\n    include       mime.types;   #\u6587\u4ef6\u6269\u5c55\u540d\u4e0e\u6587\u4ef6\u7c7b\u578b\u6620\u5c04\u8868\n    default_type  application/octet-stream; #\u9ed8\u8ba4\u6587\u4ef6\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3atext/plain\n    #access_log off; #\u53d6\u6d88\u670d\u52a1\u65e5\u5fd7\n    log_format myFormat '$remote_addr\u2013$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #\u81ea\u5b9a\u4e49\u683c\u5f0f\n    access_log log/access.log myFormat;  #combined\u4e3a\u65e5\u5fd7\u683c\u5f0f\u7684\u9ed8\u8ba4\u503c\n    sendfile on;   #\u5141\u8bb8sendfile\u65b9\u5f0f\u4f20\u8f93\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3aoff\uff0c\u53ef\u4ee5\u5728http\u5757\uff0cserver\u5757\uff0clocation\u5757\u3002\n    sendfile_max_chunk 100k;  #\u6bcf\u4e2a\u8fdb\u7a0b\u6bcf\u6b21\u8c03\u7528\u4f20\u8f93\u6570\u91cf\u4e0d\u80fd\u5927\u4e8e\u8bbe\u5b9a\u7684\u503c\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u5373\u4e0d\u8bbe\u4e0a\u9650\u3002\n    keepalive_timeout 65;  #\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a75s\uff0c\u53ef\u4ee5\u5728http\uff0cserver\uff0clocation\u5757\u3002\n\n    upstream mysvr {\n      server 127.0.0.1:7878;\n      server 192.168.10.121:3333 backup;  #\u70ed\u5907\n    }\n\n    error_page 404 https://www.baidu.com; #\u9519\u8bef\u9875\n\n    server {\n        keepalive_requests 120; #\u5355\u8fde\u63a5\u8bf7\u6c42\u4e0a\u9650\u6b21\u6570\u3002\n        listen       4545;   #\u76d1\u542c\u7aef\u53e3\n        server_name  127.0.0.1;   #\u76d1\u542c\u5730\u5740\n        location  ~*^.+$ {       #\u8bf7\u6c42\u7684url\u8fc7\u6ee4\uff0c\u6b63\u5219\u5339\u914d\uff0c~\u4e3a\u533a\u5206\u5927\u5c0f\u5199\uff0c~*\u4e3a\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002\n           #root path;  #\u6839\u76ee\u5f55\n           #index vv.txt;  #\u8bbe\u7f6e\u9ed8\u8ba4\u9875\n           proxy_pass  http://mysvr;  #\u8bf7\u6c42\u8f6c\u5411mysvr \u5b9a\u4e49\u7684\u670d\u52a1\u5668\u5217\u8868\n           deny 127.0.0.1;  #\u62d2\u7edd\u7684ip\n           allow 172.18.5.54; #\u5141\u8bb8\u7684ip\n        }\n    }\n}\n")),(0,a.kt)("h2",{id:"\u4e09\u5185\u90e8\u53d8\u91cf"},"\u4e09\u3001\u5185\u90e8\u53d8\u91cf"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5e38\u91cf"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"remoteaddr\u2004<\u2004br/>http_x_forwarded_for"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5ba2\u6237\u7aef\u7684ip\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$remote_user"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5ba2\u6237\u7aef\u7528\u6237\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$time_local"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u8bbf\u95ee\u65f6\u95f4\u4e0e\u65f6\u533a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$request"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u8bf7\u6c42\u7684url\u4e0ehttp\u534f\u8bae\uff1b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$status"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u8bf7\u6c42\u72b6\u6001\uff1b\u6210\u529f\u662f200\uff0c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$body_bytes_s ent"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u6587\u4ef6\u4e3b\u4f53\u5185\u5bb9\u5927\u5c0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$http_referer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4ece\u90a3\u4e2a\u9875\u9762\u94fe\u63a5\u8bbf\u95ee\u8fc7\u6765")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$http_user_agent"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u7684\u76f8\u5173\u4fe1\u606f")))))}d.isMDXComponent=!0}}]);