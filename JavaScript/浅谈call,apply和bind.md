📆: 2021-04-22 12:15:45
🏷: #call #apply #bind
***

如果你对`JavaScript`对象有研究的话你应该知道，在`JavaScript`中，函数也是一种对象。那么既然函数也是对象的话，它就存在属于它的方法：`call`，`apply`, `bind`等。这些方法都是为了改变函数运行时的上下文`（context）`而存在的，换句话说，就是为了改变函数体内部 `this` 的指向。`JavaScript` 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。

## 一、区别

### 1. `bind` 方法

`call`和`apply`改变了函数的`this`,并且执行了该函数。`bind`只是改变了函数的`this`，并返回一个函数，但不执行该函数。

```javascript
var fn = func.bind(window);
fn();
```

### 2. `apply`，`call` 的区别

对于 `apply`、`call` 二者而言，作用完全一样，只是接受参数的方式不太一样。`apply`接受一个数组作为被调用函数的参数，`call`接受不定量的参数作为被调用函数的参数。

```javascript
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])
```

从上面可以看到，`apply`、`call`、`bind`三者的区别在于：

- 三者都可以改变函数的`this`对象指向
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`
- 三者都可以传参，但是`apply`是数组，而`call`是参数列表，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind `是返回绑定this之后的函数，`apply `、`call` 则是立即执行 
## 二、JS 原生实现
### 1. apply
```javascript
Function.prototype.apply = function(context, arr) {
  var context = context || window;
  context.fn = this;
  var result;
  
  if (!arr) {
      result = context.fn();        // 没有传入参数，直接执行
  } else {
      var args = [];
      for(var i = 0; i < arr.length; i++) {
        args.push('arr[' + i + ']');
      }
      result = eval("context.fn(" + args + ")"); // 默认调用arr.toString()方法
  }
  
	// 将this指向销毁
  delete context.fn;
  return result;
}
```

### 2. call

```javascript
Function.prototype.call = function(context) {
  var context = context || window;      // 第一个参数为调用call方法的函数中的this指向
  context.fn = this;        // 此处this是指调用call的function
  
  var arr = [];
  for (var i = 1; i < arguments.length; i++) {
      arr.push("arguments[" + i + "]");
  }
  
  //执行函数，并返回结果，其中 arr 默认会调用toString()，此处可作参数
  var result = eval("context.fn(" + arr + ")");
  delete context.fn;        // 将this指向销毁
  return result;
}
```

### 3. bind

#### 3.1 在不考虑构造函数的情况下

```javascript
Function.prototype.bind = function() {
  var _this = this;
  var context = [].shift.call(arguments);       // 保存需要绑定的this上下文
  var args = [].slice.call(arguments);          // 剩下参数转为数组
  
  return function() {
    return _this.apply(context, [].concat.call(args, [].slice.call(arguments)));
  }
}
```

#### 3.2 在考虑构造函数的情况下

```javascript
Function.prototype.bind = function(oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, // 此处的 this 指向目标函数
        fNOP = function() {},
        fBound = function() {
          return fToBind.apply(this instanceof fNOP
            ? this // 此处 this 为 调用 new obj() 时所生成的 obj 本身
            : oThis || this, // 若 oThis 无效则将 fBound 绑定到 this
            // 将通过 bind 传递的参数和调用时传递的参数进行合并, 并作为最终的参数传递
            aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 将目标函数的原型对象拷贝到新函数中，因为目标函数有可能被当作构造函数使用
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
```

> 注意：绑定函数(bind函数返回的新函数)不可以再通过apply和call改变其this指向，即当绑定函数调用apply和call改变其this指向时，并不能达到预期效果。


## 三、应用实例

### 1. 数组之间追加

将数组 array2 拼接到 array1 后边。

```javascript
Array.prototype.push.apply(array1, array2);
```

### 2. 获取数组中的最大值和最小值

```javascript
var  numbers = [5, 458 , 120 , -215 ]; 
var maxInNumbers = Math.max.apply(Math, numbers),               // 458
    maxInNumbers = Math.max.call(Math, 5, 458, 120, -215);     //458
```

number 本身没有 max 方法，但是 Math 有，我们就可以借助 call 或者 apply 使用其方法。

### 3. 验证是否是数组

```javascript
functionisArray(obj){ 
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
```

### 4. 类（伪）数组使用数组方法

```javascript
var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```

`Javascript`中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 `getElementsByTagName` , `document.childNodes` 之类的，它们返回`NodeList`对象都属于伪数组。不能应用 `Array`下的 `push` , `pop` 等方法。

但是我们能通过 `Array.prototype.slice.call` 转换为真正的数组的带有 `length` 属性的对象，这样 `domNodes` 就可以应用 `Array` 下的所有方法了。

### 5. 偏函数

所谓偏函数，就是固定一个函数的一个或者多个参数，返回一个新的函数，这个函数用于接受剩余的参数，

假设我们有一个相加的函数

```javascript
function add (a, b) {
	return a + b;
}
```

而当我们进行多次有规律的计算时：

```javascript
add(1, 2);
add(1, 3);
add(1, 4);
add(1, 5);
add(1, 6);
```

我们发现，调用 add 方法时，第一个参数相同，但是我们写了5遍，鉴于此种情况，我们可以将 add 方法封装成偏函数的形式来实现更加简洁的代码。

```javascript
var parAdd = add.bind(null, 1);

parAdd(2);
parAdd(3);
parAdd(4);
parAdd(5);
parAdd(6);
```

如上代码所示，parAdd 就被成为一个偏函数。

另一种使用偏函数情况是，当我们有一个很通用的函数，为了方便提供一个较常用的变体。举例来说，假设我们有一个函数send(from, to, text)，那么使用偏函数可以创建一个从当前用户发送的变体：sendTo(to, text)

### 6. 实现继承

通过call调用父类构造函数实现继承.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(this.name + ':' + this.age);
  }
}
function Student(name, age, job) {
  Person.call(this, name, age);
  this.job = job;
  this.say = function() {
    console.log(this.name + ':' + this.age + ':' + this.job);
  }
}

var me = new Student('andy', 12, 'fe');
me.say(); // andy:12:fe
```
