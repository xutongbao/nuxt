(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,n){"use strict";n.r(e);var r={props:{sidebarItem:{type:Object}},computed:{currentId:function(){return this.$store.state.light.currentId}},methods:{handleNav:function(t){this.$store.commit({type:"light/setState",key:"currentId",value:t}),this.$store.commit({type:"light/setState",key:"isRealScroll",value:!1})}}},c=n(13),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:"m-sidebar-item "+(t.currentId===t.sidebarItem.id?"active":""),on:{click:function(e){return t.handleNav(t.sidebarItem.id)}}},[t._v("\n  "+t._s(t.sidebarItem.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports}}]);