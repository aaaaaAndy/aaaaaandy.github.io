🏷: #JavaScript #var #let #const
***
## 一、var
在ES5中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量
注意：顶层对象，在浏览器环境指的是`window`对象，在 `Node` 指的是`global`对象
```javascript
var a = 10;
console.log(window.a) // 10
```

使用`var`声明的变量存在变量提升的情况
```javascript
console.log(a) // undefined
var a = 20
```

在编译阶段，编译器会将其变成以下执行
```javascript
var a
console.log(a)
a = 20
```

使用`var`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明
```javascript
var a = 20 
var a = 30
console.log(a) // 30
```

在函数中使用使用`var`声明变量时候，该变量是局部的
```javascript
var a = 20
function change(){
    var a = 30
}
change()
console.log(a) // 20 
```

而如果在函数内不使用`var`，该变量是全局的
```javascript
var a = 20
function change(){
   a = 30
}
change()
console.log(a) // 30 
```

## 二、let
`let`是`ES6`新增的命令，用来声明变量

用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效
```javascript
{
    let a = 20
}
console.log(a) // ReferenceError: a is not defined.
```

不存在变量提升
```javascript
console.log(a) // 报错ReferenceError
let a = 2
```

这表示在声明它之前，变量`a`是不存在的，这时如果用到它，就会抛出一个错误
只要块级作用域内存在`let`命令，这个区域就不再受外部影响
```javascript
var a = 123
if (true) {
    a = 'abc' // ReferenceError
    let a;
}
```

使用`let`声明变量前，该变量都不可用，也就是大家常说的“暂时性死区”
最后，`let`不允许在相同作用域中重复声明
```javascript
let a = 20
let a = 30
// Uncaught SyntaxError: Identifier 'a' has already been declared
```

注意的是相同作用域，下面这种情况是不会报错的
```javascript
let a = 20
{
    let a = 30
}
```

因此，我们不能在函数内部重新声明参数
```javascript
function func(arg) {
  let arg;
}
func()
// Uncaught SyntaxError: Identifier 'arg' has already been declared
```
## 三、const
`const`声明一个只读的常量，一旦声明，常量的值就不能改变
```javascript
const a = 1
a = 3
// TypeError: Assignment to constant variable.
```

这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值
```javascript
const a;
// SyntaxError: Missing initializer in const declaration
```

如果之前用`var`或`let`声明过变量，再用`const`声明同样会报错
```javascript
var a = 20
let b = 20
const a = 30
const b = 30
// 都会报错
```

`const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动
对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量
对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变
```javascript
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

其它情况，`const`与`let`一致
## 四、区别
`var`、`let`、`const`三者区别可以围绕下面五点展开：
- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量
### 变量提升
`var `声明的变量存在变量提升，即变量可以在声明之前调用，值为`undefined`
`let`和`const`不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错
```javascript
// var
console.log(a)  // undefined
var a = 10

// let 
console.log(b)  // Cannot access 'b' before initialization
let b = 10

// const
console.log(c)  // Cannot access 'c' before initialization
const c = 10
```
### 暂时性死区
`var`不存在暂时性死区
`let`和`const`存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
```javascript
// var
console.log(a)  // undefined
var a = 10

// let
console.log(b)  // Cannot access 'b' before initialization
let b = 10

// const
console.log(c)  // Cannot access 'c' before initialization
const c = 10
```
### 块级作用域
`var`不存在块级作用域
`let`和`const`存在块级作用域
```javascript
// var
{
    var a = 20
}
console.log(a)  // 20

// let
{
    let b = 20
}
console.log(b)  // Uncaught ReferenceError: b is not defined

// const
{
    const c = 20
}
console.log(c)  // Uncaught ReferenceError: c is not defined
```
### 重复声明
`var`允许重复声明变量
`let`和`const`在同一作用域不允许重复声明变量
```javascript
// var
var a = 10
var a = 20 // 20

// let
let b = 10
let b = 20 // Identifier 'b' has already been declared

// const
const c = 10
const c = 20 // Identifier 'c' has already been declared
```
### 修改声明的变量
`var`和`let`可以
`const`声明一个只读的常量。一旦声明，常量的值就不能改变
```javascript
// var
var a = 10
a = 20
console.log(a)  // 20

//let
let b = 10
b = 20
console.log(b)  // 20

// const
const c = 10
c = 20
console.log(c) // Uncaught TypeError: Assignment to constant variable
```
## 使用规范
能用`const`的情况尽量使用`const`，其他情况下大多数使用`let`，避免使用`var`
## 参考文献
- https://es6.ruanyifeng.com/