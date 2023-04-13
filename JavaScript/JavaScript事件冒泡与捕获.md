📆: 2020-01-04 17:36:42
🏷: #JavaScript #事件冒泡 #事件捕获
***

## 一、`JavaScript`中的事件传播模式

在`JavaScript`中存在两种不同的事件传播模式，这得益于网景公司与微软公司的浏览器大战，其中网景公司主推捕获模式，而微软公司主推冒泡模式。所以在`IE9`及其以下的浏览器中，`IE`只支持冒泡模式，不过`IE9+`以及现在的主流浏览器都支持两种模式了。

虽然是两种不同的模式，但是他们的作用都是相同的：决定`HTML`诸多元素中接收事件的顺序，从而按顺序触发不同元素上的事件监听函数。

### 1. 捕获模式

当事件发生时，该事件从最外层元素接收到，然后依次向内层元素传播。

### 2. 冒泡模式

当事件发生时，该事件最先由内层元素接收到，然后依次向外层元素传播。

### 3. 使用方式

```javascript
DOM.addEventListener(type, handler, useCaptue);
```

其中，当`useCapture`为`true`时，表明此时注册的是一个捕获模式的事件，为`false`时，表明此时注册的是一个冒泡模式的事件。

## 二、`JavaScript`中阻止冒泡&取消默认事件

`JavaScript`中捕获和冒泡是两种行为，但是使用`e.stopPropagation()`都可以起到阻止捕获和冒泡阶段中当前事件的进一步传播。而`event.preventDefault()`是用来取消默认事件的，比如取消`a`标签的跳转事件。

还需要注意的一点是：实现`w3c`标准的浏览器中的`event`要用参数才能拿到，是运行时的临时变量，而`IE`浏览器里的`event`是全局变量，挂载在`window`上。

### 1. 阻止冒泡和捕获

`w3c`的方法是`e.stopPropagation()`，而`IE`则是使用`e.cancelBubble = true`。

```javascript
function handleClick(e) {
	// code...  
	e.stopPropagation();
	window.event.cancelBubble = true;
}
```

### 2. 取消默认事件

`w3c`的方法是`e.preventDefault()`，而`IE`则是使用`e.returnValue = false`;

```javascript
function handleClick(e) {
	// code...  
	e.preventDefault();
	window.event.returnValue = false;
}
```

## 三、`jQuery`中的阻止方法

- `JavaScript`的`return false`只会阻止默认行为，

```javascript
var dom = document.getElementById('click');
dom.onclick = function() {
	return false;
}
```

- 引入`jQuery`的话既阻止默认行为又防止对象冒泡。

```javascript
$('#click').on('click', function() {
	return false;
})
```

<!-- more -->
