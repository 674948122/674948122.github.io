import{_ as a,E as c,Z as d,$ as t,a1 as l,a2 as s,a3 as i,a0 as o}from"./framework-f650ad76.js";const r={},p={href:"https://cn.vuejs.org/api/sfc-css-features.html#scoped-css",target:"_blank",rel:"noopener noreferrer"};function u(v,e){const n=c("ExternalLinkIcon");return d(),t("div",null,[e[1]||(e[1]=l(`<h2 id="什么是深度选择器" tabindex="-1"><a class="header-anchor" href="#什么是深度选择器" aria-hidden="true">#</a> 什么是深度选择器</h2><p>在Vue中，我们可以通过<code>scoped</code>来给每个组件的样式添加一个唯一的标识符，这样就可以避免样式冲突的问题。但是有时候我们需要在组件内部修改全局样式，这时候就需要用到深度选择器。</p><h2 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> vue2</h2><p>在Vue中，我们可以通过<code>/deep/</code>或者<code>::v-deep</code>来使用深度选择器。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style scoped&gt;
    .container /deep/ .box</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style scoped&gt;
    .container ::v-deep .box</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> vue3</h2><p>在Vue3中，<code>/deep/</code>和<code>::v-deep</code>已经被废弃了，取而代之的是<code>::v-deep()</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style scoped&gt;
    .container ::v-deep(.box)</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,10)),s("ul",null,[s("li",null,[s("a",p,[e[0]||(e[0]=i("文档链接",-1)),o(n)])])])])}const h=a(r,[["render",u],["__file","css深度选择器deep.html.vue"]]);export{h as default};
