---
title: 学习一下flex布局
tags: [flex, css, 布局]
categories: css 
date: 2018-11-11 19:48:47
---

Flex（`Flexible Box`：弹性布局）布局，是 W3C 在2009年提出了一种新的方案，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持。

采用Flex布局的元素，称为Flex容器（`flex container`），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（`flex item`），简称”项目”。

![flex](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115037.png)

容器默认存在两根轴：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## 一、生成一个 Flex 布局

任何一个容器都可以指定为 Flex 布局

```css
/* 块级元素 */
.container{
    display: flex;
    
    /* Webkit内核的浏览器，须加上-webkit前缀 */
    display: -webkit-flex; 
}

/* 行内元素 */
.container{
    display: inline-flex;
}
```

需要注意的是，设为Flex布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

## 二、容器属性

以下属性是作用的容器上的。

### 1. flex-direction

flex-direction属性决定主轴的方向，默认为 row （水平）

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

 * row （水平）
   ![flex-1](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115100.png)

 * row-reverse （水平反向）
   ![flex-2-6062084](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115125.png)

 * colume （竖直）
  ![flex-3](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115141.png)

 * column-reverse （竖直反向）
  ![flex-4](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115158.png)

### 2. flex-wrap

默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

* nowrap （不换行） 
  ![flex-5](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115232.png)
  
* wrap （正常换行） 
  ![flex-6](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115248.png)

* wrap-reverse （反向换行） 
  ![flex-7](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115305.png)

### 3. flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。（其实一般没啥用）

```css
.container {
  flex-flow: <flex-direction> <flex-wrap>;
}
```

### 4. justify-content

justify-content属性定义了项目在主轴上的对齐方式。

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

* flex-start （主轴头部开始排列，左对齐） 

  ![flex-8](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115447.png)

* flex-end （主轴尾部开始排列，右对齐） 

  ![flex-9](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115459.png)

* center （主轴居中，如果元素之间没有margin则元素不会有间隔，会紧贴，以下是因为元素之间margin为5px） 
![flex-10](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115510.png)

* space-between （两端对齐，项目之间的间隔都相等） 
 ![flex-11](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115520.png)

* space-around （每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍） 
![flex-12](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115527.png)

### 5. align-items

align-items属性定义项目在交叉轴上如何对齐。

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

* flex-start (交叉轴起点对齐)
![flex-13](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115538.png)

* flex-end （交叉轴终点对齐）
![flex-14](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115548.png)

* center （交叉轴居中） 
![flex-15](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115557.png)

* baseline （项目的第一行文字的基线对齐） 
![flex-16](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115605.png)

* stretch （默认值，如果项目未设置高度或设为auto，将占满整个容器的高度） 
![flex-17](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115623.png)

### 6. align-content

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。也就是只有一行元素时无效，可用 flex-wrap: wrap; 使得元素超出换行。



```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

* flex-start （交叉轴起点对齐） 
![flex-18](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115633.png)

* flex-end （交叉轴终点对齐） 
![flex-19](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115643.png)

* center （交叉轴居中） 
![flex-20](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115654.png)

* space-between （与交叉轴两端对齐，轴线之间的间隔平均分布） 
![flex-21](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115703.png)

* space-around （每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍） 
![flex-22](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115711.png)

* stretch （默认值，轴线占满整个交叉轴） 
![flex-23](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115719.png)

## 三、元素属性

以下属性是作用的容器内部元素上的。

### 1. order

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
```

* 按order顺序排列
![flex-24](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115728.png)

### 2. flex-grow

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

* 都为1 （等分剩余空间） 
![flex-25](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115737.png)

* 中间为2，其他两个为1 （中间占据的剩余空间将比其他项多一倍。） 
![flex-26](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115749.png)

### 3. flex-shrink

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

* 都为1 （默认值，均等缩小） 
![flex-27](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115758.png)

* 前三个为0，其余为默认值1 （前三个保持宽度大小不变） 
![flex-28](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115806.png)

### 4. flex-basis

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

### 5. flex

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值： ***auto (1 1 auto) 和 none (0 0 auto)*** 。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### 6. align-self

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

* 第二个以尾部开始，其他两个以头部开始
![flex-29](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115818.png)

## 四、应用

### 1. 阿语布局

在一些从右往左的布局中，如阿语下，用 flex 布局可自动转换位置。相反，用 position 定位和 float 浮动都不能自动排列，都需要再重新判断语言，重写定位方式。

### 2. 圣杯布局（双飞翼）

```css
.container {
    display: flex;
    padding: 5px 5px;
    width: 760px;
    height: 120px;
    box-sizing: border-box;
    background-color: gainsboro;
}
.item {
    display: flex;
    margin: 5px 5px;
    width: 500px;
    height: 100px;
    background-color: gray;
}
.item:nth-child(2) {
    flex-shrink: 0;     // 不缩小
}
```

![flex-30](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115826.png)

<!-- more -->

