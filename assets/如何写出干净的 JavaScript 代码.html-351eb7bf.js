import{_ as s,Z as a,$ as t,a1 as p}from"./framework-f650ad76.js";const e={};function o(c,n){return a(),t("div",null,[...n[0]||(n[0]=[p(`<h1 id="如何写出干净的-javascript-代码" tabindex="-1"><a class="header-anchor" href="#如何写出干净的-javascript-代码" aria-hidden="true">#</a> 如何写出干净的 JavaScript 代码</h1><h2 id="_1-变量" tabindex="-1"><a class="header-anchor" href="#_1-变量" aria-hidden="true">#</a> 1. 变量</h2><h3 id="使用有意义的名称" tabindex="-1"><a class="header-anchor" href="#使用有意义的名称" aria-hidden="true">#</a> 使用有意义的名称</h3><p>变量的名称应该是可描述，有意义的， <code>JavaScript</code> 变量都应该采用驼峰式大小写 ( <code>camelCase</code> ) 命名。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;JDoe@example.com&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> qux <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token string">&quot;John@example.com&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isActive <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>布尔变量通常需要回答特定问题，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>isActive 
didSubscribe 
hasLinkedAccount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免添加不必要的上下文" tabindex="-1"><a class="header-anchor" href="#避免添加不必要的上下文" aria-hidden="true">#</a> 避免添加不必要的上下文</h3><p>当对象或类已经包含了上下文的命名时，不要再向变量名称添加冗余的上下文。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&quot;296e2589-7b33-400a-b762-007b730c8e6d&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">userEmail</span><span class="token operator">:</span> <span class="token string">&quot;JDoe@example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">userFirstName</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">userLastName</span><span class="token operator">:</span> <span class="token string">&quot;Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">userAge</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

user<span class="token punctuation">.</span>userId<span class="token punctuation">;</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;296e2589-7b33-400a-b762-007b730c8e6d&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;JDoe@example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

user<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免硬编码值" tabindex="-1"><a class="header-anchor" href="#避免硬编码值" aria-hidden="true">#</a> 避免硬编码值</h3><p>确保声明有意义且可搜索的常量，而不是直接插入一个常量值。全局常量可以采用 <code>SCREAMING_SNAKE_CASE</code> 风格命名。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span>clearSessionData<span class="token punctuation">,</span> <span class="token number">900000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">const</span> <span class="token constant">SESSION_DURATION_MS</span> <span class="token operator">=</span> <span class="token number">15</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span>clearSessionData<span class="token punctuation">,</span> <span class="token constant">SESSION_DURATION_MS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-函数" tabindex="-1"><a class="header-anchor" href="#_2-函数" aria-hidden="true">#</a> 2. 函数</h2><h3 id="使用有意义的名称-1" tabindex="-1"><a class="header-anchor" href="#使用有意义的名称-1" aria-hidden="true">#</a> 使用有意义的名称</h3><p>函数名称需要描述函数的实际作用，即使很长也没关系。函数名称通常使用动词，但返回布尔值的函数可能是个例外 — 它可以采用 <code>是或否</code> 问题的形式，函数名也应该是驼峰式的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">agreed</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">toggleThemeSwitcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">didAgreeToAllTerms</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用默认参数" tabindex="-1"><a class="header-anchor" href="#使用默认参数" aria-hidden="true">#</a> 使用默认参数</h3><p>默认参数比 <code>&amp;&amp; ||</code> 或在函数体内使用额外的条件语句更干净。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">printAllFilesInDirectory</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> directory <span class="token operator">=</span> dir <span class="token operator">||</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">//   ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">printAllFilesInDirectory</span><span class="token punctuation">(</span>dir <span class="token operator">=</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="限制参数的数量" tabindex="-1"><a class="header-anchor" href="#限制参数的数量" aria-hidden="true">#</a> 限制参数的数量</h3><p>尽管这条规则可能有争议，但函数最好是有3个以下参数。如果参数较多可能是以下两种情况之一：</p><ul><li>该函数做的事情太多，应该拆分。</li><li>传递给函数的数据以某种方式相关，可以作为专用数据结构传递。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">sendPushNotification</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> message<span class="token punctuation">,</span> image<span class="token punctuation">,</span> isSilent<span class="token punctuation">,</span> delayMs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token function">sendPushNotification</span><span class="token punctuation">(</span><span class="token string">&quot;New Message&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://...&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">sendPushNotification</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> message<span class="token punctuation">,</span> image<span class="token punctuation">,</span> isSilent<span class="token punctuation">,</span> delayMs <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> notificationConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;New Message&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&quot;http://...&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isSilent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delayMs</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">sendPushNotification</span><span class="token punctuation">(</span>notificationConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免在一个函数中做太多事情" tabindex="-1"><a class="header-anchor" href="#避免在一个函数中做太多事情" aria-hidden="true">#</a> 避免在一个函数中做太多事情</h3><p>一个函数应该一次做一件事，这有助于减少函数的大小和复杂性，使测试、调试和重构更容易。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">pingUsers</span><span class="token punctuation">(</span><span class="token parameter">users</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  users<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> userRecord <span class="token operator">=</span> database<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userRecord<span class="token punctuation">.</span><span class="token function">isActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">ping</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">pingInactiveUsers</span><span class="token punctuation">(</span><span class="token parameter">users</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token operator">!</span>isUserActive<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>ping<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isUserActive</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userRecord <span class="token operator">=</span> database<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> userRecord<span class="token punctuation">.</span><span class="token function">isActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免使用布尔标志作为参数" tabindex="-1"><a class="header-anchor" href="#避免使用布尔标志作为参数" aria-hidden="true">#</a> 避免使用布尔标志作为参数</h3><p>函数含有布尔标志的参数意味这个函数是可以被简化的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> isPublic</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPublic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./public/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createPublicFile</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./public/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免写重复的代码" tabindex="-1"><a class="header-anchor" href="#避免写重复的代码" aria-hidden="true">#</a> 避免写重复的代码</h3><p>如果你写了重复的代码，每次有逻辑改变，你都需要改动多个位置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">renderCarsList</span><span class="token punctuation">(</span><span class="token parameter">cars</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cars<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">car</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> price <span class="token operator">=</span> car<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> make <span class="token operator">=</span> car<span class="token punctuation">.</span><span class="token function">getMake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> brand <span class="token operator">=</span> car<span class="token punctuation">.</span><span class="token function">getBrand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> nbOfDoors <span class="token operator">=</span> car<span class="token punctuation">.</span><span class="token function">getNbOfDoors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> price<span class="token punctuation">,</span> make<span class="token punctuation">,</span> brand<span class="token punctuation">,</span> nbOfDoors <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">renderMotorcyclesList</span><span class="token punctuation">(</span><span class="token parameter">motorcycles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  motorcycles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">motorcycle</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> price <span class="token operator">=</span> motorcycle<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> make <span class="token operator">=</span> motorcycle<span class="token punctuation">.</span><span class="token function">getMake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> brand <span class="token operator">=</span> motorcycle<span class="token punctuation">.</span><span class="token function">getBrand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> seatHeight <span class="token operator">=</span> motorcycle<span class="token punctuation">.</span><span class="token function">getSeatHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> price<span class="token punctuation">,</span> make<span class="token punctuation">,</span> brand<span class="token punctuation">,</span> nbOfDoors <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">renderVehiclesList</span><span class="token punctuation">(</span><span class="token parameter">vehicles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vehicles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">vehicle</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> price <span class="token operator">=</span> vehicle<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> make <span class="token operator">=</span> vehicle<span class="token punctuation">.</span><span class="token function">getMake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> brand <span class="token operator">=</span> vehicle<span class="token punctuation">.</span><span class="token function">getBrand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> price<span class="token punctuation">,</span> make<span class="token punctuation">,</span> brand <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&quot;car&quot;</span><span class="token operator">:</span>
        data<span class="token punctuation">.</span>nbOfDoors <span class="token operator">=</span> vehicle<span class="token punctuation">.</span><span class="token function">getNbOfDoors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;motorcycle&quot;</span><span class="token operator">:</span>
        data<span class="token punctuation">.</span>seatHeight <span class="token operator">=</span> vehicle<span class="token punctuation">.</span><span class="token function">getSeatHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免副作用" tabindex="-1"><a class="header-anchor" href="#避免副作用" aria-hidden="true">#</a> 避免副作用</h3><p>在 <code>JavaScript</code> 中，你应该更喜欢函数式模式而不是命令式模式。换句话说，大多数情况下我们都应该保持函数纯。副作用可能会修改共享状态和资源，从而导致一些奇怪的问题。所有的副作用都应该集中管理，例如你需要更改全局变量或修改文件，可以专门写一个 util 来做这件事。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token string">&quot;21-8-2021&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">splitIntoDayMonthYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  date <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">splitIntoDayMonthYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Another function could be expecting date as a string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;21&#39;, &#39;8&#39;, &#39;2021&#39;];</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">splitIntoDayMonthYear</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> date<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token string">&quot;21-8-2021&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newDate <span class="token operator">=</span> <span class="token function">splitIntoDayMonthYear</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Original vlaue is intact</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;21-8-2021&#39;;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newDate<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;21&#39;, &#39;8&#39;, &#39;2021&#39;];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，如果你将一个可变值传递给函数，你应该直接克隆一个新值返回，而不是直接改变该它。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">enrollStudentInCourse</span><span class="token punctuation">(</span><span class="token parameter">course<span class="token punctuation">,</span> student</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  course<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> student<span class="token punctuation">,</span> <span class="token literal-property property">enrollmentDate</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">enrollStudentInCourse</span><span class="token punctuation">(</span><span class="token parameter">course<span class="token punctuation">,</span> student</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>course<span class="token punctuation">,</span> <span class="token punctuation">{</span> student<span class="token punctuation">,</span> <span class="token literal-property property">enrollmentDate</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-条件语句" tabindex="-1"><a class="header-anchor" href="#_3-条件语句" aria-hidden="true">#</a> 3. 条件语句</h2><h3 id="使用非负条件" tabindex="-1"><a class="header-anchor" href="#使用非负条件" aria-hidden="true">#</a> 使用非负条件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">isUserNotVerified</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isUserNotVerified</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">isUserVerified</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUserVerified</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尽可能使用简写" tabindex="-1"><a class="header-anchor" href="#尽可能使用简写" aria-hidden="true">#</a> 尽可能使用简写</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isActive <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>firstName <span class="token operator">!==</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> firstName <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> firstName <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isUserEligible <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">isVerified</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span><span class="token function">didSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isActive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>firstName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isUserEligible <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">isVerified</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span><span class="token function">didSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免过多分支" tabindex="-1"><a class="header-anchor" href="#避免过多分支" aria-hidden="true">#</a> 避免过多分支</h3><p>尽早 <code>return</code> 会使你的代码线性化、更具可读性且不那么复杂。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">addUserService</span><span class="token punctuation">(</span><span class="token parameter">db<span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span><span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;No user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;No database connection&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;No database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">addUserService</span><span class="token punctuation">(</span><span class="token parameter">db<span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;No database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span><span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;No database connection&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;No user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先使用-map-而不是-switch-语句" tabindex="-1"><a class="header-anchor" href="#优先使用-map-而不是-switch-语句" aria-hidden="true">#</a> 优先使用 map 而不是 switch 语句</h3><p>既能减少复杂度又能提升性能。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">const</span> <span class="token function-variable function">getColorByStatus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;success&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;failure&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;warning&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;loading&quot;</span><span class="token operator">:</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">const</span> statusColors <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">failure</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getColorByStatus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> statusColors<span class="token punctuation">[</span>status<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用可选链接" tabindex="-1"><a class="header-anchor" href="#使用可选链接" aria-hidden="true">#</a> 使用可选链接</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;JDoe@example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">billing</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">iban</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">swift</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">street</span><span class="token operator">:</span> <span class="token string">&quot;Some Street Name&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&quot;CA&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token punctuation">(</span>user <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span>email<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> street <span class="token operator">=</span>
  <span class="token punctuation">(</span>user <span class="token operator">&amp;&amp;</span>
    user<span class="token punctuation">.</span>billing <span class="token operator">&amp;&amp;</span>
    user<span class="token punctuation">.</span>billing<span class="token punctuation">.</span>address <span class="token operator">&amp;&amp;</span>
    user<span class="token punctuation">.</span>billing<span class="token punctuation">.</span>address<span class="token punctuation">.</span>street<span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> state <span class="token operator">=</span>
  <span class="token punctuation">(</span>user <span class="token operator">&amp;&amp;</span>
    user<span class="token punctuation">.</span>billing <span class="token operator">&amp;&amp;</span>
    user<span class="token punctuation">.</span>billing<span class="token punctuation">.</span>address <span class="token operator">&amp;&amp;</span>
    user<span class="token punctuation">.</span>billing<span class="token punctuation">.</span>address<span class="token punctuation">.</span>state<span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">const</span> email <span class="token operator">=</span> user<span class="token operator">?.</span>email <span class="token operator">??</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> street <span class="token operator">=</span> user<span class="token operator">?.</span>billing<span class="token operator">?.</span>address<span class="token operator">?.</span>street <span class="token operator">??</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> street <span class="token operator">=</span> user<span class="token operator">?.</span>billing<span class="token operator">?.</span>address<span class="token operator">?.</span>state <span class="token operator">??</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-并发" tabindex="-1"><a class="header-anchor" href="#_4-并发" aria-hidden="true">#</a> 4.并发</h2><h3 id="避免回调" tabindex="-1"><a class="header-anchor" href="#避免回调" aria-hidden="true">#</a> 避免回调</h3><p>回调很混乱，会导致代码嵌套过深，使用 <code>Promise</code> 替代回调。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token function">getUser</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">getProfile</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> profile</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">getAccount</span><span class="token punctuation">(</span>profile<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> account</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getReports</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> reports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sendStatistics</span><span class="token punctuation">(</span>reports<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Do ✅</span>
<span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>getProfile<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>getAccount<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>getReports<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>sendStatistics<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// or using Async/Await ✅✅</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendUserStatistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> profile <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getProfile</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> account <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAccount</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> reports <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getReports</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">sendStatistics</span><span class="token punctuation">(</span>reports<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-错误处理" tabindex="-1"><a class="header-anchor" href="#_5-错误处理" aria-hidden="true">#</a> 5. 错误处理</h2><h3 id="处理抛出的错误和-reject-的-promise" tabindex="-1"><a class="header-anchor" href="#处理抛出的错误和-reject-的-promise" aria-hidden="true">#</a> 处理抛出的错误和 reject 的 promise</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// Possible erronous code</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// Possible erronous code</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Follow the most applicable (or all):</span>
  <span class="token comment">// 1- More suitable than console.log</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 2- Notify user if applicable</span>
  <span class="token function">alertUserOfError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3- Report to server</span>
  <span class="token function">reportErrorToServer</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 4- Use a custom error handler</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-注释" tabindex="-1"><a class="header-anchor" href="#_6-注释" aria-hidden="true">#</a> 6.注释</h2><h3 id="只注释业务逻辑" tabindex="-1"><a class="header-anchor" href="#只注释业务逻辑" aria-hidden="true">#</a> 只注释业务逻辑</h3><p>可读的代码使你免于过度注释，因此，你应该只注释复杂的逻辑。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token keyword">function</span> <span class="token function">generateHash</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Hash variable</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// Get the length of the string</span>
  <span class="token keyword">let</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token comment">// If the string is empty return</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> hash<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Loop through every character in the string</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Get character code.</span>
    <span class="token keyword">const</span> char <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Make the hash</span>
    hash <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">-</span> hash <span class="token operator">+</span> char<span class="token punctuation">;</span>

    <span class="token comment">// Convert to 32-bit integer</span>
    hash <span class="token operator">&amp;=</span> hash<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">generateHash</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> hash<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> char <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    hash <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">-</span> hash <span class="token operator">+</span> char<span class="token punctuation">;</span>
    hash <span class="token operator">=</span> hash <span class="token operator">&amp;</span> hash<span class="token punctuation">;</span> <span class="token comment">// Convert to 32bit integer</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> hash<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用版本控制" tabindex="-1"><a class="header-anchor" href="#使用版本控制" aria-hidden="true">#</a> 使用版本控制</h3><p>在代码里不需要保留历史版本的注释，想查的话你直接用 <code>git log</code> 就可以搜到。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Don&#39;t ❌</span>
<span class="token doc-comment comment">/**
 * 2021-7-21: Fixed corner case
 * 2021-7-15: Improved performance
 * 2021-7-10: Handled mutliple user types
 */</span>
<span class="token keyword">function</span> <span class="token function">generateCanonicalLink</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// const session = getUserSession(user)</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Do ✅</span>
<span class="token keyword">function</span> <span class="token function">generateCanonicalLink</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65)])])}const l=s(e,[["render",o],["__file","如何写出干净的 JavaScript 代码.html.vue"]]);export{l as default};
