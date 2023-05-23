import{_ as n,o as s,c as a,f as e}from"./app-66b3a2f7.js";const i={},l=e(`<h1 id="文档流" tabindex="-1"><a class="header-anchor" href="#文档流" aria-hidden="true">#</a> 文档流</h1><h2 id="文档流简介" tabindex="-1"><a class="header-anchor" href="#文档流简介" aria-hidden="true">#</a> 文档流简介</h2><p>文档流（normal flow）：网页是一个多层的结构，一层叠着一层，这些层中<strong>最底下一层称为文档流</strong>，通过 CSS 可以分别为每一层来设置样式。</p><h2 id="元素两种状态" tabindex="-1"><a class="header-anchor" href="#元素两种状态" aria-hidden="true">#</a> 元素两种状态</h2><p>传统网页提供了三种布局方式：</p><ul><li>文档流（标准流）</li><li>浮动</li><li>定位</li></ul><p>元素两种状态：</p><ul><li>不在文档流中（脱离文档流或者脱标）</li><li>在文档流中</li></ul><p>元素在文档流中和不在文档流中的特点不一样，<strong>文档流是最基本的布局方式</strong>。</p><h2 id="元素分类" tabindex="-1"><a class="header-anchor" href="#元素分类" aria-hidden="true">#</a> 元素分类</h2><p>css 将元素分为块级元素（block）、行内元素（inline）、行内块级元素（inline-block）</p><h3 id="块级元素" tabindex="-1"><a class="header-anchor" href="#块级元素" aria-hidden="true">#</a> 块级元素</h3><p>css 中的常用块级元素有</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>div h1-h6 ul li p form dl ol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>块元素<strong>在文档流中</strong>的特点：</p><ul><li>块元素在页面中独占一行</li><li>块元素可以设置宽高</li><li>如果不设置宽度，那么宽度将默认变为父亲的 100%</li><li>默认高度被内容撑开</li><li>文字类元素（p 和 h1-h6）里面不能放块元素</li></ul><h3 id="行内元素" tabindex="-1"><a class="header-anchor" href="#行内元素" aria-hidden="true">#</a> 行内元素</h3><p>css 中常用的行内元素（内联元素）有</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>span a i <span class="token property">伪元素</span> <span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token property">after</span> <span class="token punctuation">:</span><span class="token punctuation">:</span>before
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>行内元素<strong>在文档流中</strong>的特点：</p><ul><li>行内元素不会独占一行，只占自身大小</li><li>不能设置宽高，设置会无效</li><li>默认的高度和宽度都是被内容撑开</li><li>行内元素之能包含文本和其他行内元素</li><li>a 里面不能放 a，但是可以放块级元素，此时，一般将 a 转换成块元素</li></ul><h3 id="行内块元素" tabindex="-1"><a class="header-anchor" href="#行内块元素" aria-hidden="true">#</a> 行内块元素</h3><p>在行内元素中有几个特殊的元素，有时把它们称为行内块元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>img input td
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时具有块元素和行内元素的一些特点：</p><ul><li>不会独占一行（行内元素特点）</li><li>默认的宽度和高度都是被内容撑开（行内元素特点）</li><li>可以设置宽度和高度（块元素特点）</li></ul><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h2><p>使用 display 属性可以对元素模式进行转换，可以通过<code>display</code>属性设置元素的类型。</p><ul><li><code>inline</code>：将块元素转化成行内元素。</li><li><code>block</code>：将行内元素转换成块元素。</li><li><code>inline-block</code>：既可以设置宽度和高度，又不会独占一行。但是还是要少使用。</li><li><code>table</code>：将元素设置成表格。</li><li><code>none</code>：元素不在页面中显示。</li></ul><p>例如想要增加超链接 a 的触发范围，可以设置为 block</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token comment">/*转换成块级元素*/</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">/*可以设置宽高*/</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span> <span class="token comment">/*转换成行内元素*/</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token comment">/*设置宽高无效*/</span>
<span class="token punctuation">}</span>
<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span> <span class="token comment">/*转换成行内块元素*/</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token comment">/*可以设置宽高*/</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span> <span class="token comment">/*将元素设置成表格*/</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/*元素不在页面中显示*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="visibility" tabindex="-1"><a class="header-anchor" href="#visibility" aria-hidden="true">#</a> visibility</h2><p>除了<code>display: none;</code>还可以通过<code>visibility</code>属性设置的显示状态：</p><ul><li><code>visible</code>:默认值，元素在页面中正常显示。</li><li><code>hidden</code>：元素在页面中隐藏，不显示但是依然占据页面的位置。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span> <span class="token comment">/*默认值，元素在页面中正常显示*/</span>
<span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/*元素在页面中隐藏，不显示但是依然占据页面的位置*/</span>
<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/*元素在页面中隐藏，不显示也不占据页面的位置*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脱离文档流" tabindex="-1"><a class="header-anchor" href="#脱离文档流" aria-hidden="true">#</a> 脱离文档流</h2><p>标准流里面的限制非常多，导致很多页面效果无法实现，就可以使用脱离文档流来解决。</p><p>脱离文档流后元素的特点</p><ul><li>不再区分块元素和行内元素</li><li>元素不再独占一行</li><li>元素的高度和宽度默认都被内容撑开</li><li>脱离文档流后，元素都可以设置高度和宽度</li></ul><p>脱离文档流后，<strong>元素就具有行内块元素的特点</strong></p><p>css 中一共有三种手段，使一个元素脱离标准文档流：</p><ol><li>浮动</li><li>绝对定位</li><li>固定定位</li></ol>`,42),p=[l];function c(t,o){return s(),a("div",null,p)}const r=n(i,[["render",c],["__file","10_normal_flow.html.vue"]]);export{r as default};
