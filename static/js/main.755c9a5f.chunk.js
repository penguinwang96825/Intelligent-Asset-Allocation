(this["webpackJsonpreact-web"]=this["webpackJsonpreact-web"]||[]).push([[0],{118:function(e,t,a){e.exports=a(131)},123:function(e,t,a){},124:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=(a(123),a(7)),i=a(15),s=a(38),u=(a(124),a(166)),m=a(179),p=a(180),d=a(168),f=a(172),g=a(171),E=a(103),b=a(170),h=a(173),v=a(195),S=a(86),y=a.n(S),x=a(34),O=Object(u.a)((function(e){return{root:{display:"flex"},accountButton:{color:"inherit"}}}));function j(e){var t=O(),a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useRef(null),s=new x.a,u=function(e){i.current&&i.current.contains(e.target)||l(!1)},m=function(t){e.setUserData({userName:null,userEmail:null});var a=new x.a;a.remove("userName"),a.remove("userEmail"),u(t)};function p(e){"Tab"===e.key&&(e.preventDefault(),l(!1))}var S=r.a.useRef(o);return r.a.useEffect((function(){!0===S.current&&!1===o&&i.current.focus(),S.current=o}),[o]),r.a.createElement("div",{className:t.root},r.a.createElement("div",null,r.a.createElement(d.a,{startIcon:r.a.createElement(y.a,null),ref:i,"aria-controls":o?"menu-list-grow":void 0,"aria-haspopup":"true",className:t.accountButton,onClick:function(){l((function(e){return!e}))}},void 0==s.get("userName")?"Account":s.get("userName")),r.a.createElement(b.a,{open:o,anchorEl:i.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,a=e.placement;return r.a.createElement(g.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),r.a.createElement(E.a,null,r.a.createElement(f.a,{onClickAway:u},r.a.createElement(v.a,{autoFocusItem:o,id:"menu-list-grow",onKeyDown:p},r.a.createElement(h.a,{onClick:u},"Profile"),r.a.createElement(h.a,{onClick:m},"Logout")))))}))))}var k=a(17),w=a.n(k),N=a(28),D=a(189),C=a(196),I=a(178),P=a(177),B=a(176),T=a(175),M=a(174),A=a(49),R="http://127.0.0.1:5000",L=Object(u.a)((function(e){return{dialogLeftButton:{marginRight:"auto"},dialogInputBox:{margin:e.spacing(0,0,2)},dialogActions:{display:"flex",margin:e.spacing(0,2,2)},errorMessage:{color:"#f44336",margin:e.spacing(0,2,0)},circleProgress:{zIndex:999,position:"absolute",top:"50%",left:"50%",marginTop:"-24px",marginLeft:"-24px"}}}));function z(e){var t=L(),a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useState(!1),s=Object(c.a)(i,2),u=(s[0],s[1],r.a.useState(!1)),m=Object(c.a)(u,2),p=m[0],f=m[1],g=r.a.useState(!1),E=Object(c.a)(g,2),b=E[0],h=E[1],v=r.a.useState(""),S=Object(c.a)(v,2),y=S[0],O=S[1],j=r.a.useState(""),k=Object(c.a)(j,2),z=k[0],U=k[1],W=r.a.useState(""),F=Object(c.a)(W,2),J=F[0],_=F[1],G=r.a.useRef(),H=r.a.useRef(),K=function(){G.current.value.length<1?(console.log("Email is empty"),f(!0),O("Email cannot be empty")):(f(!1),O(""))},V=function(){H.current.value.length<1?(console.log("Password is empty"),h(!0),U("Password cannot be empty")):(h(!1),U(""))},$=function(){var t=Object(N.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.openSignup(),e.handleClose();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){var t=Object(N.a)(w.a.mark((function t(a){var n,r,o,c,i,s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(K(),V(),_(""),!(G.current.value.length>0&&H.current.value.length>0)){t.next=23;break}return n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userEmail:G.current.value,userPassword:H.current.value})},t.prev=5,l(!0),t.next=9,fetch(R+"/user/login",n);case 9:if(!(r=t.sent).ok){t.next=15;break}return t.next=13,r.json();case 13:(o=t.sent).isSuccess?(c=o.userId,"Steve",i=G.current.value,e.setUserData({userId:c,userName:"Steve",userEmail:i}),(s=new x.a).set("userId",c,{path:"/"}),s.set("userName","Steve",{path:"/"}),s.set("userEmail",i,{path:"/"}),e.handleClose()):_(o.errorMsg);case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),alert("fetch failed",t.t0);case 20:return t.prev=20,l(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[5,17,20,23]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(C.a,{open:e.isOpen,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(M.a,{in:o,unmountOnExit:!0},r.a.createElement(T.a,{className:t.circleProgress})),r.a.createElement(B.a,{id:"form-dialog-title"},"Login"),r.a.createElement(P.a,null,r.a.createElement(D.a,{autoFocus:!0,inputRef:G,margin:"dense",id:"email",label:"Email Address",type:"email",variant:"outlined",fullWidth:!0,error:p,helperText:y,className:t.dialogInputBox,onBlur:function(){K()}}),r.a.createElement(D.a,{inputRef:H,margin:"dense",id:"password",label:"Password",type:"password",variant:"outlined",fullWidth:!0,error:b,helperText:z,className:t.dialogInputBox,onBlur:function(){V()}}),r.a.createElement(A.a,{className:t.errorMessage},J)),r.a.createElement(I.a,{className:t.dialogActions},r.a.createElement(d.a,{onClick:$,color:"primary",className:t.dialogLeftButton},"Sign up"),r.a.createElement(d.a,{variant:"contained",onClick:q,color:"primary"},"Login"))))}var U=Object(u.a)((function(e){return{dialogInputBox:{margin:e.spacing(0,0,2)},dialogActions:{display:"flex",margin:e.spacing(0,2,2)},circleProgress:{zIndex:999,position:"absolute",top:"50%",left:"50%",marginTop:"-24px",marginLeft:"-24px"}}}));function W(e){var t=U(),a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useState(!1),s=Object(c.a)(i,2),u=s[0],m=s[1],p=r.a.useState(!1),f=Object(c.a)(p,2),g=f[0],E=f[1],b=r.a.useState(!1),h=Object(c.a)(b,2),v=h[0],S=h[1],y=r.a.useState(""),x=Object(c.a)(y,2),O=x[0],j=x[1],k=r.a.useState(""),A=Object(c.a)(k,2),L=A[0],z=A[1],W=r.a.useState(""),F=Object(c.a)(W,2),J=F[0],_=F[1],G=r.a.useRef(),H=r.a.useRef(),K=r.a.useRef(),V=function(){G.current.value.length<1?(console.log("Name is empty"),m(!0),j("Name cannot be empty")):(m(!1),j(""))},$=function(){H.current.value.length<1?(console.log("Email is empty"),E(!0),z("Email cannot be empty")):(E(!1),z(""))},q=function(){K.current.value.length<1?(console.log("Password is empty"),S(!0),_("Password cannot be empty")):(S(!1),_(""))},Q=function(){var t=Object(N.a)(w.a.mark((function t(a){var n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(V(),$(),q(),!(G.current.value.length>0&&H.current.value.length>0&&K.current.value.length>0)){t.next=23;break}return n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userName:G.current.value,userEmail:H.current.value,userPassword:K.current.value})},t.prev=5,l(!0),t.next=9,fetch(R+"/user/signup",n);case 9:if(!(r=t.sent).ok){t.next=15;break}return t.next=13,r.json();case 13:(o=t.sent).isSuccess?(e.setDialogMessage("Sign up success!"),e.openMessageDialog(),e.handleClose()):alert(o.errorMsg);case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),alert("fetch failed",t.t0);case 20:return t.prev=20,l(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[5,17,20,23]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(C.a,{open:e.isOpen,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(M.a,{in:o,unmountOnExit:!0},r.a.createElement(T.a,{className:t.circleProgress})),r.a.createElement(B.a,{id:"form-dialog-title"},"Signup"),r.a.createElement(P.a,null,r.a.createElement(D.a,{autoFocus:!0,inputRef:G,margin:"dense",id:"name",label:"User Name",type:"text",variant:"outlined",fullWidth:!0,error:u,helperText:O,className:t.dialogInputBox,onBlur:function(){V()}}),r.a.createElement(D.a,{inputRef:H,margin:"dense",id:"email",label:"Email Address",type:"email",variant:"outlined",fullWidth:!0,error:g,helperText:L,className:t.dialogInputBox,onBlur:function(){$()}}),r.a.createElement(D.a,{inputRef:K,margin:"dense",id:"password",label:"Password",type:"password",variant:"outlined",fullWidth:!0,error:v,helperText:J,className:t.dialogInputBox,onBlur:function(){q()}})),r.a.createElement(I.a,{className:t.dialogActions},r.a.createElement(d.a,{variant:"contained",onClick:Q,color:"primary"},"Sign up"))))}var F=Object(u.a)((function(e){return{message:{textAlign:"center",margin:e.spacing(0,0,2)}}}));function J(e){var t=F();return r.a.createElement("div",null,r.a.createElement(C.a,{open:e.isOpen,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},null!=e.title&&r.a.createElement(B.a,null,e.title),r.a.createElement(P.a,null,r.a.createElement(A.a,{className:t.message},e.message))))}var _=Object(u.a)((function(e){return{root:{flexGrow:1},brandButton:{marginRight:e.spacing(2)},rightButtons:{marginLeft:"auto",display:"inline-flex"}}}));function G(e){var t=_(),a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useState(!1),s=Object(c.a)(i,2),u=s[0],f=s[1],g=r.a.useState(!1),E=Object(c.a)(g,2),b=E[0],h=E[1],v=r.a.useState(""),S=Object(c.a)(v,2),y=S[0],x=S[1];return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{position:"static"},r.a.createElement(z,{isOpen:o,handleClose:function(){l(!1)},setUserData:e.setUserData,openSignup:function(){f(!0)}}),r.a.createElement(W,{isOpen:u,handleClose:function(){f(!1)},setDialogMessage:x,openMessageDialog:function(){h(!0)}}),r.a.createElement(J,{isOpen:b,handleClose:function(){h(!1)},message:y}),r.a.createElement(p.a,null,r.a.createElement(d.a,{className:t.brandButton,color:"inherit",size:"large"},"AI Asset"),r.a.createElement("section",{className:t.rightButtons},void 0===e.userData.userEmail?r.a.createElement(d.a,{color:"inherit",onClick:function(e){l(!0)}},"Login"):r.a.createElement(j,{setUserData:e.setUserData})))))}var H=a(184),K=Object(u.a)((function(e){return{dialogInputBox:{margin:e.spacing(0,0,2)},dialogActions:{display:"flex",margin:e.spacing(0,2,2)},errorMessage:{color:"#f44336",margin:e.spacing(0,2,0)},circleProgress:{zIndex:999,position:"absolute",top:"50%",left:"50%",marginTop:"-24px",marginLeft:"-24px"}}}));function V(e){var t=K(),a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useState(!1),s=Object(c.a)(i,2),u=(s[0],s[1],r.a.useState(!1)),m=Object(c.a)(u,2),p=m[0],f=m[1],g=r.a.useState(""),E=Object(c.a)(g,2),b=E[0],h=E[1],v=r.a.useState(""),S=Object(c.a)(v,2),y=S[0],x=S[1],O=r.a.useRef(),j=function(){O.current.value.length<1?(f(!0),h("Portfolio's name cannot be empty")):(f(!1),h(""))},k=function(){var t=Object(N.a)(w.a.mark((function t(a){var n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(j(),x(""),!(O.current.value.length>0)){t.next=22;break}return n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({portfolioName:O.current.value,userId:e.userData.userId})},t.prev=4,l(!0),t.next=8,fetch(R+"/portfolio/create",n);case 8:if(!(r=t.sent).ok){t.next=14;break}return t.next=12,r.json();case 12:(o=t.sent).isSuccess?e.handleClose():x(o.errorMsg);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),alert("create new portfolio failed",t.t0);case 19:return t.prev=19,l(!1),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[4,16,19,22]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(C.a,{open:e.isOpen,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(M.a,{in:o,unmountOnExit:!0},r.a.createElement(T.a,{className:t.circleProgress})),r.a.createElement(B.a,{id:"form-dialog-title"},"Create New Portfolio"),r.a.createElement(P.a,null,r.a.createElement(D.a,{autoFocus:!0,inputRef:O,margin:"dense",id:"portfolioName",label:"Portfolio name",type:"text",variant:"outlined",fullWidth:!0,error:p,helperText:b,className:t.dialogInputBox,onBlur:function(){j()}}),r.a.createElement(A.a,{className:t.errorMessage},y)),r.a.createElement(I.a,{className:t.dialogActions},r.a.createElement(d.a,{variant:"contained",onClick:k,color:"primary"},"Create"))))}var $=a(190),q=a(135),Q=a(181),X=a(182),Y=a(89),Z=a.n(Y),ee=Object(u.a)((function(e){return{listItemText:{textOverflow:"ellipsis"}}}));function te(e){var t=ee();return r.a.createElement(q.a,{button:!0,alignItems:"flex-start",onClick:function(){e.stockListItemOnclick(e.companySymbol)}},r.a.createElement(Q.a,{classes:{primary:t.listItemText},primary:e.companyName,secondary:e.companySymbol}),r.a.createElement(X.a,{edge:"end","aria-label":"delete",onClick:function(){e.removeSelectedStock(e.companyId)}},r.a.createElement(Z.a,null)))}var ae=a(100),ne=a(183),re=Object(u.a)((function(e){return{stockComponent:{margin:e.spacing(0,0,2)},listSubHeader:{textAlign:"initial"},listTitle:{margin:e.spacing(1,1,1)},emptyText:{margin:e.spacing(2,0,2),textAlign:"center"}}}));var oe=function(e){var t=re(),a=function(t){var a=Array.from(e.selectedStocks),n=a.findIndex((function(e){return e.companyId===t}));-1!==n&&(a.splice(n,1),e.setSelectedStocks(a))},n=function(t){console.log(t),t===e.currentSelectedStock&&e.setCurrentSelectedStock(t)},o=function(e){var t=e.data,o=e.index,l=e.style,c=t[o];return r.a.createElement("div",{style:l},r.a.createElement(te,{companyName:c.companyName,companySymbol:c.companySymbol,companyId:c.companyId,removeSelectedStock:a,stockListItemOnclick:n}))};return r.a.createElement($.a,{className:t.stockComponent},r.a.createElement(A.a,{variant:"h6",className:t.listTitle},"Selected Stocks"),r.a.createElement(ne.a,null),e.selectedStocks.length>0?r.a.createElement(ae.a,{height:350,itemSize:60,itemCount:e.selectedStocks.length,itemData:e.selectedStocks},o):r.a.createElement(A.a,{className:t.emptyText},"This portfolio is empty"))},le=Object(u.a)((function(e){var t;return{root:(t={height:"100vh",padding:e.spacing(1,1,1),flexGrow:1},Object(i.a)(t,e.breakpoints.up("xs"),{width:"60vw"}),Object(i.a)(t,e.breakpoints.up("md"),{width:"50vw"}),Object(i.a)(t,e.breakpoints.up("lg"),{width:"25vw"}),Object(i.a)(t,"position","fixed"),Object(i.a)(t,"zIndex",1400),Object(i.a)(t,"background","white"),t)}}));function ce(e){var t=le();return r.a.createElement($.a,{className:t.root,boxShadow:1},r.a.createElement(oe,{selectedStocks:e.selectedStocks,setSelectedStocks:e.setSelectedStocks,currentSelectedStock:e.currentSelectedStock,setCurrentSelectedStock:e.setCurrentSelectedStock}))}var ie=a(99),se=a(191),ue=a(101),me=Object(u.a)((function(e){return{searchBox:{display:"flex",alignItems:"center",minWidth:300}}}));var pe=function(e){var t=r.a.useState(null),a=Object(c.a)(t,2),n=(a[0],a[1],e.additionalStyles,e.companyData),o=e.selectedStocks,l=e.setSelectedStocks,i=me(),u=function(t){if(null!=o.find((function(e){return e.companyId===t.id_})))e.setDialogTitle("Error"),e.setDialogMessage("The stock is already in the list"),e.openMessageDialog();else{var a={companyName:t.company_name,companySymbol:t.symbol,companyId:t.id_};l([].concat(Object(ie.a)(o),[a])),e.setDialogTitle("Success"),e.setDialogMessage("Add "+t.company_name+" to your portfolio"),e.openMessageDialog()}};return r.a.createElement("div",null,r.a.createElement(se.a,{freeSolo:!0,className:i.searchBox,id:"search-box",disableClearable:!0,size:"small",onChange:function(e,t){u(t)},options:n,getOptionLabel:function(e){return e.company_name},filterOptions:function(e,t){var a=t.inputValue;return Object(ue.a)(e,a,{keys:["company_name","symbol"]}).slice(0,10)},renderInput:function(e){return r.a.createElement(D.a,Object.assign({},e,{label:"Add company",margin:"normal",variant:"outlined",InputProps:Object(s.a)(Object(s.a)({},e.InputProps),{},{type:"search"})}))}}))},de=a(92),fe=a.n(de),ge=a(93),Ee=a.n(ge),be=a(91),he=a.n(be),ve=Object(u.a)((function(e){return{root:{display:"flex"},expandButton:{color:"inherit"},popperRoot:{zIndex:1400},popperMenuItem:{paddingRight:"8px"}}}));function Se(e){var t=ve(),a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useRef(null),s=function(e){i.current&&i.current.contains(e.target)||l(!1)},u=function(t){void 0==e.userData.userId?(e.setDialogTitle("Error"),e.setDialogMessage("Please login first"),e.openMessageDialog()):e.handleCreatePortfolioDialogOpen(),s(t)},m=function(e){"Tab"===e.key&&(e.preventDefault(),l(!1))},p=r.a.useRef(o);r.a.useEffect((function(){!0===p.current&&!1===o&&i.current.focus(),p.current=o}),[o]);var S=e.userPortfolios.map((function(e){return r.a.createElement(h.a,{key:e.protfolioId.toString(),onClick:function(){var t;t=e.protfolioId,console.log(t)}},r.a.createElement(A.a,{variant:"inherit",noWrap:!0},e.portfolioName))}));return r.a.createElement("div",{className:t.root},r.a.createElement(X.a,{edge:"start",className:t.menuButton,onClick:function(){e.setSideBarExpand(!e.isSideBarExpanded)},color:"inherit","aria-label":"menu"},r.a.createElement(he.a,null)),r.a.createElement(d.a,{endIcon:r.a.createElement(fe.a,null),ref:i,"aria-controls":o?"menu-list-grow":void 0,"aria-haspopup":"true",className:t.expandButton,onClick:function(){l((function(e){return!e}))}},r.a.createElement(A.a,{variant:"inherit",noWrap:!0},"My Portfolios")),r.a.createElement(b.a,{className:t.popperRoot,open:o,anchorEl:i.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var a=e.TransitionProps,n=e.placement;return r.a.createElement(g.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(E.a,null,r.a.createElement(f.a,{onClickAway:s},r.a.createElement(v.a,{autoFocusItem:o,id:"menu-list-grow",onKeyDown:m},S,r.a.createElement(ne.a,{light:!0,component:"li"}),r.a.createElement(h.a,{onClick:u},r.a.createElement(A.a,{variant:"inherit",noWrap:!0,className:t.popperMenuItem},"Create New Portfolio"),r.a.createElement(Ee.a,{fontSize:"small",className:t.popperMenuItem}))))))})))}var ye=a(95),xe=a.n(ye),Oe=a(96),je=a.n(Oe),ke=a(94),we=a.n(ke),Ne=Object(u.a)((function(e){return{root:{marginLeft:"auto",display:"inline-flex"}}}));function De(e){var t=Ne();return r.a.createElement("div",{className:t.root},e.showSearchButton&&r.a.createElement(X.a,{edge:"start",color:"inherit","aria-label":"expand search stock"},r.a.createElement(we.a,null)),r.a.createElement(X.a,{edge:"start",color:"inherit","aria-label":"show performance"},r.a.createElement(xe.a,null)),r.a.createElement(X.a,{edge:"start",color:"inherit","aria-label":"asset weight"},r.a.createElement(je.a,null)))}var Ce=a(192),Ie=Object(u.a)((function(e){return{root:{width:"100%",minHeight:"60px",padding:e.spacing(1,2,1),boxShadow:"0 0 1px 1px rgba(0, 0, 0 ,.1)"},menuButtons:{display:"inline-flex"}}}));function Pe(e){var t=Ie();return r.a.createElement(H.a,{className:t.root,container:!0,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(H.a,{item:!0,xs:12,sm:3,className:t.menuButtons},r.a.createElement(Se,{isSideBarExpanded:e.isSideBarExpanded,setSideBarExpand:e.setSideBarExpand,userPortfolios:e.userPortfolios,setUserPortfolios:e.setUserPortfolios,currentSelectedPortfolio:e.currentSelectedPortfolio,setCurrentSelectedPortfolio:e.setCurrentSelectedPortfolio,handleCreatePortfolioDialogOpen:e.handleCreatePortfolioDialogOpen,setDialogTitle:e.setDialogTitle,setDialogMessage:e.setDialogMessage,openMessageDialog:e.openMessageDialog,userData:e.userData}),r.a.createElement(Ce.a,{smUp:!0},r.a.createElement(De,{showSearchButton:!0}))),r.a.createElement(H.a,{item:!0,container:!0,xs:12,sm:6,justify:"center"},r.a.createElement(pe,{selectedStocks:e.selectedStocks,setSelectedStocks:e.setSelectedStocks,companyData:e.companyData,setDialogTitle:e.setDialogTitle,setDialogMessage:e.setDialogMessage,openMessageDialog:e.openMessageDialog})),r.a.createElement(Ce.a,{xsDown:!0},r.a.createElement(H.a,{item:!0,container:!0,sm:3,justify:"center"},r.a.createElement(De,null))))}var Be=a(185),Te=a(187),Me=a(186),Ae=Object(u.a)({root:{width:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function Re(){var e=Ae();e.bullet;return r.a.createElement(Be.a,{className:e.root,variant:"outlined"},r.a.createElement(Me.a,null,r.a.createElement(A.a,{variant:"h5",component:"h2"},"Apple is now bankrupt?!"),r.a.createElement(A.a,{className:e.pos,color:"textSecondary"},"2099/04/01"),r.a.createElement(A.a,{variant:"body2",component:"p"},"Just kidding.")),r.a.createElement(Te.a,null,r.a.createElement(d.a,{size:"small"},"Learn More")))}var Le=Object(u.a)((function(e){return{newsSection:{margin:e.spacing(2,0,2)}}}));function ze(e){var t=Le();return r.a.createElement("div",{className:t.newsSection},r.a.createElement(Re,null))}var Ue=a(98),We=Object(u.a)((function(e){var t;return{portfolioPage:(t={height:"calc(100% - 56px)"},Object(i.a)(t,"".concat(e.breakpoints.up("xs")," and (orientation: landscape)"),{height:"calc(100% - 48px)"}),Object(i.a)(t,e.breakpoints.up("sm"),{height:"calc(100% - 64px)"}),Object(i.a)(t,"display","flex"),Object(i.a)(t,"flexDirection","column"),t),title:{textAlign:"initial",margin:e.spacing(4,0,2)},portfolioContent:{flex:"auto"},companyName:{margin:e.spacing(4,0,2)},sideBar:{zIndex:1400}}}));var Fe=function(e){var t=We(),a=r.a.useState([]),n=Object(c.a)(a,2),o=n[0],l=n[1],i=r.a.useState([]),s=Object(c.a)(i,2),u=s[0],m=s[1],p=r.a.useState([]),d=Object(c.a)(p,2),f=d[0],g=d[1],E=r.a.useState(!1),b=Object(c.a)(E,2),h=b[0],v=b[1],S=r.a.useState(!1),y=Object(c.a)(S,2),x=y[0],O=y[1],j=r.a.useState(!1),k=Object(c.a)(j,2),D=k[0],C=k[1],I=r.a.useState(!1),P=Object(c.a)(I,2),B=P[0],T=P[1],M=r.a.useState(""),L=Object(c.a)(M,2),z=L[0],U=L[1],W=r.a.useState(""),F=Object(c.a)(W,2),_=F[0],G=F[1],K=r.a.useState(null),$=Object(c.a)(K,2),q=$[0],Q=$[1],X=r.a.useState("APPL"),Y=Object(c.a)(X,2),Z=Y[0],ee=Y[1],te=function(){var e=Object(N.a)(w.a.mark((function e(t){var a,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET"},e.prev=1,console.log("Try to get company data"),e.next=5,fetch(R+"/company",a);case 5:if(!(n=e.sent).ok){e.next=11;break}return e.next=9,n.json();case 9:(r=e.sent).isSuccess?(v(!0),console.log(r.data.length),l(r.data),console.log(r.data[0])):(alert(r.errorMsg),v(!1));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),v(!1),console.log("Fetch company data failed",e.t0);case 17:return e.prev=17,e.finish(17);case 19:case"end":return e.stop()}}),e,null,[[1,13,17,19]])})));return function(t){return e.apply(this,arguments)}}();return r.a.useEffect((function(){h||te()}),[h]),r.a.createElement("div",{className:t.portfolioPage},r.a.createElement(J,{isOpen:D,handleClose:function(){C(!1)},title:z,message:_}),r.a.createElement(V,{isOpen:B,handleClose:function(){T(!1)},currentSelectedPortfolio:q,setCurrentSelectedPortfolio:Q,userData:e.userData}),r.a.createElement(Pe,{selectedStocks:f,setSelectedStocks:g,companyData:o,setDialogTitle:U,setDialogMessage:G,isSideBarExpanded:x,setSideBarExpand:O,openMessageDialog:function(){C(!0)},userPortfolios:u,setUserPortfolios:m,currentSelectedPortfolio:q,setCurrentSelectedPortfolio:Q,handleCreatePortfolioDialogOpen:function(){T(!0)},userData:e.userData}),r.a.createElement(Ue.a.div,{className:t.sideBar,initial:"closed",animate:x?"open":"closed",variants:{open:{opacity:1,x:0,transition:{duration:.5}},closed:{opacity:.5,x:"-100%",transition:{duration:1}}}},r.a.createElement(ce,{selectedStocks:f,setSelectedStocks:g,currentSelectedStock:Z,setCurrentSelectedStock:ee})),r.a.createElement(H.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"stretch",className:t.portfolioContent},r.a.createElement(H.a,{item:!0,xs:6},r.a.createElement(A.a,{className:t.companyName,variant:"h5"},"Apple Inc."),r.a.createElement(ze,null))))},Je=Object(u.a)((function(e){return{root:{height:"100%"},title:{textAlign:"initial",margin:e.spacing(4,0,2)}}}));var _e=function(){var e=Je(),t=new x.a,a=r.a.useState({userId:t.get("userId"),userName:t.get("userName"),userEmail:t.get("userEmail")}),n=Object(c.a)(a,2),o=n[0],l=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(G,{userData:o,setUserData:l}),r.a.createElement(Fe,{userData:o}))},Ge=a(97),He=Object(Ge.a)({palette:{primary:{main:"#424242"},secondary:{main:"#424242"}},themeName:"Tundora Tundora Dog"}),Ke=a(188);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Ke.a,{theme:He},r.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.755c9a5f.chunk.js.map