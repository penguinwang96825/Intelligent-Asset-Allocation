(this["webpackJsonpreact-web"]=this["webpackJsonpreact-web"]||[]).push([[0],{175:function(e,t,a){e.exports=a(282)},180:function(e,t,a){},181:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),l=a.n(r),c=(a(180),a(6)),s=a(17),i=a(26),u=(a(181),a(324)),m=a(338),p=a(339),d=a(326),f=a(328),g=a(286),b=a(109),h=a(284),v=a(329),y=a(356),E=a(142),S=a.n(E),x=a(44),k=Object(u.a)((function(e){return{root:{display:"flex"},accountButton:{color:"inherit"},popperStyle:{zIndex:"1400"}}}));function O(e){var t=k(),a=o.a.useState(!1),n=Object(c.a)(a,2),r=n[0],l=n[1],s=o.a.useRef(null),i=(new x.a,function(e){s.current&&s.current.contains(e.target)||l(!1)}),u=function(t){e.setUserData({userId:null,userName:null,userEmail:null});var a=new x.a;a.remove("userId",{path:"/"}),a.remove("userName",{path:"/"}),a.remove("userEmail",{path:"/"}),i(t),window.location.reload(!1)};function m(e){"Tab"===e.key&&(e.preventDefault(),l(!1))}var p=o.a.useRef(r);return o.a.useEffect((function(){!0===p.current&&!1===r&&s.current.focus(),p.current=r}),[r]),o.a.createElement("div",{className:t.root},o.a.createElement("div",null,o.a.createElement(d.a,{startIcon:o.a.createElement(S.a,null),ref:s,"aria-controls":r?"menu-list-grow":void 0,"aria-haspopup":"true",className:t.accountButton,onClick:function(){l((function(e){return!e}))}},void 0==e.userData.userName?"Account":e.userData.userName),o.a.createElement(h.a,{className:t.popperStyle,open:r,anchorEl:s.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,a=e.placement;return o.a.createElement(g.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),o.a.createElement(b.a,null,o.a.createElement(f.a,{onClickAway:i},o.a.createElement(y.a,{autoFocusItem:r,id:"menu-list-grow",onKeyDown:m},o.a.createElement(v.a,{onClick:u},"Logout")))))}))))}var j=a(13),w=a.n(j),N=a(20),D=a(351),C=a(330),P=a(337),I=a(333),T=a(332),B=a(331),M=a(157),A=a(50),R="http://127.0.0.1:5000",W=["#d847a7","#5bc452","#a848bf","#8ebc3a","#9d68e3","#41922e","#4d54c3","#b4b534","#6978e7","#d5a334","#588de5","#d97f2e","#7b4fab","#48c27b","#e14079","#328b4c","#db7ada","#7a8d2b","#a04b97","#68c194","#d23c4d","#47cebe","#d64b2b","#54b9e5","#a44925","#3db6c0","#b03371","#6b9854","#cf90d5","#4e6e27","#9279c3","#bcab59","#4860a5","#a2bb73","#725392","#7b6e20","#a0a0e2","#96642d","#4e90c8","#e57f5f","#379577","#aa4356","#367042","#df80a9","#206e54","#e17f82","#77733e","#965581","#d69d6a","#995258"],L=Object(u.a)((function(e){return{dialogLeftButton:{marginRight:"auto"},dialogInputBox:{margin:e.spacing(0,0,2)},dialogActions:{display:"flex",margin:e.spacing(0,2,2)},errorMessage:{color:"#f44336",margin:e.spacing(0,2,0)},circleProgress:{zIndex:999,position:"absolute",top:"50%",left:"50%",marginTop:"-24px",marginLeft:"-24px"}}}));function z(e){var t=L(),a=o.a.useState(!1),n=Object(c.a)(a,2),r=n[0],l=n[1],s=o.a.useState(!1),i=Object(c.a)(s,2),u=(i[0],i[1],o.a.useState(!1)),m=Object(c.a)(u,2),p=m[0],f=m[1],g=o.a.useState(!1),b=Object(c.a)(g,2),h=b[0],v=b[1],y=o.a.useState(""),E=Object(c.a)(y,2),S=E[0],k=E[1],O=o.a.useState(""),j=Object(c.a)(O,2),W=j[0],z=j[1],F=o.a.useState(""),U=Object(c.a)(F,2),H=U[0],J=U[1],_=o.a.useRef(),K=o.a.useRef(),G=function(){_.current.value.length<1?(console.log("Email is empty"),f(!0),k("Email cannot be empty")):(f(!1),k(""))},q=function(){K.current.value.length<1?(console.log("Password is empty"),v(!0),z("Password cannot be empty")):(v(!1),z(""))},Y=function(){var t=Object(N.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.openSignup(),e.handleClose();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=Object(N.a)(w.a.mark((function t(a){var n,o,r,c,s,i,u;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(G(),q(),J(""),!(_.current.value.length>0&&K.current.value.length>0)){t.next=23;break}return n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userEmail:_.current.value,userPassword:K.current.value})},t.prev=5,l(!0),t.next=9,fetch(R+"/user/login",n);case 9:if(!(o=t.sent).ok){t.next=15;break}return t.next=13,o.json();case 13:(r=t.sent).isSuccess?(c=r.userId,s=r.userName,i=_.current.value,e.setUserData({userId:c,userName:s,userEmail:i}),(u=new x.a).set("userId",c,{path:"/"}),u.set("userName",s,{path:"/"}),u.set("userEmail",i,{path:"/"}),e.handleClose()):J(r.errorMsg);case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),alert("fetch failed",t.t0);case 20:return t.prev=20,l(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[5,17,20,23]])})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(C.a,{open:e.isOpen,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},o.a.createElement(M.a,{in:r,unmountOnExit:!0},o.a.createElement(B.a,{className:t.circleProgress})),o.a.createElement(T.a,{id:"form-dialog-title"},"Login"),o.a.createElement(I.a,null,o.a.createElement(D.a,{autoFocus:!0,inputRef:_,margin:"dense",id:"email",label:"Email Address",type:"email",variant:"outlined",fullWidth:!0,error:p,helperText:S,className:t.dialogInputBox,onBlur:function(){G()}}),o.a.createElement(D.a,{inputRef:K,margin:"dense",id:"password",label:"Password",type:"password",variant:"outlined",fullWidth:!0,error:h,helperText:W,className:t.dialogInputBox,onBlur:function(){q()}}),o.a.createElement(A.a,{className:t.errorMessage},H)),o.a.createElement(P.a,{className:t.dialogActions},o.a.createElement(d.a,{onClick:Y,color:"primary",className:t.dialogLeftButton},"Sign up"),o.a.createElement(d.a,{variant:"contained",onClick:$,color:"primary"},"Login"))))}var F=Object(u.a)((function(e){return{dialogInputBox:{margin:e.spacing(0,0,2)},dialogActions:{display:"flex",margin:e.spacing(0,2,2)},circleProgress:{zIndex:999,position:"absolute",top:"50%",left:"50%",marginTop:"-24px",marginLeft:"-24px"}}}));function U(e){var t=F(),a=o.a.useState(!1),n=Object(c.a)(a,2),r=n[0],l=n[1],s=o.a.useState(!1),i=Object(c.a)(s,2),u=i[0],m=i[1],p=o.a.useState(!1),f=Object(c.a)(p,2),g=f[0],b=f[1],h=o.a.useState(!1),v=Object(c.a)(h,2),y=v[0],E=v[1],S=o.a.useState(""),x=Object(c.a)(S,2),k=x[0],O=x[1],j=o.a.useState(""),A=Object(c.a)(j,2),W=A[0],L=A[1],z=o.a.useState(""),U=Object(c.a)(z,2),H=U[0],J=U[1],_=o.a.useRef(),K=o.a.useRef(),G=o.a.useRef(),q=function(){_.current.value.length<1?(console.log("Name is empty"),m(!0),O("Name cannot be empty")):(m(!1),O(""))},Y=function(){K.current.value.length<1?(console.log("Email is empty"),b(!0),L("Email cannot be empty")):(b(!1),L(""))},$=function(){G.current.value.length<1?(console.log("Password is empty"),E(!0),J("Password cannot be empty")):(E(!1),J(""))},V=function(){var t=Object(N.a)(w.a.mark((function t(a){var n,o,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(q(),Y(),$(),!(_.current.value.length>0&&K.current.value.length>0&&G.current.value.length>0)){t.next=23;break}return n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userName:_.current.value,userEmail:K.current.value,userPassword:G.current.value})},t.prev=5,l(!0),t.next=9,fetch(R+"/user/signup",n);case 9:if(!(o=t.sent).ok){t.next=15;break}return t.next=13,o.json();case 13:(r=t.sent).isSuccess?(e.setDialogMessage("Sign up success!"),e.openMessageDialog(),e.handleClose()):alert(r.errorMsg);case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),alert("fetch failed",t.t0);case 20:return t.prev=20,l(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[5,17,20,23]])})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(C.a,{open:e.isOpen,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},o.a.createElement(M.a,{in:r,unmountOnExit:!0},o.a.createElement(B.a,{className:t.circleProgress})),o.a.createElement(T.a,{id:"form-dialog-title"},"Signup"),o.a.createElement(I.a,null,o.a.createElement(D.a,{autoFocus:!0,inputRef:_,margin:"dense",id:"name",label:"User Name",type:"text",variant:"outlined",fullWidth:!0,error:u,helperText:k,className:t.dialogInputBox,onBlur:function(){q()}}),o.a.createElement(D.a,{inputRef:K,margin:"dense",id:"email",label:"Email Address",type:"email",variant:"outlined",fullWidth:!0,error:g,helperText:W,className:t.dialogInputBox,onBlur:function(){Y()}}),o.a.createElement(D.a,{inputRef:G,margin:"dense",id:"password",label:"Password",type:"password",variant:"outlined",fullWidth:!0,error:y,helperText:H,className:t.dialogInputBox,onBlur:function(){$()}})),o.a.createElement(P.a,{className:t.dialogActions},o.a.createElement(d.a,{variant:"contained",onClick:V,color:"primary"},"Sign up"))))}var H=Object(u.a)((function(e){return{message:{textAlign:"center",margin:e.spacing(0,0,2)}}}));function J(e){var t=H();return o.a.createElement("div",null,o.a.createElement(C.a,{open:e.isOpen,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},null!=e.title&&o.a.createElement(T.a,null,e.title),o.a.createElement(I.a,null,o.a.createElement(A.a,{className:t.message},e.message))))}var _=Object(u.a)((function(e){return{root:{flexGrow:1},brandButton:{marginRight:e.spacing(2)},rightButtons:{marginLeft:"auto",display:"inline-flex"}}}));function K(e){var t=_(),a=o.a.useState(!1),n=Object(c.a)(a,2),r=n[0],l=n[1],s=o.a.useState(!1),i=Object(c.a)(s,2),u=i[0],f=i[1],g=o.a.useState(!1),b=Object(c.a)(g,2),h=b[0],v=b[1],y=o.a.useState(""),E=Object(c.a)(y,2),S=E[0],x=E[1];return o.a.createElement("div",{className:t.root},o.a.createElement(m.a,{position:"static"},o.a.createElement(z,{isOpen:r,handleClose:function(){l(!1)},setUserData:e.setUserData,openSignup:function(){f(!0)}}),o.a.createElement(U,{isOpen:u,handleClose:function(){f(!1)},setDialogMessage:x,openMessageDialog:function(){v(!0)}}),o.a.createElement(J,{isOpen:h,handleClose:function(){v(!1)},message:S}),o.a.createElement(p.a,null,o.a.createElement(d.a,{className:t.brandButton,color:"inherit",size:"large"},"Hugging Money"),o.a.createElement("section",{className:t.rightButtons},void 0==e.userData.userEmail?o.a.createElement(d.a,{color:"inherit",onClick:function(e){l(!0)}},"Login"):o.a.createElement(O,{setUserData:e.setUserData,userData:e.userData})))))}var G=a(87),q=a(342),Y=Object(u.a)((function(e){return{dialogInputBox:{margin:e.spacing(0,0,2)},dialogActions:{display:"flex",margin:e.spacing(0,2,2)},errorMessage:{color:"#f44336",margin:e.spacing(0,2,0)},circleProgress:{zIndex:999,position:"absolute",top:"50%",left:"50%",marginTop:"-24px",marginLeft:"-24px"}}}));function $(e){var t=Y(),a=o.a.useState(!1),n=Object(c.a)(a,2),r=n[0],l=(n[1],o.a.useState(!1)),s=Object(c.a)(l,2),i=(s[0],s[1],o.a.useState(!1)),u=Object(c.a)(i,2),m=u[0],p=u[1],f=o.a.useState(""),g=Object(c.a)(f,2),b=g[0],h=g[1],v=o.a.useState(""),y=Object(c.a)(v,2),E=y[0],S=y[1],x=o.a.useRef(),k=function(){x.current.value.length<1?(p(!0),h("Portfolio's name cannot be empty")):(p(!1),h(""))},O=function(){var t=Object(N.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(),S(""),x.current.value.length>0&&e.createNewPortfolio(x.current.value);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(C.a,{open:e.isOpen,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},o.a.createElement(M.a,{in:r,unmountOnExit:!0},o.a.createElement(B.a,{className:t.circleProgress})),o.a.createElement(T.a,{id:"form-dialog-title"},"Create New Portfolio"),o.a.createElement(I.a,null,o.a.createElement(D.a,{autoFocus:!0,inputRef:x,margin:"dense",id:"portfolioName",label:"Portfolio name",type:"text",variant:"outlined",fullWidth:!0,error:m,helperText:b,className:t.dialogInputBox,onBlur:function(){k()}}),o.a.createElement(A.a,{className:t.errorMessage},E)),o.a.createElement(P.a,{className:t.dialogActions},o.a.createElement(d.a,{variant:"contained",onClick:O,color:"primary"},"Create"))))}var V=a(350),Q=a(287),X=a(340),Z=a(341),ee=a(144),te=a.n(ee),ae=Object(u.a)((function(e){return{listItemText:{textOverflow:"ellipsis"}}}));function ne(e){var t=ae();return o.a.createElement(Q.a,{button:!0,alignItems:"flex-start",onClick:function(){console.log(e.companySymbol),e.stockListItemOnclick(e.companySymbol)}},o.a.createElement(X.a,{classes:{primary:t.listItemText},primary:e.companyName,secondary:e.companySymbol}),o.a.createElement(Z.a,{edge:"end","aria-label":"delete",onClick:function(){e.removeSelectedStock(e.companyId)}},o.a.createElement(te.a,null)))}var oe=a(107),re=a(343),le=Object(u.a)((function(e){return{stockComponent:{margin:e.spacing(0,0,2)},listSubHeader:{textAlign:"initial"},listTitle:{margin:e.spacing(1,1,1),display:"inline-flex"},saveButton:{marginLeft:"auto",height:"36px",width:"64px"},emptyText:{margin:e.spacing(2,0,2),textAlign:"center"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));var ce=function(e){var t=le(),a=function(t){var a=Array.from(e.selectedStocks),n=a.findIndex((function(e){return e.companyId===t}));if(-1!==n){a.splice(n,1);var o=a.map((function(e,t,a){return e.companySymbol}));e.setSelectedStocks(o)}},n=function(t){console.log(t),t===e.currentSelectedStock&&e.setCurrentSelectedStock(t)},r=function(e){var t=e.data,r=e.index,l=e.style,c=t[r];return o.a.createElement("div",{style:l},o.a.createElement(ne,{companyName:c.companyName,companySymbol:c.companySymbol,companyId:c.companyId,removeSelectedStock:a,stockListItemOnclick:n}))};return o.a.createElement(V.a,{className:t.stockComponent,component:q.a,container:!0,direction:"column"},o.a.createElement(q.a,{item:!0,className:t.listTitle},o.a.createElement(A.a,{variant:"h6"},"Stocks"),o.a.createElement(d.a,{className:t.saveButton,variant:"outlined",disabled:e.saveButtonLoading,onClick:function(){e.savePortfolio()}},e.saveButtonLoading?o.a.createElement(B.a,{size:24,className:t.buttonProgress}):"Save")),o.a.createElement(re.a,null),e.selectedStocks.length>0?o.a.createElement(oe.a,{height:520,itemSize:60,itemCount:e.selectedStocks.length,itemData:e.selectedStocks},r):o.a.createElement(A.a,{className:t.emptyText},"This portfolio is empty"))},se=Object(u.a)((function(e){var t;return{root:(t={height:"100vh",padding:e.spacing(1,1,1),flexGrow:1},Object(s.a)(t,e.breakpoints.up("xs"),{width:"60vw"}),Object(s.a)(t,e.breakpoints.up("md"),{width:"50vw"}),Object(s.a)(t,e.breakpoints.up("lg"),{width:"25vw"}),Object(s.a)(t,"position","fixed"),Object(s.a)(t,"zIndex",1400),Object(s.a)(t,"background","white"),t)}}));function ie(e){var t=se();return o.a.createElement(V.a,{className:t.root,boxShadow:1},o.a.createElement(ce,{selectedStocks:e.selectedStocks,setSelectedStocks:e.setSelectedStocks,currentSelectedStock:e.currentSelectedStock,setCurrentSelectedStock:e.setCurrentSelectedStock,savePortfolio:e.savePortfolio,saveButtonLoading:e.saveButtonLoading}))}var ue=a(352),me=a(154),pe=Object(u.a)((function(e){return{searchBox:{display:"flex",alignItems:"center",minWidth:300}}}));var de=function(e){var t=o.a.useState(null),a=Object(c.a)(t,2),n=(a[0],a[1],e.additionalStyles,e.companyData),r=e.selectedStocks,l=e.setSelectedStocks,s=pe(),u=function(t){if(console.log(t),void 0!=e.userData.userId&&void 0!=e.currentSelectedPortfolio)if(null!=r.find((function(e){return e.companyId===t.companyId})))e.setDialogTitle("Error"),e.setDialogMessage("The stock is already in the list"),e.openMessageDialog();else{var a=r.map((function(e,t,a){return e.companySymbol}));l([].concat(Object(G.a)(a),[t.companySymbol])),e.setDialogTitle("Success"),e.setDialogMessage("Add "+t.companyName+" to your portfolio"),e.openMessageDialog()}else void 0==e.userData.userId?(e.setDialogTitle("Error"),e.setDialogMessage("Please login first"),e.openMessageDialog()):void 0==e.currentSelectedPortfolio&&(e.setDialogTitle("Error"),e.setDialogMessage("Create portfolio first"),e.openMessageDialog())};return o.a.createElement("div",null,o.a.createElement(ue.a,{freeSolo:!0,className:s.searchBox,id:"search-box",disableClearable:!0,size:"small",groupBy:function(e){return e.volatility},onChange:function(e,t){u(t)},options:n.sort((function(e,t){return e.volatility===t.volatility?0:"stable"===e.volatility?-1:"stable"===t.volatility?1:void 0})),getOptionLabel:function(e){return e.companyName},renderOption:function(e){return o.a.createElement(o.a.Fragment,null,e.companyName," (",e.companySymbol,")")},filterOptions:function(e,t){var a=t.inputValue;return Object(me.a)(e,a,{keys:["companyName","companySymbol"]}).sort((function(e,t){return e.volatility===t.volatility?0:"stable"===e.volatility?-1:"stable"===t.volatility?1:void 0}))},renderInput:function(e){return o.a.createElement(D.a,Object.assign({},e,{label:"Add company",margin:"normal",variant:"outlined",InputProps:Object(i.a)(Object(i.a)({},e.InputProps),{},{type:"search"})}))}}))},fe=a(147),ge=a.n(fe),be=a(148),he=a.n(be),ve=a(146),ye=a.n(ve),Ee=a(344),Se=Object(u.a)((function(e){return{root:{display:"flex"},expandButton:{color:"inherit"},popperRoot:{zIndex:1400},popperMenuItem:{paddingRight:"8px"}}}));function xe(e){var t=Se(),a=o.a.useState(!1),n=Object(c.a)(a,2),r=n[0],l=n[1],s=o.a.useRef(null),i=function(e){s.current&&s.current.contains(e.target)||l(!1)},u=function(t){void 0==e.userData.userId?(e.setDialogTitle("Error"),e.setDialogMessage("Please login first"),e.openMessageDialog()):e.handleCreatePortfolioDialogOpen(),i(t)},m=function(e){"Tab"===e.key&&(e.preventDefault(),l(!1))},p=o.a.useRef(r);o.a.useEffect((function(){!0===p.current&&!1===r&&s.current.focus(),p.current=r}),[r]);var E=e.userPortfolios.map((function(t){return o.a.createElement(v.a,{key:t.portfolioId.toString(),onClick:function(a){!function(t,a){e.setCurrentSelectedPortfolio(a),console.log(a);var n=e.userPortfolios.find((function(e,t,n){return e.portfolioId===a})).portfolioStocks;e.setSelectedStocks(n),e.setSideBarExpand(!0),i(t)}(a,t.portfolioId)}},o.a.createElement(A.a,{variant:"inherit",noWrap:!0},t.portfolioName))}));return o.a.createElement("div",{className:t.root},o.a.createElement(Ee.a,{title:"Portfolio Stocks"},o.a.createElement(Z.a,{edge:"start",className:t.menuButton,onClick:function(){e.setSideBarExpand(!e.isSideBarExpanded)},color:"inherit","aria-label":"menu"},o.a.createElement(ye.a,null))),o.a.createElement(d.a,{endIcon:o.a.createElement(ge.a,null),ref:s,"aria-controls":r?"menu-list-grow":void 0,"aria-haspopup":"true",className:t.expandButton,onClick:function(){l((function(e){return!e}))}},o.a.createElement(A.a,{variant:"inherit",noWrap:!0},void 0==e.currentSelectedPortfolio||0==e.userPortfolios.length?"My Portfolios":e.userPortfolios.find((function(t,a,n){return t.portfolioId===e.currentSelectedPortfolio})).portfolioName)),o.a.createElement(h.a,{className:t.popperRoot,open:r,anchorEl:s.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var a=e.TransitionProps,n=e.placement;return o.a.createElement(g.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),o.a.createElement(b.a,null,o.a.createElement(f.a,{onClickAway:i},o.a.createElement(y.a,{autoFocusItem:r,id:"menu-list-grow",onKeyDown:m},E,o.a.createElement(re.a,{light:!0,component:"li"}),o.a.createElement(v.a,{onClick:u},o.a.createElement(A.a,{variant:"inherit",noWrap:!0,className:t.popperMenuItem},"Create New Portfolio"),o.a.createElement(he.a,{fontSize:"small",className:t.popperMenuItem}))))))})))}var ke=a(150),Oe=a.n(ke),je=a(149),we=a.n(je),Ne=a(151),De=a.n(Ne),Ce=Object(u.a)((function(e){return{root:{marginLeft:"auto",display:"inline-flex"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}}));function Pe(e){var t=Ce();return o.a.createElement("div",{className:t.root},o.a.createElement(Ee.a,{title:"Weight"},o.a.createElement(Z.a,{edge:"start",color:"inherit",onClick:function(){e.setSectionCode(2)},"aria-label":"asset weight"},o.a.createElement(we.a,null))),o.a.createElement(Ee.a,{title:"Performance"},o.a.createElement(Z.a,{edge:"start",color:"inherit",onClick:function(){e.setSectionCode(1)},"aria-label":"show performance"},o.a.createElement(Oe.a,null))),o.a.createElement(Ee.a,{title:"News"},o.a.createElement(Z.a,{edge:"start",color:"inherit",onClick:function(){e.setSectionCode(0)},"aria-label":"show News"},o.a.createElement(De.a,null))))}var Ie=a(354),Te=Object(u.a)((function(e){return{root:{width:"100%",padding:e.spacing(1,2,1),boxShadow:"0 0 1px 1px rgba(0, 0, 0 ,.1)"},menuButtons:{display:"inline-flex"}}}));function Be(e){var t=Te();return o.a.createElement(q.a,{className:t.root,container:!0,direction:"row",justify:"flex-start",alignItems:"center"},o.a.createElement(q.a,{item:!0,xs:12,sm:3,className:t.menuButtons},o.a.createElement(xe,{isSideBarExpanded:e.isSideBarExpanded,setSideBarExpand:e.setSideBarExpand,setSelectedStocks:e.setSelectedStocks,userPortfolios:e.userPortfolios,setUserPortfolios:e.setUserPortfolios,currentSelectedPortfolio:e.currentSelectedPortfolio,setCurrentSelectedPortfolio:e.setCurrentSelectedPortfolio,handleCreatePortfolioDialogOpen:e.handleCreatePortfolioDialogOpen,setDialogTitle:e.setDialogTitle,setDialogMessage:e.setDialogMessage,openMessageDialog:e.openMessageDialog,userData:e.userData}),o.a.createElement(Ie.a,{smUp:!0},o.a.createElement(Pe,{showSearchButton:!0,setSectionCode:e.setSectionCode}))),o.a.createElement(q.a,{item:!0,container:!0,xs:12,sm:6,justify:"center"},o.a.createElement(de,{userData:e.userData,selectedStocks:e.selectedStocks,setSelectedStocks:e.setSelectedStocks,companyData:e.companyData,setDialogTitle:e.setDialogTitle,setDialogMessage:e.setDialogMessage,openMessageDialog:e.openMessageDialog,currentSelectedPortfolio:e.currentSelectedPortfolio})),o.a.createElement(Ie.a,{xsDown:!0},o.a.createElement(q.a,{item:!0,container:!0,sm:3,justify:"center"},o.a.createElement(Pe,{setSectionCode:e.setSectionCode}))))}var Me=a(345),Ae=a(346),Re=Object(u.a)((function(e){return{root:{width:"100%",margin:e.spacing(0,0,2)},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},sentence:Object(i.a)({},e.typography.body1),keySentence:Object(i.a)(Object(i.a)({},e.typography.body1),{},{backgroundColor:"rgba(255, 229, 100, 0.2)"})}}));function We(e){var t=Re();t.bullet;return o.a.createElement(Me.a,{className:t.root,variant:"outlined"},o.a.createElement(Ae.a,null,o.a.createElement(A.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.companyName),o.a.createElement(A.a,{variant:"h5",component:"h2"},e.title),o.a.createElement(A.a,{className:t.pos,color:"textSecondary"},e.date),o.a.createElement(A.a,{variant:"body2",component:"p"},void 0!=e.paragraph&&o.a.createElement("div",null,e.paragraph.map((function(e,a){return e.isKeySentence?o.a.createElement("p",{key:a,className:t.keySentence},e.text):o.a.createElement("p",{key:a,className:t.sentence},e.text)}))))))}var Le=Object(u.a)((function(e){return{root:{},listSubHeader:{textAlign:"initial"},listTitle:{margin:e.spacing(1,1,1),display:"inline-flex"},saveButton:{marginLeft:"auto",height:"36px",width:"64px"},emptyText:{margin:e.spacing(2,0,2),textAlign:"center"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));var ze=function(e){var t=Le();return o.a.createElement(q.a,{className:t.root,container:!0,direction:"column"},e.newsData.map((function(e){return o.a.createElement(We,{key:e.id,date:e.date,title:e.title,companyName:e.companyName,paragraph:e.paragraph})})))},Fe=Object(u.a)((function(e){return{sectionRoot:{margin:e.spacing(2,0,2)},sectionTitle:{margin:e.spacing(0,0,2)},emptyText:{margin:e.spacing(2,0,2),textAlign:"center"}}}));function Ue(e){var t=Fe();return o.a.createElement("div",{className:t.sectionRoot},o.a.createElement(A.a,{className:t.sectionTitle,variant:"h5"},"News"),e.newsData.length>0?o.a.createElement(ze,{newsData:e.newsData}):o.a.createElement(A.a,{className:t.emptyText},"Add company to the portfolio to see news"))}var He=a(54),Je=Object(u.a)((function(e){return{sectionRoot:{margin:e.spacing(2,0,2)},sectionTitle:{margin:e.spacing(0,0,2)},chartTitle:{margin:e.spacing(2,0,2)}}}));function _e(e){var t=Je();return o.a.createElement("div",{className:t.sectionRoot},o.a.createElement(A.a,{className:t.sectionTitle,variant:"h5"},"Performance"),o.a.createElement(He.Line,{data:e.portfolioPerformances}),o.a.createElement(A.a,{className:t.chartTitle,variant:"h5"},"History Weights"),o.a.createElement(He.Line,{data:e.historyWeights}))}var Ke=a(353),Ge=a(357),qe=a(348),Ye=a(335),$e=a(289),Ve=a(334),Qe=a(336),Xe=a(347),Ze=Object(u.a)((function(e){return{sectionRoot:{margin:e.spacing(2,0,2)},sectionTitle:{margin:e.spacing(0,0,2)},chartTitle:{margin:e.spacing(2,0,2)},formControl:{margin:e.spacing(3)},button:{margin:e.spacing(1,1,0,0)}}}));function et(e){var t=Ze();return o.a.createElement("div",{className:t.sectionRoot},o.a.createElement(A.a,{className:t.sectionTitle,variant:"h5"},"Portfolio Weights"),o.a.createElement(q.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},o.a.createElement(Ye.a,null,o.a.createElement(Qe.a,{htmlFor:"invest-money-input"},"Invest Money"),o.a.createElement(Ve.a,{id:"invest-money-input",value:e.investMoney,type:"number",onChange:function(t){e.setInvestMoney(parseInt(t.target.value))},startAdornment:o.a.createElement(Xe.a,{position:"start"},"$")})),o.a.createElement(Ye.a,{component:"fieldset",className:t.formControl},o.a.createElement($e.a,{component:"legend"},"Model select"),o.a.createElement(Ge.a,{"aria-label":"model",name:"model",value:e.selectedModel,onChange:function(t){e.setModel(t.target.value)}},o.a.createElement(qe.a,{value:"basic",control:o.a.createElement(Ke.a,null),label:"Markowitz"}),o.a.createElement(qe.a,{value:"blacklitterman",control:o.a.createElement(Ke.a,null),label:"Black litterman"}),o.a.createElement(qe.a,{value:"equalweight",control:o.a.createElement(Ke.a,null),label:"Equal Weight"})),o.a.createElement(d.a,{type:"submit",variant:"outlined",color:"primary",className:t.button,onClick:function(){e.getWeights(e.selectedModel,e.selectedStocks)}},"Save setting"))),e.portfolioWeights.hasOwnProperty("labels")&&o.a.createElement("div",null,o.a.createElement(A.a,{className:t.chartTitle,variant:"h5"},"Current Weights"),o.a.createElement(He.Doughnut,{data:e.portfolioWeights})))}var tt=a(288),at=a(153),nt=Object(u.a)((function(e){var t;return{portfolioPage:(t={height:"calc(100% - 56px)"},Object(s.a)(t,"".concat(e.breakpoints.up("xs")," and (orientation: landscape)"),{height:"calc(100% - 48px)"}),Object(s.a)(t,e.breakpoints.up("sm"),{height:"calc(100% - 64px)"}),Object(s.a)(t,"display","flex"),Object(s.a)(t,"flexDirection","column"),t),title:{textAlign:"initial",margin:e.spacing(4,0,2)},portfolioContent:{flex:"auto",overflowY:"scroll"},companyName:{margin:e.spacing(4,0,2)},sideBar:{zIndex:1300},backdrop:{zIndex:1600,color:"#fff"}}}));var ot=function(e){var t=nt(),a=o.a.useState([]),n=Object(c.a)(a,2),r=n[0],l=n[1],s=o.a.useState([]),i=Object(c.a)(s,2),u=i[0],m=i[1],p=o.a.useState({}),d=Object(c.a)(p,2),f=d[0],g=d[1],b=o.a.useState([]),h=Object(c.a)(b,2),v=h[0],y=h[1],E=o.a.useState([]),S=Object(c.a)(E,2),x=S[0],k=S[1],O=o.a.useState(!1),j=Object(c.a)(O,2),D=j[0],C=j[1],P=o.a.useState(!1),I=Object(c.a)(P,2),T=I[0],M=I[1],A=o.a.useState(!1),L=Object(c.a)(A,2),z=L[0],F=L[1],U=o.a.useState(!1),H=Object(c.a)(U,2),_=H[0],K=H[1],Y=o.a.useState(!1),V=Object(c.a)(Y,2),Q=V[0],X=(V[1],o.a.useState(!1)),Z=Object(c.a)(X,2),ee=Z[0],te=Z[1],ae=o.a.useState(""),ne=Object(c.a)(ae,2),oe=ne[0],re=ne[1],le=o.a.useState(""),ce=Object(c.a)(le,2),se=ce[0],ue=ce[1],me=o.a.useState(null),pe=Object(c.a)(me,2),de=pe[0],fe=pe[1],ge=o.a.useState("APPL"),be=Object(c.a)(ge,2),he=be[0],ve=be[1],ye=o.a.useState(2),Ee=Object(c.a)(ye,2),Se=Ee[0],xe=Ee[1],ke=o.a.useState({}),Oe=Object(c.a)(ke,2),je=Oe[0],we=Oe[1],Ne=o.a.useState(0),De=Object(c.a)(Ne,2),Ce=(De[0],De[1]),Pe=o.a.useState({}),Ie=Object(c.a)(Pe,2),Te=Ie[0],Me=Ie[1],Ae=o.a.useState({}),Re=Object(c.a)(Ae,2),We=Re[0],Le=Re[1],ze=o.a.useState([]),Fe=Object(c.a)(ze,2),He=Fe[0],Je=Fe[1],Ke=o.a.useState("basic"),Ge=Object(c.a)(Ke,2),qe=Ge[0],Ye=Ge[1],$e=o.a.useState(!1),Ve=Object(c.a)($e,2),Qe=Ve[0],Xe=Ve[1],Ze=o.a.useState(1),ot=Object(c.a)(Ze,2),rt=ot[0],lt=ot[1],ct=function(){Xe(!1)},st=function(t){if(void 0!=e.userData.userId){console.log(x),console.log(t);for(var a=[],n=0;n<t.length;n++)a.push(f[t[n]]);console.log(a),k(a)}else console.log("Please login first"),ue("Please login first"),it()},it=function(){F(!0)},ut=function(){te(!1)},mt=function(){var e=Object(N.a)(w.a.mark((function e(){var t,a,n,o,r,c,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET"},e.prev=1,console.log("Try to get company data"),e.next=5,fetch(R+"/company",t);case 5:if(!(a=e.sent).ok){e.next=13;break}return e.next=9,a.json();case 9:if(n=e.sent,console.log("Company data:"),console.log(n),n.isSuccess){for(o={},r=[],c=0;c<n.data.length;c++)s={companyIndustry:n.data[c].industry,companyName:n.data[c].company_name,companySymbol:n.data[c].symbol,companyId:n.data[c].id_,volatility:n.data[c].volatility},o[n.data[c].symbol]=s,r.push(s);l(r),g(o)}else alert(n.errorMsg);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log("Fetch company data failed",e.t0);case 18:return e.prev=18,e.finish(18);case 20:case"end":return e.stop()}}),e,null,[[1,15,18,20]])})));return function(){return e.apply(this,arguments)}}(),pt=function(e){return{label:"",fill:!1,lineTension:.1,backgroundColor:W[e],borderColor:W[e],borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:W[e],pointBackgroundColor:"#fff",pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:W[e],pointHoverBorderColor:W[e],pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:5,data:[]}},dt=function(e,t,a){for(var n=[],o=[],r=[],l=[],c=Math.floor(a.length/42),s=[],i=0;i<t.length;i++){for(var u=pt(i),m=t[i].slice(1),p=[],d=0;d<m.length;d+=c)p.push(m[d]),0===i&&s.push(a[d]);u.data=p,u.label=e[i];var f=t[i][t[i].length-1];r.push(e[i]+": "+f+"%"),o.push(f),l.push(W[i]),n.push(u)}var g={labels:s,datasets:n},b={labels:r,datasets:[{data:o,backgroundColor:l,hoverBackgroundColor:l}]};console.log(b),console.log(g),Me(b),Le(g)},ft=function(e,t,a){for(var n=Math.floor(a.length/42),o=[],r=[],l=[],c=pt(0),s=pt(1),i=e.slice(1),u=t.slice(1),m=0;m<e.length;m+=n)r.push(i[m]),l.push(u[m]),o.push(a[m]);c.label="History performance",c.data=r,s.label="SP500 Index",s.data=l;var p={labels:o,datasets:[c,s]};console.log(p),console.log(i[i.length-1]),Ce(i[i.length-1]),we(p)},gt=function(){var e=Object(N.a)(w.a.mark((function e(t,a){var n,o,r,l,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0==(n=t)&&(n="basic"),o=a.map((function(e,t,a){return e.companySymbol})),console.log(rt),r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({stocks:o,model:n,money:rt,portfolioId:de})},e.prev=5,!(o.length>0)){e.next=19;break}return console.log("Try to get weights"),Xe(!Qe),e.next=11,fetch(R+"/portfolio/test",r);case 11:if(!(l=e.sent).ok){e.next=19;break}return e.next=15,l.json();case 15:c=e.sent,console.log("Weight response"),console.log(c),c.isSuccess?(ft(c.data.all_values,c.data.SP500,c.data.date),dt(o,c.data.all_weights,c.data.date),Je(c.data.date)):alert(c.errorMsg);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),console.log("Fetch news failed",e.t0);case 24:return e.prev=24,ct(),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[5,21,24,27]])})));return function(t,a){return e.apply(this,arguments)}}(),bt=function(){var e=Object(N.a)(w.a.mark((function e(t){var a,n,o,r,l,c,s,i,u,p,d,f;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.map((function(e,t,a){return e.companySymbol})),n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({companySymbols:a})},e.prev=2,!(a.length>0)){e.next=13;break}return console.log("Try to get news"),e.next=7,fetch(R+"/news",n);case 7:if(!(o=e.sent).ok){e.next=13;break}return e.next=11,o.json();case 11:if((r=e.sent).isSuccess){for(console.log("News"),console.log(r),l=[],c=0;c<r.data.length;c++){for(s=[],i=0;i<r.data[c].paragraph.length;i++)u={isKeySentence:!1,text:r.data[c].paragraph[i]},s.push(u);for(i=0;i<r.data[c].keysent.length;i++)(p=r.data[c].keysent[i])>=0&&p<s.length&&(s[p].isKeySentence=!0);d=new Date(r.data[c].date),f={date:d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(),companyName:r.data[c].company,paragraph:s,title:r.data[c].title,id:r.data[c].id},l.push(f)}console.log(l),m(l)}else alert(r.errorMsg);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log("Fetch news failed",e.t0);case 18:return e.prev=18,e.finish(18);case 20:case"end":return e.stop()}}),e,null,[[2,15,18,20]])})));return function(t){return e.apply(this,arguments)}}(),ht=function(){var t=Object(N.a)(w.a.mark((function t(a){var n,o,r,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({portfolioName:a,userId:e.userData.userId})},t.prev=1,t.next=4,fetch(R+"/portfolio/create",n);case 4:if(!(o=t.sent).ok){t.next=11;break}return t.next=8,o.json();case 8:r=t.sent,console.log(r),r.isSuccess?(l={portfolioId:r.data.id,userId:r.data.user_id,portfolioName:r.data.portfolio_name,portfolioStocks:r.data.portfolio_stocks},y([].concat(Object(G.a)(v),[l])),ut()):alert(r.errorMsg);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),alert("create new portfolio failed",t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}(),vt=function(){var t=Object(N.a)(w.a.mark((function t(){var a,n,o,r,l,c,s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0==e.userData.userId){t.next=22;break}return a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userId:e.userData.userId})},t.prev=2,console.log("Try to get user portfolio data"),t.next=6,fetch(R+"/portfolio",a);case 6:if(!(n=t.sent).ok){t.next=14;break}return t.next=10,n.json();case 10:if(o=t.sent,console.log("user portfolio data"),console.log(o),o.isSuccess){if(C(!0),o.data.length>0){for(r=[],l=0;l<o.data.length;l++)c=void 0===o.data[l].mode?"basic":o.data[l].mode,s={portfolioId:o.data[l].id,userId:o.data[l].user_id,portfolioName:o.data[l].portfolio_name,portfolioStocks:o.data[l].portfolio_stocks,portfolioMode:c},r.push(s);y(r)}}else alert(o.errorMsg),C(!1);case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(2),C(!1),console.log("Fetch company data failed",t.t0);case 20:return t.prev=20,t.finish(20);case 22:case"end":return t.stop()}}),t,null,[[2,16,20,22]])})));return function(){return t.apply(this,arguments)}}(),yt=function(){var t=Object(N.a)(w.a.mark((function t(){var a,n,o,r,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0==e.userData.userId||void 0==de){t.next=26;break}return a=x.map((function(e,t,a){return e.companySymbol})),console.log(a),n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({portfolioId:de,portfolioStocks:a})},t.prev=4,console.log("Try to save portfolio: "+de),console.log(n),K(!0),t.next=10,fetch(R+"/portfolio/save",n);case 10:if(!(o=t.sent).ok){t.next=16;break}return t.next=14,o.json();case 14:(r=t.sent).isSuccess?((l=Array.from(v)).forEach((function(e,t,n){e.portfolioId==de&&(e.portfolioStocks=a)})),console.log(l),y(l),re("Success"),ue("Portfolio has been updated!"),it()):alert(r.errorMsg);case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(4),console.log("Fetch company data failed",t.t0);case 21:return t.prev=21,K(!1),t.finish(21);case 24:t.next=27;break;case 26:void 0==e.userData.userId?(re("Error"),ue("Please login first"),it()):void 0==de&&(re("Error"),ue("Create portfolio first"),it());case 27:case"end":return t.stop()}}),t,null,[[4,18,21,24]])})));return function(){return t.apply(this,arguments)}}();return o.a.useEffect((function(){console.log(Se)}),[Se]),o.a.useEffect((function(){if(v.length>0&&void 0!=de){console.log(de),console.log(v);var e=v.find((function(e,t,a){return e.portfolioId===de})).portfolioMode;Ye(e)}}),[de]),o.a.useEffect((function(){D||mt(),void 0!==e.userData.userId&&vt()}),[e.userData]),o.a.useEffect((function(){v.length>0&&void 0==de&&(fe(v[0].portfolioId),st(v[0].portfolioStocks))}),[v]),o.a.useEffect((function(){console.log("newssection"),void 0!=x&&x.length>0&&(console.log("getNews"),bt(x),!1===Te.hasOwnProperty("labels")&&gt(qe,x))}),[x]),o.a.createElement("div",{className:t.portfolioPage},o.a.createElement(tt.a,{className:t.backdrop,open:Qe,onClick:ct},o.a.createElement(B.a,{color:"inherit"})),o.a.createElement(J,{isOpen:z,handleClose:function(){F(!1)},title:oe,message:se}),o.a.createElement($,{isOpen:ee,handleClose:ut,userPortfolios:v,setUserPortfolios:y,setCurrentSelectedPortfolio:fe,createNewPortfolio:ht,userData:e.userData}),o.a.createElement(Be,{selectedStocks:x,setSelectedStocks:st,companyData:r,setDialogTitle:re,setDialogMessage:ue,isSideBarExpanded:T,setSideBarExpand:M,openMessageDialog:it,userPortfolios:v,setUserPortfolios:y,currentSelectedPortfolio:de,setCurrentSelectedPortfolio:fe,handleCreatePortfolioDialogOpen:function(){te(!0)},userData:e.userData,setSectionCode:xe}),o.a.createElement(at.a.div,{className:t.sideBar,initial:"closed",animate:T?"open":"closed",variants:{open:{opacity:1,x:0,transition:{duration:.5}},closed:{opacity:.5,x:"-100%",transition:{duration:1}}}},o.a.createElement(ie,{selectedStocks:x,setSelectedStocks:st,currentSelectedStock:he,setCurrentSelectedStock:ve,savePortfolio:yt,saveButtonLoading:_,saveButtonDisabled:Q})),o.a.createElement(q.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"stretch",className:t.portfolioContent},o.a.createElement(q.a,{item:!0,xs:10,md:6},function(){switch(Se){case 0:return o.a.createElement(Ue,{newsData:u});case 1:return o.a.createElement(_e,{portfolioPerformances:je,portfolioWeights:Te,historyWeights:We,backtestDates:He});case 2:default:return o.a.createElement(et,{portfolioWeights:Te,historyWeights:We,backtestDates:He,selectedModel:qe,setModel:Ye,getWeights:gt,selectedStocks:x,setInvestMoney:lt,investMoney:rt})}}())))},rt=Object(u.a)((function(e){return{root:{height:"100%"},title:{textAlign:"initial",margin:e.spacing(4,0,2)}}}));var lt=function(){var e=rt(),t=new x.a,a=o.a.useState({userId:t.get("userId"),userName:t.get("userName"),userEmail:t.get("userEmail")}),n=Object(c.a)(a,2),r=n[0],l=n[1];return console.log(r),o.a.createElement("div",{className:e.root},o.a.createElement(K,{userData:r,setUserData:l}),o.a.createElement(ot,{userData:r}))},ct=a(152),st=Object(ct.a)({palette:{primary:{main:"#424242"},secondary:{main:"#424242"}},themeName:"Tundora Tundora Dog"}),it=a(349);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(it.a,{theme:st},o.a.createElement(lt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.d17bacbc.chunk.js.map