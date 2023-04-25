
# props组件通讯
## vue2
vue2中的props写法：
```vue
<!-- 父组件 -->
<template>
    <div>
        <Child :list="list"></Child>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list: [1, 2, 3]
        }
    }
}
</script>
<!-- 子组件 -->
<template>
    <div>
        <span v-for="item in list" :key="item">{{item}}</span>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        console.log(this.list)
    }
}
</script>
```
## vue3
vue3中的props写法：
```vue
<!-- 父组件 -->
<template>
    <div>
        <Child :list="list"></Child>
    </div>
</template>
<script setup>
const list = ref([1, 2, 3])
</script>
<!-- 子组件 -->
<template>
    <div>
        <span v-for="item in list" :key="item">{{item}}</span>
    </div>
</template>
<script setup>
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})

console.log(props.list)
</script>

```