---
sidebar_position: 12
tags:
 - Array
 - 扁平化
---

## 一、什么是数组扁平化

数组的扁平化其实就是将一个嵌套多层的数组 array（嵌套可以是任何层数）转换为只有一层的数组。
例如

```javascript
var arr = [1, [2, [3, 4, 5]]]; 
 // [1, 2, 3, 4，5]
```

## 二、实现方法

### 1. 循环递归

最基础的方法当然是去遍历这个数组，遇到元素也是数组时进行递归处理，直到遍历完整个数组。

```javascript
let arr = [1, 2, [3, 4], [5, [6, 7]]];
let result = [];

function flatten(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flatten(arr[i]);
		} else {
			result.push(arr[i]);
		}
	}
}

flatten(arr)
console.log(result); // [ 1, 2, 3, 4, 5, 6, 7 ]
```

### 2. 调用ES6中的`flat`方法

flat(depth) 方法中的参数depth，代表展开嵌套数组的深度，默认是1，这里我们传入 Infinity 来确保展开所有的层级。

```javascript
const arr = [1, [2, [3, [4, 5]]], 6];
const newArr = arr.flat(Infinity); // [1, 2, 3, 4, 5, 6]
```

### 3. `replace` + `split`

将数组先转成字符串，利用字符串处理方法 replace 替换掉所有的 [ 和 ]，这样就得到了一个只有数组元素和逗号隔离的字符串，最后使用 split 发放切割逗号得到新的数组。

这种操作比较麻烦，因为涉及到字符串的 JOSN 处理，性能也不会太好。

```javascript
const arr = [1, [2, [3, [4, 5]]], 6];
const str = JSON.stringify(arr);
const newArr = str.replace(/(\[|\])/g, '').split(',')
console.log(newArr); // [1, 2, 3, 4, 5, 6]
```

### 4. `replace` + `JSON.parse`

此种方法与方法 3 有异曲同工之处，相同的地方都是将数组转为字符串替换掉所有的 [ 和 ] ，不同之处是此种方案会将处理后的字符串首尾拼接上 [ 和 ]，以便可以使用 JSON.parse 方法得到新数组。

```javascript
const arr = [1, [2, [3, [4, 5]]], 6];
const str = JSON.stringify(arr);
const newStr = str.replace(/(\[|\])/g, '');
const newArr = JSON.parse('[' + newStr + ']');
console.log(newArr); // [1, 2, 3, 4, 5, 6]
```

### 5. `reduce` + `concat`

> reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

reduce 语法如下，其中 previousValue 是当前遍历传入的初始值，也是上一次遍历的返回值，这就决定了reduce方法天生适合做这种事：

```javascript
reduce((previousValue, currentValue, currentIndex, array) => {
	/* ... */
}, initialValue)
```

如下代码所示，acc 是每一次遍历时传入的上一次遍历的结果，cur 是当前值，先判断当前值如果是数组则递归调用 flatten 函数，如果是基础类型数据，则 acc 会 concat 进来，而且这里 return 的返回值是作为下一次遍历的 acc 传入。

```javascript
const arr = [1, 2, [3, 4], [5, [6, 7]]];

function flatten(arr) {
	return arr.reduce(function (acc, cur) {
		return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
	}, []);
}

console.log(flatten(arr)); // [ 1, 2, 3, 4, 5, 6, 7 ]
```

### 6. `while` + `some` + `concat`

> some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。

这里着重理解 while 方法体内的内容：`[].concat(...arr)` 是对数组进行两个层级的展开，也就是说它能将二维数组转成一维，所以这里的逻辑就是每当 while 判断数组里有多维数组时，就多展开一层，直到所有的层级展开完毕。


```javascript
let arr = [1, 2, [3, 4], [5, [6, 7]]];

while (arr.some(Array.isArray)) {
	arr = [].concat(...arr);
}

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]
```


