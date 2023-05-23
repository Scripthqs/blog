import{_ as n,o as s,c as a,f as t}from"./app-66b3a2f7.js";const p={},e=t(`<h1 id="同源策略和跨域" tabindex="-1"><a class="header-anchor" href="#同源策略和跨域" aria-hidden="true">#</a> 同源策略和跨域</h1><h2 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h2><ul><li>同源策略(Same-Origin Policy)是浏览器的一种安全策略</li><li>同源： 协议、域名、端口号必须完全相同</li><li>跨域： 违背同源策略就是<strong>跨域</strong></li></ul><h2 id="url-的组成" tabindex="-1"><a class="header-anchor" href="#url-的组成" aria-hidden="true">#</a> URL 的组成</h2><ul><li>协议://主机:端口/路径?查询</li><li>scheme://host:port/path?query#fragment</li></ul><p>HTTP 协议，超文本传输协议，详细规定了浏览器和万维网服务器之间相互通信的规则。协议就是约定，规定。</p><h2 id="如何解决跨域" tabindex="-1"><a class="header-anchor" href="#如何解决跨域" aria-hidden="true">#</a> 如何解决跨域</h2><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><p>JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持 get 请求。</p><h4 id="jsonp-原理" tabindex="-1"><a class="header-anchor" href="#jsonp-原理" aria-hidden="true">#</a> JSONP 原理</h4><p>在网页有一些标签天生具有跨域能力，比如：img link iframe script。 JSONP 就是利用 script 标签的跨域能力来发送请求的。</p><h4 id="jsonp-的使用" tabindex="-1"><a class="header-anchor" href="#jsonp-的使用" aria-hidden="true">#</a> JSONP 的使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 客户端代码</span>
<span class="token keyword">function</span> <span class="token function">handleData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.动态的创建一个 script 标签</span>
<span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>、

<span class="token comment">// 2.设置 script 的 src，设置回调函数</span>
script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;http://example.com/api?callback=handleData&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// function abc(data) {</span>
<span class="token comment">//   alert(data.name);</span>
<span class="token comment">// }</span>

<span class="token comment">// 3.将 script 添加到 body 中</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4.服务器中路由的处理</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/testAJAX&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;收到请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> callback <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>callback<span class="token punctuation">;</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>callback <span class="token operator">+</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>CORS（Cross-Origin Resource Sharing），跨域资源共享。</p><p>CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 请求。</p><p>跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源</p><h4 id="cors-原理" tabindex="-1"><a class="header-anchor" href="#cors-原理" aria-hidden="true">#</a> CORS 原理</h4><p>CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。这个才是真正的解决跨域问题。但需要后端完成</p><h4 id="cors-的使用" tabindex="-1"><a class="header-anchor" href="#cors-的使用" aria-hidden="true">#</a> CORS 的使用</h4><p>主要是服务器端的设置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/testAJAX&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//通过res 来设置响应头，来允许跨域请求</span>
  <span class="token comment">//res.set(&quot;Access-Control-Allow-Origin&quot;,&quot;http://127.0.0.1:3000&quot;);</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;testAJAX 返回的响应&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 客户端代码</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://example.com/api&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Origin</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 请求源</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 服务端需要在响应头中添加Access-Control-Allow-Origin字段，指定允许哪些源访问该资源：</span>
<span class="token comment">// 服务端代码</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置代理服务器" tabindex="-1"><a class="header-anchor" href="#配置代理服务器" aria-hidden="true">#</a> 配置代理服务器</h3><ul><li>可以通过 nginx 开启代理服务器，但是需要学习后端等很多知识。</li><li>通过 vue-cli 的 api 的<code>module.exports = {devServer: {proxy: &#39;http://localhost:4000&#39;}}</code></li></ul><h4 id="代理服务器原理" tabindex="-1"><a class="header-anchor" href="#代理服务器原理" aria-hidden="true">#</a> 代理服务器原理</h4><p>流程：</p><ol><li>本地浏览器地址(localhost:8080)</li><li>向代理服务器发送请求(localhost:8080)</li><li>代理服务器向服务器发送请求(localhost:5000)</li></ol><p>注意：浏览器和服务器之间通信时 ajax，服务器和服务器之间通信是 http 请求，不用 ajax。</p><h4 id="vuecli-中配置代理服务器" tabindex="-1"><a class="header-anchor" href="#vuecli-中配置代理服务器" aria-hidden="true">#</a> vuecli 中配置代理服务器</h4><p>使用 vuecli 创建的项目中，配置 vue.config.js 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//方式1.开启代理服务器，写真正访问服务器的端口</span>
  <span class="token comment">// devServer: {</span>
  <span class="token comment">//   proxy: &#39;http://localhost:5000&#39;</span>
  <span class="token comment">// }</span>
  <span class="token comment">//这种方法只能保证本身服务器没有了走代理，不够灵活，而且只能配置一个服务器</span>

  <span class="token comment">//方式2.不能同时用</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//想走代理，就在请求前面加/api</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:5000&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//保证代理服务器转发到真正服务器的地址不带/api</span>
        <span class="token comment">// ws: true,//用于支持websocket</span>
        <span class="token comment">// changeOrigin: true//用于控制请求头中的host值</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;/test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//想走代理，就在请求前面加/test</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:5001&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;^/test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//保证代理服务器转发到真正服务器的地址不带/test</span>
        <span class="token comment">// ws: true,//用于支持websocket</span>
        <span class="token comment">// changeOrigin: true//用于控制请求头中的host值</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;/abc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//想走代理，就在请求前面加/abc</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;https://autumnfish.cn/&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;^/abc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//保证代理服务器转发到真正服务器的地址不带/api</span>
        <span class="token comment">// ws: true,//用于支持websocket</span>
        <span class="token comment">// changeOrigin: true//用于控制请求头中的host值</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","07_CORS.html.vue"]]);export{r as default};
