import{_ as l,o as e,c as t,f as a}from"./app-66b3a2f7.js";const i={},h=a('<h1 id="编码和-html-规范" tabindex="-1"><a class="header-anchor" href="#编码和-html-规范" aria-hidden="true">#</a> 编码和 HTML 规范</h1><h2 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h2><p>在开发中使用 UTF-8 都没有问题，因为 UTF-8 是国际通用字库，里面涵盖了所有的人类语言。</p><ul><li>用 meta 标签声明当前 html 文档的字库时，一定要和保存的文件编码类型一样，否则就会乱码。</li><li>UTF-8 比 gb2312 占用内存大，如果只是单纯的中文网页，极度追求网页的显示速度，要用 gb2312 。国内的腾讯网、网易、搜狐都是使用的 gb2312 。</li><li>浏览器打开网页，右键查看网页源代码，找到 meta 标签的 charset 属性就可以查看当前网页的编码方式。</li><li>打开网页时，html 网页会缓存到我们的临时文件夹，所以可以查看网页源代码。</li></ul><h2 id="html-规范" tabindex="-1"><a class="header-anchor" href="#html-规范" aria-hidden="true">#</a> HTML 规范</h2><ul><li>html 不区分大小写，但 html 的标签名、类名、标签属性、大部分属性值建议小写。</li><li>html 页面文件的后缀名是 .html 或者 .htm ，dos 系统不支持后缀名超过 3 个字符。</li><li>html 对换行和 tab 不敏感，缩进格式化只是为了代码易读。</li><li>html 文字间多个空格、换行、tab 都会被解析为一个空格，如需要多个空格换行则需要实体（转义字符）来实现。</li><li>标签要严格封闭。</li></ul>',6),r=[h];function c(d,n){return e(),t("div",null,r)}const s=l(i,[["render",c],["__file","04_code.html.vue"]]);export{s as default};
