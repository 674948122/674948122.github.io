
# Vue3


1. watch和watchEffect的区别

:::: details 答案
1.指定依赖项：
`watch`需要开发者明确指定要监听的具体响应式数据，并在回调函数中处理对应的逻辑。
`watchEffect`则会自动追踪在其函数体内部使用的所有响应式数据，无需手动指定依赖项。

2.执行时机：
`watch`具有一定的惰性，即只有在数据变化时才会执行回调函数。
`watchEffect`在初始化时一定会执行一次，并且会收集要监听的数据。它更加即时，在页面首次加载时也会执行回调函数，除非设置了`immediate: true`。

3.获取原始值：
`watchEffect`可以直接获取到原始值，而`watch`需要通过指定监视的属性来获取对应的值。

4.取消监听：
`watchEffect`可以通过调用`stop`函数来取消监听。
`watch`需要通过返回一个取消监听的函数来实现取消监听。

5.使用场景：
`watch`适用于需要监听特定数据或计算属性的变化，并执行相应的回调函数的场景。
`watchEffect`适用于自动追踪响应式数据并触发副作用的场景，如执行异步操作或更新UI。

综上所述，选择`watch`或`watchEffect`取决于具体的使用场景和对API控制的需求。如果需要对响应式数据进行细粒度的控制，可以使用`watch` API；如果只是需要自动追踪响应式数据并触发副作用，可以使用`watchEffect`函数。
::::

2. 为什么 Vue 3.x 采用了 Proxy 抛弃了 Object.defineProperty() ？

:::: details 答案
1.Proxy 可以代理任何对象，包括数组，而 Vue 2 中是通过重写数组的以下七种方法实现的。
 - push()（将一个或多个元素添加到数组的末尾，并返回该数组的新长度）
 - pop()（移除并返回数组的最后一个元素）
 - unshift()（将一个或多个元素添加到数组的开头，并返回该数组的新长度）
 - shift()（移除并返回数组的第一个元素）
 - splice()（删除数组中的一个或多个元素，并将其返回）
 - sort()（对数组进行排序）
 - reverse()（对数组进行反转）

2.Proxy 可以直接监听整个对象而非属性，而 Object.defineProperty() 只能先遍历对象属性再去进行监听。相比之下 Proxy 更加简洁，更加高效，更加安全。

3.Proxy 返回的是一个新对象，我们可以只操作新的对象达到目的。

4.Object.defineProperty() 的本质是在一个对象上定义一个新属性，或者修改一个现有属性。

5.而 Proxy 天生用于代理一个对象，它有 13 种基本操作的拦截方法，是 Object.defineProperty() 不具备的。
 - apply()（拦截函数的调用）
 - construct()（拦截构造函数的调用）
 - defineProperty()（拦截属性的定义）
 - deleteProperty()（拦截属性的删除）
 - get()（拦截对象属性的读取）
 - getOwnPropertyDescriptor()（拦截对象属性的描述）
 - getPrototypeOf()（拦截对象的原型）
 - has()（拦截对象属性的检查）
 - isExtensible()（拦截对象是否可扩展的检查）
 - ownKeys()（拦截对象的属性列表）
 - preventExtensions()（拦截对象是否可扩展的设置）
 - set()（拦截对象属性的设置）
 - setPrototypeOf()（拦截对象的原型的设置）
::::

3. Vue 3 对 diff 算法进行了哪些优化

:::: details 答案
 - 在 Vue 2 中，每当数据发生变化时，Vue 会创建一个新的虚拟 DOM 树，并对整个虚拟 DOM 树进行递归比较，即使其中大部分内容是静态的，最后再找到不同的节点，然后进行更新。

 - Vue 3 引入了静态标记的概念，通过静态标记，Vue 3 可以将模板中的静态内容和动态内容区分开来。这样，在更新过程中，Vue 3 只会关注动态部分的比较，而对于静态内容，它将跳过比较的步骤，从而避免了不必要的比较，提高了性能和效率。
::::

