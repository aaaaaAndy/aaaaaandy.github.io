---
title: 不同设备的click
tags: [click]
categories: JavaScript
date: 2019/3/25 3:49 PM
---

## 一、`onclick`与`click`

`onclick`是绑定事件，`click`是方法，`click`本身是方法作用是触发`onclick`事件，只要执行了元素的`click()`方法，就会触发`onclick`事件。

```javascript
$("#btn1").click(function(){
    $("#btn2").click();
});
```

## 二、`click`与`tap`

`click`为了能区分单击与双击在每次点击之后加了300ms的延迟，但是这种延迟会造成反应迟钝的感觉。为了解决这一问题，可以使用`zepto`的`tap`事件，`singleTap`和`doubleTap` 分别代表单次点击和双次点击。在使用zepto框架的tap来移动设备浏览器内的点击事件，来规避`click`事件的延迟响应时，有可能出现点透的情况，即点击会触发非当前层的点击事件。

`github`上有一个叫做`fastclick`的库，它也能规避移动设备上`click`事件的延迟响应，[fastclick](https://github.com/ftlabs/fastclick) 将它用`script`标签引入页面（该库支持AMD，于是你也可以按照AMD规范，用诸如`require.js`的模块加载器引入），并且在`dom ready`时初始化在`body`上。实践开发中发现，当元素绑定`fastclick`后，`click`响应速度比`tap`还要快一点点。

## 三、`touch`事件

`touch`事件`touch`是针对触屏手机上的触摸事件。现今大多数触屏手机webkit内核提供了touch事件的监听，让开发者可以获取用户触摸屏幕时的一些信息。其中包括：`touchstart`,`touchmove`,`touchend`,`touchcancel` 这四个事件，`touchstart`,`touchmove`,`touchend`事件可以类比于`mousedown`，`mouseover` ，`mouseup`的触发。

- `touchstart` ： 当手指触摸到屏幕会触发；
- `touchmove` ： 当手指在屏幕上移动时，会触发；
- `touchend` ： 当手指离开屏幕时，会触发；
- `touchcancel`：许多人不知道它在什么时候会被触发而忽略它，其实当你的手指还没有离开屏幕时，有系统级的操作发生时就会触发`touchcancel`，例如`alert`和`confirm`弹框，又或者是`android`系统的功能弹窗。

在一个移动端设备，手指点击一个元素，会经过：`touchstart` –> `touchmove` -> `touchend` —> `click` 几个过程。

## 四、点透问题

```html
<div id="div2"> 
    <div id="div1">
        click
    </div>
</div>
```

```javascript
$('.div1').addEventListener('touchstart', function(e) {
  $('.div1').style.display = 'none';
})

$('.div2').onclick = function() { 
  console.log('click事件')
}
```

其中`div1`覆盖在 `div2` 之上， 按理说点击 `div1` 的时候，`div1` 会阻挡所有的事件，事件不会传递给 `div2`，当点击 `div1` 的时候，实际上 `div2` 也发生了点击事件，即上面的输出结果为 `div1` 消失， 输出 `click事件` 莫名被点击了, 这就是点透。

这是因为：当手指触摸到屏幕的时候，系统生成两个事件，一个是`touch` 一个是`click`，`touch`先执行，`touch`执行完成后，A从文档树上面消失了，而且由于移动端`click`还有延迟200-300ms的关系，当系统要触发`click`的时候，发现在用户点击的位置上面，目前离用户最近的元素是B，所以就直接把`click`事件作用在B元素上面了。

那么怎么去解决这个问题呢？其实系统提供了先触发的`touch`事件去取消系统生成的`click`事件，所以只要在`touch`事件的某个处理函数中 执行 `e.preverDefault`即可， 一般我们在`touchend`中执行：

```javascript
$('.div1').addEventListener('touchstart', function(e) {
    $('.div1).style.display = 'none';
    e.preventDefault();
})
```

其他解决方案：

1. 使用系统的`click`事件;
2. 当`touch`事件发生后持续大于300ms的事件再让遮罩层消失。

<!-- more -->
