---
title: pinia-plugin-persist
tag: 
    - Vue3
    - Pinia
    - Plugin
    - pinia-plugin-persist
---

## 介绍

`pinia-plugin-persist` 是一个 `Pinia` 插件，用于将 `Pinia` 状态持久化到 `localStorage` 或 `sessionStorage` 中。

官方文档：[pinia-plugin-persist](https://seb-l.github.io/pinia-plugin-persist/)

## 安装

```bash
pnpm install pinia-plugin-persist
```

## 使用

`store`初始化时，使用 `use` 方法加载插件即可。

```js
import { createPinia } from 'pinia'
import { piniaPluginPersist } from 'pinia-plugin-persist'

const store = createPinia()

store.use(piniaPluginPersist)

export default store
```

## 配置

每个`store`都可以单独配置持久化，配置项如下：

```js
const useUserStore = defineStore(
    'user',
    {
        state: () => ({
            token: '',
        }),
        // 配置持久化具体参数
        persist: {
            enabled: true, // 是否开启持久化
            strategies: [
                {
                    key: 'user', // 持久化的key
                    storage: 'localStorage', // 持久化的存储方式
                    paths: ['token'], // 持久化的字段, 不填写默认为全部
                }
            ]
        }
    }
)

export default useUserStore
```