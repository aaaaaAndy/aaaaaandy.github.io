📆: 2019-06-12 15:49:51
🏷: #JavaScript #继承 

## 一、构造函数继承

```javascript
function Animal() {
  this.species = 'animal';
}

function Cat(name) {
  Animal.apply(this, arguments);
  
  this.name = name
}
```

借用构造函数问题： 方法都在构造函数中定义，因此函数复用就无从谈起了。而且，在超类型的原型中定义的方法，对子类型而言也是不可见的，结果所有类型都只能使用构造函数模式

## 二、`prototype`实现继承

```javascript
function Animal() {
  this.species = 'animal';
}

Animal.prototype.getSpecies = function () {
  return this.species;
}

function Cat(name) {
  this.name = name;
}

Cat.prototype = new Animal();
Cat.prototype.getName = function() {
  return this.name;
}
```

原型链的问题 原型链虽然很强大，可以用它来实现继承，但它也存在一些问题。其中，最主要的问题来自包含引用类型值的原型。

原型链的第二个问题是：在创建子类型的实例时，不能向超类型的构造函数中传递参数。实际上，应该说是没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。有鉴于此，再加上前面刚刚讨论过的由于原型中包含引用类型值所带来的问题，实践中很少会单独使用原型链。

## 三、构造函数与`prototype`组合继承

```javascript
function Animal(species) {
  this.species = species;
}

Animal.prototype.getSpecies = function () {
  return this.species;
}

function Cat(name, species) {
  Animal.call(this, species);
  this.name = name
}

Cat.prototype = new Animal();
Cat.prototype.getName = function() {
  return this.name;
}
```

无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部

## 四、原型式继承

这种方法并没有使用严格意义上的构造函数。借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。

```javascript
function object(o) {
  function F(){};
  F.prototype = o;
  return new F();
}
```

`ECMAScript 5`通过新增`Object.create()`方法规范化了原型式继承。这个方法接收两个参数：一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。在传入一个参数的情况下，`Object.create()`与`object()`方法的行为相同。

在没有必要兴师动众地创建构造函数，而只想让一个对象与另一个对象保持类似的情况下，原型式继承是完全可以胜任的。不过别忘了，包含引用类型值的属性始终都会共享相应的值，就像使用原型模式一样

## 五、寄生式继承

创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真的是它做了所有工作一样返回对象。

```javascript
function createAnother(original) {
  var clone = object(original);
  
  clone.sayHi = function() {
    console.log('hi');
  }
  
  return clone;
}
```

使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率；这一点与构造函数模式类似。

## 六、寄生组合式继承

所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。

其背后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，**我们所需要的无非就是超类型原型的一个副本而已**。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。寄生组合式继承的基本模式如下所示

```javascript
function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function Animal(species) {
  this.species = species;
}

Animal.prototype.getSpecies = function () {
  return this.species;
}

function Cat(name, species) {
  Animal.call(this, species);
  this.name = name
}

inheritPrototype(Cat, Animal);
Cat.prototype.getName = function() {
  return this.name;
}
```

这个例子的高效率体现在它只调用了一次`SuperType`构造函数，并且因此避免了在`SubType.prototype`上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用`instanceof`和`isPrototypeOf()`。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。

