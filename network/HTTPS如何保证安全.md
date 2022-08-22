---
title: HTTPS如何保证安全
---

## 一、安全特性

`HTTP`的通信存在以下问题：

- 明文传输，内容可能被窃听；
- 不验证对方身份，因此可能遭遇伪装

而`HTTPS`的出现在正是为了解决这些问题，`HTTPS`建立在`SSL`之上，其安全性由`SSL`来保证。

> SSL(Secure Sockets Layer 安全套接字协议),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议

![https](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220309113650.png)

## 二、如何实现安全

`SSL`实现这些功能主要依赖四种手段：

- 对称加密：采用协商的密钥对数据加密；
- 非对称加密：实现身份认证和密钥协商；
- 摘要算法：验证信息的完整性；
- 数字签名：身份验证

### 1. 对称加密

对称加密指的是加密和解密使用的秘钥都是同一个，是对称的。只要保证了密钥的安全，那整个通信过程就可以说具有了机密性。

![对称加密](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220309113946.png)

### 2. 非对称加密

非对称加密，存在两个秘钥，一个叫公钥，一个叫私钥。两个秘钥是不同的，公钥可以公开给任何人使用，私钥则需要保密。

公钥和私钥都可以用来加密解密，但公钥加密后只能用私钥解密，反过来，私钥加密后也只能用公钥解密。

![非对称加密](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220309114112.png)

### 3. 混合加密

在HTTPS通信过程中，采用的是对称加密+非对称加密，也就是混合加密。

HTTPS采用非对称加密解决秘钥交换的问题，采用对称加密进行数据的通信。

![混合加密](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220309114250.png)

在上述加密的基础上仍需加上完整性、身份验证的特性，来实现真正的安全，实现这一功能则是摘要算法。

### 4. 摘要算法

实现完整性的手段主要是摘要算法，也就是常说的散列函数，哈希函数。

可以理解成一种特殊的压缩算法，它能够把任意长度的数据“压缩”成固定长度、而且独一无二的“摘要”字符串，就好像是给这段数据生成了一个数字“指纹”。

摘要算法保证了“数字摘要”和原文是完全等价的。所以，我们只要在原文后附上它的摘要，就能够保证数据的完整性。

![摘要算法](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220309114549.png)

### 5. 数字签名

数字签名能确定消息确实是由发送方签名并发出来的，因为别人假冒不了发送方的签名。

原理其实很简单，就是用私钥加密，公钥解密。

签名和公钥一样完全公开，任何人都可以获取。但这个签名只有用私钥对应的公钥才能解开，拿到摘要后，再比对原文验证完整性，就可以像签署文件一样证明消息确实是你发的

![数字签名](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220309114718.png)

### 6. CA验证机构

数字证书认证机构处于客户端与服务端双方都可信赖的第三方机构的立场。

CA 对公钥的签名认证要求包括序列号、用途、颁发者、有效时间等等，把这些打成一个包再签名，完整地证明公钥关联的各种信息，形成“数字证书”

![CA](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220309114740.png)

- 服务器的运营人员向数字证书认证机构提出公开密钥的申请
- 数字证书认证机构在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名
- 然后分配这个已签名的公开密钥，并将该公开密钥放入公钥证书后绑定在一起
- 服务器会将这份由数字证书认证机构颁发的数字证书发送给客户端，以进行非对称加密方式通信

接到证书的客户端可使用数字证书认证机构的公开密钥，对那张证书上的数字签名进行验证，一旦验证通过，则证明：

- 认证服务器的公开密钥的是真实有效的数字证书认证机构
- 服务器的公开密钥是值得信赖的

## 三、`HTTPS`工作流程

![https](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220309115130.png)

1. Client发起一个HTTPS（比如`https://www.baidu.com`的请求，根据RFC2818的规定，Client知道需要连接Server的443（默认）端口。
2. Server把事先配置好的公钥证书（public key certificate）返回给客户端。
3. Client验证公钥证书：比如是否在有效期内，证书的用途是不是匹配Client请求的站点，是不是在CRL吊销列表里面，它的上一级证书是否有效，这是一个递归的过程，直到验证到根证书（操作系统内置的Root证书或者Client内置的Root证书）。如果验证通过则继续，不通过则显示警告信息。
4. Client使用伪随机数生成器生成加密所使用的对称密钥，然后用证书的公钥加密这个对称密钥，发给Server。
5. Server使用自己的私钥（private key）解密这个消息，得到对称密钥。至此，Client和Server双方都持有了相同的对称密钥。
6. Server使用对称密钥加密“明文内容A”，发送给Client。
7. Client使用对称密钥解密响应的密文，得到“明文内容A”。
8. Client再次发起HTTPS的请求，使用对称密钥加密请求的“明文内容B”，然后Server使用对称密钥解密密文，得到“明文内容B”。


## 四、参考文档

- [https://github.com/febobo/web-interview/issues/135](https://github.com/febobo/web-interview/issues/135)
- [https://juejin.cn/post/6844903830987997197#heading-7](https://juejin.cn/post/6844903830987997197#heading-7)
