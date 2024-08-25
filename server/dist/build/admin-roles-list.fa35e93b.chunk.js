"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[1177],{42252:(G,f,t)=>{t.d(f,{g:()=>c});var e=t(78320),l=t(6442),i=t(75942);const c=(u={},x={})=>{const{id:v="",...y}=u,{get:B}=(0,e.ry)(),{locale:o}=(0,l.A)(),j=(0,e.QM)(o,{sensitivity:"base"}),{data:C,error:K,isError:d,isLoading:D,refetch:V}=(0,i.useQuery)(["roles",v,y],async()=>{const{data:W}=await B(`/admin/roles/${v??""}`,{params:y});return W},x);let I=[];return v&&C?I=[C.data]:Array.isArray(C?.data)&&(I=C.data),{roles:I.sort((W,Q)=>j.compare(W.name,Q.name)),error:K,isError:d,isLoading:D,refetch:V}}},36156:(G,f,t)=>{t.r(f),t.d(f,{default:()=>ue});var e=t(96540),l=t(78320),i=t(69733),c=t(71526),u=t(71808),x=t(7562),v=t(90954),y=t(96492),B=t(40121),o=t(28244),j=t(47527),C=t(64154),K=t(15912),d=t(69782),D=t(97939),V=t(69688),I=t(88920),W=t(49464),Q=t(46748),k=t(34487),Z=t(68433),z=t(6442),q=t(56347),_=t(42252);const ee=()=>"todo empty role";var te=t(98016),le=t(91616),ne=t(63292),se=t(5556),T=t.n(se);const H=({id:s,name:m,description:a,usersCount:M,icons:r,rowIndex:b,canUpdate:E})=>{const{formatMessage:L}=(0,z.A)(),[,A]=r,g=L({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:M});return e.createElement(K.Tr,{"aria-rowindex":b,key:s,...E?(0,l.qM)({fn:A.onClick}):{}},e.createElement(d.Td,{maxWidth:(0,l.a8)(130)},e.createElement(D.o,{ellipsis:!0,textColor:"neutral800"},m)),e.createElement(d.Td,{maxWidth:(0,l.a8)(250)},e.createElement(D.o,{ellipsis:!0,textColor:"neutral800"},a)),e.createElement(d.Td,null,e.createElement(D.o,{textColor:"neutral800"},g)),e.createElement(d.Td,null,e.createElement(te.s,{justifyContent:"flex-end",...l.dG},r.map((h,O)=>h?e.createElement(le.a,{key:h.label,paddingLeft:O===0?0:1},e.createElement(ne.K,{onClick:h.onClick,label:h.label,noBorder:!0,icon:h.icon})):null))))};H.propTypes={id:T().number.isRequired,name:T().string.isRequired,description:T().string.isRequired,usersCount:T().number.isRequired,icons:T().array.isRequired,rowIndex:T().number.isRequired,canUpdate:T().bool},H.defaultProps={canUpdate:!1};const ae=H;var oe=t(41261);const re={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ie=(s,m)=>(0,oe.Ay)(s,a=>{switch(m.type){case"ON_REMOVE_ROLES":{a.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{a.shouldRefetchData=!0,a.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{a.shouldRefetchData=!1,a.roleToDelete=null,a.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{a.roleToDelete=m.id;break}default:return a}}),de=({canCreate:s,canDelete:m,canUpdate:a,refetchRoles:M})=>{const{formatMessage:r}=(0,z.A)(),{formatAPIError:b}=(0,l.wq)(),E=(0,l.hN)(),[L,A]=(0,e.useState)(!1),{push:g}=(0,q.W6)(),[{selectedRoles:h,showModalConfirmButtonLoading:O,roleToDelete:X},U]=(0,e.useReducer)(ie,re),{post:J}=(0,l.GD)(),Y=async()=>{try{U({type:"ON_REMOVE_ROLES"}),await J("/admin/roles/batch-delete",{ids:[X]}),await M(),U({type:"RESET_DATA_TO_DELETE"})}catch(n){E({type:"warning",message:b(n)})}P()},$=(0,e.useCallback)(n=>{g(`/settings/roles/duplicate/${n}`)},[g]),S=()=>g("/settings/roles/new"),N=(0,e.useCallback)(n=>{U({type:"SET_ROLE_TO_DELETE",id:n}),P()},[]),P=()=>A(n=>!n),p=(0,e.useCallback)(n=>{g(`/settings/roles/${n}`)},[g]),F=(0,e.useCallback)((n,R)=>{n.preventDefault(),n.stopPropagation(),R.usersCount?E({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):N(R.id)},[E,N]),w=(0,e.useCallback)((n,R)=>{n.preventDefault(),n.stopPropagation(),$(R.id)},[$]),me=(0,e.useCallback)(n=>[...s?[{onClick:R=>w(R,n),label:r({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(W.A,null)}]:[],...a?[{onClick:()=>p(n.id),label:r({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(Q.A,null)}]:[],...m?[{onClick:R=>F(R,n),label:r({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(k.A,null)}]:[]],[r,F,w,p,s,a,m]);return{handleNewRoleClick:S,getIcons:me,selectedRoles:h,isWarningDeleteAllOpened:L,showModalConfirmButtonLoading:O,handleToggleModal:P,handleDeleteData:Y}},ce=()=>{const{formatMessage:s}=(0,z.A)();(0,l.L4)();const m=(0,i.d4)(c.G),[{query:a}]=(0,l.sq)(),{isLoading:M,allowedActions:{canCreate:r,canDelete:b,canRead:E,canUpdate:L}}=(0,l.ec)(m.settings.roles),{roles:A,isLoading:g,refetch:h}=(0,_.g)({filters:a?._q?{name:{$containsi:a._q}}:void 0},{cacheTime:0,enabled:!M&&E}),{handleNewRoleClick:O,getIcons:X,isWarningDeleteAllOpened:U,showModalConfirmButtonLoading:J,handleToggleModal:Y,handleDeleteData:$}=de({refetchRoles:h,canCreate:r,canDelete:b,canUpdate:L}),S=A.length+1,N=6;if(M)return e.createElement(u.g,null,e.createElement(l.Bl,null));const P=s({id:"global.roles",defaultMessage:"roles"});return e.createElement(u.g,null,e.createElement(l.x7,{name:"Roles"}),e.createElement(x.Q,{primaryAction:r?e.createElement(v.$,{onClick:O,startIcon:e.createElement(Z.A,null),size:"S"},s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:P,subtitle:s({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),E&&e.createElement(y.B,{startActions:e.createElement(l.q7,{label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:P})})}),E&&e.createElement(B.s,null,e.createElement(o.X,{colCount:N,rowCount:S,footer:r?e.createElement(j.S,{onClick:O,icon:e.createElement(Z.A,null)},s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement(C.d,null,e.createElement(K.Tr,{"aria-rowindex":1},e.createElement(d.Th,null,e.createElement(D.o,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(d.Th,null,e.createElement(D.o,{variant:"sigma",textColor:"neutral600"},s({id:"global.description",defaultMessage:"Description"}))),e.createElement(d.Th,null,e.createElement(D.o,{variant:"sigma",textColor:"neutral600"},s({id:"global.users",defaultMessage:"Users"}))),e.createElement(d.Th,null,e.createElement(V.s,null,s({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(I.N,null,A?.map((p,F)=>e.createElement(ae,{key:p.id,id:p.id,name:p.name,description:p.description,usersCount:p.usersCount,icons:X(p),rowIndex:F+2,canUpdate:L})))),!S&&!g&&e.createElement(ee,null)),e.createElement(l.TM,{isOpen:U,onConfirm:$,isConfirmButtonLoading:J,onToggleDialog:Y}))},ue=()=>{const s=(0,i.d4)(c.G);return e.createElement(l.kz,{permissions:s.settings.roles.main},e.createElement(ce,null))}},96492:(G,f,t)=>{t.d(f,{B:()=>i});var e=t(74848),l=t(98016);const i=({startActions:c,endActions:u})=>!c&&!u?null:(0,e.jsxs)(l.s,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(l.s,{gap:2,wrap:"wrap",children:c}),(0,e.jsx)(l.s,{gap:2,shrink:0,wrap:"wrap",children:u})]})},47527:(G,f,t)=>{t.d(f,{S:()=>B});var e=t(74848),l=t(40948),i=t(91616),c=t(11744),u=t(98016),x=t(97939);const v=(0,l.Ay)(i.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,y=(0,l.Ay)(i.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,B=({children:o,icon:j,...C})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(c.c,{}),(0,e.jsx)(y,{as:"button",background:"primary100",padding:5,...C,children:(0,e.jsxs)(u.s,{children:[(0,e.jsx)(v,{"aria-hidden":!0,background:"primary200",children:j}),(0,e.jsx)(i.a,{paddingLeft:3,children:(0,e.jsx)(x.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
