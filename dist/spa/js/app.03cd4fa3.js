(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,a,n){e.exports=n("2f39")},"034f":function(e,a,n){"use strict";var t=n("306c"),o=n.n(t);o.a},"1b68":function(e,a,n){},"2f39":function(e,a,n){"use strict";n.r(a);var t=n("a34a"),o=n.n(t),r=(n("96cf"),n("c973")),i=n.n(r),c=(n("7d6e"),n("e54f"),n("21cb"),n("3e27"),n("1b68"),n("7e6d"),n("2b0e")),d=n("b05d"),s=n("4d5a"),u=n("9898"),l=n("f2cc"),f=n("c7a0"),p=n("2ea3"),g=n("65c6"),b=n("6ac5"),h=n("9c40"),m=n("0016"),Q=n("497d"),v=n("6ab5"),I=n("033f"),w=n("e208"),F=n("eaac"),U=n("db86"),S=n("bd08"),R=n("357e"),N=n("d847"),T=n("ee89"),x=n("07d0"),y=n("429b"),A=n("7460"),C=n("7867"),L=n("8f8e"),P=n("24e8"),k=n("f09f"),E=n("a370"),D=n("4b7e"),B=n("2c91"),j=n("27f9"),O=n("c859"),$=n("7cbe"),q=n("24a7"),V=n("54e1"),z=n("ddd8"),H=n("4983"),J=n("9564"),W=n("adad"),_=n("823b"),K=n("eb85"),M=n("0d59"),Y=n("714f"),Z=n("7f67"),G=n("f449"),X=n("2a19"),ee=n("436b"),ae=n("18d6");c["a"].use(d["a"],{config:{},components:{QLayout:s["a"],QHeader:u["a"],QDrawer:l["a"],QPageContainer:f["a"],QPage:p["a"],QToolbar:g["a"],QToolbarTitle:b["a"],QBtn:h["a"],QIcon:m["a"],QList:Q["a"],QItem:v["a"],QItemSection:I["a"],QItemLabel:w["a"],QTable:F["a"],QTd:U["a"],QTr:S["a"],QTh:R["a"],QBar:N["a"],QUploader:T["a"],QFooter:x["a"],QTabs:y["a"],QTab:A["a"],QRouteTab:C["a"],QCheckbox:L["a"],QDialog:P["a"],QCard:k["a"],QCardSection:E["a"],QCardActions:D["a"],QSpace:B["a"],QInput:j["a"],QDate:O["a"],QPopupProxy:$["a"],QTime:q["a"],QBanner:V["a"],QSelect:z["a"],QScrollArea:H["a"],QToggle:J["a"],QTabPanels:W["a"],QTabPanel:_["a"],QSeparator:K["a"],QSpinner:M["a"]},directives:{Ripple:Y["a"],ClosePopup:Z["a"],TouchHold:G["a"]},plugins:{Notify:X["a"],Dialog:ee["a"],LocalStorage:ae["a"]}});var ne=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},te=[],oe=n("3156"),re=n.n(oe),ie=n("2f62"),ce={methods:re()({},Object(ie["b"])("auth",["handleAuthStateChange"])),mounted:function(){this.handleAuthStateChange()}},de=ce,se=(n("034f"),n("2877")),ue=Object(se["a"])(de,ne,te,!1,null,null,null),le=ue.exports,fe=(n("ac6a"),n("f751"),n("1732")),pe=n("f508"),ge=n("fc1b"),be=(n("e71f"),{friends:{},files:{}}),he={addFriend:function(e,a){a.friend.friendID=a.docRefid,console.log("add",a),c["a"].set(e.friends,a.docRefid,a.friend),console.log("friendstate",e.friends)},addFile:function(e,a){console.log("add",a),c["a"].set(e.files,a.docRefid,a.file),console.log("friendstate",e.file)},updateFriend:function(e,a){console.log("previousState",e.friends),console.log("edit",a,e.friends[a.docRefid],a.updates),Object.assign(e.friends[a.docRefid],{firstName:a.updates.firstName,lastName:a.updates.lastName,email:a.updates.email}),console.log("updateState",e.friends)}},me={fbReadFriends:function(e,a){var n=e.commit,t=ge["b"].currentUser.uid,o=ge["c"].collection("user").doc(t).collection("friends");o.onSnapshot(function(e){e.forEach(function(e){var a=e.data();console.log("friend",a);var t={docRefid:e.id,friend:a};n("addFriend",t)})})},fbReadFiles:function(e){var a=e.commit,n=ge["b"].currentUser.uid,t=ge["c"].collection("user").doc(n).collection("files");t.onSnapshot(function(e){e.forEach(function(e){var n=e.data();console.log("file",n);var t={docRefid:e.id,file:n};a("addFile",t)})})},addFriend:function(e,a){var n=e.dispatch;n("fbAddFriend",a)},fbAddFriend:function(e,a){var n=e.commit,t=ge["b"].currentUser.uid,o=ge["c"].collection("user").doc(t).collection("friends");o.add({firstName:a.firstName,lastName:a.lastName,email:a.email}).then(function(e){console.log("Document written with ID: ",e.id),X["a"].create("Friend added!");var t={docRefid:e.id,friend:a};n("addFriend",t)}).catch(function(e){console.error("Error adding document: ",e)})},updateFriend:function(e,a){e.dispatch;var n=e.commit,t=ge["b"].currentUser.uid,o=a.id,r=ge["c"].collection("user").doc(t).collection("friends").doc(o);console.log("dd",r,a);var i={docRefid:o,updates:a.updates};console.log("ee",i),n("updateFriend",i),r.update({firstName:a.updates.firstName,lastName:a.updates.lastName,email:a.updates.email}).then(function(){X["a"].create("Friend Updated!")})},addFile:function(e,a){e.dispatch,e.commit;var n=ge["b"].currentUser.uid,t=ge["c"].collection("user").doc(n).collection("files");t.add({filename:a.filename,filePath:a.filePath,downloadurl:a.downloadurl})}},Qe={friends:function(e){return e.friends},files:function(e){return e.files}},ve={namespaced:!0,state:be,mutations:he,actions:me,getters:Qe};n("a481");function Ie(e){pe["a"].hide(),ee["a"].create({title:"Error",message:e})}var we={loggedIn:!1,loggedInUser:""},Fe={setLoggedIn:function(e,a){e.loggedIn=a},setLoggedInUser:function(e,a){e.loggedInUser=a}},Ue={registerUser:function(e,a){e.dispatch;pe["a"].show(),ge["b"].createUserWithEmailAndPassword(a.email,a.password).then(function(e){console.log("response: ",e),a.uid=e.user.uid;var n=Object(fe["a"])();a.id=n,console.log("payl",a)}).catch(function(e){Ie(e.message)})},loginUser:function(e,a){var n=e.commit;pe["a"].show(),ge["b"].signInWithEmailAndPassword(a.email,a.password).then(function(e){console.log("response: ",e),n("setLoggedInUser",e.user.email)}).catch(function(e){Ie(e.message)})},logoutUser:function(e){e.commit;console.log("logoutUser"),ge["b"].signOut()},handleAuthStateChange:function(e){var a=this,n=e.commit,t=e.dispatch;ge["b"].onAuthStateChanged(function(e){pe["a"].hide(),e?(n("setLoggedIn",!0),ae["a"].set("loggedIn",!0),a.$router.push("/friends"),t("settings/fbReadFriends",null,{root:!0}),t("settings/fbReadFiles",null,{root:!0})):(n("setLoggedIn",!1),ae["a"].set("loggedIn",!1),a.$router.replace("/auth"))})}},Se={loggedInUser:function(e){return e.loggedInUser}},Re={namespaced:!0,state:we,mutations:Fe,actions:Ue,getters:Se};c["a"].use(ie["a"]);var Ne=function(){var e=new ie["a"].Store({modules:{settings:ve,auth:Re},strict:!1});return e},Te=n("8c4f"),xe=[{path:"/main",component:function(){return n.e("1455bb14").then(n.bind(null,"a9c3"))},children:[{path:"/friends",component:function(){return n.e("167832c9").then(n.bind(null,"f3ea"))}},{path:"/listening",component:function(){return n.e("657aa444").then(n.bind(null,"6fb0"))}},{path:"/auth",component:function(){return n.e("31d4598b").then(n.bind(null,"f724"))}}]}],ye=xe;c["a"].use(Te["a"]);var Ae=function(){var e=new Te["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ye,mode:"hash",base:""});return e},Ce=function(){var e="function"===typeof Ne?Ne({Vue:c["a"]}):Ne,a="function"===typeof Ae?Ae({Vue:c["a"],store:e}):Ae;e.$router=a;var n={el:"#q-app",router:a,store:e,render:function(e){return e(le)}};return{app:n,store:e,router:a}},Le=function(e){var a=e.router;a.beforeEach(function(e,a,n){var t=ae["a"].getItem("loggedIn");t||e.path,n()})},Pe=Ce(),ke=Pe.app,Ee=Pe.store,De=Pe.router;function Be(){return je.apply(this,arguments)}function je(){return je=i()(o.a.mark(function e(){var a,n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=[ge["default"],Le],n=0;case 2:if(!(n<a.length)){e.next=20;break}if("function"===typeof a[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,a[n]({app:ke,router:De,store:Ee,Vue:c["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new c["a"](ke);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),je.apply(this,arguments)}Be()},"306c":function(e,a,n){},"7e6d":function(e,a,n){},fc1b:function(e,a,n){"use strict";n.d(a,"b",function(){return i}),n.d(a,"c",function(){return c});var t=n("59ca"),o=(n("e71f"),n("ea7b"),n("66ce"),{apiKey:"AIzaSyBg0lQg4U-Fh0nNIsFZYvLt3slMqu1NFEo",authDomain:"fb101-286a0.firebaseapp.com",databaseURL:"https://fb101-286a0.firebaseio.com",projectId:"fb101-286a0",storageBucket:"fb101-286a0.appspot.com",messagingSenderId:"617138214589",appId:"1:617138214589:web:58864af1dae94908da49d4"}),r=t["initializeApp"](o),i=r.auth(),c=(r.database(),t["firestore"]())}},[[0,"runtime","vendor"]]]);