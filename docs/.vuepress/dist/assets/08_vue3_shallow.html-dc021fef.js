import{_ as s,o as n,c as a,f as t}from"./app-66b3a2f7.js";const p={},o=t(`<h1 id="shallowreactive-与-shallowref" tabindex="-1"><a class="header-anchor" href="#shallowreactive-与-shallowref" aria-hidden="true">#</a> shallowReactive 与 shallowRef</h1><p>shallow：浅的</p><ul><li><p>shallowReactive：只处理对象最外层属性的响应式（浅响应式）。</p></li><li><p>shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。</p></li><li><p>什么时候使用?</p><ul><li>如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。</li><li>如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。</li></ul></li></ul><p>shallowReactive：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>h4<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>person<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>姓名：<span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>年龄：<span class="token punctuation">{</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>薪资：<span class="token punctuation">{</span><span class="token punctuation">{</span>job<span class="token punctuation">.</span>j1<span class="token punctuation">.</span>salary<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token constant">K</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;name+=&#39;~&#39;&quot;</span><span class="token operator">&gt;</span>修改姓名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;age++&quot;</span><span class="token operator">&gt;</span>增长年龄<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;job.j1.salary++&quot;</span><span class="token operator">&gt;</span>涨薪<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//只考虑第一层数据的响应式</span>
    <span class="token comment">// let person = reactive({</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>shallowRef：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>h4<span class="token operator">&gt;</span>当前的x<span class="token punctuation">.</span>y值是：<span class="token punctuation">{</span><span class="token punctuation">{</span>x<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;x={y:888}&quot;</span><span class="token operator">&gt;</span>点我替换x<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token comment">//可以替换</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;x.y++&quot;</span><span class="token operator">&gt;</span>点我x<span class="token punctuation">.</span>y<span class="token operator">++</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token comment">//不能监测x.y的改变</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  x
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[o];function l(c,r){return n(),a("div",null,e)}const u=s(p,[["render",l],["__file","08_vue3_shallow.html.vue"]]);export{u as default};
