---
title: computed计算属性
---


## Vue2

```vue
<template>
    <div>{{ fullName }}</div>
</template>
<script>
export default {
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(val) {
        const [firstName, lastName] = val.split(' ')
        this.firstName = firstName
        this.lastName = lastName
      }
    }
  }
}
</script>
```

## Vue3

```vue
<template>
    <div>{{ fullName }}</div>
</template>
<script setup>

const firstName = ref('Foo')
const lastName = ref('Bar')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
const fullName = computed({
  get: () => {
    return `${firstName.value} ${lastName.value}`
  },
  set: (val) => {
    const [firstName, lastName] = val.split(' ')
    firstName.value = firstName
    lastName.value = lastName
  }
})

</script>
```