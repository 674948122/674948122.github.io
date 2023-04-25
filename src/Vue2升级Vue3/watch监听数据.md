---
title: watch监听数据
tag: 
  - Vue3
  - watch
  - 监听数据
---
## vue2
vue2中的watch监听数据的方式有两种：
```vue
<script>
export default {
    data() {
        return {
            msg: 'hello'
        }
    },
    watch: {
        // 简单监听
        msg(newVal, oldVal) {
            console.log(newVal, oldVal)
        },
        // 深度监听
        msg: {
            deep: true,
            immediate: true,
            handler(newVal, oldVal) {
                console.log(newVal, oldVal)
            }
        }
    },
    created() {
        // 函数式监听
        const watcher = this.$watch('msg', (newVal, oldVal) => {
            console.log(newVal, oldVal)
        }, {
            deep: true,
            immediate: true
        })
        // 取消监听
        watcher()
    }

}
</script>
```
## vue3
vue3中watch的用法有所变化，用法如下：
```vue
<script setup>
import { watch, ref } from 'vue'

const msg = ref('hello')
const name = ref('world')


// 监听单个数据
watch(msg, (newVal, oldVal) => {
    console.log(newVal, oldVal)
}, {
    deep: true,
    immediate: true
})

// 监听多个数据
watch([msg, name], ([newVal, oldVal], [newVal2, oldVal2]) => {
    console.log(newVal, oldVal)
    console.log(newVal2, oldVal2)
}, {
    deep: true,
    immediate: true
})

// 取消监听
const stop = watch(msg, (newVal, oldVal) => {
    console.log(newVal, oldVal)
}, {
    deep: true,
    immediate: true
})
stop()

// 副作用清理
watch(id, async (newId, oldId, onCleanup) => {
  const { response, cancel } = doAsyncWork(newId)
  // 当 `id` 变化时，`cancel` 将被调用，
  // 取消之前的未完成的请求
  onCleanup(cancel)
  data.value = await response
})
</script>
```