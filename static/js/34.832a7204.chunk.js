(this["webpackJsonplocal-skills-admin-dashboard"]=this["webpackJsonplocal-skills-admin-dashboard"]||[]).push([[34],{1601:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(489),r=a(99),i=a(15),c=a(640),l=a(515),o=a.n(l),d=a(946),j=a(535),m=a.n(j),b=a(10),u=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(b.jsxs)(r.l,{children:[Object(b.jsx)(r.p,{children:Object(b.jsx)(r.v,{tag:"h4",children:"Expandable Row"})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:c.d,expandableRows:!0,columns:c.c,expandOnRowClicked:!0,className:"react-dataTable",sortIcon:Object(b.jsx)(d.a,{size:10}),paginationComponent:function(){return Object(b.jsx)(o.a,{previousLabel:"",nextLabel:"",forcePage:a,onPageChange:function(e){return function(e){n(e.selected)}(e)},pageCount:10,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1"})},paginationDefaultPage:a+1,expandableRowsComponent:c.e,paginationRowsPerPageOptions:[10,25,50,100]})})]})},p=function(){return Object(b.jsxs)(r.l,{className:"overflow-hidden",children:[Object(b.jsx)(r.p,{children:Object(b.jsx)(r.v,{tag:"h4",children:"Zero Configuration"})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:c.d,columns:c.b,className:"react-dataTable",sortIcon:Object(b.jsx)(d.a,{size:10}),paginationRowsPerPageOptions:[10,25,50,100]})})]})},x=a(13),h=a(506),g=a.n(h),O=a(907),f=a(912),N=a(941),v=a(913),C=a(942),w=a(966),L=(a(505),function(e){var t=e.open,a=e.handleModal,n=Object(s.useState)(new Date),c=Object(i.a)(n,2),l=c[0],o=c[1],d=Object(b.jsx)(O.a,{className:"cursor-pointer",size:15,onClick:a});return Object(b.jsxs)(r.Q,{isOpen:t,toggle:a,className:"sidebar-sm",modalClassName:"modal-slide-in",contentClassName:"pt-0",children:[Object(b.jsx)(r.T,{className:"mb-1",toggle:a,close:d,tag:"div",children:Object(b.jsx)("h5",{className:"modal-title",children:"New Record"})}),Object(b.jsxs)(r.R,{className:"flex-grow-1",children:[Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(r.N,{className:"form-label",for:"full-name",children:"Full Name"}),Object(b.jsxs)(r.L,{children:[Object(b.jsx)(r.M,{children:Object(b.jsx)(f.a,{size:15})}),Object(b.jsx)(r.K,{id:"full-name",placeholder:"Bruce Wayne"})]})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(r.N,{className:"form-label",for:"post",children:"Post"}),Object(b.jsxs)(r.L,{children:[Object(b.jsx)(r.M,{children:Object(b.jsx)(N.a,{size:15})}),Object(b.jsx)(r.K,{id:"post",placeholder:"Web Developer"})]})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(r.N,{className:"form-label",for:"email",children:"Email"}),Object(b.jsxs)(r.L,{children:[Object(b.jsx)(r.M,{children:Object(b.jsx)(v.a,{size:15})}),Object(b.jsx)(r.K,{type:"email",id:"email",placeholder:"brucewayne@email.com"})]})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(r.N,{className:"form-label",for:"joining-date",children:"Joining Date"}),Object(b.jsxs)(r.L,{children:[Object(b.jsx)(r.M,{children:Object(b.jsx)(C.a,{size:15})}),Object(b.jsx)(g.a,{className:"form-control",id:"joining-date",value:l,onChange:function(e){return o(e)}})]})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(r.N,{className:"form-label",for:"salary",children:"Salary"}),Object(b.jsxs)(r.L,{children:[Object(b.jsx)(r.M,{children:Object(b.jsx)(w.a,{size:15})}),Object(b.jsx)(r.K,{type:"number",id:"salary"})]})]}),Object(b.jsx)(r.i,{className:"me-1",color:"primary",onClick:a,children:"Submit"}),Object(b.jsx)(r.i,{color:"secondary",onClick:a,outline:!0,children:"Cancel"})]})]})}),k=a(1024),y=a(1017),W=a(978),z=a(985),P=a(979),S=a(960),D=a(909),E=Object(s.forwardRef)((function(e,t){return Object(b.jsx)("div",{className:"form-check",children:Object(b.jsx)(r.K,Object(x.a)({type:"checkbox",ref:t},e))})})),R=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(s.useState)(0),j=Object(i.a)(l,2),u=j[0],p=j[1],x=Object(s.useState)(""),h=Object(i.a)(x,2),g=h[0],O=h[1],f=Object(s.useState)([]),N=Object(i.a)(f,2),v=N[0],C=N[1],w=function(){return n(!a)};function R(e){var t=document.createElement("a"),a=function(e){var t,a=Object.keys(c.d[0]);return t="",t+=a.join(","),t+="\n",e.forEach((function(e){var s=0;a.forEach((function(a){s>0&&(t+=","),t+=e[a],s++})),t+="\n"})),t}(e);if(null!==a){a.match(/^data:text\/csv/i)||(a="data:text/csv;charset=utf-8,".concat(a)),t.setAttribute("href",encodeURI(a)),t.setAttribute("download","export.csv"),t.click()}}return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)(r.l,{children:[Object(b.jsxs)(r.p,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(b.jsx)(r.v,{tag:"h4",children:"DataTable with Buttons"}),Object(b.jsxs)("div",{className:"d-flex mt-md-0 mt-1",children:[Object(b.jsxs)(r.tb,{children:[Object(b.jsxs)(r.G,{color:"secondary",caret:!0,outline:!0,children:[Object(b.jsx)(k.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Export"})]}),Object(b.jsxs)(r.F,{children:[Object(b.jsxs)(r.E,{className:"w-100",children:[Object(b.jsx)(y.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Print"})]}),Object(b.jsxs)(r.E,{className:"w-100",onClick:function(){return R(c.d)},children:[Object(b.jsx)(W.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"CSV"})]}),Object(b.jsxs)(r.E,{className:"w-100",children:[Object(b.jsx)(z.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Excel"})]}),Object(b.jsxs)(r.E,{className:"w-100",children:[Object(b.jsx)(P.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"PDF"})]}),Object(b.jsxs)(r.E,{className:"w-100",children:[Object(b.jsx)(S.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Copy"})]})]})]}),Object(b.jsxs)(r.i,{className:"ms-2",color:"primary",onClick:w,children:[Object(b.jsx)(D.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Add Record"})]})]})]}),Object(b.jsx)(r.ib,{className:"justify-content-end mx-0",children:Object(b.jsxs)(r.B,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(b.jsx)(r.N,{className:"me-1",for:"search-input",children:"Search"}),Object(b.jsx)(r.K,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:g,onChange:function(e){var t=e.target.value,a=[];O(t);var s={1:{title:"Current",color:"light-primary"},2:{title:"Professional",color:"light-success"},3:{title:"Rejected",color:"light-danger"},4:{title:"Resigned",color:"light-warning"},5:{title:"Applied",color:"light-info"}};t.length&&(a=c.d.filter((function(e){var a=e.full_name.toLowerCase().startsWith(t.toLowerCase())||e.post.toLowerCase().startsWith(t.toLowerCase())||e.email.toLowerCase().startsWith(t.toLowerCase())||e.age.toLowerCase().startsWith(t.toLowerCase())||e.salary.toLowerCase().startsWith(t.toLowerCase())||e.start_date.toLowerCase().startsWith(t.toLowerCase())||s[e.status].title.toLowerCase().startsWith(t.toLowerCase()),n=e.full_name.toLowerCase().includes(t.toLowerCase())||e.post.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())||e.age.toLowerCase().includes(t.toLowerCase())||e.salary.toLowerCase().includes(t.toLowerCase())||e.start_date.toLowerCase().includes(t.toLowerCase())||s[e.status].title.toLowerCase().includes(t.toLowerCase());return a||(!a&&n?n:null)})),C(a),O(t))}})]})}),Object(b.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:c.c,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(b.jsx)(d.a,{size:10}),paginationComponent:function(){return Object(b.jsx)(o.a,{previousLabel:"",nextLabel:"",forcePage:u,onPageChange:function(e){return function(e){p(e.selected)}(e)},pageCount:g.length?Math.ceil(v.length/7):Math.ceil(c.d.length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"})},paginationDefaultPage:u+1,selectableRowsComponent:E,data:g.length?v:c.d})})]}),Object(b.jsx)(L,{open:a,handleModal:w})]})},_=a(1646),M=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(s.useState)(""),j=Object(i.a)(l,2),u=j[0],p=j[1],x=Object(s.useState)([]),h=Object(i.a)(x,2),g=h[0],O=h[1],f=Object(_.a)().t,N=function(){return Object(b.jsx)(s.Fragment,{children:Object(b.jsx)("span",{className:"align-middle d-none d-md-inline-block",children:f("Prev")})})},v=function(){return Object(b.jsx)(s.Fragment,{children:Object(b.jsx)("span",{className:"align-middle d-none d-md-inline-block",children:f("Next")})})};return Object(b.jsxs)(r.l,{children:[Object(b.jsx)(r.p,{className:"border-bottom",children:Object(b.jsx)(r.v,{tag:"h4",children:"Multilingual"})}),Object(b.jsx)(r.ib,{className:"justify-content-end mx-0",children:Object(b.jsxs)(r.B,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(b.jsx)(r.N,{className:"me-1",for:"search-input-1",children:f("Search")}),Object(b.jsx)(r.K,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input-1",value:u,onChange:function(e){var t=e.target.value,a=[];p(t);var s={1:{title:"Current",color:"light-primary"},2:{title:"Professional",color:"light-success"},3:{title:"Rejected",color:"light-danger"},4:{title:"Resigned",color:"light-warning"},5:{title:"Applied",color:"light-info"}};t.length&&(a=c.d.filter((function(e){var a=e.full_name.toLowerCase().startsWith(t.toLowerCase())||e.post.toLowerCase().startsWith(t.toLowerCase())||e.email.toLowerCase().startsWith(t.toLowerCase())||e.age.toLowerCase().startsWith(t.toLowerCase())||e.salary.toLowerCase().startsWith(t.toLowerCase())||e.start_date.toLowerCase().startsWith(t.toLowerCase())||s[e.status].title.toLowerCase().startsWith(t.toLowerCase()),n=e.full_name.toLowerCase().includes(t.toLowerCase())||e.post.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())||e.age.toLowerCase().includes(t.toLowerCase())||e.salary.toLowerCase().includes(t.toLowerCase())||e.start_date.toLowerCase().includes(t.toLowerCase())||s[e.status].title.toLowerCase().includes(t.toLowerCase());return a||(!a&&n?n:null)})),O(a),p(t))}})]})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,selectableRowsNoSelectAll:!0,columns:c.f,className:"react-dataTable",paginationPerPage:7,sortIcon:Object(b.jsx)(d.a,{size:10}),paginationDefaultPage:a+1,paginationComponent:function(){return Object(b.jsx)(o.a,{previousLabel:Object(b.jsx)(N,{size:15}),nextLabel:Object(b.jsx)(v,{size:15}),forcePage:a,onPageChange:function(e){return function(e){n(e.selected)}(e)},pageCount:u.length?Math.ceil(g.length/7):Math.ceil(c.d.length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate pagination-sm justify-content-end pe-1 mt-1"})},data:u.length?g:c.d})}),Object(b.jsx)(r.n,{children:Object(b.jsxs)(r.u,{className:"mb-0",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Note:"})," ",Object(b.jsx)("span",{children:"Use Intl Dropdown in Navbar to change table language"})]})})]})},T=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(b.jsxs)(r.l,{className:"overflow-hidden",children:[Object(b.jsx)(r.p,{children:Object(b.jsx)(r.v,{tag:"h4",children:"Column ReOrder"})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:c.d,columns:c.g,className:"react-dataTable",sortIcon:Object(b.jsx)(d.a,{size:10}),paginationComponent:function(){return Object(b.jsx)(o.a,{nextLabel:"",breakLabel:"...",previousLabel:"",pageRangeDisplayed:2,forcePage:a,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",pageCount:Math.ceil(c.d.length/7)||1,onPageChange:function(e){return function(e){n(e.selected)}(e)},containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"})},paginationDefaultPage:a+1,paginationRowsPerPageOptions:[10,25,50,100]})})]})};a(521),t.default=function(){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(n.a,{title:"Datatables Basic",data:[{title:"Datatables"},{title:"Datatables Basic"}]}),Object(b.jsxs)(r.ib,{children:[Object(b.jsx)(r.B,{sm:"12",children:Object(b.jsx)(p,{})}),Object(b.jsx)(r.B,{sm:"12",children:Object(b.jsx)(T,{})}),Object(b.jsx)(r.B,{sm:"12",children:Object(b.jsx)(R,{})}),Object(b.jsx)(r.B,{sm:"12",children:Object(b.jsx)(u,{})}),Object(b.jsx)(r.B,{sm:"12",children:Object(b.jsx)(M,{})})]})]})}},489:function(e,t,a){"use strict";var s=a(13),n=a(1),r=a(136),i=a(3),c=a.n(i),l=a(985),o=a(914),d=a(915),j=a(913),m=a(942),b=a(99),u=a(10);t.a=function(e){var t=e.data,a=e.title;return Object(u.jsxs)("div",{className:"content-header row",children:[Object(u.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(u.jsx)("div",{className:"row breadcrumbs-top",children:Object(u.jsxs)("div",{className:"col-12",children:[a?Object(u.jsx)("h2",{className:"content-header-title float-start mb-0",children:a}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(b.g,{children:[Object(u.jsx)(b.h,{tag:"li",children:Object(u.jsx)(r.b,{to:"/",children:"Home"})}),t.map((function(e,a){var i=e.link?r.b:n.Fragment,l=t.length-1===a;return Object(u.jsx)(b.h,{tag:"li",active:!l,className:c()({"text-primary":!l}),children:Object(u.jsx)(i,Object(s.a)(Object(s.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},a)}))]})})]})})}),Object(u.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(u.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(u.jsxs)(b.tb,{children:[Object(u.jsx)(b.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(u.jsx)(l.a,{size:14})}),Object(u.jsxs)(b.F,{tag:"ul",end:!0,children:[Object(u.jsxs)(b.E,{tag:r.b,to:"/apps/todo",children:[Object(u.jsx)(o.a,{className:"me-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(u.jsxs)(b.E,{tag:r.b,to:"/apps/chat",children:[Object(u.jsx)(d.a,{className:"me-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(u.jsxs)(b.E,{tag:r.b,to:"/apps/email",children:[Object(u.jsx)(j.a,{className:"me-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(u.jsxs)(b.E,{tag:r.b,to:"/apps/calendar",children:[Object(u.jsx)(m.a,{className:"me-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},505:function(e,t,a){},517:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-20.40d668f5.jpg"},521:function(e,t,a){},553:function(e,t,a){var s=a(614);e.exports=function(e){if(Array.isArray(e))return s(e)},e.exports.__esModule=!0,e.exports.default=e.exports},554:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},555:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},569:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.__esModule=!0,e.exports.default=e.exports},590:function(e,t,a){var s=a(553),n=a(554),r=a(613),i=a(555);e.exports=function(e){return s(e)||n(e)||r(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},603:function(e,t,a){"use strict";t.a=function(e){var t=Object.create(null);return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}},616:function(e,t,a){"use strict";t.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},640:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return x})),a.d(t,"g",(function(){return h})),a.d(t,"c",(function(){return g})),a.d(t,"f",(function(){return O})),a.d(t,"h",(function(){return f})),a.d(t,"a",(function(){return N}));var s,n=a(490),r=a(5),i=a.n(r),c=a(1007),l=a(978),o=a(927),d=a(1039),j=a(971),m=a(99),b=a(10),u=["success","danger","warning","info","dark","primary","secondary"],p={1:{title:"Current",color:"light-primary"},2:{title:"Professional",color:"light-success"},3:{title:"Rejected",color:"light-danger"},4:{title:"Resigned",color:"light-warning"},5:{title:"Applied",color:"light-info"}};i.a.get("/api/datatables/initial-data").then((function(e){s=e.data}));var x=[{name:"ID",sortable:!0,maxWidth:"100px",selector:function(e){return e.id}},{name:"Name",sortable:!0,minWidth:"225px",selector:function(e){return e.full_name}},{name:"Email",sortable:!0,minWidth:"310px",selector:function(e){return e.email}},{name:"Position",sortable:!0,minWidth:"250px",selector:function(e){return e.post}},{name:"Age",sortable:!0,minWidth:"100px",selector:function(e){return e.age}},{name:"Salary",sortable:!0,minWidth:"175px",selector:function(e){return e.salary}}],h=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"100px",selector:function(e){return e.id}},{name:"Name",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.full_name}},{name:"Email",reorder:!0,sortable:!0,minWidth:"310px",selector:function(e){return e.email}},{name:"Position",reorder:!0,sortable:!0,minWidth:"250px",selector:function(e){return e.post}},{name:"Age",reorder:!0,sortable:!0,minWidth:"100px",selector:function(e){return e.age}},{name:"Salary",reorder:!0,sortable:!0,minWidth:"175px",selector:function(e){return e.salary}}],g=[{name:"Name",minWidth:"250px",sortable:function(e){return e.full_name},cell:function(e){return Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[""===e.avatar?Object(b.jsx)(n.a,{color:"light-".concat(u[e.status]),content:e.full_name,initials:!0}):Object(b.jsx)(n.a,{img:a(851)("./avatar-s-".concat(e.avatar)).default}),Object(b.jsxs)("div",{className:"user-info text-truncate ms-1",children:[Object(b.jsx)("span",{className:"d-block fw-bold text-truncate",children:e.full_name}),Object(b.jsx)("small",{children:e.post})]})]})}},{name:"Email",sortable:!0,minWidth:"250px",selector:function(e){return e.email}},{name:"Date",sortable:!0,minWidth:"150px",selector:function(e){return e.start_date}},{name:"Salary",sortable:!0,minWidth:"150px",selector:function(e){return e.salary}},{name:"Age",sortable:!0,minWidth:"100px",selector:function(e){return e.age}},{name:"Status",minWidth:"150px",sortable:function(e){return e.status.title},cell:function(e){return Object(b.jsx)(m.f,{color:p[e.status].color,pill:!0,children:p[e.status].title})}},{name:"Actions",allowOverflow:!0,cell:function(){return Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsxs)(m.wb,{children:[Object(b.jsx)(m.G,{className:"pe-1",tag:"span",children:Object(b.jsx)(c.a,{size:15})}),Object(b.jsxs)(m.F,{end:!0,children:[Object(b.jsxs)(m.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(b.jsx)(l.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Details"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(b.jsx)(o.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Archive"})]}),Object(b.jsxs)(m.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(b.jsx)(d.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Delete"})]})]})]}),Object(b.jsx)(j.a,{size:15})]})}}],O=[{name:"Name",sortable:!0,minWidth:"200px",selector:function(e){return e.full_name}},{name:"Position",sortable:!0,minWidth:"250px",selector:function(e){return e.post}},{name:"Email",sortable:!0,minWidth:"250px",selector:function(e){return e.email}},{name:"Date",sortable:!0,minWidth:"150px",selector:function(e){return e.start_date}},{name:"Salary",sortable:!0,minWidth:"150px",selector:function(e){return e.salary}},{name:"Status",sortable:!0,minWidth:"150px",selector:function(e){return e.status},cell:function(e){return Object(b.jsx)(m.f,{color:p[e.status].color,pill:!0,children:p[e.status].title})}},{name:"Actions",allowOverflow:!0,cell:function(){return Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsxs)(m.wb,{children:[Object(b.jsx)(m.G,{className:"pe-1",tag:"span",children:Object(b.jsx)(c.a,{size:15})}),Object(b.jsxs)(m.F,{end:!0,children:[Object(b.jsxs)(m.E,{children:[Object(b.jsx)(l.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Details"})]}),Object(b.jsxs)(m.E,{children:[Object(b.jsx)(o.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Archive"})]}),Object(b.jsxs)(m.E,{children:[Object(b.jsx)(d.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Delete"})]})]})]}),Object(b.jsx)(j.a,{size:15})]})}}],f=[{sortable:!0,name:"Full Name",minWidth:"225px",selector:function(e){return e.full_name}},{sortable:!0,name:"Email",minWidth:"250px",selector:function(e){return e.email}},{sortable:!0,name:"Position",minWidth:"250px",selector:function(e){return e.post}},{sortable:!0,name:"Office",minWidth:"150px",selector:function(e){return e.city}},{sortable:!0,name:"Start Date",minWidth:"150px",selector:function(e){return e.start_date}},{sortable:!0,name:"Salary",minWidth:"150px",selector:function(e){return e.salary}}],N=[{name:"Name",sortable:!0,minWidth:"200px",selector:function(e){return e.full_name}},{name:"Email",sortable:!0,minWidth:"250px",selector:function(e){return e.email}},{name:"Post",sortable:!0,minWidth:"250px",selector:function(e){return e.post}},{name:"City",sortable:!0,minWidth:"150px",selector:function(e){return e.city}},{name:"Date",sortable:!0,minWidth:"150px",selector:function(e){return e.start_date}},{name:"Salary",sortable:!0,minWidth:"100px",selector:function(e){return e.salary}}];t.e=function(e){var t=e.data;return Object(b.jsxs)("div",{className:"expandable-content p-2",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"fw-bold",children:"City:"})," ",t.city]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"fw-bold",children:"Experience:"})," ",t.experience]}),Object(b.jsxs)("p",{className:"m-0",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Post:"})," ",t.post]})]})}},787:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-16.1850b51c.jpg"},851:function(e,t,a){var s={"./avatar-s-1.jpg":38,"./avatar-s-10.jpg":102,"./avatar-s-11.jpg":73,"./avatar-s-12.jpg":250,"./avatar-s-13.jpg":153,"./avatar-s-14.jpg":254,"./avatar-s-15.jpg":257,"./avatar-s-16.jpg":787,"./avatar-s-17.jpg":852,"./avatar-s-18.jpg":261,"./avatar-s-19.jpg":853,"./avatar-s-2.jpg":40,"./avatar-s-20.jpg":517,"./avatar-s-21.jpg":854,"./avatar-s-22.jpg":262,"./avatar-s-23.jpg":855,"./avatar-s-24.jpg":856,"./avatar-s-25.jpg":259,"./avatar-s-26.jpg":266,"./avatar-s-3.jpg":26,"./avatar-s-4.jpg":39,"./avatar-s-5.jpg":32,"./avatar-s-6.jpg":36,"./avatar-s-7.jpg":72,"./avatar-s-8.jpg":60,"./avatar-s-9.jpg":33};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id=851},852:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-17.ac876056.jpg"},853:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-19.f39063a2.jpg"},854:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-21.d383013d.jpg"},855:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-23.c1d416e5.jpg"},856:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar-s-24.a649af23.jpg"}}]);
//# sourceMappingURL=34.832a7204.chunk.js.map