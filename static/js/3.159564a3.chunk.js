(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[3],{246:function(e,t,s){e.exports={profileWrap:"user_profileWrap__-W5Zj",backgroundImage:"user_backgroundImage__3jOb-",user:"user_user__3IDSu",imgUser:"user_imgUser__2GiSe",userInfoWrap:"user_userInfoWrap__1zVol",userInfo:"user_userInfo__2Mpk_"}},251:function(e,t,s){e.exports={status:"status_status__2Gh1B",info:"status_info__7XY46"}},252:function(e,t,s){e.exports={myPost:"myPost_myPost__1HBTl",img:"myPost_img__3Q4Yx",textWrap:"myPost_textWrap__2IUtZ",text:"myPost_text__25K_K",likeWrap:"myPost_likeWrap__3APgq",like:"myPost_like__Xy2Ov",likeCounter:"myPost_likeCounter__V_30l"}},253:function(e,t,s){e.exports={formSendPost:"postForm_formSendPost__15P5A",formTitle:"postForm_formTitle__13ghg",formInput:"postForm_formInput__QDS8N",formBtn:"postForm_formBtn__2Rtsb"}},256:function(e,t,s){"use strict";s.r(t),s.d(t,"ProfileConteinerAPI",(function(){return Y}));var n=s(10),o=s(0),r=s.n(o),a=s(11),c=s(39),i=s(75),u=s(9),l=s(31),b=s(246),d=s.n(b),j=s(77),m=s(22),p=s(74),f=s(1),x=function(e){var t=e.onSubmit,s=e.userId,n=e.photos;return Object(f.jsx)(m.d,{initialValues:{photos:n,userId:s,fullName:"",aboutMe:"",lookingForAJob:"",lookingForAJobDescription:"",vk:"",facebook:"",github:""},validationSchema:p.d,onSubmit:t,children:Object(f.jsxs)(m.c,{children:[Object(f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr"},children:[Object(f.jsx)(m.b,{name:"fullName",placeholder:"fullName",style:{display:"block",margin:"10px 0"}}),Object(f.jsx)(m.a,{name:"fullName"})]}),Object(f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr"},children:[Object(f.jsx)(m.b,{component:"input",name:"aboutMe",placeholder:"aboutMe",style:{display:"block",margin:"10px 0"}}),Object(f.jsx)(m.a,{name:"aboutMe"})]}),Object(f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr"},children:[Object(f.jsx)(m.b,{component:"input",name:"lookingForAJob",placeholder:"lookingForAJob",style:{display:"block",margin:"10px 0"}}),Object(f.jsx)(m.a,{name:"lookingForAJob"})]}),Object(f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr"},children:[Object(f.jsx)(m.b,{component:"input",name:"lookingForAJobDescription",placeholder:"descriptionJobs",style:{display:"block",margin:"10px 0"}}),Object(f.jsx)(m.a,{name:"lookingForAJobDescription"})]}),Object(f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr"},children:[Object(f.jsx)(m.b,{component:"input",name:"vk",placeholder:"vk",style:{display:"block",margin:"10px 0"}}),Object(f.jsx)(m.a,{name:"vk"})]}),Object(f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr"},children:[Object(f.jsx)(m.b,{component:"input",name:"facebook",placeholder:"facebook",style:{display:"block",margin:"10px 0"}}),Object(f.jsx)(m.a,{name:"facebook"})]}),Object(f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr"},children:[Object(f.jsx)(m.b,{component:"input",name:"github",placeholder:"github",style:{display:"block",margin:"10px 0"}}),Object(f.jsx)(m.a,{name:"github"})]}),Object(f.jsx)("button",{type:"button"}),Object(f.jsx)("button",{type:"submit",children:"save changes"})]})})},O=function(e){return e||"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"},h=function(e){var t=e.currentProfile;return Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:d.a.userInfo,children:"\u0418\u043c\u044f: ".concat(O(t.fullName))}),Object(f.jsx)("p",{className:d.a.userInfo,children:"\u041e \u043c\u043d\u0435: ".concat(O(t.aboutMe))}),Object(f.jsx)("p",{className:d.a.userInfo,children:"\u0420\u0430\u0431\u043e\u0442\u0430: ".concat(O(t.lookingForAJob)+"")}),Object(f.jsx)("p",{className:d.a.userInfo,children:"\u041e \u0440\u0430\u0431\u043e\u0442\u0435: ".concat(O(t.lookingForAJobDescription))})]})},g=s(251),_=s.n(g),y=s(34),v=Object(a.b)((function(e){return{status:Object(u.q)(e)}}),(function(){return{}}))((function(e){var t=e.status,s=e.onSubmit,n=e.userId,r=Object(o.useState)(!1),a=Object(c.a)(r,2),i=a[0],u=a[1];return i?Object(f.jsx)(m.d,{initialValues:{status:""},onSubmit:function(e,t){var n=t.resetForm;s(e),n(),u(!i)},validationSchema:p.e,children:Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.a,{name:"status"}),Object(f.jsx)(m.b,{type:"text",name:"status",component:y.b}),Object(f.jsx)("button",{type:"submit",className:_.a.btn,children:"Save"})]})}):Object(f.jsx)("div",{className:_.a.status,onDoubleClick:function(){n||u(!i)},children:Object(f.jsxs)("p",{className:_.a.info,children:["\u041e \u043c\u043d\u0435: ",t||"----------------------"]})})})),P=function(e){var t=e.updatePhotos;return Object(f.jsx)("form",{action:"#",children:Object(f.jsx)("input",{type:"file",onChange:function(e){return t(e.target.files[0])}})})},k=Object(a.b)((function(e){return{currentProfile:Object(u.b)(e)}}),(function(e){return{updatePhotos:function(t){e(Object(l.i)(t))},updateProfile:function(t){e(Object(l.j)(t))}}}))((function(e){var t=e.userId,s=e.updatePhotos,n=e.currentProfile,o=e.editMode,r=e.changeEditMode,a=e.onSubmit,c=e.updatedProfile;return Object(f.jsxs)("div",{className:d.a.profileWrap,children:[Object(f.jsx)("div",{className:d.a.backgroundImage}),Object(f.jsxs)("div",{className:d.a.user,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:d.a.imgUser,src:n.photos&&n.photos.small?n.photos.small:j.a,alt:"#"})}),Object(f.jsxs)("div",{className:d.a.userInfoWrap,children:[o?Object(f.jsx)(x,{photos:n.photos,userId:n.id,onSubmit:c}):Object(f.jsx)(h,{currentProfile:n}),Object(f.jsx)(v,{userId:t,onSubmit:a}),!o&&t===n.id||!t?Object(f.jsx)("button",{onClick:function(){return r(!o)},children:"Change profile info"}):null,t!==n.id&&t?null:Object(f.jsx)(P,{updatePhotos:s})]})]})]})})),I=Object(a.b)((function(e){return{currentProfile:Object(u.b)(e)}}),(function(e){return{updateStatus:function(t){e(Object(l.k)(t))},updateProfile:function(t){e(Object(l.j)(t))}}}))((function(e){var t=e.userId,s=e.currentProfile,n=e.updateStatus,r=e.updateProfile,a=Object(o.useState)(!1),u=Object(c.a)(a,2),l=u[0],b=u[1];return s?Object(f.jsx)(k,{userId:t,editMode:l,changeEditMode:b,onSubmit:function(e){n(e.status)},updatedProfile:function(e){r(e),b(!1)}}):Object(f.jsx)(i.a,{})})),S=s(252),N=s.n(S),C=function(e){var t=e.postData,s=r.a.createRef();return Object(f.jsxs)("div",{ref:s,className:N.a.myPost,children:[Object(f.jsx)("div",{className:N.a.img}),Object(f.jsx)("div",{className:N.a.textWrap,children:Object(f.jsx)("p",{className:N.a.text,children:t.text})})]})},T=function(e){var t=e.userComment;return t.map((function(e,s){var n={text:e.comment,status:t,index:s};return Object(f.jsx)(C,{postData:n},s)}))},M=s(253),F=s.n(M),A=function(e){var t=e.onSubmit,s=function(e,s){t(e),s()};return Object(f.jsx)(m.d,{initialValues:{postText:""},onSubmit:function(e,t){var n=t.resetForm;return s(e,n)},validationSchema:p.c,children:Object(f.jsxs)(m.c,{className:F.a.formSendPost,children:[Object(f.jsx)("h3",{className:F.a.formTitle,children:"My Post"}),Object(f.jsx)(m.a,{name:"postText"}),Object(f.jsx)(m.b,{name:"postText",type:"text",component:"input",className:F.a.formInput}),Object(f.jsx)("button",{type:"submit",className:F.a.formBtn,children:"send"})]})})},D=function(e){var t=e.addYourMessage,s=e.userData;return Object(f.jsxs)("div",{children:[Object(f.jsx)(I,{userId:s.userId}),Object(f.jsx)(A,{onSubmit:function(e){return t(e,"profile/ADD POST")}}),Object(f.jsx)("div",{children:Object(f.jsx)(T,{userComment:s.userComment})})]})},J=s(4),U=s(26),W=s(15),Y=function(e){var t={userId:e.match.params.userId,userComment:Object(n.a)(e.userComment)};return Object(o.useEffect)((function(){e.match.params.userId||e.getMyProfile(),e.profileThunk(e.match.params.userId||e.userId),e.getStatus(e.match.params.userId||e.userId)}),[e.match.params.userId]),Object(o.useEffect)((function(){e.isUpdatePhoto&&(e.profileThunk(e.userId),e.setIsUpdatePhoto(!1)),e.isUpdatedProfile&&(e.profileThunk(e.userId),e.changeIsUpdatedProfile(!1))})),Object(f.jsx)(D,{userData:t,addYourMessage:e.addYourMessage})},B=Object(U.d)(Object(a.b)((function(e){return{userComment:Object(u.s)(e),userId:Object(u.d)(e),isUpdatePhoto:Object(u.i)(e),profile:Object(u.b)(e),isUpdatedProfile:Object(u.j)(e)}}),(function(e){return{profileThunk:function(t){e(Object(l.d)(t))},getStatus:function(t){e(Object(l.b)(t))},getMyProfile:function(){e(Object(W.d)())},addYourMessage:function(t,s){e(Object(l.a)(t,s))},setIsUpdatePhoto:function(t){e(Object(l.h)(t))},changeIsUpdatedProfile:function(t){e(Object(l.f)(t))}}})),J.f)(Y);t.default=B}}]);
//# sourceMappingURL=3.159564a3.chunk.js.map