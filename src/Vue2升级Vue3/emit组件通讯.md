---
title: $emit组件通讯
tag: 
  - Vue3
  - $emit
  - 组件通讯
  - emit
  - defineEmit
---
## vue2

在vue2中的写法：
    
```vue
<!-- 子组件 -->
<template>
    <div>
        <button @click="emitSomeThing">发送</button>
    </div>
</template>
<script>
export default {
    methods: {
        emitSomeThing() {
            this.$emit('change', '子组件传递的数据')
        }
    }
}
</script>
<!-- 父组件 -->
<template>
    <div>
        <Child @change="onChange"></Child>
    </div>
</template>
<script>
export default {
    methods: {
        // 接收子组件传递的数据
        onChange(event) {
            console.log(event) 
        }
    }
}
</script>

```
## vue3
在vue3中的写法：
    
```vue
<!-- 子组件 -->
<template>
    <div>
        <button @click="emitSomeThing">发送</button>
    </div>
</template>
<script setup>
// 定义emit
const emit = defineEmits(['change'])

function emitSomeThing() {
    // 发送数据
    emit('change', '子组件传递的数据')
}
</script>
<!-- 父组件 -->
<template>
    <div>
        <Child @change="onChange"></Child>
    </div>
</template>
<script setup>
// 接收子组件传递的数据
function onChange(event) {
    console.log(event) 
}
</script>
```