(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{674:function(s,t,a){"use strict";a.r(t);var e=a(21),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[s._v("#")]),s._v(" less")]),s._v(" "),a("h2",{attrs:{id:"_1-less-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-less-介绍"}},[s._v("#")]),s._v(" 1.less 介绍")]),s._v(" "),a("p",[s._v("less 是一门 css 预处理语言，less 是 css 增强版，通过 less 可以编写更少的代码实现更强大的样式。")]),s._v(" "),a("p",[s._v("常见的 css 预处理器：sass、less、stylus")]),s._v(" "),a("h2",{attrs:{id:"_2-less-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-less-变量"}},[s._v("#")]),s._v(" 2.less 变量")]),s._v(" "),a("p",[s._v("变量时指没有固定的值，可以改变的。因为 css 中的一些颜色和数值经常使用。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v(" @"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("变量")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("必须有@为前缀")])]),s._v(" "),a("li",[a("p",[s._v("不能包含特殊字符")])]),s._v(" "),a("li",[a("p",[s._v("不能以数字开头")])]),s._v(" "),a("li",[a("p",[s._v("大小写敏感")])]),s._v(" "),a("li",[a("p",[s._v("原生 css 支持设置变量，语法"),a("code",[s._v("--*")]),s._v("：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("--color:red")])])])]),s._v(" "),a("li",[a("p",[s._v("后面通过 var 引用，语法"),a("code",[s._v("var(--*)")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("var(--color)")])])])]),s._v(" "),a("li",[a("p",[s._v("原生 css 支持计算，计算函数：")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("calc()")])])])]),s._v(" "),a("p",[s._v("less 中添加了许多的新特性，语法大体和 css 一致，但是 less 增添了许多 css 的扩展，浏览器不能直接执行 less 代码，要执行必须将 less 转化 css，再由浏览器执行。在 "),a("code",[s._v("vscode")]),s._v("下载"),a("code",[s._v("Easy LESS")]),s._v("插件。")]),s._v(" "),a("ul",[a("li",[s._v("创建"),a("code",[s._v("style.less")]),s._v("的文件，文件名必须是"),a("code",[s._v(".less")])]),s._v(" "),a("li",[s._v("保存时插件会自动生成一个"),a("code",[s._v(".css")]),s._v("文件")]),s._v(" "),a("li",[s._v("//是 less 的单行注释，/**/多行注释")]),s._v(" "),a("li",[s._v("在变量中可以存储一个任意的值，方便修改")]),s._v(" "),a("li",[s._v("变量的语法："),a("code",[s._v("@变量名:变量值;")]),s._v("，变量值可以时颜色、尺寸|、路径、属性名等等\n"),a("ul",[a("li",[s._v("一般使用时，直接写"),a("code",[s._v("@变量名")]),s._v("即可，方便修改。")]),s._v(" "),a("li",[s._v("作为类名或一部分值使用时，"),a("code",[s._v("@{变量名}")]),s._v("使用。")])])]),s._v(" "),a("li",[s._v("可以在变量声明前就使用变量")]),s._v(" "),a("li",[a("code",[s._v("&")]),s._v("相当于自身外边那个选择器")]),s._v(" "),a("li",[a("code",[s._v(":extend()")]),s._v("为当前选择器扩展分组")]),s._v(" "),a("li",[a("code",[s._v(".选择器();")]),s._v("直接对指定样式进行引用，"),a("code",[s._v("mixin")]),s._v("混合")]),s._v(" "),a("li",[s._v("使用类选择器时可以在选择器后面加一个括号，此时就创建了一个minxi 函数。\n"),a("ul",[a("li",[a("code",[s._v(".xuzeqi(){}")]),s._v("，之后直接引用。"),a("code",[s._v(".xunzeqi;")])])])]),s._v(" "),a("li",[a("code",[s._v("average()")]),s._v("可以取值的平均值。可以填两个颜色。")]),s._v(" "),a("li",[a("code",[s._v("darken(red,20%)")]),s._v("可以加深颜色")]),s._v(" "),a("li",[s._v("less中可以直接将所有数值直接运算"),a("code",[s._v("+ - * /")]),s._v("，less除法时需要用括号括起来。")]),s._v(" "),a("li",[a("code",[s._v('@import "其他less路径"')]),s._v("可以将其他的less引入到当前的less中。")]),s._v(" "),a("li",[a("code",[s._v(".map")])])]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[s._v("      "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('"less.compile":')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true => remove surplus whitespace")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true => generate source maps (.css.map files)")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"out"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false => DON'T output .css files (overridable per-file, see below)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_3-mixin-混合函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-mixin-混合函数"}},[s._v("#")]),s._v(" 3.mixin 混合函数")]),s._v(" "),a("p",[s._v("在混合函数中可以直接设置变量")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".test("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@w")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@h")]),s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@w")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token mixin-usage function"}},[s._v(".test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("调用混合函数，按照顺序传递参数。可以直接把名字写好，此时就不用按顺序。")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".test("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@w")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@h")]),s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@w")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token mixin-usage function"}},[s._v(".test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("定义值，定义几个必须传几个参数，可以在定义时直接指定默认值。")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".test("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@w")]),s._v(":200px,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@h")]),s._v(":100px)")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@w")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token mixin-usage function"}},[s._v(".test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);