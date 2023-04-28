---
title: chrome真机调试
tag: 
    - chrome
    - 调试
    - 移动端
    - inspect
---


## 准备工作

- 手机和电脑在同一局域网内

- 手机打开开发者模式，开启USB调试

- PC需要翻墙！！！

## 连接

- chrome浏览器输入url `chrome://inspect/#devices`

- 点击`port forwarding`，添加端口映射

- 点击`discover usb devices`，选择手机

- 点击`inspect`，打开调试窗口

## 微信环境H5调试

- 打开微信，访问`http://debugxweb.qq.com/?inspector=true`，开启真机调试

- 后面与普通H5调试一样