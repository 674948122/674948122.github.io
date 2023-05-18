import{_ as n,X as s,Y as t,$ as a}from"./framework-0dc5846b.js";const e={},i=a(`<h2 id="设置代码片段" tabindex="-1"><a class="header-anchor" href="#设置代码片段" aria-hidden="true">#</a> 设置代码片段</h2><ol><li>ctrl+shift+P 打开命令窗口，输入“snippet”，选择“首选项：配置用户代码片段”</li><li>选择一个新的代码片段文件，或者选择一个已有的代码片段文件</li><li>编辑代码片段文件，保存</li></ol><h2 id="代码片段文件格式" tabindex="-1"><a class="header-anchor" href="#代码片段文件格式" aria-hidden="true">#</a> 代码片段文件格式</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;vuesetup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuesetup&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  &lt;div&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&lt;script setup name=\\&quot;\${0}\\&quot;&gt;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&lt;style lang=\\&quot;scss\\&quot; scoped&gt;&lt;/style&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuesetup&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段说明：</p><ul><li>prefix：代码片段的前缀，输入前缀后，按下tab键，即可插入代码片段</li><li>body：代码片段的内容，可以是字符串，也可以是数组</li><li>description：代码片段的描述，用于代码提示</li><li>\${0}：代码片段的光标位置，按下tab键后，光标会跳转到该位置</li></ul><h2 id="删除代码片段" tabindex="-1"><a class="header-anchor" href="#删除代码片段" aria-hidden="true">#</a> 删除代码片段</h2><ol><li>ctrl+shift+P 打开命令窗口，输入“snippet”，选择“首选项：配置用户代码片段”</li><li>选择一个代码片段文件，顶部tab栏中，点击“在Finder中显示”</li><li>删除代码片段文件</li></ol>`,8),o=[i];function l(p,u){return s(),t("div",null,o)}const r=n(e,[["render",l],["__file","自定义代码片段.html.vue"]]);export{r as default};
