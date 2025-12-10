# CursorUIViewService进程无响应导致系统卡顿

## 问题描述
macOS中CursorUIViewService进程无响应通常是输入法（如输入源切换、Caps Lock）导致的光标渲染问题，可能与第三方输入法或输入法增强工具冲突，造成CPU/内存占用过高，解决方法包括重启Mac、使用活动监视器强退该进程、检查和更新输入法，或在活动监视器中查看日志以定位冲突应用。 

## 原因分析
 - 输入源/光标冲突：该进程负责显示输入法指示器（如小箭头）和新文本字段的光标，当使用Caps Lock或切换输入法时容易触发。
 - 第三方软件冲突：苹果社区讨论表明](https://discussionschinese.apple.com/thread/255642124) [像 Input Source Pro这样的工具](https://comate.baidu.com/zh/page/430dgun4tmz) [1 可能会与系统光标渲染竞争资源，导致进程卡顿。
 - 系统资源占用：有时该进程本身会占用大量CPU和RAM，导致无响应。 

## 解决方案

1. 创建目录 `sudo mkdir -p /Library/Preferences/FeatureFlags/Domain`

2. 创建禁用 ShittyNewArrowFeature 的 .plist 文件 `sudo /usr/libexec/PlistBuddy -c "Add 'redesigned_text_cursor:Enabled' bool false" /Library/Preferences/FeatureFlags/Domain/UIKit.plist`

3. 重启系统

## 一条命令解决问题

所有操作合并为一条命令（将立即重启）：

```bash
sudo mkdir -p /Library/Preferences/FeatureFlags/Domain && sudo /usr/libexec/PlistBuddy -c "Add 'redesigned_text_cursor:Enabled' bool false" /Library/Preferences/FeatureFlags/Domain/UIKit.plist && sudo shutdown -r now
```