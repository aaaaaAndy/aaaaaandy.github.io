🏷: #编写可维护的JavaScript  #UI层
在web开发中，用户界面中是由三个彼此隔离又相互作用的层定义的：
* HTML用来定义页面的数据和语义。
* CSS用来给页面添加样式，创建视觉特征。
* JavaScript用来给页面添加行为，使其更具交互性。

很多设计模式就是为了解决紧耦合的问题。如果两个组件耦合太紧，则说明一个组件和另一个组件直接相关，这样的话，如果修改一个组件的逻辑，那么另外一个组件的逻辑也要修改，这是很致命的。

当你做到修改一个组件而不需要更改其他的组件时，就做到了松耦合。对于多人大型系统来说，有很多人参与维护代码，松耦合对于代码可维护性来说至关重要。

需要注意的是：在一起工作的额组件无法达到“无耦合”。在所有系统中，组件之间总要共享一些信息来完成各自的工作。这很好理解，我们的目标是确保对一个组件的修改不会经常性地影响其他部分。

## 一、将CSS从JavaScript中抽离出来

有时候，保持CSS和JavaScript之间清晰的分离是很有挑战的。这两门语言相互协作得很不错，所以我们经常讲CSS和JavaScript混在一起写。

```javascript
// 不好的写法
element.style.color = "red";
```

如上，这种方法是有问题的，因为样式信息是通过JavaScript而非CSS来承载的。当出现了样式问题，你通常首先会去查找CSS，知道你精疲力竭得排除了所有可能性，才会去JavaScript中查找样式信息。

讲CSS从JavaScript中抽离出来意味着所有的样式信息都应当保持在CSS中。当需要哦通过JavaScript来修改元素样式的时候，最佳的方法是操作CSS的className，比如，我想再页面中显示一个对话框，在CSS中的样式定义是像下面这样的。

```css
.reveal {
    color: red;
    left: 10px;
    right: 10px;
    visibility: visible;
}
```

然后在JavaScript中像这样将样式添加至元素。

```javascript
// 好的写法 — jQuery
$(element).addClass("reveal");
```

有一种使用style属性的情形是可以接受的：当你需要给页面中的元素作定位，使其相对于另一个元素或整个页面重新定位。这种计算是无法再CSS 中完成的，因此这时是可以使用style.top、style.left等来对元素进行定位的，在CSS中定义这个元素的默认属性，而在JavaScript中修改这些默认值。

## 二、将JavaScript从HTML中抽离

 很多人学习JavaScript之初都是将脚本嵌入到HTML中来运行，这种写法在2000年的时候非常流行。HTML代码中放满了onclick和其他时间处理程序，很多元素都包含这样的属性。尽管这种代码在多数场景下是正常工作的，但却是两个UI层的深耦合，因此这种写法是有一些问题的。

```javascript
// 好的写法
function doSomething () {
    // code
}

var btn = document.getElementById('action-btn');
btn.addEventListener('click', doSomething, false);
```

这种方法的优势在于，函数doSomething()的定义和事件处理程序的绑定都是在一个文件中完成的，如果函数名称需要修改，则只需要修改一个文件；如果发生点击时想额外做一些动作，也只需要一处做修改。

## 三、将HTML从JavaScript中抽离


正如我们需要将JavaScript从HTML中抽离一样，最好也将 HTML从JavaScript中抽离。就像上文提到的，当需要调试一个文本或结构性的问题时，更希望从HTML开始调试，而不是忙活了半天，发现出问题的部分在JavaScript中的HTML语句中。

### 1. 从服务器加载

第一种方法是将模板放置于远程服务器，使用XMLHttpRequest对象来获取外部标签。相比于多页应用，这种方法对单页应用带来更多的便捷。例如，点击一个链接，希望弹出一个新的对话框，代码可能如下：

```javascript
function loadDialog (name, oncomplete) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "js/dialog" + name, true);

    xhr.onreadystatechange = function () {
        
        if (xhr.readyState == 4 && xhr.status == 200) {
            var div = document.getElementById("dlg-holder");
            div.innerHTML = xhr.responseText;
            oncomplete();
        }
    }
}
```

这里没有将HTML字符串嵌入在JavaScript里，而是向服务器发起请求获得字符串，这样可以让HTML代码以最合适的方式注入到页面中。当你需要注入大段HTML标签到页面中时，使用远程调用的方式来加载标签是非常有帮助的。出于性能的原因，将 大量没有用的标签存放于内存或DOM中是很糟糕的做法。

### 2. 简单客户端模板

客户端模板是一些带插槽的标签片段，这些插槽会被JavaScript程序替换为数据以保证模板的完整可用。比如，一段用来添加数据项的模板看起来就像下面这样：

```html
<li><a href="%s">%s</a></li>
```

这段模板中包含%s这个占位符，这个位置的文本会被替换掉，JavaScript程序会将这些占位符替换为真实数据，然后将结果注入DOM。

```javascript
function sprintf (text) {
    var i = 1, args = arguments;
    return text.replace(/%s/g, function () {
        return (i < args.length) ? args[i++] :  "";
    })
}
```

将模板文件传入JavaScript是这个过程的重要一环。本质上讲，你一点也不希望JavaScript中嵌入模板文本，而是将模板放置于他处。通常我们将模板定义在其他标签之间，直接存放于HTML页面里，这样可以被JavaScript读取，用两种方法即可做到：一种是在HTML注释中包含模板文本。注释是和元素及文本一样的DOM节点，因此可以通过JavaScript将其提取出来。

```html
<ul id="myList">
    <!--<li id="item%s"><a href="%s">%s</a></li>-->
    <li id="item1"><a href="item1">First Item</a></li>
    <li id="item2"><a href="item2">Second item</a></li>
</ul>
```

提取步骤如下：

```javascript
var obj = document.getElementById('myList');
var templateText = Obj.firstChild.nodeValue;
```

另一种方法是使用一个带有自定义type属性的<script>元素，浏览器会默认将<script>元素中的内容识别为JavaScript代码，但你可以通过给type赋值为浏览器不识别的类型，来告诉浏览器这不是一段JavaScript脚本，比如：

```html
<script type="test/x-my-template" id="list-item">
    <li id="item%s"><a href="%s">%s</a></li>
</script>
```

你可以通过<script>标签的text属性来提取文本

```javascript
var obj = document.getElementById('list-item');
var templateText = Obj.text
```

最后在将所提取出来的模板文本通过innerHtml方法注入到HTML文件中。

### 3. 复杂客户端模板

可以考虑使用健壮的模板类库，Handlebars是专为浏览器JavaScript设计的完整的客户端模板系统，有技术文档可查阅，此处不再赘述！

handlebars.js :   http://handlebarsjs.com/expressions.html

<!-- more -->
