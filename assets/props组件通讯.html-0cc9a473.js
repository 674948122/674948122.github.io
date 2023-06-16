const n=JSON.parse('{"key":"v-2bd6bb5b","path":"/Vue2%E5%8D%87%E7%BA%A7Vue3/props%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF.html","title":"props组件通讯","lang":"zh-CN","frontmatter":{"title":"props组件通讯","tag":["Vue3","props","组件通讯","defineProps"],"description":"vue2 vue2中的props写法： &lt;!-- 父组件 --&gt; &lt;template&gt; &lt;div&gt; &lt;Child :list=\\"list\\"&gt;&lt;/Child&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { data(){ return { list: [1, 2, 3] } } } &lt;/script&gt; &lt;!-- 子组件 --&gt; &lt;template&gt; &lt;div&gt; &lt;span v-for=\\"item in list\\" :key=\\"item\\"&gt;{{item}}&lt;/span&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { props: { list: { type: Array, default: () =&gt; [] } }, mounted() { console.log(this.list) } } &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://674948122.github.io/doc/Vue2%E5%8D%87%E7%BA%A7Vue3/props%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF.html"}],["meta",{"property":"og:title","content":"props组件通讯"}],["meta",{"property":"og:description","content":"vue2 vue2中的props写法： &lt;!-- 父组件 --&gt; &lt;template&gt; &lt;div&gt; &lt;Child :list=\\"list\\"&gt;&lt;/Child&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { data(){ return { list: [1, 2, 3] } } } &lt;/script&gt; &lt;!-- 子组件 --&gt; &lt;template&gt; &lt;div&gt; &lt;span v-for=\\"item in list\\" :key=\\"item\\"&gt;{{item}}&lt;/span&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { props: { list: { type: Array, default: () =&gt; [] } }, mounted() { console.log(this.list) } } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-25T13:42:07.000Z"}],["meta",{"property":"article:author","content":"Mr.PDG"}],["meta",{"property":"article:tag","content":"Vue3"}],["meta",{"property":"article:tag","content":"props"}],["meta",{"property":"article:tag","content":"组件通讯"}],["meta",{"property":"article:tag","content":"defineProps"}],["meta",{"property":"article:modified_time","content":"2023-04-25T13:42:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"props组件通讯\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-25T13:42:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.PDG\\",\\"url\\":\\"https://674948122.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"vue2","slug":"vue2","link":"#vue2","children":[]},{"level":2,"title":"vue3","slug":"vue3","link":"#vue3","children":[]}],"git":{"createdTime":1682418614000,"updatedTime":1682430127000,"contributors":[{"name":"pandegong","email":"674948122@qq.com","commits":3}]},"readingTime":{"minutes":0.43,"words":129},"filePathRelative":"Vue2升级Vue3/props组件通讯.md","localizedDate":"2023年4月25日","excerpt":"<h2> vue2</h2>\\n<p>vue2中的props写法：</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token comment\\">&lt;!-- 父组件 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>Child</span> <span class=\\"token attr-name\\">:list</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>Child</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">list</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token comment\\">&lt;!-- 子组件 --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>span</span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item in list<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>{{item}}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>span</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">props</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">list</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> Array<span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token function-variable function\\">default</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">mounted</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>list<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
