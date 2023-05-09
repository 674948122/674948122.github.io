---
title: css深度选择器deep
tag:
    - /deep/
    - ::v-deep
    - :v-deep()
    - css
---


## 什么是深度选择器

在Vue中，我们可以通过`scoped`来给每个组件的样式添加一个唯一的标识符，这样就可以避免样式冲突的问题。但是有时候我们需要在组件内部修改全局样式，这时候就需要用到深度选择器。

## vue2

在Vue中，我们可以通过`/deep/`或者`::v-deep`来使用深度选择器。

```css
<style scoped>
    .container /deep/ .box {
        color: red;
    }
</style>
```

```css
<style scoped>
    .container ::v-deep .box {
        color: red;
    }
</style>
```

## vue3

在Vue3中，`/deep/`和`::v-deep`已经被废弃了，取而代之的是`:v-deep()`。

```css
<style scoped>
    .container :v-deep(.box) {
        color: red;
    }
</style>
```

## 参考

- [文档链接](https://cn.vuejs.org/api/sfc-css-features.html#scoped-css)