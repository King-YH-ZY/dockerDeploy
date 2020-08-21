(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{461:function(a,s,t){"use strict";t.r(s);var e=t(55),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-简介"}},[a._v("#")]),a._v(" docker 简介")]),a._v(" "),t("p",[a._v("Docker 是个划时代的开源项目，它彻底释放了计算虚拟化的威力，极大提高了应用的维护效率，降低了云计算应用开发的成本！使用 Docker，可以让应用的部署、测试和分发都变得前所未有的高效和轻松！无论是应用开发者、运维人员、还是其他信息技术从业人员，都有必要认识和掌握 Docker，节约有限的生命。")]),a._v(" "),t("h1",{attrs:{id:"基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[a._v("#")]),a._v(" 基本命令")]),a._v(" "),t("ul",[t("li",[t("h3",{attrs:{id:"获取镜像-pull"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像-pull"}},[a._v("#")]),a._v(" 获取镜像 - Pull")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker pull "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Docker Registry 地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(":端口号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("仓库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(":标签"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("具体的选项可以通过 docker pull --help 命令看到，这里我们说一下镜像名称的格式。")]),a._v(" "),t("ul",[t("li",[t("h3",{attrs:{id:"运行镜像-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像-run"}},[a._v("#")]),a._v(" 运行镜像 - Run")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -it --rm ubuntu:18.04 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])]),t("p",[a._v("docker run 就是运行容器的命令，具体格式我们会在 容器 一节进行详细讲解，我们这里简要的说明一下上面用到的参数。")]),a._v(" "),t("ol",[t("li",[a._v("-it：这是两个参数，一个是 -i：交互式操作，一个是 -t 终端。我们这里打算进入 bash 执行一些命令并查看返回结果，因此我们需要交互式终端。")]),a._v(" "),t("li",[a._v("-- rm：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 docker rm。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 --rm 可以避免浪费空间。")]),a._v(" "),t("li",[a._v("ubuntu:18.04：这是指用 ubuntu:18.04 镜像为基础来启动容器。")]),a._v(" "),t("li",[a._v("bash：放在镜像名后的是 命令，这里我们希望有个交互式 Shell，因此用的是 bash。\n进入容器后，我们可以在 Shell 下操作，执行任何所需的命令。这里，我们执行了 cat /etc/os-release，这是 Linux 常用的查看当前系统版本的命令，从返回的结果可以看到容器内是 Ubuntu 18.04.1 LTS 系统。")])]),a._v(" "),t("ul",[t("li",[t("h3",{attrs:{id:"列出镜像-docker-image-ls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出镜像-docker-image-ls"}},[a._v("#")]),a._v(" 列出镜像 - docker image ls")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\nREPOSITORY           TAG                 IMAGE ID            CREATED             SIZE\nredis                latest              5f515359c7f8        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" days ago          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("183")]),a._v(" MB\nnginx                latest              05a60462f8ba        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" days ago          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("181")]),a._v(" MB\nmongo                "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.2")]),a._v("                 fe9198c04d62        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" days ago          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("342")]),a._v(" MB\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("               "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("              00285df0df87        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" days ago          "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("342")]),a._v(" MB\nubuntu               "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("18.04")]),a._v("               f753707788c5        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" weeks ago         "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127")]),a._v(" MB\nubuntu               latest              f753707788c5        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" weeks ago         "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127")]),a._v(" MB\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);