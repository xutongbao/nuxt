(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,r){"use strict";var n={},o=r(13),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-wrap"},[r("Header"),e._v(" "),r("Nuxt"),e._v(" "),r("Footer")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:r(226).default,Footer:r(227).default})},166:function(e,t,r){"use strict";var n=r(13),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},167:function(e,t,r){"use strict";r.r(t);var n={props:{name:{type:String,default:""},className:{type:String,default:""}},methods:{handleClick:function(){this.$emit("onClick")}}},o=r(13),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{class:"icon iconfont icon-"+e.name+" "+e.className,on:{click:e.handleClick}})}),[],!1,null,null,null);t.default=component.exports},168:function(e,t,r){r(169),e.exports=r(170)},205:function(e,t,r){},206:function(e,t,r){"use strict";r.r(t);r(28),r(19),r(27),r(39),r(23),r(40);var n=r(9),o=r(2),c=(r(46),r(47));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.default={getList:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,c.a.light.list();case 3:n=t.sent,r({type:"setState",key:"list",value:n.data});case 5:case"end":return t.stop()}}),t)})))()},getMyBooks:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,c.a.light.myBooks();case 3:n=t.sent,r({type:"setState",key:"myBooks",value:n.data});case 5:case"end":return t.stop()}}),t)})))()},addMyBooks:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,o=t.book,r.next=4,c.a.light.myBooks({book:o},"post");case 4:return l=r.sent,n({type:"setState",key:"myBooks",value:l.data}),r.abrupt("return",l);case 7:case"end":return r.stop()}}),r)})))()},deleteMyBooks:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,o=t.ids,r.next=4,c.a.light.myBooks({ids:o},"delete");case 4:return l=r.sent,n({type:"setState",key:"myBooks",value:l.data}),r.abrupt("return",l);case 7:case"end":return r.stop()}}),r)})))()},patchMyBooks:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,c.a.light.myBooks(f({},t),"patch");case 3:return o=r.sent,n({type:"setState",key:"myBooks",value:o.data}),r.abrupt("return",o);case 6:case"end":return r.stop()}}),r)})))()},getDetail:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,c.a.light.detail(t.id);case 3:(o=r.sent).data.count=1,n({type:"setState",key:"detailBook",value:o.data});case 6:case"end":return r.stop()}}),r)})))()}}},224:function(e,t,r){"use strict";r.r(t);r(28),r(19),r(27),r(39),r(23),r(40);var n=r(9);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.default={setState:function(e,t){e[t.key]=t.value,console.log(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e))}}},225:function(e,t,r){"use strict";r.r(t),t.default=function(){return{header:"",list:[],currentId:0,isRealScroll:!0,isListDialogVisible:!1,addBook:{},myBooks:[],detailBook:{},isLoading:!1,scrollTop:0}}},226:function(e,t,r){"use strict";r.r(t);var n={computed:{header:function(){return this.$store.state.light.header}}},o=r(13),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"m-header"},[e._v(e._s(e.header))])}),[],!1,null,null,null);t.default=component.exports},227:function(e,t,r){"use strict";r.r(t);var n={},o=r(13),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"m-footer"},[r("NuxtLink",{staticClass:"m-footer-item",attrs:{to:"/light/home/Home"}},[r("Icon",{staticClass:"m-footer-icon",attrs:{name:"home"}}),e._v(" "),r("div",{staticClass:"m-footer-text"},[e._v("首页")])],1),e._v(" "),r("NuxtLink",{staticClass:"m-footer-item",attrs:{to:"/light/mybooks/MyBooks"}},[r("Icon",{staticClass:"m-footer-icon",attrs:{name:"shubao"}}),e._v(" "),r("div",{staticClass:"m-footer-text"},[e._v("书包")])],1),e._v(" "),r("NuxtLink",{staticClass:"m-footer-item",attrs:{to:"/light/me/Me"}},[r("Icon",{staticClass:"m-footer-icon",attrs:{name:"me"}}),e._v(" "),r("div",{staticClass:"m-footer-text"},[e._v("我的")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:r(167).default})},41:function(e,t,r){"use strict";var n={props:["error"],layout:"error"},o=r(13),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[404===e.error.statusCode?r("h1",[e._v("404 没有找到该页面")]):r("h1",[e._v("出错了")]),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[e._v("返回首页")])],1)}),[],!1,null,null,null);t.a=component.exports},47:function(e,t,r){"use strict";var n={light:{login:"/api/login",list:"/api/list",myBooks:"/api/my_books",detail:"/api/detail/"}},o=(r(28),r(19),r(27),r(39),r(23),r(40),r(2)),c=r(9),l=(r(46),r(8),r(31)),f=r.n(l);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}f.a.defaults.baseURL="https://rough-tan-board.glitch.me",f.a.interceptors.request.use((function(e){if(e.headers.token=localStorage.getItem("token")||"",!1!==e.isNeedExtraData){var t={userId:1};"get"===e.method?e.params=d(d({},t),e.data):e.data=d(d({},t),e.data)}return e}),(function(e){return Promise.reject(e)})),f.a.interceptors.response.use((function(e){return 200===e.data.code?e.data:400!==e.data.code?Promise.reject(e):void alert(e.data.message)}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误(400)";break;case 401:return;case 403:e.message="拒绝访问(403)";break;case 404:e.message="请求出错(404)";break;case 408:e.message="请求超时(408)";break;case 500:e.message="服务器错误(500)";break;case 501:e.message="服务未实现(501)";break;case 502:e.message="网络错误(502)";break;case 503:e.message="服务不可用(503)";break;case 504:e.message="网络超时(504)";break;case 505:e.message="HTTP版本不受支持(505)";break;default:e.message="连接出错(".concat(e.response.status,")!")}else e.message="连接服务器失败!";return Promise.reject(e)}));var v=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={light:{login:function(data){return v({url:n.light.login,data:data,method:"post"})},list:function(){return v({url:n.light.list})},myBooks:function(data,e){return v({url:n.light.myBooks,data:data,method:e})},detail:function(e){return v({url:n.light.detail+e})}}};t.a=h}},[[168,10,1,11]]]);