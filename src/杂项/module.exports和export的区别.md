---
title: module.exports和export的区别
tag: 
  - module.exports
  - export

---

在Node.js和CommonJS模块系统中，有两种主要的导出方式：`module.exports` 和 `exports`。它们之间的关系是比较容易混淆的，因为它们实际上引用的是同一个对象。

1. **`module.exports`：**
   - `module.exports` 是一个完整的对象，最初是一个空对象 `{}`。
   - 如果你希望将整个模块作为一个对象导出，你会直接给 `module.exports` 赋值。
   - 示例：

    ```javascript
    // exampleModule.js
    module.exports = {
        key: 'value',
        func: function() {
            // some code
        }
    };
    ```

2. **`exports`：**
   - `exports` 实际上只是 `module.exports` 的一个引用。在模块的顶层，`exports` 是指向 `module.exports` 的。
   - 如果你将某个值直接赋给 `exports`，它会断开与 `module.exports` 的引用关系，从而无法正确导出。
   - 示例：

    ```javascript
    // exampleModule.js
    exports.key = 'value'; // This is fine
    exports.func = function() {
        // some code
    };
    ```

    但是，下面这种方式是不正确的：

    ```javascript
    // exampleModule.js
    exports = {
        key: 'value', // This will not work as expected
        func: function() {
            // some code
        }
    };
    ```

    这是因为这里将 `exports` 重新赋值了，导致它不再指向 `module.exports`。

总结一下，这两种方式在实际使用中通常是等效的，但是当你需要导出一个函数或一个构造函数时，你可能会更倾向于使用 `module.exports`。如果你只是想扩展已经存在的导出对象，`exports` 是一个更方便的方法。
