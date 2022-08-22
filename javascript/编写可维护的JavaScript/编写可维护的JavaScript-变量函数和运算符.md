JavaScript编程的本质是编写一个个的函数来完成任务。

## 一、变量声明

变量声明都是通过var语句来完成的。JavaScript中允许多次且在任何地方使用var语句，这对开发者来说是很有意思的一件事情，因为不论var语句是否真的会被执行，所有的var语句都提前到包含这段逻辑的函数的顶部执行，比如：

```javascript
function doSomething () {
    var result = 10 + value;
    var value = 10;
    return result;
}
```

在这段代码中，变量value在声明之前就参与了运算，这是完全合法的，尽管这会造成result的计算结果是一个特殊值NaN。要想了解其中的原理，就需要清除这段代码被JavaScript理解为如下这样：

```javascript
function doSomething () {
    var result;
    var value;
    result = 10 + value;
    value = 10;
    return result;
}
```

两个var语句提前至函数的顶部：初始化逻辑紧跟其后。在进行加法计算的时候value始终是一个特殊值undefined，因此result的值就是NaN（非数字），在那之后value才被赋值为10。

变量声明提前意味着：在函数内部任意地方定义变量和在函数顶部定义变量是完全一样的。因此，一种流行的风格是将所有变量声明放在函数顶部而不是散落在函数的各个角落。简言之，依照这种风格写出的代码逻辑和JavaScript引擎解析这段代码的习惯是非常相似的。

```javascript
function doSomething () {

    var i, len;
    var value = 10;
    var result = 10 + value;

    for(i = 0; i < len; i++) {
        foo();
    }
}
```

## 二、函数声明

和变量声明一样，函数声明也会被JavaScript引擎提前。因此，在代码中函数的调用可以出现在函数声明之前。

```javascript
//不好写法
doSomething();

function doSomthing () {
    alert('something');
}
```

这段代码是可以正常运行的，因为JavaScript引擎会将这段代码解析为：

```javascript
function doSomthing () {
    alert('something');
}

doSomething();
```

由于JavaScript引擎的这种行为，所以建议函数应该先声明再使用。另外，对于函数调用部分，在函数名和左括号之间不应该加空格，这样做是为了将它和块语句区分开来。

## 三、严格模式

ECMAScript5引入了“严格模式”，希望通过这种方式来谨慎地解析执行JavaScript，以减少错误，通过使用如下指令脚本以严格模式执行。

```javascript
"use strict"
```

es5会将这个字符串识别为一条指令，以严格模式来解析代码，这条指令不仅用于全局，也适用于局部，比如一个函数体内。

```javascript
//全局的严格模式
"use strict"
function doSomething () {
    // code
}

//局部的严格模式
function doSomething () {
    "use strict"
    // code
}
```

## 四、相等

由于JavaScript具有强制类型转换机制，JavaScript中的判断相等操作是很微妙的。对于某些运算来说，为了得到成功的结果，强制类型转换会驱使某种类型的变量自动转换成其他不同类型，这种情形往往会造成意想不到的结果。

```javascript
// 字符串会先转成数字，再进行比较
console.log(5 == '5')    // true

// 
console.log(1 == true)    // true
```

由于JavaScript中强制类型转换机制的存在，所以我们不建议使用==和!=，而建议使用===和!==。用这些运算符不会涉及强制类型转换，因为只要两个值类型不一样，就认为他们不相等。

<!-- more -->
