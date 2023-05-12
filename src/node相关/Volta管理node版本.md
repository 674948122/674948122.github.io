---
title: Volta管理node版本
tag:
    - Volta
    - node
    - 版本管理
---

## 介绍

`Volta`是一个`node`版本管理工具，类似于`nvm`，但是比`nvm`更加轻量级，更加易用。

[官方文档](https://volta.sh/)

## 特点

- 速度⚡
- 无缝的，每个项目的版本切换
- 跨平台支持，包括 `Windows` 和所有 `Unix shell`
- 支持多个包管理器
- 稳定的工具安装——无需在每次 `Node` 升级时重新安装！
- 用于特定于站点的自定义的可扩展性挂钩

`Volta` 的工作就是让你不碍事。

使用 `Volta`，您可以选择一次 `Node` 引擎，然后不再担心它。您可以在项目之间切换，而不必在 `Node` 之间手动切换。您可以在工具链中安装 `npm` 软件包二进制文件，而无需定期重新安装它们或找出它们停止工作的原因。

`Volta` 将 `Node` 引擎的确切版本保存在您的文件中 package.json ，因此您可以将您的选择提交给 `git`。从那时起，每次您在项目目录中运行 `Node` 时，`Volta` 都会自动切换到您选择的相同版本的 `Node`。同样，您所有的合作者都可以通过在他们的开发机器上安装 `Volta` 来做同样的事情。

## 安装

在包括`macOS`在内的大多数`Unix`系统上，您可以使用单个命令安装`Volta`：

```bash
curl https://get.volta.sh | bash
```

对于 bash 、 zsh 和 fish，此安装程序将自动更新您的控制台启动脚本。如果要阻止修改控制台启动脚本，请参阅[跳过 Volta 安装程序](https://docs.volta.sh/advanced/installers#skipping-volta-setup) 。要手动将 shell 配置为使用 Volta，请编辑控制台启动脚本以：

- 将 VOLTA_HOME 变量设置为 $HOME/.volta
- 将 $VOLTA_HOME/bin 添加到 PATH 变量的开头

打开`/Users/mac/.zshrc`文件，其中`mac`是你的用户名，添加如下内容：

```bash
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```

有可能`volta`会帮你自动添加，如果没有，你需要手动添加。

然后运行命令，使配置生效：

```bash
source ~/.zshrc
```

这时运行`volta -v`命令，如果出现如下版本号，则表示安装成功：

```bash
1.1.1
```

## 使用

### 安装node

```bash
volta install node@16.15.0
```

### 固定 Node 引擎版本

该 `volta pin` 命令允许您为项目选择 `Node` 引擎和包管理器版本：

```bash
volta pin node@16.15.0
```

`Volta` 将其存储在您的文件中 `package.json` ，因此您可以将您选择的工具提交给版本控制：

```json
{
  "volta": {
    "node": "16.15.0",
    "pnpm": "7.6.0"
  }
}
```