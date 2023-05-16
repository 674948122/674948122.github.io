---
title: VueUse
tag: 
    - Vue3
    - VueUse
    - hooks
---

## 介绍

VueUse 是一个基于 Vue3 的 hooks 库，提供了一系列的 hooks，可以让我们更方便的使用 Vue3。

[中文文档](https://www.vueusejs.com/)

## 安装

```bash
pnpm install @vueuse/core
```

## 使用

```vue
<script setup>
import { useMouse } from '@vueuse/core'


const { x, y } = useMouse() // 响应式获取鼠标位置

console.log(x.value, y.value)
</script>
```

