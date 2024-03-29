---
title: refs组件通讯
tag: 
  - Vue3
  - refs
  - 组件通讯
  - defineExpose
---


使用API选项时，我们可以通过this.$refs.name获取指定的元素或组件，但在组合API中不行。如果我们想通过ref获取，需要定义一个同名的Ref对象，在组件挂载后可以访问。

示例代码如下：

```vue
<template>
  <ul class="parent list-group">
    <li class="list-group-item" v-for="i in childRefs?.list" :key="i">
      {{ i }}
    </li>
  </ul>
  <!-- The value of the child component ref is the same as that in the <script> -->
  <child-components ref="childRefs"></child-components>
  <!-- parent component -->
</template>
<script setup>
import { ref } from 'vue'
import ChildComponents from './child.vue'
const childRefs = ref(null)
</script>
```

子组件代码如下：

```vue
<template>
  <div class="child-wrap input-group">
    <input
      v-model="value"
      type="text"
      class="form-control"
      placeholder="Please enter"
    />
    <div class="input-group-append">
      <button @click="handleAdd" class="btn btn-primary" type="button">
        add
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, defineExpose } from 'vue'
const list = ref(['JavaScript', 'HTML', 'CSS'])
const value = ref('')
// event handling function triggered by add
const handleAdd = () => {
  list.value.push(value.value)
  value.value = ''
}
defineExpose({ list })
</script>
```

> 注意：默认情况下，setup 组件是关闭的，通过模板 ref 获取组件的公共实例。如果需要公开，需要通过defineExpose API 公开。