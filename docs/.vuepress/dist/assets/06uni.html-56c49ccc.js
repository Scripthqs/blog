import{_ as s,o as t,c as e,d as a,e as p,t as l,f as n}from"./app-66b3a2f7.js";const i={},c=n(`<h1 id="数据绑定和事件绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定和事件绑定" aria-hidden="true">#</a> 数据绑定和事件绑定</h1><h2 id="_1-data" tabindex="-1"><a class="header-anchor" href="#_1-data" aria-hidden="true">#</a> 1 data</h2><p>在页面中需要定义数据，和 vue 一摸一样，直接在 data 中定义数据即可</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>export default {
  data () {
    return {
      msg: &#39;hello-uni&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o={id:"_2",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#_2","aria-hidden":"true"},"#",-1),d=n(`<p>依然支持插值表达式</p><ul><li><p>利用插值表达式渲染基本数据</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在插值表达式中使用三元运算</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{ flag ? &#39;我是真的&#39;:&#39;我是假的&#39; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>基本运算</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{ 1+1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_3-v-bind" tabindex="-1"><a class="header-anchor" href="#_3-v-bind" aria-hidden="true">#</a> 3 v-bind</h2><p>v-bind 动态绑定属性。</p><p>利用v-bind进行渲染</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以缩写成:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-v-for" tabindex="-1"><a class="header-anchor" href="#_4-v-for" aria-hidden="true">#</a> 4 v-for</h2><p>v-for 进行循环，同样需要写 key。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,i) in arr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>名字：{{item.name}}---年龄：{{item.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-v-on" tabindex="-1"><a class="header-anchor" href="#_5-v-on" aria-hidden="true">#</a> 5 v-on</h2><p>事件绑定和 vue 中是一样的，通过 v-on 进行事件的绑定，也可以简写为 @，事件函数定义在 methods 中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;funClick&quot;</span><span class="token operator">&gt;</span>点击触发事件<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>事件传参方式一样，默认如果没有传递参数，事件函数第一个形参为事件对象。</p></li><li><p>如果给事件函数传递参数了，则对应的事件函数形参接收的则是传递过来的数据</p></li><li><p>如果获取事件对象也想传递参数，使用<code>$event</code></p></li></ul>`,15);function r(v,g){return t(),e("div",null,[c,a("h2",o,[u,p(" 2 "+l(),1)]),d])}const m=s(i,[["render",r],["__file","06uni.html.vue"]]);export{m as default};
