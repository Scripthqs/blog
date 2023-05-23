import{_ as t,r as o,o as d,c as l,d as e,e as n,b as r,f as a}from"./app-66b3a2f7.js";const i={},c=a('<h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1><h2 id="_1-生命周期简介" tabindex="-1"><a class="header-anchor" href="#_1-生命周期简介" aria-hidden="true">#</a> 1 生命周期简介</h2><ul><li><p>生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。</p></li><li><p>生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数</p></li></ul><h2 id="_2-应用生命周期函数" tabindex="-1"><a class="header-anchor" href="#_2-应用生命周期函数" aria-hidden="true">#</a> 2 应用生命周期函数</h2><table><thead><tr><th>函数名</th><th>说明</th></tr></thead><tbody><tr><td>onLaunch</td><td>当<code>uni-app</code> 初始化完成时触发（全局只触发一次）</td></tr><tr><td>onShow</td><td>当 <code>uni-app</code> 启动，或从后台进入前台显示</td></tr><tr><td>onHide</td><td>当 <code>uni-app</code> 从前台进入后台</td></tr><tr><td>onError</td><td>当 <code>uni-app</code> 报错时触发</td></tr></tbody></table><h2 id="_3-页面生命周期函数" tabindex="-1"><a class="header-anchor" href="#_3-页面生命周期函数" aria-hidden="true">#</a> 3 页面生命周期函数</h2>',6),u=e("thead",null,[e("tr",null,[e("th",null,"函数名"),e("th",null,"说明")])],-1),h=e("td",null,"onLoad",-1),p={href:"https://uniapp.dcloud.io/api/router?id=navigateto",target:"_blank",rel:"noopener noreferrer"},v=e("tr",null,[e("td",null,"onShow"),e("td",null,"监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面")],-1),b=e("tr",null,[e("td",null,"onReady"),e("td",null,"监听页面初次渲染完成。")],-1),m=e("tr",null,[e("td",null,"onHide"),e("td",null,"监听页面隐藏")],-1),f=e("tr",null,[e("td",null,"onUnload"),e("td",null,"监听页面卸载")],-1),_=a(`<ul><li>tabBar 中的页面自带缓存 keep-alive，再次切换只会触发 onShow，不会触发 onLoad。</li></ul><h2 id="_4-下拉刷新" tabindex="-1"><a class="header-anchor" href="#_4-下拉刷新" aria-hidden="true">#</a> 4 下拉刷新</h2><p>在 uni-app 中有两种方式开启下拉刷新：监听 <code>onPullDownRefresh</code> 函数和 调用 <code>uni.startPullDownRefresh()</code> 方法</p><h3 id="enablepulldownrefresh" tabindex="-1"><a class="header-anchor" href="#enablepulldownrefresh" aria-hidden="true">#</a> enablePullDownRefresh</h3><p>首先需要开启下拉刷新功能，需要在 <code>pages.json</code> 里，找到的当前页面的 pages 节点，并在 <code>style</code> 选项中开启 <code>enablePullDownRefresh</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token punctuation">{</span>
   <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/contact/contact&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;style&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
         <span class="token property">&quot;enablePullDownRefresh&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
       <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onpulldownrefresh" tabindex="-1"><a class="header-anchor" href="#onpulldownrefresh" aria-hidden="true">#</a> onPullDownRefresh(){}</h3><p>通过 <code>onPullDownRefresh</code> 处理函数（和onLoad等生命周期函数同级），监听该页面用户下拉刷新事件。当处理完数据刷新后，<code>uni.stopPullDownRefresh</code> 可以停止当前页面的下拉刷新。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  onPullDownRefresh(){
   console.log(&#39;触发下拉刷新了&#39;)
   this.list.push(&#39;vue&#39;)
   uni.stopPullDownRefresh()
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-startpulldownrefresh" tabindex="-1"><a class="header-anchor" href="#uni-startpulldownrefresh" aria-hidden="true">#</a> uni.startPullDownRefresh()</h3><p>通过调用 <code>uni.startPullDownRefresh()</code> 方法<strong>开始</strong>当前页面下拉刷新</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  methods:{
   startPull () {
      uni.startPullDownRefresh()
    }
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-stoppulldownrefresh" tabindex="-1"><a class="header-anchor" href="#uni-stoppulldownrefresh" aria-hidden="true">#</a> uni.stopPullDownRefresh()</h3><p>通过调用 <code>uni.stopPullDownRefresh()</code>方法<strong>停止</strong>当前页面下拉刷新。</p><h2 id="_5-上拉加载" tabindex="-1"><a class="header-anchor" href="#_5-上拉加载" aria-hidden="true">#</a> 5 上拉加载</h2><h3 id="onreachbottomdistance" tabindex="-1"><a class="header-anchor" href="#onreachbottomdistance" aria-hidden="true">#</a> onReachBottomDistance</h3><p>首先需要开启上拉加载功能，通过在 pages.json 文件中找到当前页面的 pages 节点下 style 中配置 <code>onReachBottomDistance</code> 可以设置距离底部开启加载的距离，默认为 50px。</p><h3 id="onreachbottom" tabindex="-1"><a class="header-anchor" href="#onreachbottom" aria-hidden="true">#</a> onReachBottom</h3><p>通过 <code>onReachBottom</code> 监听到触底的行为</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  onReachBottom(){
   console.log(&#39;触发上拉加载了&#39;)
   this.list.push(&#39;node&#39;)
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function g(w,x){const s=o("ExternalLinkIcon");return d(),l("div",null,[c,e("table",null,[u,e("tbody",null,[e("tr",null,[h,e("td",null,[n("监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考"),e("a",p,[n("示例"),r(s)])])]),v,b,m,f])]),_])}const k=t(i,[["render",g],["__file","07uni.html.vue"]]);export{k as default};
