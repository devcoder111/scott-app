(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["31d4598b"],{"439d":function(t,a,e){"use strict";var r=e("bb22"),s=e.n(r);s.a},bb22:function(t,a,e){},e009:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.submitForm(a)}}},[e("div",{staticClass:"row q-mb-md"},[e("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t._f("titleCase")(t.tab))+" to access your Todos anywhere!\n\t\t\t")])],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"email",staticClass:"col",attrs:{rules:[function(a){return t.isValidEmailAddress(a)||"Please enter a valid email address."}],"lazy-rules":"",outlined:"",label:"Email","stack-label":""},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"password",staticClass:"col",attrs:{rules:[function(t){return t.length>=6||"Please enter at least 6 characters."}],"lazy-rules":"",type:"password",outlined:"",label:"Password","stack-label":""},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),e("div",{staticClass:"row"},[e("q-space"),e("q-btn",{attrs:{color:"primary",label:t.tab,type:"submit"}})],1)]),e("div",["login"==t.tab?e("button",{staticStyle:{background:"url('assets/google_logo.png') no-repeat",width:"194px",height:"50px",display:"block",margin:"auto"},on:{click:t.signInWithGoogle}},[t._v("Sign In With Google")]):t._e(),"register"==t.tab?e("button",{staticStyle:{background:"url('assets/google_logo.png') no-repeat",width:"194px",height:"50px",display:"block",margin:"auto"},on:{click:t.signUpWithGoogle}},[t._v("Sign Up With Google")]):t._e()])])},s=[],i=e("3156"),n=e.n(i),o=e("2f62"),l=e("59ca"),c=(e("fc1b"),{props:["tab"],data:function(){return{formData:{email:"",password:""}}},methods:n()({},Object(o["b"])("auth",["registerUser","loginUser"]),{signInWithGoogle:function(){var t=this,a=new l["auth"].GoogleAuthProvider;l["auth"]().signInWithRedirect(a).then(function(a){t.user=a.user}).catch(function(t){return console.log(error)})},signUpWithGoogle:function(){var t=this,a=new l["auth"].GoogleAuthProvider;l["auth"]().signInWithRedirect(a).then(function(a){t.user=a.user}).catch(function(t){return console.log(error)})},isValidEmailAddress:function(t){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(String(t).toLowerCase())},submitForm:function(){this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||("login"==this.tab?this.loginUser(this.formData):this.registerUser(this.formData))}}),filters:{titleCase:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}}),u=c,d=e("2877"),b=Object(d["a"])(u,r,s,!1,null,null,null);a["default"]=b.exports},f724:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-card",{staticClass:"auth-tabs"},[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"login",label:"Login"}}),e("q-tab",{attrs:{name:"register",label:"Register"}})],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"login"}},[e("login-register",{attrs:{tab:t.tab}})],1),e("q-tab-panel",{attrs:{name:"register"}},[e("login-register",{attrs:{tab:t.tab}})],1)],1)],1)],1)},s=[],i={data:function(){return{tab:"login"}},components:{"login-register":e("e009").default}},n=i,o=(e("439d"),e("2877")),l=Object(o["a"])(n,r,s,!1,null,null,null);a["default"]=l.exports}}]);