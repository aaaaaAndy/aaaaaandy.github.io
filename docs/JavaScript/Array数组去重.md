---
sidebar_position: 11
tags:
  - Array
  - 去重
---

### 1. 利用`ES6`中`set`去重

利用 `Set` 集合的唯一性，先转成 `Set`，在转回数组。

不考虑兼容性，这种方法是最好的去重方式，但是这种方式无法去除重复的空对象。

```javascript
// 方法1
function unique(arr) {
  return Array.from(new Set(arr));
}

// 方法2
function unique(arr) {
  return [...new Set(arr)];
}
```

### 2. 利用对象去重

以空间换时间，需要一个对象的空间开销，但好处是只需要数组循环一次即可。

```javascript
function unique(arr) {
  var result = [];
  var obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      result.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }

  return result;
}
```

### 3. `map`去重

与 [#2.利用对象去重](#2-利用对象去重) 相似，都是以空间换时间，循环一次数组。

```javascript
function unique(arr) {
  var result = [];
  var map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], true);
    } else {
      map.set(arr[i], false);
      result.push(arr[i]);
    }
  }

  return result;
}
```

### 4. `sort`排序去重

先对数组整体排序，然后对数组遍历，剔除重复的元素，取出唯一的元素。

这种方式时间复杂度较高，因为在排序时至少浪费了 `nlog(n)` 的复杂度，然后还需要再对数组进行一次遍历，比较耗时。

```javascript
function unique(arr) {
  var result = [];
  arr.sort();

  result.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}
```

### 5. 双层循环，利用`splice`去重

最基础的方法，双层循环。

```javascript
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }

  return arr;
}
```

### 6. `includes`去重

此方法是方法 [#5-双层循环利用 splice 去重](#5-双层循环利用splice去重) 的进化版，只是把内层循环换成了数组本身的遍历方法。个人认为此方法其实比[#5-双层循环利用 splice 去重](#5-双层循环利用splice去重) 更耗时，因为使用数组遍历方法时还要生成迭代器对象，而直接 `for` 循环是遍历数组最快的方法。

```javascript
function unique(arr) {
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}
```

### 7. `indexOf`去重

此方法与 [#6-includes 去重](#6-includes去重) 相似。

```javascript
function unique(arr) {
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}
```

### 8. `filter`去重

此方法相当于把双层循环的两层循环都换成了数组的遍历方法，起性能甚至比 [#6-includes 去重](#6-includes去重) 和 [#7-indexof 去重](#7-indexof去重) 更差。

```javascript
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item, 0) === index);
}
```

### 9. `reduce`去重

可能是这里性能最差的方法。

```javascript
function unique(arr) {
  return arr.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    []
  );
}
```
