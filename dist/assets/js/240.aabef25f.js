(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{709:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"js-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-数据类型"}},[s._v("#")]),s._v(" js 数据类型")]),s._v(" "),a("p",[s._v("在计算机中，不同的数据所需的存储空间不同，为了充分利用存储空间，就定义了不同的数据类型。js一共6种数据类型（es6之前），5种原始数据类型（值类型），1种引用数据类型（引用类型）。2021年，已经有8种数据类型。")]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("String")]),s._v(" 字符串")])]),s._v(" "),a("li",[a("strong",[a("code",[s._v("Number")]),s._v(" 数值")])]),s._v(" "),a("li",[a("strong",[a("code",[s._v("Boolean")]),s._v(" 布尔值")])]),s._v(" "),a("li",[a("strong",[a("code",[s._v("Null")]),s._v(" 空值")])]),s._v(" "),a("li",[a("strong",[a("code",[s._v("Undefined")]),s._v(" 未定义")])]),s._v(" "),a("li",[a("strong",[a("code",[s._v("Symbol")]),s._v(" (ES6) 独一无二的值类型。")])]),s._v(" "),a("li",[a("strong",[a("code",[s._v("BigInt")]),s._v(" (ES10) 大整数基本类型。")])])]),s._v(" "),a("h2",{attrs:{id:"_1、number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、number"}},[s._v("#")]),s._v(" 1、Number")]),s._v(" "),a("p",[s._v("js数字类型既可以用来保存整数值，也可以保存小数（浮点数）。")]),s._v(" "),a("p",[s._v("值在双精度 64 位二进制（-(2^53 -1) 到 2^53 -1）。")]),s._v(" "),a("p",[s._v("几个特殊的数字：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),s._v(" 正无穷，超过最大值返回\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),s._v(" 负无穷\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" 非数值，Not"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Number\n    Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_VALUE")]),s._v(" js可表示的最大值\n    Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MIN_VALUE")]),s._v(" js可表示的最小正值\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("NaN与任何值都不相等，包括NaN本身，Undefined和任何数值计算的结果都是NaN。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("+0 === -0")]),s._v("但是做分母是，返回值不一样")])])]),s._v(" "),a("h3",{attrs:{id:"_1-1、数字进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、数字进制"}},[s._v("#")]),s._v(" 1.1、数字进制")]),s._v(" "),a("ul",[a("li",[s._v("十进制：没有前导0的数值。")]),s._v(" "),a("li",[s._v("八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。")]),s._v(" "),a("li",[s._v("十六进制：有前缀0x或0X的数值。")]),s._v(" "),a("li",[s._v("二进制：有前缀0b或0B的数值")])]),s._v(" "),a("h3",{attrs:{id:"_1-2、基本运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、基本运算"}},[s._v("#")]),s._v(" 1.2、基本运算")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("+")]),s._v("只有在两边都是Number类型时，才是数字相加，否则就是连字符，用来连接字符串。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("-")]),s._v('时，"2"-1得到的结果却是数值1，字符串会自动做隐式转换。')])])]),s._v(" "),a("h3",{attrs:{id:"_1-3、运算精度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、运算精度"}},[s._v("#")]),s._v(" 1.3、运算精度")]),s._v(" "),a("p",[s._v("JS中整数运算基本可以保证准确，小数运算很可能得到一个不准确的结果。要进行准确的运算的方法；")]),s._v(" "),a("ul",[a("li",[s._v("简单精度 使用"),a("code",[s._v("toFix()")]),s._v("方法进行小数的截取")]),s._v(" "),a("li",[s._v("实际开发中，可以使用数学运算开源库\n"),a("ul",[a("li",[s._v("Math.js 文件很大，压缩的文件500kb，涉及大型的复杂运算使用")]),s._v(" "),a("li",[s._v("decimal.js 轻量的运算库，压缩的文件32kb，大多数数学运算项目都可以满足。")])])])]),s._v(" "),a("p",[s._v("开源库既可以使用cdn的方式引用，也可以使用npm包的方式引入。")]),s._v(" "),a("h3",{attrs:{id:"_1-4、数值相关的全局方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、数值相关的全局方法"}},[s._v("#")]),s._v(" 1.4、数值相关的全局方法")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("parseInt()将字符串转换成整数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("头部空格会自动消除- 不是字符串，则会先转为字符串再转换")])]),s._v(" "),a("li",[a("p",[s._v("第一个字符不能转换成数字（除后面直接跟着数字的正负号），返回NaN。")])]),s._v(" "),a("li",[a("p",[s._v("返回值只有两种可能，十进制整数或者NaN。")])]),s._v(" "),a("li",[a("p",[s._v("字符串以0x或0X开头，parseInt会将其按照十六进制数解析")])]),s._v(" "),a("li",[a("p",[s._v("如果字符串以0开头，将其按照10进制解析或者8进制。")])]),s._v(" "),a("li",[a("p",[s._v("科学计数法不好使，e会被当成普通字母。")])]),s._v(" "),a("li",[a("p",[s._v("parseInt方法还可以接受第二个参数（2到36之间，如果第二个参数没有意义则会被忽略），表示被解析的值的进制。默认值是10。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000000000000000000.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1e+21'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000008")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8e-7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 216")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 512")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("parseFloat()将一个字符串转为浮点数。")]),s._v(" "),a("ul",[a("li",[s._v("科学计数法好使。")]),s._v(" "),a("li",[s._v("空字符串转为NaN。")])])]),s._v(" "),a("li",[a("p",[s._v("isNaN()方法可以用来判断一个值是否为NaN。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("只对数值有效，如果传入其他值，会被先转成数值。")])]),s._v(" "),a("li",[a("p",[s._v("isNaN为true的值，有可能不是NaN，而是一个字符串。")])]),s._v(" "),a("li",[a("p",[s._v("对于对象和数组，isNaN也返回true。")])]),s._v(" "),a("li",[a("p",[s._v("但是对于空数组和只有一个数值成员的数组，isNaN又返回false。")])]),s._v(" "),a("li",[a("p",[s._v("NaN是唯一不等于自身的值，这是最可靠的方法。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("myIsNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("isFinite()方法返回一个布尔值，表示某个值是否为正常的数值。")]),s._v(" "),a("ul",[a("li",[s._v("Infinity、-Infinity、NaN和undefined这几个值会返回false")]),s._v(" "),a("li",[a("code",[s._v("isFinite")]),s._v("对于其他的数值都会返回true。")])])])]),s._v(" "),a("h2",{attrs:{id:"_2、string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、string"}},[s._v("#")]),s._v(" 2、String")]),s._v(" "),a("p",[s._v("字符串使用单引号或者双引号。要点：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("''")]),s._v("引号间什么都不写，称为空字符串。")]),s._v(" "),a("li",[s._v("同类引号不能嵌套。")]),s._v(" "),a("li",[s._v("对于一些特殊的符号，可以使用"),a("code",[s._v("\\")]),s._v("作为转义字符。\n"),a("ul",[a("li",[a("code",[s._v("\\'")]),s._v(" 单引号")]),s._v(" "),a("li",[a("code",[s._v('\\"')]),s._v(" 双引号")]),s._v(" "),a("li",[a("code",[s._v("\\n")]),s._v(" 换行")]),s._v(" "),a("li",[a("code",[s._v("\\r")]),s._v("回车")]),s._v(" "),a("li",[a("code",[s._v("\\b")]),s._v("空格")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-1、获取字符串的长度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、获取字符串的长度"}},[s._v("#")]),s._v(" 2.1、获取字符串的长度")]),s._v(" "),a("p",[s._v("字符串由若干份字符串组成，这些字符的数量就是字符串的长度，可以通过length属性获取整个字符串的长度。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你好'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello,world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 5")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 11")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 11")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("一个中文、英文都算一个字符")]),s._v(" "),a("li",[s._v("一个中文标点、英文标点算一个字符")]),s._v(" "),a("li",[s._v("一个空格算一个字符，多个连续空格也算多个字符。")])]),s._v(" "),a("h3",{attrs:{id:"_2-2、字符串的拼接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、字符串的拼接"}},[s._v("#")]),s._v(" 2.2、字符串的拼接")]),s._v(" "),a("p",[s._v("多个字符串之间可以使用加号 "),a("code",[s._v("+")]),s._v(" 进行拼接。")]),s._v(" "),a("p",[a("code",[s._v("字符串 + 任意数据类型 = 拼接之后的新字符串")])]),s._v(" "),a("p",[s._v("拼接前，任意数据类型会强制转换成字符串，然后再拼接成一个新的字符串。应用：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("'' + 任意数据类型")]),s._v(" 可以强制转换成字符串")])]),s._v(" "),a("h3",{attrs:{id:"_2-3、字符串与数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、字符串与数组"}},[s._v("#")]),s._v(" 2.3、字符串与数组")]),s._v(" "),a("ul",[a("li",[s._v("字符串可以视为字符数组，因此可以使用方括号运算符，用来返回某个位置的字符，从0开始。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "h"')]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "e"')]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "o"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接对字符串使用方括号运算符")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "e"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回undefined。")]),s._v(" "),a("li",[s._v("字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。")])]),s._v(" "),a("h3",{attrs:{id:"_2-4、字符串的不可改变性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、字符串的不可改变性"}},[s._v("#")]),s._v(" 2.4、字符串的不可改变性")]),s._v(" "),a("p",[s._v("字符串里面的值不可被改变，虽然看上去内容变了，其实是地址变了，内存中开辟了新的空间。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("当重新给变量str赋值时，常量'hello'不会被修改，依然保存在内存中，str会改为指向"),a("code",[s._v("world")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_2-5、模板字符串-模板字面量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5、模板字符串-模板字面量"}},[s._v("#")]),s._v(" 2.5、模板字符串（模板字面量）")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'17'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我是'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("',age:'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//传统写法")]),s._v("\n          console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("我是")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v(",age:")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//ES6新语法")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意：ES6新语法括号中不是单引号，而是TAB键上方的符号。")]),s._v(" "),a("ul",[a("li",[s._v("模板字符串中可以直接换行")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'17'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("我是")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v(",\n          age:")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//ES6新语法")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("在模板字符串中插入表达式")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("和为")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("，积为")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//ES6新语法")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("模板字符串中可以调用函数")]),s._v(" "),a("li",[s._v("模板字符串支持嵌套使用")])]),s._v(" "),a("h3",{attrs:{id:"_2-6、字符串的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6、字符串的方法"}},[s._v("#")]),s._v(" 2.6、字符串的方法")]),s._v(" "),a("p",[s._v("在计算机底层，字符串是以字符数组的形式保存的。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("indexOf(想要查询的字符串)")]),s._v("检索字符串中是否含有指定内容，找到返回索引，没有返回-1")]),s._v(" "),a("li",[a("code",[s._v("charAt()")]),s._v("根据索引获取指定索引的字符，直接写"),a("code",[s._v("[]")]),s._v("也可以")]),s._v(" "),a("li",[a("code",[s._v("charCodeAt()")]),s._v("获取索引处的Unicode编码")]),s._v(" "),a("li",[a("code",[s._v("String.fromCharCode()")]),s._v("根据Unicode编码获取")]),s._v(" "),a("li",[a("code",[s._v("concat")]),s._v("和"),a("code",[s._v("+")]),s._v("一样")]),s._v(" "),a("li",[a("code",[s._v("slice()")]),s._v("可以在字符串中截取指定内容")]),s._v(" "),a("li",[a("code",[s._v("substring()")]),s._v("截取字符串，不同的是这个方法不能接受负值，默认使用0，会自动交换")]),s._v(" "),a("li",[a("code",[s._v("splice()")]),s._v("删除指定的一个或多个元素")]),s._v(" "),a("li",[a("code",[s._v("split()")]),s._v("可以将字符串拆分成一个数组，传递一个字符串作为参数，根据该字符串拆分数组")]),s._v(" "),a("li",[a("code",[s._v("toUpperCase()")]),s._v("将字符串转换成大写并返回")]),s._v(" "),a("li",[a("code",[s._v("toLowerCase()")]),s._v("将字符串装换成小写并返回")])]),s._v(" "),a("h2",{attrs:{id:"_3、boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、boolean"}},[s._v("#")]),s._v(" 3、Boolean")]),s._v(" "),a("p",[s._v("布尔值有两个"),a("code",[s._v("true")]),s._v(" 和 "),a("code",[s._v("false")]),s._v("。千万不能加引号，主要用来做逻辑判断：")]),s._v(" "),a("ul",[a("li",[s._v("true 表示真")]),s._v(" "),a("li",[s._v("false 表示假")])]),s._v(" "),a("p",[s._v("布尔型和数字型相加时，")]),s._v(" "),a("ul",[a("li",[s._v("true 按 1 来算")]),s._v(" "),a("li",[s._v("false 按 0 来算")])]),s._v(" "),a("p",[s._v("对于以下几个值转换成布尔值时为false，其他都是true。")]),s._v(" "),a("ul",[a("li",[s._v("undefined")]),s._v(" "),a("li",[s._v("null")]),s._v(" "),a("li",[s._v("false")]),s._v(" "),a("li",[s._v("0")]),s._v(" "),a("li",[s._v("NaN")]),s._v(" "),a("li",[s._v("\"\"或'' 空字符串")])]),s._v(" "),a("p",[s._v("注意：空数组（[]）和空对象（{}）对应的布尔值，都是true。")]),s._v(" "),a("h2",{attrs:{id:"_4、null和undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、null和undefined"}},[s._v("#")]),s._v(" 4、Null和Undefined")]),s._v(" "),a("p",[s._v("null专门用来定义空对象，如果想定义一个变量引用类型，但是暂时还没想好放什么内容，可以设置为null。")]),s._v(" "),a("ul",[a("li",[s._v("Null类型的值只有一个，就是null。")]),s._v(" "),a("li",[s._v("使用typeof检查一个null值时，会返回object。")])]),s._v(" "),a("p",[s._v("undefined未定义，使用的情况：")]),s._v(" "),a("ul",[a("li",[s._v("变量已声明，但未赋值，此时该变量的值就是undefined")]),s._v(" "),a("li",[s._v("变量未声明未定义时，直接使用会报错，使用typeof检查则返回undefined。")]),s._v(" "),a("li",[s._v("如果一个函数没有返回值，那么，这个函数的返回值就是 undefined。在定义一个函数时，如果末尾没有return语句，那么其实就是"),a("code",[s._v("return undefined")])]),s._v(" "),a("li",[s._v("调用函数时，如果没有传参，那么这个值就是undefined。")])]),s._v(" "),a("h3",{attrs:{id:"_4-1、null和undefined的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、null和undefined的区别"}},[s._v("#")]),s._v(" 4.1、null和undefined的区别")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("null == undefined 为true")])]),s._v(" "),a("li",[a("p",[s._v("null === undefined 为false")])]),s._v(" "),a("li",[a("p",[s._v("和数字做运算时：")]),s._v(" "),a("ul",[a("li",[s._v("10 + null 结果时10")]),s._v(" "),a("li",[s._v("10 + undefined 结果为NaN")])])]),s._v(" "),a("li",[a("p",[s._v("任何数据类型和undefined运算都是NaN，任何值和null运算都相当于和0运算。")])])]),s._v(" "),a("p",[s._v("总结：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("undefined")]),s._v("代表定义了未赋值")]),s._v(" "),a("li",[a("code",[s._v("null")]),s._v("代表定义了也赋值了，只是赋的值为null")])]),s._v(" "),a("p",[s._v("什么时候赋值为null；")]),s._v(" "),a("ul",[a("li",[s._v("初始赋值为"),a("code",[s._v("null")]),s._v("时，代表将要赋值为对象。\n"),a("ul",[a("li",[a("code",[s._v("var b = null")]),s._v("代表b将要赋值为称对象")]),s._v(" "),a("li",[a("code",[s._v("b = [1,2,3]")]),s._v("确定对象并赋值。")])])]),s._v(" "),a("li",[s._v("最后赋值为"),a("code",[s._v("null")]),s._v("，表示释放对象内存。\n"),a("ul",[a("li",[a("code",[s._v("b = null")]),s._v("让b指向的对象称为垃圾对象，被垃圾回收器回收。")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);