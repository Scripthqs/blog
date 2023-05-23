import{_ as n,o as s,c as a,f as t}from"./app-66b3a2f7.js";const p={},o=t(`<h1 id="函数默认参数值" tabindex="-1"><a class="header-anchor" href="#函数默认参数值" aria-hidden="true">#</a> 函数默认参数值</h1><p>ES6 允许给函数参数赋值初始值</p><ol><li>形参初始值，具有默认值的参数，一般位置放在最后</li><li>可以与解构赋值结合使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">10</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> host<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> port <span class="token operator">=</span> <span class="token number">8888</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认参数处理" tabindex="-1"><a class="header-anchor" href="#默认参数处理" aria-hidden="true">#</a> 默认参数处理</h2><p>默认参数是不会对 null 进行处理的，使用<code>??</code>判断</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 注意: 默认参数是不会对null进行处理的</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>arg1 <span class="token operator">=</span> <span class="token string">&quot;我是默认值&quot;</span><span class="token punctuation">,</span> arg2 <span class="token operator">=</span> <span class="token string">&quot;我也是默认值&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.两种写法不严谨</span>
  <span class="token comment">// 默认值写法一:</span>
  <span class="token comment">// arg1 = arg1 ? arg1: &quot;我是默认值&quot;</span>

  <span class="token comment">// 默认值写法二:</span>
  <span class="token comment">// arg1 = arg1 || &quot;我是默认值&quot;</span>

  <span class="token comment">// 2.严谨的写法</span>
  <span class="token comment">// 三元运算符</span>
  <span class="token comment">// arg1 = (arg1 === undefined || arg1 === null) ? &quot;我是默认值&quot;: arg1</span>

  <span class="token comment">// ES6之后新增语法: ??</span>
  <span class="token comment">// arg1 = arg1 ?? &quot;我是默认值&quot;</span>

  <span class="token comment">// 3.简便的写法: 默认参数</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.注意一: 有默认参数的形参尽量写到后面</span>
<span class="token comment">// 2.有默认参数的形参, 是不会计算在length之内(并且后面所有的参数都不会计算在length之内)</span>
<span class="token comment">// 3.剩余参数也是放到后面(默认参数放到剩余参数的前面)</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>age<span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cba&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.注意一: 有默认参数的形参尽量写到后面</span>
<span class="token comment">// 2.有默认参数的形参, 是不会计算在length之内(并且后面所有的参数都不会计算在length之内)</span>
<span class="token comment">// 3.剩余参数也是放到后面(默认参数放到剩余参数的前面)</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>age<span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cba&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[o];function e(l,i){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","08_params.html.vue"]]);export{k as default};
