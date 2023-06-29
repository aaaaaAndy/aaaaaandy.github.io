---
title: 谈谈对BFC布局的理解
tags: [css, BFC]
categories: css 
date: 2018-08-20 20:02:06
---

## 一、概念

在解释 BFC 之前，我们先介绍 `Box、Formatting Context` 的概念。

### 1. Box

Box 是 CSS 布局的对象和基本单位， 就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 `Formatting Context`（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。

### 2. Formatting context

`Formatting context` （格式化上下文） 是`W3C CSS2.1`规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用

### 3. BFC

`BFC`，即`Block Formatting Contexts`（块级格式化上下文），它属于上述定位方案的普通流。具有BFC特性的元素可以看做是隔离了的独立容器，***容器里面的元素不会再布局上影响到外面的元素***，并且BFC具有普通容器所没有的一些特性。也就是说，可以把BFC，理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

## 二、BFC 规则

### 1. 规则

* 内部的Box会在垂直方向，一个接一个地放置。
* Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
* 每个元素的`margin box`的左边， 与包含块`border box`的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
* BFC的区域不会与`float box`重叠。
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
* 计算BFC的高度时，浮动元素也参与计算

### 2. 触发BFC

* `body`：`body`根元素
* `float`：浮动元素：`float`除`none`以外的值
* `position`：绝对定位元素：`position（absolute、fixed）`
* `display`：`display`为`inline-block、table-cells、flex`
* `overflow`：`overflow`除了`visible`以外的值`（hidden、auto、scroll）`（常用）

## 三、BFC常见应用

### 1. 阻止外边距折叠

margin塌陷问题：在标准文档流中，块级标签之间竖直方向的margin会以大的为准，这就是margin的塌陷现象。可以用`overflow: hidden;`产生BFC来解决。

- 非 BFC 布局，效果如下，两个容器外边距都是100px，但是实际上两个容器之间的边距总共只有100px
 
    <iframe height="600" style="width: 100%;" scrolling="no" title="bfc-margin" src="https://codepen.io/aaaaaandy/embed/dydzjKM?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/aaaaaandy/pen/dydzjKM">
      bfc-margin</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>

- 将每一个 block 放入一个 BFC 容器中，（其实将一个 block 元素放入 BFC 容器中也行），给 container 添加了 `overflow: hidden;` 属性之后，该元素就变成了 BFC 容器，其内部的元素将不会影响到外部元素。

    <iframe height="700" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/aaaaaandy/embed/poarZOQ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/aaaaaandy/pen/poarZOQ">
      Untitled</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>


### 2. 清除浮动

- 浮动的元素会脱离普通文档流，也就撑不起来父元素的高度。如下，我们给了父元素边框 1px 的宽度，由此可以看到，内部元素添加浮动属性之后，父元素的高度只剩下了上下两个边框的高度。

    <iframe height="400" style="width: 100%;" scrolling="no" title="bfc-float" src="https://codepen.io/aaaaaandy/embed/oNEeMmL?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/aaaaaandy/pen/oNEeMmL">
      bfc-float</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>

- 添加属性使得父元素变为 BFC 容器，解决浮动引起的问题

    <iframe height="400" style="width: 100%;" scrolling="no" title="bfc-clear-float" src="https://codepen.io/aaaaaandy/embed/eYVEjxa?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/aaaaaandy/pen/eYVEjxa">
      bfc-clear-float</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>

### 3. 防止元素被浮动元素覆盖

- 一个浮动元素覆盖了正常文档流元素

    <iframe height="300" style="width: 100%;" scrolling="no" title="bfc-cover" src="https://codepen.io/aaaaaandy/embed/YzexjMZ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/aaaaaandy/pen/YzexjMZ">
      bfc-cover</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>

- 变为 BFC 容器，给正常流元素添加 `overflow: hidden;` 触发其成为 BFC 容器。 该方法可用于自适应两栏布局。

    <iframe height="300" style="width: 100%;" scrolling="no" title="bfc-fix-cover" src="https://codepen.io/aaaaaandy/embed/JjpyBqG?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/aaaaaandy/pen/JjpyBqG">
      bfc-fix-cover</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>


<!-- more -->
