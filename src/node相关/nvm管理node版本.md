
# nvm管理node版本


## nvm是什么？

nvm是一个node的版本管理工具，可以简单操作node版本的切换、安装、查看。。。等等，与npm不同的是，npm是依赖包的管理工具。


## nvm的安装。

[下载地址](https://github.com/coreybutler/nvm-windows/releases "下载地址")

## nvm的使用。

### 查看当前node版本

```bash
nvm ls                      // 看安装的所有node.js的版本
 
nvm list available          // 查显示可以安装的所有node.js的版本
```

### 安装node

```bash
nvm install 8.9.4           // 安装指定版本的node.js
```

### 切换node版本

```bash
nvm use 8.9.4               // 切换到指定版本的node.js
```

### 卸载node

```bash
nvm uninstall 8.9.4         // 卸载指定版本的node.js
```

### 设置默认版本

```bash
nvm alias default 8.9.4     // 设置默认版本
```

### 设置项目的node版本

在项目根目录下创建`.nvmrc`文件，文件内容为node版本号，如`v8.9.4`，然后在项目根目录下执行`nvm use`命令，就会自动切换到指定版本的node。