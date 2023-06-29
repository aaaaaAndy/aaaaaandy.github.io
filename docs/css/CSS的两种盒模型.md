---
title: CSS的两种盒模型
tags: [css, 盒模型]
categories: css 
date: 2019-09-14 22:02:06
---

## 一、什么是盒模型

当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（`CSS basic box model`），将所有元素表示为一个个矩形的盒子（box）。

一个盒子由四个部分组成：`content`、`padding`、`border`、`margin`。

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220523144749.png](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220523144749.png)

- `content`：即实际内容，显示文本和图像
- `boreder`：即边框，围绕元素内容的内边距的一条或多条线，由粗细、样式、颜色三部分组成
- `padding`：即内边距，清除内容周围的区域，内边距是透明的，取值不能为负，受盒子的`background`属性影响
- `margin`：即外边距，在元素外创建额外的空白，空白通常指不能放其他元素的区域

上述是一个从二维的角度观察盒子，下面再看看看三维图：

<center>
	<img src="https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220523144753.png" alt="" />
</center>

如下代码：

<iframe height="400" style="width: 100%;" scrolling="no" title="box-sizing-content-box" src="https://codepen.io/aaaaaandy/embed/oNEYNdQ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/aaaaaandy/pen/oNEYNdQ">
  box-sizing-content-box</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

当我们在浏览器查看元素时，却发现元素的大小变成了`240px`。这是因为，在`CSS`中，盒子模型可以分成：

- W3C 标准盒子模型
- IE 怪异盒子模型

默认情况下，盒子模型为`W3C` 标准盒子模型。

### 1. W3C的标准盒模型

标准盒子模型是浏览器默认的盒子模型，下面是其盒子模型：

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129114533.jpeg](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129114533.jpeg)

从上图中可以看出：

- *盒子总宽度 = width + padding + border + margin;*
- *盒子总高度 = height + padding + border + margin;*

**在标准的盒子模型中，`widh` 指 `content` 部分的宽度，不包含 `padding` 和 `border` 的值，所以在上述例子中，宽度 `width:200px` 再加上两边的 `padding:20px` 就是 `240px`**

### 2. IE的盒模型

以下是 IE 盒子模型：

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129114707.jpeg](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129114707.jpeg)

从上图中，可以看出：

- *盒子总宽度 = width + margin;*
- *盒子总高度 = height + margin;*

***在IE盒子模型中，`width` 表示 `content+padding+border` 这三个部分的宽度。***

## 二、如何切换盒模型

CSS 中的 box-sizing 属性定义了引擎应该如何计算一个元素的总宽度和总高度

```css
box-sizing: content-box|border-box|inherit:
```

- `content-box` ：默认值，元素的 width/height 不包含padding，border，与标准盒子模型表现一致
- `border-box` ：元素的 width/height 包含 padding，border，与 IE 盒子模型表现一致
- `inherit` ：指定 box-sizing 属性的值，应该从父元素继承

在上面的例子中，如果想要宽度限制在 200px，可以将其设置为 IE 盒子模型：

<iframe height="400" style="width: 100%;" scrolling="no" title="box-sizing-border-box" src="https://codepen.io/aaaaaandy/embed/jOZVOzV?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/aaaaaandy/pen/jOZVOzV">
  box-sizing-border-box</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

常用设置如下：

- `box-sizing: content-box;`：是W3C盒子模型，默认盒子模型
- `box-sizing: border-box;`：是IE盒子模型
