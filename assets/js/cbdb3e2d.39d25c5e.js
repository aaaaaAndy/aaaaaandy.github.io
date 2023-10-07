"use strict";(self.webpackChunkaaaaaandy_github_io=self.webpackChunkaaaaaandy_github_io||[]).push([[13365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const p={},o=void 0,l={unversionedId:"React/state\u548cprops\u6709\u4ec0\u4e48\u533a\u522b",id:"React/state\u548cprops\u6709\u4ec0\u4e48\u533a\u522b",title:"state\u548cprops\u6709\u4ec0\u4e48\u533a\u522b",description:"\ud83c\udff7: #react #state #props",source:"@site/docs/React/state\u548cprops\u6709\u4ec0\u4e48\u533a\u522b.md",sourceDirName:"React",slug:"/React/state\u548cprops\u6709\u4ec0\u4e48\u533a\u522b",permalink:"/docs/React/state\u548cprops\u6709\u4ec0\u4e48\u533a\u522b",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"state\u548cprops\u6709\u4ec0\u4e48\u533a\u522b 2",permalink:"/docs/React/state\u548cprops\u6709\u4ec0\u4e48\u533a\u522b 2"},next:{title:"super()\u548csuper(props)\u6709\u4ec0\u4e48\u533a\u522b",permalink:"/docs/React/super()\u548csuper(props)\u6709\u4ec0\u4e48\u533a\u522b"}},s={},i=[{value:"\u4e00\u3001state",id:"\u4e00state",level:2},{value:"\u4e8c\u3001props",id:"\u4e8cprops",level:2},{value:"\u4e09\u3001\u533a\u522b",id:"\u4e09\u533a\u522b",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83c\udff7: #react #state #props"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u4e00state"},"\u4e00\u3001state"),(0,a.kt)("p",null,"\u4e00\u4e2a\u7ec4\u4ef6\u7684\u663e\u793a\u5f62\u6001\u53ef\u4ee5\u7531\u6570\u636e\u72b6\u6001\u548c\u5916\u90e8\u53c2\u6570\u6240\u51b3\u5b9a\uff0c\u800c\u6570\u636e\u72b6\u6001\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u4e00\u822c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor")," \u4e2d\u521d\u59cb\u5316\n\u5f53\u9700\u8981\u4fee\u6539\u91cc\u9762\u7684\u503c\u7684\u72b6\u6001\u9700\u8981\u901a\u8fc7\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," \u6765\u6539\u53d8\uff0c\u4ece\u800c\u8fbe\u5230\u66f4\u65b0\u7ec4\u4ef6\u5185\u90e8\u6570\u636e\u7684\u4f5c\u7528\uff0c\u5e76\u4e14\u91cd\u65b0\u8c03\u7528\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\uff0c\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class Button extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      count: 0,\n    };\n  }\n\n  updateCount() {\n    this.setState((prevState, props) => {\n      return { count: prevState.count + 1 };\n    });\n  }\n\n  render() {\n    return (\n      <button onClick={() => this.updateCount()}>\n        Clicked {this.state.count} times\n      </button>\n    );\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setState")," \u8fd8\u53ef\u4ee5\u63a5\u53d7\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5b83\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," \u8c03\u7528\u5b8c\u6210\u5e76\u4e14\u7ec4\u4ef6\u5f00\u59cb\u91cd\u65b0\u6e32\u67d3\u65f6\u88ab\u8c03\u7528\uff0c\u53ef\u4ee5\u7528\u6765\u76d1\u542c\u6e32\u67d3\u662f\u5426\u5b8c\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'this.setState(\n  {\n    name: "JS\u6bcf\u65e5\u4e00\u9898",\n  },\n  () => console.log("setState finished")\n);\n')),(0,a.kt)("h2",{id:"\u4e8cprops"},"\u4e8c\u3001props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React")," \u7684\u6838\u5fc3\u601d\u60f3\u5c31\u662f\u7ec4\u4ef6\u5316\u601d\u60f3\uff0c\u9875\u9762\u4f1a\u88ab\u5207\u5206\u6210\u4e00\u4e9b\u72ec\u7acb\u7684\u3001\u53ef\u590d\u7528\u7684\u7ec4\u4ef6\n\u7ec4\u4ef6\u4ece\u6982\u5ff5\u4e0a\u770b\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\u4f5c\u4e3a\u8f93\u5165\u503c\uff0c\u8fd9\u4e2a\u53c2\u6570\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\uff0c\u6240\u4ee5\u53ef\u4ee5\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u7406\u89e3\u4e3a\u4ece\u5916\u90e8\u4f20\u5165\u7ec4\u4ef6\u5185\u90e8\u7684\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"react")," \u5177\u6709\u5355\u5411\u6570\u636e\u6d41\u7684\u7279\u6027\uff0c\u6240\u4ee5\u4ed6\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u4ece\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4e2d\u4f20\u9012\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u9664\u4e86\u53ef\u4ee5\u4f20\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\uff0c\u8fd8\u53ef\u4ee5\u4f20\u9012\u5bf9\u8c61\uff0c\u6570\u7ec4\u751a\u81f3\u662f\u56de\u8c03\u51fd\u6570\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'class Welcome extends React.Component {\n  render() {\n    return <h1>Hello {this.props.name}</h1>;\n  }\n}\n\nconst element = <Welcome name="Sara" onNameChanged={this.handleName} />;\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0 ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," \u5c5e\u6027\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"onNameChanged")," \u65b9\u6cd5\u90fd\u80fd\u5728\u5b50\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u53d8\u91cf\u4e2d\u8bbf\u95ee\n\u5728\u5b50\u7ec4\u4ef6\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u5728\u5185\u90e8\u4e0d\u53ef\u53d8\u7684\uff0c\u5982\u679c\u60f3\u8981\u6539\u53d8\u5b83\u770b\uff0c\u53ea\u80fd\u901a\u8fc7\u5916\u90e8\u7ec4\u4ef6\u4f20\u5165\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u6765\u91cd\u65b0\u6e32\u67d3\u5b50\u7ec4\u4ef6\uff0c\u5426\u5219\u5b50\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u548c\u5c55\u793a\u5f62\u5f0f\u4e0d\u4f1a\u6539\u53d8"),(0,a.kt)("h2",{id:"\u4e09\u533a\u522b"},"\u4e09\u3001\u533a\u522b"),(0,a.kt)("p",null,"\u76f8\u540c\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e24\u8005\u90fd\u662f JavaScript \u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u4e24\u8005\u90fd\u662f\u7528\u4e8e\u4fdd\u5b58\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"props \u548c state \u90fd\u80fd\u89e6\u53d1\u6e32\u67d3\u66f4\u65b0")),(0,a.kt)("p",null,"\u533a\u522b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"props \u662f\u5916\u90e8\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684\uff0c\u800c state \u662f\u5728\u7ec4\u4ef6\u5185\u88ab\u7ec4\u4ef6\u81ea\u5df1\u7ba1\u7406\u7684\uff0c\u4e00\u822c\u5728 constructor \u4e2d\u521d\u59cb\u5316"),(0,a.kt)("li",{parentName:"ul"},"props \u5728\u7ec4\u4ef6\u5185\u90e8\u662f\u4e0d\u53ef\u4fee\u6539\u7684\uff0c\u4f46 state \u5728\u7ec4\u4ef6\u5185\u90e8\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539"),(0,a.kt)("li",{parentName:"ul"},"state \u662f\u591a\u53d8\u7684\u3001\u53ef\u4ee5\u4fee\u6539")),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lucybain.com/blog/2016/react-state-vs-pros/"},"https://lucybain.com/blog/2016/react-state-vs-pros/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904009203974158"},"https://juejin.cn/post/6844904009203974158"))))}m.isMDXComponent=!0}}]);