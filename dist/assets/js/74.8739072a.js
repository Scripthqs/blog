(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{529:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue重点"}},[s._v("#")]),s._v(" Vue重点")]),s._v(" "),a("h2",{attrs:{id:"vue的组件通信方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的组件通信方法"}},[s._v("#")]),s._v(" Vue的组件通信方法")]),s._v(" "),a("h3",{attrs:{id:"_1-props-emit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-props-emit"}},[s._v("#")]),s._v(" 1.props/$emit")]),s._v(" "),a("p",[a("code",[s._v("props/$emit")]),s._v("属性可以实现父子组件之间的通信，父组件可以通过"),a("strong",[s._v("自定义属性props")]),s._v("向子组件传递数据，子组件可以通过"),a("strong",[s._v("自定义事件$emit")]),s._v("向父组件传递数据。")]),s._v(" "),a("h3",{attrs:{id:"_2-emit-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-emit-on"}},[s._v("#")]),s._v(" 2.$emit/$on")]),s._v(" "),a("p",[s._v("eventBus事件总线"),a("code",[s._v("$emit/$on")]),s._v("适用于"),a("strong",[s._v("各种组件")]),s._v("之间传递数据。步骤：")]),s._v(" "),a("ol",[a("li",[s._v("新建event-bus.js模块文件，向外共享一个Vue实例对象")]),s._v(" "),a("li",[s._v("在数据的发送方，使用自定义事件，调用"),a("strong",[s._v("bus.$emit('事件名称',发送的数据)")])]),s._v(" "),a("li",[s._v("在数据的接收方，组测自定义事件，"),a("strong",[s._v("bus.$on('自定义事件名称',事件处理函数)")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//eventBus.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Left.vue,发送方")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bus "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eventBus.js'")]),s._v("\nmethods"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'share'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Right.vue，接受方")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bus "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eventBus.js'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("created")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'share'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("或者将事件总线添加到Vue的原型。")]),s._v(" "),a("p",[s._v("1.在Vue的原型上添加一个$bus的属性让其等于一个新的Vue实例")]),s._v(" "),a("p",[s._v("2.发射全局监听事件，和常规$emit一样也可以传递参数")]),s._v(" "),a("p",[s._v("3.监听全局事件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在vue中的main.js文件中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//或者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//数据发送方")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itemImageLoad"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//数据接收方")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itemImageLoad"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_3-ref-refs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ref-refs"}},[s._v("#")]),s._v(" 3.ref/$refs")]),s._v(" "),a("p",[a("code",[s._v("ref/$refs")]),s._v("可以实现"),a("strong",[s._v("父子组件")]),s._v("之间的通信。")]),s._v(" "),a("p",[s._v("ref属性使用到组件上，就指向组件引用的实例，可以通过实例方法组件的属性和方法。")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("// 子组件\ndata(){\n  return {\n    message: 'hello'\n  }\n},\nmethods:{\n  fun(){\n    console.log('world')\n  }\n}\n\n// 父组件\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Son")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Son")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\nmounted(){\n  console.log(this.$refs.child.message)//hello\n  this.$refs.child.fun()//world\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"_4-parent-children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-parent-children"}},[s._v("#")]),s._v(" 4.$parent/$children")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("$parent")]),s._v("可以让组件访问父组件的实例，使用"),a("code",[s._v("$children")]),s._v("可以让组件访问子组件的实例。")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("//在子组件中，$parent是一个对象\nthis.$parent.msg\n\n//在父组件中,$children是一个数组\nthis.$children[0].msg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_5-attrs-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-attrs-listeners"}},[s._v("#")]),s._v(" 5.$attrs/$listeners")]),s._v(" "),a("p",[a("code",[s._v("$attrs和$listeners")]),s._v("使用于"),a("strong",[s._v("父子、隔代组件之间的通信")]),s._v("。"),a("code",[s._v("$attrs")]),s._v("属性继承了父组件的所有属性（除了props传递的属性,class,style），"),a("code",[s._v("$listeners")]),s._v("是一个对象，包含了父组件的各种事件方法。可以使用"),a("code",[s._v("v-bind='$attr'")]),s._v("继续向子组件中传递属性。")]),s._v(" "),a("h3",{attrs:{id:"_6-provide-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-provide-inject"}},[s._v("#")]),s._v(" 6.provide/inject")]),s._v(" "),a("p",[s._v("依赖注入"),a("code",[s._v("provide/inject")]),s._v("可以用于"),a("strong",[s._v("父子、隔代组件的通信")]),s._v("。provide和inject是Vue的钩子函数，provide用来发送数据，inject使用接收数据。")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("//在父组件中，provide书写方式和data一样\nprovide(){\n  return {\n    msg: 'hello'\n  }\n}\n//在子组件中\ninject:['msg']\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("注意：provide提供的属性有点像一个全局的变量，有可能造成变量的污染，而且依赖注入提供的属性是"),a("strong",[s._v("非响应式")]),s._v("的。")]),s._v(" "),a("h3",{attrs:{id:"_7-vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-vuex"}},[s._v("#")]),s._v(" 7.vuex")]),s._v(" "),a("p",[s._v("当数据比较复杂时，可以使用vuex，将一些公共的数据抽离出来，作为全局变量进行管理，其他组件可以对这个公共数据进行读写操作。")]),s._v(" "),a("h3",{attrs:{id:"_8-离线存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-离线存储"}},[s._v("#")]),s._v(" 8.离线存储")]),s._v(" "),a("p",[s._v("可以使用浏览器的离线存储机制")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("//组件a\ncreated(){\n  localStorage.setItem('data','a数据')\n}\n\n//组件b\ncreated(){\n  console.log(localStorage.getItem('data'))\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"vue的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期"}},[s._v("#")]),s._v(" Vue的生命周期")]),s._v(" "),a("h3",{attrs:{id:"vue的生命周期函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期函数"}},[s._v("#")]),s._v(" Vue的生命周期函数")]),s._v(" "),a("p",[s._v("Vue实例有一个完整的生命周期，主要分为3个阶段，创建、运行和销毁。")]),s._v(" "),a("p",[s._v("1.创建阶段")]),s._v(" "),a("ul",[a("li",[s._v("beforeCreate 创建前，"),a("strong",[s._v("data/methods")]),s._v("属性都处于"),a("strong",[s._v("不可用")]),s._v("状态")]),s._v(" "),a("li",[s._v("created 创建后，data/methods属性可用，但是组件的模板并未生产，不能访问"),a("code",[s._v("$el")]),s._v("属性，"),a("strong",[s._v("不能操作DOM")]),s._v("，可以发送ajax请求")]),s._v(" "),a("li",[s._v("beforeMount 挂载前，将要把编译好的模板渲染到浏览器中，此时浏览器器中还没有DOM结构，"),a("strong",[s._v("不能操作DOM")])]),s._v(" "),a("li",[s._v("mounted 挂载后，浏览器有当前组件的DOM结构，"),a("strong",[s._v("可以操作DOM")])])]),s._v(" "),a("p",[s._v("2.运行阶段")]),s._v(" "),a("ul",[a("li",[s._v("beforeUpdate 更新前，将要根据最新的属性重新渲染模板，"),a("strong",[s._v("data数据最新的，DOM结构是旧的")])]),s._v(" "),a("li",[s._v("updated 更新后，已经根据最新的数据重新渲染了模板，"),a("strong",[s._v("data数据是最新的，DOM结构也是最新的")])])]),s._v(" "),a("p",[s._v("3.销毁阶段")]),s._v(" "),a("ul",[a("li",[s._v("beforeDestroy 销毁前，将要销毁组件，"),a("strong",[s._v("组件还处于正常工作状态")])]),s._v(" "),a("li",[s._v("destroyed 销毁后，"),a("strong",[s._v("DOM结构已经完全移除")])])]),s._v(" "),a("h3",{attrs:{id:"哪个生命周期请求异步数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪个生命周期请求异步数据"}},[s._v("#")]),s._v(" 哪个生命周期请求异步数据")]),s._v(" "),a("p",[s._v("可以在created,beforeMount,mounted钩子函数中请求ajax等异步数据，一般都在created中请求数据。")]),s._v(" "),a("h3",{attrs:{id:"keep-alive的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive的生命周期"}},[s._v("#")]),s._v(" keep-alive的生命周期")]),s._v(" "),a("p",[s._v("keep-alive可以将组件进行缓存，而不是销毁组件，此时组件会多两个生命周期，activated和deactivated")]),s._v(" "),a("ul",[a("li",[s._v("当组件被缓存时，会触发deactivated生命周期函数")]),s._v(" "),a("li",[s._v("当组件被激活时，会触发activated生命周期函数")])]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("deactivated(){\n  console.log('组件被缓存')\n}\nactivated(){\n  console.log('组件被激活')\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"vue其他问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue其他问题"}},[s._v("#")]),s._v(" Vue其他问题")]),s._v(" "),a("h3",{attrs:{id:"v-if和v-show"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-show"}},[s._v("#")]),s._v(" v-if和v-show")]),s._v(" "),a("p",[s._v("v-if和v-show都可以控制元素的显示和隐藏。")]),s._v(" "),a("ul",[a("li",[s._v("v-if是真正的条件渲染，在显示隐藏过程中有DOM的添加和删除")]),s._v(" "),a("li",[s._v("v-show只是切换css，相当于设置display属性")])]),s._v(" "),a("p",[s._v("如何需要非常频繁的切换，可以考虑使用v-show")]),s._v(" "),a("h3",{attrs:{id:"nexttick的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick的作用"}},[s._v("#")]),s._v(" $nextTick的作用")]),s._v(" "),a("p",[a("code",[s._v("$nextTick")]),s._v("将回调函数推迟到下一次DOM更新后执行，在created生命周期函数中，需要进行DOM操作，就一定要放在nextTick函数中。")]),s._v(" "),a("h3",{attrs:{id:"computed和watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed和watch"}},[s._v("#")]),s._v(" computed和watch")]),s._v(" "),a("ul",[a("li",[s._v("computed是计算属性，依赖于其他属性计算而来的，有缓存机制")]),s._v(" "),a("li",[s._v("watch是监听其他属性的变化，支持异步，不支持缓存")])])])}),[],!1,null,null,null);t.default=e.exports}}]);