🏷: #array 
***

### 1. 利用`ES6`中`set`去重

```javascript
// 方法1
function unique(arr) {
  return Array.from(new Set(arr));
}

// 方法2
function unique(arr) {
  return [...new Set(arr)]
}
```

不考虑兼容性，这种方法是最好的去重方式，但是这种方式无法去除重复的空对象。

### 2. `includes`去重

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

### 3. `indexOf`去重

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

### 4. 双层循环，利用`splice`去重

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

### 5. `sort`排序去重

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

### 6. 利用对象去重

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

### 7. `map`去重

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

### 8. `filter`去重

```javascript
function unique(arr) {
	return arr.filter((item, index) => arr.indexOf(item, 0) === index);
}
```

### 9. `reduce`去重

```javascript
function unique(arr) {
	return arr.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
}
```

