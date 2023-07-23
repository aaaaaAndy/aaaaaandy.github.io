---
sidebar_position: 10
tags:
 - Array
---

数组的基本操作可以归纳为：增、删、改、查、排序、转换、迭代。

## 一、增

下面前三种是对原数组产生影响的增添方法，第四种则不会对原数组产生影响。

### push()

push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

```javascript
let colors = []; // 创建一个数组
let count = colors.push('red', 'green'); // 推入两项
console.log(count); // 2
```

### unshift()

unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

```javascript
let colors = new Array(); // 创建一个数组
let count = colors.unshift('red', 'green'); // 从数组开头推入两项
alert(count); // 2
```

### splice()

splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 传入三个参数，分别是开始位置、0（要删除的元素数量，这里是新增，就是不删除元素，所以是 0）、插入的元素，返回修改的元素。

```javascript
let colors = ['red', 'green', 'blue'];
let removed = colors.splice(1, 0, 'yellow', 'orange');
console.log(colors); // red,yellow,orange,green,blue
console.log(removed); // []
```

### concat()

concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

```javascript
let colors = ['red', 'green', 'blue'];
let colors2 = colors.concat('yellow', ['black', 'brown']);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
```

## 二、删

下面三种都会影响原数组，最后一项不影响原数组：

### pop()

pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

```javascript
let colors = ['red', 'green'];
let item = colors.pop(); // 取得最后一项
console.log(item); // green
console.log(colors.length); // 1
```

### shift()

shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

```javascript
let colors = ['red', 'green'];
let item = colors.shift(); // 取得第一项
console.log(item); // red
console.log(colors.length); // 1
```

### splice()

splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 传入三个参数，分别是开始位置、1（要删除的元素数量）、插入的元素(这里是删除，所以不传入插入元素)，返回修改的元素

```javascript
let colors = ['red', 'green', 'blue'];
let removed = colors.splice(0, 1); // 删除第一项
console.log(colors); // green,blue
console.log(removed); // red，只有一个元素的数组
```

### slice()

slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括 end，这里两个下标都支持负索引）。原始数组不会被改变。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

```javascript
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
let colors4 = colors.slice(-2);
let colors5 = colors.slice(2, -1);

console.log(colors); // red,green,blue,yellow,purple
concole.log(colors2); // green,blue,yellow,purple
concole.log(colors3); // green,blue,yellow
concole.log(colors4); // yellow,purple
concole.log(colors5); // blue,yellow
```

## 三、改

### splice()

`splice()`方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 传入三个类型的参数，分别是:

1. 开始位置
2. 1（要删除的元素数量）
3. 插入的元素，返回修改的元素，可以有多个插入的元素

```javascript
let colors = ['red', 'green', 'blue'];
let removed = colors.splice(1, 1, 'red', 'purple'); // 插入两个值，删除一个元素
console.log(colors); // red,red,purple,blue
console.log(removed); // green，只有一个元素的数组
```

### copyWithin()

`copyWithin()`方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) 语法如下：

```javascript
copyWithin(target);
copyWithin(target, start);
copyWithin(target, start, end);
```

示例：

```javascript
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

## 四、查

即查找元素，返回元素坐标或者元素值

### indexOf()

**indexOf()** 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.indexOf(4); // 3
```

### includes()

includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.includes(4); // true
```

### find()

find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```javascript
const people = [
  {
    name: 'Matt',
    age: 27,
  },
  {
    name: 'Nicholas',
    age: 29,
  },
];
people.find((element, index, array) => element.age < 28); // // {name: "Matt", age: 27}
```

### findIndex()

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

### findLast()

findLast() 方法返回数组中满足提供的测试函数条件的最后一个元素的值。如果没有找到对应元素，则返回 undefined。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)

```javascript
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// expected output: 130
```

### findLastIndex()

findLastIndex() 方法返回数组中满足提供的测试函数条件的最后一个元素的索引。若没有找到对应元素，则返回 -1。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)

```javascript
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// expected output: 3  (of element with value: 30)
```

## 五、排序

数组有两个方法可以用来对元素重新排序：

### reverse()

`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

```javascript
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1
```

### sort()

`sort()` 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```javascript
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 0,1,5,10,15
```

## 六、转换

### join()

join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```javascript
let colors = ['red', 'green', 'blue'];
alert(colors.join(',')); // red,green,blue
alert(colors.join('||')); // red||green||blue
```

### flat()

flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

```javascript
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

### flatMap()

flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

```javascript
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

## 七. 迭代

常用来迭代数组的方法（都不改变原数组）有如下：

### some()

some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.every((item, index, array) => item > 2);
console.log(someResult); // true
```

### 2. every()

every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult); // false
```

### forEach()

forEach() 方法对数组的每个元素执行一次给定的函数。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.forEach((item, index, array) => {
  // 执行某些操作
});
```

### map()

map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let mapResult = numbers.map((item, index, array) => item * 2);
console.log(mapResult); // 2,4,6,8,10,8,6,4,2
```

### filter()

filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let filterResult = numbers.filter((item, index, array) => item > 2);
console.log(filterResult); // 3,4,5,4,3
```

## 八、创建数组

### Array()

Array() 构造器用于创建 Array 对象。参数只有一数字 n 时表示这是创建一个 n 个长度的数组[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)

```javascript
// literal constructor
[element0, element1, ..., elementN]

// construct from elements
new Array(element0, element1, ..., elementN)

// construct from array length
new Array(arrayLength)
```

### fill()

fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

```javascript
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

### Array.from()

Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

```javascript
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]
```

### Array.of()

Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。 Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为 7 的空数组（注意：这是指一个有 7 个空位 (empty) 的数组，而不是由 7 个 undefined 组成的数组）。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of)

```javascript
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]
```

## 九、总结

### 1. 会改变原始数组的方法

- `push`
- `pop`
- `shift`
- `unshift`
- `splice`
- `sort`
- `reverse`
- `forEach`
- `flat`
- `join`

### 2. 不会改变原始数组的方法

- `map`
- `filter`
- `every`
- `some`
- `concat`
- `slice`
