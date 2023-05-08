---
title: 解决elementplus键盘回车事件导致页面刷新的问题
tag:
    - vue
    - element-plus
    - input
    - enter
    - 页面刷新
---

## 问题描述

在使用vue+element-plus开发项目时，遇到了一个问题，就是在input输入框中按下回车键，页面会刷新，这个问题在element-ui中也存在。

## 解决方案

`el-from` 加上 `@submit.native.prevent`

```vue
<template>
    <el-form @submit.native.prevent>
        <el-form-item label="搜索">
            <el-input
                placeholder="请输入搜索内容"
                @keyup.enter="search"
            ></el-input>
        </el-form-item>
    </el-form>
</template>
```

## 参考

W3C 标准中有如下规定：


When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.

即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 标签上添加 @submit.native.prevent。