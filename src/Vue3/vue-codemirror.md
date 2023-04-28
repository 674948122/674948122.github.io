---
title: vue-codemirror

---

## 简介

基于 `CodeMirror` ，适用于 `Vue` 的 `Web` 代码编辑器

[文档地址](https://www.npmjs.com/package/vue-codemirror "文档地址")

## 安装

### 安装依赖

```bash
pnpm install codemirror vue-codemirror
```

### 语言包

[语言包清单](https://github.com/orgs/codemirror/repositories?q=lang-&type=all "语言包清单")

```bash
pnpm install @codemirror/lang-javascript
```

### 主题风格

[主题包清单](https://github.com/orgs/codemirror/repositories?q=theme&type=all "主题包清单")

```bash
pnpm install @codemirror/theme-one-dark
```

## 使用

```vue
<template>
  <div>
    <codemirror
        v-model="code"
        placeholder="请输入代码..."
        :style="{ height: '100%' }"
        v-bind="options"
        :extensions="extensions"
      />
  </div>
</template>
<script setup>
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const extensions = [javascript(), oneDark]
const options = ref({
    tabSize: 4,
    mode: { name: 'yaml', json: true },
    theme: 'base16-light',
    styleActiveLine: true,
    lineNumbers: true,
    line: true,
    readOnly: true,
    indentWithTabs: true,
    smartIndent: true,
    indentUnit: 10,
    foldgutter: true,
    gutters: [
        'CodeMirror-linenumbers',
        'CodeMirror-foldgutter',
        'CodeMirror-lint-markers'
    ],
    lineWrapping: true, // 代码折叠
    foldGutter: true,
    matchBrackets: true, // 括号匹配
    autoCloseBrackets: true,
    showCursorWhenSelecting: true,
    cursorHeight: 0.85
})
const code = ref(`console.log('Hello, world!')`)

</script>
```