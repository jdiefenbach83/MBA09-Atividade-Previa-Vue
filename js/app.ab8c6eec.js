(function(t){function e(e){for(var n,o,c=e[0],s=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/MBA09-Atividade-Previa-Vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("imc")],1)},i=[],o=a("d4ec"),c=a("262e"),s=a("2caf"),l=a("9ab4"),u=a("1b40"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("form",{staticClass:"col s8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],staticClass:"validate",attrs:{id:"height",name:"height",type:"number",min:"0",step:"any"},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=e.target.value)}}}),a("label",{staticClass:"active",attrs:{for:"height"}},[t._v("Altura (cm)")])]),a("div",{staticClass:"input-field col s4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"validate",attrs:{id:"weight",name:"weight",type:"number",min:"0",step:"any"},domProps:{value:t.weight},on:{input:function(e){e.target.composing||(t.weight=e.target.value)}}}),a("label",{staticClass:"active",attrs:{for:"weight"}},[t._v("Peso (kg)")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s8"},[a("input",{staticClass:"validate",attrs:{disabled:"",name:"result",id:"result",type:"text"},domProps:{value:t.calculateIMC}}),a("label",{staticClass:"active",attrs:{for:"result"}},[t._v("IMC")])])])])])},d=[],f=a("bee2"),v=(a("b680"),function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.height="",t.weight="",t}return Object(f["a"])(a,[{key:"calculateIMC",get:function(){var t=+this.weight/Math.pow(+this.height/100,2),e=t.toFixed(2);return t>=16&&t<17?"".concat(e," kg/m²: Muito abaixo do peso"):t>=17&&t<18.5?"".concat(e," kg/m²: Abaixo do peso"):t>=18.5&&t<25?"".concat(e," kg/m²: Peso normal"):t>=25&&t<30?"".concat(e," kg/m²: Acima do peso"):t>=30&&t<35?"".concat(e," kg/m²: Obesidade grau 1"):t>=35&&t<=40?"".concat(e," kg/m²: Obesidade grau 2"):t>40?"".concat(e," kg/m²: Obesidade grau 3"):""}}]),a}(u["b"]));v=Object(l["a"])([u["a"]],v);var h=v,b=h,g=a("2877"),m=Object(g["a"])(b,p,d,!1,null,null,null),w=m.exports,O=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return a}(u["b"]);O=Object(l["a"])([Object(u["a"])({components:{Imc:w}})],O);var y=O,j=y,C=Object(g["a"])(j,r,i,!1,null,null,null),x=C.exports;a("8266");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.ab8c6eec.js.map