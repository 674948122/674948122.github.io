---
title: hook
tag: 
    - vue3
    - hook
---

## 简介

`hook` 本质是一个函数，把`setup`函数中使用的 `Composition API` 进行了封装，使得我们可以在`setup`函数中使用这些函数，而不用在`setup`函数中导入这些函数，他代替了`vue2`中`mixins`的功能，但是比`mixins`更加灵活，因为他可以在组件中任意位置使用，而不是像`mixins`一样只能在组件的顶部使用。

## 定义hook

```js
import { debounce } from '@/utils/index.js'

export default function useResize(callback) {
    let resizeHandler = null

    onMounted(() => {
        initListener()
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', resizeHandler)
        resizeHandler = null
    })

    function initListener(){
        resizeHandler = debounce(() => {
            resize()
        }, 100)
        window.addEventListener('resize', resizeHandler)
    }

    function resize() {
        callback && callback()
    }
}
```
## 使用hook

```vue
<script setup>
import useResize from '@/hooks/useResize.js'

function resize() {
    // do something
    console.log('浏览器resize')
}


useResize(() => {
    resize()
})
</script>
```