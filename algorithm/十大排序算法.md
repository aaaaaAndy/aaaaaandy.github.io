排序算法是将一组无序的元素排列为有序元素的过程，其中涉及到时间与空间的消耗，是《数据结构与算法》中最基本的算法。

排序算法可以分为 ***内部排序*** 和 ***外部排序*** ，内部排序是数据记录在内存中进行排序，适用于数据量不是很大的情况，外部排序是因排序的数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存。

-   内部排序：冒泡排序、选择排序、插入排序、希尔排序、归并排序、快速排序、堆排序、基数排序；
-   外部排序：计数排序、桶排序

排序的稳定性指的是，在需要进行排序操作的数据中，如果存在两个值相等的元素，在排序结束后它们的先后顺序不会发生改变。与之相对的就是排序的不稳定。

-   稳定的排序算法：冒泡排序、插入排序、归并排序、计数排序、桶排序、基数排序；
-   不稳定的排序算法：选择排序、希尔排序、快速排序、堆排序；

十大排序算法时间负责度，空间复杂度与稳定性汇总：

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130105553.png)

其中`In-place`指的是排序过程中只需要占用常数个内存，`Out-place`指的是排序过程中需要占用额外的内存，如递归等。

## 一、冒泡排序

**冒泡排序**是最简单的的排序算法。它的思想是重复遍历相邻元素，将需要冒泡的元素一步步交换到顶部。

算法描述如下：

1.   比较相邻的两个元素，如果第一个比第二个大，则交换它们的位置；
2.   从头到尾循环对比相邻元素，等一轮循环结束，那最后一位一定是最大的元素；
3.   再开启新一轮循环进行对比交换，只是这次只需要对比到上一次循环结束时的前一位元素；
4.   重复步骤`1~3`，直到两层循环对比交换结束，即排序完成。

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130111123.gif)

冒泡排序有一个优化算法，就是设置一个标志位`flag`，如果在一次遍历中没有发生元素交换，那就证明这个序列是有序的，就不需要进行额外的遍历，此时时间复杂度为O(n)。

代码实现如下，

-   时间复杂度最好：O(n)
-   时间复杂度最坏：O(n<sup>2</sup>)
-   时间复杂度平均：O(n<sup>2</sup>)

-   空间复杂度：O(1)
-   稳定性：稳定

```javascript
function bubbleSort(list) {
  let tmp;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      // 如果前一个元素比后一个元素大就交换它们
      if (list[j] > list[j + 1]) {
        tmp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = tmp;
      }
    }
  }

  return list;
}
```

## 二、选择排序

**选择排序**也是一种比较简单的算法，无论什么元素进去都是O(n<sup>2</sup>)的时间复杂度。它的思想就是一次次找到当前列表中剩余元素的最小值，然后放到正确的位置上。

算法描述如下：

1.   首先在未排序的序列中找到最小元素，存放到排序序列的其实位置；
1.   然后再从剩余未排序的序列中找到最小元素，存放到排序序列的末尾位置；
1.   重复第2步，知道所有元素有序。

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130111429.gif)

代码示例如下：

-   时间复杂度最好：O(n<sup>2</sup>)
-   时间复杂度最坏：O(n<sup>2</sup>)
-   时间复杂度平均：O(n<sup>2</sup>)
-   空间复杂度：O(1)
-   稳定性：不稳定

```javascript
function selectSort(list) {
  let minIndex;
  let tmp;

  for (let i = 0; i < list.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    tmp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = tmp;
  }

  return list;
}
```

## 三、插入排序

**插入排序**与生活中的打扑克类似，即拿到一张牌，找到它正确的位置插入就行了。

算法描述如下：

1.   首先在理解上将序列分为两部分，一部分为有序序列，此时只包含序列第一个元素，另一部分为无序序列，包含从第二个元素开始到末尾的所有元素；
1.   从无序序列中取出一个元素，然后从有序序列的末尾开始往头部扫描，作对比；
1.   当扫描到的元素比取出元素大时，则将此扫描到的元素后移一位；
1.   当扫描到的元素比取出元素小，或者相等时，将取出元素插入到扫描元素后面一位；
4.   重复第`2~4`步，直到序列变有序。

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130112329.gif)