4. Vue 3 生命周期钩子函数

:::: details 答案
 - onBeforeMount()
在组件被挂载之前被调用。

 - onMounted()
在组件挂载完成后执行。

 - onBeforeUpdate()
在组件即将因为响应式状态变更而更新其 DOM 树之前调用。

 - onUpdated()
在组件因为响应式状态变更而更新其 DOM 树之后调用。

 - onBeforeUnmount()
在组件实例被卸载之前调用。

 - onUnmounted()
在组件实例被卸载之后调用。相当于 Vue 2 的 destroyed。

 - onErrorCaptured()
在捕获了后代组件传递的错误时调用。

 - onRenderTracked()
当组件渲染过程中追踪到响应式依赖时调用。只在开发环境生效。

 - onRenderTriggered()
当响应式依赖的变更触发了组件渲染时调用。只在开发环境生效。

 - onActivated()
keep-alive 专用，当组件被插入到 DOM 中时调用。

 - onDeactivated()
keep-alive 专用，当组件从 DOM 中被移除时调用。

 - onServerPrefetch()
在组件实例在服务器上被渲染之前调用。只在 SSR 模式下生效。
::::

5. Vue 3 新增了哪些内置组件

:::: details 答案
 - Teleport
Teleport 组件可以将子组件移动到 DOM 中的任何位置，这样可以更灵活地控制组件的位置。
    
- Suspense
Suspense 组件可以在异步组件加载时显示一些占位内容，以提供更好的用户体验。
::::

6. Ref 和 Reactive 的区别

:::: details 答案
1. 简单来说, ref通常用来定义基本类型数据, reactive用来定义对象（或者数组）类型数据
注: ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过reactive转为代理对象。

2. 使用方面: ref 操作数据需要.value取值，template模板中不需要。
reactive都不需要.value取值

3. 数据传递方面:
解构赋值会使reactive丢失响应性, 而{ref(1), ref(2)}不会

4. 原理角度:
ref通过Object.defineProperty()的get与set来实现响应式（数据劫持）。
reactive通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。
::::

7. Vue 3 中移除了哪些功能

:::: details 答案
- 移除v-on.keyCode修饰符，同时也不再支持config.keyCodes

- 移除v-on.native修饰符,

- 移除过滤器（filter）

- `不`再建议使用mixins, 组合式函数本身就是更好的mixin代替品
::::

8. Vue 3 中 setup 函数的作用

:::: details 答案
scrtpt setup 是 vue3 的语法糖，简化了组合式 API 的写法，并且运行性能更好。使用 script setup 语法糖的特点：

属性和方法无需返回，可以直接使用。

引入组件的时候，会自动注册，无需通过 components 手动注册。

使用 defineProps 接收父组件传递的值。

useAttrs 获取属性，useSlots 获取插槽，defineEmits 获取自定义事件。

默认不会对外暴露任何属性，如果有需要可使用 defineExpose 。

::::

9. v-if 和 v-for 的优先级哪个高？

:::: details 答案
在 vue2 中 v-for 的优先级更高，但是在 vue3 中优先级改变了。v-if 的优先级更高。

在 vue2 中 v-for 和 v-if 同时出现时，可放在一个标签内
在 vue3 中这样写会报错，就是因为 v-if 的优先级更高，写到一个标签渲染的情况下会导致报错
::::

10. Vue3 中如何获取组件实例

:::: details 答案
- 当前组件实例，
在 Vue 3 中，可以通过 `getCurrentInstance` 函数来获取当前组件实例。`getCurrentInstance` 函数返回一个 `ComponentInstance` 对象，包含了当前组件的属性、方法和生命周期钩子等信息。

- 子组件实例，
在 Vue 3 中，可以通过 `ref` 和 `onMounted` 钩子函数来获取子组件实例。首先，通过 `ref` 函数创建一个响应式引用，然后在 `onMounted` 钩子函数中通过 `value` 属性获取子组件实例，或者从`ComponentInstance`中读取`$refs`
::::