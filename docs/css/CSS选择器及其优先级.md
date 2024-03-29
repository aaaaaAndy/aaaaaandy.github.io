---
title: CSS选择器及其优先级
tags: [css, 选择器]
categories: css
date: 2019-01-20 14:21:06
---

## 一、选择器

CSS选择器是CSS规则的第一部分，它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式，选择器所选择的元素，叫做 ***选择器的对象***。

我们从一个`Html`结构开始

```html
<div id="box">
	<div class="one">
		<p class="one_1"></p >
		<p class="one_1"></p >
	</div>
	<div class="two"></div>
	<div class="two"></div>
	<div class="two"></div>
</div>
```

### 1. 常用的 css 选择器

1. id选择器（#box），选择id为box的元素
2. 类选择器（.one），选择类名为one的所有元素
3. 标签选择器（div），选择标签为div的所有元素
4. 后代选择器（#box div），选择id为box元素内部所有的div元素
5. 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素
6. 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素
7. 群组选择器（div,p），选择div、p的所有元素
8. 还有一些使用频率相对没那么多的选择器：
9. 伪类选择器
    
    ```css
    :link ：选择未被访问的链接
    :visited：选取已被访问的链接
    :active：选择活动链接
    :hover ：鼠标指针浮动在上面的元素
    :focus ：选择具有焦点的
    :first-child：父元素的首个子元素
    ```
    
10. 伪元素选择器
    
    ```css
    :first-letter ：用于选取指定选择器的首字母
    :first-line ：选取指定选择器的首行
    :before : 选择器在被选元素的内容前面插入内容
    :after : 选择器在被选元素的内容后面插入内容
    ```
    
11. 属性选择器
    
    ```css
    [attribute] 选择带有attribute属性的元素
    [attribute=value] 选择所有使用attribute=value的元素
    [attribute~=value] 选择attribute属性包含value的元素
    [attribute|=value]：选择attribute属性以value开头的元素
    ```

### 2. `CSS3`新增选择器

1. 层次选择器（p~ul），选择前面有p元素的每个ul元素
2. 伪类选择器
    
    ```css
    :first-of-type 表示一组同级元素中其类型的第一个元素
    :last-of-type 表示一组同级元素中其类型的最后一个元素
    :only-of-type 表示没有同类型兄弟元素的元素
    :only-child 表示没有任何兄弟的元素
    :nth-child(n) 根据元素在一组同级中的位置匹配元素
    :nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
    :last-child 表示一组兄弟元素中的最后一个元素
    :root 设置HTML文档
    :empty 指定空的元素
    :enabled 选择可用元素
    :disabled 选择被禁用元素
    :checked 选择选中的元素
    :not(selector) 选择与 <selector> 不匹配的所有元素
    ```
    
3. 属性选择器
    
    ```css
    [attribute*=value]：选择attribute属性值包含value的所有元素
    [attribute^=value]：选择attribute属性开头为value的所有元素
    [attribute$=value]：选择attribute属性结尾为value的所有元素
    ```
    
## 二、优先级计算

相信大家对`CSS`选择器的优先级都不陌生：

> 内联 > ID选择器 > 类选择器 > 标签选择器

到具体的计算层⾯，优先级是由 `A、B、C、D` 的值来决定的，其中它们的值计算规则如下：

- 如果存在 ***内联样式***，那么 A = 1, 否则 A = 0
- B 的值等于 ***ID 选择器*** 出现的次数
- C 的值等于 ***类选择器*** 和 ***属性选择器*** 和 ***伪类*** 出现的总次数
- D 的值等于 ***标签选择器*** 和 ***伪元素*** 出现的总次数

这里举个例子：

```css
#nav-global > ul > li > a.nav-link
```

套用上面的算法，依次求出 `A` `B` `C` `D` 的值：

- 因为没有内联样式 ，所以 A = 0
- ID选择器总共出现了1次， B = 1
- 类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1
- 标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3

上面算出的`A`、`B`、`C`、`D` 可以简记作：`(0, 1, 1, 3)`

知道了优先级是如何计算之后，就来看看比较规则：

- 从左往右依次进行比较 ，较大者优先级更高
- 如果相等，则继续往右移动一位进行比较
- 如果4位全部相等，则后面的会覆盖前面的

经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用`!important`
