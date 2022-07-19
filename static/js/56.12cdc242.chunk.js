(this["webpackJsonplocal-skills-admin-dashboard"]=this["webpackJsonplocal-skills-admin-dashboard"]||[]).push([[56],{1624:function(e,a,t){"use strict";t.r(a);var l=t(15),s=t(1),c=t(13),n=t(570),r=t(494),i=t(512),o=t(3),j=t.n(o),b=t(493),u=t(99),d=t(146),m=t(139),x=t(10),h={email:"",contact:"",company:"",fullName:"",username:"",country:null},O=[{label:"Australia",value:"Australia"},{label:"Bangladesh",value:"Bangladesh"},{label:"Belarus",value:"Belarus"},{label:"Brazil",value:"Brazil"},{label:"Canada",value:"Canada"},{label:"China",value:"China"},{label:"France",value:"France"},{label:"Germany",value:"Germany"},{label:"India",value:"India"},{label:"Indonesia",value:"Indonesia"},{label:"Israel",value:"Israel"},{label:"Italy",value:"Italy"},{label:"Japan",value:"Japan"},{label:"Korea",value:"Korea"},{label:"Mexico",value:"Mexico"},{label:"Philippines",value:"Philippines"},{label:"Russia",value:"Russia"},{label:"South",value:"South"},{label:"Thailand",value:"Thailand"},{label:"Turkey",value:"Turkey"},{label:"Ukraine",value:"Ukraine"},{label:"United Arab Emirates",value:"United Arab Emirates"},{label:"United Kingdom",value:"United Kingdom"},{label:"United States",value:"United States"}],p=function(e){var a=e.open,t=e.toggleSidebar,o=Object(s.useState)(null),p=Object(l.a)(o,2),v=p[0],f=p[1],N=Object(s.useState)("basic"),g=Object(l.a)(N,2),C=g[0],y=g[1],S=Object(s.useState)("subscriber"),w=Object(l.a)(S,2),P=w[0],E=w[1],k=Object(m.b)(),B=Object(b.e)({defaultValues:h}),z=B.control,F=B.setValue,T=B.setError,U=B.handleSubmit,A=B.formState.errors;return Object(x.jsx)(n.a,{size:"lg",open:a,title:"New User",headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:t,onClosed:function(){for(var e in h)F(e,"");E("subscriber"),y("basic")},children:Object(x.jsxs)(u.H,{onSubmit:U((function(e){if(f(e),function(e){return Object.values(e).every((function(e){return"object"===typeof e?null!==e:e.length>0}))}(e))t(),k(Object(d.a)({role:P,avatar:"",status:"active",email:e.email,currentPlan:C,billing:"auto debit",company:e.company,contact:e.contact,fullName:e.fullName,username:e.username,country:e.country.value}));else for(var a in e)null===e[a]&&T("country",{type:"manual"}),null!==e[a]&&0===e[a].length&&T(a,{type:"manual"})})),children:[Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsxs)(u.N,{className:"form-label",for:"fullName",children:["Full Name ",Object(x.jsx)("span",{className:"text-danger",children:"*"})]}),Object(x.jsx)(b.a,{name:"fullName",control:z,render:function(e){var a=e.field;return Object(x.jsx)(u.K,Object(c.a)({id:"fullName",placeholder:"John Doe",invalid:A.fullName&&!0},a))}})]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsxs)(u.N,{className:"form-label",for:"username",children:["Username ",Object(x.jsx)("span",{className:"text-danger",children:"*"})]}),Object(x.jsx)(b.a,{name:"username",control:z,render:function(e){var a=e.field;return Object(x.jsx)(u.K,Object(c.a)({id:"username",placeholder:"johnDoe99",invalid:A.username&&!0},a))}})]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsxs)(u.N,{className:"form-label",for:"userEmail",children:["Email ",Object(x.jsx)("span",{className:"text-danger",children:"*"})]}),Object(x.jsx)(b.a,{name:"email",control:z,render:function(e){var a=e.field;return Object(x.jsx)(u.K,Object(c.a)({type:"email",id:"userEmail",placeholder:"john.doe@example.com",invalid:A.email&&!0},a))}}),Object(x.jsx)(u.J,{color:"muted",children:"You can use letters, numbers & periods"})]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsxs)(u.N,{className:"form-label",for:"contact",children:["Contact ",Object(x.jsx)("span",{className:"text-danger",children:"*"})]}),Object(x.jsx)(b.a,{name:"contact",control:z,render:function(e){var a=e.field;return Object(x.jsx)(u.K,Object(c.a)({id:"contact",placeholder:"(397) 294-5153",invalid:A.contact&&!0},a))}})]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsxs)(u.N,{className:"form-label",for:"company",children:["Company ",Object(x.jsx)("span",{className:"text-danger",children:"*"})]}),Object(x.jsx)(b.a,{name:"company",control:z,render:function(e){var a=e.field;return Object(x.jsx)(u.K,Object(c.a)({id:"company",placeholder:"Company Pvt Ltd",invalid:A.company&&!0},a))}})]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsxs)(u.N,{className:"form-label",for:"country",children:["Country ",Object(x.jsx)("span",{className:"text-danger",children:"*"})]}),Object(x.jsx)(b.a,{name:"country",control:z,render:function(e){var a=e.field;return Object(x.jsx)(i.a,Object(c.a)({isClearable:!1,classNamePrefix:"select",options:O,theme:r.i,className:j()("react-select",{"is-invalid":null!==v&&null===v.country})},a))}})]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsx)(u.N,{className:"form-label",for:"user-role",children:"User Role"}),Object(x.jsxs)(u.K,{type:"select",id:"user-role",name:"user-role",value:P,onChange:function(e){return E(e.target.value)},children:[Object(x.jsx)("option",{value:"subscriber",children:"Subscriber"}),Object(x.jsx)("option",{value:"editor",children:"Editor"}),Object(x.jsx)("option",{value:"maintainer",children:"Maintainer"}),Object(x.jsx)("option",{value:"author",children:"Author"}),Object(x.jsx)("option",{value:"admin",children:"Admin"})]})]}),Object(x.jsxs)("div",{className:"mb-1",value:C,onChange:function(e){return y(e.target.value)},children:[Object(x.jsx)(u.N,{className:"form-label",for:"select-plan",children:"Select Plan"}),Object(x.jsxs)(u.K,{type:"select",id:"select-plan",name:"select-plan",children:[Object(x.jsx)("option",{value:"basic",children:"Basic"}),Object(x.jsx)("option",{value:"enterprise",children:"Enterprise"}),Object(x.jsx)("option",{value:"company",children:"Company"}),Object(x.jsx)("option",{value:"team",children:"Team"})]})]}),Object(x.jsx)(u.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(x.jsx)(u.i,{type:"reset",color:"secondary",outline:!0,onClick:t,children:"Cancel"})]})})},v=t(137),f=t(490),N=t(152),g=t(1048),C=t(960),y=t(966),S=t(906),w=t(1026),P=t(1006),E=t(974),k=t(921),B=t(1037),z=function(e){return e.avatar.length?Object(x.jsx)(f.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(x.jsx)(f.a,{initials:!0,className:"me-1",color:e.avatarColor||"light-primary",content:e.fullName||"John Doe"})},F={pending:"light-warning",active:"light-success",inactive:"light-secondary"},T=[{name:"User",sortable:!0,minWidth:"300px",sortField:"fullName",selector:function(e){return e.fullName},cell:function(e){return Object(x.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[z(e),Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)(v.b,{to:"/apps/user/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return N.a.dispatch(Object(d.f)(e.id))},children:Object(x.jsx)("span",{className:"fw-bolder",children:e.fullName})}),Object(x.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.role},cell:function(e){return function(e){var a={subscriber:{class:"text-primary",icon:g.a},maintainer:{class:"text-success",icon:C.a},editor:{class:"text-info",icon:y.a},author:{class:"text-warning",icon:S.a},admin:{class:"text-danger",icon:w.a}},t=a[e.role]?a[e.role].icon:y.a;return Object(x.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(x.jsx)(t,{size:18,className:"".concat(a[e.role]?a[e.role].class:""," me-50")}),e.role]})}(e)}},{name:"Plan",minWidth:"138px",sortable:!0,sortField:"currentPlan",selector:function(e){return e.currentPlan},cell:function(e){return Object(x.jsx)("span",{className:"text-capitalize",children:e.currentPlan})}},{name:"Billing",minWidth:"230px",sortable:!0,sortField:"billing",selector:function(e){return e.billing},cell:function(e){return Object(x.jsx)("span",{className:"text-capitalize",children:e.billing})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(x.jsx)(u.f,{className:"text-capitalize",color:F[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(x.jsx)("div",{className:"column-action",children:Object(x.jsxs)(u.wb,{children:[Object(x.jsx)(u.G,{tag:"div",className:"btn btn-sm",children:Object(x.jsx)(P.a,{size:14,className:"cursor-pointer"})}),Object(x.jsxs)(u.F,{children:[Object(x.jsxs)(u.E,{tag:v.b,className:"w-100",to:"/apps/user/view/".concat(e.id),onClick:function(){return N.a.dispatch(Object(d.f)(e.id))},children:[Object(x.jsx)(E.a,{size:14,className:"me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(x.jsxs)(u.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(x.jsx)(k.a,{size:14,className:"me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(x.jsxs)(u.E,{tag:"a",href:"/",className:"w-100",onClick:function(a){a.preventDefault(),N.a.dispatch(Object(d.c)(e.id))},children:[Object(x.jsx)(B.a,{size:14,className:"me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})}}],U=t(515),A=t.n(U),K=t(535),I=t.n(K),q=t(1023),D=t(1016),R=t(981),J=t(975),L=t(955),M=t(941),W=(t(519),t(521),function(e){var a=e.store,t=e.toggleSidebar,l=e.handlePerPage,s=e.rowsPerPage,c=e.handleFilter,n=e.searchTerm;function r(e){var t=document.createElement("a"),l=function(e){var t,l=Object.keys(a.data[0]);return t="",t+=l.join(","),t+="\n",e.forEach((function(e){var a=0;l.forEach((function(l){a>0&&(t+=","),t+=e[l],a++})),t+="\n"})),t}(e);if(null!==l){l.match(/^data:text\/csv/i)||(l="data:text/csv;charset=utf-8,".concat(l)),t.setAttribute("href",encodeURI(l)),t.setAttribute("download","export.csv"),t.click()}}return Object(x.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(x.jsxs)(u.ib,{children:[Object(x.jsx)(u.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(x.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(x.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(x.jsxs)(u.K,{className:"mx-50",type:"select",id:"rows-per-page",value:s,onChange:l,style:{width:"5rem"},children:[Object(x.jsx)("option",{value:"10",children:"10"}),Object(x.jsx)("option",{value:"25",children:"25"}),Object(x.jsx)("option",{value:"50",children:"50"})]}),Object(x.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(x.jsxs)(u.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(x.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(x.jsx)(u.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(x.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(x.jsxs)(u.wb,{className:"me-1",children:[Object(x.jsxs)(u.G,{color:"secondary",caret:!0,outline:!0,children:[Object(x.jsx)(q.a,{className:"font-small-4 me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"Export"})]}),Object(x.jsxs)(u.F,{children:[Object(x.jsxs)(u.E,{className:"w-100",children:[Object(x.jsx)(D.a,{className:"font-small-4 me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"Print"})]}),Object(x.jsxs)(u.E,{className:"w-100",onClick:function(){return r(a.data)},children:[Object(x.jsx)(E.a,{className:"font-small-4 me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"CSV"})]}),Object(x.jsxs)(u.E,{className:"w-100",children:[Object(x.jsx)(R.a,{className:"font-small-4 me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(x.jsxs)(u.E,{className:"w-100",children:[Object(x.jsx)(J.a,{className:"font-small-4 me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(x.jsxs)(u.E,{className:"w-100",children:[Object(x.jsx)(L.a,{className:"font-small-4 me-50"}),Object(x.jsx)("span",{className:"align-middle",children:"Copy"})]})]})]}),Object(x.jsx)(u.i,{className:"add-new-user",color:"primary",onClick:t,children:"Add New User"})]})]})]})})}),G=function(){var e=Object(m.b)(),a=Object(m.c)((function(e){return e.users})),t=Object(s.useState)("desc"),c=Object(l.a)(t,2),n=c[0],o=c[1],j=Object(s.useState)(""),b=Object(l.a)(j,2),h=b[0],O=b[1],v=Object(s.useState)(1),f=Object(l.a)(v,2),N=f[0],g=f[1],C=Object(s.useState)("id"),y=Object(l.a)(C,2),S=y[0],w=y[1],P=Object(s.useState)(10),E=Object(l.a)(P,2),k=E[0],B=E[1],z=Object(s.useState)(!1),F=Object(l.a)(z,2),U=F[0],K=F[1],q=Object(s.useState)({value:"",label:"Select Role"}),D=Object(l.a)(q,2),R=D[0],J=D[1],L=Object(s.useState)({value:"",label:"Select Plan"}),G=Object(l.a)(L,2),H=G[0],V=G[1],Q=Object(s.useState)({value:"",label:"Select Status",number:0}),Y=Object(l.a)(Q,2),_=Y[0],X=Y[1],Z=function(){return K(!U)};Object(s.useEffect)((function(){e(Object(d.d)()),e(Object(d.e)({sort:n,sortColumn:S,q:h,page:N,perPage:k,role:R.value,status:_.value,currentPlan:H.value}))}),[e,a.data.length,n,S,N]);return Object(x.jsxs)(s.Fragment,{children:[Object(x.jsxs)(u.l,{children:[Object(x.jsx)(u.p,{children:Object(x.jsx)(u.v,{tag:"h4",children:"Filters"})}),Object(x.jsx)(u.m,{children:Object(x.jsxs)(u.ib,{children:[Object(x.jsxs)(u.B,{md:"4",children:[Object(x.jsx)(u.N,{for:"role-select",children:"Role"}),Object(x.jsx)(i.a,{isClearable:!1,value:R,options:[{value:"",label:"Select Role"},{value:"admin",label:"Admin"},{value:"author",label:"Author"},{value:"editor",label:"Editor"},{value:"maintainer",label:"Maintainer"},{value:"subscriber",label:"Subscriber"}],className:"react-select",classNamePrefix:"select",theme:r.i,onChange:function(a){J(a),e(Object(d.e)({sort:n,sortColumn:S,q:h,role:a.value,page:N,perPage:k,status:_.value,currentPlan:H.value}))}})]}),Object(x.jsxs)(u.B,{className:"my-md-0 my-1",md:"4",children:[Object(x.jsx)(u.N,{for:"plan-select",children:"Plan"}),Object(x.jsx)(i.a,{theme:r.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Plan"},{value:"basic",label:"Basic"},{value:"company",label:"Company"},{value:"enterprise",label:"Enterprise"},{value:"team",label:"Team"}],value:H,onChange:function(a){V(a),e(Object(d.e)({sort:n,sortColumn:S,q:h,page:N,perPage:k,role:R.value,currentPlan:a.value,status:_.value}))}})]}),Object(x.jsxs)(u.B,{md:"4",children:[Object(x.jsx)(u.N,{for:"status-select",children:"Status"}),Object(x.jsx)(i.a,{theme:r.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Status",number:0},{value:"pending",label:"Pending",number:1},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],value:_,onChange:function(a){X(a),e(Object(d.e)({sort:n,sortColumn:S,q:h,page:N,status:a.value,perPage:k,role:R.value,currentPlan:H.value}))}})]})]})})]}),Object(x.jsx)(u.l,{className:"overflow-hidden",children:Object(x.jsx)("div",{className:"react-dataTable",children:Object(x.jsx)(I.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:T,onSort:function(a,t){o(t),w(a.sortField),e(Object(d.e)({sort:n,sortColumn:S,q:h,page:N,perPage:k,role:R.value,status:_.value,currentPlan:H.value}))},sortIcon:Object(x.jsx)(M.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Number(Math.ceil(a.total/k));return Object(x.jsx)(A.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==N?N-1:0,onPageChange:function(a){return function(a){e(Object(d.e)({sort:n,sortColumn:S,q:h,perPage:k,page:a.selected+1,role:R.value,status:_.value,currentPlan:H.value})),g(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={role:R.value,currentPlan:H.value,status:_.value,q:h},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,k)}(),subHeaderComponent:Object(x.jsx)(W,{store:a,searchTerm:h,rowsPerPage:k,handleFilter:function(a){O(a),e(Object(d.e)({sort:n,q:a,sortColumn:S,page:N,perPage:k,role:R.value,status:_.value,currentPlan:H.value}))},handlePerPage:function(a){var t=parseInt(a.currentTarget.value);e(Object(d.e)({sort:n,sortColumn:S,q:h,perPage:t,page:N,role:R.value,currentPlan:H.value,status:_.value})),B(t)},toggleSidebar:Z})})})}),Object(x.jsx)(p,{open:U,toggleSidebar:Z})]})},H=t(776),V=t(1046),Q=t(1045),Y=t(1047);t(657),a.default=function(){return Object(x.jsxs)("div",{className:"app-user-list",children:[Object(x.jsxs)(u.ib,{children:[Object(x.jsx)(u.B,{lg:"3",sm:"6",children:Object(x.jsx)(H.a,{color:"primary",statTitle:"Total Users",icon:Object(x.jsx)(g.a,{size:20}),renderStats:Object(x.jsx)("h3",{className:"fw-bolder mb-75",children:"21,459"})})}),Object(x.jsx)(u.B,{lg:"3",sm:"6",children:Object(x.jsx)(H.a,{color:"danger",statTitle:"Paid Users",icon:Object(x.jsx)(V.a,{size:20}),renderStats:Object(x.jsx)("h3",{className:"fw-bolder mb-75",children:"4,567"})})}),Object(x.jsx)(u.B,{lg:"3",sm:"6",children:Object(x.jsx)(H.a,{color:"success",statTitle:"Active Users",icon:Object(x.jsx)(Q.a,{size:20}),renderStats:Object(x.jsx)("h3",{className:"fw-bolder mb-75",children:"19,860"})})}),Object(x.jsx)(u.B,{lg:"3",sm:"6",children:Object(x.jsx)(H.a,{color:"warning",statTitle:"Pending Users",icon:Object(x.jsx)(Y.a,{size:20}),renderStats:Object(x.jsx)("h3",{className:"fw-bolder mb-75",children:"237"})})})]}),Object(x.jsx)(G,{})]})}},521:function(e,a,t){},570:function(e,a,t){"use strict";var l=t(13),s=t(17),c=t(138),n=t(907),r=t(3),i=t.n(r),o=t(518),j=t.n(o),b=t(99),u=t(10),d=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"];a.a=function(e){var a,t=e.open,r=e.size,o=e.title,m=e.width,x=e.children,h=e.closeBtn,O=e.className,p=e.toggleSidebar,v=e.bodyClassName,f=e.contentClassName,N=e.wrapperClassName,g=e.headerClassName,C=Object(c.a)(e,d),y=h||Object(u.jsx)(n.a,{className:"cursor-pointer",size:15,onClick:p});return Object(u.jsxs)(b.Q,Object(l.a)(Object(l.a)(Object(l.a)({isOpen:t,toggle:p,contentClassName:i()("overflow-hidden",Object(s.a)({},f,f)),modalClassName:i()("modal-slide-in",Object(s.a)({},N,N)),className:i()((a={},Object(s.a)(a,O,O),Object(s.a)(a,"sidebar-lg","lg"===r),Object(s.a)(a,"sidebar-sm","sm"===r),a))},void 0!==m?{style:{width:String(m)+"px"}}:{}),C),{},{children:[Object(u.jsx)(b.T,{className:i()(Object(s.a)({},g,g)),toggle:p,close:y,tag:"div",children:Object(u.jsx)("h5",{className:"modal-title",children:Object(u.jsx)("span",{className:"align-middle",children:o})})}),Object(u.jsx)(j.a,{options:{wheelPropagation:!1},children:Object(u.jsx)(b.R,{className:i()("flex-grow-1",Object(s.a)({},v,v)),children:x})})]}))}},657:function(e,a,t){},776:function(e,a,t){"use strict";var l=t(17),s=t(3),c=t.n(s),n=t(99),r=t(10);a.a=function(e){var a=e.icon,t=e.color,s=e.stats,i=e.renderStats,o=e.statTitle,j=e.className,b=e.statsMargin;return Object(r.jsx)(n.l,{children:Object(r.jsx)(n.m,{className:j,children:Object(r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(r.jsxs)("div",{children:[i||Object(r.jsx)("h2",{className:c()("fw-bolder",Object(l.a)({"mb-0":!b},b,b)),children:s}),Object(r.jsx)("p",{className:"card-text",children:o})]}),Object(r.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(t?"bg-light-".concat(t):"bg-light-primary"),children:Object(r.jsx)("div",{className:"avatar-content",children:a})})]})})})}}}]);
//# sourceMappingURL=56.12cdc242.chunk.js.map