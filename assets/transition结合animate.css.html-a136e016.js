import{_ as t,E as e,Z as c,$ as l,a2 as a,a3 as n,a0 as p,a1 as i}from"./framework-4b017f08.js";const o={},u=a("h2",{id:"介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),d=a("p",null,[a("code",null,"animate.css"),n("是一个动画库，可以实现各种各样的动画效果。")],-1),r=a("p",null,[a("code",null,"Vue"),n("的"),a("code",null,"transition"),n("标签可以结合"),a("code",null,"animate.css"),n("来实现动画效果。")],-1),m={href:"https://animate.style/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> animate.css <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>

<span class="token keyword">import</span> <span class="token string">&#39;animate.css&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>替换动画class即可</p><p><code>enter-active-class=&quot;animate__animated 进入动画class&quot;</code></p><p><code>leave-active-class=&quot;animate__animated 离开动画class&quot;</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 设置进入、离开动画 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
        <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animate__animated animate__bounceIn<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">leave-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animate__animated animate__bounceOut<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>out-in<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(_,g){const s=e("ExternalLinkIcon");return c(),l("div",null,[u,d,r,a("p",null,[a("a",m,[n("文档链接"),p(s)])]),v])}const b=t(o,[["render",k],["__file","transition结合animate.css.html.vue"]]);export{b as default};
