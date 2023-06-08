---
title: vue-introjs新手引导
--- 

## 介绍

`vue-introjs`是一个基于`intro.js`的`vue`组件，用于实现新手引导功能。

[文档链接](https://www.npmjs.com/package/vue-introjs)

## 安装

```bash
npm install intro.js vue-introjs --save
```

## 引入

### introJs

由于这个插件依赖于全局 `introJs` 变量，webpack配置如下：

```js
// webpack.config.js
{
    plugins: [
        new webpack.ProvidePlugin({
            // other modules
            introJs: ['intro.js', 'introJs']
        })
    ]
}
```

### vue-introjs
    
```js
// main.js
import VueIntro from 'vue-introjs'
Vue.use(VueIntro)

import 'intro.js/introjs.css' // 样式文件

```


## 使用

```vue
<template>
    <div>
        <div 
            v-intro="'这是第一步'"
            v-intro-step="1">第一步</div>
        <div 
            v-intro="'这是第二步'"
            v-intro-step="2">第二步</div>
        <div 
            v-intro="'这是第三步'"
            v-intro-step="3">第三步</div>

    </div>
</template>
<script>
export default {
    mounted() {
        var intro = introJs.default()

        intro.setOptions({
            prevLabel: '上一步',
            nextLabel: '下一步',
            skipLabel: '跳过',
            doneLabel: '完成',
            tooltipPosition: 'bottom' /* 引导说明框相对高亮说明区域的位置 */,
            hidePrev: 'true', //隐藏第一步中的上一个按钮
            tooltipClass: 'xxx' /* 引导说明文本框的样式 */,
            highlightClass: 'xxxxx' /* 说明高亮区域的样式 */,
            exitOnOverlayClick: false /* 是否允许点击空白处退出 */,
            showStepNumbers: false /* 是否显示说明的数据步骤*/,
            keyboardNavigation: false /* 是否允许键盘来操作 */,
            showButtons: true /* 是否按键来操作 */,
            showBullets: false /* 是否使用点点点显示进度 */,
            showProgress: true /* 是否显示进度条 */,
            scrollToElement: true /* 是否滑动到高亮的区域 */,
            overlayOpacity: 0.8 /* 遮罩层的透明度 */,
            positionPrecedence: [
                'bottom',
                'top',
                'right',
                'left'
            ] /* 当位置选择自动的时候，位置排列的优先级 */,
            disableInteraction: true /* 是否禁止与元素的相互关联 */
        })
        intro.oncomplete(() => {
            //点击结束按钮后执行的事件
            console.log('oncomplete')
        })
        intro.onexit(() => {
            //点击跳过按钮后执行的事件
            console.log('onexit')
        })
        intro.onchange(() => {
            //点击下一步执行的事件
            console.log('onchange')
        })
        intro.start()
    }
}
</script>
```