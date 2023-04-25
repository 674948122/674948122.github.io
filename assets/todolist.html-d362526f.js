import{_ as r,X as a,Y as s,$ as n,a0 as e,a1 as p,Z as o,E as c}from"./framework-cddc4983.js";const d={},i=o(`<p>----------------------------------------------------------1、微前端功能点答疑------------------------------------------------------------------</p><p>1、一般情况下不需要采用微前端模式的情况下，架构部推出的前端框架标准配置应该是什么样的</p><pre><code>a、qiankun的依赖、配置项（registerMicroApps、start等函数）、挂载点、读取子应用的配置或者请求保留是否存在问题

问:在应用配置的时候可选择不启动乾坤基座，默认情况下均为不启动情况（前端）

答：在应用配置的时候可选择不启动乾坤基座，默认情况下均为不启动情况（前端） 主应用中 不执行startQiankun()方法即可，此时即使注入了子应用配置也不会生效。
</code></pre><p>2、子应用若单独启动的时，是否属于乾坤挂载的配置点在哪，默认设置微false，主应用与子应用怎么传递这个参数的</p><pre><code>答：可以使用window.__POWERED_BY_QIANKUN__变量判断是否是微前端模式，不需要传递，只要微前端启动，会自动创建变量，
子应用直接读取就可以了。
</code></pre><p>3、主题颜色改变是否主应用与子应用能同步</p><pre><code>答：修改方式：主应用与子应用同步主题色，通过qiankun的应用通讯，同步主应用与子应用的配置数据
因为使用了css样式隔离，微前端模式没法变更主题色，sass不支持原生var变量，如果做动态主题需要大量时间做适配

关于换肤的实现方案：
    1.使用element-ui官方主题库，动态添加style标签，覆盖样式，
        优点：不需要提前准备主题文件，打包文件小。
        缺点：只支持基础颜色切换，依赖第三方cdn
    2.多套主题换肤，提前准备多套主题css文件，通过文件名称动态切换
        优点：主题自由度高
        缺点：需要提前准备主题文件，打包大小会大
</code></pre><p>4、主应用全局设置缓存子应用缓存否，与全局的请求参数与加密参数（token、加密算法）</p><pre><code>修改方式：主应用与子应用同步主题色，通过qiankun的应用通讯，同步主应用与子应用的配置数据（第二问解答）
  
类似于静态代码写死的相关配置，比如加密解密偏移量，主应用与自应用均需要配置
</code></pre><p>5、若存在路由回退跳转的情况，该如何设置 （主应用跳子应用）or （子应用跳主应用）</p><pre><code>a.主应用跳 自应用
    正常使用this.$router.push({ path: &#39;#/vue-son/apiGateway/apiStatistics&#39; })跳转即可。

b.子应用跳 主应用
    需要使用
        window.location.href = &#39;#/admin/user&#39;
        window.history.pushState(null, &#39;&#39;, &quot;#/admin/user&quot;);
        &lt;a href=&quot;#/admin/user&quot;&gt;跳转主应用&lt;/a&gt;
    以上3种方式任选
    在微前端模式下，如果使用this.$router.push() ,在后退时会导致子应用不渲染。

c.子应用跳 子应用
    与b同理

以上三种情况，路由应该如何配置

tips: 可以使用window.__POWERED_BY_QIANKUN__变量判断是否是微前端模式，对路由跳转做二次封装。
</code></pre><p>6、原有的项目如果要改成子应用挂载的形式，修改时间大概多久</p><pre><code>乐观估计大概需要修改3天时间，主要修改点webpack的配置与版本适配
</code></pre><p>7、baseUrl相关，主子应用是独立还是分别配置</p><pre><code>单独配置
</code></pre><p>8、Nginx如何部署（在同一个Nginx下与在不同服务器Nginx下）</p><pre><code>需要确认
都可以，建议部署在一起，方便统一管理
https://blog.csdn.net/a1998321/article/details/108758033?spm=1001.2101.3001.6650.3&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-3-108758033-blog-122301593.pc_relevant_default&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-3-108758033-blog-122301593.pc_relevant_default&amp;utm_relevant_index=6
</code></pre><p>9、静态资源引用问题，比如图标</p><pre><code>左侧导航（以主应用为准）、 按钮级别的图标各配各的
</code></pre><p>10、主页存在多个panel看板，每个看板能否加载不同的子应用内容（待确认）</p><pre><code>可以同时启动多个子应用，但是有问题。
同一个子应用，手动加载和自动加载 不能混用，只能二选一，否则自动加载的路由识别会出问题。
</code></pre><p>-------------------------------------------------------------2、子应用管理中心设计----------------------------------------------------------------------------------------</p><p>关键元素：</p>`,23),l={href:"http://tunny.com:8080",target:"_blank",rel:"noopener noreferrer"},_={href:"https://qiankun.umijs.org/guide/",target:"_blank",rel:"noopener noreferrer"},u=o("<p>5、子应用图标 6、子应用描述 7、主应用路由匹配前缀 8、开发者 9、更新时间 10、子应用状态（启用、停用）</p><p>11、子应用路由清单（类似做一个菜单管理）</p><p>tips：子应用只能创建一个一级菜单</p><p>菜单类型一旦创建，不许修改（目录，菜单，按钮，子应用）</p><p>------------------------------------------------------------3、梳理迁移后不可用的接口列表按照模块说明----------------------------------------------------------------------</p><p>------------------------------------------------------------4、菜单模块对应修改说明-------------------------------------------------------------------------------------------</p><p>1、新增菜单时</p><p>菜单类型增加可选项（目录、菜单、按钮、子应用）</p><p>2、点击子应用时，加载子应用菜单列表</p><p>3、用户可将加载出的子应用菜单列表勾选</p><p>4、用户点击保存会将勾选的子应用菜单追加到主应用菜单树下面</p><p>5、在维护角色菜单权限的时候正常操作即可</p>",12);function m(h,f){const t=c("ExternalLinkIcon");return a(),s("div",null,[i,n("p",null,[e("1、子应用中文名称（唯一） 2、子应用英文名称（唯一 ，小写 中划线 长度不超过10位不允许特殊符号和数字） 3、挂载节点的Dom 唯一标识ID（一般情况下，domId为 主应用的 内容区域ID） 4、子应用入口（此内容一般为nginx部署之后的启动地址，比如 "),n("a",l,[e("http://tunny.com:8080"),p(t)]),e("） -------(是否带http不确定，自动补全不确定) 配置为字符串时，表示微应用的访问地址，例如 "),n("a",_,[e("https://qiankun.umijs.org/guide/"),p(t)]),e(" 需要填写完整http协议 尾部以/结尾，或者/index.html结尾")]),u])}const k=r(d,[["render",m],["__file","todolist.html.vue"]]);export{k as default};
