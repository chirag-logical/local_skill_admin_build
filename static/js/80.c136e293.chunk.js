(this["webpackJsonplocal-skills-admin-dashboard"]=this["webpackJsonplocal-skills-admin-dashboard"]||[]).push([[80],{1603:function(t,n,e){"use strict";e.r(n);var i=e(1),o=e(497),s=e(99),c=e(556),r=e.n(c),l=e(557),a=e.n(l),u=e(10),m=a()(r.a),b=function(){return Object(u.jsxs)(s.l,{children:[Object(u.jsx)(s.p,{children:Object(u.jsx)(s.v,{tag:"h4",children:"Types"})}),Object(u.jsxs)(s.m,{children:[Object(u.jsx)(s.u,{className:"mb-0",children:'SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info".'}),Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(s.i,{color:"success",onClick:function(){return m.fire({title:"Good job!",text:"You clicked the button!",icon:"success",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Success"}),Object(u.jsx)(s.i,{color:"danger",onClick:function(){return m.fire({title:"Error!",text:" You clicked the button!",icon:"error",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Error"}),Object(u.jsx)(s.i,{color:"warning",onClick:function(){return m.fire({title:"Warning!",text:" You clicked the button!",icon:"warning",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Warning"}),Object(u.jsx)(s.i,{color:"info",onClick:function(){return m.fire({title:"Info!",text:"You clicked the button!",icon:"info",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Info"}),Object(u.jsx)(s.i,{onClick:function(){return m.fire({title:"Question?",text:" You clicked the button!",icon:"question",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Question"})]})]})]})},j=e(1037),d=e(1036),h=a()(r.a),f=function(){return Object(u.jsxs)(s.l,{children:[Object(u.jsx)(s.p,{children:Object(u.jsx)(s.v,{tag:"h4",children:"Basic"})}),Object(u.jsxs)(s.m,{children:[Object(u.jsx)(s.u,{className:"mb-0",children:"SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!"}),Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(s.i,{color:"primary",onClick:function(){return h.fire({title:"Any fool can use a computer",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Basic"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return h.fire({title:"The Internet?,",text:"That thing is still around?",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"With Title"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return h.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="#">Why do I have this issue?</a>',customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"With Footer"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return h.fire({title:"<strong>HTML <u>example</u></strong>",icon:"info",html:'You can use <b>bold text</b>, <a href="https://pixinvent.com/" target="_blank">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:Object(u.jsxs)("span",{className:"align-middle",children:[Object(u.jsx)(j.a,{className:"me-50",size:15}),Object(u.jsx)("span",{className:"align-middle",children:"Great!"})]}),cancelButtonText:Object(u.jsx)(d.a,{size:15}),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1})},outline:!0,children:"HTML"})]})]})]})},x=e(252),p=a()(r.a),O=function(){return Object(u.jsxs)(s.l,{children:[Object(u.jsx)(s.p,{children:Object(u.jsx)(s.v,{tag:"h4",children:"Options"})}),Object(u.jsx)(s.m,{children:Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(s.i,{color:"primary",onClick:function(){return p.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:x.default,imageWidth:300,imageHeight:200,imageAlt:"Custom image",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Image"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){var t;r.a.fire({title:"Auto close alert!",html:"I will close in <b></b> seconds.",timerProgressBar:!0,timer:2e3,didOpen:function(){r.a.showLoading();var n=r.a.getHtmlContainer().querySelector("b");t=setInterval((function(){n.textContent=r.a.getTimerLeft()}),100)},willClose:function(){clearInterval(t)}}).then((function(t){t.dismiss===r.a.DismissReason.timer&&console.log("I was closed by the timer")}))},outline:!0,children:"Timeout"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return p.fire({backdrop:!0,title:"Click outside to close!",text:"This is a cool message!",allowOutsideClick:!0,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Click Outside"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){p.fire({title:"Search for a user",input:"text",customClass:{input:"mx-3",confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1,inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:function(t){return fetch("//api.github.com/users/".concat(t)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).catch((function(t){p.showValidationMessage("Request failed:  ".concat(t))}))}}).then((function(t){t.value&&p.fire({title:"".concat(t.value.login,"'s avatar"),imageUrl:t.value.avatar_url,customClass:{confirmButton:"btn btn-primary"}})}))},outline:!0,children:"Ajax"})]})})]})},C=a()(r.a),g=function(){return Object(u.jsxs)(s.l,{children:[Object(u.jsx)(s.p,{children:Object(u.jsx)(s.v,{tag:"h4",children:"Callback"})}),Object(u.jsx)(s.m,{children:Object(u.jsxs)(s.ib,{children:[Object(u.jsxs)(s.B,{className:"mb-2 mb-md-0",md:"6",sm:"12",children:[Object(u.jsx)("h5",{className:"mb-1",children:"Confirm Button Text"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return C.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then((function(t){t.value&&C.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}})}))},outline:!0,children:"Confirm Text"})]}),Object(u.jsxs)(s.B,{md:"6",sm:"12",children:[Object(u.jsx)("h5",{className:"mb-1",children:"Confirm Button Color"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return C.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then((function(t){t.value?C.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}):t.dismiss===C.DismissReason.cancel&&C.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",customClass:{confirmButton:"btn btn-success"}})}))},outline:!0,children:"Confirm & cancel"})]})]})})]})},y=a()(r.a),B=function(){return Object(u.jsxs)(s.l,{children:[Object(u.jsx)(s.p,{children:Object(u.jsx)(s.v,{tag:"h4",children:"Position"})}),Object(u.jsxs)(s.m,{children:[Object(u.jsxs)(s.u,{className:"mb-0",children:["You can specify position of your alert with"," ",Object(u.jsx)("code",{children:"position : top-start | top-end | bottom-start | bottom-end "})," "]}),Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(s.i,{color:"primary",onClick:function(){return y.fire({position:"top-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},outline:!0,children:"Top Start"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return y.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},outline:!0,children:"Top End"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return y.fire({position:"bottom-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},outline:!0,children:"Bottom Start"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return y.fire({position:"bottom-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},outline:!0,children:"Bottom End"})]})]})]})},k=a()(r.a),w=function(){return Object(u.jsxs)(s.l,{children:[Object(u.jsx)(s.p,{children:Object(u.jsx)(s.v,{tag:"h4",children:"Animations"})}),Object(u.jsxs)(s.m,{children:[Object(u.jsxs)(s.u,{className:"mb-0",children:["Use ",Object(u.jsx)("code",{children:"popup"})," inside ",Object(u.jsx)("code",{children:"showClass"})," parameter to add animation to your alert."]}),Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(s.i,{color:"primary",onClick:function(){return k.fire({title:"Bounce In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__bounceIn"},buttonsStyling:!1})},outline:!0,children:"Bounce In"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return k.fire({title:"Fade In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__fadeIn"},buttonsStyling:!1})},outline:!0,children:"Fade In"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return k.fire({title:"Flip In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__flipInX"},buttonsStyling:!1})},outline:!0,children:"Flip In"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return k.fire({title:"Tada Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__tada"},buttonsStyling:!1})},outline:!0,children:"Tada"}),Object(u.jsx)(s.i,{color:"primary",onClick:function(){return k.fire({title:"Shake Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__shakeX"},buttonsStyling:!1})},outline:!0,children:"Shake"})]})]})]})};e(1058),e(747),n.default=function(){return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)(o.a,{title:"Sweet Alerts2",subTitle:"A React implementation of SweetAlert2",link:"https://github.com/sweetalert2/sweetalert2-react-content"}),Object(u.jsxs)(s.ib,{children:[Object(u.jsx)(s.B,{sm:"12",children:Object(u.jsx)(f,{})}),Object(u.jsx)(s.B,{sm:"12",children:Object(u.jsx)(B,{})}),Object(u.jsx)(s.B,{sm:"12",children:Object(u.jsx)(w,{})}),Object(u.jsx)(s.B,{sm:"12",children:Object(u.jsx)(b,{})}),Object(u.jsx)(s.B,{sm:"12",children:Object(u.jsx)(O,{})}),Object(u.jsx)(s.B,{sm:"12",children:Object(u.jsx)(g,{})})]})]})}},497:function(t,n,e){"use strict";var i=e(99),o=e(10);n.a=function(t){return Object(o.jsx)(i.ib,{className:"mb-2",children:Object(o.jsxs)(i.B,{sm:"12",className:"ms-50",children:[Object(o.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:t.title}),t.link?Object(o.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.subTitle}):Object(o.jsx)("p",{className:"text-primary",children:t.subTitle})]})})}},747:function(t,n,e){}}]);
//# sourceMappingURL=80.c136e293.chunk.js.map