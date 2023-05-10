---
title: vite版本的eslint配置
tag: 
    - vue3
    - vite
    - eslint
    - husky
---

## eslint配置

### vite-pretty-lint

`vite-pretty-lint`库是一个为`Vite`创建的`Vue`或`React`项目初始化`eslint`和`prettier`的库。

该库的目的是为了让开发者在创建项目时，不需要手动配置`eslint`和`prettier`，而是通过`vite-pretty-lint`库来自动配置。

[文档链接](https://www.npmjs.com/package/create-vite-pretty-lint)




### 初始化

进入项目目录运行命令,3种任选，这里我选择`pnpm`

```bash
// NPM
npm init vite-pretty-lint

// YARN
yarn create vite-pretty-lint

// PNPM
pnpm create vite-pretty-lint
```

这里会有一些选项，根据自己项目的实际情况选择即可，一路回车。

安装完成之后，可以发现目录下多了几个文件，分别是 `.eslintrc.json` 、`.eslintignore`、 `.prettierrc.json`。这就是通过以上命令生成的 `eslint` 和 `prettier` 相关配置文件。

它还会自动修改`vite.config.js`文件，添加`eslint`相关配置。

如果你的项目结构不是默认的，那么你需要手动修改`vite.config.js`文件，添加`eslint`相关配置。

### 修改`.eslintrc.json`

这里是因为`vite-plugin-eslint`不识别`json`文件，所以需要修改为`js`文件。

除了文件后缀名，内容也要修改，`json`开头就是`{}`, `js`开头是`module.exports = {}`


### `unplugin-auto-import/vite`冲突问题

如果你的项目里使用了`unplugin-auto-import/vite`自动引入插件，那么可能会导致eslint报错。

修改`unplugin-auto-import/vite`配置

```js
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    dts: false,
    eslintrc: {
      // 平时关闭，自动引入配置更新时开启一次
      enabled: false
    }
  })
}
```

将`eslintrc.enabled`改成`true`后，运行项目，会在项目根目录生成文件`.eslintrc-auto-import.json`

将这个文件引入到`.eslintrc.js`中

```js
module.exports = {
    extends: ['./.eslintrc-auto-import.json']
}
```

### 总结

至此`eslint`和`prettier`的配置就基本完成了，如果你的项目中还有其他的`eslint`配置，可以在`.eslintrc.js`中添加。


## husky代码提交钩子

### 安装依赖

```bash
pnpm install -D husky lint-staged commitizen commitlint cz-customizable commitlint-config-cz @commitlint/config-conventional
```

### 添加初始化命令

运行命令

```bash
npm set-script prepare "husky install"
```

这条命令会在`package.json`中添加`prepare`脚本

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

### husky初始化

运行命令

```bash
npm run prepare
```

初始化 `husky`，将 `git hooks` 钩子交由 `husky` 执行，它会在项目根目录创建文件夹`.husky`

### git钩子配置

运行命令

```bash
npx husky add .husky/pre-commit "npx lint-staged --allow-empty"
```

这个命令会在 `.husky` 里面生成一个 `pre-commit` 文件，在 `pre-commit` 这个钩子里就可以执行 `lint-staged` 了

在 `package.json` 中添加以下内容，处理对应后缀的文件

```json
{
    "lint-staged": {
        "*.{js,vue}": [
            "eslint --fix"
        ]
    }
}
```

到这里为止，提交代码的时候自动进行代码检查的功能已经实现了