代码示例如下：

-   时间复杂度最好：O(n)
-   时间复杂度最坏：O(n<sup>2</sup>)
-   时间复杂度平均：O(n<sup>2</sup>)

-   空间复杂度：O(1)
-   稳定性：稳定

```javascript
function insertSort(list) {
  let j;
  let selectValue;

  for (let i = 1; i < list.length; i++) {
    selectValue = list[i];
    j = i - 1;

    while (j >=0 && list[j] > selectValue) {
      list[j + 1] = list[j];
      j--;
    }

    // 注意这里是j + 1
    list[j + 1] = selectValue;
  }

  return list;
}
```



## 四、希尔排序

**希尔排序**是第一个突破O(n<sup>2</sup>)的排序算法，它是插入排序的一种更高效的改进版本。它与插入排序的不同之处在于，它会优先比较距离比较远的元素，希尔排序又称为**缩小增量排序**。

**希尔排序**的思想是：先将整个待排序的记录序列分割成若干个子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行直接插入排序。

算法描述如下：

1.   先选择一个增量距离`gap`，以每隔`gap`位置的元素为一个子序列；
2.   对各个子序列进行插入排序；
3.   缩小`gap`的值，在大于`0`的前提下，重复执行`1~2`步；
4.   当`gap = 1`时，可认为这个子序列即为完整序列，最后再进行一次插入排序即可；

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130143722.gif)

代码示例如下：

-   时间复杂度最好：O(nlog<sup>2</sup>n)
-   时间复杂度最坏：O(nlog<sup>2</sup>n)
-   时间复杂度平均：O(nlogn)

-   空间复杂度：O(1)
-   稳定性：不稳定

```javascript
function shellSort(list) {
  const len = list.length;
  let temp;
  let j;

  // 最外层循环控制gap逐渐缩小
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 中层循环确保能遍历到每一个子序列
    for (let i = gap; i < len; i++) {
      temp = list[i];
      j = i;

      // 最内层循环确保在子序列内部进行插入排序
      while (j - gap >= 0 && list[j - gap] > temp) {
        list[j] = list[j - gap];
        j = j - gap;
      }

      list[j] = temp;
    }
  }

  return list;
}
```

## 五、归并排序

**归并排序**的性能不受输入数据的影响，因为始终都是`O(nlogn)`的复杂度，代价是需要额外的存储空间。它是采用**分治**的思想：先确保每一个子序列都有序，再将两个有序的子序列合并成一个完整的父序列，直至顶层序列。

算法描述如下：

1.   把长度为`n`的序列分为两个长度为`n / 2`的子序列；
2.   对两个子序列继续拆分，直到每个子序列都只有一个元素，此时可认为最终的所有子序列都是有序的；
3.   将有序子序列合并成一个父序列，再将父序列作为新的子序列进行合并，直至数组合并完成；
4.   最终得到一个有序的序列。

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130113215.gif)

代码示例如下：

-   时间复杂度最好：O(nlogn)
-   时间复杂度最坏：O(nlogn)
-   时间复杂度平均：O(nlogn)
-   空间复杂度：O(n)
-   稳定性：稳定

