(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{578:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Boxx"),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#11",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信官方文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("注：1.web的分享只能通过微信右上角自带的三个点分享，只有app才能实现自定义按钮的分享。")])]),t._v(" "),a("p",[t._v("步骤：")]),t._v(" "),a("p",[t._v("1.安装 ：npm i -S weixin-js-sdk")]),t._v(" "),a("p",[t._v("2.新建js导入")]),t._v(" "),a("p",[t._v("import wx from ‘weixin-js-sdk’ //微信sdk依赖")]),t._v(" "),a("p",[t._v("3.js文件")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" wx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weixin-js-sdk'")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//微信sdk依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用全局")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//要用到微信API")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJSSDK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataForWeixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用后台接口换取参数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/news-serve/admin/wx-index/share"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要改成自己对应的接口")]),t._v("\n    params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" url\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。")]),t._v("\n      appId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必填，公众号的唯一标识")]),t._v("\n      timestamp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必填，生成签名的时间戳")]),t._v("\n      nonceStr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nonceStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必填，生成签名的随机串")]),t._v("\n      signature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("signature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必填，签名")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// jsApiList: jsApiList // 必填，需要使用的JS接口列表")]),t._v("\n      jsApiList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要调用的JS接口列表")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateAppMessageShareData'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0） 新接口")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateTimelineShareData'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0） 老接口")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'getLocation'  //获取定位")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需在用户可能点击分享按钮前就先调用")]),t._v("\n      wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateTimelineShareData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        desc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linkurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        imgUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("trigger")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log('已分享');")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("cancel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log('已取消');")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//alert(JSON.stringify(result));")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateAppMessageShareData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        desc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linkurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        imgUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("trigger")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log('已分享');")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("cancel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log('已取消');")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//alert(JSON.stringify(result));")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// alert(JSON.stringify(res)+"微信验证失败");')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取JSSDK")]),t._v("\n  getJSSDK"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" getJSSDK\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("页面中引用 （在页面信息请求回来时调用这个share()方法，加载微信配置）")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" weiXinShare "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../util/shareWx"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @Description: 分享朋友圈\n * @date 2021/1/25\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("share")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分享朋友圈")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ip1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dataForWeixin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分享标题")]),t._v("\n    desc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分享内容")]),t._v("\n    linkurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分享链接")]),t._v("\n    img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分享内容显示的图片(图片必须是正方形的链接)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  weiXinShare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJSSDK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataForWeixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n_this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("share")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<[^>]+>/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("效果:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgchr.com/i/sLQU0I",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s3.ax1x.com/2021/01/25/sLQU0I.png",alt:"sLQU0I.png"}}),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);s.default=e.exports}}]);