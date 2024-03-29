---
title: git
slug: /git
sidebar_position: 1
---

## 1.  基础

[Git](https://git-scm.com/)是`Linux`之父[Linus Torvalds](https://github.com/torvalds)继`Linux`内核之后奉献给全世界程序员的第二个礼物。

`Git`是目前使用最广泛的**分布式版本管理工具**，它改变了全世界程序员的代码版本管理和生产协作模式，极大地促进了开源软件运动的发展。

-   `git`下载地址：[https://git-scm.com/downloads](https://git-scm.com/downloads)
-   `git`安装文档：[https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

-   `git`官方文档地址：[https://git-scm.com/docs](https://git-scm.com/docs)

## 2. 什么是`Git`

首先明确一点的是，`Git`是一个完全不同于其他`VCS`版本管理工具（如`CVS`、`Subversion`等）的存在，虽然他们的客户端看起来很相似。所以在学习`Git`之前应该先忘掉之前你脑海中关于其他版本管理工具的概念，因为`Git`是从一个完全不同的角度去考虑，处理，存储数据。

### 2.1 `Snapshots`快照

首先来说，`git`与其他的`VCS`工具最大的不同在于数据的处理上。

传统的`VCS`工具都是以文件系统来存储数据，它们存储的是一组文件和每个文件随时间逐步积累的差异。这样做的好处是节省磁盘空间，缺点是效率低，尤其在每次切换版本时，都需要在基本文件的基础上，计算每个文件的差异，从而生成目标版本对应的文件。

`git`是以文件快照的形式保存数据，类似于备份。为了效率，如果文件没有修改，`git`不再重新存储该文件，而是只保留一个链接指向之前存储的文件。`git`快照的缺点是占用磁盘空间较大，优点是切换版本，对比差异时非常快，因为每个版本都是完整的文件快照。`git`的思想就是以空间换时间。

### 2.2 本地化操作

`git`几乎所有的操作都可以在本地执行，而不需要联网，这得益于`git`的**分布式**思想，每个节点都有自己的仓库，远程仓库只做同步使用。

传统的`VCS`工具都要求中心版本库高可用，对网络依赖较高，一旦网络本盘，则无法提交代码，无法查看历史记录。

### 2.3 数据完整

`git`采用40位的`SHA-1`哈希编码对文件内容进行计算并存储，这极大的保证了数据的完整性，只要对比前后`hash`编码是否一致就可以知道是否发生了改动。

### 2.4 只增不删

`git`的工作模式是只增不删，对`git`数据库来说，只有增加操作，没有删除操作。即使是现在工作目录中删了文件再提交到`git`，`git`也会认为这是新增了一个删除记录，在`git`的版本中，还是可以找到之前的删除文件。

## 3. 工作区

`git`有三个工作区：工作目录、索引(index)，`git`仓库。这三个工作区都存在与本地磁盘上，而类似于`github`的代码管理平台只是提供了一个远程仓库，只作为代码同步之用。

这里以最常用的四个命令来讲解：

-   `git add .`：将工作目录的所有文件添加到暂存区；
-   `git commit -m 'commit msg’`：将暂存区的改动文件提交到本地仓库；
-   `git pull`&`git push`：本地仓库与远程仓库的代码同步；

也正是因为每个人本地都有一个代码仓库，所以`git`才可以离线操作。

![areas](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210520104419.png)

## 4. 分布式

`Git`与其他版本管理工具最大的不同是，`git`是一个**分布式版本管理工具**，那么究竟什么是分布式呢？

### 4.1 `svn`

这里以`subversion`版本管理工具为例，下图代表了程序员进行代码生产以及程序员间围绕代码仓库进行协作的模式：

![img{512x368}](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210519174408.png)

`subversion`是基于**中心版本仓库**进行版本管理协作的工具。所有的开发人员开始生产代码之前必须先从中心仓库`checkout`一份代码拷贝到自己本地的工作目录。这里就要求中心仓库始终高可用，如果中心仓库挂掉了，那么整个版本管理过程也将停止，程序员就无法工作。

### 4.2 `git`

如果我们使用`Git`，那么过程就如下图所示：



![img{512x368}](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210519174359.png)

如上图所示，`Git`的工作模式就是分布式，也是一种去中心化的模式，每个程序员本地都有一个本地`git`仓库，而不仅仅是一份代码拷贝，这个仓库就是一个独立的版本管理节点，它拥有程序员进行代码生产、版本管理、与其他程序员协作的全部信息。即便在一台没有网络连接的机器上，程序员也能利用该仓库完成代码生产和管理工作。在网络`ok`的情况下，任意两个`git`仓库之间可以进行点对点的协作，这种协作无需中心仓库的参与。

### 4.3  `github`

`git`实现的是分布式版本管理系统，但是如何将多个程序员的代码进行同步管理，这就需要一个类似于`控制平面`的工具，`github`就扮演这样一个角色，它实现了代码的托管、发现、控制等等。

`github`类似于一个**中心仓库**，但是它又和`subversion`的中心仓库有着本质上的不同，这个仓库只是一个`upstream`库，是一个权威库，不同协作节点的程序员可以将各自的本地仓库变化同步到`github`这个中心仓库上，以供其他程序员再同步到本地。但是所有程序员节点的代码生产和版本管理操作完全可以脱离该所谓**中心仓库**而独立实施。

![img{512x368}](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210519175437.png)
