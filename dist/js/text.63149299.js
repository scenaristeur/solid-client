(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["text"],{9646:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._v(" Text "),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter text...",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("b-input-group",{attrs:{size:"lg",prepend:"Path"}},[n("b-form-input",{model:{value:t.path,callback:function(e){t.path=e},expression:"path"}})],1),n("b-button",{on:{click:t.send}},[t._v("Send")])],1)},o=[],s=(n("d3b7"),{name:"Texte",components:{},data:function(){return{text:"",path:"file/text1.txt"}},methods:{send:function(){console.log(this.text,this.path,this.server),fetch(this.server+this.path,{headers:{"Content-type":"text/plain; charset=UTF-8"},method:"PUT",body:this.text}).then((function(t){return console.log(t)})).catch((function(t){console.error("Error:",t)}))}},computed:{server:function(){return this.$store.state.server}}}),a=s,c=n("2877"),i=Object(c["a"])(a,r,o,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=text.63149299.js.map