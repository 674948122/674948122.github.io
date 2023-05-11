---
title: props数据单向流
tag: 
    - vue3
    - props
    - 数据单向流
---

## Unexpected mutation of “xxx“ prop.(eslintvue/no-mutating-props)

`eslint`校验报这个错，其实是`Vue的单向数据流的概念，因为识别到子组件中修改了props值`。

### 错误示例

```vue
<template>
    <el-input v-model="name" />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>
```

### 正确示例

```vue
<template>
    <el-input v-model="_name" />
</template>

<script setup>
const emit = defineEmits(['update:name'])

const props = defineProps({
    name: {
        type: String,
        default: ''
    }
})

const _name = computed({
    get: () => props.name,
    set: val => {
        emit('update:name', val)
    }
})

</script>
```