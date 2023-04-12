🏷: #JavaScript #prototype

原型模式是JS实现继承的一种方式。**所有的函数都有一个`prototype`属性，通过`new`生成一个对象时，`prototype`会被实例化为对象的属性。**所有的引用类型都有一个`__proto__`指向其构造函数的`prototype`。原型链的话，指的就是当访问一个引用类型时，如果本身没有这个属性或方法，就会通过`__proto__`属性在父级的原型中找，一级一级往上，直到最顶层为止。

## 一、原型

​	`Father.prototype` 就是原型，它是一个对象，我们也称它为原型对象。

### 1. 原型的作用是什么

​	原型的作用，就是共享方法。我们通过 `Father.prototype.method` 可以共享方法，不会反应开辟空间存储方法。

### 2. 原型中的this指的是什么

​	原型中this的指向是实例。

## 二、原型链

### 1. 什么是原型链

​		原型与原型层层相连的过程即为原型链。

### 2. 原型链的应用

​		对象可以使用构造函数prototype原型对象的属性和方法，就是因为对象有\_\_proto\_\_原型的存在。每个对象都有\_\_proto\_\_原型的存在。

```javascript
function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.coding = function(){
    console.log('我在搬砖',this.name);
};

let per = new Person('andy',18);
console.log(per.__proto__ === Person.prototype); //true
```

## 三、`new`操作符的执行过程

1. 创建一个空对象。
2. 将这个空对象的`__proto__`指向构造函数的`prototype`。
3. 将构造函数的`this`指向这个对象。
4. 执行构造函数中的代码。

实现一个`new`操作符，需要注意构造函数是可以有返回值的，而且当返回值是基本数据类型的时候，通过`new`操作符获取到的是构造函数的实例，但是如果返回值是一个新对象的时候，通过`new`操作符获取到的就不再是其对应的实例，而是`return`出来的这个对象。

```javascript
// 实现1
function objectFactory() {
  let Constructor = [].shift.call(arguments);
  const obj = new Object();  
  obj.__proto__ = Conctructor.prototype;
  const result = Constructor.call(obj,...arguments);
  return typeof result === 'object' ? result : obj;
}

// 实现2
function myNew(Obj,...args){
  var obj = Object.create(Obj.prototype);//使用指定的原型对象及其属性去创建一个新的对象
  const result = Obj.apply(obj,args); // 绑定 this 到obj, 设置 obj 的属性
  return typeof result === 'object' ? result : obj; // 返回实例
}
```

## 四、为什么原型链的尽头是`null`

原型链是指**对象的**原型链，所以原型链上的所有节点都是对象，不能是字符串、数字、布尔值等原始类型。

另外，规范要求原型链必须是**有限长度**的(从任一节点出发，经过有限步骤后必须到达一个终点。显然也不能有环。)

那么，应该用什么对象作为终点呢？很显然应该用一个特殊的对象。

好吧，`Object.prototype`确实是个特殊对象，我们先假设用它做终点。那么考虑一下，当你取它的原型时应该怎么办？即

```javascript
Object.prototype.__proto__;
```

应该返回什么？

取一个对象的属性时，可能发生三种情况：

1.  如果属性存在，那么返回属性的值。
2.  如果属性不存在，那么返回undefined。
3.  不管属性存在还是不存在，有可能抛异常。

我们已经假设`Object.prototype`是终点了，所以看起来不能是情况1。另外，抛出异常也不是好的设计，所以也不是情况3。那么情况2呢，它不存在原型属性，返回undefined怎么样？也不好，因为返回undefined一种解释是原型不存在，但是也相当于原型就是undefined。这样，在原型链上就会存在一个非对象的值。

所以，最佳选择就是null。一方面，你没法访问null的属性，所以起到了终止原型链的作用；另一方面，null在某种意义上也是一种对象，即空对象，因为null一开始就是为表示一个“空”的对象存在的。这样一来，就不会违反“原型链上只能有对象”的约定。

所以，“原型链的终点是null”虽然不是必须不可的，但是却是最合理的。

