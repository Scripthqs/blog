import{_ as t,r as p,o as e,c as o,d as n,e as s,b as r,f as c}from"./app-66b3a2f7.js";const l={},i=n("h1",{id:"vue-router",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-router","aria-hidden":"true"},"#"),s(" vue-router")],-1),u=n("h2",{id:"vue-router-简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-router-简介","aria-hidden":"true"},"#"),s(" vue-router 简介")],-1),d=n("p",null,[s("vue-router 是 vue.js 官方"),n("strong",null,"插件"),s("，是 vue.js 官方给出的"),n("strong",null,"路由解决方案"),s("。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目 中组件的切换。")],-1),k={href:"https://router.vuejs.org/zh",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="vue-router-安装和配置" tabindex="-1"><a class="header-anchor" href="#vue-router-安装和配置" aria-hidden="true">#</a> vue-router 安装和配置</h2><h3 id="安装-vue-router-包" tabindex="-1"><a class="header-anchor" href="#安装-vue-router-包" aria-hidden="true">#</a> 安装 vue-router 包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建路由模块" tabindex="-1"><a class="header-anchor" href="#创建路由模块" aria-hidden="true">#</a> 创建路由模块</h3><p>在 <strong>src 源代码目录</strong>下，新建 <strong>router/index.js</strong> 路由模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1 导入vue和VueRouter包</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//2 调用Vue.use()函数，把VueRouter安装为Vue的插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//3 创建路由实例对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//4 向外共享路由的实例对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入并挂载路由模块" tabindex="-1"><a class="header-anchor" href="#导入并挂载路由模块" aria-hidden="true">#</a> 导入并挂载路由模块</h3><p>在 <strong>src/main.js</strong> 入口文件中，导入并挂载路由模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;@/router/index.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明路由链接和占位符" tabindex="-1"><a class="header-anchor" href="#声明路由链接和占位符" aria-hidden="true">#</a> 声明<strong>路由链接</strong>和<strong>占位符</strong></h3><p>在 <strong>src/App.vue 组件</strong>中，使用 vue-router 提供的**<code>&lt;router-link&gt;</code>**和 **<code>&lt;router-view&gt;</code>**声明路由链接和占位符</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span> |
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明路由的匹配规则" tabindex="-1"><a class="header-anchor" href="#声明路由的匹配规则" aria-hidden="true">#</a> 声明路由的<strong>匹配规则</strong></h3><p>在 src/router/index.js 路由模块中，通过 <strong>routes 数组</strong>声明路由的匹配规则。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;../views/Home.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;../views/About.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;About&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由的懒加载" tabindex="-1"><a class="header-anchor" href="#路由的懒加载" aria-hidden="true">#</a> 路由的懒加载</h3><p>打包构建应用时，JavaScript 包会变得非常大，影响页面加载，能把不同路由对应的组件分割成不同的代码块，然后当路由被访问时才加载对应组件。</p><p>懒加载的写法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/About.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="路由重定向" tabindex="-1"><a class="header-anchor" href="#路由重定向" aria-hidden="true">#</a> 路由重定向</h2><p>路由重定向指的是：用户在访问<strong>地址 A</strong> 的时候，<strong>强制用户跳转到</strong>地址 C ，从而展示特定的组件页面。 通过路由规则的 <strong>redirect</strong> 属性，指定一个新的路由地址，可以很方便地设置路由的重定向</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">.</span>redirect<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h2><p>通过路由实现<strong>组件的嵌套展示</strong>，叫做嵌套路由</p><ol><li>点击<strong>父级路由链接</strong>显示模板内容</li><li>模板内容中又有<strong>子级路由链接</strong></li><li>点击<strong>子级路由链接</strong>显示<strong>子级模板内容</strong></li></ol><p>声明子路由链接和子路由占位符。</p><p>在 <strong>About.vue 组件</strong>中，声明 tab1 和 tab2 的<strong>子路由链接</strong>以及子<strong>路由占位符</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about/tab1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>tab1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span> |
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about/tab2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>tab2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <strong>children</strong> 属性声明<strong>子路由规则</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;tab1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1 <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;tab2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab2 <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认子路由：如果<strong>children 数组</strong>中，某个路由规则的<strong>path 值为空字符串</strong>，则这条路由规则，叫做<strong>默认子路由</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/about/tab1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;tab1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1 <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;tab2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab2 <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>使用 redirect 可以重定向路由实现默认子路由的功能</strong></li><li><strong>子路由规则，路径不能加斜线</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&#39;/about&#39;</span><span class="token operator">&gt;</span>tab1<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span> <span class="token operator">|</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&#39;/about/tab2&#39;</span><span class="token operator">&gt;</span>tab2<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1 <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;tab2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab2 <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态路由匹配" tabindex="-1"><a class="header-anchor" href="#动态路由匹配" aria-hidden="true">#</a> 动态路由匹配</h2><p>假如有 3 个路由链接，定义了 3 个路由规则，但是 3 个规则指向同一个组件。此时，<strong>路由规则的复用性差</strong></p><p>动态路由指的是：把 Hash 地址中<strong>可变的部分</strong>定义为<strong>参数项</strong>，从而<strong>提高路由规则的复用性</strong>。 在 vue-router 中使用**英文的冒号（:）**来定义路由的参数项。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie/:id&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>Movie <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Movie 组件中，希望根据 id 的值拿到对于的电影的详细信息</p><h2 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参" aria-hidden="true">#</a> 路由传参</h2><h3 id="route-params-参数对象" tabindex="-1"><a class="header-anchor" href="#route-params-参数对象" aria-hidden="true">#</a> <code>$route.params</code> 参数对象</h3><p>在<strong>动态路由</strong>渲染出来的组件中，可以使用 \`\`this.$route.params\`对象访问到<strong>动态匹配的参数值</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>this 在行内的时候必须省略</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>$route</code> 是路由的<strong>参数对象</strong></li><li><code>$router</code> 是路由的<strong>导航对象</strong></li></ul><h3 id="使用-props-接收路由参数" tabindex="-1"><a class="header-anchor" href="#使用-props-接收路由参数" aria-hidden="true">#</a> 使用 props 接收路由参数</h3><p><strong>为了简化路由参数的获取形式</strong>，vue-router 允许在<strong>路由规则</strong>中开启 <strong>props 传参</strong>。</p><ol><li>在定义路由规则时，声明 props:true 选项</li><li>在 Movie.vue 组件中使用 props 接收匹配到规则</li><li>直接在 Movie.vue 组件中使用 props 参数</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie/:id&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>Movie<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span>
<span class="token comment">//Movie.vue</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径参数和查询参数" tabindex="-1"><a class="header-anchor" href="#路径参数和查询参数" aria-hidden="true">#</a> 路径参数和查询参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&quot;/movie/1&quot;</span><span class="token operator">&gt;</span>电影<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在 hash 地址中，/ 后面的参数项，叫<strong>路径参数</strong></li><li>在路由的参数对象($route)中，需要使用<code>this.$route.params</code>来访问路径参数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&#39;/movie/1?id=1&amp;age=24&#39;</span><span class="token operator">&gt;</span>电影<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span> <span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在 hash 地址，? 后面的参数项，叫<strong>查询参数</strong></li><li>在路由参数对象($route)中，需要使用<code>this.$route.query</code>来访问 查询参数对象</li></ul><p>在 <code>this.$route</code> 中，path 是部分路径，<strong>fullpath 才是完整的路径</strong></p><h2 id="vue-router-导航" tabindex="-1"><a class="header-anchor" href="#vue-router-导航" aria-hidden="true">#</a> vue-router 导航</h2><p>导航分为声明式导航和编程式导航。</p><ul><li>在浏览器中，点击链接实现导航的方式，叫做声明式导航。 <ul><li>点击 a 链接，<code>&lt;router-link&gt;</code></li></ul></li><li>在浏览器中，调用 API 方法实现导航的方式，叫做编程式导航。 <ul><li>调用 location.href 跳转到新页面</li></ul></li></ul><p><strong>vue-router 中的编程式导航 API：</strong></p><p><code>this.$router.push(&#39;hash 地址&#39;)</code></p><ul><li>跳转到指定 hash 地址，并<strong>增加</strong>一条历史记录</li></ul><p><code>this.$router.replace(&#39;hash 地址&#39;)</code></p><ul><li>跳转到指定的 hash 地址，并<strong>替换掉当前</strong>的历史记录</li></ul><p><code>this.$router.go(数值 n)</code></p><ul><li>实现导航历史前进、后退</li></ul><p>在实际开发中，一般只会前进和后退一层页面。因此，经常使用 <code>$router.go</code> 的简化用法</p><ul><li><code>$router.back()</code>在历史记录中，后退到上一个页面</li><li><code>$router.forward()</code>在历史记录中，前进到下一个页面</li></ul><p><strong>在行内使用编程式导航跳转时，this 必须要省略，否则会报错</strong>。</p><h3 id="导航守卫" tabindex="-1"><a class="header-anchor" href="#导航守卫" aria-hidden="true">#</a> 导航守卫</h3><p>导航守卫可以<strong>控制路由的访问权限</strong>。</p><p>未登录的情况下，访问后台主页时，<strong>强制跳转到登录页</strong>。</p><h3 id="全局前置守卫" tabindex="-1"><a class="header-anchor" href="#全局前置守卫" aria-hidden="true">#</a> 全局前置守卫</h3><p>每次发生路由的<strong>导航跳转</strong>时，都会触发全局前置守卫。因此，在全局前置守卫中，程序员可以对每个路由进行 <strong>访问权限</strong>的控制</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局前置守卫的回调函数中接收 <strong>3 个形参</strong>:</p><ul><li>to 是将要访问的路由信息对象</li><li>from 是将要离开的路由的信息对象</li><li>next 是一个函数，调用 next()表示放行，允许这次路由导航</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// to 将访问哪一个路径</span>
  <span class="token comment">// from 代表从哪个路径跳转而来</span>
  <span class="token comment">// next 是一个函数,表示放行</span>
  <span class="token comment">//   next() 放行 next(&#39;/login&#39;) 强制跳转</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 获取token</span>
  <span class="token keyword">const</span> token <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>token<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>next 函数的 <strong>3 种调用方式</strong>:</p><ul><li>当前用户<strong>拥有</strong>后台主页的访问权限，直接放行</li><li>next() 当前用户<strong>没有</strong>后台主页的访问权限，<strong>强制其跳转到登录页面</strong>：<code>next(&#39;/login&#39;)</code></li><li>当前用户<strong>没有</strong>后台主页的访问权限，<strong>不允许跳转到后台主页</strong>：<code>next(false</code>)</li></ul><p>控制后台主页的访问权限:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&quot;/main&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,82);function g(m,b){const a=p("ExternalLinkIcon");return e(),o("div",null,[i,u,d,n("p",null,[s("vue-router 的官方文档地址："),n("a",k,[s("https://router.vuejs.org/zh"),r(a)])]),v])}const y=t(l,[["render",g],["__file","03_vue_Router.html.vue"]]);export{y as default};
