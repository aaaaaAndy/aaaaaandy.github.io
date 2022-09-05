---
title: JavaScript高级程序设计-面向对象
tags: [JavaScript, 高程3]
categories: JavaScript高级程序设计
date: 2018-08-18 11:51:34
---

面向对象的语言都有一个标志，那就是它们都有类的概念，而通过类可以创建任意多个具有相同属性和方法的对象。但是ECMAScript中没有类的概念，因此它的对象也与基于类的语言中的对象有所不同。

# 创建对象

## 1. 新建对象实例

通过new一个对象实例：

```javascript
var person = new Object();
person.name = 'andy';
person.age = 29;

person.sayName = function () {
    alert(this.name);
}
```

## 2. 对象字面量

通过对象字面量的方式：

```javascript
var person = {
    name: 'andy',
    age: 29,

    sayName: function () {
        console.log(this.name)
    }
}
```

## 3. 工厂模式

这种模式抽象了创建具体对象的过程。考虑到在ECMAScript中无法创建类，开发人员就发明了一种函数，***用函数来封装以特定接口创建对象的细节***。

```javascript
function createPerson(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        alert(o.name);
    }
    return o;
}
var person1 = createPerson('andy', 21);
```

函数createPerson()能够根据接受的参数来构建一个包含所有必要信息的person对象。可以无数次地调用这个函数，而每次它会返回一个包含两个属性一个方法的对象。***工厂模式虽然解决了创建多个类似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）***。随着JavaScript的发展，又一个新模式出现了。

## 4. 构造函数模式

ECMAScript中的构造函数可以用来创建特定类型的对象。***构造函数本身也是函数，只不过可以用来创建对象而已，且构造函数名要首字母大写***。像Object和Array这样的原生构造函数，在运行时会自动出现在执行环境中。此外，也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。

```javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        alert(this.name);
    }
}
var per = new Person('andy', 21);
per.sayName();    // andy
```

要创建Person对象的新实例，必须使用new操作符。以这种方式调用构造函数实际上会经历以下4个步骤：
* 创建一个新对象 ；
* 将构造函数的作用域赋给新对象；
* 执行构造函数中的代码；
* 返回新对象。

构造函数创建的实例，都有一个constructor属性，改属性指向他们的构造函数，即：

```javascript
console.log(per.constructor == Person);    // true
```

还可以用instanceof操作符来进行对象检测：
```javascript
console.log(per instanceof Object);    // true 所有对象均继承自object
console.log(per instanceof Person);    // true
console.log(per instanceof String);    // false
```

构造函数模式虽然好用，但也并非没有缺点。***使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。每定义一个函数，也就实例化了一个对象***。以这种方式创建函数，会导致不同的作用域链和标识符解析，但创建Function新实例的机制仍然是相同的。因此，不同实例上的同名函数是不相等的。

```javascript
console.log(per1.sayName === per2.sayName);    // false
```

创建两个完全同样任务的Function实例的确没有必要；况且有this对象在，根本不用再执行代码前就把函数绑定到特定对象上面。所以这就促使我们可以使用原型模式来自定义对象。

## 5. 原型模式

### a. 原型语法

我们创建的每一个函数都有一个prototype属性，这个属性是一个指针，指向一个对象。***而这个对象的用途是包含由特定类型的所有实例共享的属性和方法***。使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。换句话说，不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中：

````javascript
function Person() {
}
Person.prototype.name = 'andy';
Person.prototype.age = 13;
Person.prototype.sayName = function () {
    console.log(this.name);
}


var per1 = new Person();
var per2 = new Person();
per1.sayName();    // andy
per2.sayName();    // andy

per1.name = 'qiqi';
per1.sayName();    // qiqi
````

在此，我们将sayName()方法的所有属性直接添加到了Person的prototype属性中，构造函数编程了空函数。即使如此，也仍然可以通过调用构造函数来创建新对象，而且新对象还会具有相同的属性和方法。但与构造函数模式不同的是，新对象的这些属性和方法是由所有实例共享的。也就是说per1和per2访问的都是同一组属性和同一个sayName()函数。

无论什么时候，只要创建了一个函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象。***在默认情况下，所有原型对象都会自动获得一个constructor属性，这个属性包含一个指向prototype属性所在函数的指针***。以前边例子来说，Person.prototype.constructoy指向Person。通过这个构造函数，我们还可继续为原型对象添加其他属性和方法。

### b. 几种操作符
* isPrototypeOf() 确定对象之间是否存在关系

