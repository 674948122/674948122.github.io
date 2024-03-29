---
title: Vue.prototype全局属性
tag: 
  - Vue3
  - Vue.prototype
  - globalProperties
---
## vue2
vue2中可以通过Vue.prototype来定义全局属性，在组件中可以通过this来访问这些属性。

```js
// main.js
Vue.prototype.$http = axios
```

```vue
<script>
export default {
  mounted() {
    this.$http.get('/api').then(res => {
      console.log(res)
    })
  }
}
</script>
```
## vue3

vue3中Vue.prototype被废弃了，取而代之的是app.config.globalProperties，用法如下：

```js
// main.js
app.config.globalProperties.msg = 'hello'
```

```vue
<script setup>
const { proxy } = getCurrentInstance()

console.log(proxy.msg) // hello
</script>
```