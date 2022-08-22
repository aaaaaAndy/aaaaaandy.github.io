---
title: JS数据类型及其区别
tags:
 - javascript
 - type
date: 2017-12-23
---

## 一、概述

### 1. ES5 数据类型

- 基础数据类型：`Stirng`、`Number`、`Boolean`、`Null`、`Undefined`
- 复杂数据类型：`Object`、`Array`、`Function`

### 2. ES6 新增数据类型

- 基础数据类型：`Symbol`、`BigInt`
- 复杂数据类型：`Set`、`Map`、`WeakSet`、`WeakMap`

虽然JavaScript中有有多种类型变量，但是他们在声明的时候只有一种类型，只有在运行期间才会确定当前类型。如下代码所示，`x`的值只有在运行阶段才能知道，在编译阶段是无法知道。

```javascript
let x = 10;
```

## 二、字面量与构造函数初始化

在JavaScript中，`string`、`number`、`boolean`可以通过字面量初始化，也可以通过构造函数初始化。

### 1. 字面量初始化

JavaScript支持以一种简便的方法初始化大部分类型变量。一般出去表达式，给变量赋值时，等号右边的都可以认为是字面量。

```javascript
var a = 1;
var b = '1'
var c = true;
var d = /\d/;
var e = [];
var f = {};
var g = function () {}
```

### 2. 构造函数初始化

只要存在**构造函数**的都可以`new`出来，基本上来说，除了`null`、`undefined`，其他的都可以`new`出来。

```javascript
var a = new Number(1)
var b = new String('1');
var c = new Boolean(true);
var d = new RegExp(`\d`);
var e = new Array();
var f = new Object();
var g = new Function();
```

### 3. 两种初始化方式的区别

其实不必太纠结于两者的区别，字面量只是一种更简洁的表示方法而已，两者区别如下：

 - 字面量语法简单、直接、优雅；
 - 使用构造函数初始化要有一个函数执行的过程，会产生一定的时间、内存消耗。没必要非得用构造函数初始化，要尽量减少代码，减少代码运算量；
 - 对于基本类型`string`、`number`来说，通过构造函数初始化的变量属于引用类型，即`typeof (new String('123'')) === 'object''`。

## 三、类型转换

各种数据类型之间是可以相互转换的，转换又分为 ***显示转换*** 和 ***隐式转换*** 。

### 1. 显示转换

能够很清楚地看到这里发生了类型的转换，常见的方法有：

- `Number()`
- `parseInt()`
- `String()`
- `Boolean()`

#### 1.1 `Number()`

将任意类型的值转为数值。

需要注意`undefined`转为数值是`NaN`，如果待转换字符串中有非数字字符，则会直接转为`NaN`。

<!-- tabs:start -->

#### **题目1**

猜猜下面各项都会转换成什么值？

```javascript
Number(123)
Number('123')
Number('123abc')
Number('')
Number(true)
Number(false)
Number(undefined)
Number(null)
Number({ a: 1 })
Number([1, 2, 3])
Number([1])
```

#### **答案1**

```javascript
Number(123)         // 123
Number('123')       // 123
Number('123abc')    // NaN
Number('')          // 0
Number(true)        // 1
Number(false)       // 0
Number(undefined)   // NaN
Number(null)        // 0
Number({ a: 1 })    // NaN
Number([1, 2, 3])   // NaN
Number([1])         // 1
```

<!-- tabs:end -->


#### 1.2 `parseInt()`

`parseInt()`与`Number()`方法都可以将字符串转为数值类型，但他们有以下几个区别：

- `parseInt(str, hex)`接收两个参数，第二个参数是表明要解析的`str`字符串的进制基准；
- `parseInt()`只能转为整数类型，会去掉小数部分；
- `parseInt()`遇到一个字符就解析一个字符，如果遇到非数字字符，就停止解析，返回之前解析好的数字，但是`Number()`解析的字符中只要有非数字内容就转为`NaN`。

<!-- tabs:start -->

#### **题目2**

猜猜下面各项都会转换成什么值？

