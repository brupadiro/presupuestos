(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{603:function(t,e,n){var content=n(661);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("379d2668",content,!0,{sourceMap:!1})},660:function(t,e,n){"use strict";n(603)},661:function(t,e,n){(e=n(15)(!1)).push([t.i,".otp-input{width:50px;height:50px;padding:5px;margin:0 10px;font-size:50px;border-radius:4px;border:1px solid rgba(0,0,0,.3);text-align:center}.error{border:1px solid red!important}",""]),t.exports=e},766:function(t,e,n){"use strict";n.r(e);var o=n(659),r={layout:"verificacion-otp",data:function(){return{error:!1}},methods:{next:function(){this.error=!this.error,this.error||this.$router.push("/")},handleOnComplete:function(t){console.log("OTP completed: ",t)},handleOnChange:function(t){console.log("OTP changed: ",t)}},components:{OtpInput:n.n(o).a}},c=(n(660),n(18)),l=n(17),d=n.n(l),v=n(364),h=n(389),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex flex-column justify-space-between align-center full-height "},[n("div",[n("h1",{staticClass:"mb-3 text-center"},[t._v("Verificacion OTP")]),t._v(" "),n("p",{staticClass:"text-center mb-5"},[t._v("Enviamos su codigo al +123123*** "),n("br"),t._v(" Este codigo caducará a las 00:30 ")])]),t._v(" "),n("div",[n("otp-input",{ref:"otpInput",attrs:{"input-classes":"otp-input",separator:" ","num-inputs":4,"should-auto-focus":!0,"is-input-num":!0,"input-type":"password"},on:{"on-change":t.handleOnChange,"on-complete":t.handleOnComplete}})],1),t._v(" "),n("div",{staticClass:"full-width pl-3 pr-3"},[n("v-btn",{staticClass:"white--text elevation-0 pa-5",attrs:{color:"primary",block:"",rounded:""},on:{click:t.next}},[t._v("Continuar")])],1),t._v(" "),n("div",{staticClass:"text-center"},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"red--text"},[t._v("!Contraseña incorrecta. Por favor, pruebe de nuevo!")]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v("\n            Reenviar codigo OTP\n        ")])])])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VContainer:h.a})}}]);