---
title: Promise任务队列
tag: 
  - JavaScript
  - Promise
  - 任务队列
---

## FunctionExecutor 类

`FunctionExecutor` 是一个函数执行器的类，它用于确保在一个函数执行完毕之前，不会执行下一个函数。它的主要作用是管理函数的执行顺序和控制函数之间的并发。

## 构造函数

### `FunctionExecutor()`

创建一个 `FunctionExecutor` 类的实例。

## 方法

### `execute(func: Function, ...args: any[]): Promise`

执行函数并确保前一个函数执行完毕后再执行下一个函数。

- `func` (Function): 要执行的函数。
- `...args` (any[]): 要传递给函数的参数。
- 返回值 (Promise): 表示函数的执行状态的 Promise 对象。

## 示例

```javascript
// 创建 FunctionExecutor 实例
const executor = new FunctionExecutor();

// 定义两个示例函数
function foo(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
}

function bar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Hello, World!');
      resolve();
    }, 2000);
  });
}

// 执行函数
executor.execute(foo, 'Function 1')
  .then(() => executor.execute(bar))
  .then(() => console.log('All functions executed.'));

```

## 源码

```javascript
class FunctionExecutor {
    constructor() {
        this.previousExecution = Promise.resolve();
    }

    execute(func, ...args) {
        const currentExecution = this.previousExecution.then(() => {
            return func(...args); // 将参数展开传递给函数调用
        });

        this.previousExecution = currentExecution;
        return currentExecution;
    }
}

export const executor = new FunctionExecutor();
```