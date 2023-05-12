---
title: monorepo
tag: 
    - monorepo
---

## 介绍

`monorepo`是管理多个包的项目，可以理解为一个项目管理多个项目，这些项目可以是相互独立的，也可以是相互依赖的。

## 优点

1. 代码复用非常简单
在 Monorepo 中，由于我们所有的代码都在同一个项目下，如果我们需要引用其他一些已经定义过的功能模块，会非常方便。

我们只需要将复用频率高的代码，单独抽离出来成为一个 shared 之类的项目，那么其他所有的项目都只需要直接引用这个项目下的代码就可以了。而不用将这个项目重新打包，再在其他项目中使用。

2. 简化依赖管理
由于我们是在同一个项目下，因此对于第三方依赖的管理也会简化很多，像是之前多个项目可能有一些相同的第三方依赖包，每个项目都需要下载一遍，而我们使用 Monorepo 的框架重构项目之后，这些依赖包就可以避免重复下载，同时也能通过配置在不同的项目之间复用。

3. 原子提交能让重构全局特性更容易
当我们的一个库会影响到很多个项目时，修改了这个库之后，以往我们需要一个一个去更新对应受到影响的项目，进行相应的兼容适配工作，而修改一个问题又可能导致另外一个兼容问题。

如果受影响的项目数量很大的话，简直是人间地狱。甚至即使你花了很大精力去更新，也不一定就能保证自己没有遗漏。

而在 Monorepo 中，你的每次提交都会自动变更到受影响的项目中，也能通过编译时的错误检测机制，及时修正对应的代码，避免依赖兼容性问题的重复繁琐处理。

4. 跨组合作更方便
由于 Monorepo 的项目是由一个一个独立的项目组成的，因此我们可以在每个子项目中使用自己的工作流和技术架构，即使你将几个跨端跨语言的项目都放在一起也完全可以！

所以在跨组合作的情况下，通过同一个Monorepo来开发，能省去大量中间沟通和协作的花费。

5. 大影响范围的重构
如果我们的某个功能代码---比如一个功能库---被很多个项目引用，按照多库开发的形式，我们就需要每个受到影响的项目都进行相应的更新，但是即使这样，也避免不了某个项目漏掉了处理，导致项目并没有完全统一，新的特性没有应用上。

而 Monorepo 项目则是会即时将所有的变更应用到受影响的项目，确保最新的特性应用到了我们的项目中。

## 缺点

1. 缺乏每个项目的权限控制
Monorepo 由于将所有的子项目集成在同一个大的项目中，对于管理者来说，权限控制会变得很不方便，开发者每次拉取代码都会拉取所有的代码，无法进行精准的权限控制。

不过现在部分主流 Monorepo 框架都进行了这方面的功能开发。

2. 版本信息杂糅不清晰
同样由于所有功能都在同一个项目中，就会导致所有功能的修改都在同一个git下，不便于回溯和查找对应的历史记录。

3. 大项目在Git上表现很差
代码增多之后，整个git项目会变得越来越大，开发者拉取代码的时间也会变得更长。

不过针对这个问题，各家使用 Monorepo 的公司，要么自己开发了一套版本控制系统，要么针对现在的版本控制系统进行了优化。

4. 构建时间更长
由于有很多个项目和功能模块，Monorepo 在构建时势必会花费更多的时间。

而在这方面做的最好的应该是 Bazel，它特别针对超大型的 Monorepo 项目进行了构建优化。

## 项目结构

```bash
├── README.md
├── lerna.json
├── package.json
├── utils              # 工具函数
├── components         # 公共组件
├── packages           # 子项目
│   ├── project-a           # 项目一
│   │   ├── README.md
│   │   ├── babel.config.js
│   │   ├── dist
│   │   ├── package.json
│   │   ├── public
│   │   ├── src
│   │   ├── tests
│   │   └── vue.config.js
│   └── project-b           # 项目二
│       ├── README.md
│       ├── babel.config.js
│       ├── dist
│       ├── package.json
│       ├── public
│       ├── src
│       ├── tests
│       └── vue.config.js
└── yarn.lock
```
## 实施过程

### 创建项目

创建一个文件夹取名`monorepo-workspace`。

### lerna

`Lerna` 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。[文档地址](https://www.lernajs.cn/)

安装`lerna`。

```bash
npm install --global lerna
```

### 初始化项目

```bash
cd monorepo-workspace
lerna init
```

这时你的项目结构应该是这样的。

```bash
├── README.md
├── lerna.json
├── package.json
└── packages
```

### 创建配置文件

根目录新建文件`pnpm-workspace.yaml`

编辑文件内容。

```yaml
packages:
  # all packages or sub projects in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  - 'apis/**'
  - 'utils/**'
  - 'mixins/**'
  - 'commom-libs/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

### 创建子项目

```bash
cd packages
pnpm create vite
```

依次创建项目`project-a`、`project-b`。

### 创建utils分包

回到项目根目录，运行命令。

```bash
pnpm create vite
```
删除无用文件，比如`index.html`、`main.js`、`App.vue`之类的。

创建文件`/utils/src/main.js`，暴露函数`unique`。
  
```js
// 数组去重
export function unique(arr) {
    return Array.from(new Set(arr));
}
```

创建文件`/utils/index.js`

```js
import { unique } from './src/main'

export const mathUtils = {
    unique,
    msg: '我是来自utils分包的msg'
}
```

修改文件`/utils/package.json`。

```json
{   
    "name": "@monorepo/utils",
    "main": "index.js",
}
```

### 子项目引入utils分包

进入`project-a`项目，安装依赖。

```bash
pnpm add @monorepo/utils
```

使用utils分包里的函数。

```js
import { mathUtils } from '@monorepo/utils'
console.log(mathUtils.unique([1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10]))
```

### 创建components分包

回到项目根目录，运行命令。

```bash
pnpm create vite
```

创建一个vue组件`/components/src/components/DemoComponent.vue`

创建文件`/components/index.js`

```js
import DemoComponent from "./src/components/DemoComponent.vue";

export default {
    DemoComponent,
};
```

修改文件`/components/package.json`。

```json
{   
    "name": "@monorepo/components",
    "main": "index.js",
}
```

### 子项目引入components分包

进入`project-a`项目，安装依赖。

```bash
pnpm add @monorepo/components
```

使用components分包里的组件

```vue
<script setup>
import mathComponents from '@monorepo/components'
const { DemoComponent } = mathComponents

</script>

<template>
    <div>
        <DemoComponent />
    </div>
</template>
```



## 常用命令

### pnpm

#### 运行

需要进入到对应的子项目目录下运行。

```bash
pnpm run dev
```

或者在根目录下运行。

```bash
pnpm run --filter ./packages/project-a dev
```

### lerna

#### 运行

根目录下运行，会同时运行所有子项目的`dev`命令。

```bash
lerna run dev
```

## 结语

至此,关于项目中引入`monorepo`模块就完成了,其它分包则根据具体业务需要自行扩展

[项目地址](https://github.com/674948122/monorepo-workspace)