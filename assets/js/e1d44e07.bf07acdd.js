"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[1136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},65654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"React/React Router",id:"React/React Router",title:"React Router",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/React/React Router.md",sourceDirName:"React",slug:"/React/React Router",permalink:"/docs/React/React Router",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"React Jsx\u8f6c\u6362\u6210\u771f\u5b9eDOM\u8fc7\u7a0b",permalink:"/docs/React/React Jsx\u8f6c\u6362\u6210\u771f\u5b9eDOM\u8fc7\u7a0b"},next:{title:"React Router\u6709\u51e0\u79cd\u6a21\u5f0f",permalink:"/docs/React/React Router\u6709\u51e0\u79cd\u6a21\u5f0f"}},p={},u=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001\u6709\u54ea\u4e9b",id:"\u4e8c\u6709\u54ea\u4e9b",level:2},{value:"BrowserRouter\u3001HashRouter",id:"browserrouterhashrouter",level:3},{value:"Route",id:"route",level:3},{value:"Link\u3001NavLink",id:"linknavlink",level:3},{value:"redirect",id:"redirect",level:3},{value:"switch",id:"switch",level:3},{value:"useHistory",id:"usehistory",level:3},{value:"useParams",id:"useparams",level:3},{value:"useLocation",id:"uselocation",level:3},{value:"\u4e09\u3001\u53c2\u6570\u4f20\u9012",id:"\u4e09\u53c2\u6570\u4f20\u9012",level:2},{value:"\u52a8\u6001\u8def\u7531",id:"\u52a8\u6001\u8def\u7531",level:3},{value:"search\u4f20\u9012\u53c2\u6570",id:"search\u4f20\u9012\u53c2\u6570",level:3},{value:"to\u4f20\u5165\u5bf9\u8c61",id:"to\u4f20\u5165\u5bf9\u8c61",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u662f\u4ec0\u4e48"},"\u4e00\u3001\u662f\u4ec0\u4e48"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-router"),"\u7b49\u524d\u7aef\u8def\u7531\u7684\u539f\u7406\u5927\u81f4\u76f8\u540c\uff0c\u53ef\u4ee5\u5b9e\u73b0\u65e0\u5237\u65b0\u7684\u6761\u4ef6\u4e0b\u5207\u6362\u663e\u793a\u4e0d\u540c\u7684\u9875\u9762"),(0,r.kt)("p",null,"\u8def\u7531\u7684\u672c\u8d28\u5c31\u662f\u9875\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"URL"),"\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u9875\u9762\u7684\u663e\u793a\u7ed3\u679c\u53ef\u4ee5\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"URL"),"\u7684\u53d8\u5316\u800c\u53d8\u5316\uff0c\u4f46\u662f\u9875\u9762\u4e0d\u4f1a\u5237\u65b0"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u53ef\u4ee5\u901a\u8fc7\u524d\u7aef\u8def\u7531\u53ef\u4ee5\u5b9e\u73b0\u5355\u9875(SPA)\u5e94\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-router"),"\u4e3b\u8981\u5206\u6210\u4e86\u51e0\u4e2a\u4e0d\u540c\u7684\u5305\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"react-router: \u5b9e\u73b0\u4e86\u8def\u7531\u7684\u6838\u5fc3\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"react-router-dom\uff1a \u57fa\u4e8e react-router\uff0c\u52a0\u5165\u4e86\u5728\u6d4f\u89c8\u5668\u8fd0\u884c\u73af\u5883\u4e0b\u7684\u4e00\u4e9b\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"react-router-native\uff1a\u57fa\u4e8e react-router\uff0c\u52a0\u5165\u4e86 react-native \u8fd0\u884c\u73af\u5883\u4e0b\u7684\u4e00\u4e9b\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"react-router-config: \u7528\u4e8e\u914d\u7f6e\u9759\u6001\u8def\u7531\u7684\u5de5\u5177\u5e93")),(0,r.kt)("h2",{id:"\u4e8c\u6709\u54ea\u4e9b"},"\u4e8c\u3001\u6709\u54ea\u4e9b"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u8bb2\u8ff0\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom"),"\u7684\u5e38\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"API"),"\uff0c\u4e3b\u8981\u662f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7ec4\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BrowserRouter\u3001HashRouter"),(0,r.kt)("li",{parentName:"ul"},"Route"),(0,r.kt)("li",{parentName:"ul"},"Link\u3001NavLink"),(0,r.kt)("li",{parentName:"ul"},"switch"),(0,r.kt)("li",{parentName:"ul"},"redirect")),(0,r.kt)("h3",{id:"browserrouterhashrouter"},"BrowserRouter\u3001HashRouter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Router"),"\u4e2d\u5305\u542b\u4e86\u5bf9\u8def\u5f84\u6539\u53d8\u7684\u76d1\u542c\uff0c\u5e76\u4e14\u4f1a\u5c06\u76f8\u5e94\u7684\u8def\u5f84\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BrowserRouter"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"history"),"\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"HashRouter"),"\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e24\u8005\u4f5c\u4e3a\u6700\u9876\u5c42\u7ec4\u4ef6\u5305\u88f9\u5176\u4ed6\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BrowserRouter as Router } from "react-router-dom";\n\nexport default function App() {\n  return (\n    <Router>\n      <main>\n        <nav>\n          <ul>\n            <li>\n              < a href=" ">Home</ a>\n            </li>\n            <li>\n              < a href="/about">About</ a>\n            </li>\n            <li>\n              < a href="/contact">Contact</ a>\n            </li>\n          </ul>\n        </nav>\n      </main>\n    </Router>\n  );\n}\n')),(0,r.kt)("h3",{id:"route"},"Route"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Route"),"\u7528\u4e8e\u8def\u5f84\u7684\u5339\u914d\uff0c\u7136\u540e\u8fdb\u884c\u7ec4\u4ef6\u7684\u6e32\u67d3\uff0c\u5bf9\u5e94\u7684\u5c5e\u6027\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"path \u5c5e\u6027\uff1a\u7528\u4e8e\u8bbe\u7f6e\u5339\u914d\u5230\u7684\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"component \u5c5e\u6027\uff1a\u8bbe\u7f6e\u5339\u914d\u5230\u8def\u5f84\u540e\uff0c\u6e32\u67d3\u7684\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"render \u5c5e\u6027\uff1a\u8bbe\u7f6e\u5339\u914d\u5230\u8def\u5f84\u540e\uff0c\u6e32\u67d3\u7684\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"exact \u5c5e\u6027\uff1a\u5f00\u542f\u7cbe\u51c6\u5339\u914d\uff0c\u53ea\u6709\u7cbe\u51c6\u5339\u914d\u5230\u5b8c\u5168\u4e00\u81f4\u7684\u8def\u5f84\uff0c\u624d\u4f1a\u6e32\u67d3\u5bf9\u5e94\u7684\u7ec4\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BrowserRouter as Router, Route } from "react-router-dom";\n\nexport default function App() {\n  return (\n    <Router>\n      <main>\n        <nav>\n          <ul>\n            <li>\n              < a href="/">Home</ a>\n            </li>\n            <li>\n              < a href="/about">About</ a>\n            </li>\n            <li>\n              < a href="/contact">Contact</ a>\n            </li>\n          </ul>\n        </nav>\n        <Route path="/" render={() => <h1>Welcome!</h1>} />\n      </main>\n    </Router>\n  );\n}\n')),(0,r.kt)("h3",{id:"linknavlink"},"Link\u3001NavLink"),(0,r.kt)("p",null,"\u901a\u5e38\u8def\u5f84\u7684\u8df3\u8f6c\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),"\u7ec4\u4ef6\uff0c\u6700\u7ec8\u4f1a\u88ab\u6e32\u67d3\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u5143\u7d20\uff0c\u5176\u4e2d\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"\u4ee3\u66ff",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u6807\u9898\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"href"),"\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NavLink"),"\u662f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),"\u57fa\u7840\u4e4b\u4e0a\u589e\u52a0\u4e86\u4e00\u4e9b\u6837\u5f0f\u5c5e\u6027\uff0c\u4f8b\u5982\u7ec4\u4ef6\u88ab\u9009\u4e2d\u65f6\uff0c\u53d1\u751f\u6837\u5f0f\u53d8\u5316\uff0c\u5219\u53ef\u4ee5\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"NavLink"),"\u7684\u4e00\u4e0b\u5c5e\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"activeStyle\uff1a\u6d3b\u8dc3\u65f6\uff08\u5339\u914d\u65f6\uff09\u7684\u6837\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"activeClassName\uff1a\u6d3b\u8dc3\u65f6\u6dfb\u52a0\u7684class")),(0,r.kt)("p",null,"\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<NavLink to="/" exact activeStyle={{color: "red"}}>\u9996\u9875</NavLink>\n<NavLink to="/about" activeStyle={{color: "red"}}>\u5173\u4e8e</NavLink>\n<NavLink to="/profile" activeStyle={{color: "red"}}>\u6211\u7684</NavLink>\n')),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"js"),"\u5b9e\u73b0\u9875\u9762\u7684\u8df3\u8f6c\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u5f62\u5f0f\uff1a"),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"Route"),"\u4f5c\u4e3a\u9876\u5c42\u7ec4\u4ef6\u5305\u88f9\u5176\u4ed6\u7ec4\u4ef6\u540e,\u9875\u9762\u7ec4\u4ef6\u5c31\u53ef\u4ee5\u63a5\u6536\u5230\u4e00\u4e9b\u8def\u7531\u76f8\u5173\u7684\u4e1c\u897f\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"props.history")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const Contact = ({ history }) => (\n  <Fragment>\n    <h1>Contact</h1>\n    <button onClick={() => history.push("/")}>Go to home</button>\n    <FakeText />\n  </Fragment>\n);\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"props "),"\u4e2d\u63a5\u6536\u5230\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"history"),"\u5bf9\u8c61\u5177\u6709\u4e00\u4e9b\u65b9\u4fbf\u7684\u65b9\u6cd5\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"goBack"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"goForward"),",",(0,r.kt)("inlineCode",{parentName:"p"},"push")),(0,r.kt)("h3",{id:"redirect"},"redirect"),(0,r.kt)("p",null,"\u7528\u4e8e\u8def\u7531\u7684\u91cd\u5b9a\u5411\uff0c\u5f53\u8fd9\u4e2a\u7ec4\u4ef6\u51fa\u73b0\u65f6\uff0c\u5c31\u4f1a\u6267\u884c\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"\u8def\u5f84\u4e2d\uff0c\u5982\u4e0b\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const About = ({\n  match: {\n    params: { name },\n  },\n}) => (\n  // props.match.params.name\n  <Fragment>\n    {name !== "tom" ? <Redirect to="/" /> : null}\n    <h1>About {name}</h1>\n    <FakeText />\n  </Fragment>\n)\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u7ec4\u4ef6\u5f53\u63a5\u6536\u5230\u7684\u8def\u7531\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u4e0d\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"tom")," \u7684\u65f6\u5019\uff0c\u5c06\u4f1a\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u9996\u9875"),(0,r.kt)("h3",{id:"switch"},"switch"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"swich"),"\u7ec4\u4ef6\u7684\u4f5c\u7528\u9002\u7528\u4e8e\u5f53\u5339\u914d\u5230\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u540e\u9762\u7684\u7ec4\u4ef6\u5c31\u4e0d\u5e94\u8be5\u7ee7\u7eed\u5339\u914d"),(0,r.kt)("p",null,"\u5982\u4e0b\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Switch>\n  <Route exact path="/" component={Home} />\n  <Route path="/about" component={About} />\n  <Route path="/profile" component={Profile} />\n  <Route path="/:userid" component={User} />\n  <Route component={NoMatch} />\n</Switch>\n')),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"\u7ec4\u4ef6\u8fdb\u884c\u5305\u88f9"),(0,r.kt)("p",null,"\u9664\u4e86\u4e00\u4e9b\u8def\u7531\u76f8\u5173\u7684\u7ec4\u4ef6\u4e4b\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"react-router"),"\u8fd8\u63d0\u4f9b\u4e00\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"hooks"),"\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useHistory"),(0,r.kt)("li",{parentName:"ul"},"useParams"),(0,r.kt)("li",{parentName:"ul"},"useLocation")),(0,r.kt)("h3",{id:"usehistory"},"useHistory"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useHistory"),"\u53ef\u4ee5\u8ba9\u7ec4\u4ef6\u5185\u90e8\u76f4\u63a5\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"history"),"\uff0c\u65e0\u987b\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u83b7\u53d6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useHistory } from "react-router-dom";\n\nconst Contact = () => {\n  const history = useHistory();\n  return (\n    <Fragment>\n      <h1>Contact</h1>\n      <button onClick={() => history.push("/")}>Go to home</button>\n    </Fragment>\n  );\n};\n')),(0,r.kt)("h3",{id:"useparams"},"useParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const About = () => {\n  const { name } = useParams();\n  return (\n    // props.match.params.name\n    <Fragment>\n      {name !== "John Doe" ? <Redirect to="/" /> : null}\n      <h1>About {name}</h1>\n      <Route component={Contact} />\n    </Fragment>\n  );\n};\n')),(0,r.kt)("h3",{id:"uselocation"},"useLocation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," \u4f1a\u8fd4\u56de\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"URL "),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"location "),"\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useLocation } from "react-router-dom";\n\nconst Contact = () => {\n  const { pathname } = useLocation();\n\n  return (\n    <Fragment>\n      <h1>Contact</h1>\n      <p>Current URL: {pathname}</p >\n    </Fragment>\n  );\n};\n')),(0,r.kt)("h2",{id:"\u4e09\u53c2\u6570\u4f20\u9012"},"\u4e09\u3001\u53c2\u6570\u4f20\u9012"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u8def\u7531\u4f20\u9012\u53c2\u6570\u4e3b\u8981\u5206\u6210\u4e86\u4e09\u79cd\u5f62\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8def\u7531\u7684\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"search\u4f20\u9012\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"to\u4f20\u5165\u5bf9\u8c61")),(0,r.kt)("h3",{id:"\u52a8\u6001\u8def\u7531"},"\u52a8\u6001\u8def\u7531"),(0,r.kt)("p",null,"\u52a8\u6001\u8def\u7531\u7684\u6982\u5ff5\u6307\u7684\u662f\u8def\u7531\u4e2d\u7684\u8def\u5f84\u5e76\u4e0d\u4f1a\u56fa\u5b9a"),(0,r.kt)("p",null,"\u4f8b\u5982\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"path"),"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Route"),"\u5339\u914d\u65f6\u5199\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"/detail/:id"),"\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"/detail/abc"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/detail/123"),"\u90fd\u53ef\u4ee5\u5339\u914d\u5230\u8be5",(0,r.kt)("inlineCode",{parentName:"p"},"Route")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<NavLink to="/detail/abc123">\u8be6\u60c5</NavLink>\n\n<Switch>\n    ... \u5176\u4ed6Route\n    <Route path="/detail/:id" component={Detail}/>\n    <Route component={NoMatch} />\n</Switch>\n')),(0,r.kt)("p",null,"\u83b7\u53d6\u53c2\u6570\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log(props.match.params.xxx)\n")),(0,r.kt)("h3",{id:"search\u4f20\u9012\u53c2\u6570"},"search\u4f20\u9012\u53c2\u6570"),(0,r.kt)("p",null,"\u5728\u8df3\u8f6c\u7684\u8def\u5f84\u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e9bquery\u53c2\u6570\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<NavLink to="/detail2?name=why&age=18">\u8be6\u60c52</NavLink>\n\n<Switch>\n  <Route path="/detail2" component={Detail2}/>\n</Switch>\n')),(0,r.kt)("p",null,"\u83b7\u53d6\u5f62\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(props.location.search)\n")),(0,r.kt)("h3",{id:"to\u4f20\u5165\u5bf9\u8c61"},"to\u4f20\u5165\u5bf9\u8c61"),(0,r.kt)("p",null,"\u4f20\u9012\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<NavLink to={{\n    pathname: "/detail2", \n    query: {name: "kobe", age: 30},\n    state: {height: 1.98, address: "\u6d1b\u6749\u77f6"},\n    search: "?apikey=123"\n  }}>\n  \u8be6\u60c52\n</NavLink>\n')),(0,r.kt)("p",null,"\u83b7\u53d6\u53c2\u6570\u7684\u5f62\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(props.location)\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://react-guide.github.io/react-router-cn/docs/API.html#route"},"http://react-guide.github.io/react-router-cn/docs/API.html#route"))))}s.isMDXComponent=!0}}]);