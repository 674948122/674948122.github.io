const n=JSON.parse(`{"key":"v-4805f534","path":"/CSS%E7%9B%B8%E5%85%B3/css%E5%8F%98%E9%87%8F.html","title":"css变量","lang":"zh-CN","frontmatter":{"description":"css变量 定义 --demo-color: '#fff'; &lt;div data-text=\\"啦啦啦\\"&gt;&lt;/div&gt; 获取 color: var(--demo-color); content: attr(data-text); &lt;template&gt; &lt;div class=\\"demo\\" data-text=\\"啦啦啦\\"&gt;&lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { data(){ return { } } } &lt;/script&gt; &lt;style lang=\\"scss\\"&gt; :root{ --demo-color: '#fff'; } .demo{ color: var(--demo-color); // css全局变量 &amp;:after{ content: attr(data-text); // 动态获取内容 } } &lt;/style&gt;","head":[["meta",{"property":"og:url","content":"https://674948122.github.io/doc/CSS%E7%9B%B8%E5%85%B3/css%E5%8F%98%E9%87%8F.html"}],["meta",{"property":"og:title","content":"css变量"}],["meta",{"property":"og:description","content":"css变量 定义 --demo-color: '#fff'; &lt;div data-text=\\"啦啦啦\\"&gt;&lt;/div&gt; 获取 color: var(--demo-color); content: attr(data-text); &lt;template&gt; &lt;div class=\\"demo\\" data-text=\\"啦啦啦\\"&gt;&lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { data(){ return { } } } &lt;/script&gt; &lt;style lang=\\"scss\\"&gt; :root{ --demo-color: '#fff'; } .demo{ color: var(--demo-color); // css全局变量 &amp;:after{ content: attr(data-text); // 动态获取内容 } } &lt;/style&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-25T13:42:07.000Z"}],["meta",{"property":"article:author","content":"Mr.PDG"}],["meta",{"property":"article:modified_time","content":"2023-04-25T13:42:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"css变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-25T13:42:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.PDG\\",\\"url\\":\\"https://674948122.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"获取","slug":"获取","link":"#获取","children":[]}],"git":{"createdTime":1682418614000,"updatedTime":1682430127000,"contributors":[{"name":"pandegong","email":"674948122@qq.com","commits":2}]},"readingTime":{"minutes":0.25,"words":74},"filePathRelative":"CSS相关/css变量.md","localizedDate":"2023年4月25日","excerpt":"<h1> css变量</h1>\\n<h2> 定义</h2>\\n<p><code>--demo-color: '#fff';</code></p>\\n<p><code>&lt;div data-text=\\"啦啦啦\\"&gt;&lt;/div&gt;</code></p>\\n<h2> 获取</h2>\\n<p><code>color: var(--demo-color);</code></p>\\n<p><code>content: attr(data-text);</code></p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>demo<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">data-text</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>啦啦啦<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n        \\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>scss<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n    <span class=\\"token selector\\">:root</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">--demo-color</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'#fff'</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token selector\\">.demo</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> <span class=\\"token function\\">var</span><span class=\\"token punctuation\\">(</span>--demo-color<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>     <span class=\\"token selector\\">// css全局变量\\n        &amp;:after</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token property\\">content</span><span class=\\"token punctuation\\">:</span> <span class=\\"token function\\">attr</span><span class=\\"token punctuation\\">(</span>data-text<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> // 动态获取内容    \\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
