
# pnpm 包管理器

## 简介

PNPM 是一个 Node.js 包管理工具，类似于 NPM 和 Yarn。PNPM 采用了一种不同于 NPM 和 Yarn 的方式来管理 Node.js 包，它使用硬链接来共享依赖包，从而减少了存储空间的占用和安装的时间。同时，PNPM 也可以像 NPM 和 Yarn 一样在全局和本地范围内安装和使用 Node.js 模块。PNPM 还提供了一些其他的功能，比如支持自动清理未使用的包，以及支持多个版本的 Node.js 和 NPM。

相比于 NPM 和 Yarn，PNPM 具有以下优点：

- 节约磁盘空间：PNPM 使用硬链接来共享依赖包，因此只需要存储一份依赖包的副本，可以大大节约磁盘空间。
- 加速安装：PNPM 可以同时下载和安装多个依赖包，从而加速安装过程。
- 更好的稳定性：PNPM 可以在多个项目之间共享依赖包，从而减少了不同版本的包之间的冲突和版本不一致的问题。

PNPM 的主要缺点是相对于 NPM 和 Yarn，它的社区和生态系统还比较小，因此在某些方面可能缺乏支持和文档。

## 安装

1、使用 npm 全局安装
    
```bash
# 使用 npm 全局安装
npm install -g pnpm

# 查看 pnpm 版本信息
pnpm --version
```
2、使用 yarn 全局安装

```bash
# 使用 yarn 全局安装
yarn global add pnpm

# 查看 pnpm 版本信息
pnpm --version
```

> 注意：可以使用以下命令来安装特定版本的 pnpm

```bash
# 查看可用的 pnpm 版本
npm view pnpm versions

# 使用 npm 全局安装特定版本
npm install -g pnpm@<version>

# 使用 npm 本地安装特定版本
npm install pnpm@<version>

# 查看 pnpm 版本信息
pnpm --version
```

## 常用命令
```bash
# 1、用于安装项目中的所有依赖。
pnpm install

# 2、用于安装指定的依赖包，例如 pnpm install react。
pnpm install [package]

# 3、用于全局安装指定的依赖包，例如 pnpm install --global typescript。
pnpm install --global [package]

# 4、用于更新项目中的所有依赖。
pnpm update

# 5、用于更新指定的依赖包，例如 pnpm update react。
pnpm update [package]

# 6、用于删除指定的依赖包，例如 pnpm remove react。
pnpm remove [package]

# 7、用于列出当前项目中已安装的所有依赖包。
pnpm list

# 8、用于列出当前系统中已全局安装的所有依赖包。
pnpm list --global

# 9、用于列出当前项目中已安装的所有依赖包及其直接依赖项。
pnpm list --depth=1

# 10、用于查看指定依赖包的详细信息，例如 pnpm info react。
pnpm info [package]

# 11、用于将指定的依赖包添加到 devDependencies，例如 pnpm add jest --save-dev。
pnpm add [package] --save-dev

# 12、用于将指定的依赖包添加到 dependencies，例如 pnpm add react --save。
pnpm add [package] --save

# 13、用于全局安装指定的依赖包，例如 pnpm add typescript --global。
pnpm add [package] --global

# 14、用于重新构建项目中的所有依赖。
pnpm rebuild

# 15、用于运行项目中的脚本命令，例如 pnpm run start。
pnpm run [script]

# 16、用于查看本地包存储状态。
pnpm store status

# 17、用于清理本地存储的未被任何项目使用的包。
pnpm store prune

# 18、用于将指定的依赖包添加到本地存储，以便其他项目使用。
pnpm store add [package]

# 19、用于启动本地包服务器。
pnpm server

# 20、用于在所有项目中执行指定命令，例如 pnpm recursive install。
pnpm recursive [command]
```

## 创建项目

创建 Vue 项目的方式与 PNPM 无关，与使用的脚手架工具有关。

无论使用哪种方式创建 Vue 项目，都可以在项目目录下使用 PNPM 进行依赖安装。例如，在使用 Vue CLI 创建项目后，进入项目目录后可以使用 pnpm install 安装依赖。

### pnpm create vue-app

pnpm create vue-app 创建的是基于 Vue CLI 2.x 版本的项目，该版本的 Vue CLI 使用 webpack 进行打包，需要配置一些基本的项目信息和插件。

使用 pnpm create vue-app 创建 Vue 2.x 项目：
```bash
# 创建一个 Vue 2.x 项目
pnpm create vue-app my-project

# 安装依赖
cd my-project
pnpm install

# 运行项目
pnpm serve
```
### pnpm create vite-app

pnpm create vite-app 创建的是基于 Vue CLI 3.x 版本的项目，该版本的 Vue CLI 使用了 vite 构建工具，具有更快的构建速度和更少的配置，适合较小的项目和快速原型开发。

使用 pnpm create vite-app 创建 Vue 3.x 项目：
```bash
# 创建一个 Vue 3.x 项目
pnpm create vite-app my-project --template vue

# 安装依赖
cd my-project
pnpm install

# 运行项目
pnpm serve
```

在上面的命令中，my-project 是项目名称，可以根据实际情况进行更改。同时，–template 参数用于指定创建的项目模板，如果不指定，默认是 JavaScript 模板。对于 Vue 3.x 项目，需要指定 --template vue。

