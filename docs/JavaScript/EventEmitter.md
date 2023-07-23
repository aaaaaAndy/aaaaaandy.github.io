---
tags:
  - EventEmitter
---

`EventEmitter` 是 `NodeJS` 的核心模块 `events` 中的类，用于对 `NodeJS` 中的事件进行统一管理，用 `events` 特定的 `API` 对事件进行添加、触发和移除等等，核心方法的模式类似于发布订阅

## 一、Node 中的 `EventEmitter`

`EventEmitter`本质上是一个观察者模式的实现。

观察者模式：

**_它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。_**

```javascript
// Node 中的 EventEmitter 简单用法
let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('show', function () {
  console.log('this is show callback');
});

eventEmitter.emit('show');
```

`eventEmitter`是`EventEmitter`模块的一个实例，`eventEmitter`的`emit`方法，发出`show`事件，通过`eventEmitter`的`on`方法监听，从而执行相应的函数。 ``

## 二、简单实现一个 EventEmitter

接下来我们简单实现一个 EventEmitter 模块的基础功能 emit 和 on。

```javascript
class EventEmitter {
  constructor() {
    this._events = {}; // 保存事件
  }

  /**
   * 添加事件监听
   * @param  {String}   eventName 监听的对象名称
   * @param  {Function} callback  事件处理函数
   */
  on(eventName, callback) {
    if (!this._events) {
      this._events = {};
    }

    if (!this._events[eventName]) {
      this._events[eventName] = []; // 每个监听的对象，要处理的事件存放在一个数组里
    }

    this._events[eventName].push(callback); // 添加监听事件
  }

  /**
   * 触发事件监听函数
   * @param  {String}    eventName 监听的对象名称
   * @param  {...[type]} args      传入的参数
   */
  emit(eventName, ...args) {
    if (this._events[eventName]) {
      for (var i = 0; i < this._events[eventName].length; i++) {
        this._events[eventName][i](...args);
      }
    }
  }

  /**
   * 删除事件监听
   * @param eventName
   * @param callback
   */
  off(eventName, callback) {
    if (callback) {
      this._events[eventName] = this._events[eventName].filter(
        (fn) => fn !== callback
      );
    } else {
      delete this._events[eventName];
    }
  }

  /**
   * 只执行一次事件监听
   * @param eventName
   * @param callback
   */
  once(eventName, callback) {
    let onceFun = (...args) => {
      callback.apply(this, args);
      this.off(eventName, onceFun);
    };
    this.on(eventName, onceFun);
  }
}
```

## 三、EventEmitter 模块的异常处理

为什么要添加异常处理模块？因为 node 中有一个特殊的事件 error，如果异常没有被捕获，就会触发 process 的 uncaughtException 事件抛出，如果没有注册该事件的监听器，则 Node.js 会在控制台打印该异常的堆栈信息，并结束进程。

### 1. try…catch 方法

通过 try…catch 可以来捕获错误：

```javascript
try {
  let x = x;
} catch (e) {
  console.log(e);
}
```

如上，赋值语句的错误会被捕获，但是**_try…catch 不能捕获非阻塞或者异步函数里的异常_**。

```javascript
try {
  process.nextTick(function () {
    let x = x;
  });
} catch (e) {
  console.log(e);
}
```

如上，因为 process.nextTick 是异步的，因此在 process.nextTick 内部的错误不能被捕获。

### 2. process.on(‘uncaughtException’) 方法

node 中提供了一个最外层的兜底的捕获异常的方法。非阻塞或者异步函数中的异常都会抛出到最外层，如果异常没有被捕获，那么会暴露出来，被最外层的 process.on(‘uncaughtException’)所捕获。

```javascript
try {
  process.nextTick(function(){
     let x = x; //第二个x在使用前未定义，会抛出异常
  },0);
} catch (e) {
  console.log('该异常已经被捕获');
  console.log(e);
}
process.on('uncaughtException',function(err){console.log(err)}
```

## 四、EventEmitter 源码实现

```javascript title="EventEmitter源码"
/**
 * EventEmitter 构造函数
 */
function EventEmitter() {
  //私有属性，保存订阅方法
  this._events = Object.create(null);
}

// 默认最大监听数
EventEmitter.defaultMaxListeners = 10;

/**
 * on方法，该方法用于订阅事件，在旧版本的node.js中是addListener方法，它们是同一个函数
 * @param {String} type       监听的对象名称
 * @param {Function} listener 监听的回调函数
 * @param {Boolean} flag      是否先于其他同类监听事件执行
 */
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function (
  type,
  listener,
  flag
) {
  //保证存在实例属性
  if (!this._events) this._events = Object.create(null);

  if (this._events[type]) {
    if (flag) {
      //从头部插入
      this._events[type].unshift(listener);
    } else {
      this._events[type].push(listener);
    }
  } else {
    this._events[type] = [listener];
  }
  //绑定事件，触发newListener
  if (type !== 'newListener') {
    this.emit('newListener', type);
  }
};

/**
 * emit方法: 将订阅方法取出执行，使用call方法来修正this的指向，使其指向子类的实例。
 * @param  {String}    type 监听的对象名称
 * @param  {...[type]} args 参数传递
 */
EventEmitter.prototype.emit = function (type, ...args) {
  if (this._events[type]) {
    this._events[type].forEach((fn) => fn.call(this, ...args));
  }
};

/**
 * once方法，它的功能是将事件订阅“一次”，当这个事件触发过就不会再次触发了。
 * 其原理是将订阅的方法再包裹一层函数，在执行后将此函数移除即可。
 * @param  {String} type     监听的对象名称
 * @param  {Function} listener 监听的回调函数
 */
EventEmitter.prototype.once = function (type, listener) {
  let _this = this;

  // 中间函数，在调用完之后立即删除订阅
  function only() {
    listener();
    _this.removeListener(type, only);
  }
  // origin保存原回调的引用，用于remove时的判断
  only.origin = listener;
  this.on(type, only);
};

/**
 * off方法即为退订，原理同观察者模式一样，将订阅方法从数组中移除即可。
 * @param  {String}   type     监听的对象名称
 * @param  {Function} listener 监听的回调函数
 */
EventEmitter.prototype.off = EventEmitter.prototype.removeListener = function (
  type,
  listener
) {
  if (this._events[type]) {
    // 过滤掉退订的方法，从数组中移除
    this._events[type] = this._events[type].filter((fn) => {
      return fn !== listener && fn.origin !== listener;
    });
  }
};
```
