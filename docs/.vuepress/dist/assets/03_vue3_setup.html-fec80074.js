import{_ as p,r as o,o as c,c as i,d as n,e as s,b as t,f as e}from"./app-66b3a2f7.js";const l={},u=n("h1",{id:"组合式-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#组合式-api","aria-hidden":"true"},"#"),s(" 组合式 API")],-1),r=n("p",null,"Composition API：组合式 API",-1),d={href:"https://v3.cn.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="options-api-和-composition-api" tabindex="-1"><a class="header-anchor" href="#options-api-和-composition-api" aria-hidden="true">#</a> Options API 和 Composition API</h2><h3 id="options-api-存在的问题" tabindex="-1"><a class="header-anchor" href="#options-api-存在的问题" aria-hidden="true">#</a> Options API 存在的问题</h3><p>使用传统 OptionsAPI 中，新增或者修改一个需求，就需要分别在 data，methods，computed 里修改。</p><h3 id="composition-api-的优势" tabindex="-1"><a class="header-anchor" href="#composition-api-的优势" aria-hidden="true">#</a> Composition API 的优势</h3><p>我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。</p><h2 id="setup-函数" tabindex="-1"><a class="header-anchor" href="#setup-函数" aria-hidden="true">#</a> setup 函数</h2><ol><li><p>理解：Vue3.0 中一个新的配置项，值为一个函数。</p></li><li><p>setup 是所有<strong>Composition API（组合 API）</strong> “<em>表演的舞台</em> ”</p></li><li><p>组件中所用到的：<strong>数据、方法</strong>等等，均要<strong>配置在 setup</strong>中。</p></li><li><p>setup 函数的两种返回值</p></li><li><p>若<strong>返回一个对象</strong>，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//数据</span>
    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
    <span class="token comment">//方法</span>
    <span class="token keyword">function</span> <span class="token function">sayFun</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token punctuation">,</span>
      sayFun
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em>若返回一个渲染函数：则可以自定义渲染内容。（<strong>了解</strong>）</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//返回一个函数（渲染函数）</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>注意:</p><p>尽量<strong>不要与 Vue2.x 配置混用</strong></p><ul><li>Vue2.x 配置（data、methods、computed...）中<strong>可以访问到</strong>setup 中的属性、方法。</li><li>但在 setup 中<strong>不能访问到</strong>Vue2.x 配置（data、methods、computed...）。</li><li>如果有重名, <strong>setup 优先</strong>。</li></ul><p>setup<strong>不能是一个 async 函数</strong>，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性。（后期也可以返回一个 Promise 实例，但需要 Suspense 和异步组件的配合）</p><h2 id="ref-函数" tabindex="-1"><a class="header-anchor" href="#ref-函数" aria-hidden="true">#</a> ref 函数</h2><p>作用: 定义一个响应式的数据</p><p>需要先引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> xxx <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>initValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> job <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;前端开发&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">money</span><span class="token operator">:</span> <span class="token string">&quot;10k&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个包含响应式数据的<strong>引用对象（reference 对象，简称 ref 对象）</strong></li><li>JS 中操作（改）数据： <code>xxx.value</code></li><li>模板中读取数据: 不需要使用.value</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//修改数据</span>
<span class="token keyword">function</span> <span class="token function">changeInfo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;xiaoMing&#39;</span>
  age<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">18</span>
  job<span class="token punctuation">.</span>value<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;后端开发&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> job<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//读取数据</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>s
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>job<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ref 函数接收的数据类型：</p><ul><li>接收的数据可以是：基本类型、也可以是对象类型。</li><li>基本类型的数据：响应式依然是靠<code>Object.defineProperty()</code>的<code>get</code>与<code>set</code>完成的。</li><li>对象类型的数据：内部 “ 求助 ”了 Vue3.0 中的一个新函数—— <code>reactive</code>函数。</li></ul><h2 id="reactive-函数" tabindex="-1"><a class="header-anchor" href="#reactive-函数" aria-hidden="true">#</a> reactive 函数</h2><p>作用: 定义一个<strong>对象类型</strong>的响应式数据（基本类型不要用它，要用<code>ref</code>函数）</p><p>需要先引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> 代理对象 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>源对象<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> per <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;zhangSan&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Proxy{}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收一个对象（或数组），返回一个<strong>代理对象（Proxy 的实例对象，简称 proxy 对象）</strong></p><p>reactive 定义的响应式数据是“<strong>深层次的</strong>”</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;抽烟&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;喝酒&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;烫头&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>hobby<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;学习&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>直接通过<strong>修改索引改数组，也是响应式</strong>，vue2.0 通过索引修改数组不是响应式</p></blockquote><p>内部<strong>基于 ES6 的 Proxy 实现</strong>，通过代理对象操作源对象内部数据进行操作。</p><h2 id="vue3-0-的响应式原理" tabindex="-1"><a class="header-anchor" href="#vue3-0-的响应式原理" aria-hidden="true">#</a> Vue3.0 的响应式原理</h2><h3 id="vue2-x-的响应式" tabindex="-1"><a class="header-anchor" href="#vue2-x-的响应式" aria-hidden="true">#</a> vue2.x 的响应式</h3><ul><li><p>实现原理：</p><ul><li><p>对象类型：通过<code>Object.defineProperty()</code>对属性的读取、修改进行拦截（数据劫持）。</p></li><li><p>数组类型：通过<strong>重写更新数组的一系列方法</strong>来实现拦截。（对数组的变更方法进行了包裹）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;count&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>存在问题：</p><ul><li><strong>新增属性、删除属性</strong>, 界面不会更新。</li><li>直接通过<strong>下标修改数组</strong>, 界面不会自动更新。</li><li>通过 Vue.set()方法或者 <code>this.$set()</code>方法修改，解决问题</li><li>通过 Vue.delete()或者 <code>this.$delete()</code>方法删除，解决问题</li><li>使用数组的 splice 方法解决</li></ul></li></ul><h3 id="vue3-0-的响应式" tabindex="-1"><a class="header-anchor" href="#vue3-0-的响应式" aria-hidden="true">#</a> Vue3.0 的响应式</h3>`,36),v=n("p",null,"实现原理:",-1),m=n("li",null,[n("p",null,[s("通过 Proxy（代理）: "),n("strong",null,"拦截对象中任意属性的变化"),s(", 包括：属性值的读写、属性的添加、属性的删除等。")])],-1),g=n("li",null,[n("p",null,"通过 Reflect（反射）: 对源对象的属性进行操作。")],-1),h=n("p",null,"MDN 文档中描述的 Proxy 与 Reflect：",-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"},y=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 拦截读取属性值</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 拦截设置属性值或添加新属性</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 拦截删除属性</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

proxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=e('<h2 id="reactive-对比-ref" tabindex="-1"><a class="header-anchor" href="#reactive-对比-ref" aria-hidden="true">#</a> reactive 对比 ref</h2><p>从定义数据角度对比：</p><ul><li>ref 用来定义：<strong>基本类型数据</strong>。</li><li>reactive 用来定义：<strong>对象（或数组）类型数据</strong>。</li><li>备注：ref 也可以用来<strong>定义对象（或数组）类型数据</strong>, 它内部会自动通过<code>reactive</code>转为<strong>代理对象</strong>。</li></ul><p>从原理角度对比：</p><ul><li>ref 通过<code>Object.defineProperty()</code>的<code>get</code>与<code>set</code>来实现响应式（数据劫持）。</li><li>reactive 通过使用<strong>Proxy</strong>来实现响应式（数据劫持）, 并通过<strong>Reflect</strong>操作<strong>源对象</strong>内部的数据。</li></ul><p>从使用角度对比：</p><ul><li>ref 定义的数据：操作数据<strong>需要</strong><code>.value</code>，读取数据时模板中直接读取<strong>不需要</strong><code>.value</code>。</li><li>reactive 定义的数据：操作数据与读取数据：<strong>均不需要</strong><code>.value</code>。</li></ul><h2 id="setup-的两个注意点" tabindex="-1"><a class="header-anchor" href="#setup-的两个注意点" aria-hidden="true">#</a> setup 的两个注意点</h2><ul><li><p>setup 执行的时机</p><ul><li>在 beforeCreate 之前执行一次，this 是 undefined。</li></ul></li><li><p>setup 的参数</p><ul><li>props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。</li><li>context：上下文对象 <ul><li>attrs: 值为对象，包含：组件外部传递过来，但<strong>没有在 props 配置中声明的属性</strong>, 相当于 <code>this.$attrs</code>。</li><li>slots: 收到的插槽内容, 相当于 <code>this.$slots</code>。</li><li>emit: 分发自定义事件的函数, 相当于 <code>this.$emit</code>。</li></ul></li></ul></li></ul>',9);function _(j,q){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,r,n("p",null,[s("官方文档: "),n("a",d,[s("https://v3.cn.vuejs.org/guide/composition-api-introduction.html"),t(a)])]),k,n("ul",null,[n("li",null,[v,n("ul",null,[m,g,n("li",null,[h,n("ul",null,[n("li",null,[n("p",null,[s("Proxy："),n("a",b,[s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"),t(a)])])]),n("li",null,[n("p",null,[s("Reflect："),n("a",f,[s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"),t(a)])]),y])])])])])]),x])}const w=p(l,[["render",_],["__file","03_vue3_setup.html.vue"]]);export{w as default};
