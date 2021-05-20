(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{234:function(e,t,r){"use strict";r.r(t);var n={light:{login:"/api/login",list:"/api/list",myBooks:"/api/my_books",detail:"/api/detail/"}},o=(r(36),r(29),r(35),r(49),r(30),r(50),r(6)),c=r(23),l=(r(48),r(11),r(60)),d=r.n(l);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}d.a.defaults.baseURL="https://rough-tan-board.glitch.me",d.a.interceptors.request.use((function(e){if(e.headers.token=localStorage.getItem("token")||"",!1!==e.isNeedExtraData){var t={userId:1};"get"===e.method?e.params=h(h({},t),e.data):e.data=h(h({},t),e.data)}return e}),(function(e){return Promise.reject(e)})),d.a.interceptors.response.use((function(e){return 200===e.data.code?e.data:400!==e.data.code?Promise.reject(e):void alert(e.data.message)}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误(400)";break;case 401:return;case 403:e.message="拒绝访问(403)";break;case 404:e.message="请求出错(404)";break;case 408:e.message="请求超时(408)";break;case 500:e.message="服务器错误(500)";break;case 501:e.message="服务未实现(501)";break;case 502:e.message="网络错误(502)";break;case 503:e.message="服务不可用(503)";break;case 504:e.message="网络超时(504)";break;case 505:e.message="HTTP版本不受支持(505)";break;default:e.message="连接出错(".concat(e.response.status,")!")}else e.message="连接服务器失败!";return Promise.reject(e)}));var f=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={light:{login:function(data){return f({url:n.light.login,data:data,method:"post"})},list:function(){return f({url:n.light.list})},myBooks:function(data,e){return f({url:n.light.myBooks,data:data,method:e})},detail:function(e){return f({url:n.light.detail+e})}}},w={head:{title:"小米书城-登录",meta:[{hid:"description",name:"description",content:"小米书城登录页"},{hid:"Keywords",name:"Keywords",content:"小米书城,登录"}]},data:function(){return{username:"admin",password:"123456",visible:!1}},methods:{handleVisible:function(){this.visible=!this.visible},handleLogin:function(){var e=this;v.light.login({username:this.username,password:this.password}).then((function(t){200===t.code&&(console.log("成功"),e.$router.push("/light/home/home"))}))}}},k=r(13),component=Object(k.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"请输入用户名",autofocus:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),r("div",["checkbox"==(e.visible?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)},change:function(t){var r=e.password,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&(e.password=r.concat([null])):c>-1&&(e.password=r.slice(0,c).concat(r.slice(c+1)))}else e.password=o}}}):"radio"==(e.visible?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"radio"},domProps:{checked:e._q(e.password,null)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)},change:function(t){e.password=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:e.visible?"text":"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("Icon",{attrs:{name:e.visible?"show":"hide",className:"m-login-icon"},on:{onClick:e.handleVisible}})],1),e._v(" "),r("button",{on:{click:e.handleLogin}},[e._v("登录")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:r(166).default})}}]);