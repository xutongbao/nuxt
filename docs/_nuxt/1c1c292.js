(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,4,5],{230:function(t,e,n){"use strict";n.r(e);var r={props:{sidebarItem:{type:Object}},computed:{currentId:function(){return this.$store.state.light.currentId}},methods:{handleNav:function(t){this.$store.commit({type:"light/setState",key:"currentId",value:t}),this.$store.commit({type:"light/setState",key:"isRealScroll",value:!1})}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:"m-sidebar-item "+(t.currentId===t.sidebarItem.id?"active":""),on:{click:function(e){return t.handleNav(t.sidebarItem.id)}}},[t._v("\n  "+t._s(t.sidebarItem.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},232:function(t,e,n){"use strict";n.r(e);var r={computed:{list:function(){return this.$store.state.light.list}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-sidebar"},t._l(t.list,(function(t){return n("SidebarItem",{key:t.id,attrs:{sidebarItem:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SidebarItem:n(230).default})},233:function(t,e,n){"use strict";n.r(e);var r={},l=n(12),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"m-list"})}),[],!1,null,null,null);e.default=component.exports},235:function(t,e,n){"use strict";n.r(e);var r=n(2),l=(n(39),{layout:"light/main",head:{title:"小米书城-首页",meta:[{hid:"description",name:"description",content:"小米书城首页"},{hid:"Keywords",name:"Keywords",content:"小米书城,首页"}]},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit({type:"light/setState",key:"header",value:"小米书城"}),e.next=3,t.$store.dispatch({type:"light/getList"});case 3:case"end":return e.stop()}}),e)})))()}}),c=n(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-main m-home"},[n("Sidebar"),t._v(" "),n("List")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Sidebar:n(232).default,List:n(233).default})}}]);