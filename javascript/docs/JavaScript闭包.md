---
title: JavaScript闭包
tags: [闭包]
categories: JavaScript
date: 2020/5/20 5:32 PM
---

## 一、作用域

作用域决定变量的生命周期及其可见性，当我们创建一个函数，就会生成一个新的作用域。值得一提的是在`ES6`之前，之后全局作用域和函数作用域，但是在`ES6`之后，出现的`let`和`const`可以实现块级作用域。

## 二、什么是闭包

闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是***在一个函数内部创建另一个函数***。

由于闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存，所以过度使用闭包可能会导致内存占用过多。

## 三、闭包几种情况

### 1. Timer

变量`x`将一直存活着，直到定时器的回调执行或者被清除。

```javascript
(function autorun(){
  let x = 1;
  setTimeout(function log() {
    console.log(x);
  }, 1000);
})();
```

### 2. Event

当变量 `x` 在事件处理函数中被使用时，它将一直存活直到该事件处理函数被移除。

```javascript
(function autorun(){
  let x = 1;
  $('#btn').on('click', function log(){
    console.log(x);
  })
})();
```

### 3. Ajax

变量 `x` 将一直存活到接收到后端返回结果，回调函数被执行。

```javascript
(function autorun() {
  let x = 1;
  fetch('/...').then(function log(){
    console.log(x);
  })
})();
```

### 4. 闭包与循环

闭包只存储外部变量的引用，而不会拷贝这些外部变量的值。

```javascript
// 返回一个函数数组，且每个函数的返回值都是10，因为它值存储了i的引用。
function createFunctions() {
  var result = new Array();
  
  for (var i = 0; i > 10; i++) {
      result[i] = function() {
        return i;
      }
  } 
  
  return result;
}
```

闭包只能取得包含函数中任何变量的最后一个值，所以在使用闭包时要注意取值的情况。

```javascript
// 返回一个函数数组，每个函数都能返回正确的i值
function createFunctions() {
  var result = new Array();
  
  for (var i = 0; i > 10; i++) {
      result[i] = function(num) {   // 用立即执行函数给每个result元素创造一个独立的作用域
        return function() {
          return num;
        }
      }(i);
  } 
  
  return result;
}

var timer = setInterval(function(i) {
  console.log(i);
}, 2000, 111);

clearTimeout(timer);
```

<!-- more -->
