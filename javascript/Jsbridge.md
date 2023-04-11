📆: 2021-02-15 17:55:22
🏷: #Jsbridge 

## 一、什么是JSBridge

主要是给JavaScript调用native功能的接口，让H5可以实现调用系统原生功能，如相机，位置，话筒等。但是JSBridge的功能不单单是调用native这么简单，实际上，JSBridge就是JavaScript与native的桥梁，它的核心是构建native与非native之间消息通信的渠道，而且这个渠道是双向的。

H5与native交互如下图：

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129120523.jpeg](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129120523.jpeg)

## 二、JSBridge实现原理

JavaScript是运行在一个单独的JavaScript Context中，由于这些环境与原生环境天生相隔，我们可以将这种情况与 RPC（Remote Procedure Call，远程过程调用）通信进行类比，将 Native 与 JavaScript 的每次互相调用看做一次 RPC 调用。

在 JSBridge 的设计中，可以把前端看做 RPC 的客户端，把 Native 端看做 RPC 的服务器端，从而 JSBridge 要实现的主要逻辑就出现了：通信调用（Native 与 JS 通信） 和句柄解析调用。

## 三、JSBridge的通信原理

JavaScript调用native主要有两种方式：**注入API** 和 **拦截UrlScheme**

### 1. 注入API

实现方式为，通过Webview提供的接口，向JavaScript的Context（window）中注入对象或方法，让JavaScript调用时，直接执行相应的native代码，达到JavaScript调用native的目的。

### 2. 拦截Url Scheme

实现方式为，H5端通过某种方式（例如iframe.src）发送URL Scheme请求，之后native拦截到请求，并根据URL Scheme所携带的参数进行相应的操作。

这种方式有一定的缺陷：

- 使用iframe.src发送请求，会有url长度的隐患

> 有些方案为了规避 url 长度隐患的缺陷，在 iOS 上采用了使用 Ajax 发送同域请求的方式，并将参数放到 head 或 body 里。这样，虽然规避了 url 长度的隐患，但是 WKWebView 并不支持这样的方式。
> 为什么选择 iframe.src 不选择 locaiton.href ？ 因为如果通过 location.href 连续调用 Native，很容易丢失一些调用。
- 创建请求，需要一定的耗时，比注入api方式实现同样的功能，耗费时间多一些

## 四、接口实现

```javascript
// native注册在window上的方法应该是这样的
window.JSBridge = {
	callHandler: function(bridgeName, params, callback) {
  // other code...    
	callback && callback(data);  
}}
```

一个调用JSBridge的封装：

```javascript
// 底层封装
function setupWebViewJavascriptBridge(callback) {
  if (window.JSBridge) {
    return callback(window.JSBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  const WVJBIframe = window.document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  window.document.documentElement.appendChild(WVJBIframe);
  setTimeout(() => {
    window.document.documentElement.removeChild(WVJBIframe);
  }, 0);
}

// 正常调用
setupWebViewJavascriptBridge((bridge) => {
  bridge.callHandler('getUserInfo', {}, (data) => {
    console.log('userInfo', data);
  })
})
```

<!-- more -->
