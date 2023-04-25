const n=JSON.parse(`{"key":"v-3d76ae7d","path":"/Vue2%E5%8D%87%E7%BA%A7Vue3/refs%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF.html","title":"refs组件通讯","lang":"zh-CN","frontmatter":{"description":"refs组件通讯 使用API选项时，我们可以通过this.$refs.name获取指定的元素或组件，但在组合API中不行。如果我们想通过ref获取，需要定义一个同名的Ref对象，在组件挂载后可以访问。 示例代码如下： &lt;template&gt; &lt;ul class=\\"parent list-group\\"&gt; &lt;li class=\\"list-group-item\\" v-for=\\"i in childRefs?.list\\" :key=\\"i\\"&gt; {{ i }} &lt;/li&gt; &lt;/ul&gt; &lt;!-- The value of the child component ref is the same as that in the &lt;script&gt; --&gt; &lt;child-components ref=\\"childRefs\\"&gt;&lt;/child-components&gt; &lt;!-- parent component --&gt; &lt;/template&gt; &lt;script setup&gt; import { ref } from 'vue' import ChildComponents from './child.vue' const childRefs = ref(null) &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://674948122.github.io/Vue2%E5%8D%87%E7%BA%A7Vue3/refs%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF.html"}],["meta",{"property":"og:title","content":"refs组件通讯"}],["meta",{"property":"og:description","content":"refs组件通讯 使用API选项时，我们可以通过this.$refs.name获取指定的元素或组件，但在组合API中不行。如果我们想通过ref获取，需要定义一个同名的Ref对象，在组件挂载后可以访问。 示例代码如下： &lt;template&gt; &lt;ul class=\\"parent list-group\\"&gt; &lt;li class=\\"list-group-item\\" v-for=\\"i in childRefs?.list\\" :key=\\"i\\"&gt; {{ i }} &lt;/li&gt; &lt;/ul&gt; &lt;!-- The value of the child component ref is the same as that in the &lt;script&gt; --&gt; &lt;child-components ref=\\"childRefs\\"&gt;&lt;/child-components&gt; &lt;!-- parent component --&gt; &lt;/template&gt; &lt;script setup&gt; import { ref } from 'vue' import ChildComponents from './child.vue' const childRefs = ref(null) &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-25T10:30:14.000Z"}],["meta",{"property":"article:author","content":"Mr.PDG"}],["meta",{"property":"article:modified_time","content":"2023-04-25T10:30:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"refs组件通讯\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-25T10:30:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.PDG\\",\\"url\\":\\"https://674948122.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1682418614000,"updatedTime":1682418614000,"contributors":[{"name":"pandegong","email":"674948122@qq.com","commits":1}]},"readingTime":{"minutes":0.86,"words":257},"filePathRelative":"Vue2升级Vue3/refs组件通讯.md","localizedDate":"2023年4月25日","excerpt":"<h1> refs组件通讯</h1>\\n<p>使用API选项时，我们可以通过this.$refs.name获取指定的元素或组件，但在组合API中不行。如果我们想通过ref获取，需要定义一个同名的Ref对象，在组件挂载后可以访问。</p>\\n<p>示例代码如下：</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ul</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>parent list-group<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list-group-item<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>i in childRefs?.list<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>i<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      {{ i }}\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token comment\\">&lt;!-- The value of the child component ref is the same as that in the &lt;script&gt; --&gt;</span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>child-components</span> <span class=\\"token attr-name\\">ref</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>childRefs<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>child-components</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token comment\\">&lt;!-- parent component --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ref <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n<span class=\\"token keyword\\">import</span> ChildComponents <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'./child.vue'</span>\\n<span class=\\"token keyword\\">const</span> childRefs <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
