🏷: #react #refs
***
## 一、是什么

`Refs` 在计算机中称为弹性文件系统（英语：Resilient File System，简称ReFS）

`React` 中的 `Refs`提供了一种方式，允许我们访问 `DOM `节点或在 `render `方法中创建的 `React `元素

本质为`ReactDOM.render()`返回的组件实例，如果是渲染组件则返回的是组件实例，如果渲染`dom`则返回的是具体的`dom`节点

## 二、如何使用

创建`ref`的形式有三种：

- 传入字符串，使用时通过 this.refs.传入的字符串的格式获取对应的元素
- 传入对象，对象是通过 React.createRef()  方式创建出来，使用时获取到创建的对象中存在 current 属性就是对应的元素
- 传入函数，该函数会在 DOM 被挂载时进行回调，这个函数会传入一个 元素对象，可以自己保存，使用时，直接拿到之前保存的元素对象即可
- 传入hook，hook是通过 useRef() 方式创建，使用时通过生成hook对象的 current 属性就是对应的元素

### 传入字符串

只需要在对应元素或组件中`ref`属性

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref="myref" />;
  }
}
```

访问当前节点的方式如下：

```javascript
this.refs.myref.innerHTML = "hello";
```

官网并不建议使用字符串形式的 `ref`，原因如下：
1. `string ref` 不可组合。 例如一个第三方库的父组件已经给子组件传递了 ref，那么我们就无法在在子组件上添加 ref 了。 另一方面，回调引用没有一个所有者，因此您可以随时编写它们。
2. `string ref` 的所有者由当前执行的组件确定。 这意味着使用通用的“渲染回调”模式（例如react），错误的组件将拥有引用（它将最终在react上而不是您的组件定义renderRow）。
3. `string ref` 不适用于Flow之类的静态分析。 Flow不能猜测框架可以使字符串ref“出现”在react上的神奇效果，以及它的类型（可能有所不同）。 回调引用比静态分析更友好。
4. `string ref` 强制React跟踪当前正在执行的组件。 这是有问题的，因为它使react模块处于有状态，并在捆绑中复制react模块时导致奇怪的错误。在 reconciliation 阶段，React Element 创建和更新的过程中，ref 会被封装为一个闭包函数，等待 commit 阶段被执行，这会对 React 的性能产生一些影响。

### 传入对象

`refs`通过`React.createRef()`创建，然后将`ref`属性添加到`React`元素中，如下：

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

当 `ref` 被传递给 `render` 中的元素时，对该节点的引用可以在 `ref` 的 `current` 属性中访问

```javascript
const node = this.myRef.current;
```

### 传入函数

当`ref`传入为一个函数的时候，在渲染过程中，回调函数参数会传入一个元素对象，然后通过实例将对象进行保存

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={element => this.myref = element} />;
  }
}
```

获取`ref`对象只需要通过先前存储的对象即可

```javascript
const node = this.myref 
```

如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

### 传入hook

通过`useRef`创建一个`ref`，整体使用方式与`React.createRef`一致

```jsx
function App(props) {
  const myref = useRef()
  return (
    <>
      <div ref={myref}></div>
    </>
  )
}
```

获取`ref`属性也是通过`hook`对象的`current`属性

```javascript
const node = myref.current;
```

上述三种情况都是`ref`属性用于原生`HTML`元素上，如果`ref`设置的组件为一个类组件的时候，`ref`对象接收到的是组件的挂载实例

注意的是，不能在函数组件上使用`ref`属性，因为他们并没有实例

## 三、应用场景

在某些情况下，我们会通过使用`refs`来更新组件，但这种方式并不推荐，更多情况我们是通过`props`与`state`的方式进行去重新渲染子元素

过多使用`refs`，会使组件的实例或者是`DOM`结构暴露，违反组件封装的原则

例如，避免在 `Dialog` 组件里暴露 `open()` 和 `close()` 方法，最好传递 `isOpen` 属性

但下面的场景使用`refs`非常有用：

- 对Dom元素的焦点控制、内容选择、控制
- 对Dom元素的内容设置及媒体播放
- 对Dom元素的操作和对组件实例的操作
- 集成第三方 DOM 库


## 参考文献

- https://zh-hans.reactjs.org/docs/refs-and-the-dom.html
- https://segmentfault.com/a/1190000020842342
- https://vue3js.cn/interview
