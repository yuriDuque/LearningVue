(function(t){function e(e){for(var n,s,i=e[0],l=e[1],u=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"46bc":function(t,e,o){t.exports=o.p+"img/vuexlogo.d656dee3.png"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Index"),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center"},[n("a",{attrs:{href:"https://vuejs.org/"}},[n("img",{staticStyle:{width:"60px"},attrs:{alt:"Vue logo",src:o("cf05")}})]),n("a",{attrs:{href:"https://vuex.vuejs.org/"}},[n("img",{staticClass:"ml-3",staticStyle:{width:"65px"},attrs:{alt:"Vuex logo",src:o("46bc")}})]),n("a",{attrs:{href:"https://getbootstrap.com.br/docs/4.1/getting-started/introduction/"}},[n("img",{staticClass:"ml-3",staticStyle:{width:"55px"},attrs:{alt:"Bootstrap logo",src:o("81e9")}})])])}],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("Card",[o("Form",{attrs:{baseProduto:t.produto},on:{submit:function(e){return t.submit(e)}}})],1),o("Card",[o("List",{attrs:{fields:t.fields}})],1)],1)},i=[],l=(o("4de4"),o("c740"),o("4160"),o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shadow-lg rounded-lg p-3 mb-3 bg-white rounded"},[t._t("default")],2)}),u=[],c={name:"card"},d=c,f=o("2877"),p=Object(f["a"])(d,l,u,!1,null,null,null),m=p.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("table",{staticClass:"table"},[o("thead",{staticClass:"thead-dark"},[o("tr",t._l(t.fields,(function(e,n){return o("th",{key:n,staticClass:"font-weight-bold",class:{"d-flex justify-content-center":"Ações"===e},attrs:{scope:"col"}},[t._v(t._s(e))])})),0)]),o("tbody",t._l(t.dados,(function(t,e){return o("ListRow",{key:e,attrs:{produto:t}})})),1)])])},h=[],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("th",[t._v(t._s(t.produto.id))]),o("th",[t._v(t._s(t.produto.nome))]),o("th",[t._v(t._s(t.produto.valor))]),o("th",{staticClass:"d-flex justify-content-center"},[o("button",{staticClass:"btn",on:{click:t.edit}},[o("font-awesome-icon",{staticStyle:{"font-weight":"bold"},attrs:{icon:"edit"}})],1),o("button",{staticClass:"btn",on:{click:t.deletar}},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])},b=[],_={name:"listRow",props:{produto:null},methods:{edit:function(){this.$store.commit("produtoSelected",this.produto.id)},deletar:function(){this.$store.commit("decrement",this.produto.id)}}},w=_,x=(o("a61b"),Object(f["a"])(w,g,b,!1,null,null,null)),y=x.exports,C={name:"list",components:{ListRow:y},props:{fields:null},data:function(){return{dados:this.$store.getters.getAll}},mounted:function(){var t=this;this.$store.watch((function(){return t.$store.getters.getAll}),(function(e){t.dados=e}))}},$=C,j=Object(f["a"])($,v,h,!1,null,null,null),S=j.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:t.submit,reset:t.reset}},[o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-6"},[o("label",{staticClass:"font-weight-bold"},[t._v("Nome")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.nome,expression:"produto.nome"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.produto.nome},on:{change:t.validarCampos,input:function(e){e.target.composing||t.$set(t.produto,"nome",e.target.value)}}})]),o("div",{staticClass:"form-group col-6"},[o("label",{staticClass:"font-weight-bold"},[t._v("Valor")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.valor,expression:"valor"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.valor},on:{change:t.validarCampos,input:function(e){e.target.composing||(t.valor=e.target.value)}}})]),o("div",{staticClass:"align-self-end col-12"},[o("button",{staticClass:"btn btn-danger float-left",attrs:{type:"reset"}},[o("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"window-close"}}),t._v("CANCELAR ")],1),o("button",{staticClass:"btn btn-success float-right",attrs:{type:"submit"}},[o("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"save"}}),t._v(" "+t._s(t.TextSave)+" ")],1)])])])},A=[],P=(o("caad"),o("e25e"),o("ac1f"),o("2532"),o("5319"),{name:"Form",data:function(){return{valor:"",TextSave:"SALVAR",produto:this.$store.getters.getProdutoSelected,saveActive:!1}},mounted:function(){var t=this;this.$store.watch((function(){return t.$store.getters.getProdutoSelected}),(function(e){t.produto=e,t.valor=t.produto.valor}))},watch:{valor:function(){this.valor&&(this.valor=this.number_format(this.valor))}},methods:{submit:function(t){t.preventDefault(),this.saveActive&&(this.produto.valor=this.valor,this.produto.id?this.$store.commit("edit",this.produto):this.$store.commit("increment",this.produto),this.reset())},reset:function(){this.$store.commit("resetProduto"),this.TextSave="SALVAR",this.saveActive=!1},number_format:function(t){return t+="",t=this.mascara_numero(t),t&&t.includes("R$")&&(t=t.replace("R$ ","")),t=parseInt(t.replace(/[\D]+/g,"")),t+="",t=t.replace(/([0-9]{2})$/g,",$1"),t.length>6&&(t=t.replace(/([0-9]{3}),([0-9]{2}$)/g,".$1,$2")),"NaN"==t?"R$ 0,00":"R$ "+t},mascara_numero:function(t){return t&&(t=t.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1")),t},validarCampos:function(){var t=0;this.produto.nome||t++,this.valor||t++,this.saveActive=!t}}}),R=P,E=Object(f["a"])(R,O,A,!1,null,"d5610e40",null),k=E.exports,L={name:"index",components:{Card:m,List:S,Form:k},data:function(){return{fields:["Id","Nome","Valor","Ações"],produto:null}},methods:{submit:function(t){if(null==t.id){var e=1;this.data.forEach((function(t){t.id>=e&&(e=t.id+1)})),t.id=e,this.data.push(t)}else{var o=this.data.findIndex((function(e){return e.id==t.id}));this.data[o]=t}this.produto=null},edit:function(t){this.produto=t},deletar:function(t){var e=this.data.filter((function(e){return e.id!=t}));this.data=e,this.produto=null}}},N=L,I=Object(f["a"])(N,s,i,!1,null,null,null),T=I.exports,V={name:"app",components:{Index:T}},M=V,F=(o("034f"),Object(f["a"])(M,r,a,!1,null,null,null)),B=F.exports,D=(o("4989"),o("ab8b"),o("ecee")),J=o("ad3d"),q=o("c074"),z=o("2f62");n["a"].use(z["a"]);var G=new z["a"].Store({state:{data:[{id:1,nome:"Bola",valor:"R$ 50,00"}],produto:{id:null,nome:"",valor:null}},getters:{getAll:function(t){return t.data},getProdutoSelected:function(t){return t.produto}},mutations:{increment:function(t,e){var o=1;t.data.forEach((function(t){t.id>=o&&(o=t.id+1)})),e.id=o,t.data.push(e)},decrement:function(t,e){t.data=t.data.filter((function(t){return t.id!=e}))},edit:function(t,e){var o=t.data.findIndex((function(t){return t.id==e.id}));t.data[o]=e},produtoSelected:function(t,e){var o=t.data.filter((function(t){return t.id==e}));o.length&&(t.produto=o.shift())},resetProduto:function(t){t.produto={id:null,nome:"",valor:null}}}});D["c"].add(q["d"],q["b"],q["e"],q["a"],q["c"]),n["a"].component("font-awesome-icon",J["a"]),n["a"].config.productionTip=!1,new n["a"]({store:G,render:function(t){return t(B)}}).$mount("#app")},"81e9":function(t,e,o){t.exports=o.p+"img/logobootstrap-4.ffded238.svg"},"85ec":function(t,e,o){},a61b:function(t,e,o){"use strict";var n=o("f150"),r=o.n(n);r.a},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},f150:function(t,e,o){}});
//# sourceMappingURL=app.3c3d94b6.js.map