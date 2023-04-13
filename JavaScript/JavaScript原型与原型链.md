🏷: #JavaScript #prototype
***

原型模式是JS实现继承的一种方式。**所有的函数都有一个`prototype`属性，通过`new`生成一个对象时，`prototype`会被实例化为对象的属性。**所有的引用类型都有一个`__proto__`指向其构造函数的`prototype`。原型链的话，指的就是当访问一个引用类型时，如果本身没有这个属性或方法，就会通过`__proto__`属性在父级的原型中找，一级一级往上，直到最顶层为止。

## 一、原型

`JavaScript` 常被描述为一种基于原型的语言——每个对象拥有一个原型对象

当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾

准确地说，这些属性和方法定义在Object的构造器函数（constructor functions）之上的`prototype`属性上，而非实例对象本身

下面举个例子：

函数可以有属性。 每个函数都有一个特殊的属性叫作原型`prototype` 

```javascript
function doSomething(){}
console.log( doSomething.prototype );
```

控制台输出

```javascript
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

上面这个对象，就是大家常说的原型对象

可以看到，原型对象有一个自有属性`constructor`，这个属性指向该函数，如下图关系展示

 ![](https://static.vue-js.com/56d87250-725e-11eb-ab90-d9ae814b240d.png)

​原型的作用，就是共享方法。我们通过 `Father.prototype.method` 可以共享方法，不会反应开辟空间存储方法。

​原型中this的指向是实例。

## 二、原型链

### 1. 什么是原型链

​原型与原型层层相连的过程即为原型链。

### 2. 原型链的应用

​对象可以使用构造函数prototype原型对象的属性和方法，就是因为对象有\_\_proto\_\_原型的存在。每个对象都有\_\_proto\_\_原型的存在。

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

原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法

在对象实例和它的构造器之间建立一个链接（它是`__proto__`属性，是从构造函数的`prototype`属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法

下面举个例子：

```javascript
function Person(name) {
    this.name = name;
    this.age = 18;
    this.sayName = function() {
        console.log(this.name);
    }
}
// 第二步 创建实例
var person = new Person('person')
```

根据代码，我们可以得到下图

 ![](https://static.vue-js.com/60825aa0-725e-11eb-85f6-6fac77c0c9b3.png)

下面分析一下：

- 构造函数`Person`存在原型对象`Person.prototype`
- 构造函数生成实例对象`person`，`person`的`__proto__`指向构造函数`Person`原型对象
- `Person.prototype.__proto__` 指向内置对象，因为 `Person.prototype` 是个对象，默认是由 `Object `函数作为类创建的，而 `Object.prototype` 为内置对象

- `Person.__proto__` 指向内置匿名函数 `anonymous`，因为 Person 是个函数对象，默认由 Function 作为类创建

- `Function.prototype` 和 `Function.__proto__ `同时指向内置匿名函数 `anonymous`，这样原型链的终点就是 `null`

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

## 五、总结

下面首先要看几个概念：

`__proto__`作为不同对象之间的桥梁，用来指向创建它的构造函数的原型对象的

 ![](https://static.vue-js.com/6a742160-725e-11eb-ab90-d9ae814b240d.png)

每个对象的`__proto__`都是指向它的构造函数的原型对象`prototype`的

```javascript
person1.__proto__ === Person.prototype
```

构造函数是一个函数对象，是通过 `Function `构造器产生的

```javascript
Person.__proto__ === Function.prototype
```

原型对象本身是一个普通对象，而普通对象的构造函数都是`Object`

```javascript
Person.prototype.__proto__ === Object.prototype
```

刚刚上面说了，所有的构造器都是函数对象，函数对象都是 `Function `构造产生的

```javascript
Object.__proto__ === Function.prototype
```

`Object `的原型对象也有`__proto__`属性指向`null`，`null`是原型链的顶端

```javascript
Object.prototype.__proto__ === null
```

下面作出总结：

- 一切对象都是继承自`Object`对象，`Object` 对象直接继承根源对象` null`

- 一切的函数对象（包括 `Object` 对象），都是继承自 `Function` 对象

- `Object` 对象直接继承自 `Function` 对象

- `Function`对象的`__proto__`会指向自己的原型对象，最终还是继承自`Object`对象




## 参考文献

- https://juejin.cn/post/6870732239556640775#heading-7
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
