(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{612:function(t,_,v){"use strict";v.r(_);var i=v(21),s=Object(i.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"git-的简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-的简介"}},[t._v("#")]),t._v(" Git 的简介")]),t._v(" "),v("h2",{attrs:{id:"_1、git-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、git-是什么"}},[t._v("#")]),t._v(" 1、git 是什么")]),t._v(" "),v("p",[t._v("git 是一个版本控制管理系统（VCS,version control system），可以在任何时间点，将文档的状态记录作为更新记录保存起来，也可以在任何时间点，将更新记录恢复出来。")]),t._v(" "),v("h2",{attrs:{id:"_2、使用-git-的目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用-git-的目的"}},[t._v("#")]),t._v(" 2、使用 git 的目的")]),t._v(" "),v("p",[t._v("通过 git 管理托管项目代码。")]),t._v(" "),v("h2",{attrs:{id:"_3、下载和安装-git"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、下载和安装-git"}},[t._v("#")]),t._v(" 3、下载和安装 git")]),t._v(" "),v("p",[t._v("git 官网下载："),v("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/downloads"),v("OutboundLink")],1)]),t._v(" "),v("ul",[v("li",[t._v("安装完后打开 git bash 命令行窗口")]),t._v(" "),v("li",[v("code",[t._v("git --version")]),t._v(" 可以使用这条命令查看当前 git 版本")])]),t._v(" "),v("h1",{attrs:{id:"_4、git-的初始配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、git-的初始配置"}},[t._v("#")]),t._v(" 4、git 的初始配置")]),t._v(" "),v("p",[t._v("git 安装后需要先配置，使用 git 可以多人协作，可以做到责任分工。")]),t._v(" "),v("ol",[v("li",[t._v("初始化用户名\n"),v("code",[t._v("git config --global user.name 'Scripthqs'")])]),t._v(" "),v("li",[t._v("设置用户名邮箱"),v("br"),t._v(" "),v("code",[t._v("git config --global user.email '1941186772@qq.com'")])]),t._v(" "),v("li",[t._v("查看设置(验证是否初始化成功)"),v("br"),t._v(" "),v("code",[t._v("git config --list")])]),t._v(" "),v("li",[t._v("如果配置需要修改配置信息\n"),v("ul",[v("li",[t._v("再重复上述的命令可以修改配置信息")]),t._v(" "),v("li",[t._v("也可以找到"),v("code",[t._v("C盘-用户文件夹-.gitconfig")]),t._v("中的文件，该文件中修改修改配置信息")])])])]),t._v(" "),v("p",[v("strong",[t._v("注意：此操作只需要执行一次，该设置在 GitHub 仓库主页显示谁提交了该文件。")])]),t._v(" "),v("h2",{attrs:{id:"_5、git-初始化仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、git-初始化仓库"}},[t._v("#")]),t._v(" 5、git 初始化仓库")]),t._v(" "),v("p",[v("strong",[t._v("前 5 步的作用主要通过命令行创建文件夹和文件，熟悉命令行")]),t._v("，也可以手动创建文件夹")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("显示当前位置"),v("br"),t._v(" "),v("code",[t._v("pwd")])])]),t._v(" "),v("li",[v("p",[t._v("创建名为"),v("code",[t._v("test")]),t._v("的文件夹"),v("br"),t._v(" "),v("code",[t._v("mkdir test")])])]),t._v(" "),v("li",[v("p",[t._v("进入名为"),v("code",[t._v("test")]),t._v("文件夹"),v("br"),t._v(" "),v("code",[t._v("cd test")])])]),t._v(" "),v("li",[v("p",[t._v("返回上一级目录"),v("br"),t._v(" "),v("code",[t._v("cd ..")])])]),t._v(" "),v("li",[v("p",[t._v("创建名为"),v("code",[t._v("index.html")]),t._v("的文件"),v("br"),t._v(" "),v("code",[t._v("touch index.html")])])]),t._v(" "),v("li",[v("p",[t._v("在文件内初始化 Git（创建 Git 仓库）"),v("br"),t._v(" "),v("code",[t._v("git init")]),v("br"),t._v("\n文件夹中会出现一个隐藏文件夹"),v("code",[t._v(".git")]),t._v("，如图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/scripthqs/assets/raw/master/git/git.png",alt:"git"}})]),t._v(" "),v("ul",[v("li",[t._v("hooks：目录包含客户端或服务端的钩子脚本")]),t._v(" "),v("li",[t._v("info：包含一个全局性排除文件")]),t._v(" "),v("li",[t._v("logs：保存日志信息")]),t._v(" "),v("li",[t._v("objects：目录存储所有数据内容")]),t._v(" "),v("li",[t._v("refs：目录存储指向数据（分支）的提交对象指针")]),t._v(" "),v("li",[t._v("config：文件包含项目特有的配置选项")]),t._v(" "),v("li",[t._v("desciption：用来显示对仓库的描述信息")]),t._v(" "),v("li",[t._v("HEAD：文件指示目前被检出的分支")]),t._v(" "),v("li",[t._v("index：文件保存暂存区信息")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);