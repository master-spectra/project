(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[5],{101:function(e,t,s){"use strict";s.d(t,"c",(function(){return m})),s.d(t,"b",(function(){return o})),s.d(t,"a",(function(){return u}));var n=s(142),a=(s(0),s(45)),r=s(1),c=function(e,t){return n.b().trim().min(e,Object(r.jsx)(a.a,{})).max(t,Object(r.jsx)(a.a,{})).required(Object(r.jsx)(a.a,{}))},i=function(e){return n.a().shape(e)},m=i({status:c(1,50)}),o=i({postText:c(1,50)}),u=i({messageText:c(1,50)})},143:function(e,t,s){e.exports={message:"message_message__1O64f"}},246:function(e,t,s){e.exports={formSendPost:"messageForm_formSendPost__1rEcR",formTitle:"messageForm_formTitle__386zR",formInput:"messageForm_formInput__18iuN",formBtn:"messageForm_formBtn__3ZKY6"}},247:function(e,t,s){e.exports={myMessage:"myMessege_myMessage__37YXA",img:"myMessege_img__3uPPf",textWrap:"myMessege_textWrap__1Q5p4",text:"myMessege_text__3lbfn",answer:"myMessege_answer__3FQzI"}},256:function(e,t,s){"use strict";s.r(t);var n=s(8),a=s(10),r=s(24),c=(s(0),s(143)),i=s.n(c),m=s(23),o=s(101),u=s(246),j=s.n(u),f=s(1),b=Object(n.b)((function(e){return{inputValue:Object(a.j)(e)}}),(function(){return{}}))((function(e){var t=e.onSubmit,s=function(e,s){t(e),s()};return Object(f.jsx)(m.d,{initialValues:{messageText:""},onSubmit:function(e,t){var n=t.resetForm;return s(e,n)},validationSchema:o.a,children:Object(f.jsxs)(m.c,{className:j.a.formSendPost,children:[Object(f.jsx)("h3",{className:j.a.formTitle,children:"My Post"}),Object(f.jsx)(m.a,{name:"messageText"}),Object(f.jsx)(m.b,{name:"messageText",type:"text",component:"input",className:j.a.formInput}),Object(f.jsx)("button",{type:"submit",className:j.a.formBtn,children:"send"})]})})})),x=s(247),g=s.n(x),l=function(e){var t=e.text;return Object(f.jsxs)("div",{className:g.a.myMessage,children:[Object(f.jsx)("div",{className:g.a.img}),Object(f.jsxs)("div",{className:g.a.textWrap,children:[Object(f.jsx)("p",{className:g.a.text,children:t}),Object(f.jsx)("button",{className:g.a.answer,children:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"})]})]})},d=function(e){return e.messageList.map((function(e,t){return Object(f.jsx)(l,{text:e.text},t)}))},_=Object(n.b)((function(e){return{messageList:Object(a.k)(e)}}),(function(e){return{addYourMessage:function(t,s){e(Object(r.a)(t,s))}}}))((function(e){var t=e.messageList,s=e.addYourMessage;return Object(f.jsxs)("div",{className:i.a.message,children:[Object(f.jsx)("div",{className:i.a.listMessage,children:Object(f.jsx)(d,{messageList:t})}),Object(f.jsx)(b,{onSubmit:function(e){return function(e){s(e,"message/ADD MESSAGE")}(e)}})]})}));t.default=_}}]);
//# sourceMappingURL=5.e3642be0.chunk.js.map