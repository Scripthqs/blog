import{_ as n,o as s,c as a,f as t}from"./app-66b3a2f7.js";const p={},o=t(`<h2 id="安装-已经弃用" tabindex="-1"><a class="header-anchor" href="#安装-已经弃用" aria-hidden="true">#</a> 安装（已经弃用）</h2><p>安装 hqs-ui 组件库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i hqs-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h2><p>1.添加 CSS 样式</p><p>使用本框架前，请在 css 中开启 border-box</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*,
*::before,
*::after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.引用</p><p>-在 vue 项目中全局引用，在 main.js 中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> HqsUI <span class="token keyword">from</span> <span class="token string">&quot;hqs-ui&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>HqsUI<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 vue 项目中按需引入</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Button<span class="token punctuation">,</span>
  ButtonGroup<span class="token punctuation">,</span>
  Row<span class="token punctuation">,</span>
  Col<span class="token punctuation">,</span>
  Header<span class="token punctuation">,</span>
  Footer<span class="token punctuation">,</span>
  Content<span class="token punctuation">,</span>
  Sider<span class="token punctuation">,</span>
  Layout<span class="token punctuation">,</span>
  Icon<span class="token punctuation">,</span>
  Input<span class="token punctuation">,</span>
  Toast<span class="token punctuation">,</span>
  plugin<span class="token punctuation">,</span>
  Tabs<span class="token punctuation">,</span>
  TabsHead<span class="token punctuation">,</span>
  TabsBody<span class="token punctuation">,</span>
  TabsItem<span class="token punctuation">,</span>
  Collapse<span class="token punctuation">,</span>
  CollapseItem<span class="token punctuation">,</span>
  Popover<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;hqs-ui&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;hqs-ui/dist/index.css&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-button&quot;</span><span class="token punctuation">,</span> Button<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-icon&quot;</span><span class="token punctuation">,</span> Icon<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-button-group&quot;</span><span class="token punctuation">,</span> ButtonGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-input&quot;</span><span class="token punctuation">,</span> Input<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-row&quot;</span><span class="token punctuation">,</span> Row<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-col&quot;</span><span class="token punctuation">,</span> Col<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-layout&quot;</span><span class="token punctuation">,</span> Layout<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-header&quot;</span><span class="token punctuation">,</span> Header<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-footer&quot;</span><span class="token punctuation">,</span> Footer<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-sider&quot;</span><span class="token punctuation">,</span> Sider<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-content&quot;</span><span class="token punctuation">,</span> Content<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-toast&quot;</span><span class="token punctuation">,</span> Toast<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-tabs&quot;</span><span class="token punctuation">,</span> Tabs<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-tabs-head&quot;</span><span class="token punctuation">,</span> TabsHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-tabs-body&quot;</span><span class="token punctuation">,</span> TabsBody<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-tabs-item&quot;</span><span class="token punctuation">,</span> TabsItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-tabs-pane&quot;</span><span class="token punctuation">,</span> TabsPane<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-popover&quot;</span><span class="token punctuation">,</span> Popover<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-collapse&quot;</span><span class="token punctuation">,</span> Collapse<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;h-collapse-item&quot;</span><span class="token punctuation">,</span> CollapseItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>模块化引用</li></ul><p>在使用的组件里引用,下面以 Button 为例</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import {Button} from &#39;hqs-ui&#39; export default { components: { &#39;h-button&#39;: Button, }, }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>组件最外层的元素会自动添加 <code>h-*</code>的类名，你也可以在外层添加自己的容器元素包裹组件，并添加自己的类名，覆盖默认样式</p><p>3.点击该项目上方链接，获取使用方法</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><p>通过如下步骤可以直接运行项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/scripthqs/hqs-ui.git
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行入口为 packages/index.js 文件，该文件中是各个组件的使用代码，可以在此引用全部组件，自由修改测试</p>`,21),e=[o];function c(u,i){return s(),a("div",null,e)}const d=n(p,[["render",c],["__file","01_install.html.vue"]]);export{d as default};