```javascript
console.log(Person.prototype.isPrototypeOf(person1));    // true
```
* getPrototypeof() 返回prototype的值

```javascript
console.log(Object.getPrototypeOf(person1) === Person.prototype);    // true
console.log(Object.getPrototypeOf(person1).name);    // andy
```
* hasOwnProperty() 用来检测一个属性是存在于实例中，还是存在于原型中

```javascript
console.log(per1.hasOwnProperty('name'));    // false

per1.name = 'qiqi';
console.log(per1.hasOwnProperty('name'));    // true
```
* in 只要通过对象能够访问到属性就返回true，不管是在实例中还是在原型中

```javascript
console.log('name' in per1);    // true
console.log('name' in Person);    // true
```

* hasPrototypeProperty() 判断属性是否在原型上，如是则返回真，否则返回假，其具体实现还是依靠in操作符和hasOwnProperty()

```javascript
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}
```


* delete 该操作符可以完全删除实例属性，从而让我们能够访问原型中的属性

```javascript
per1.name = 'qiqi';
console.log(per1.name);     // qiqi  访问实例上的属性
delete per1.name;           // 删除实例per1上的name属性
console.log(per1.name);     // 不会输出qiqi，因为per1上的name属性已经被删除
```

* for - in 返回的是所有能够通过对象访问的，可枚举的属性，屏蔽了原型中不可枚举属性，但实例属性的不可枚举属性仍会返回

* Object.keys() 返回对象上所有可枚举的实例属性

* Object.getOwnPropertyNames() 返回所有实例属性，无论它是否可枚举

***ECMAScript 5也将constructor和prototype属性的[[enumerable]]特性设置为false, 但并不是所有浏览器都按此实现。***

***由于在原型中查找值是一次搜索过程，因此我们对原型对象所做的任何修改都能立即从实例上反映出来，即使是先创建了实例后修改原型也照样如此***。

### c. 更简单的原型语法

在前面的例子中，每添加一个属性和方法就要敲一遍prototype，为了减少不必要的输入可以采用以下的写法：
```javascript
function Person() {
}
Person.prototype = {
    constructor: Person,    // 不添加的话constructor会变化，此处为了使该指针指向原型
    name: 'andy',
    age: 21,
    sayName: function() {
        console.log(this.name);
    }
}
```

**其实这种写法强烈不建议使用，该写法相当于完全覆盖了默认的原型对象，不仅改变了constructor的指向，还有可能切断已有的连接。其改变constructor的指向是因为赋给原型对象的是一个新的对象 ，这个新对象有自己的constructor指向，指向了object，所以就冲掉了默认的constructor**。

原型模式并不是没有缺点。首先，***它省略了为构造函数传递初始化参数这一环节，结果所有实例在默认情况下都取得相同的属性值***。虽然这会在某种程度上带来一些不方便，但这不是原型的最大问题。***原型模式的最大问题是由其共享的本性导致的***。

## 6. 组合使用构造函数和原型模式

结合以上各种优点缺点，在自定义对象的时候可以采用组合使用的方式! ***即使用构造函数模式定义实例属性，使用原型模式定义方法和共享属性***。这种混成模式还支持向构造函数传递参数：

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
}
```

## 7. 动态原型模式

该方式将所有信息都封装在了构造函数中，而通过在构造函数中初始化原型 ，又保持了同时使用构造函数和原型的优点。该方式只会在初次调用构造函数时才会执行，此后，原型已经完成初始化便不再执行：

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  
  if (typeof this.sayName !== "function") {
      Person.prototype.sayName = function() {
        alert(this.name);
      }
  } 
}
```

***使用动态原型模式时，不能使用对象字面量重写原型，因为这会切断现有实例与新原型之间的联系。***

## 8. 寄生构造函数模式

这种模式的基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象。该方法除了使用new操作符并把使用的包装函数叫做构造函数之外，跟工厂模式其实并没有什么不同。

```javascript
function Person(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        alert(o.name);
    }
    return o;
}
var person1 = new Person('andy', 21);
person1.sayName();
```

## 9. 稳妥构造函数模式

所谓稳妥对象，指的是没有公共属性，而且其方法也不能使用this的对象，稳妥对象最适合在一些安全的环境中。

稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同
 * 一是新创建对象的实例方法不引用this；
 * 二是不适用new操作符调用构造函数

 ```javascript
function Person(name, age) {
  var o = new Object();
  o.sayName = function() {
    alert(name);
  }
  return o;
}

var person1 = Person('andy', 21)
```

