---
title: transition结合animate.css
---

## 介绍

`animate.css`是一个动画库，可以实现各种各样的动画效果。

`Vue`的`transition`标签可以结合`animate.css`来实现动画效果。

[文档链接](https://animate.style/)

## 安装

```bash
npm install animate.css --save
```

## 引入


```js
// main.js

import 'animate.css'
```

## 使用

替换动画class即可

`enter-active-class="animate__animated 进入动画class"`

`leave-active-class="animate__animated 离开动画class"`

```vue
<template>
    <!-- 设置进入、离开动画 -->
    <transition
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__bounceOut"
        mode="out-in"
    >
        <router-view />
    </transition>
</template>

<style lang="scss" scoped>
</style>
```
