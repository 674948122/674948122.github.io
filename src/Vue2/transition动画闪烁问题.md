---
title: transition动画闪烁问题
---

## 问题描述

这个问题经常出现在路由切换动画上，或者两个div交替切换的时候。

前一个动画没有执行结束，后一个动画已经开始了，这时候就会出现闪烁的问题。

前一个div在彻底动画结束前，还占据着布局位置，看起来后面的一个div就像是闪烁了一下。

## 解决方案

在`transition`标签上添加`mode="out-in"`属性，这样就可以解决这个问题。


## 代码示例

```vue
<template>
    <transition name="fade-transverse" mode="out-in">
        <keep-alive :include="cachedViews">
            <router-view />
        </keep-alive>
    </transition>
</template>

<style lang="scss" scoped>
.fade-transverse-leave-active,
.fade-transverse-enter-active {
    transition: all .5s;
}

.fade-transverse-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transverse-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
```