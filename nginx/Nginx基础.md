---
title: Nginx基础
tags: [nginx, 常用命令]
categories: Nginx
date: 2022/5/25 10:40 PM
---

## 一、安装

### 1. windows系统

去到[nginx官网下载页](https://nginx.org/en/download.html)下载对应版本即可

### 2. MaxOS系统

```bash
brew install nginx
```

### 3. Linux系统

- 通过`rpm`镜像源安装

```bash
rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

yum install -y nginx
```

- 手动解压安装

```bash
yum install pcre pcre-devel

yum install zlib zlib-devel

yum install gcc-c++

yum install openssl openssl-devel

wget -c https://nginx.org/download/nginx-1.16.0.tar.gz

tar -zxvf nginx-1.16.0.tar.gz

cd nginx-1.16.0

./configure  # 默认安装在/usr/local/nginx

make && make install

ln -s /usr/local/nginx/sbin/nginx /usr/local/sbin/nginx
```

## 二、卸载

主旨：删除nginx目录即可

- `yum`方式安装的 `nginx`

```bash
yum remove nginx
```

- 手动卸载

```bash
rm -rf /etc/nginx/

rm -rf /usr/sbin/nginx

rm /usr/share/man/man1/nginx.1.gz

apt-get remove nginx*
```

## 三、常用命令

### 1. Nginx启动

```bash
# 需要配置环境变量Nginx，全局支持Nginx命令
nginx

# 在bin目录下执行
./nginx

# 指定配置文件的启动
nginx -c /etc/nginx/nginx.conf          
```

### 2. Nginx关机

```bash
# 快读关闭Nginx，不保存相关信息，立即结束web服务
nginx -s stop

# 平滑关闭Nginx，保存相关信息，有安排地结束web服务，即处理完所有请求后再关闭
nginx -s quit
```

### 3. 重启Nginx服务

Nginx的重启是平滑启动（即不关机重新加载配置文件）

```bash
# 全局任何一个位置都可以使用，需要全局支持Nginx命令才可以使用
nginx -s reload

# 需要在nginx/sbin目录下才可以使用
./nginx -s reload  
```

### 4. 校验配置文件是否正确

```bash
nginx -t /etc/nginx/nginx.conf
```

### 5. 查看Nginx版本信息

```bash
nginx -v            # 显示版本信息并退出
nginx -V            # 显示版本信息和配置信息并退出
```

### 6. 查看帮助信息

```bash
nginx -h,-?
```

### 7. 查看进程号

```bash
ps -ef | grep nginx
```

### 8. 杀死进程

```bash
kill -QUIT xxxid
```

### 9. 常用命令参数

| 参数 | 功能 |
| --- | --- |
| -?,-h | 打开帮助信息 |
| -v | 显示版本信息并退出 |
| -V | 显示版本和配置选项信息，然后退出 |
| -t | 检测配置文件是否有语法错误，然后退出 |
| -q | 在检测配置文件期间屏蔽非错误信息 |
| -s | 给一个 Nginx 主进程发送信号：stop（强制停止）, quit（优雅退出）, reopen（重启）, reload（重新加载配置文件） |
| -p | 设置前缀路径（默认是：/usr/share/nginx/） |
| -c | 设置配置文件（默认是：/etc/nginx/nginx.conf） |
| -g | 设置配置文件外的全局指令 |

# 参考文档：

- [nginx下载地址](https://nginx.org/en/download.html)

<!-- more -->
