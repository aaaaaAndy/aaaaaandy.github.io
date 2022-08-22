---
title: Chrome支持小于12px的字体
tags: [css, Chrome, 12px]
categories: css
date: 2019-06-14 16:02:06
---

## 一、背景

Chrome 中文版浏览器会默认设定页面的最小字号是12px，英文版没有限制

原由 Chrome 团队认为汉字小于12px就会增加识别难度

- 中文版浏览器

与网页语言无关，取决于用户在Chrome的设置里（`chrome://settings/languages`）把哪种语言设置为默认显示语言

- 系统级最小字号

浏览器默认设定页面的最小字号，用户可以前往 `chrome://settings/fonts` 根据需求更改

而我们在实际项目中，不能奢求用户更改浏览器设置

对于文本需要以更小的字号来显示，就需要用到一些小技巧

## 二、解决方案

常见的解决方案有：

- zoom
- webkit-transform:scale()
- webkit-text-size-adjust:none

### 1. Zoom

`zoom` 的字面意思是“变焦”，可以改变页面上元素的尺寸，属于真实尺寸

其支持的值类型有：

- zoom:50%，表示缩小到原来的一半
- zoom:0.5，表示缩小到原来的一半

使用 `zoom` 来”支持“ 12px 以下的字体

<iframe height="300" style="width: 100%;" scrolling="no" title="font-size-min-zoom" src="https://codepen.io/aaaaaandy/embed/WNMjMmz?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/aaaaaandy/pen/WNMjMmz">
  font-size-min-zoom</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> 需要注意的是，Zoom 并不是标准属性，需要考虑其兼容性
>

![https://static.vue-js.com/3defe3c0-a343-11eb-85f6-6fac77c0c9b3.png](https://static.vue-js.com/3defe3c0-a343-11eb-85f6-6fac77c0c9b3.png)

### 2. transform:scale()

针对`chrome`浏览器,加`webkit`前缀，用`transform:scale()`这个属性进行放缩

注意的是，使用`scale`属性只对可以定义宽高的元素生效，所以，下面代码中将`span`元素转为行内块元素

<iframe height="300" style="width: 100%;" scrolling="no" title="font-size-min-scale" src="https://codepen.io/aaaaaandy/embed/QWQvmEZ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/aaaaaandy/pen/QWQvmEZ">
  font-size-min-scale</a> by aaaaaAndy (<a href="https://codepen.io/aaaaaandy">@aaaaaandy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 3. **webkit-text-size-adjust:none**

该属性用来设定文字大小是否根据设备(浏览器)来自动调整显示大小

属性值：

- percentage：字体显示的大小；
- auto：默认，字体大小会根据设备/浏览器来自动调整；
- none:字体大小不会自动调整

```html
html { 
	-webkit-text-size-adjust: none;
}
```

这样设置之后会有一个问题，就是当你放大网页时，一般情况下字体也会随着变大，而设置了以上代码后，字体只会显示你当前设置的字体大小，不会随着网页放大而变大了

所以，我们不建议全局应用该属性，而是单独对某一属性使用

> 需要注意的是，自从chrome 27之后，就取消了对这个属性的支持。同时，该属性只对英文、数字生效，对中文不生效
>

## 三、总结

- `Zoom` 非标属性，有兼容问题，缩放会改变了元素占据的空间大小，触发重排
- `webkit-transform:scale()` 大部分现代浏览器支持，并且对英文、数字、中文也能够生效，缩放不会改变了元素占据的空间大小，页面布局不会发生变化
- `webkit-text-size-adjust`对谷歌浏览器有版本要求，在27之后，就取消了该属性的支持，并且只对英文、数字生效
