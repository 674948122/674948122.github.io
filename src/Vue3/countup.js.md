---
title: countup.js
tag: 
    - countup.js
    - vue3
    - 数字滚动
---

## 介绍

`countup.js` 是一个用于数字滚动的插件，可以用于数字滚动、金额滚动等。

## 安装

```bash
pnpm install countup.js
```

## 使用

```vue
<template>
  <span></span>
</template>
<script setup>
import { CountUp } from 'countup.js';
const { proxy } = getCurrentInstance();

const endVal = 1000;

function init() {
    // proxy.$el 为当前组件的根元素
    // endVal 为最终的值
    // options 为配置项
    const countUp = new CountUp(proxy.$el, endVal, {
        // ...options
    });
    countUp.start();
}

onMounted(() => {
    init();
})

</script>
```