---
title: rer和refs
tag: 
  - Vue3
  - ref
  - $refs
---

## vue2
原来vue2中的ref和$refs是这样的：

```html
<template>
    <div ref="div1"></div>
<template>
<script>
export default {
    mounted() {
        console.log(this.$refs.div1)
    }
}
</script>
```
## vue3
vue3中的ref和refs是这样的：

```html
<template>
    <div ref="div1"></div>
<template>
<script setup>

// 方法1
import { ref } from 'vue'
const div1 = ref(null)

// 方法2
const { proxy } = getCurrentInstance()



onMounted(() => {
    // 方法1
    console.log(div1.value)
    
    // 方法2
    console.log(proxy.$refs.div1)
})
</script>
```