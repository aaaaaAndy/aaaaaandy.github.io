"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[29667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,p(p({ref:t},u),{},{components:n})):a.createElement(k,p({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},p=void 0,o={unversionedId:"React/React",id:"React/React",title:"React",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/React/React.md",sourceDirName:"React",slug:"/React/",permalink:"/docs/React/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"React \u6027\u80fd\u4f18\u5316",permalink:"/docs/React/React \u6027\u80fd\u4f18\u5316"},next:{title:"React\u4e2drefs\u7684\u4f7f\u7528",permalink:"/docs/React/React\u4e2drefs\u7684\u4f7f\u7528"}},i={},c=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001\u7279\u6027",id:"\u4e8c\u7279\u6027",level:2},{value:"\u58f0\u660e\u5f0f\u7f16\u7a0b",id:"\u58f0\u660e\u5f0f\u7f16\u7a0b",level:3},{value:"Component",id:"component",level:3},{value:"\u4e09\u3001\u4f18\u52bf",id:"\u4e09\u4f18\u52bf",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u662f\u4ec0\u4e48"},"\u4e00\u3001\u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"React\uff0c\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93\uff0c\u53ea\u63d0\u4f9b\u4e86 UI \u5c42\u9762\u7684\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u9075\u5faa\u7ec4\u4ef6\u8bbe\u8ba1\u6a21\u5f0f\u3001\u58f0\u660e\u5f0f\u7f16\u7a0b\u8303\u5f0f\u548c\u51fd\u6570\u5f0f\u7f16\u7a0b\u6982\u5ff5\uff0c\u4ee5\u4f7f\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u66f4\u9ad8\u6548"),(0,r.kt)("p",null,"\u4f7f\u7528\u865a\u62df ",(0,r.kt)("inlineCode",{parentName:"p"},"DOM")," \u6765\u6709\u6548\u5730\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"DOM"),"\uff0c\u9075\u5faa\u4ece\u9ad8\u9636\u7ec4\u4ef6\u5230\u4f4e\u9636\u7ec4\u4ef6\u7684\u5355\u5411\u6570\u636e\u6d41"),(0,r.kt)("p",null,"\u5e2e\u52a9\u6211\u4eec\u5c06\u754c\u9762\u6210\u4e86\u5404\u4e2a\u72ec\u7acb\u7684\u5c0f\u5757\uff0c\u6bcf\u4e00\u4e2a\u5757\u5c31\u662f\u7ec4\u4ef6\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u4e4b\u95f4\u53ef\u4ee5\u7ec4\u5408\u3001\u5d4c\u5957\uff0c\u6784\u6210\u6574\u4f53\u9875\u9762"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u7c7b\u7ec4\u4ef6\u4f7f\u7528\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"render()")," \u7684\u65b9\u6cd5\u6216\u8005\u51fd\u6570\u7ec4\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"return"),"\uff0c\u63a5\u6536\u8f93\u5165\u7684\u6570\u636e\u5e76\u8fd4\u56de\u9700\u8981\u5c55\u793a\u7684\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'class HelloMessage extends React.Component {\n  render() {\n    return <div>Hello {this.props.name}</div>;\n  }\n}\n\nReactDOM.render(\n  <HelloMessage name="Taylor" />,\n  document.getElementById("hello-example")\n);\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u8fd9\u79cd\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"p"},"XML")," \u5f62\u5f0f\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX"),"\uff0c\u6700\u7ec8\u4f1a\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," \u7f16\u8bd1\u4e3a\u5408\u6cd5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"JS")," \u8bed\u53e5\u8c03\u7528"),(0,r.kt)("p",null,"\u88ab\u4f20\u5165\u7684\u6570\u636e\u53ef\u5728\u7ec4\u4ef6\u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"render()")," \u8bbf\u95ee"),(0,r.kt)("h2",{id:"\u4e8c\u7279\u6027"},"\u4e8c\u3001\u7279\u6027"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u7279\u6027\u6709\u5f88\u591a\uff0c\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSX \u8bed\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5411\u6570\u636e\u7ed1\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u865a\u62df DOM"),(0,r.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u7f16\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"Component")),(0,r.kt)("p",null,"\u7740\u91cd\u4ecb\u7ecd\u4e0b\u58f0\u660e\u5f0f\u7f16\u7a0b\u53ca Component"),(0,r.kt)("h3",{id:"\u58f0\u660e\u5f0f\u7f16\u7a0b"},"\u58f0\u660e\u5f0f\u7f16\u7a0b"),(0,r.kt)("p",null,"\u58f0\u660e\u5f0f\u7f16\u7a0b\u662f\u4e00\u79cd\u7f16\u7a0b\u8303\u5f0f\uff0c\u5b83\u5173\u6ce8\u7684\u662f\u4f60\u8981\u505a\u4ec0\u4e48\uff0c\u800c\u4e0d\u662f\u5982\u4f55\u505a"),(0,r.kt)("p",null,"\u5b83\u8868\u8fbe\u903b\u8f91\u800c\u4e0d\u663e\u5f0f\u5730\u5b9a\u4e49\u6b65\u9aa4\u3002\u8fd9\u610f\u5473\u7740\u6211\u4eec\u9700\u8981\u6839\u636e\u903b\u8f91\u7684\u8ba1\u7b97\u6765\u58f0\u660e\u8981\u663e\u793a\u7684\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5982\u5b9e\u73b0\u4e00\u4e2a\u6807\u8bb0\u7684\u5730\u56fe\uff1a"),(0,r.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4\u5f0f\u521b\u5efa\u5730\u56fe\u3001\u521b\u5efa\u6807\u8bb0\u3001\u4ee5\u53ca\u5728\u5730\u56fe\u4e0a\u6dfb\u52a0\u7684\u6807\u8bb0\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u521b\u5efa\u5730\u56fe\nconst map = new Map.map(document.getElementById("map"), {\n  zoom: 4,\n  center: { lat, lng },\n});\n\n// \u521b\u5efa\u6807\u8bb0\nconst marker = new Map.marker({\n  position: { lat, lng },\n  title: "Hello Marker",\n});\n\n// \u5730\u56fe\u4e0a\u6dfb\u52a0\u6807\u8bb0\nmarker.setMap(map);\n')),(0,r.kt)("p",null,"\u800c\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u5b9e\u73b0\u4e0a\u8ff0\u529f\u80fd\u5219\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Map zoom={4} center={(lat, lng)}>\n  <Marker position={(lat, lng)} title={"Hello Marker"} />\n</Map>\n')),(0,r.kt)("p",null,"\u58f0\u660e\u5f0f\u7f16\u7a0b\u65b9\u5f0f\u4f7f\u5f97 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u7ec4\u4ef6\u5f88\u5bb9\u6613\u4f7f\u7528\uff0c\u6700\u7ec8\u7684\u4ee3\u7801\u7b80\u5355\u6613\u4e8e\u7ef4\u62a4"),(0,r.kt)("h3",{id:"component"},"Component"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u4e2d\uff0c\u4e00\u5207\u7686\u4e3a\u7ec4\u4ef6\u3002\u901a\u5e38\u5c06\u5e94\u7528\u7a0b\u5e8f\u7684\u6574\u4e2a\u903b\u8f91\u5206\u89e3\u4e3a\u5c0f\u7684\u5355\u4e2a\u90e8\u5206\u3002 \u6211\u4eec\u5c06\u6bcf\u4e2a\u5355\u72ec\u7684\u90e8\u5206\u79f0\u4e3a\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\u6216\u8005\u662f\u4e00\u4e2a\u7c7b\uff0c\u63a5\u53d7\u6570\u636e\u8f93\u5165\uff0c\u5904\u7406\u5b83\u5e76\u8fd4\u56de\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"UI")," \u4e2d\u5448\u73b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u5143\u7d20"),(0,r.kt)("p",null,"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const Header = () => {\n  return (\n    <Jumbotron style={{ backgroundColor: "orange" }}>\n      <h1>TODO App</h1>\n    </Jumbotron>\n  );\n};\n')),(0,r.kt)("p",null,"\u7c7b\u7ec4\u4ef6\uff08\u6709\u72b6\u6001\u7ec4\u4ef6\uff09\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'class Dashboard extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n  }\n  render() {\n    return (\n      <div className="dashboard">\n        <ToDoForm />\n        <ToDolist />\n      </div>\n    );\n  }\n}\n')),(0,r.kt)("p",null,"\u4e00\u4e2a\u7ec4\u4ef6\u8be5\u6709\u7684\u7279\u70b9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7ec4\u5408\uff1a\u6bcf\u4e2a\u7ec4\u4ef6\u6613\u4e8e\u548c\u5176\u5b83\u7ec4\u4ef6\u4e00\u8d77\u4f7f\u7528\uff0c\u6216\u8005\u5d4c\u5957\u5728\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u5185\u90e8"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u91cd\u7528\uff1a\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u662f\u5177\u6709\u72ec\u7acb\u529f\u80fd\u7684\uff0c\u5b83\u53ef\u4ee5\u88ab\u4f7f\u7528\u5728\u591a\u4e2a UI \u573a\u666f"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7ef4\u62a4\uff1a\u6bcf\u4e2a\u5c0f\u7684\u7ec4\u4ef6\u4ec5\u4ec5\u5305\u542b\u81ea\u8eab\u7684\u903b\u8f91\uff0c\u66f4\u5bb9\u6613\u88ab\u7406\u89e3\u548c\u7ef4\u62a4")),(0,r.kt)("h2",{id:"\u4e09\u4f18\u52bf"},"\u4e09\u3001\u4f18\u52bf"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u521d\u6b65\u4e86\u89e3\uff0c\u53ef\u4ee5\u611f\u53d7\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," \u5b58\u5728\u7684\u4f18\u52bf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u7075\u6d3b"),(0,r.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u7684\u8bbe\u8ba1\uff0c\u7b80\u5355\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5f0f\u5f00\u53d1\uff0c\u63d0\u9ad8\u4ee3\u7801\u590d\u7528\u7387"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u5411\u54cd\u5e94\u7684\u6570\u636e\u6d41\u4f1a\u6bd4\u53cc\u5411\u7ed1\u5b9a\u7684\u66f4\u5b89\u5168\uff0c\u901f\u5ea6\u66f4\u5feb")),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000015924762"},"https://segmentfault.com/a/1190000015924762")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react.docschina.org/"},"https://react.docschina.org/"))))}s.isMDXComponent=!0}}]);