import{_ as a,r as e,o as t,c as i,d as n,e as p,b as c,f as o}from"./app-66b3a2f7.js";const l={},r=o(`<h1 id="css3-动画" tabindex="-1"><a class="header-anchor" href="#css3-动画" aria-hidden="true">#</a> CSS3 动画</h1><h2 id="动画常用属性" tabindex="-1"><a class="header-anchor" href="#动画常用属性" aria-hidden="true">#</a> 动画常用属性</h2><ol><li>translate</li><li>rotate</li><li>translate</li><li>scale</li><li>perspective 透视</li><li>transform-style 创建 3D 空间</li><li>backface-visibily 元素背向用户时是否可见</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token comment">/* background-image: url(../test.png); */</span>
  <span class="token comment">/* 在父元素中添加 transform-style来启用3D空间 */</span>
  <span class="token property">transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>
  <span class="token comment">/* 在父元素添加透视效果 */</span>
  <span class="token property">perspective</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>-33.5deg<span class="token punctuation">)</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span> <span class="token function">scaleZ</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 元素背向是否可见 */</span>
  <span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token comment">/* 帧动画 */</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> loop 6s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> loop</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>-360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-动画问题" tabindex="-1"><a class="header-anchor" href="#css-动画问题" aria-hidden="true">#</a> CSS 动画问题</h2><p>根据浏览器渲染原理，当元素的位置、大小等发生变化时，会造成回流。</p><p>默认情况下，标准流中的内容都是被绘制在同一个图层（Layer）中。对于 CSS 动画，浏览器有一种优化手段，在绘制的过程，会将布局后的元素绘制到多个合成图层中。</p><p>不止动画，CSS3 中还很很多特殊的属性，会创建一个新的合成层（ CompositingLayer ），并且新的图层可以利用 GPU 来加速绘制，每个合成层都是单独渲染的。以下属性可以生成新的合成层。</p><ul><li>3D transforms</li><li>opacity 透明度小于 1</li><li>position 定位</li><li>animation 或 transition 设置了 opacity、transform；</li><li>video、canvas、iframe</li><li>will-change：一个实验性的属性，提前告诉浏览器元素可能发生哪些变化</li></ul>`,9),u={href:"https://scripthqs.gitee.io/web/js/JsAdvanced/02_browser.html#composite-%E5%90%88%E6%88%90-web-%E4%BC%98%E5%8C%259",target:"_blank",rel:"noopener noreferrer"},d=n("ul",null,[n("li")],-1);function k(m,v){const s=e("ExternalLinkIcon");return t(),i("div",null,[r,n("p",null,[n("a",u,[p("合成层"),c(s)])]),d])}const f=a(l,[["render",k],["__file","02_ccs3.html.vue"]]);export{f as default};
