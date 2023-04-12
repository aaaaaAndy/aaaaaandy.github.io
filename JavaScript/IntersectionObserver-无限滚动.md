📆: 2020-03-25 17:28:34
🏷: #IntersectionObserver 

日常需求中, 经常会遇到列表需要上拉加载下一页数据, 也就是一个无限滚动的效果, 过去我们的实现方案无外乎监听`scroll`的变化, 通过`scrollTop`, `scrollHeight`和 `clientHeight`来判断滚动的高度, 从而决定是否加载下一页的数据，但这一方案额外增加了`JavaScript`的计算量，造成了性能问题，实不能称为一个完美的解决方案。但是今天我们有了一个完美的方案: `IntersectionObserver`：

> IntersectionObserver接口 (从属于Intersection Observer API) 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)。

## 一、API

### 1. `IntersectionObserver`对象

`IntersectionObserver`:一个挂载在`window`上的全局对象，使用时需要先进行实例化，根据传入的配置的`options`参数来决定什么时候触发回调函数`callback`。

```jsx
const io = new IntersectionObserver(callback, options);
```

### 2. 实例方法

实例化`IntersectionObserver`对象生成的`io`实例先不要扔，还有很重要的作用。

在实例化之后，`io`还需要调用一个监听方法来实现对某个`DOM`元素的监听，否则，这个实例`io`是没有作用的，最多占点内存。

```jsx
// 监听id为footer的元素
io.observe(document.getElementById('footer'));

// 停止监听id为footer的元素
io.unobserve(document.getElementById('footer'));

// 使IntersectionObserve对象停止工作
io.disconnect();

// 返回所有观察目标的IntersectionObserverEntry数组
io.takeRecords()
```

### 3. `options`属性对象

```jsx
// options对象
options = {
  // 所监听对象的具体祖先元素。如果未传入值或者值为null，则默认使用顶级文档的视窗
  // 一般用于监听容器内滚动
  root: null,
  // 计算交叉时添加到根root边界盒的矩形偏移量，类似于margin
  rootMargin: "0px 0px 0px 0px",
  // 一个包含阈值的列表，按升序排列，列表中的每个阈值都是监听对象的交叉区域与边界区域的比率。当达到该阈值时就会触发callback，如果构造器未传入值，则默认值为0
  thresholds: [0, 0.5, 1]
}
```

### 4. `IntersectionObserverEntry`对象

```jsx
const io = new IntersectionObserver(function(entries) {
  console.log(entries)
}, {})

// entries即为IntersectionObserverEntry对象
entries = {
  // 本次回调触发的时间，是一个高精度时间戳，单位为毫秒
  time: 3823.92,
  // 根元素的矩形区域信息，getBoundingClientRect()的返回值
  rootBounds: ClientRect {
    bottom: 920,
    height: 1024,
    left: 0,
    right: 1024,
    top: 0,
    width: 920
  },
  // 被观察的目标元素的矩形区域信息
  boundingClientRect: ClientRect {
     // ...
  },
  // 根元素与被观察的目标元素交叉的矩形区域信息
  intersectionRect: ClientRect {
    // ...
  },
  // 本次回调触发时的thresholds阈值
  intersectionRatio: 0.54,
  // 被观察的目标对象
  target: element
}
```

## 二、注意点

### 1. 兼容性

以下是该`API`的兼容性：

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210305134211.jpg](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210305134211.jpg)

虽然`Chrome`从51版本就开始支持了这个新`API`，但是我们日常开发中不单单开发只针对`Chrome`平台的应用，所以兼容性还是要做的。

### 2. 异步执行

`IntersectionObserver`这个观察期是异步执行的，不随着目标元素的滚动同步触发。而且其异步执行的优先级非常低，只有线程空闲下来才会执行。所以当我们需要实现一些实时性非常高的效果时（如元素吸顶效果），不建议采用这种方案。

## 三、实例

### 1. 无限滚动(`Infinite scroll`)

鉴于`IntersectionObserver`的兼容性问题，我们在使用此`API`之前应该加入一些垫片，来兼容一些比较旧的机型。

1. 安装垫片

   `npm`方式

    ```bash
    yarn add intersection-observer
    ```

   `script`方式

   先把[intersection-observer.js](https://github.com/w3c/IntersectionObserver/blob/main/polyfill/intersection-observer.js)下载到本地对应的目录，当然也可以放在cdn上

2. 引入垫片

   在项目入口处或者当前文件顶部引入：

   `npm`方式

    ```
    import 'intersection-observer';
    ```

   `script`方式

    ```html
    <script src="path/to/intersection-observer.js"></script>
    ```

3. 放心使用

    ```jsx
    const io = new IntersectionObserver((entries) => {
    	if (entries[0].intersectionRatio > 0) {
    	  loadMore();
      }
     }, {
      threshold: [0.5],
    });
    
    io.observe(document.getElementById('footer'));
    ```


### 2. 惰性加载(`lazy load`)

有时，我们希望某些静态资源先不要加载，而是等到它们进入可视区域内再开始加载，这样一方面减少宽带的压力，另一方面也提升了网页性能，这种加载方式就叫做惰性加载。

1. 针对对应的静态资源（如`img`），先不要设置`src`，而是先给一个`data-src`属性用来保存每个`img`对应的静态资源路径：

    ```html
    <img src="placeholder.png" data-src="img-1.jpg">
    <img src="placeholder.png" data-src="img-2.jpg">
    <img src="placeholder.png" data-src="img-3.jpg">
    ```

2. 监听对应的静态资源`DOM`，当它们进入可视区域内时把`data-src`上的静态资源路径赋值给相应的`src`属性，来进行加载渲染。

    ```jsx
    function query(selector) {
      return Array.from(document.querySelectorAll(selector));
    }
    
    var io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        });
      }
    );
    
    query('.lazy-loaded').forEach(function (item) {
      observer.observe(item);
    });
    ```


### 3. 视频自动播放

我们希望实现一个当视频区域进入可视区域内时再开始播放视频：

1. 引入这个视频

    ```html
    <video src="foo.mp4" controls=""></video>
    ```

2. 监听视频`DOM`，自动播放或者暂停

    ```jsx
    let video = document.querySelector('video');
    let isPaused = false;
    
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio != 1  && !video.paused) {
          video.pause();
          isPaused = true;
        } else if (isPaused) {
          video.play();
          isPaused=false;
        }
      });
    }, {threshold: 1});
    
    observer.observe(video);
    ```

<!-- more -->
