(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{230:function(t,e,n){"use strict";n.r(e);var r={props:{sidebarItem:{type:Object}},computed:{currentId:function(){return this.$store.state.light.currentId}},methods:{handleNav:function(t){this.$store.commit({type:"light/setState",key:"currentId",value:t}),this.$store.commit({type:"light/setState",key:"isRealScroll",value:!1})}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:"m-sidebar-item "+(t.currentId===t.sidebarItem.id?"active":""),on:{click:function(e){return t.handleNav(t.sidebarItem.id)}}},[t._v("\n  "+t._s(t.sidebarItem.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},232:function(t,e,n){"use strict";n.r(e);var r={computed:{list:function(){return this.$store.state.light.list}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-sidebar"},t._l(t.list,(function(t){return n("SidebarItem",{key:t.id,attrs:{sidebarItem:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SidebarItem:n(230).default})}}]);