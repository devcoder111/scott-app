(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["167832c9"],{"0c56":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticStyle:{"min-width":"300px"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Edit Friend")])]),n("q-card-section",[n("q-input",{ref:"firstName",attrs:{outlined:"",label:"First Name",placeholder:"First Name",autofocus:"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.firstName,callback:function(t){e.$set(e.friendToSubmit,"firstName",t)},expression:"friendToSubmit.firstName"}})],1),n("q-card-section",[n("q-input",{attrs:{outlined:"",label:"Last Name",placeholder:"Last Name",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.lastName,callback:function(t){e.$set(e.friendToSubmit,"lastName",t)},expression:"friendToSubmit.lastName"}})],1),n("q-card-section",[n("q-input",{attrs:{outlined:"",label:"Email",placeholder:"Email",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.email,callback:function(t){e.$set(e.friendToSubmit,"email",t)},expression:"friendToSubmit.email"}})],1),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),n("q-btn",{attrs:{flat:"",label:"Edit Friend",type:"submit"}})],1)],1)])},i=[],o=n("3156"),a=n.n(o),s=n("2f62"),u={props:["friend","id"],data:function(){return{friendToSubmit:{firstName:"",lastName:"",email:""}}},methods:a()({},Object(s["b"])("settings",["updateFriend"]),{submitFriend:function(){this.updateFriend({id:this.id,updates:this.friendToSubmit}),this.$emit("close")},submitForm:function(){this.submitFriend()}}),mounted:function(){console.log("friend",this.friend,this.id),this.friendToSubmit.firstName=this.friend.firstName,this.friendToSubmit.lastName=this.friend.lastName,this.friendToSubmit.email=this.friend.email},watch:{friend:function(e){console.log("watchfriend",e),this.friendToSubmit.firstName=this.friend.firstName,this.friendToSubmit.lastName=this.friend.lastName,this.friendToSubmit.email=this.friend.email}},computed:{}},l=u,c=n("2877"),f=Object(c["a"])(l,r,i,!1,null,null,null);t["default"]=f.exports},2366:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);function i(e,t){var r=t||0,i=n;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}e.exports=i},"324a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticStyle:{"min-width":"300px"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Add Friend")])]),n("q-card-section",[n("q-input",{ref:"firstName",attrs:{outlined:"",label:"First Name",placeholder:"First Name",autofocus:"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.firstName,callback:function(t){e.$set(e.friendToSubmit,"firstName",t)},expression:"friendToSubmit.firstName"}})],1),n("q-card-section",[n("q-input",{attrs:{outlined:"",label:"Last Name",placeholder:"Last Name",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.lastName,callback:function(t){e.$set(e.friendToSubmit,"lastName",t)},expression:"friendToSubmit.lastName"}})],1),n("q-card-section",[n("q-input",{attrs:{outlined:"",label:"Email",placeholder:"Email",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.friendToSubmit.email,callback:function(t){e.$set(e.friendToSubmit,"email",t)},expression:"friendToSubmit.email"}})],1),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),n("q-btn",{attrs:{flat:"",label:"Add Friend",type:"submit"}})],1)],1)])},i=[],o=n("3156"),a=n.n(o),s=n("2f62"),u=n("2b0e"),l=(new u["a"],{data:function(){return{friendToSubmit:{firstName:"",lastName:"",email:""}}},methods:a()({},Object(s["b"])("settings",["addFriend"]),{submiFriend:function(){this.addFriend(this.friendToSubmit),this.$emit("close")},submitForm:function(){this.submiFriend()}}),computed:{}}),c=l,f=n("2877"),d=Object(f["a"])(c,r,i,!1,null,null,null);t["default"]=d.exports},"504c":function(e,t,n){var r=n("0d58"),i=n("6821"),o=n("52a7").f;e.exports=function(e){return function(t){var n,a=i(t),s=r(a),u=s.length,l=0,c=[];while(u>l)o.call(a,n=s[l++])&&c.push(e?[n,a[n]]:a[n]);return c}}},8615:function(e,t,n){var r=n("5ca1"),i=n("504c")(!1);r(r.S,"Object",{values:function(e){return i(e)}})},"8e23":function(e,t,n){"use strict";var r=n("99ed"),i=n.n(r);i.a},"99ed":function(e,t,n){},c64e:function(e,t,n){var r=n("e1f4"),i=n("2366");function o(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[o+s]=a[s];return t||i(a)}e.exports=o},e1f4:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},e93f:function(e,t,n){"use strict";n.r(t);n("7f7f"),n("ac6a");var r=n("3156"),i=n.n(r),o=n("3a82"),a=n("59ca"),s=n.n(a),u=n("c23d"),l=n.n(u),c="firebasestorage.googleapis.com",f="storageBucket",d=12e4,p=6e4,h=-9007199254740991,_=function(){function e(e,t){this.code_=v(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return v(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),e}(),m={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function v(e){return"storage/"+e}function b(){var e="An unknown error occurred, please check the error payload for server response.";return new _(m.UNKNOWN,e)}function g(e){return new _(m.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function y(e){return new _(m.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function R(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _(m.UNAUTHENTICATED,e)}function w(e){return new _(m.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function E(){return new _(m.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function N(){return new _(m.CANCELED,"User canceled the upload/download.")}function T(e){return new _(m.INVALID_URL,"Invalid URL '"+e+"'.")}function A(e){return new _(m.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function S(){return new _(m.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function U(){return new _(m.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function k(){return new _(m.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O(e,t,n){return new _(m.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+n)}function C(e,t,n,r){var i,o;return e===t?(i=e,o=1===e?"argument":"arguments"):(i="between "+e+" and "+t,o="arguments"),new _(m.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+n+"`: Expected "+i+" "+o+", received "+r+".")}function x(){return new _(m.APP_DELETED,"The Firebase app was deleted.")}function I(e){return new _(m.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(e,t){return new _(m.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function L(e){throw new _(m.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function P(e){switch(e){case F.RAW:case F.BASE64:case F.BASE64URL:case F.DATA_URL:return;default:throw"Expected one of the event types: ["+F.RAW+", "+F.BASE64+", "+F.BASE64URL+", "+F.DATA_URL+"]."}}var q=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function M(e,t){switch(e){case F.RAW:return new q(j(t));case F.BASE64:case F.BASE64URL:return new q(B(e,t));case F.DATA_URL:return new q(z(t),H(t))}throw b()}function j(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){var i=n<e.length-1&&56320==(64512&e.charCodeAt(n+1));if(i){var o=r,a=e.charCodeAt(++n);r=65536|(1023&o)<<10|1023&a,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function W(e){var t;try{t=decodeURIComponent(e)}catch(n){throw D(F.DATA_URL,"Malformed data URL.")}return j(t)}function B(e,t){switch(e){case F.BASE64:var n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){var i=n?"-":"_";throw D(e,"Invalid character '"+i+"' found: is it base64url encoded?")}break;case F.BASE64URL:var o=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(o||a){i=o?"+":"/";throw D(e,"Invalid character '"+i+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(c){throw D(e,"Invalid character found")}for(var u=new Uint8Array(s.length),l=0;l<s.length;l++)u[l]=s.charCodeAt(l);return u}var G=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw D(F.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=t[1]||null;null!=n&&(this.base64=V(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}return e}();function z(e){var t=new G(e);return t.base64?B(F.BASE64,t.rest):W(t.rest)}function H(e){var t=new G(e);return t.contentType}function V(e,t){var n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,$={STATE_CHANGED:"state_changed"},K={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},Z={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function J(e){switch(e){case K.RUNNING:case K.PAUSING:case K.CANCELING:return Z.RUNNING;case K.PAUSED:return Z.PAUSED;case K.SUCCESS:return Z.SUCCESS;case K.CANCELED:return Z.CANCELED;case K.ERROR:return Z.ERROR;default:return Z.ERROR}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Y(e,t){for(var n in e)Q(e,n)&&t(n,e[n])}function ee(e){if(null==e)return{};var t={};return Y(e,function(e,n){t[e]=n}),t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return new Promise(e)}function ne(e){return Promise.resolve(e)}function re(e){return Promise.reject(e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return null!=e}function oe(e){return void 0!==e}function ae(e){return"function"===typeof e}function se(e){return"object"===typeof e}function ue(e){return se(e)&&null!==e}function le(e){return se(e)&&!Array.isArray(e)}function ce(e){return"string"===typeof e||e instanceof String}function fe(e){return"number"===typeof e||e instanceof Number}function de(e){return pe()&&e instanceof Blob}function pe(){return"undefined"!==typeof Blob}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(X||(X={}));
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var he=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=X.NO_ERROR,this.sendPromise_=te(function(t,n){e.xhr_.addEventListener("abort",function(n){e.errorCode_=X.ABORT,t(e)}),e.xhr_.addEventListener("error",function(n){e.errorCode_=X.NETWORK_ERROR,t(e)}),e.xhr_.addEventListener("load",function(n){t(e)})})}return e.prototype.send=function(e,t,n,r){var i=this;if(this.sent_)throw L("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),ie(r)){var o=r;Y(o,function(e,t){i.xhr_.setRequestHeader(e,t.toString())})}return ie(n)?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw L("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw L("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw L("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){ie(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){ie(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),_e=function(){function e(){}return e.prototype.createXhrIo=function(){return new he},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function me(e){var t;try{t=JSON.parse(e)}catch(n){return null}return le(t)?t:null}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var n;try{n=e.makeFromUrl(t)}catch(r){return new e(t,"")}if(""===n.path)return n;throw A(t)},e.makeFromUrl=function(t){var n=null,r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var o="(/(.*))?$",a="(/([^?#]*).*)?$",s=new RegExp("^gs://"+r+o,"i"),u={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}for(var f="v[A-Za-z0-9_]+",d=c.replace(/[.]/g,"\\."),p=new RegExp("^https?://"+d+"/"+f+"/b/"+r+"/o"+a,"i"),h={bucket:1,path:3},_=[{regex:s,indices:u,postModify:i},{regex:p,indices:h,postModify:l}],m=0;m<_.length;m++){var v=_[m],b=v.regex.exec(t);if(b){var g=b[v.indices.bucket],y=b[v.indices.path];y||(y=""),n=new e(g,y),v.postModify(n);break}}if(null==n)throw T(t);return n},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){if(0==e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var n=e.slice(0,t);return n}function ge(e,t){var n=t.split("/").filter(function(e){return e.length>0}).join("/");return 0===e.length?n:e+"/"+n}function ye(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){return"https://"+c+"/v0"+e}function we(e){var t=encodeURIComponent,n="?";return Y(e,function(e,r){var i=t(e)+"="+t(r);n=n+i+"&"}),n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t){return t}var Ne=function(){function e(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Ee}return e}(),Te=null;function Ae(e){var t=ce(e);return!t||e.length<2?e:(e=e,ye(e))}function Se(){if(Te)return Te;var e=[];function t(e,t){return Ae(t)}e.push(new Ne("bucket")),e.push(new Ne("generation")),e.push(new Ne("metageneration")),e.push(new Ne("name","fullPath",!0));var n=new Ne("name");function r(e,t){return ie(t)?+t:t}n.xform=t,e.push(n);var i=new Ne("size");return i.xform=r,e.push(i),e.push(new Ne("timeCreated")),e.push(new Ne("updated")),e.push(new Ne("md5Hash",null,!0)),e.push(new Ne("cacheControl",null,!0)),e.push(new Ne("contentDisposition",null,!0)),e.push(new Ne("contentEncoding",null,!0)),e.push(new Ne("contentLanguage",null,!0)),e.push(new Ne("contentType",null,!0)),e.push(new Ne("metadata","customMetadata",!0)),Te=e,Te}function Ue(e,t){function n(){var n=e["bucket"],r=e["fullPath"],i=new ve(n,r);return t.makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function ke(e,t,n){for(var r={type:"file"},i=n.length,o=0;o<i;o++){var a=n[o];r[a.local]=a.xform(r,t[a.server])}return Ue(r,e),r}function Oe(e,t,n){var r=me(t);if(null===r)return null;var i=r;return ke(e,i,n)}function Ce(e,t){var n=me(t);if(null===n)return null;if(!ce(n["downloadTokens"]))return null;var r=n["downloadTokens"];if(0===r.length)return null;var i=encodeURIComponent,o=r.split(","),a=o.map(function(t){var n=e["bucket"],r=e["fullPath"],o="/b/"+i(n)+"/o/"+i(r),a=Re(o),s=we({alt:"media",token:t});return a+s});return a[0]}function xe(e,t){for(var n={},r=t.length,i=0;i<r;i++){var o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}function Ie(e){var t=e&&se(e);if(!t)throw"Expected Metadata object.";for(var n in e){var r=e[n];if("customMetadata"===n){if(!se(r))throw"Expected object for 'customMetadata' mapping."}else if(ue(r))throw"Mapping for '"+n+"' cannot be an object."}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e,t,n){for(var r=t.length,i=t.length,o=0;o<t.length;o++)if(t[o].optional){r=o;break}var a=r<=n.length&&n.length<=i;if(!a)throw C(r,i,e,n.length);for(o=0;o<n.length;o++)try{t[o].validator(n[o])}catch(s){throw s instanceof Error?O(o,e,s.message):O(o,e,s)}}var Le=function(){function e(e,t){var n=this;this.validator=function(t){n.optional&&!oe(t)||e(t)},this.optional=!!t}return e}();function Fe(e,t){return function(n){e(n),t(n)}}function Pe(e,t){function n(e){if(!ce(e))throw"Expected string."}var r;return r=e?Fe(n,e):n,new Le(r,t)}function qe(){function e(e){var t=e instanceof Uint8Array||e instanceof ArrayBuffer||pe()&&e instanceof Blob;if(!t)throw"Expected Blob or File."}return new Le(e)}function Me(e){return new Le(Ie,e)}function je(){function e(e){var t=fe(e)&&e>=0;if(!t)throw"Expected a number 0 or greater."}return new Le(e)}function We(e,t){function n(t){var n=null===t||ie(t)&&t instanceof Object;if(!n)throw"Expected an Object.";void 0!==e&&null!==e&&e(t)}return new Le(n,t)}function Be(e){function t(e){var t=null===e||ae(e);if(!t)throw"Expected a Function."}return new Le(t,e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ze(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Ge();if(void 0!==n){for(var r=new n,i=0;i<e.length;i++)r.append(e[i]);return r.getBlob()}if(pe())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}function He(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve=function(){function e(e,t){var n=0,r="";de(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,n){if(de(this.data_)){var r=this.data_,i=He(r,t,n);return null===i?null:new e(i)}var o=new Uint8Array(this.data_.buffer,t,n-t);return new e(o,!0)},e.getBlob=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(pe()){var r=t.map(function(t){return t instanceof e?t.data_:t});return new e(ze.apply(null,r))}var i=t.map(function(e){return ce(e)?M(F.RAW,e).data:e.data_}),o=0;i.forEach(function(e){o+=e.byteLength});var a=new Uint8Array(o),s=0;return i.forEach(function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]}),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,t){return-1!==e.indexOf(t)}function $e(e){return Array.prototype.slice.call(e)}function Ke(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}var Ze=function(){function e(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){if(!e)throw b()}function Qe(e,t){function n(n,r){var i=Oe(e,r,t);return Je(null!==i),i}return n}function Ye(e,t){function n(n,r){var i=Oe(e,r,t);return Je(null!==i),Ce(i,r)}return n}function et(e){function t(t,n){var r;return r=401===t.getStatus()?R():402===t.getStatus()?y(e.bucket):403===t.getStatus()?w(e.path):n,r.setServerResponseProp(n.serverResponseProp()),r}return t}function tt(e){var t=et(e);function n(n,r){var i=t(n,r);return 404===n.getStatus()&&(i=g(e.path)),i.setServerResponseProp(r.serverResponseProp()),i}return n}function nt(e,t,n){var r=t.fullServerUrl(),i=Re(r),o="GET",a=e.maxOperationRetryTime(),s=new Ze(i,o,Qe(e,n),a);return s.errorHandler=tt(t),s}function rt(e,t,n){var r=t.fullServerUrl(),i=Re(r),o="GET",a=e.maxOperationRetryTime(),s=new Ze(i,o,Ye(e,n),a);return s.errorHandler=tt(t),s}function it(e,t,n,r){var i=t.fullServerUrl(),o=Re(i),a="PATCH",s=xe(n,r),u={"Content-Type":"application/json; charset=utf-8"},l=e.maxOperationRetryTime(),c=new Ze(o,a,Qe(e,r),l);return c.headers=u,c.body=s,c.errorHandler=tt(t),c}function ot(e,t){var n=t.fullServerUrl(),r=Re(n),i="DELETE",o=e.maxOperationRetryTime();function a(e,t){}var s=new Ze(r,i,a,o);return s.successCodes=[200,204],s.errorHandler=tt(t),s}function at(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function st(e,t,n){var r=ee(n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=at(null,t)),r}function ut(e,t,n,r,i){var o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var l=st(t,r,i),c=xe(l,n),f="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+u+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+u+"--",p=Ve.getBlob(f,r,d);if(null===p)throw S();var h={name:l["fullPath"]},_=Re(o),m="POST",v=e.maxUploadRetryTime(),b=new Ze(_,m,Qe(e,n),v);return b.urlParams=h,b.headers=a,b.body=p.uploadData(),b.errorHandler=et(t),b}var lt=function(){function e(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}return e}();function ct(e,t){var n;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){Je(!1)}var r=t||["active"];return Je(Xe(r,n)),n}function ft(e,t,n,r,i){var o=t.bucketOnlyServerUrl(),a=st(t,r,i),s={name:a["fullPath"]},u=Re(o),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},f=xe(a,n),d=e.maxUploadRetryTime();function p(e,t){var n;ct(e);try{n=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){Je(!1)}return Je(ce(n)),n}var h=new Ze(u,l,p,d);return h.urlParams=s,h.headers=c,h.body=f,h.errorHandler=et(t),h}function dt(e,t,n,r){var i={"X-Goog-Upload-Command":"query"};function o(e,t){var n,i=ct(e,["active","final"]);try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(a){Je(!1)}var o=parseInt(n,10);return Je(!isNaN(o)),new lt(o,r.size(),"final"===i)}var a="POST",s=e.maxUploadRetryTime(),u=new Ze(n,a,o,s);return u.headers=i,u.errorHandler=et(t),u}var pt=262144;function ht(e,t,n,r,i,o,a,s){var u=new lt(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw U();var l=u.total-u.current,c=l;i>0&&(c=Math.min(c,i));var f=u.current,d=f+c,p=c===l?"upload, finalize":"upload",h={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":u.current},_=r.slice(f,d);if(null===_)throw S();function m(e,n){var i,a=ct(e,["active","final"]),s=u.current+c,l=r.size();return i="final"===a?Qe(t,o)(e,n):null,new lt(s,l,"final"===a,i)}var v="POST",b=t.maxUploadRetryTime(),g=new Ze(n,v,m,b);return g.headers=h,g.body=_.uploadData(),g.progressCallback=s||null,g.errorHandler=et(e),g}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t=function(){function e(e,t,n){var r=ae(e)||ie(t)||ie(n);if(r)this.next=e,this.error=t||null,this.complete=n||null;else{var i=e;this.next=i.next||null,this.error=i.error||null,this.complete=i.complete||null}}return e}(),mt=function(){function e(e,t,n,r,i,o){this.bytesTransferred=e,this.totalBytes=t,this.state=n,this.metadata=r,this.task=i,this.ref=o}return e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];ne(!0).then(function(){e.apply(null,t)})}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt=function(){function e(e,t,n,r,i,o){var a=this;void 0===o&&(o=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=n,this.blob_=i,this.metadata_=o,this.mappings_=r,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=K.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(m.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(K.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(m.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(K.ERROR))},this.promise_=te(function(e,t){a.resolve_=e,a.reject_=t,a.start_()}),this.promise_.then(null,function(){})}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(n,r){e.updateProgress_(t+n)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===K.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.authWrapper_.getAuthToken().then(function(n){switch(t.state_){case K.RUNNING:e(n);break;case K.CANCELING:t.transition_(K.CANCELED);break;case K.PAUSING:t.transition_(K.PAUSED);break;default:}})},e.prototype.createResumable_=function(){var e=this;this.resolveToken_(function(t){var n=ft(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),r=e.authWrapper_.makeRequest(n,t);e.request_=r,r.getPromise().then(function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()},e.errorHandler_)})},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_(function(n){var r=dt(e.authWrapper_,e.location_,t,e.blob_),i=e.authWrapper_.makeRequest(r,n);e.request_=i,i.getPromise().then(function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()},e.errorHandler_)})},e.prototype.continueUpload_=function(){var e=this,t=pt*this.chunkMultiplier_,n=new lt(this.transferred_,this.blob_.size()),r=this.uploadUrl_;this.resolveToken_(function(i){var o;try{o=ht(e.location_,e.authWrapper_,r,e.blob_,t,e.mappings_,n,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(K.ERROR)}var a=e.authWrapper_.makeRequest(o,i);e.request_=a,a.getPromise().then(function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(K.SUCCESS)):e.completeTransitions_()},e.errorHandler_)})},e.prototype.increaseMultiplier_=function(){var e=pt*this.chunkMultiplier_;e<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_(function(t){var n=nt(e.authWrapper_,e.location_,e.mappings_),r=e.authWrapper_.makeRequest(n,t);e.request_=r,r.getPromise().then(function(t){e.request_=null,e.metadata_=t,e.transition_(K.SUCCESS)},e.metadataErrorHandler_)})},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_(function(t){var n=ut(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),r=e.authWrapper_.makeRequest(n,t);e.request_=r,r.getPromise().then(function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(K.SUCCESS)},e.errorHandler_)})},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case K.CANCELING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case K.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case K.RUNNING:var t=this.state_===K.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case K.PAUSED:this.state_=e,this.notifyObservers_();break;case K.CANCELED:this.error_=N(),this.state_=e,this.notifyObservers_();break;case K.ERROR:this.state_=e,this.notifyObservers_();break;case K.SUCCESS:this.state_=e,this.notifyObservers_();break}},e.prototype.completeTransitions_=function(){switch(this.state_){case K.PAUSING:this.transition_(K.PAUSED);break;case K.CANCELING:this.transition_(K.CANCELED);break;case K.RUNNING:this.start_();break;default:break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=J(this.state_);return new mt(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),e.prototype.on=function(e,t,n,r){function i(t){if(e!==$.STATE_CHANGED)throw"Expected one of the event types: ["+$.STATE_CHANGED+"]."}void 0===t&&(t=void 0),void 0===n&&(n=void 0),void 0===r&&(r=void 0);var o="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=Be(!0).validator,s=We(null,!0).validator;function u(e){try{return void a(e)}catch(n){}try{s(e);var t=oe(e["next"])||oe(e["error"])||oe(e["complete"]);if(!t)throw"";return}catch(n){throw o}}var l=[Pe(i),We(u,!0),Be(!0),Be(!0)];De("on",l,arguments);var c=this;function f(e){function t(t,n,i){null!==e&&De("on",e,arguments);var o=new _t(t,n,r);return c.addObserver_(o),function(){c.removeObserver_(o)}}return t}function d(e){if(null===e)throw o;u(e)}var p=[We(d),Be(!0),Be(!0)],h=!(oe(t)||oe(n)||oe(r));return h?f(p):f(null)(t,n,r)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){Ke(this.observers_,e)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_();var t=$e(this.observers_);t.forEach(function(t){e.notifyObserver_(t)})},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(J(this.state_)){case Z.SUCCESS:vt(this.resolve_.bind(null,this.snapshot))();break;case Z.CANCELED:case Z.ERROR:var t=this.reject_;vt(t.bind(null,this.error_))();break;default:e=!1;break}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){var t=J(this.state_);switch(t){case Z.RUNNING:case Z.PAUSED:null!==e.next&&vt(e.next.bind(e,this.snapshot))();break;case Z.SUCCESS:null!==e.complete&&vt(e.complete.bind(e))();break;case Z.CANCELED:case Z.ERROR:null!==e.error&&vt(e.error.bind(e,this.error_))();break;default:null!==e.error&&vt(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){De("resume",[],arguments);var e=this.state_===K.PAUSED||this.state_===K.PAUSING;return e&&this.transition_(K.RUNNING),e},e.prototype.pause=function(){De("pause",[],arguments);var e=this.state_===K.RUNNING;return e&&this.transition_(K.PAUSING),e},e.prototype.cancel=function(){De("cancel",[],arguments);var e=this.state_===K.RUNNING||this.state_===K.PAUSING;return e&&this.transition_(K.CANCELING),e},e}(),gt=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof ve?t:ve.makeFromUrl(t)}return e.prototype.toString=function(){return De("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,n){return new e(t,n)},e.prototype.mappings=function(){return Se()},e.prototype.child=function(e){De("child",[Pe()],arguments);var t=ge(this.location.path,e),n=new ve(this.location.bucket,t);return this.newRef(this.authWrapper,n)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=be(this.location.path);if(null===e)return null;var t=new ve(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new ve(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return ye(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),De("put",[qe(),Me(!0)],arguments),this.throwIfRoot_("put"),new bt(this,this.authWrapper,this.location,this.mappings(),new Ve(e),t)},e.prototype.putString=function(e,t,n){void 0===t&&(t=F.RAW),De("putString",[Pe(),Pe(P,!0),Me(!0)],arguments),this.throwIfRoot_("putString");var r=M(t,e),i=ee(n);return!ie(i["contentType"])&&ie(r.contentType)&&(i["contentType"]=r.contentType),new bt(this,this.authWrapper,this.location,this.mappings(),new Ve(r.data,!0),i)},e.prototype.delete=function(){De("delete",[],arguments),this.throwIfRoot_("delete");var e=this;return this.authWrapper.getAuthToken().then(function(t){var n=ot(e.authWrapper,e.location);return e.authWrapper.makeRequest(n,t).getPromise()})},e.prototype.getMetadata=function(){De("getMetadata",[],arguments),this.throwIfRoot_("getMetadata");var e=this;return this.authWrapper.getAuthToken().then(function(t){var n=nt(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(n,t).getPromise()})},e.prototype.updateMetadata=function(e){De("updateMetadata",[Me()],arguments),this.throwIfRoot_("updateMetadata");var t=this;return this.authWrapper.getAuthToken().then(function(n){var r=it(t.authWrapper,t.location,e,t.mappings());return t.authWrapper.makeRequest(r,n).getPromise()})},e.prototype.getDownloadURL=function(){De("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL");var e=this;return this.authWrapper.getAuthToken().then(function(t){var n=rt(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(n,t).getPromise().then(function(e){if(null===e)throw k();return e})})},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw I(e)},e}(),yt=function(){function e(e){this.promise_=re(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){void 0===e&&(e=!1)},e}(),Rt=function(){function e(){this.map_={},this.id_=h}return e.prototype.addRequest=function(e){var t=this.id_;this.id_++,this.map_[t]=e;var n=this;function r(){delete n.map_[t]}e.getPromise().then(r,r)},e.prototype.clear=function(){Y(this.map_,function(e,t){t&&t.cancel(!0)}),this.map_={}},e}(),wt=function(){function e(t,n,r,i,o){if(this.bucket_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var a=this.app_.options;ie(a)&&(this.bucket_=e.extractBucket_(a))}this.storageRefMaker_=n,this.requestMaker_=r,this.pool_=o,this.service_=i,this.maxOperationRetryTime_=d,this.maxUploadRetryTime_=p,this.requestMap_=new Rt}return e.extractBucket_=function(e){var t=e[f]||null;if(null==t)return null;var n=ve.makeFromBucketSpec(t);return n.bucket},e.prototype.getAuthToken=function(){return null!==this.app_&&ie(this.app_.INTERNAL)&&ie(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(e){return null!==e?e.accessToken:null},function(e){return null}):ne(null)},e.prototype.bucket=function(){if(this.deleted_)throw x();return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new yt(x());var n=this.requestMaker_(e,t,this.pool_);return this.requestMap_.addRequest(n),n},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e,t,n){var r=1,i=null,o=!1,a=0;function s(){return 2===a}var u=!1;function l(){u||(u=!0,t.apply(null,arguments))}function c(t){i=setTimeout(function(){i=null,e(f,s())},t)}function f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!u)if(e)l.apply(null,arguments);else{var i,f=s()||o;if(f)l.apply(null,arguments);else r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),c(i)}}var d=!1;function p(e){d||(d=!0,u||(null!==i?(e||(a=2),clearTimeout(i),c(0)):e||(a=1)))}return c(0),setTimeout(function(){o=!0,p(!0)},n),p}function Nt(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(){function e(e,t,n,r,i,o,a,s,u,l,c){this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=l,this.timeout_=u,this.pool_=c;var f=this;this.promise_=te(function(e,t){f.resolve_=e,f.reject_=t,f.start_()})}return e.prototype.start_=function(){var e=this;function t(t,n){if(n)t(!1,new At(!1,null,!0));else{var r=e.pool_.createXhrIo();e.pendingXhr_=r,null!==e.progressCallback_&&r.addUploadProgressListener(i),r.send(e.url_,e.method_,e.body_,e.headers_).then(function(n){null!==e.progressCallback_&&n.removeUploadProgressListener(i),e.pendingXhr_=null,n=n;var r=n.getErrorCode()===X.NO_ERROR,o=n.getStatus();if(r&&!e.isRetryStatusCode_(o)){var a=Xe(e.successCodes_,o);t(!0,new At(a,n))}else{var s=n.getErrorCode()===X.ABORT;t(!1,new At(!1,null,s))}})}function i(t){var n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}}function n(t,n){var r=e.resolve_,i=e.reject_,o=n.xhr;if(n.wasSuccessCode)try{var a=e.callback_(o,o.getResponseText());oe(a)?r(a):r()}catch(u){i(u)}else if(null!==o){var s=b();s.setServerResponseProp(o.getResponseText()),e.errorCallback_?i(e.errorCallback_(o,s)):i(s)}else if(n.canceled){s=e.appDelete_?x():N();i(s)}else{s=E();i(s)}}this.canceled_?n(!1,new At(!1,null,!0)):this.backoffId_=Et(t,n,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&Nt(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,n=[408,429],r=Xe(n,e),i=Xe(this.additionalRetryCodes_,e);return t||r||i},e}(),At=function(){function e(e,t,n){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!n}return e}();function St(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Ut(e){var t="undefined"!==typeof l.a?l.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function kt(e,t,n){var r=we(e.urlParams),i=e.url+r,o=ee(e.headers);return St(o,t),Ut(o),new Tt(i,e.method,o,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot=function(){function e(e,t,n){function r(e,t){return new gt(e,t)}if(this.bucket_=null,this.authWrapper_=new wt(e,r,kt,this,t),this.app_=e,null!=n)this.bucket_=ve.makeFromBucketSpec(n);else{var i=this.authWrapper_.bucket();null!=i&&(this.bucket_=new ve(i,""))}this.internals_=new Ct(this)}return e.prototype.ref=function(e){function t(e){if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(De("ref",[Pe(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var n=new gt(this.authWrapper_,this.bucket_);return null!=e?n.child(e):n},e.prototype.refFromURL=function(e){function t(e){if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{ve.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return De("refFromURL",[Pe(t,!1)],arguments),new gt(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){De("setMaxUploadRetryTime",[je()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){De("setMaxOperationRetryTime",[je()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),e}(),Ct=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),ne(void 0)},e}(),xt="storage";function It(e,t,n){return new Ot(e,new _e,n)}function Dt(e){var t={TaskState:Z,TaskEvent:$,StringFormat:F,Storage:Ot,Reference:gt};e.INTERNAL.registerService(xt,It,t,void 0,!0)}Dt(l.a);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lt,Ft,Pt=n("c64e"),qt=n.n(Pt),Mt=n("2f62"),jt={mixins:[o["a"]],props:{metadata:Object,filename:""},data:function(){return{progressUpload:0,file:File,uploadTask:""}},methods:i()({},Object(Mt["b"])("settings",["addFile"]),{upload:function(){var e=this;console.log("filename",this.filename),this.files.forEach(function(t){var n=qt()(),r="media/"+n;console.log("filePath",n);var i=s.a.storage().ref().child(r).put(t,e.metadata);i.on("state_changed",function(t){e.uploadSize=t.totalBytes,e.uploadedSize=t.bytesTransferred},null,function(){i.snapshot.ref.getDownloadURL().then(function(i){e.$emit("upload",{url:i,id:r,name:t.name,size:t.size,uploadedDate:new Date,lastModified:t.lastModified,description:""});var o={filePath:n,filename:e.filename,downloadurl:i};e.addFile(o),e.removeFile(t)})})})}})},Wt=jt,Bt=n("2877"),Gt=Object(Bt["a"])(Wt,Lt,Ft,!1,null,null,null);t["default"]=Gt.exports},f3ea:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("div",[[n("q-list",{staticClass:"q-mb-md",attrs:{bordered:"",padding:""}},[n("q-table",{attrs:{title:"My Friends",data:e.data,columns:e.columns,"row-key":"name"},scopedSlots:e._u([{key:"body-cell-actions",fn:function(t){return[n("q-td",{staticClass:"q-gutter-x-sm",staticStyle:{"text-align":"center"}},[n("q-btn",{attrs:{round:"",outline:"",color:"primary",icon:"edit"},on:{click:function(n){return e.modalEditFriend(t.row)}}})],1)]}}])})],1),n("div",{staticClass:"absolute-bottom text-center q-mb-lg no-pointer-events"},[n("q-btn",{staticClass:"all-pointer-events",attrs:{round:"",color:"primary",size:"24px",icon:"add"},on:{click:function(t){e.showAddFriend=!0}}})],1)]],2),[n("div",{staticClass:"q-gutter-md",staticStyle:{"max-width":"335px"}},[n("q-input",{attrs:{outlined:"",label:"File Name"},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}})],1),n("QFirebaseUploaderBase",{attrs:{filename:e.fileName,label:"Upload Media",metadata:e.metadata,"auto-upload":"",accept:".mp3",multiple:""},on:{upload:e.addFile}}),n("br"),n("q-btn",{attrs:{to:"/listening",color:"primary",icon:"people",label:"Listening Music",flat:""}})],n("q-dialog",{model:{value:e.showAddFriend,callback:function(t){e.showAddFriend=t},expression:"showAddFriend"}},[n("add-friend",{on:{close:function(t){e.showAddFriend=!1}}})],1),n("q-dialog",{attrs:{persistent:""},model:{value:e.showEditFriend,callback:function(t){e.showEditFriend=t},expression:"showEditFriend"}},[n("edit-friend",{attrs:{friend:e.tmpFriendData,id:e.tmpFriendID},on:{close:function(t){e.showEditFriend=!1}}})],1)],2)},i=[],o=(n("456d"),n("ac6a"),n("cadf"),n("8615"),n("3156")),a=n.n(o),s=n("2f62"),u=(n("18d6"),{data:function(){return{showAddFriend:!1,showEditFriend:!1,tmpFriendData:"",tmpFriendID:"",friendIds:"",metadata:{},fileName:"",columns:[{name:"firstName",required:!0,label:"First Name",align:"left",field:function(e){return e.firstName},format:function(e){return"".concat(e)},sortable:!0},{name:"lastName",label:"Last Name",field:"lastName",sortable:!0},{name:"email",label:"Email Address",field:"email"},{name:"friendID",label:"Friend ID",field:"friendID"},{name:"actions",field:"id",label:"Actions",sortable:!1,required:!0,align:"center"}],data:[]}},computed:a()({},Object(s["c"])("settings",["friends"]),{getFriends:function(){return console.log("friend",this.friends),{friends:Object.values(this.friends)}}}),methods:{modalEditFriend:function(e){console.log("props",e),this.tmpFriendData=e,this.tmpFriendID=e.friendID,console.log("friendData",this.tmpFriendData,this.tmpFriendID),this.showEditFriend=!0},addFile:function(e){Vue.set(this.gallery,e.id,e)}},mounted:function(){var e=this;this.$root.$on("showAddFriend",function(){e.showAddFriend=!0}),this.data=Object.values(this.friends),console.log("d",Object.values(this.friends))},watch:{friends:function(e){console.log("change",e),this.friendsIds=Object.keys(this.friends),console.log("friendlocation",this.friends),this.data=Object.values(this.friends),console.log("new dd",Object.values(this.friends))}},components:{"add-friend":n("324a").default,"edit-friend":n("0c56").default,QFirebaseUploaderBase:n("e93f").default}}),l=u,c=(n("8e23"),n("2877")),f=Object(c["a"])(l,r,i,!1,null,null,null);t["default"]=f.exports}}]);