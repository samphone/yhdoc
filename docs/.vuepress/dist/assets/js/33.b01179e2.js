(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{406:function(t,a,s){"use strict";s.r(a);var n=s(46),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"主要逻辑分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要逻辑分析"}},[t._v("#")]),t._v(" 主要逻辑分析")]),t._v(" "),s("p",[t._v("介绍机票流程的主要逻辑")]),t._v(" "),s("h2",{attrs:{id:"首页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[t._v("#")]),t._v(" 首页")]),t._v(" "),s("p",[t._v("首页分为机票首页和个人中心两个页面")]),t._v(" "),s("ul",[s("li",[t._v("机票首页包括轮播图、城市选择、日期选择、搜索、优惠券、精选航线展示等功能")]),t._v(" "),s("li",[t._v("个人中心包括优惠券、积分以及功能导航选项")])]),t._v(" "),s("h3",{attrs:{id:"轮播图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轮播图"}},[t._v("#")]),t._v(" 轮播图")]),t._v(" "),s("p",[t._v("展示规则：根据字段status，若值为1则展示轮播图")]),t._v(" "),s("p",[t._v("跳转规则：根据字段activityname，若值可被'-'分割且【1】为inside则项目内跳转 否则直接跳转外部")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadBannerLink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" temp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inside'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \twindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"起始城市"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起始城市"}},[t._v("#")]),t._v(" 起始城市")]),t._v(" "),s("p",[t._v("展示规则：若没有缓存，则展示定位的当前城市")]),t._v(" "),s("h3",{attrs:{id:"日期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期"}},[t._v("#")]),t._v(" 日期")]),t._v(" "),s("p",[t._v("进入选择日期页面时先进性低价日历接口获取")]),t._v(" "),s("h3",{attrs:{id:"搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[t._v("#")]),t._v(" 搜索")]),t._v(" "),s("ul",[s("li",[t._v("起始城市非空判断")]),t._v(" "),s("li",[t._v("增加搜索历史记录")]),t._v(" "),s("li",[t._v("查询历史搜索列表接口")])]),t._v(" "),s("h3",{attrs:{id:"优惠券"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优惠券"}},[t._v("#")]),t._v(" 优惠券")]),t._v(" "),s("ul",[s("li",[t._v("配置显示")]),t._v(" "),s("li",[t._v("优惠券展示类型\n"),s("ol",[s("li",[t._v("新人券 couponType === 5")]),t._v(" "),s("li",[t._v("限时券 couponType === 4")]),t._v(" "),s("li",[t._v("其他券")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);