此种模式下，除了调用sayName方法外，没有其他别的方法可以访问传入到构造函数中的原始数据，所以稳妥构造函数模式是极其安全的。

# 继承

继承是面向对象语言中一个最为津津乐道的概念，许多面向对象语言都支持两种继承方式：接口继承和实现继承。接口继承只继承方法签名，而实现继承则继承实际的方法。因为函数没有签名，所以ECMAScript中无法实现接口继承，只支持实现继承，而且其实实现继承主要是依靠原型链来实现。

## 1. 原型链

其基本思想是，利用原型链让一个引用类型继承另一个引用类型的属性和方法。

```javascript
function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function() {
    return this.property;
}
function SubType() {
    this.subproperty = false;
}
SubType.prototype = new SuperType();    // 原型链继承
SubType.prototype.getSubValue = function() {
    return this.subproperty;
}
var ins = new SubType();
console.log(ins.getSubValue());
```
以上代码定义了两个类型：Supertype和SubType。每个类型分别有一个属性和一个方法。他们的主要区别是SubType继承了SuperType，而继承是通过创建SuperType的实例，并将该实例赋给SubType.prototype实现的。实现的本质是重写原型对象，代之以一个新类型的实例。换句话说，原来存在于SuperType的实例中的所有属性和方法，现在也存在于SubType中了 。确立了继承关系之后，给SubType.prototype添加了一个方法。

需要注意，现在ins.constructor指向的是SuperType，因为constructor被重写了。

***所有函数的默认原型都是object***

原型链的问题：
* 最主要还是属性共享的问题，包含引用类型值的原型属性会被所有实例共享。
* 在创建子类的实例时，不能向超类型的构造函数中传递参数。

## 2. 借用构造函数

在解决原型链中包含引用类型值所带来的问题中，开发人员开始使用一种叫做借用构造函数的技术。这种技术的基本思想相当简单，即在子类型构造函数的内部调用超类型构造函数。别忘了，函数只不过是在特定环境中执行代码的对象，因此通过使用apply()和call()方法也可以在新创建的对象上执行构造函数：

```javascript
function SuperType(name) {
    this.name = name;  
    this.colors = ['red', 'blue', 'black'];
}
function SubType() {
    // 继承了SuperType，还传递了参数
    SuperType.call(this, 'andy');
}
```

如果仅仅是借用构造函数，那么所有的方法都在构造函数中定义，因此函数复用也就无从谈起了，而且超类型中定义的方法，对于子类型而言也是不可见的，结果所有类型都只能使用构造函数模式了。

## 3. 组合继承

组合继承，有时候也叫伪经典继承，指的是将原型链和借用构造函数的技术组合到一起，从而发挥二者之长的一种继承方式。其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数的复用，又能保证每个实例都有它自己的属性：

```javascript
function SuperType(name) {
    this.name = name;
    this.colors = ['red',  'blue', 'black'];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
}
function SubType() {
    // 继承属性
    SuperType.call(this, name);
    this.age = age;
}
// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayName = function () {
    console.log(this.name);
}
```

## 4. 原型式继承

```javascript
function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
```

如上代码，从本质上讲，object()对传入其中的对象执行了一次浅复制。

ECMAScript 5通过新增Object.create()方法规范了原型式继承，在传入一个参数的情况下，Object.create()方法与object()方法功能是相同的。Object.create()方法的第二个参数与Object.defineProperties()方法的第二个参数格式相同。

***在没有必要兴师动众地创建构造函数，而只想让一个对象与另一个对象保持类似的情况下，原型式继承是完全可以胜任的。但是，包含引用类型值的属性始终都会共享其属性值，就像使用原型模式就一样***

## 5. 寄生式继承

其思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后返回该对象。

```javascript
function createAnother(original) {
  var clone = object(original);     // 通过调用函数来创建一个新对象
  clone.sayHi = function() {        // 增强这个对象
    alert('hi');
  }
  return clone;                     // 返回这个对象
}
```

使用这种方式来实现继承，会由于不能做到函数复用而降低效率，这一点与构造函数模式类似。

## 6. 寄生组合式继承

通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。

组合继承需要调用两次SuperType的构造函数，但是我们修改一下方法的继承，如下，就可以只调用一次:

```javascript
function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function() {
  alert(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);
  
  this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
  alert(this.age);
}
```

<!-- more -->