```javascript
parseInt('123')
parseInt('123abc')
parseInt('123.45')
parseInt('10', 2)
```

#### **答案2**


```javascript
parseInt('123')       // 123
parseInt('123abc')    // 123
parseInt('123.45')    // 123
parseInt('10', 2)     // 2
```

<!-- tabs:end -->


#### 1.3 `String()`

将任意类型的值转为字符串。

<!-- tabs:start -->

#### **题目3**

猜猜下面各项都会转换成什么值？

```javascript
String(123)
String('123')
String(true) 
String(false) 
String(undefined) 
String(null) 
String({a: 123}) 
String([1, 2, 3])
```

#### **答案3**

```javascript
String(123)         // '123'
String('123')       // '123'
String(true)        // 'true'
String(false)       // 'false'
String(undefined)   // 'undefined'
String(null)        // 'null'
String({a: 123})    // '[object Object]'
String([1, 2, 3])   // '1,2,3'
```

<!-- tabs:end -->



#### 1.4 `Boolean()`

将任意类型的值转为布尔值。

<!-- tabs:start -->

#### **题目4**

猜猜下面各项都会转换成什么值？

```javascript
Boolean(0) 
Boolean(1) 
Boolean('0')
Boolean('1')
Boolean('')
Boolean(NaN)
Boolean({}) 
Boolean([]) 
Boolean(new Boolean(false))
```

#### **答案4**


```javascript
Boolean(0)      // false
Boolean(1)      // true
Boolean('0')    // true
Boolean('1')    // true
Boolean('')     // false
Boolean(NaN)    // false
Boolean({})     // true
Boolean([])     // true
Boolean(new Boolean(false)) // true
```

<!-- tabs:end -->

### 2. 隐式转换

虽然变量的类型是不确定的，但是各种运算操作对数据类型是有要求的，如果运算子的类型与预期不符，就会触发类型转换，这种转换就是 ***隐式转换*** 。

这里可以归纳为三种发生隐式转换的场景：

- 比较运算（`==`、`!=`、`>`、`<`）、`if`、`while`需要布尔值的地方会转为布尔值
- 算数运算（`+`、`-`、`*`、`/`、`%`）需要数值运算的地方会转为数值类型
- 算数运算中的`+`运算如果一侧有字符串，则视为字符串操作，会将非字符串类型转为字符串

#### 2.1 自动转为布尔值

在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用`Boolean`函数。

可以得出个小结，除了下面几种会被转化成false，其他都换被转化成true

- `undefined` 
- `null` 
- `false` 
- `+0` 
- `-0` 
- `NaN`
- `""`

#### 2.2 自动转为数值

遇到预期为字符串的地方，就会将非字符串的值自动转为字符串。常发生在`+`运算中，一旦存在字符串，则会进行字符串拼接操作。

具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串

<!-- tabs:start -->

#### **题目5**

猜猜下面各项都会转换成什么值？

```javascript
'5' + 1
'5' + true
'5' + false 
'5' + {} 
'5' + [] 
'5' + function (){}
'5' + undefined 
'5' + null 
```

#### **答案5**

```javascript
'5' + 1             // '51'
'5' + true          // "5true"
'5' + false         // "5false"
'5' + {}            // "5[object Object]"
'5' + []            // "5"
'5' + function (){} // "5function (){}"
'5' + undefined     // "5undefined"
'5' + null          // "5null"
```

<!-- tabs:end -->

#### 2.3 自动转为字符串

除了`+`有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。

<!-- tabs:start -->

#### **题目6**

猜猜下面各项都会转换成什么值a？

```javascript
'5' - '2'
'5' * '2'
true - 1 
false - 1
'1' - 1
'5' * []
false / '5' 
'abc' - 1
null + 1
undefined + 1
```

#### **答案6**


```javascript
'5' - '2'       // 3
'5' * '2'       // 10
true - 1        // 0
false - 1       // -1
'1' - 1         // 0
'5' * []        // 0
false / '5'     // 0
'abc' - 1       // NaN
null + 1        // 1
undefined + 1   // NaN
```

<!-- tabs:end -->



