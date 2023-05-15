import{_ as n,Q as s,a2 as a,a4 as e}from"./framework-a091056b.js";const t="/assets/images/16f41e75c1dc47a5.png",p={},o=e(`<h1 id="微前端基座实施方案" tabindex="-1"><a class="header-anchor" href="#微前端基座实施方案" aria-hidden="true">#</a> 微前端基座实施方案</h1><h2 id="_1-安装qiankun依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装qiankun依赖" aria-hidden="true">#</a> 1. 安装qiankun依赖</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install qiankun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>&quot;qiankun&quot;: &quot;2.4.4&quot;</code></p><h2 id="_2-封装子应用配置-src-tmvc-base-对外暴露子应用启动函数" tabindex="-1"><a class="header-anchor" href="#_2-封装子应用配置-src-tmvc-base-对外暴露子应用启动函数" aria-hidden="true">#</a> 2.封装子应用配置 src/tmvc-base 对外暴露子应用启动函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  registerMicroApps<span class="token punctuation">,</span>
  addGlobalUncaughtErrorHandler<span class="token punctuation">,</span>
  start
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;qiankun&#39;</span>

<span class="token comment">// 子应用注册信息</span>
<span class="token keyword">import</span> apps <span class="token keyword">from</span> <span class="token string">&#39;@/microRouter/index.js&#39;</span>

<span class="token doc-comment comment">/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */</span>
<span class="token function">registerMicroApps</span><span class="token punctuation">(</span>apps<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// qiankun 生命周期钩子 - 加载前</span>
  <span class="token function-variable function">beforeLoad</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(&#39;加载子应用前，加载进度条&#39;, app.name)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// qiankun 生命周期钩子 - 挂载后</span>
  <span class="token function-variable function">afterMount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(&#39;加载子应用前，进度条加载完成&#39;, app.name)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 添加全局的未捕获异常处理器
 */</span>
<span class="token function">addGlobalUncaughtErrorHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> msg <span class="token punctuation">}</span> <span class="token operator">=</span> event
  <span class="token comment">// 加载失败时提示</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>msg <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;died in status LOADING_SOURCE_CODE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;请检查应用是否可运行，子应用加载未成功&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 导出 qiankun 的启动函数</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-封装子应用注册列表-src-microrouter-对外暴露子应用列表-此处将来可改造成异步接口获取" tabindex="-1"><a class="header-anchor" href="#_3-封装子应用注册列表-src-microrouter-对外暴露子应用列表-此处将来可改造成异步接口获取" aria-hidden="true">#</a> 3.封装子应用注册列表 src/microRouter 对外暴露子应用列表，此处将来可改造成异步接口获取</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> envConfig <span class="token keyword">from</span> <span class="token string">&#39;./config.json&#39;</span><span class="token comment">// 配置子应用访问地址</span>
<span class="token keyword">const</span> <span class="token constant">ENV</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">||</span> <span class="token string">&#39;development&#39;</span><span class="token comment">// 使用 NODE_ENV 区分不同环境，默认值为 development</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> envConfig<span class="token punctuation">[</span><span class="token constant">ENV</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token constant">VUE_ELEMENTUI_ADMIN</span><span class="token punctuation">,</span>
  <span class="token constant">VUE_SON_APP</span><span class="token punctuation">,</span>
  <span class="token constant">TAMIL_APP</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> config

<span class="token comment">//封装一个getActiveRule方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">getActiveRule</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">hash</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">location</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token doc-comment comment">/**
   * name: 微应用名称 - 具有唯一性，为了方便区分，采取和子应用名称
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue-son&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token constant">VUE_SON_APP</span><span class="token punctuation">,</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">&#39;#Appmicro&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activeRule</span><span class="token operator">:</span> <span class="token function">getActiveRule</span><span class="token punctuation">(</span><span class="token string">&#39;#/vue-son&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-创建子应用挂载节点-src-layout-components-appmain-vue-这里的挂载节点id要与第3步中定义的子应用配置吻合" tabindex="-1"><a class="header-anchor" href="#_4-创建子应用挂载节点-src-layout-components-appmain-vue-这里的挂载节点id要与第3步中定义的子应用配置吻合" aria-hidden="true">#</a> 4.创建子应用挂载节点 src/layout/components/AppMain.vue 这里的挂载节点id要与第3步中定义的子应用配置吻合</h2><figure><img src="`+t+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="_5-注入子应用配置-并启动-src-router-index-js" tabindex="-1"><a class="header-anchor" href="#_5-注入子应用配置-并启动-src-router-index-js" aria-hidden="true">#</a> 5.注入子应用配置，并启动，src/router/index.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> startQiankun <span class="token keyword">from</span> <span class="token string">&#39;@/tmvc-base&#39;</span><span class="token comment">// 注入乾坤基座配置</span>
 
<span class="token comment">// 调用qiankun启动服务</span>
<span class="token function">startQiankun</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">sandbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// strictStyleIsolation: true, // 开启严格的样式隔离模式</span>
    <span class="token literal-property property">experimentalStyleIsolation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启前缀样式隔离</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-菜单配置" tabindex="-1"><a class="header-anchor" href="#_6-菜单配置" aria-hidden="true">#</a> 6.菜单配置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;@/layout&#39;</span>

<span class="token keyword">const</span> apiGatewayRouter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;#/vue-son&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 与第3步中配置的activeRule要吻合</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;apiGateway&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;API网关&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-tunny-pingtai&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/vue-son/apiGateway/apiStatistics&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/vue-son/apiGateway/apiStatistics&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 必须要在路径前加子应用路径/vue-son/ + apiGateway/apiStatistics</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;apiStatistics&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;API概览&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> apiGatewayRouter

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-封装应用通讯-src-shared" tabindex="-1"><a class="header-anchor" href="#_7-封装应用通讯-src-shared" aria-hidden="true">#</a> 7.封装应用通讯 src/shared</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// qiankun原生数据通讯函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initGlobalState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;qiankun&#39;</span>

<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token function">initGlobalState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> actions

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听数据变更" tabindex="-1"><a class="header-anchor" href="#监听数据变更" aria-hidden="true">#</a> 监听数据变更</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> actions <span class="token keyword">from</span> <span class="token string">&#39;@/shared/actions&#39;</span><span class="token comment">// 注入qiankun通讯组件</span>
 
<span class="token comment">// 注册一个观察者函数</span>
actions<span class="token punctuation">.</span><span class="token function">onGlobalStateChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> prevState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token comment">// state: 变更后的状态; prevState: 变更前的状态</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;主应用观察者：token 改变前的值为 &#39;</span><span class="token punctuation">,</span> prevState<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;主应用观察者：登录状态发生改变，改变后的 token 的值为 &#39;</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="向子应用广播" tabindex="-1"><a class="header-anchor" href="#向子应用广播" aria-hidden="true">#</a> 向子应用广播</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> actions <span class="token keyword">from</span> <span class="token string">&#39;@/shared/actions&#39;</span><span class="token comment">// 注入qiankun通讯组件</span>
 
actions<span class="token punctuation">.</span><span class="token function">setGlobalState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&#39;token&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[o];function c(l,r){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","基座实施方案.html.vue"]]);export{d as default};
