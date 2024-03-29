
# 如何在 Mac 上清除和重置图标缓存

警告：因为您将使用终端和 rm 命令，所以在继续执行任何操作之前，最好使用 Time Machine 或您选择的备份方法备份您的 Mac 。输入错误的命令可能会导致永久性数据丢失，因此请务必使用准确的语法。如果您对命令行不满意，最好完全避免这种情况。

启动终端并输入以下命令并按回车键：

```bash
sudo rm -rfv /Library/Caches/com.apple.iconservices.store
```

接下来，输入以下命令并按回车键：

```bash
sudo find /private/var/folders/ \( -name com.apple.dock.iconcache -or -name com.apple.iconservices \) -exec rm -rfv {} \; ; sleep 3;sudo touch /Applications/* ; killall Dock; killall Finder
```

最后，您需要在安全模式下重新启动 Mac，这也会转储许多缓存并强制刷新 Mac 上的缓存。此过程略有不同，具体取决于它是带有 Apple Silicon M 芯片的 Mac还是Intel Mac。

- 对于 M1 Mac，请转到  Apple 菜单并选择关机。等待大约 10 秒钟。然后按住电源按钮，直到您看到选项屏幕出现。现在按住 Shift 键，然后选择“以安全模式继续”以将 M 系列 Mac 引导至安全模式。

- 对于 Intel Mac，重新启动 Mac 并按住 Shift 键，直到看到登录屏幕以启动进入安全模式。

Mac 启动到安全模式后，让它静置约 5 分钟，然后通过转到 APPLE 菜单并选择“重新启动”再次重新启动 Mac。图标缓存将与 Mac 上的许多其他缓存一起刷新。