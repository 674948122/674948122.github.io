import{_ as o,X as a,Y as p,Z as t,$ as e,a0 as l}from"./framework-cddc4983.js";const s={},i=t(`<h1 id="中级题库" tabindex="-1"><a class="header-anchor" href="#中级题库" aria-hidden="true">#</a> 中级题库</h1><h2 id="简单难度-20" tabindex="-1"><a class="header-anchor" href="#简单难度-20" aria-hidden="true">#</a> 简单难度（20%）：</h2><ol><li>什么是CSS盒模型？简要描述它的组成部分。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.盒模型：就是把HTML页面中的元素看作是以一个矩形的盒子，也就是一个装东西的容器。</p><p>2.盒模型包含四部分：内容（content）、内边距也称之为补白和填充区（padding）边框（border）外边距（margin） ::: ::::</p><ol start="2"><li>CSS清除浮动的方法有哪些。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.使用clearfix：clearfix 是一种使用伪元素的方式，通过在父元素上添加 ::after 伪元素，并设置 clear: both 来清除浮动。</p><p>2.使用overflow：在父元素上设置 overflow: hidden 或 overflow: auto，可以使父元素包含浮动元素。</p><p>3.使用display：table：在父元素上设置 display: table，可以使父元素包含浮动元素。</p><p>4.使用display：flow-root：在父元素上设置 display: flow-root，可以清除浮动。</p><p>5.使用flex布局：在父元素上使用flex布局，可以将子元素包含在父元素中。 ::: ::::</p><ol start="3"><li>var，let，const的比较。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.作用域：var 声明的变量在函数作用域中有效，而 let 和 const 声明的变量在块级作用域中有效，即大括号 {} 中。在块级作用域中声明的变量只在该作用域内有效，在作用域外不可访问。</p><p>2.变量提升：使用 var 声明的变量会发生变量提升，即在函数作用域中，变量声明会被提升到函数顶部。而使用 let 和 const 声明的变量不会发生变量提升，只有在变量声明的位置之后才能访问。</p><p>3.重复声明：使用 var 声明的变量可以在同一个作用域内重复声明多次，后面的声明会覆盖前面的声明。而使用 let 或 const 声明的变量在同一个作用域内重复声明会报错。</p><p>4.赋值：使用 var、let、const 声明的变量都可以重新赋值。但使用 const 声明的变量是常量，不能改变其值的引用，即不能重新赋值。而使用 var 和 let 声明的变量可以重新赋值。 ::: ::::</p><ol start="4"><li>什么是事件冒泡和事件捕获？简要描述它们之间的区别。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.事件冒泡是从事件目标元素向上冒泡到祖先元素的过程。即事件在目标元素上触发后，会沿着 DOM 树向上传递，一直到根节点为止，期间经过的所有元素都会触发相同的事件。这意味着，如果一个子元素上触发了事件，那么其所有祖先元素都会依次触发同一个事件。</p><p>2.事件捕获是从根节点向下捕获到目标元素的过程。即事件从根节点开始，沿着 DOM 树向下传递，直到目标元素为止，期间经过的所有元素都会触发相同的事件。这意味着，如果一个父元素上触发了事件，那么其所有子元素都会依次触发同一个事件。</p><p>3.事件冒泡和事件捕获之间的主要区别在于传播方向。事件冒泡是从目标元素向上传递到根节点，而事件捕获是从根节点向下捕获到目标元素。另外，事件冒泡是默认的传播方式，而事件捕获需要通过 addEventListener 方法的第三个参数来指定。</p><p>4.在实际开发中，事件冒泡和事件捕获经常被用来实现事件委托和事件处理优化。事件委托可以将事件处理函数绑定到祖先元素上，利用事件冒泡机制实现对后代元素的事件处理；事件处理优化可以根据具体的应用场景选择事件冒泡或事件捕获，避免不必要的事件处理和性能消耗。 ::: ::::</p><ol start="5"><li>JS有哪些数据类型</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.数字（number）：表示整数和浮点数，例如 42、3.14 等。</p><p>2.字符串（string）：表示文本，例如 &quot;hello world&quot;、&#39;JavaScript&#39; 等。</p><p>3.布尔值（boolean）：表示真或假，即 true 或 false。</p><p>4.空值（null）：表示空或不存在的值，可以使用 null 来显式地赋值。</p><p>5.未定义（undefined）：表示变量未定义或对象属性不存在，例如未初始化的变量或未赋值的属性。</p><p>6.符号（symbol）：表示唯一的标识符，用于对象属性的键值或作为隐藏属性等。</p><p>7.大整数（bigint）：表示任意精度整数，可以使用 n 结尾的数字字面量来定义。</p><p>此外，JavaScript 还有一种复杂数据类型，即对象（object）。对象可以包含任意数量和类型的属性，包括基本类型和其他对象类型。对象可以通过字面量、构造函数或对象字面量语法来创建。 ::: ::::</p><h2 id="中等难度-60" tabindex="-1"><a class="header-anchor" href="#中等难度-60" aria-hidden="true">#</a> 中等难度（60%）：</h2><ol start="6"><li>Vue中v-if和v-show的区别。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.编译时刻不同：v-if 在编译时会将元素添加或移除 DOM，而 v-show 则会将元素的 display 属性设置为 none。</p><p>2.初始渲染时不同：v-if 在初始渲染时如果条件为 false，则元素不会被渲染到 DOM 中，而 v-show 在初始渲染时始终会渲染到 DOM 中。</p><p>3.更新时渲染方式不同：v-if 在条件切换时会重新渲染元素，而 v-show 切换时只会修改元素的 display 属性。</p><p>综上所述，当需要频繁切换元素的显示和隐藏时，建议使用 v-show；而当条件较少变化时，建议使用 v-if，以避免不必要的 DOM 渲染开销。 ::: ::::</p><ol start="7"><li>Vue中Computed和Watch的区别。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.实现方式不同：computed 是一个计算属性，通过函数的方式返回一个计算结果，只有在依赖的数据发生变化时才会重新计算，而 watch 则是一个观察者，通过监听数据变化来执行相应的操作。</p><p>2.使用场景不同：computed 适用于根据已有数据计算出新的值的场景，例如将商品价格转换为带有货币符号的格式，或者根据多个输入框的值计算出一个总价等。而 watch 则适用于监听某个特定数据的变化并执行相应的操作，例如在数据变化时发起一个 API 请求，或者在路由变化时更新页面的标题等。</p><p>3.能否监听对象和数组的变化不同：computed 可以监听对象和数组的变化，但需要使用深度监听或者自定义 setter 来实现。而 watch 可以监听对象和数组的变化，并提供了一些可选的配置项，例如 immediate 和 deep 等。</p><p>综上所述，computed 和 watch 都有各自的优缺点和适用场景，需要根据具体的业务需求来选择使用哪种方式来监听数据变化。 ::: ::::</p><ol start="8"><li>浏览器中回流和重绘的区别。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.回流（reflow）是指当页面中的元素位置、大小等发生变化时，浏览器需要重新计算页面布局并重新绘制页面的过程。回流的成本很高，因为它会触发整个页面的重新渲染，并且会导致其他元素的位置和大小发生变化。回流的触发方式包括以下几种：</p><pre><code>添加、删除、修改页面元素的内容
修改页面元素的样式，例如修改宽度、高度、边距、定位等
改变页面的尺寸，例如窗口大小发生变化
</code></pre><p>2.重绘（repaint）是指当页面中的元素的样式（例如颜色、背景等）发生变化时，浏览器会重新绘制页面的过程。重绘的成本相对较低，因为它只会重新绘制受影响的部分。重绘的触发方式包括以下几种：</p><pre><code>修改页面元素的颜色、背景等样式属性
修改页面元素的文字样式，例如字体、大小、颜色等
</code></pre><p>因此，为了提高页面的性能，我们应该尽量避免触发回流，而在修改样式时尽量使用 CSS 动画和过渡等方式来减少重绘的次数。 ::: ::::</p><ol start="9"><li>vue-router的hash模式和history模式的区别。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.hash 模式：URL 中以 # 号分隔，# 后面的内容称为 hash，常用于单页面应用中。在 hash 模式下，页面跳转时，不会向服务器请求资源，所有的路由都由前端处理。</p><p>2.history 模式：URL 中不会出现 # 号，而是直接以路径形式展现，常用于传统的多页面应用中。在 history 模式下，页面跳转时，会向服务器请求对应的资源，因此需要后端的支持。</p><p>除了 URL 格式的不同，hash 模式和 history 模式的实现原理也有所不同：</p><p>1.hash 模式：通过监听浏览器的 hashchange 事件，从而更新页面内容。</p><p>2.history 模式：通过 HTML5 的 History API，使用 pushState 和 replaceState 方法来实现路由跳转，从而更新页面内容。</p><p>需要注意的是，使用 history 模式时，需要后端服务器的支持，因为在 history 模式下，浏览器直接向服务器请求资源，而服务器需要根据请求的 URL 返回相应的资源，否则会出现 404 错误。而在 hash 模式下，所有的路由都由前端处理，服务器只需要提供一个 HTML 页面即可。 ::: ::::</p><ol start="10"><li>什么是事件循环？描述JavaScript的事件循环机制和常见问题。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 事件循环是 JavaScript 的一种执行机制，用于处理异步代码和回调函数。</p><p>JavaScript 是一种单线程语言，只能执行一个任务，而事件循环的目的就是让 JavaScript 在同一时间内能够执行多个任务，从而避免阻塞执行线程。</p><p>事件循环的基本流程是：先执行同步代码，然后检查异步代码是否完成，如果完成就将回调函数放到任务队列中，等待下一次事件循环时执行。</p><p>任务队列分为宏任务和微任务两种，宏任务包括 setTimeout、setInterval、setImmediate 等，微任务包括 Promise、process.nextTick 等。在事件循环中，每次处理完所有的微任务后，会优先处理当前宏任务队列中的第一个任务，然后再次处理微任务，这个过程会不断重复，直到所有的任务执行完成。 ::: ::::</p><ol start="11"><li>什么是跨域？描述跨域的实现原理和解决方法。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 跨域（Cross-Origin Resource Sharing，简称 CORS）是指浏览器限制从一个域名的网页访问另一个域名的资源的行为。例如，一个页面通过 Ajax 向另一个域名的接口发起请求，就属于跨域操作。</p><p>跨域的实现原理是基于浏览器的同源策略（Same-Origin Policy）限制。同源策略要求一个域名下的文档或脚本只能访问同域名下的资源，不能访问其他域名的资源。同源策略的限制包括：域名、端口、协议必须完全相同。</p><p>跨域的解决方法有以下几种：</p><p>1.JSONP JSONP 是一种跨域方式，通过动态创建 script 标签，向其他域名的接口发起请求，接口返回 JavaScript 代码，然后在当前页面中执行这段代码，从而实现跨域通信。</p><p>2.CORS CORS 是官方推荐的跨域解决方案，需要后端配合，在响应头中设置 Access-Control-Allow-Origin，允许指定的域名跨域访问接口。</p><p>3.代理 通过在同域名下创建代理服务器，将跨域请求转发到目标服务器上，然后将响应结果返回给客户端，从而实现跨域通信。</p><p>4.postMessage 使用 HTML5 的 postMessage 方法，在不同的窗口之间传递消息，从而实现跨域通信。 ::: ::::</p><ol start="12"><li>Vue中$nextTick的作用是什么？</li></ol>`,68),r=e("p",null,[l(':::: el-collapse ::: el-collapse-item title="答案" Vue 中的 $nextTick 方法用于在下次 DOM 更新周期结束后执行回调函数。它可以让我们在更新完数据后等待一会儿再执行相关操作，以确保操作可以在最新的 DOM 上执行。具体来说，当我们修改数据后，Vue 会异步执行 DOM 更新，此时如果想要立即对更新后的 DOM 进行一些操作（例如读取新的 DOM 尺寸、计算它们的位置等），可能会遇到问题，因为此时 DOM 还没有完成更新，我们获取的 DOM 尺寸和位置可能是旧的。而 '),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"n"),e("mi",null,"e"),e("mi",null,"x"),e("mi",null,"t"),e("mi",null,"T"),e("mi",null,"i"),e("mi",null,"c"),e("mi",null,"k"),e("mtext",null,"方法可以让我们等待下次"),e("mi",null,"D"),e("mi",null,"O"),e("mi",null,"M"),e("mtext",null,"更新循环结束后再执行相关操作。需要注意的是，")]),e("annotation",{encoding:"application/x-tex"},"nextTick 方法可以让我们等待下次 DOM 更新循环结束后再执行相关操作。需要注意的是，")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mord mathnormal"},"x"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"tT"),e("span",{class:"mord mathnormal"},"i"),e("span",{class:"mord mathnormal"},"c"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),e("span",{class:"mord cjk_fallback"},"方法可以让我们等待下次"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"OM"),e("span",{class:"mord cjk_fallback"},"更新循环结束后再执行相关操作。需要注意的是，")])])]),l("nextTick 方法的回调函数会在 DOM 更新循环结束后执行，但并不保证此时所有的子组件也已经更新完毕。如果需要等到所有子组件都更新完毕再执行相关操作，可以使用 Vue 的异步组件和 $nextTick 方法配合使用。 ::: ::::")],-1),c=t('<ol start="13"><li>Vue中v-for中key的作用是什么？</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 在 Vue 的模板中使用 v-for 指令渲染列表时，为每个被渲染的元素分配一个唯一的 key 值是非常重要的。这个 key 值会被 Vue 用来识别每个元素，并且在进行数据更新时，用来判断哪些元素是被新增、哪些是被修改、哪些是被删除的。具体来说，当数据更新时，Vue 会根据新的数据生成一个新的虚拟 DOM 树，并将新的虚拟 DOM 树与旧的虚拟 DOM 树进行比较，找出它们之间的差异，然后只更新差异部分的实际 DOM 元素。如果每个元素都有唯一的 key 值，Vue 就可以通过这个 key 值来识别每个元素，从而准确地找出哪些元素需要被更新或删除。如果没有 key 值，Vue 只能通过比较每个元素的内容和顺序来判断它们之间的差异，这会影响到性能，并且可能会出现意外的结果。因此，在使用 v-for 渲染列表时，必须为每个元素指定一个唯一的 key 值。 ::: ::::</p><ol start="14"><li>Vuex中的state，getters，mutations，actions的作用是什么？</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.state：用来存储应用程序的全局状态。可以通过直接修改 state 中的数据来改变应用程序的状态。</p><p>2.getters：用来获取 state 中的数据。可以认为 getters 相当于 state 的计算属性，它们会根据 state 中的数据进行计算，返回一个新的值。</p><p>3.mutations：用来修改 state 中的数据。每个 mutation 都有一个字符串类型的事件类型和一个回调函数，当触发 mutation 时，会调用相应的回调函数来修改state 中的数据。由于 mutations 是同步执行的，因此它们只能处理简单的数据变化。</p><p>4.actions：用来提交 mutations 来间接地修改 state 中的数据。由于 actions 是异步执行的，因此它们可以处理复杂的业务逻辑，例如网络请求等操作。当一个 action 被调用时，它会分发一个 mutation，然后调用相应的回调函数来执行异步操作。</p><p>综上所述，state、getters、mutations、actions 是 Vuex 中非常重要的概念，它们通过一系列的机制来管理应用程序的状态，并使得状态的变化变得可追踪、可预测和可控。 ::: ::::</p><ol start="15"><li>什么是闭包？简要描述它的作用。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 在 JavaScript 中，闭包（Closure）是指可以访问自由变量的函数，这个函数可以访问在它定义时所在的词法作用域内的变量。</p><p>简单来说，闭包就是在函数内部定义的函数，它可以访问外部函数的变量，即使外部函数已经执行完毕，这些变量依然会保存在内存中，因此闭包可以用来实现一些特殊的功能，例如：</p><p>1.计数器：利用闭包的特性，可以定义一个计数器函数，每次调用该函数都会增加计数器的值，并返回当前的计数器值。</p><p>2.封装变量：利用闭包的特性，可以定义一个函数来封装一个变量，该变量可以被多个函数共享，并且只有通过指定的函数才能修改该变量的值。</p><p>3.实现模块化：利用闭包的特性，可以将代码封装到一个函数中，避免全局变量的污染，实现模块化的效果。</p><p>总之，闭包是 JavaScript 中非常重要的概念之一，它可以帮助我们解决一些复杂的问题，提高代码的可读性和可维护性。 ::: ::::</p><ol start="16"><li>什么是箭头函数？简要描述它的作用。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 箭头函数是 ES6 引入的一种新的函数定义方式，它是一种更加简洁的函数定义方式，可以简化函数的定义和调用。箭头函数与传统的函数定义方式不同，它没有自己的 this，arguments，super 或 new.target 绑定，这些变量的值是由外围最近一层非箭头函数决定的。</p><p>简单来说，箭头函数的作用有以下几点：</p><p>1.更加简洁：箭头函数的语法比传统函数更加简洁，可以减少代码的冗余。</p><p>2.自动绑定this：箭头函数中的 this 指向定义它时所在的作用域，而不是执行它时所在的作用域，可以避免 this 指向的问题。</p><p>3.方便使用：箭头函数的语法非常简单，可以方便地进行函数式编程和链式调用等操作。</p><p>4.更高效：箭头函数没有自己的 this，arguments，super 或 new.target 绑定，不需要进行额外的变量绑定和作用域查找，因此运行效率更高。</p><p>总之，箭头函数是 JavaScript 中非常重要的一种函数定义方式，可以让代码更加简洁、方便和高效。 ::: ::::</p><ol start="17"><li>ES6后，新增了哪些数组的操作方法。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; map()、includes()、find()、findIndex()、fill()、keys()、values()、entries()、flat()、flatMap()、from()、of() ::: ::::</p><ol start="18"><li>什么是原型链？简要描述它的作用。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 在 JavaScript 中，每个对象都有一个指向其原型对象的内部链接。这个原型对象又有自己的原型，最终指向一个原型为 null 的对象。这种关系被称为原型链。</p><p>原型链的作用是实现继承。当在一个对象上访问一个属性或方法时，如果该对象本身没有定义这个属性或方法，JavaScript 引擎就会在其原型对象上查找是否存在这个属性或方法。如果在原型对象上也不存在，则继续在原型对象的原型对象上查找，直到找到 Object.prototype 对象，如果还没有找到，则返回 undefined。</p><p>利用原型链，可以实现基于原型的继承。可以创建一个新的对象，并将其原型指向另一个对象，从而实现对该对象的继承。例如，在 JavaScript 中，可以通过构造函数创建一个对象，并将其原型指向另一个对象，从而实现基于原型的继承。 ::: ::::</p><ol start="19"><li>数组去重</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.使用 Set 数据结构，Set 对象可以用来存储唯一值的集合，利用 Set 去重可以保留原始数组的顺序使用 Set 数据结构，Set 对象可以用来存储唯一值的集合，利用 Set 去重可以保留原始数组的顺序</p><p>2.使用 Array.prototype.filter() 方法，通过判断元素在数组中第一次出现的位置是否等于当前索引来保留第一次出现的元素</p><p>3.使用 Array.prototype.reduce() 方法，通过使用一个空数组作为初始值，遍历原始数组，如果当前元素不在结果数组中，则将其添加到结果数组中 ::: ::::</p><ol start="20"><li>Vue的生命周期</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.beforeCreate: 在实例被创建之初，数据观测和事件机制都未初始化。</p><p>2.created: 实例已经创建完成，数据观测和事件机制都已经初始化。</p><p>3.beforeMount: 在模板编译/挂载之前被调用。</p><p>4.mounted: 在模板编译/挂载之后被调用。</p><p>5.beforeUpdate: 在组件更新之前被调用，此时可以对数据进行修改。</p><p>6.updated: 在组件更新之后被调用，此时可以对 DOM 进行操作。</p><p>7.beforeDestroy: 在实例销毁之前被调用。</p><p>8.destroyed: 实例已经销毁，清空相关的属性和监听器。 ::: ::::</p><ol start="21"><li>什么是模块化？描述模块化的实现原理和常见模块化规范。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 模块化是指将一个大的程序划分为相互依赖的小模块，并将它们分别开发、维护和使用。模块化可以使代码更加模块化、可读性更高、便于维护和复用。</p><p>AMD、CMD、UMD、CommonJS、ES6 Module ::: ::::</p><ol start="22"><li>Vue中$set的作用是什么？</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 在Vue中，如果想要添加一个新的属性到响应式对象上，可以使用$set方法。该方法接收三个参数：对象、属性名和属性值。它的作用是将对象的指定属性设置为响应式的，这样当属性值发生改变时，视图会自动更新。 ::: ::::</p><ol start="23"><li>浏览器的缓存机制，cookie，sessionStorage，localStorage的区别</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.Cookie是存储在浏览器中的文本文件，用于跟踪用户活动和存储用户偏好设置等信息，可以通过设置过期时间来控制存储时间。Cookie的主要作用是在客户端存储少量数据，服务器下次请求时可以读取该数据，常用于用户登录、购物车等。</p><p>2.sessionStorage是HTML5提供的一种存储方式，用于在单个会话期间存储数据，关闭浏览器后数据就会被清除。sessionStorage的主要作用是在一个会话期间存储数据，常用于表单数据、临时缓存等。</p><p>3.localStorage也是HTML5提供的一种存储方式，与sessionStorage相似，不同的是localStorage在关闭浏览器后数据不会被清除，可以一直保留下去。localStorage的主要作用是在多个页面之间共享数据，常用于用户偏好设置等。</p><p>总体而言，cookie适合存储少量数据，sessionStorage适合存储一次性的、临时性的数据，localStorage适合存储长期保存的数据。 ::: ::::</p><ol start="24"><li>async/await的实现原理和常见问题。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; async/await 是 ES8 (ES2017) 引入的异步编程语法糖，它可以让我们用同步的写法来处理异步代码。async 用来定义一个返回 Promise 对象的异步函数，await 用于等待一个 Promise 对象的状态被 resolved 或 rejected，并返回其结果。</p><p>async/await 是基于 Promise 实现的，async 函数的返回值是一个 Promise 对象，而 await 表达式会暂停 async 函数的执行，等待 Promise 对象状态的改变，如果是 resolved，则将返回值作为 await 表达式的结果，如果是 rejected，则抛出异常。 ::: ::::</p><ol start="25"><li>Promise的实现原理和常见问题。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; Promise是JavaScript中处理异步编程的一种机制，它提供了更优雅、更方便的方式来处理异步操作。</p><p>Promise实现原理是通过构造函数创建Promise对象，在Promise对象中包含了一个状态和状态改变时的回调函数，分别是“pending”（进行中）、“fulfilled”（已成功）和“rejected”（已失败）。在进行异步操作时，通过调用Promise对象的resolve()方法或reject()方法来改变Promise对象的状态，从而执行回调函数。</p><p>常见问题包括如何处理Promise的错误、如何处理多个Promise对象的并行或串行操作、如何在Promise执行前或执行后做一些操作等。对于错误处理，可以使用Promise的catch()方法来捕获错误并进行处理；对于并行或串行操作，可以使用Promise.all()和Promise.race()方法来实现；对于在Promise执行前或执行后做一些操作，可以使用Promise的then()方法和finally()方法来实现。 ::: ::::</p><h2 id="困难难度-20" tabindex="-1"><a class="header-anchor" href="#困难难度-20" aria-hidden="true">#</a> 困难难度（20%）：</h2><ol start="26"><li>什么是虚拟DOM？描述它的作用和实现原理。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 虚拟DOM是一种用JavaScript对象模拟真实DOM的概念。它的主要作用是减少DOM操作，从而提高性能。虚拟DOM通过比较新旧DOM树的差异来更新视图，而不是直接修改真实的DOM。这种方式可以避免频繁的重绘和回流，从而提高应用的性能和响应速度。</p><p>虚拟DOM的实现原理是：当应用状态发生变化时，先生成一棵新的虚拟DOM树，然后通过比较新旧DOM树的差异，计算出需要更新的部分，最后将更新部分应用到真实DOM上。这个过程中，由于只更新了必要的部分，所以能够减少不必要的DOM操作，从而提高性能。 ::: ::::</p><ol start="27"><li>Webpack优化的方法有哪些。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 1.压缩代码：通过使用 UglifyJsPlugin 或 TerserPlugin 等插件对代码进行压缩，减少文件体积。</p><p>2.代码分离：使用 Webpack 的 SplitChunksPlugin 插件将代码分离为多个 bundle 文件，避免将所有代码都打包在一个文件中导致文件过大。</p><p>3.按需加载：通过使用动态 import 语法或者 Vue 中的异步组件实现按需加载，减少首屏加载时间。</p><p>4.缓存：使用 Webpack 的 cache-loader 插件或者 babel-loader 的 cacheDirectory 选项启用缓存，避免重复编译同一份代码。</p><p>5.Tree Shaking：通过使用 Webpack 的 UglifyJsPlugin 插件和 Tree Shaking 技术，将未使用的代码从打包结果中剔除，减少文件体积。</p><p>6.懒加载：使用 Webpack 的 bundle-loader 或者使用 Vue 中的懒加载组件实现按需加载，减少初始加载时间。</p><p>7.优化 loaders：使用 HappyPack 插件和 thread-loader 插件将 loader 的执行并行化，加快打包速度。</p><p>8.优化 resolve.modules 配置：通过将常用的模块路径添加到 resolve.modules 配置中，减少 Webpack 的路径查找时间。</p><p>9.优化 resolve.extensions 配置：通过将常用的模块后缀添加到 resolve.extensions 配置中，减少 Webpack 的路径查找时间。</p><p>10.优化 externals 配置：通过使用 externals 配置将第三方库从打包结果中剔除，减少文件体积。</p><p>11.gzp压缩：使用 compression-webpack-plugin 插件对打包结果进行 gzip 压缩，减少文件体积。</p><p>12.使用CDN：将第三方库通过 CDN 引入，减少打包体积。</p><p>13.图片压缩：使用 image-webpack-loader 插件对图片进行压缩，减少文件体积。 ::: ::::</p><ol start="28"><li>为什么transform的效率高。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 因为 transform 既不会影响布局也不会影响绘制指令，它影响的只是渲染流程的最后一个「draw」阶段</p><p>由于 draw 阶段在合成线程中，所以 transform 的变化几乎不会影响渲染主线程。反之，渲染主线程无论如何忙碌，也不会影响 transform 的变化。 ::: ::::</p><ol start="29"><li><code>var a = [[]+0]</code> a结果是什么？</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; [&#39;0&#39;] ::: ::::</p><ol start="30"><li>什么是深拷贝？描述深拷贝的实现原理和常见方法。</li></ol><p>:::: el-collapse ::: el-collapse-item title=&quot;答案&quot; 深拷贝是指在将一个对象复制到另一个对象时，完全复制其所有属性及其引用的对象，使得新对象与原对象互不干扰。</p><p>实现深拷贝的方法有多种，其中最常见的方法是递归遍历对象，对每一个属性进行复制。常见的深拷贝方法有：</p><p>1.JSON.parse(JSON.stringify(obj)): 这种方法可以将对象转换为字符串再将字符串转换为对象，从而实现深拷贝。但是该方法会忽略undefined、symbol和函数等类型的属性，因为这些属性无法被转换成JSON格式。</p><p>2.递归遍历对象：这种方法可以遍历对象的所有属性，对于对象属性，再次递归进行深拷贝，对于非对象属性，直接进行复制。</p><p>实现深拷贝的原理是遍历对象的每一个属性，对于对象属性，再次递归进行深拷贝，对于非对象属性，直接进行复制。 ::: ::::</p>',88),n=[i,r,c];function u(m,d){return a(),p("div",null,n)}const q=o(s,[["render",u],["__file","中级.html.vue"]]);export{q as default};
