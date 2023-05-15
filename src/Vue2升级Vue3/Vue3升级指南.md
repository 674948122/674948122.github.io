---
title: Vue3升级指南
---

## vue3 优点

1. 增加了代码的可维护性
Vue2 使用的是 options 的API ，代码逻辑比较分散，可读性差，可维护性差。Vue3 使用的是 compositionAPI 逻辑分明，可维护性高，更友好的支持TS。在 template 模板中支持多个根节点，支持jsx语法。

2. 提升了页面渲染性能
Vue3 在更新DOM算法上，做了优化。在 Vue2 中,每次更新diff，都是全量对比，Vue3则只对比带有标记的，这样大大减少了非动态内容的对比消耗。

3. 加强了 MVVM 双向数据绑定的效率
Vue2 的双向数据绑定是利用 ES5 的 Object.definePropert() 对对象属性进行劫持，结合 发布订阅模式的方式来实现的。Vue3 中使用了 es6 的 ProxyAPI 对数据代理。
相比于vue2.x，使用proxy的优势如下：

defineProperty只能监听某个属性，不能对全对象监听
可以省去for in、闭包等内容来提升效率（直接绑定整个对象即可）
可以监听数组，不用再去单独的对数组做特异性操作 vue3.x 可以检测到数组内部数据的变化
4. 项目可持续发展
Vue 2官方还会再维护两年，但两年后的问题和需求，官方就不承诺修复和提供解答了，Vue 3 则不会。

当然，还有其他的，这里只是列出几个主要的。

## 升级存在的隐患

1. 新的响应式系统用了 Proxy，会存在兼容性问题（不支持IE）。
2. 框架底层进行了大量重构，新增和删除了很多原来的API，代码结构也发生了变化。很多地方需要进行破坏性修改，从而容易导致各种问题的出现。
3. 项目使用到的第三方插件和 UI框架（Element）也需要替换和更改成 对应Vue3可用版本。

## 参考文档

[Vue3官方文档](https://v3.cn.vuejs.org/guide/introduction.html)

[VueRouter](https://router.vuejs.org/zh/)

[Pinia](https://pinia.web3doc.top/)

[Axios](http://www.axios-js.com/)

[Element Plus](https://element-plus.gitee.io/zh-CN/guide/design.html)

## 代码规范

使用 Prettier + ESLint + Husky 组合来实现代码规范化。

这样做带来好处：

1. 解决团队之间代码不规范导致的可读性差和可维护性差的问题。
2. 解决团队成员不同编辑器导致的编码规范不统一问题。
3. 提前发现代码风格问题，给出对应规范提示，及时修复。 减少代码审查过程中反反复复的修改过程，节约时间。
4. 自动格式化，统一编码风格，从此和脏乱差的代码说再见。

VSCode 编辑器 需要去插件市场下载插件 Prettier - Code formatter、ESLint。


## 构建工具 Vite

Vite@3.2.3    [文档链接](https://vitejs.cn/)

## 运行要求

Vue 版本：3.0以上

node 版本：Vite 需要 Node.js 版本 >= 12.0.0  我们要求为16.15.0

pnpm

nvm或者volta

浏览器：非IE浏览器

## 项目目录结构
    
```bash
├── README.md
├── html
│   └── ie.html           # 兼容IE的html
├── index.html            # 入口html
├── package.json          # 项目依赖
├── pnpm-lock.yaml        # pnpm依赖
├── public                # 静态资源
│   └── favicon.ico
├── src
│   ├── App.vue           # 入口组件
│   ├── api               # 接口
│   ├── assets            # 静态资源
│   ├── components        # 全局公共组件
│   ├── directive         # 自定义指令
│   ├── layout            # 布局
│   ├── main.js           # 项目入口文件
│   ├── permission.js     # 路由权限
│   ├── plugins           # 公共方法
│   ├── router            # 路由
│   ├── settings.js       # 项目配置文件（标题、主题等等）
│   ├── store             # 全局状态管理
│   ├── utils             # 工具类
│   └── views             # 页面
├── vite                  # vite插件
│   └── plugins
└── vite.config.js        # vite配置文件

```

## 语法和Api的改变

官方文档： [Vue 3 迁移指南](https://v3-migration.vuejs.org/zh/)

### 全局 API

1. 全局 Vue API 已更改为使用应用程序实例 [参考](https://www.jianshu.com/p/dd19cf798349)
2. 全局和内部 API 已经被重构为支持 tree-shake [参考](https://www.freesion.com/article/36781417053/)

### 模板指令

1. 组件上 v-model 用法已更改，以替换 v-bind.sync [参考](https://blog.csdn.net/qq_42460461/article/details/117898769)
2. `<template v-for>` 和非 v-for 节点上的 key用法已更改
3. 在同一元素上使用的 v-if 和 v-for 优先级已更改
4. v-bind=“object” 现在排序敏感
5. v-on:event.native 修饰符已移除
6. v-for 中的 ref 不再注册 ref 数组 [参考](https://blog.csdn.net/weixin_44869002/article/details/113173819)

### 组件

1. 只能使用普通函数创建函数式组件 [参考](https://blog.csdn.net/weixin_45895753/article/details/126060337)
2. functional attribute 在单文件组件 (SFC) 的 `<template>`和 functional 组件选项中被废弃
3. 异步组件现在需要使用 defineAsyncComponent 方法来创建 [参考](https://blog.csdn.net/weixin_44869002/article/details/113174206)
4. 组件事件现在需要在 emits 选项中声明 [参考](https://blog.csdn.net/weixin_44869002/article/details/113174738)

### 渲染函数

1. 渲染函数 API 更改
2. $scopedSlots property 已移除，所有插槽都通过 $slots 作为函数暴露[参考](https://v3-migration.vuejs.org/zh/breaking-changes/slots-unification.html)
3. $listeners 被移除或整合到 $attrs 
4. $attrs 现在包含 class 和 style attribute

### 自定义元素

1. 自定义元素检测现在在模板编译时执行
2. 特殊的 is attribute 的使用被严格限制在被保留的 `<component>` 标签中

### 其他小改变

1. destroyed 生命周期选项被重命名为 unmounted
2. beforeDestroy 生命周期选项被重命名为 beforeUnmount
3. default prop 工厂函数不再可以访问 this 上下文
4. 自定义指令的 API 已更改为与组件生命周期一致，且 binding.expression 已移除
5. data 选项应始终被声明为一个函数
6. 来自 mixin 的 data 选项现在为浅合并
7. Attribute 强制策略已更改
8. 一些过渡的 class 被重命名
9. `<TransitionGroup>` 不再默认渲染包裹元素
10. 当侦听一个数组时，只有当数组被替换时，回调才会触发，如果需要在变更时触发，则必须指定 deep 选项
11. 没有特殊指令的标记 (v-if/else-if/else、v-for 或 v-slot) 的 `<template>` 现在被视为普通元素，并将渲染为原生的 `<template>` 元素，而不是渲染其内部内容。
12. 已挂载的应用不会取代它所挂载的元素
13. 生命周期的 hook: 事件前缀改为 vnode-

### 被移除的 API

1. keyCode 作为 v-on 修饰符的支持
2. on、off 和 $once 实例方法
3. 过滤器 (filter)
4. 内联模板 attribute
5. $children 实例 property
6. propsData 选项
7. $destroy 实例方法。用户不应再手动管理单个 Vue 组件的生命周期。
8. 全局函数 set 和 delete 以及实例方法 $set 和 $delete。基于代理的变化检测已经不再需要它们了。
