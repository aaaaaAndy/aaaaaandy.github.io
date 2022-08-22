
在所有JavaScript应用中事件处理都是非常重要的。所有的JavaScript均通过事件绑定到UI上。

很多开发者都很了解，当事件触发时，事件对象（event对象）会作为回调参数传入事件处理程序中。event对象包含所有和事件相关的信息，包括事件的宿主以及其他和事件类型相关的数据。鼠标事件会将其位置信息暴露的event对象上，键盘事件会将按键信息暴露在event对象上，触屏事件会将触摸位置和持续事件暴露在event对象上，只有提供了所有这些信息，UI才会正确地执行交互。

```javascript
// 不好的写法
function handleClick(event) {
    var popup = document.getElementById('popup');
    popup.style.left = event.clientX + 'px';
    popup.style.top = event.clientY + 'px';
    popup.className = 'reveal';
}

addListener(element, 'click', handleClick);
```

这段代码只用到了event的两个属性：clientX和clientY。在将元素显示到页面之前先用这两个属性给它定位，尽管这段代码看起来非常简单并且没有什么问题，但实际上是不好的写法，因为这种做法尤其局限性。

## 一、隔离应用逻辑

将应用逻辑从所有事件处理程序中抽离出来的做法是一种最佳实践，因为说不定什么时候其他地方就会触发同一段逻辑。这样多个事件的处理程序执行了同样的逻辑，而你的代码却被不小心赋值了多份。

```javascript
// 好的写法 - 拆分应用逻辑
var MyApplication = {
    handleClick: function(event) {
        this.showPopup(event);
    },

    showPopup: function(event) {
        var popup = document.getElementById('popup');
        popup.style.left = event.clientX + 'px';
        popup.style.top = event.clientY + 'px';
        popup.className = 'reveal';
    }
}

addListener(element, 'click', function(event) {
    MyApplication.handleClick(event);
})
```

之前在事件处理程序中包含的应用逻辑现在拆分了出来，现在handleClick方法只做一件事情，即调用showPopup方法，这样使得其他相同逻辑的事件处理程序调用同一段逻辑代码更加剧方便。

## 二、不要分发事件对象

在剥离出应用逻辑之后，上段实例代码还存在一个问题，即event对象被无限制地分发，它从匿名的事件处理函数传入handleClick，然后又传入showPopup。正如上文所说，event对象上包含很多和事件相关的额外信息，而这段代码只用到了其中两个而已。这种方法在大型web应用中是不可取的，代码不够明晰就会导致BUG。

```javascript
// 好的写法
var MyApplication = {
    handleClick: function(event) {
        this.showPopup(event.clientX, event.clientY);
    },

    showPopup: function(x, y) {
        var popup = document.getElementById('popup');
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        popup.className = 'reveal';
    }
}

addListener(element, 'click', function(event) {
    MyApplication.handleClick(event);
})
```

在这段代码中，handleClick将x坐标和y坐标传入了showPopup中，代替了之前传入的事件对象，可以很清晰地看到showPopup所期望传入的参数，并且在测试或代码的任意位置都可以很轻易地调用这段逻辑。

当处理事件时，最好让事件处理程序成为接触到event对象的唯一的函数，事件处理程序应当在进入应用逻辑之前针对event对象执行任何必要的操作，，包括组织默认事件或阻止事件冒泡，都应当直接包含在事件处理程序中。比如：

```javascript
// 好的写法
var MyApplication = {
    handleClick: function(event) {

        // 阻止默认事件
        event.preventDefault();
        event.stopPropagation();
        
        // 传入应用逻辑
        this.showPopup(event.clientX, event.clientY);
    },

    showPopup: function(x, y) {
        var popup = document.getElementById('popup');
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        popup.className = 'reveal';
    }
}

addListener(element, 'click', function(event) {
    MyApplication.handleClick(event);
})
```

<!-- more -->
