---
sidebar_position: 2
---

## `ES6`

#### 6.1 Promise(基本上要求可以手写Promise.all方法)

#### 6.2 箭头函数和普通函数有什么区别

##### 6.2.1 箭头函数语法更加简洁清晰

```javascript
// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);

// 正常函数写法
var result = [2, 5, 1, 4, 3].sort(function (a, b) {
  return a - b;
});

// 箭头函数写法
var result = [2, 5, 1, 4, 3].sort((a, b) => a - b);
```

##### 6.2.2 箭头函数不会创建自己的`this`

> 箭头函数不会创建自己的`this`，所以它没有自己的`this`，它只会从自己的作用域链的上一层继承`this`。

​		箭头函数没有自己的`this`， 定义时**（注意，是定义时，不是调用时）所处的**外层执行环境的`this`**，并继承这个`this`值。所以，箭头函数中`this`的指向在它被定义的时候就已经确定了，之后永远不会改变。

##### 6.2.3 箭头函数继承而来的this指向永远不变

```javascript
var id = 'GLOBAL';
var obj = {
  id: 'OBJ',
  a: function(){
    console.log(this.id);
  },
  b: () => {
    console.log(this.id);
  }
};

obj.a();    // 'OBJ'
obj.b();    // 'GLOBAL'
```

​		上面的例子，就完全可以说明箭头函数继承而来的`this`指向永远不变。对象`obj`的方法`b`是使用箭头函数定义的，这个函数中的`this`就**永远指向**它定义时所处的全局执行环境中的`this`，即便这个函数是作为对象`obj`的方法调用，`this`依旧指向`Window`对象。

##### 6.2.4 .call()/.apply()/.bind()无法改变箭头函数中this的指向

```javascript
var id = 'Global';
// 箭头函数定义在全局作用域
let fun1 = () => {
    console.log(this.id)
};

fun1();     // 'Global'
// this的指向不会改变，永远指向Window对象
fun1.call({id: 'Obj'});     // 'Global'
fun1.apply({id: 'Obj'});    // 'Global'
fun1.bind({id: 'Obj'})();   // 'Global'
```

##### 6.2.5 箭头函数不能作为构造函数使用

​		因为箭头函数没有自己的`this`，它的`this`其实是继承了外层执行环境中的`this`，且`this`指向永远不会随在哪里调用、被谁调用而改变，所以箭头函数不能作为构造函数使用，或者说构造函数不能定义成箭头函数，否则用`new`调用时会报错！

##### 6.2.6 箭头函数没有自己的arguments

##### 6.2.7 箭头函数没有原型prototype

##### 6.2.8 箭头函数不能用作Generator函数，不能使用yeild关键字

#### 6.3 Map

Map的键和值可以是任何数据类型，键值对按照插入顺序排列，如果插入重复的键值，后面的键值会覆盖前者，

| 对比项                       | 映射对象Map | Object对象 |
| ---------------------------- | ----------- | ---------- |
| 存储键值对                   | √           | √          |
| 遍历所有的键值对             | √           | √          |
| 检查是否包含指定的键值对     | √           | √          |
| 使用字符串作为键             | √           | √          |
| 使用Symbol作为键             | √           | √          |
| 使用任意对象作为键           | √           |            |
| 可以很方便的得知键值对的数量 | √           |            |



#### 6.4 Set

在一些业务场景中，我们并不需要集合维护一个有序的状态，甚至有些场景需要无序集合，因此ES6里加入了无序集合Set和其的Weak版本WeakSet。

| 对比项     | Array      | Set          |
| ---------- | ---------- | ------------ |
| 元素序列   | 有序       | 无序         |
| 元素重复性 | 元素可重复 | 元素不可重复 |








## JavaScript 里最大的安全的整数为什么是2的53次方减一

## JavaScript里为什么0.1+0.1不等于0.3

http://bartaz.github.io/ieee754-visualization/

## H5拉起App，如果没有安装跳转应用市场

## Object.defineProperties都有哪些参数，以及参数解释

## requestAnimation

## 如何遍历对象，有何不同

## 原生实现insertAfter

## 实现一个EventEmitter

## node怎么起一个服务

## node中body-parse有什么作用
 
## web component

## 怎么用原生js实现页面跳转

## 最近在看什么新技术

## TODO

-   [ ] `symbol`、`bigInt` 详情
-   [ ] `Set`、`map`、`weakSet`、`weakMap`详情
-   [ ] 字符串1加上数字1、字符串1减去数字1
