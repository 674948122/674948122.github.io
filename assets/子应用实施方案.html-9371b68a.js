import{_ as n,X as s,Y as a,$ as p}from"./framework-0dc5846b.js";const e="/assets/images/16f42013c4aa2dbe.png",t="/assets/images/16f42017ce5af387.png",o={},c=p(`<h1 id="微前端子应用实施方案" tabindex="-1"><a class="header-anchor" href="#微前端子应用实施方案" aria-hidden="true">#</a> 微前端子应用实施方案</h1><h2 id="_1-配置子应用名称-package-json" tabindex="-1"><a class="header-anchor" href="#_1-配置子应用名称-package-json" aria-hidden="true">#</a> 1.配置子应用名称 package.json</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-son&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 必须与基座中配置的子应用名称吻合</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.4.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A magical vue admin. An out-of-box UI solution for enterprise applications. Newest development stack of vue. Lots of awesome features&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pan &lt;panfree23@gmail.com&gt;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-封装子应用打包配置-src-microapp" tabindex="-1"><a class="header-anchor" href="#_2-封装子应用打包配置-src-microapp" aria-hidden="true">#</a> 2.封装子应用打包配置 src/microApp</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> defaultSettings <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name

<span class="token keyword">const</span> name <span class="token operator">=</span> defaultSettings<span class="token punctuation">.</span>title <span class="token operator">||</span> <span class="token string">&#39;Tamil&#39;</span> <span class="token comment">// page title</span>
<span class="token keyword">const</span> microConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 把子应用打包成 umd 库格式</span>
  <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-[name]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">jsonpFunction</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">webpackJsonp_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
<span class="token comment">// 解决跨域问题</span>
<span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 由于qiankun内部请求都是fetch来请求资源，因此子应用必须容许跨域</span>
  <span class="token string-property property">&#39;Access-Control-Allow-Origin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span>
<span class="token punctuation">}</span>
exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> microConfig<span class="token punctuation">,</span> headers <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入配置 vue.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 微前端子项目配置注入</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> microConfig<span class="token punctuation">,</span> headers <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./src/microApp/micro-config.js&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>devServer<span class="token punctuation">.</span>headers <span class="token operator">=</span> headers<span class="token comment">// 配置跨域 必须</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>configureWebpack<span class="token punctuation">.</span>output <span class="token operator">=</span> microConfig<span class="token comment">// umd格式注入 必须module.exports.publicPath = \`//localhost:\${port}\`// 端口号配置 不是必须设置</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-封装子应用启动函数-src-tmvc-micro-main-micro-js" tabindex="-1"><a class="header-anchor" href="#_3-封装子应用启动函数-src-tmvc-micro-main-micro-js" aria-hidden="true">#</a> 3.封装子应用启动函数 src/tmvc/micro/main-micro.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;@/App.vue&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;@/router&#39;</span>
<span class="token comment">// import Cookies from &#39;js-cookie&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * name 导入官方通信方法
 */</span>
<span class="token comment">// import appStore from &#39;./app-store/app-store&#39;</span>
<span class="token comment">// 判断是否在微应用试用下</span>
<span class="token keyword">const</span> __qiankun__ <span class="token operator">=</span> window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__
<span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token doc-comment comment">/**
 * name 导出生命周期函数
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">microMain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * name 微应用初始化
     * param <span class="token punctuation">{</span>Object<span class="token punctuation">}</span> props 主应用下发的props
     * description  bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发
     * description 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
     */</span>
    <span class="token keyword">async</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token parameter">props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 存储全局使用 props是基座传输过来的值，可进行token等存储使用</span>
      <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$MicroBootstrap <span class="token operator">=</span> props
      <span class="token comment">// Cookies.set(props,&#39;$MicroBootstrap&#39;)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * name 实例化微应用
     * param <span class="token punctuation">{</span>Object<span class="token punctuation">}</span> props 主应用下发的props
     * description 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
     */</span>
    <span class="token keyword">async</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 注册应用间通信  props是基座传输过来的值，可进行token等存储使用</span>
      <span class="token comment">// appStore(props)// 存储例子1 可作参考</span>
      <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$MicroMount <span class="token operator">=</span> props
      <span class="token comment">// Cookies.set(props,&#39;$MicroMount&#39;)</span>
      <span class="token comment">// 注册微应用实例化函数</span>
      <span class="token function">render</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * name 微应用卸载/切出
     */</span>
    <span class="token keyword">async</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      instance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      instance<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      instance <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * name 手动加载微应用触发的生命周期
     * param <span class="token punctuation">{</span>Object<span class="token punctuation">}</span> props 主应用下发的props
     * description 可选生命周期钩子，仅使用 loadMicroApp 方式手动加载微应用时生效
     */</span>
    <span class="token keyword">async</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;update props&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * name 子应用实例化函数
 * param <span class="token punctuation">{</span>Object<span class="token punctuation">}</span> props param0 qiankun将用户添加信息和自带信息整合，通过props传给子应用
 * description <span class="token punctuation">{</span>Array<span class="token punctuation">}</span> routes 主应用请求获取注册表后，从服务端拿到路由数据
 * description <span class="token punctuation">{</span>String<span class="token punctuation">}</span> 子应用路由前缀 主应用请求获取注册表后，从服务端拿到路由数据
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> container <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>container<span class="token punctuation">)</span>
  Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

  instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>container <span class="token operator">?</span> container<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 独立运行环境直接实例化vue</span>
__qiankun__ <span class="token operator">||</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> microMain<span class="token punctuation">,</span> render <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入启动函数 src/main.js 原有的vue初始化函数可以删除了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 微前端配置文件注入</span>
<span class="token keyword">import</span> tmvc <span class="token keyword">from</span> <span class="token string">&#39;@/tmvc&#39;</span>
<span class="token comment">// name 导出微应用生命周期</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> bootstrap<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> unmount <span class="token punctuation">}</span> <span class="token operator">=</span> tmvc<span class="token punctuation">.</span><span class="token function">microMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> bootstrap<span class="token punctuation">,</span> mount<span class="token punctuation">,</span> unmount <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-修改子应用layout组件-src-layout-index-vue-如果是微前端模式下-隐藏菜单和头部" tabindex="-1"><a class="header-anchor" href="#_4-修改子应用layout组件-src-layout-index-vue-如果是微前端模式下-隐藏菜单和头部" aria-hidden="true">#</a> 4.修改子应用layout组件 src/layout/index.vue 如果是微前端模式下，隐藏菜单和头部</h2><p><img src="`+e+'" alt="图片" loading="lazy"><img src="'+t+`" alt="图片" loading="lazy"></p><h2 id="_5-修改子应用路由配置-src-router-index-js" tabindex="-1"><a class="header-anchor" href="#_5-修改子应用路由配置-src-router-index-js" aria-hidden="true">#</a> 5.修改子应用路由配置 src/router/index.js</h2><p>如果是微前端模式，不需要匹配*重定向404，因为基座中已经有相关配置了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> notFindRoute <span class="token operator">=</span> window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__ <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果微前端模式下，所有一级路由要添加路由前缀，与基座中配置的activeRule要吻合</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 判断是否在微应用试用下</span>
<span class="token keyword">const</span> __qiankun__ <span class="token operator">=</span> window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__

<span class="token keyword">let</span> prefix <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>__qiankun__<span class="token punctuation">)</span><span class="token punctuation">{</span>
  prefix <span class="token operator">=</span> <span class="token string">&#39;/vue-son&#39;</span> <span class="token comment">// /vue-son为主应用的activeRule</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">createRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// mode: &#39;history&#39;, // require service support</span>
  <span class="token function-variable function">scrollBehavior</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> constantRoutes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 如果是子应用模式，添加前缀</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__qiankun__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span>path <span class="token operator">=</span> prefix <span class="token operator">+</span> e<span class="token punctuation">.</span>path
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> e
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-封装应用通讯-src-microapp-app-store-app-store-js" tabindex="-1"><a class="header-anchor" href="#_6-封装应用通讯-src-microapp-app-store-app-store-js" aria-hidden="true">#</a> 6.封装应用通讯 src/microApp/app-store/app-store.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>
<span class="token comment">// import { DataType } from &quot;wl-core&quot;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@name</span> 声明一个常量准备将props内的部分内容储存起来
 */</span>
<span class="token keyword">const</span> <span class="token constant">STORE</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@name</span> 启动qiankun应用间通信机制
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">props</span> 官方通信函数
 * <span class="token keyword">@description</span> 注意：主应用是从qiankun中导出的initGlobalState方法，
 * <span class="token keyword">@description</span> 注意：子应用是附加在props上的onGlobalStateChange, setGlobalState方法（只用主应用注册了通信才会有）
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">appStore</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@name</span> 监听应用间通信，并存入store
   */</span>
  props<span class="token operator">?.</span>onGlobalStateChange<span class="token operator">?.</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> prev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> prev<span class="token punctuation">)</span>
      store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;appstore/setMsg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name为---&#39;</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">true</span>
  <span class="token punctuation">)</span>
  <span class="token comment">// /**</span>
  <span class="token comment">//  * @name 改变并全局广播新消息</span>
  <span class="token comment">//  */</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  props<span class="token punctuation">.</span><span class="token function">setGlobalState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ignore</span><span class="token operator">:</span> props<span class="token punctuation">.</span>aa<span class="token punctuation">,</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> props<span class="token punctuation">.</span>aa
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@name</span> 将你需要的数据存起来，供下面setState方法使用
   */</span>
  <span class="token constant">STORE</span><span class="token punctuation">.</span>setGlobalState <span class="token operator">=</span> props<span class="token operator">?.</span>setGlobalState
  <span class="token constant">STORE</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@name</span> 全局setState方法，修改的内容将通知所有微应用
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">data</span> 按照你设定的内容格式数据
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// if (!DataType.isObject(data)) {</span>
  <span class="token comment">//   throw Error(&#39;data必须是对象格式&#39;);</span>
  <span class="token comment">// }</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token constant">STORE</span><span class="token punctuation">.</span>setGlobalState<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token constant">STORE</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token operator">...</span>data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  setState
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> appStore

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入通讯函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> appStore <span class="token keyword">from</span> <span class="token string">&#39;./app-store/app-store&#39;</span>
 
<span class="token comment">// src/tmvc/micro/main-micro.js</span>
 
<span class="token keyword">async</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 注册应用间通信  props是基座传输过来的值，可进行token等存储使用</span>
 <span class="token function">appStore</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token comment">// 存储例子1 可作参考 挂载应用通讯</span>
 <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$MicroMount <span class="token operator">=</span> props
 <span class="token comment">// Cookies.set(props,&#39;$MicroMount&#39;)</span>
 <span class="token comment">// 注册微应用实例化函数</span>
 <span class="token function">render</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),i=[c];function l(r,u){return s(),a("div",null,i)}const k=n(o,[["render",l],["__file","子应用实施方案.html.vue"]]);export{k as default};
