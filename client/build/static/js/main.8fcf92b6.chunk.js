(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t){e.exports={API_URL:""}},18:function(e,t,c){},41:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),s=c.n(n),i=c(13),l=c.n(i),o=(c(41),c.p,c(18),c(19),c(32)),d=c.n(o),r=c(14),j=c.n(r),b=d.a.create({baseURL:"".concat(j.a.API_URL)}),u=c(12),h=c(67),O=c(68);var p=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),o=(l[0],l[1],Object(n.useState)(!1)),d=Object(u.a)(o,2),r=d[0],p=d[1],x=Object(n.useState)(""),m=Object(u.a)(x,2),v=m[0],g=m[1],y=Object(n.useState)(""),f=Object(u.a)(y,2),C=f[0],S=f[1],A=Object(n.useState)(""),B=Object(u.a)(A,2),L=B[0],R=B[1],k=function(){return p(!1)};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsxs)("div",{class:"input-group mb-3",children:[Object(a.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},class:"form-control",placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(a.jsx)("div",{class:"input-group-append",children:Object(a.jsx)("button",{class:"btn btn-outline-secondary",type:"button",onClick:function(){var e={name:c};b.post("".concat(j.a.API_URL,"/getDB"),e).then((function(e){p(!0),g(e.data.median),S(e.data.average),R(e.data.small)})).catch((function(e){console.log(e)}))},children:"Button"})})]}),Object(a.jsx)("div",{class:"modal",tabindex:"-1",role:"dialog",children:Object(a.jsx)("div",{class:"modal-dialog",role:"document",children:Object(a.jsxs)("div",{class:"modal-content",children:[Object(a.jsxs)("div",{class:"modal-header",children:[Object(a.jsx)("h5",{class:"modal-title",children:"Modal title"}),Object(a.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsx)("div",{class:"modal-body",children:Object(a.jsx)("p",{children:"Modal body text goes here."})}),Object(a.jsxs)("div",{class:"modal-footer",children:[Object(a.jsx)("button",{type:"button",class:"btn btn-primary",children:"Save changes"}),Object(a.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"})]})]})})}),Object(a.jsxs)(h.a,{show:r,onHide:k,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsx)(h.a.Title,{children:"Modal heading"})}),Object(a.jsxs)(h.a.Body,{children:[L,"\u0564\u0580\u0561\u0574--",v,"\u0564\u0580\u0561\u0574--",C,"\u0564\u0580\u0561\u0574"]}),Object(a.jsxs)(h.a.Footer,{children:[Object(a.jsx)(O.a,{variant:"secondary",onClick:k,children:"Close"}),Object(a.jsx)(O.a,{variant:"primary",onClick:k,children:"Save Changes"})]})]})]})})},x=c(34),m=c(5);var v=function(){return Object(a.jsx)(x.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(m.c,{children:Object(a.jsx)(m.a,{exact:!0,path:"/",component:p})})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),g()}},[[65,1,2]]]);
//# sourceMappingURL=main.8fcf92b6.chunk.js.map