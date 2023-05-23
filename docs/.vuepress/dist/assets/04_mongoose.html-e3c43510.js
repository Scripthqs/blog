import{_ as e,r as o,o as c,c as l,d as n,e as s,b as p,f as t}from"./app-66b3a2f7.js";const i={},u=n("h1",{id:"mongoose",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mongoose","aria-hidden":"true"},"#"),s(" Mongoose")],-1),r=n("h2",{id:"mongoose-介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mongoose-介绍","aria-hidden":"true"},"#"),s(" Mongoose 介绍")],-1),k={href:"http://www.mongoosejs.net/docs/index.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>mongoose 是 Node 环境下异步操作 mongodb 数据库的扩展，仅限于 Node 环境下使用。</p><p>在实际开发中，通过命令管理 mongodb 麻烦，通过程序管理。</p><p>使用 mongoose 操作 mongodb 数据步骤：</p><ol><li>使用 npm 安装 mongoose</li><li>导入模块</li><li>然后使用</li><li>连接 mongodb 数据库</li><li>定义 Schema <ul><li>schema：简单的来讲就是规定了表结构的操作。比如：要求表中有 username 字段，该字段接着要求必填，可以继续要求该字段类型为 string，还可以要求这个字段长度为 10（相当于 mysql 建表时候的 sql 语句对字段的规定）</li></ul></li><li>定义 model <ul><li><strong>mvc：开发模式</strong>，要求将一个项目拆分成三个大的主体部分（m 模型、v 视图、c 控制器），<strong>==其中 m 负责业务逻辑与数据库的交互部分==、v 负责展示给用户页面、c 控制器负责请求与响应的整体调度</strong>。</li></ul></li><li>使用 model 进行数据增删改查操作</li></ol><h2 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h2><p>使用 npm 安装 mongoose 模块，并在使用模块中导入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装mongoose</span>
<span class="token function">npm</span> i <span class="token parameter variable">-S</span> mongoose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入模块</span>
<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 连接数据库 返回promise对象</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/数据库名&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 库必须要先存在</span>

<span class="token comment">// connect方法参2在新版本需添加，否则会有警告提示</span>
<span class="token comment">// useNewUrlParser：当前URL字符串分析器已弃用，将在将来的版本中删除。要使用新的解析器，请将选项{usenewurlparser:true}传递给mongoclient.connect。</span>
<span class="token comment">// useUnifiedTopology：当前服务器发现和监视引擎已弃用，将在将来的版本中删除。要使用新的服务器发现和监视引擎，请将选项{useUnifiedTopology:true}传递给mongoclient构造函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义-schema" tabindex="-1"><a class="header-anchor" href="#定义-schema" aria-hidden="true">#</a> 定义 Schema</h2><p>Schema 是 mongoose 中会用到的一种数据模式，可以理解为数据表结构的定义；每个 schema 会映射到 mongodb 中的一个集合，它不具备操作数据库的能力。Schema 中定义数据校验，默认值，字段名，字段类型等特性。</p><p>作用：</p><ul><li>建表（也就是说，后期建表不再通过 mongoDB 的命令行的形式产生了，而是通过 JavaScript 代码实现）</li></ul>`,12),m={href:"http://www.mongoosejs.net/docs/guide.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建用户集合规则</span>
<span class="token keyword">const</span> UserSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 字段名/域名称</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指字域类型</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token comment">// 必填字段</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 字段最小长度  minlength 用于字符串类型</span>
    <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token comment">// 默认值</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">// 字段最小值 min用于数字类型</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pwd</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token comment">// 定义此字段为 字符串数组类型</span>
  <span class="token literal-property property">hobbies</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Schema 定义好后，后期增删改查时，如果对应的表不存在，则其会自动按照 Schema 的约束进行建表，如果表存在了则不重新建立。</p><h2 id="定义-model" tabindex="-1"><a class="header-anchor" href="#定义-model" aria-hidden="true">#</a> 定义 model</h2><p>model 是由 schema 生成的模型，模型是最终用来进行数据增删改查操作使用的，可以对数据库的操作：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 参数1：model名称</span>
<span class="token comment">// 参数2：schema名称</span>
<span class="token comment">// 参数3：操作的数据集合（表名）   如果参数3没有填写则以 参1的复数形式为操作数据集合名称</span>
<span class="token keyword">const</span> Model <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;User&quot;</span><span class="token punctuation">,</span> UserSchema<span class="token punctuation">,</span> <span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 模型curd相关方法</span>
Model<span class="token punctuation">.</span><span class="token function">insertMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Model<span class="token punctuation">.</span><span class="token function">deleteMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 条件 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Model<span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 条件 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Model<span class="token punctuation">.</span><span class="token function">countDocuments</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 条件 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Model<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 条件 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">可选字段返回</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">/</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">skip</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Model<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 条件 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">可选字段返回</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">/</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Model<span class="token punctuation">.</span><span class="token function">updateMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 条件 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">$set</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> value <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Model<span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 条件 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">$set</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> value <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-express-中使用-mongoose" tabindex="-1"><a class="header-anchor" href="#在-express-中使用-mongoose" aria-hidden="true">#</a> 在 express 中使用 mongoose</h2><p>需求：通过 postman 发送 post 数据给 express 服务器，能够对 mongoDB 中的<code>shop</code>库中的<code>members</code>表进行插入操作。</p><ul><li>创建库 <ul><li><code>use shop</code></li></ul></li><li>创建 express 服务器，接受 post 传参</li><li>连接数据库（mongoDB）</li><li>定义 schema（创建表<code>members</code>）</li><li>定义模型实现数据的添加操作</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// - 创建express服务器，接受post传参</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;body-parser&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用中间件解析post数据</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1. 引入mongoose</span>
<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// - 连接数据库（mongoDB）</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/shop&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// - 定义schema（创建表members）</span>
<span class="token keyword">const</span> members_schema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 后续如果需要更多的字段，接着写即可</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// - 定义模型实现数据的添加操作</span>
<span class="token keyword">const</span> Model <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;Member&quot;</span><span class="token punctuation">,</span> members_schema<span class="token punctuation">,</span> <span class="token string">&quot;members&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(req.body);</span>
  <span class="token comment">// 写入数据到mongoDB</span>
  <span class="token comment">// Model.insertMany(req.body)</span>
  <span class="token comment">// 查询</span>
  Model<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ret</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 象征性输出</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9527</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server is running at http://127.0.0.1:9527&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function b(g,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[s("网址："),n("a",k,[s("http://www.mongoosejs.net/docs/index.html"),p(a)])]),d,n("p",null,[s("在定义 schema 的是有使用到相关约束规则，可以查看："),n("a",m,[s("http://www.mongoosejs.net/docs/guide.html"),p(a)])]),v])}const f=e(i,[["render",b],["__file","04_mongoose.html.vue"]]);export{f as default};