```javascript
**
 * 该函数主要将列表组合
 * @param {array} left 列表1
 * @param {array} right 列表2
 * @return {*[]}
 */
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++
  }

  return result;
}

/**
 * 改函数主要将列表拆开
 * @param {array} arr 待拆开列表
 * @return {*[]|*}
 */
function mergeSort(arr) {
  if (arr.length < 2 ) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

## 六、快速排序

**快速排序**的最大特点就是快，它的思想是先选出一个基准值，通过一次排序将数组分成两部分，其中一部分比基准值都小，另一部分比基准值都大，当然，相等的情况除外，然后继续对两部分进行递归处理，直至这个队列有序。

算法描述如下：

1.   从数列中选择一个元素作为基准值；
2.   设置两个指针，一个从头到尾遍历，一个从尾到头遍历，通过一轮遍历，确保基准值左边都是比它小的值，基准值右边都是比它大值，等于基准值时放在哪一边都可；
3.   递归处理基准值两个的两部分，将其分别作为一个新序列重新执行`1~2`，直至队列有序。

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130132716.gif)

代码示例如下：

-   时间复杂度最好：O(nlogn)
-   时间复杂度最坏：O(n<sup>2</sup>)
-   时间复杂度平均：O(nlogn)

-   空间复杂度：O(logn)
-   稳定性：不稳定

```javascript
function quickSort(arr, left, right) {
  if (left < right) {
    let i = left + 1;
    let j = right;
    let num = arr[left];
    let tmp;

    while (i < j) {
      while (arr[j] > num && i < j) j--;
      while (arr[i] < num && i < j) i++;

      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }

    if (num > arr[i]) {
      arr[left] = arr[i];
      arr[i] = num;
    }

    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
}
```

## 七、堆排序

**堆排序**是指利用堆这种数据结构进行的一种排序算法。它的思想是利用完全二叉树的结构及其性质，即子节点的键值总是小于（或者大于）它的父节点。

堆分为两种：

-   大顶堆：根节点为最大值，每个节点的值大于或等于其孩子节点的值；
-   小顶堆：根节点为最小值，每个节点的值小于或等于其孩子节点的值；

算法描述如下：

1.   以队列形式表示一个二叉树，即`2 * n + 1`为节点`n`的左子节点，`2 * n + 2`为节点`n`的右子节点；
2.   创建一个大顶堆，即父节点的值都比其孩子节点值大，此时根节点值为当前所有元素中最大值；
3.   交换根节点与尾节点值，把堆的尺寸缩小1，并从根节点开始重新调整二叉树，保证还是一个大顶堆；
4.   重复第2步，直到队列有序。

<img src="https://www.runoob.com/wp-content/uploads/2019/03/heapSort.gif" alt="img" style="zoom:150%;" />

代码示例如下：

-   时间复杂度最好：O(nlogn)
-   时间复杂度最坏：O(nlogn)
-   时间复杂度平均：O(nlogn)

-   空间复杂度：O(1)
-   稳定性：不稳定

```javascript
function swap(list, i, j) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

function buildHeap(list) {
  const len = list.length;

  for (let i = Math.floor(len / 2); i >= 0 ; i--) {
    heapAdjust(list, i, len);
  }
}

function heapAdjust(list, i, len) {
  // 左子节点位置
  let left = 2 * i + 1;

  // 右子节点位置
  let right = 2 * i + 2;

  // 默认根节点值最大
  let largest = i;

  // 如果左子节点最大，则下标赋值给largest
  if (left < len && list[left] > list[largest]) {
    largest = left;
  }

  // 如果右子节点最大，则下标赋值给largest
  if (right < len && list[right] > list[largest]) {
    largest = right;
  }

  // 判断经过刚才查找后根节点是不是最大值
  if (largest !== i) {
    // 交换最大值到根节点
    swap(list, i, largest);

    // 继续遍历刚才交换的子节点及其孙节点，处理交换之后的影响
    heapAdjust(list, largest, len);
  }
}

/**
 * @param {number[]} list
 */
function heapSort(list) {
  list = list.slice(0);

  const len = list.length;

  if (len === 1) {
    return list;
  }

  buildHeap(list);

  for (let i = len - 1; i >= 0 ; i--) {
    // 此时根节点为剩余元素最大值，所以将根节点交换到后边，再重新调整二叉树
    swap(list, i, 0);

    heapAdjust(list, 0, i);
  }

  return list；
}
```

## 八、计数排序

**计数排序**的核心在于将输入的数据转化为键存储在额外开辟的内存空间中。它只能用来排序数据必须是有确定范围的整数。

算法描述如下：

1.   找出待排序数组中的最大值`max`，同时开辟一个线性表内存空间；
2.   统计每个值出现的次数，存入线性表中；
3.   反向填充目标数组，将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1；

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130164759.gif)

代码示例如下：

-   时间复杂度最好：O(n + k)
-   时间复杂度最坏：O(n + k)
-   时间复杂度平均：O(n + k)

-   空间复杂度：O(k)
-   稳定性：稳定

```javascript
function countSort(list) {
  const maxNum = Math.max(...list);
  const obj = {};
  let j = 0;

  for (let i = 0; i < list.length; i++) {
    if (!obj[list[i]]) {
      obj[list[i]] = 1;
    } else {
      obj[list[i]]++;
    }
  }

  for (let i = 0; i < maxNum; i++) {
    while (obj[i]) {
      list[j++] = i;
      obj[i]--;
    }
  }

  return list;
}
```

## 九、桶排序

**桶排序**是计数排序的升级版，把只能保存单条数值的形式改为保存一定范围内数值的桶，然后再对每个桶进行排序，最后将所有的已排序元素拼接起来就组合成了有序序列。

算法描述如下：

1.   先找到待排序队列中的最大值和最小值，并定义一个桶体积；
2.   通过计算最大值，最小值的差值，除以桶体积，可以得到需要的桶数量；
3.   遍历待排序队列，针对每个元素，计算需要落入哪个桶中；
4.   对每个桶内元素进行排序，此时可采用任何一种排序方案；
5.   将所有已排序的元素拼接起来，则队列有序。

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130171923.png)

然后在每个桶中排序：

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130171939.png)

代码示例如下：

-   时间复杂度最好：O(n + k)
-   时间复杂度最坏：O(n<sup>2</sup>)
-   时间复杂度平均：O(n + k)

-   空间复杂度：O(n + k)
-   稳定性：稳定

```javascript
const BUCKET_SIZE = 5;

function bucketSort(list, bucketSize) {
  const max = Math.max(...list);
  const min = Math.min(...list);

  // 桶数量
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = [];

  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < list.length; i++) {
    let bucketPos = Math.floor((list[i] - min) / bucketSize);
    buckets[bucketPos].push(list[i]);
  }


  list = [];

  for (let i = 0; i < bucketCount; i++) {
    // 这里采用冒泡排序对每个桶进行排序，也可采用其他排序方法
    bubbleSort(buckets[i]);

    for (let j = 0; j < buckets[i].length; j++) {
      list.push(buckets[i][j]);
    }
  }

  return list;
}
```

## 十、基数排序

**基数排序**是一种非比较整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。

基数排序 vs 计数排序 vs 桶排序

-   计数排序：每个桶值存储单一键值；
-   桶排序：每个桶存储一定范围的数值；
-   基数排序：根据键值的每位数字来分配桶；

算法描述如下：

1.   先计算每个元素个位数，放入不同桶中；
2.   再从0到9拼接起着10个桶的元素，此时个位数有序；
3.   然后计算各个元素十位数，放入不同桶中，再拼接起来，此时十位数有序；
4.   以此类推，不用比较整数数值即可完成排序。

![img](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20211130175539.gif)

代码示例如下：

-   时间复杂度最好：O(n * k)
-   时间复杂度最坏：O(n * k)
-   时间复杂度平均：O(n * k)

-   空间复杂度：O(n + k)
-   稳定性：稳定

```javascript
function radixSort(list) {
  const max = Math.max(...list);
  const digit = max.toString().length;
  const buckets = [];
  let bucketPos;
  let mod = 10;
  let dev = 1;

  // 先以个位数为归类放入不同桶中，再以十位数，以此类推
  for (let i = 0; i < digit; i++, dev *= 10, mod *= 10) {
    for (let i = 0; i < 10; i++) {
      buckets[i] = [];
    }

    for (let j = 0; j < list.length; j++) {
      bucketPos = parseInt((list[j] % mod) / dev);
      buckets[bucketPos].push(list[j]);
    }

    list = []
    for (let j = 0; j < 10; j++) {
      list = list.concat(buckets[j]);
    }
  }

  return list;
}
```

