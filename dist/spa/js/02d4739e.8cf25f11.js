(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["02d4739e"],{"0c56":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card",{staticStyle:{"min-width":"300px"}},[i("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v("Edit Friend")])]),i("q-card-section",[i("q-input",{ref:"firstName",attrs:{outlined:"",label:"First Name",placeholder:"First Name",autofocus:"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.firstName,callback:function(t){e.$set(e.friendToSubmit,"firstName",t)},expression:"friendToSubmit.firstName"}})],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"Last Name",placeholder:"Last Name",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.lastName,callback:function(t){e.$set(e.friendToSubmit,"lastName",t)},expression:"friendToSubmit.lastName"}})],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"Email",placeholder:"Email",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.email,callback:function(t){e.$set(e.friendToSubmit,"email",t)},expression:"friendToSubmit.email"}})],1),i("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),i("q-btn",{attrs:{flat:"",label:"Edit Friend",type:"submit"}})],1)],1)])},r=[],a=i("3156"),s=i.n(a),d=i("2f62"),l={props:["friend","id"],data:function(){return{friendToSubmit:{firstName:"",lastName:"",email:""}}},methods:s()({},Object(d["b"])("settings",["updateFriend"]),{submitFriend:function(){this.updateFriend({id:this.id,updates:this.friendToSubmit}),this.$emit("close")},submitForm:function(){this.submitFriend()}}),mounted:function(){console.log("friend",this.friend,this.id),this.friendToSubmit.firstName=this.friend.firstName,this.friendToSubmit.lastName=this.friend.lastName,this.friendToSubmit.email=this.friend.email},watch:{friend:function(e){console.log("watchfriend",e),this.friendToSubmit.firstName=this.friend.firstName,this.friendToSubmit.lastName=this.friend.lastName,this.friendToSubmit.email=this.friend.email}},computed:{}},o=l,u=i("2877"),c=Object(u["a"])(o,n,r,!1,null,null,null);t["default"]=c.exports},"324a":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card",{staticStyle:{"min-width":"300px"}},[i("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v("Add Friend")])]),i("q-card-section",[i("q-input",{ref:"firstName",attrs:{outlined:"",label:"First Name",placeholder:"First Name",autofocus:"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.firstName,callback:function(t){e.$set(e.friendToSubmit,"firstName",t)},expression:"friendToSubmit.firstName"}})],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"Last Name",placeholder:"Last Name",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.lastName,callback:function(t){e.$set(e.friendToSubmit,"lastName",t)},expression:"friendToSubmit.lastName"}})],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"Email",placeholder:"Email",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.email,callback:function(t){e.$set(e.friendToSubmit,"email",t)},expression:"friendToSubmit.email"}})],1),i("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),i("q-btn",{attrs:{flat:"",label:"Add Friend",type:"submit"}})],1)],1)])},r=[],a=i("3156"),s=i.n(a),d=i("2f62"),l=i("2b0e"),o=(new l["a"],{data:function(){return{friendToSubmit:{firstName:"",lastName:"",email:""}}},methods:s()({},Object(d["b"])("settings",["addFriend"]),{submiFriend:function(){this.addFriend(this.friendToSubmit),this.$emit("close")},submitForm:function(){this.submiFriend()}}),computed:{}}),u=o,c=i("2877"),f=Object(c["a"])(u,n,r,!1,null,null,null);t["default"]=f.exports},"504c":function(e,t,i){var n=i("0d58"),r=i("6821"),a=i("52a7").f;e.exports=function(e){return function(t){var i,s=r(t),d=n(s),l=d.length,o=0,u=[];while(l>o)a.call(s,i=d[o++])&&u.push(e?[i,s[i]]:s[i]);return u}}},8615:function(e,t,i){var n=i("5ca1"),r=i("504c")(!1);n(n.S,"Object",{values:function(e){return r(e)}})},"8e23":function(e,t,i){"use strict";var n=i("99ed"),r=i.n(n);r.a},"99ed":function(e,t,i){},f3ea:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[i("div",[[i("q-list",{staticClass:"q-mb-md",attrs:{bordered:"",padding:""}},[i("q-table",{attrs:{title:"My Friends",data:e.data,columns:e.columns,"row-key":"name"},scopedSlots:e._u([{key:"body-cell-actions",fn:function(t){return[i("q-td",{staticClass:"q-gutter-x-sm",staticStyle:{"text-align":"center"}},[i("q-btn",{attrs:{round:"",outline:"",color:"primary",icon:"edit"},on:{click:function(i){return e.modalEditFriend(t.row)}}})],1)]}}])})],1),i("div",{staticClass:"absolute-bottom text-center q-mb-lg no-pointer-events"},[i("q-btn",{staticClass:"all-pointer-events",attrs:{round:"",color:"primary",size:"24px",icon:"add"},on:{click:function(t){e.showAddFriend=!0}}})],1)]],2),i("q-dialog",{model:{value:e.showAddFriend,callback:function(t){e.showAddFriend=t},expression:"showAddFriend"}},[i("add-friend",{on:{close:function(t){e.showAddFriend=!1}}})],1),i("q-dialog",{attrs:{persistent:""},model:{value:e.showEditFriend,callback:function(t){e.showEditFriend=t},expression:"showEditFriend"}},[i("edit-friend",{attrs:{friend:e.tmpFriendData,id:e.tmpFriendID},on:{close:function(t){e.showEditFriend=!1}}})],1)],1)},r=[],a=(i("456d"),i("ac6a"),i("cadf"),i("8615"),i("3156")),s=i.n(a),d=i("2f62"),l=(i("18d6"),{data:function(){return{showAddFriend:!1,showEditFriend:!1,tmpFriendData:"",tmpFriendID:"",friendIds:"",columns:[{name:"firstName",required:!0,label:"First Name",align:"left",field:function(e){return e.firstName},format:function(e){return"".concat(e)},sortable:!0},{name:"lastName",label:"Last Name",field:"lastName",sortable:!0},{name:"email",label:"Email Address",field:"email"},{name:"friendID",label:"Friend ID",field:"friendID"},{name:"actions",field:"id",label:"Actions",sortable:!1,required:!0,align:"center"}],data:[]}},computed:s()({},Object(d["c"])("settings",["friends"]),{getFriends:function(){return console.log("friend",this.friends),{friends:Object.values(this.friends)}}}),methods:{modalEditFriend:function(e){console.log("props",e),this.tmpFriendData=e,this.tmpFriendID=e.friendID,console.log("friendData",this.tmpFriendData,this.tmpFriendID),this.showEditFriend=!0}},mounted:function(){var e=this;this.$root.$on("showAddFriend",function(){e.showAddFriend=!0}),this.data=Object.values(this.friends),console.log("d",Object.values(this.friends))},watch:{friends:function(e){console.log("change",e),this.friendsIds=Object.keys(this.friends),console.log("friendlocation",this.friends),this.data=Object.values(this.friends),console.log("new dd",Object.values(this.friends))}},components:{"add-friend":i("324a").default,"edit-friend":i("0c56").default}}),o=l,u=(i("8e23"),i("2877")),c=Object(u["a"])(o,n,r,!1,null,null,null);t["default"]=c.exports}}]);