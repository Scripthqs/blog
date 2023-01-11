(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{636:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"plugin-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-插件"}},[s._v("#")]),s._v(" Plugin 插件")]),s._v(" "),a("h2",{attrs:{id:"_1-plugin-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-plugin-简介"}},[s._v("#")]),s._v(" 1.plugin 简介")]),s._v(" "),a("p",[s._v("plugin 是插件的意思，通过安装和配置第三方的插件，"),a("strong",[s._v("可以拓展 webpack 的能力")]),s._v("，从而让 webpack 用起来更方便。比如打包优化，文件压缩等。")]),s._v(" "),a("p",[a("strong",[s._v("loader 是用于转换某些类型的模块，是一个转换器，plugin 是 webpack 本身的拓展，是一个拓展器。")])]),s._v(" "),a("p",[s._v("最常用的 webpack 插件有如下两个：")]),s._v(" "),a("p",[a("code",[s._v("webpack-dev-server")])]),s._v(" "),a("ul",[a("li",[s._v("类似于 node.js 阶段用到的 nodemon 工具")]),s._v(" "),a("li",[s._v("每当修改了源代码，webpack 会自动进行项目的打包和构建")])]),s._v(" "),a("p",[a("code",[s._v("html-webpack-plugin")])]),s._v(" "),a("ul",[a("li",[s._v("webpack 中的 HTML 插件（类似于一个模板引擎插件）")]),s._v(" "),a("li",[s._v("可以通过此插件自定制 index.html 页面的内")])]),s._v(" "),a("h2",{attrs:{id:"_2-webpack-dev-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack-dev-server"}},[s._v("#")]),s._v(" 2.webpack-dev-server")]),s._v(" "),a("p",[a("code",[s._v("webpack-dev-server")]),s._v(" 可以让 webpack "),a("strong",[s._v("监听项目源代码的变化")]),s._v("，从而进行"),a("strong",[s._v("自动打包构建")])]),s._v(" "),a("p",[s._v("1.安装插件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev webpack-dev-server//安装最新版本\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack-dev-server@3.11.2 -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2.修改 "),a("strong",[s._v("package.json -> scripts")]),s._v(" 中的 dev 命令如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack serve"')]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//通过npm run 执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("3.再次运行 npm run dev 命令，重新进行项目的打包")]),s._v(" "),a("p",[s._v("4.在浏览器中使用 80 端口，查看自动打包效果")]),s._v(" "),a("p",[s._v("5.ctrl+c 按两次就可以停掉")]),s._v(" "),a("p",[a("strong",[s._v("打包生成的文件哪儿去了")]),s._v("：")]),s._v(" "),a("p",[s._v("不配置 webpack-dev-server 的情况下，webpack 打包生成的文件，会存放到实际的物理磁盘上")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("严格遵守开发者在 webpack.config.js 中指定配置")])]),s._v(" "),a("li",[a("p",[s._v("根据 output 节点指定路径进行存放")])])]),s._v(" "),a("p",[s._v("配置了 webpack-dev-server 之后，打包生成的文件存放到了内存中")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("不再根据 output 节点指定的路径，存放到实际的物理磁盘上")])]),s._v(" "),a("li",[a("p",[s._v("提高了实时打包输出的性能，因为内存比物理磁盘速度快很多")])])]),s._v(" "),a("p",[a("strong",[s._v("生成到内存中的文件该如何访问？")])]),s._v(" "),a("p",[s._v("webpack-dev-server 生成到内存中的文件，默认放到了项目的根目录中，而且是虚拟的、不可见的。")]),s._v(" "),a("ul",[a("li",[s._v("可以直接用 "),a("code",[s._v("/")]),s._v(" 表示项目根目录，后面跟上要访问的文件名称，即可访问内存中的文件")]),s._v(" "),a("li",[s._v("例如 "),a("code",[s._v("/bundle.js")]),s._v(" 就表示要访问 "),a("code",[s._v("webpack-dev-server")]),s._v(" 生成到内存中的 "),a("code",[s._v("bundle.js")]),s._v(" 文件")])]),s._v(" "),a("h2",{attrs:{id:"_3-html-webpack-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-html-webpack-plugin"}},[s._v("#")]),s._v(" 3.html-webpack-plugin")]),s._v(" "),a("p",[a("code",[s._v("html-webpack-plugin")]),s._v(" 是 webpack 中的 HTML 插件，可以通过此插件自定制 index.html 页面的内容。")]),s._v(" "),a("p",[s._v("通过 html-webpack-plugin 插件，将 src 目录下的 index.html 首页，"),a("strong",[s._v("复制到项目根目录中一份")])]),s._v(" "),a("p",[s._v("1.安装 html-webpack-plugin")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev html-webpack-plugin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" html-webpack-plugin@5.3.2 -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2.在 webpack.config.js 中配置 html-webpack-plugin")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" HtmlWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"html-webpack-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" htmlPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("htmlPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"development"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[s._v("通过 HTML 插件复制到项目根目录中的 index.html 页面，也被放到了内存中")]),s._v(" "),a("li",[s._v("HTML 插件在生成的 index.html 页面，"),a("strong",[s._v("自动注入了打包的 bundle.js 文件")])])]),s._v(" "),a("h2",{attrs:{id:"_4-devserver-节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-devserver-节点"}},[s._v("#")]),s._v(" 4.devServer 节点")]),s._v(" "),a("p",[s._v("在 webpack.config.js 配置文件中，可以通过 devServer 节点对 webpack-dev-server 插件进行更多的配置，")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    open"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//自动打开浏览器")]),s._v("\n    host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("凡是修改了 "),a("code",[s._v("webpack.config.js")]),s._v(" 配置文件，或修改了 package.json 配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效。")])]),s._v(" "),a("li",[a("p",[s._v("80 端口在 http 协议中，可以省略。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);