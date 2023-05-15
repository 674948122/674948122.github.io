import{_ as n,Q as s,a2 as a,a4 as e}from"./framework-a091056b.js";const p={},i=e(`<h1 id="pnpm-包管理器" tabindex="-1"><a class="header-anchor" href="#pnpm-包管理器" aria-hidden="true">#</a> pnpm 包管理器</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>PNPM 是一个 Node.js 包管理工具，类似于 NPM 和 Yarn。PNPM 采用了一种不同于 NPM 和 Yarn 的方式来管理 Node.js 包，它使用硬链接来共享依赖包，从而减少了存储空间的占用和安装的时间。同时，PNPM 也可以像 NPM 和 Yarn 一样在全局和本地范围内安装和使用 Node.js 模块。PNPM 还提供了一些其他的功能，比如支持自动清理未使用的包，以及支持多个版本的 Node.js 和 NPM。</p><p>相比于 NPM 和 Yarn，PNPM 具有以下优点：</p><ul><li>节约磁盘空间：PNPM 使用硬链接来共享依赖包，因此只需要存储一份依赖包的副本，可以大大节约磁盘空间。</li><li>加速安装：PNPM 可以同时下载和安装多个依赖包，从而加速安装过程。</li><li>更好的稳定性：PNPM 可以在多个项目之间共享依赖包，从而减少了不同版本的包之间的冲突和版本不一致的问题。</li></ul><p>PNPM 的主要缺点是相对于 NPM 和 Yarn，它的社区和生态系统还比较小，因此在某些方面可能缺乏支持和文档。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>1、使用 npm 全局安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 npm 全局安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>

<span class="token comment"># 查看 pnpm 版本信息</span>
<span class="token function">pnpm</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、使用 yarn 全局安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 yarn 全局安装</span>
<span class="token function">yarn</span> global <span class="token function">add</span> <span class="token function">pnpm</span>

<span class="token comment"># 查看 pnpm 版本信息</span>
<span class="token function">pnpm</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：可以使用以下命令来安装特定版本的 pnpm</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看可用的 pnpm 版本</span>
<span class="token function">npm</span> view <span class="token function">pnpm</span> versions

<span class="token comment"># 使用 npm 全局安装特定版本</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pnpm@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>

<span class="token comment"># 使用 npm 本地安装特定版本</span>
<span class="token function">npm</span> <span class="token function">install</span> pnpm@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>

<span class="token comment"># 查看 pnpm 版本信息</span>
<span class="token function">pnpm</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、用于安装项目中的所有依赖。</span>
<span class="token function">pnpm</span> <span class="token function">install</span>

<span class="token comment"># 2、用于安装指定的依赖包，例如 pnpm install react。</span>
<span class="token function">pnpm</span> <span class="token function">install</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>

<span class="token comment"># 3、用于全局安装指定的依赖包，例如 pnpm install --global typescript。</span>
<span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>

<span class="token comment"># 4、用于更新项目中的所有依赖。</span>
<span class="token function">pnpm</span> update

<span class="token comment"># 5、用于更新指定的依赖包，例如 pnpm update react。</span>
<span class="token function">pnpm</span> update <span class="token punctuation">[</span>package<span class="token punctuation">]</span>

<span class="token comment"># 6、用于删除指定的依赖包，例如 pnpm remove react。</span>
<span class="token function">pnpm</span> remove <span class="token punctuation">[</span>package<span class="token punctuation">]</span>

<span class="token comment"># 7、用于列出当前项目中已安装的所有依赖包。</span>
<span class="token function">pnpm</span> list

<span class="token comment"># 8、用于列出当前系统中已全局安装的所有依赖包。</span>
<span class="token function">pnpm</span> list <span class="token parameter variable">--global</span>

<span class="token comment"># 9、用于列出当前项目中已安装的所有依赖包及其直接依赖项。</span>
<span class="token function">pnpm</span> list <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 10、用于查看指定依赖包的详细信息，例如 pnpm info react。</span>
<span class="token function">pnpm</span> info <span class="token punctuation">[</span>package<span class="token punctuation">]</span>

<span class="token comment"># 11、用于将指定的依赖包添加到 devDependencies，例如 pnpm add jest --save-dev。</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> --save-dev

<span class="token comment"># 12、用于将指定的依赖包添加到 dependencies，例如 pnpm add react --save。</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token parameter variable">--save</span>

<span class="token comment"># 13、用于全局安装指定的依赖包，例如 pnpm add typescript --global。</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> <span class="token parameter variable">--global</span>

<span class="token comment"># 14、用于重新构建项目中的所有依赖。</span>
<span class="token function">pnpm</span> rebuild

<span class="token comment"># 15、用于运行项目中的脚本命令，例如 pnpm run start。</span>
<span class="token function">pnpm</span> run <span class="token punctuation">[</span>script<span class="token punctuation">]</span>

<span class="token comment"># 16、用于查看本地包存储状态。</span>
<span class="token function">pnpm</span> store status

<span class="token comment"># 17、用于清理本地存储的未被任何项目使用的包。</span>
<span class="token function">pnpm</span> store prune

<span class="token comment"># 18、用于将指定的依赖包添加到本地存储，以便其他项目使用。</span>
<span class="token function">pnpm</span> store <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>

<span class="token comment"># 19、用于启动本地包服务器。</span>
<span class="token function">pnpm</span> server

<span class="token comment"># 20、用于在所有项目中执行指定命令，例如 pnpm recursive install。</span>
<span class="token function">pnpm</span> recursive <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>创建 Vue 项目的方式与 PNPM 无关，与使用的脚手架工具有关。</p><p>无论使用哪种方式创建 Vue 项目，都可以在项目目录下使用 PNPM 进行依赖安装。例如，在使用 Vue CLI 创建项目后，进入项目目录后可以使用 pnpm install 安装依赖。</p><h3 id="pnpm-create-vue-app" tabindex="-1"><a class="header-anchor" href="#pnpm-create-vue-app" aria-hidden="true">#</a> pnpm create vue-app</h3><p>pnpm create vue-app 创建的是基于 Vue CLI 2.x 版本的项目，该版本的 Vue CLI 使用 webpack 进行打包，需要配置一些基本的项目信息和插件。</p><p>使用 pnpm create vue-app 创建 Vue 2.x 项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个 Vue 2.x 项目</span>
<span class="token function">pnpm</span> create vue-app my-project

<span class="token comment"># 安装依赖</span>
<span class="token builtin class-name">cd</span> my-project
<span class="token function">pnpm</span> <span class="token function">install</span>

<span class="token comment"># 运行项目</span>
<span class="token function">pnpm</span> serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pnpm-create-vite-app" tabindex="-1"><a class="header-anchor" href="#pnpm-create-vite-app" aria-hidden="true">#</a> pnpm create vite-app</h3><p>pnpm create vite-app 创建的是基于 Vue CLI 3.x 版本的项目，该版本的 Vue CLI 使用了 vite 构建工具，具有更快的构建速度和更少的配置，适合较小的项目和快速原型开发。</p><p>使用 pnpm create vite-app 创建 Vue 3.x 项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个 Vue 3.x 项目</span>
<span class="token function">pnpm</span> create vite-app my-project <span class="token parameter variable">--template</span> vue

<span class="token comment"># 安装依赖</span>
<span class="token builtin class-name">cd</span> my-project
<span class="token function">pnpm</span> <span class="token function">install</span>

<span class="token comment"># 运行项目</span>
<span class="token function">pnpm</span> serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的命令中，my-project 是项目名称，可以根据实际情况进行更改。同时，–template 参数用于指定创建的项目模板，如果不指定，默认是 JavaScript 模板。对于 Vue 3.x 项目，需要指定 --template vue。</p>`,27),l=[i];function c(t,d){return s(),a("div",null,l)}const m=n(p,[["render",c],["__file","pnpm包管理器.html.vue"]]);export{m as default};
