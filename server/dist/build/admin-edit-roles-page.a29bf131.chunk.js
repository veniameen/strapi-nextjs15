(self.webpackChunkserver=self.webpackChunkserver||[]).push([[6823],{42537:(H,L,o)=>{"use strict";o.d(L,{R:()=>x});var e=o(78320),E=o(75942);const x=(b={},O={})=>{const{id:T,...A}=b,{get:v}=(0,e.ry)();if(!T&&(O?.enabled===void 0||O?.enabled))throw new Error('"id" is a required argument');const{data:M,error:K,isError:a,isLoading:F,refetch:p}=(0,E.useQuery)(["roles",T,"permissions",A],async()=>{const{data:{data:S}}=await v(`/admin/roles/${T}/permissions`,{params:A});return S},O);return{permissions:M,error:K,isError:a,isLoading:F,refetch:p}}},42252:(H,L,o)=>{"use strict";o.d(L,{g:()=>b});var e=o(78320),E=o(6442),x=o(75942);const b=(O={},T={})=>{const{id:A="",...v}=O,{get:M}=(0,e.ry)(),{locale:K}=(0,E.A)(),a=(0,e.QM)(K,{sensitivity:"base"}),{data:F,error:p,isError:S,isLoading:N,refetch:g}=(0,x.useQuery)(["roles",A,v],async()=>{const{data:V}=await M(`/admin/roles/${A??""}`,{params:v});return V},T);let h=[];return A&&F?h=[F.data]:Array.isArray(F?.data)&&(h=F.data),{roles:h.sort((V,oe)=>a.compare(V.name,oe.name)),error:p,isError:S,isLoading:N,refetch:g}}},12370:(H,L,o)=>{"use strict";o.r(L),o.d(L,{CreatePage:()=>Re,default:()=>Se});var e=o(96540),E=o(71808),x=o(7562),b=o(98016),O=o(90954),T=o(40121),A=o(91616),v=o(97939),M=o(96630),K=o(16473),a=o(30524),F=o(56046),p=o(78320),S=o(40009),N=o(81207),g=o(7425),h=o(62193),V=o.n(h),oe=o(6442),ce=o(69733),re=o(56347),C=o(40948),me=o(42537),Q=o(71526),z=o(64077),_=o(91125),Ce=o(20627);const Ae=Ce.Ik().shape({name:Ce.Yj().required(p.iW.required),description:Ce.Yj().required(p.iW.required)}),ae=C.Ay.div`
  border: 1px solid ${({theme:w})=>w.colors.primary200};
  background: ${({theme:w})=>w.colors.primary100};
  padding: ${({theme:w})=>`${w.spaces[2]} ${w.spaces[4]}`};
  color: ${({theme:w})=>w.colors.primary600};
  border-radius: ${({theme:w})=>w.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Re=()=>{const w=(0,re.W5)("/settings/roles/duplicate/:id"),J=(0,p.hN)(),{lockApp:ne,unlockApp:Y}=(0,p.MA)(),{formatMessage:j}=(0,oe.A)(),[X,fe]=(0,e.useState)(!1),{replace:pe}=(0,re.W6)(),Z=(0,e.useRef)(),{trackUsage:de}=(0,p.z1)(),{post:Be,put:Fe}=(0,p.ry)(),{params:Ee}=w??{},{isLoading:ke,data:Le}=(0,_.K)(Ee?.id,{cacheTime:0}),{permissions:he,isLoading:Me}=(0,me.R)({id:Ee?.id},{cacheTime:0,enabled:!!Ee?.id}),Ne=xe=>{ne(),fe(!0),Ee?.id?de("willDuplicateRole"):de("willCreateNewRole"),Promise.resolve(Be("/admin/roles",xe)).then(async({data:ee})=>{const{permissionsToSend:ie}=Z.current.getPermissions();return Ee?.id?de("didDuplicateRole"):de("didCreateNewRole"),ee.data.id&&!V()(ie)&&await Fe(`/admin/roles/${ee.data.id}/permissions`,{permissions:ie}),ee}).then(ee=>{fe(!1),J({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),pe(`/settings/roles/${ee.data.id}`)}).catch(ee=>{console.error(ee),fe(!1),J({type:"warning",message:{id:"notification.error"}})}).finally(()=>{Y()})},He=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,N.A)(new Date,"PPP")}`;return e.createElement(E.g,null,e.createElement(p.x7,{name:"Roles"}),e.createElement(g.l1,{initialValues:{name:"",description:He},onSubmit:Ne,validationSchema:Ae,validateOnChange:!1},({handleSubmit:xe,values:ee,errors:ie,handleReset:le,handleChange:ue})=>e.createElement(p.lV,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(x.Q,{primaryAction:e.createElement(b.s,{gap:2},e.createElement(O.$,{variant:"secondary",onClick:()=>{le(),Z.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(O.$,{onClick:xe,loading:X,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(p.N_,{startIcon:e.createElement(S.A,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(T.s,null,e.createElement(b.s,{direction:"column",alignItems:"stretch",gap:6},e.createElement(A.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(b.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(b.s,{justifyContent:"space-between"},e.createElement(A.a,null,e.createElement(A.a,null,e.createElement(v.o,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(A.a,null,e.createElement(v.o,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ae,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(M.x,{gap:4},e.createElement(K.E,{col:6},e.createElement(a.k,{name:"name",error:ie.name&&j({id:ie.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:ue,required:!0,value:ee.name})),e.createElement(K.E,{col:6},e.createElement(F.T,{label:j({id:"global.description",defaultMessage:"Description"}),id:"description",error:ie.description&&j({id:ie.description}),onChange:ue},ee.description))))),!ke&&!Me?e.createElement(A.a,{shadow:"filterShadow",hasRadius:!0},e.createElement(z.A,{isFormDisabled:!1,ref:Z,permissions:he,layout:Le})):e.createElement(A.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(p.Bl,null))))))))};function Se(){const w=(0,ce.d4)(Q.G);return e.createElement(p.kz,{permissions:w.settings.roles.create},e.createElement(Re,null))}},64077:(H,L,o)=>{"use strict";o.d(L,{A:()=>ts});var e=o(96540),E=o(8740),x=o(99750),b=o(90480),O=o(78320),T=o(61448),A=o.n(T),v=o(62193),M=o.n(v),K=o(5556),a=o.n(K),F=o(6442),p=o(91616),S=o(33031),N=o.n(S),g=o(40948),h=o(98016),V=o(45073),oe=o(19319),ce=o(81526),re=o(58156),C=o.n(re),me=o(90179),Q=o.n(me),z=o(33878),_=o(90954),Ce=o(29754);const be=g.Ay.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Ae=({onClick:t,className:n,hasConditions:r,variant:s})=>{const{formatMessage:i}=(0,F.A)();return e.createElement(be,{hasConditions:r,className:n},e.createElement(_.$,{variant:s,startIcon:e.createElement(Ce.A,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};Ae.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},Ae.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const ae=(0,g.Ay)(Ae)``;var Re=o(75056),Se=o(91267),w=o(43418),J=o(97939),ne=o(25625),Y=o(67066),j=o(95998),X=o(41261),fe=o(94394),pe=o.n(fe),Z=o(55808),de=o.n(Z),Be=o(81994);const Fe=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),Ee=t=>t.reduce((n,[r,s])=>(n.push({label:de()(r),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),ke=(t,n)=>t.map(([,r])=>r).flat().reduce((r,s)=>({[s.id]:n.includes(s.id),...r}),{}),Le=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,F.A)(),m=u=>{l(i,ke(t,u))};return e.createElement(h.s,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(h.s,{paddingLeft:6,style:{width:180}},e.createElement(J.o,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(J.o,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(J.o,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(p.a,{style:{maxWidth:430,width:"100%"}},e.createElement(Be.B,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:m,value:Fe(c),options:Ee(t),disabled:n})))};Le.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const he=Le,Me=(t,n)=>t.reduce((r,s)=>(r[s.id]=C()(n,s.id,!1),r),{}),Ne=(t,n)=>t.reduce((r,s)=>{const[i,l]=s,c=Me(l,n);return r[i]=c,r},{}),xe=(t,n,r)=>t.reduce((s,i)=>{const l=C()(n,[...i.pathToConditionsObject,"conditions"],{}),c=Ne(r,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),ee=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,F.A)(),{availableConditions:c,modifiedData:d,onChangeConditions:m}=(0,z.pn)(),u=(0,e.useMemo)(()=>Object.entries(pe()(c,"category")),[c]),y=t.filter(({isDisplayed:f,hasSomeActionsSelected:B,hasAllActionsSelected:D})=>f&&(B||D)),R=(0,e.useMemo)(()=>xe(y,d,u),[y,d,u]),[$,W]=(0,e.useState)(R),I=(f,B)=>{W((0,X.Ay)(D=>{D[f]||(D[f]={}),D[f].default||(D[f].default={}),D[f].default=B}))},P=()=>{const f=Object.entries($).reduce((B,D)=>{const[k,te]=D,U=Object.values(te).reduce((q,G)=>({...q,...G}),{});return B[k]=U,B},{});m(f),i()};return e.createElement(Re.k,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Se.r,null,e.createElement(Y.B,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((f,B,D)=>e.createElement(j.m,{isCurrent:B===D.length-1,key:f},de()(l({id:f,defaultMessage:f})))))),e.createElement(w.c,null,y.length===0&&e.createElement(J.o,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,y.map(({actionId:f,label:B,pathToConditionsObject:D},k)=>{const te=D.join("..");return e.createElement(he,{key:f,arrayOfOptionsGroupedByCategory:u,label:B,isFormDisabled:r,isGrey:k%2===0,name:te,onChange:I,value:C()($,te,{})})}))),e.createElement(ne.j,{startActions:e.createElement(_.$,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.$,{onClick:P},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ee.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const ie=ee,le=`${120/16}rem`,ue=`${200/16}rem`,Te=`${53/16}rem`,We=g.Ay.div`
  width: ${le};
`,rt=(0,g.Ay)(h.s)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,ze=({children:t,isCollapsable:n,isActive:r,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:m,value:u})=>{const{formatMessage:y}=(0,F.A)();return e.createElement(h.s,{alignItems:"center",paddingLeft:6,style:{width:ue,flexShrink:0}},e.createElement(p.a,{paddingRight:2},e.createElement(V.J,{name:d,"aria-label":y({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:R=>l({target:{name:d,value:R}}),indeterminate:m,value:u})),e.createElement(rt,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":r,onKeyDown:({key:R})=>(R==="Enter"||R===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(J.o,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},de()(i)),t))};ze.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},ze.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const at=(0,e.memo)(ze);var Wt=o(3176),Kt=o.n(Wt),Vt=o(23805),Pe=o.n(Vt);const it=t=>Pe()(t)?Kt()(Object.values(t).map(n=>Pe()(n)?it(n):n)):[],je=it,we=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Oe=t=>{const n=we(t),r=je(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=r.every(l=>l),i=r.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}};var Gt=o(77044);const Ke=(0,g.Ay)(Gt.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ve=t=>`
  ${J.o} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ke} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ht=(t,n,r)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...r.split(".."),s],m=M()(l)?[...d,"properties","enabled"]:d,u=m.join(".."),y=C()(n,[...d,"conditions"],null),R=je(y).some(P=>P);if(M()(l)){const P=C()(n,m,!1);return{actionId:s,checkboxName:u,hasAllActionsSelected:P,hasConditions:R,hasSomeActionsSelected:P,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const $=C()(n,m,null),{hasAllActionsSelected:W,hasSomeActionsSelected:I}=Oe($);return{actionId:s,checkboxName:u,hasAllActionsSelected:W,hasConditions:R,hasSomeActionsSelected:I,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),Ye=(t,n)=>`
  ${lt} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${dt} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
   ${Ve(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:s})=>Ye(r,s)}
  }
  
`,lt=g.Ay.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Te};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Ut=g.Ay.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Ye(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Ye(t,n)}
  }
`,ct=(0,g.Ay)(h.s)`
  width: ${le};
  position: relative;
`,dt=(0,g.Ay)(p.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ut=g.Ay.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,zt=(0,g.Ay)(p.a)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,mt=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,m]=(0,e.useState)(!1),{formatMessage:u}=(0,F.A)(),{modifiedData:y,onChangeParentCheckbox:R,onChangeSimpleCheckbox:$}=(0,z.pn)(),W=()=>{m(U=>!U)},I=()=>{m(!1)},P=C()(y,c.split(".."),{}),f=(0,e.useMemo)(()=>Object.keys(P).reduce((U,q)=>(U[q]=Q()(P[q],"conditions"),U),{}),[P]),{hasAllActionsSelected:B,hasSomeActionsSelected:D}=Oe(f),k=(0,e.useMemo)(()=>Ht(t,y,c),[t,y,c]),te=k.some(({hasConditions:U})=>U);return e.createElement(Ut,{isActive:n},e.createElement(lt,{isGrey:r},e.createElement(at,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:R,onClick:l,someChecked:D,value:B,isActive:n},e.createElement(dt,{paddingLeft:2},n?e.createElement(oe.A,null):e.createElement(ce.A,null))),e.createElement(h.s,{style:{flex:1}},k.map(({actionId:U,hasConditions:q,hasAllActionsSelected:G,hasSomeActionsSelected:ye,isDisplayed:Ie,isParentCheckbox:se,checkboxName:ve,label:Ge})=>Ie?se?e.createElement(ct,{key:U,justifyContent:"center",alignItems:"center"},q&&e.createElement(ut,null),e.createElement(V.J,{disabled:s,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ge} ${i}`}),onValueChange:$e=>{R({target:{name:ve,value:$e}})},indeterminate:ye,value:G})):e.createElement(ct,{key:U,justifyContent:"center",alignItems:"center"},q&&e.createElement(ut,null),e.createElement(V.J,{disabled:s,indeterminate:q,name:ve,onValueChange:$e=>{$({target:{name:ve,value:$e}})},value:G})):e.createElement(We,{key:U}))),d&&e.createElement(ie,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:k,isFormDisabled:s,onClosed:I,onToggle:W})),e.createElement(zt,null,e.createElement(ae,{onClick:W,hasConditions:te})))};mt.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const wt=mt,Yt=g.Ay.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(Yt,null,"*"),Jt=(t,n)=>t.map(r=>{const s=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:s}}),Qt=(0,g.Ay)(p.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Xt=g.Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Je=t=>e.createElement(Qt,null,e.createElement(Xt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Je.defaultProps={fill:"primary200"},Je.propTypes={fill:a().string};const Zt=(0,e.memo)(Je),gt=(0,g.Ay)(h.s)`
  width: ${le};
  position: relative;
`,qt=(0,g.Ay)(h.s)`
  height: ${Te};
`,_t=(0,g.Ay)(p.a)`
  padding-left: ${31/16}rem;
`,en=(0,g.Ay)(p.a)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,tn=(0,g.Ay)(h.s)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ke} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ve(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ve(n)};
`,nn=g.Ay.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Qe=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,F.A)(),{modifiedData:m,onChangeParentCheckbox:u,onChangeSimpleCheckbox:y}=(0,z.pn)(),[R,$]=(0,e.useState)(null),W=P=>{$(f=>f===P?null:P)},I=(0,e.useMemo)(()=>R?t.find(({value:P})=>P===R):null,[R,t]);return e.createElement(_t,null,e.createElement(nn,null),t.map(({label:P,value:f,required:B,children:D},k)=>{const te=k+1<t.length,U=Array.isArray(D),q=R===f;return e.createElement(en,{key:f,isVisible:te},e.createElement(qt,null,e.createElement(Zt,{color:"primary200"}),e.createElement(h.s,{style:{flex:1}},e.createElement(tn,{level:r,isActive:q,isCollapsable:U},e.createElement(rt,{alignItems:"center",isCollapsable:U,...U&&{onClick:()=>W(f),"aria-expanded":q,onKeyDown:({key:G})=>(G==="Enter"||G===" ")&&W(f),tabIndex:0,role:"button"},title:P},e.createElement(J.o,{ellipsis:!0},de()(P)),B&&e.createElement(pt,null),e.createElement(Ke,{$isActive:q}))),e.createElement(h.s,{style:{flex:1}},i.map(({actionId:G,label:ye,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(We,{key:G});const se=[...s.split(".."),G,"properties",c,...l.split(".."),f],ve=C()(m,se,!1);if(!D)return e.createElement(gt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(V.J,{disabled:n,name:se.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${P} ${ye}`}),onValueChange:De=>{y({target:{name:se.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:Ge,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(gt,{key:ye,justifyContent:"center",alignItems:"center"},e.createElement(V.J,{key:ye,disabled:n,name:se.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${P} ${ye}`}),onValueChange:De=>{u({target:{name:se.join(".."),value:De}})},value:Ge,indeterminate:$e}))})))),I&&q&&e.createElement(p.a,{paddingBottom:2},e.createElement(Qe,{isFormDisabled:n,parentName:`${l}..${f}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:r+1,childrenForm:I.children})))}))};Qe.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const sn=(0,e.memo)(Qe),on=t=>t.reduce((r,s)=>(s.isActionRelatedToCurrentProperty&&r.push(s.actionId),r),[]),rn=(t,n,r,s,i)=>{const c=on(t).reduce((d,m)=>{const u=[...r.split(".."),m,"properties",s,i],y=C()(n,u,!1);return d[m]=y,d},{});return Oe(c)},yt=(0,g.Ay)(h.s)`
  width: ${le};
  position: relative;
`,an=(0,g.Ay)(h.s)`
  height: ${Te};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ke} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ve(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ve(n)};
`,Xe=({childrenForm:t,label:n,isFormDisabled:r,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:m})=>{const{formatMessage:u}=(0,F.A)(),[y,R]=(0,e.useState)(null),{modifiedData:$,onChangeCollectionTypeLeftActionRowCheckbox:W,onChangeParentCheckbox:I,onChangeSimpleCheckbox:P}=(0,z.pn)(),f=y===s,B=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),D=B.length>0,k=(0,e.useCallback)(()=>{D&&R(G=>G===s?null:s)},[D,s]),te=({target:{value:G}})=>{W(l,d,s,G)},{hasAllActionsSelected:U,hasSomeActionsSelected:q}=(0,e.useMemo)(()=>rn(c,$,l,d,s),[c,$,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(an,{alignItems:"center",isCollapsable:D,isActive:f,background:m?"neutral100":"neutral0"},e.createElement(h.s,null,e.createElement(at,{onChange:te,onClick:k,isCollapsable:D,isFormDisabled:r,label:n,someChecked:q,value:U,isActive:f},i&&e.createElement(pt,null),e.createElement(Ke,{$isActive:f})),e.createElement(h.s,null,c.map(({label:G,isActionRelatedToCurrentProperty:ye,actionId:Ie})=>{if(!ye)return e.createElement(We,{key:G});const se=[...l.split(".."),Ie,"properties",d,s];if(!D){const De=C()($,se,!1);return e.createElement(yt,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(V.J,{disabled:r,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${G}`}),onValueChange:ns=>{P({target:{name:se.join(".."),value:ns}})},value:De}))}const ve=C()($,se,{}),{hasAllActionsSelected:Ge,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(yt,{key:G,justifyContent:"center",alignItems:"center"},e.createElement(V.J,{disabled:r,name:se.join(".."),onValueChange:De=>{I({target:{name:se.join(".."),value:De}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${G}`}),value:Ge,indeterminate:$e}))})))),f&&e.createElement(sn,{childrenForm:B,isFormDisabled:r,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Xe.defaultProps={childrenForm:[],required:!1},Xe.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const ln=(0,e.memo)(Xe),ft=(0,g.Ay)(h.s)`
  width: ${le};
  flex-shrink: 0;
`,cn=(0,g.Ay)(h.s)`
  width: ${ue};
  height: ${Te};
  flex-shrink: 0;
`,ht=({headers:t,label:n})=>{const{formatMessage:r}=(0,F.A)(),s=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(h.s,null,e.createElement(cn,{alignItems:"center",paddingLeft:6},e.createElement(J.o,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ft,{justifyContent:"center",key:i.label},e.createElement(J.o,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ft,{key:i.label})))};ht.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const dn=ht,un=(t,n)=>t.map(r=>{const s=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:s}}),mn=g.Ay.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Ct=({availableActions:t,childrenForm:n,isFormDisabled:r,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>un(t,l),[t,l]);return e.createElement(mn,null,e.createElement(dn,{label:s,headers:c}),e.createElement(p.a,null,n.map(({children:d,label:m,value:u,required:y},R)=>e.createElement(ln,{childrenForm:d,key:u,label:m,isFormDisabled:r,name:u,required:y,propertyActions:c,pathToData:i,propertyName:l,isOdd:R%2===0}))))};Ct.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const pn=Ct,gn=g.Ay.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,Et=({allActions:t,contentTypeName:n,label:r,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:m})=>{const u=(0,e.useCallback)(()=>{c(n)},[n,c]),y=(0,e.useMemo)(()=>Jt(t,n),[t,n]);return e.createElement(gn,{isActive:i},e.createElement(wt,{availableActions:y,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:r,onClickToggle:u,pathToData:d}),i&&m.map(({label:R,value:$,children:W})=>e.createElement(pn,{availableActions:y,childrenForm:W,isFormDisabled:l,label:R,pathToData:d,propertyName:$,key:$})))};Et.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const yn=Et,Ze=({actions:t,isFormDisabled:n,pathToData:r,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:m,properties:u},y)=>e.createElement(yn,{allActions:t,key:d,contentTypeName:d,label:m,isActive:i===d,isFormDisabled:n,index:y,onClickToggleCollapse:c,pathToData:`${r}..${d}`,properties:u}))};Ze.defaultProps={actions:[],subjects:[]},Ze.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const fn=(0,e.memo)(Ze),hn=t=>t.filter(({subjects:n})=>n&&n.length),Cn=t=>t.map(({actionId:n})=>n),En=(t,n)=>t.reduce((r,s)=>(Object.keys(n).forEach(i=>{const l=C()(n,[i,s],{}),c={[i]:we(l)};r[s]?r[s]={...r[s],...c}:r[s]=c}),r),{}),vn=(t,n)=>{const r=Cn(t),s=En(r,n);return Object.keys(s).reduce((l,c)=>(l[c]=Oe(s[c]),l),{})},bn=(0,g.Ay)(h.s)`
  width: ${le};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:s}=(0,F.A)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,z.pn)(),c=(0,e.useMemo)(()=>hn(t),[t]),d=(0,e.useMemo)(()=>vn(c,i[r]),[i,c,r]);return e.createElement(p.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ue}},e.createElement(h.s,{gap:0},c.map(({label:m,actionId:u})=>e.createElement(bn,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(J.o,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})),e.createElement(V.J,{disabled:n,onValueChange:y=>{l(r,u,y)},name:u,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})}),value:C()(d,[u,"hasAllActionsSelected"],!1),indeterminate:C()(d,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const An=(0,e.memo)(qe),Rn=(0,g.Ay)(p.a)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:s}})=>{const i=N()([...s],"label");return e.createElement(Rn,{background:"neutral0"},e.createElement(An,{actions:r,kind:n,isFormDisabled:t}),e.createElement(fn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};vt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const bt=(0,e.memo)(vt);var xn=o(2256);const At=({children:t,value:n})=>e.createElement(xn.he.Provider,{value:n},t);At.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const Tn=At;var Pn=o(82008),Sn=o(23845),Mn=o(13203),Rt=o(64200),On=o(96630),$n=o(16473);const Dn=(t,n,r)=>t.map(s=>{const i=[...r,s.action,"properties","enabled"],l=C()(n,i,!1),c=C()(n,[...r,s.action,"conditions"],{}),d=je(c).some(m=>m);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...r,s.action]}}),Ln=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return je(n).some(s=>s)},jn=g.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.Ay.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,xt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:m,onChangeSimpleCheckbox:u}=(0,z.pn)(),{formatMessage:y}=(0,F.A)(),R=C()(d,i,{}),$=(0,e.useMemo)(()=>Object.keys(R).reduce((k,te)=>(k[te]=we(R[te]),k),{}),[R]),{hasAllActionsSelected:W,hasSomeActionsSelected:I}=Oe($),P=()=>{c(k=>!k)},f=()=>{c(!1)},B=Dn(s,d,i),D=Ln(C()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(p.a,null,e.createElement(h.s,{justifyContent:"space-between",alignItems:"center"},e.createElement(p.a,{paddingRight:4},e.createElement(J.o,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(jn,null),e.createElement(p.a,{paddingLeft:4},e.createElement(Rt.S,{name:i.join(".."),disabled:n,onValueChange:k=>{m({target:{name:i.join(".."),value:k}})},indeterminate:I,value:W},y({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(h.s,{paddingTop:6,paddingBottom:6},e.createElement(On.x,{gap:2,style:{flex:1}},B.map(({checkboxName:k,value:te,action:U,displayName:q,hasConditions:G})=>e.createElement($n.E,{col:3,key:U},e.createElement(In,{disabled:n,hasConditions:G},e.createElement(Rt.S,{name:k,disabled:n,onValueChange:ye=>{u({target:{name:k,value:ye}})},value:te},q))))),e.createElement(ae,{hasConditions:D,onClick:P}))),l&&e.createElement(ie,{headerBreadCrumbs:[t,r],actions:B,isFormDisabled:n,onClosed:f,onToggle:P}))};xt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const Bn=xt,_e=({childrenForm:t,kind:n,name:r,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:m}=(0,F.A)(),u=()=>{c(r)},y=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Pn.n,{expanded:s,onToggle:u,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Sn.P,{title:de()(y),description:`${m({id:"Settings.permissions.category"},{category:y})} ${n==="plugins"?"plugin":n}`}),e.createElement(Mn.u,null,e.createElement(p.a,{padding:6},t.map(({actions:R,subCategoryName:$,subCategoryId:W})=>e.createElement(Bn,{key:$,actions:R,categoryName:y,isFormDisabled:i,subCategoryName:$,pathToData:[...d,W]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const Fn=_e,Tt=({isFormDisabled:t,kind:n,layout:r})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(p.a,{padding:6,background:"neutral0"},r.map(({category:c,categoryId:d,childrenForm:m},u)=>e.createElement(Fn,{key:c,childrenForm:m,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:u%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Tt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const Pt=Tt;var kn=o(55364),Nn=o.n(kn),Wn=o(63560),ge=o.n(Wn);const St=(t,n,r)=>t.find(s=>s.action===n&&s.subject===r),Mt=(t,n=[])=>t.reduce((r,s)=>(r[s.id]=n.indexOf(s.id)!==-1,r),{}),Ot=({children:t},n,r="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:Ot(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return s[i.value]=l,s},{}),Kn=(t,n,r)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=C()(r,["properties",l.value],[]),d=Ot(l,c);s.properties[i]=d}return s},{properties:{}}),Vn=(t,n)=>n.reduce((r,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(r[s]=i),r},{}),$t=({subjects:t},n,r,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Vn(t,c);if(M()(d))return i;const m=Object.keys(d).reduce((u,y)=>{const{actionId:R,applyToProperties:$}=l,P=d[y].properties.map(({value:k})=>k).every(k=>($||[]).indexOf(k)===-1),f=St(s,R,y),B=Mt(r,C()(f,"conditions",[]));if(M()($)||P)return ge()(u,[y,R],{properties:{enabled:f!==void 0},conditions:B}),u;const D=Kn($,d[y],f);return ge()(u,[y,R],{...D,conditions:B}),u},{});return Nn()(i,m)},{}),Gn=(t,n,r)=>t.reduce((s,i)=>{const l=St(r,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:Mt(n,l?.conditions??[])},s},{}),Hn=(t,n,r)=>t.reduce((s,i)=>(s[i.subCategoryId]=Gn(i.actions,n,r),s),{}),Dt=(t,n,r=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Hn(l,n,r);return s[i]=c,s},{}),Lt=t=>t.split(" ").join("-"),jt=(t,n)=>Object.entries(pe()(t,n)).map(([r,s])=>({category:r,categoryId:Lt(r),childrenForm:Object.entries(pe()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Lt(i),actions:l}))})),Un=(t,n)=>{const{conditions:r,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(c,"category")},m={collectionTypes:$t(s,s.actions||[],r,n),singleTypes:$t(i,i.actions||[],r,n),plugins:Dt(d.plugins,r,n),settings:Dt(d.settings,r,n)};return{initialData:m,modifiedData:m,layouts:d}};var zn=o(88055),et=o.n(zn);const It=t=>Object.keys(t).reduce((n,r)=>{const s=t[r];if(Pe()(s)&&!A()(s,"conditions"))return{...n,[r]:It(s)};if(Pe()(s)&&A()(s,"conditions")&&!je(Q()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[r]:{...s,conditions:l}}}return n[r]=s,n},{}),tt=It,Bt=(t,n,r=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!r?(s[i]=l,s):Pe()(l)?{...s,[i]:Bt(l,n,i==="fields")}:(s[i]=n,s)},{}),Ue=Bt,wn={initialData:{},modifiedData:{},layouts:{}},Yn=(t,n)=>(0,X.Ay)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(C()(t,c)).forEach(d=>{const m=C()(t,[...c,d,i],void 0);if(m){let u=Ue(m,l);if(!l&&u.conditions){const y=Ue(u.conditions,!1);u={...u,conditions:y}}ge()(r,[...c,d,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=et()(t.modifiedData);const m=s.split(".."),u=C()(d,m,{});Object.keys(u).forEach(y=>{if(A()(u[y],`properties.${i}`)){const R=C()(u,[y,"properties",i,l]),$=[...m,y,"properties",i,l];if(!Pe()(R))ge()(d,$,c);else{const W=Ue(R,c);ge()(d,$,W)}}}),c||(d=tt(d)),ge()(r,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;ge()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=et()(t.modifiedData);ge()(s,[...n.keys.split("..")],n.value),n.value||(s=tt(s)),ge()(r,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=et()(t.modifiedData);const d=C()(c,l,{}),m=Ue(d,i);ge()(c,l,m),i||(c=tt(c)),ge()(r,["modifiedData"],c);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),nt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Jn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:nt(r),properties:{}}},Qn=t=>Object.values(t).reduce((n,r)=>{const s=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=Jn(l);return i.push(d),i},[]);return[...n,...s]},[]),Ft=t=>Object.values(t).reduce((n,r)=>{const s=Qn(r);return[...n,...s]},[]),kt=(t,n="")=>Object.entries(t).reduce((r,s)=>{const[i,l]=s;return Pe()(l)?[...r,...kt(l,`${n}${i}.`)]:(l&&!Pe()(l)&&r.push(`${n}${i}`),r)},[]),Xn=(t,n,{conditions:r,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=kt(d),i},{action:t,subject:n,conditions:nt(r),properties:{}}),Zn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:nt(r)}),qn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!je(c).some(u=>u))return s;if(!c?.properties?.enabled){const u=Xn(l,t,c);return[...s,u]}if(!c.properties.enabled)return s;const m=Zn(l,t,c);return s.push(m),s},[]),Nt=t=>Object.entries(t).reduce((r,s)=>{const[i,l]=s,c=qn(i,l);return[...r,...c]},[]),_n=t=>{const n=Ft(t.plugins),r=Ft(t.settings),s=Nt(t.collectionTypes),i=Nt(t.singleTypes);return[...n,...r,...s,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Yn,wn,()=>Un(t,r)),{formatMessage:m}=(0,F.A)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const I=(0,O.iv)(i.collectionTypes,c.collectionTypes),P=(0,O.iv)(i.singleTypes,c.singleTypes),f={...I,...P};let B;return M()(f)?B=!1:B=Object.values(f).some(D=>Object.values(D).some(k=>A()(k,"conditions"))),{permissionsToSend:_n(c),didUpdateConditions:B}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(I,P,f,B)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:I,propertyName:P,rowName:f,value:B})},y=(I,P,f)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:I,actionId:P,value:f})},R=I=>{d({type:"ON_CHANGE_CONDITIONS",conditions:I})},$=(0,e.useCallback)(({target:{name:I,value:P}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:I,value:P})},[]),W=(0,e.useCallback)(({target:{name:I,value:P}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:I,value:P})},[]);return e.createElement(Tn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:R,onChangeSimpleCheckbox:$,onChangeParentCheckbox:W,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:y}},e.createElement(E.f,{id:"tabs",label:m({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(x.t,null,es.map(I=>e.createElement(x.o,{key:I.id},m({id:I.labelId,defaultMessage:I.defaultMessage})))),e.createElement(b.T,{style:{position:"relative"}},e.createElement(b.K,null,e.createElement(bt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(b.K,null,e.createElement(bt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(b.K,null,e.createElement(Pt,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(b.K,null,e.createElement(Pt,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const ts=(0,e.memo)(st)},49659:(H,L,o)=>{"use strict";o.r(L),o.d(L,{default:()=>J});var e=o(96540),E=o(78320),x=o(69733),b=o(56347),O=o(71526),T=o(71808),A=o(7562),v=o(98016),M=o(90954),K=o(40121),a=o(91616),F=o(40009),p=o(7425),S=o(6442),N=o(42537),g=o(42252),h=o(91125),V=o(64077),oe=o(97939),ce=o(96630),re=o(16473),C=o(30524),me=o(56046),Q=o(5556),z=o.n(Q);const _=({disabled:ne,role:Y,values:j,errors:X,onChange:fe,onBlur:pe})=>{const{formatMessage:Z}=(0,S.A)();return e.createElement(a.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(v.s,{direction:"column",alignItems:"stretch",gap:4},e.createElement(v.s,{justifyContent:"space-between"},e.createElement(a.a,null,e.createElement(a.a,null,e.createElement(oe.o,{fontWeight:"bold"},Y?Y.name:Z({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.a,null,e.createElement(oe.o,{textColor:"neutral500",variant:"pi"},Y?Y.description:Z({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(M.$,{disabled:!0,variant:"secondary"},Z({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:Y.usersCount}))),e.createElement(ce.x,{gap:4},e.createElement(re.E,{col:6},e.createElement(C.k,{disabled:ne,name:"name",error:X.name&&Z({id:X.name}),label:Z({id:"global.name",defaultMessage:"Name"}),onChange:fe,onBlur:pe,required:!0,value:j.name||""})),e.createElement(re.E,{col:6},e.createElement(me.T,{disabled:ne,label:Z({id:"global.description",defaultMessage:"Description"}),id:"description",error:X.name&&Z({id:X.name}),onChange:fe,onBlur:pe},j.description||"")))))};_.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},_.propTypes={disabled:z().bool,errors:z().object.isRequired,onBlur:z().func.isRequired,onChange:z().func.isRequired,role:z().object,values:z().object};const Ce=_;var be=o(20627);const ae=be.Ik().shape({name:be.Yj().required(E.iW.required)}),Se=()=>{const ne=(0,E.hN)(),{formatMessage:Y}=(0,S.A)(),{params:{id:j}}=(0,b.W5)("/settings/roles/:id"),{put:X}=(0,E.ry)(),[fe,pe]=(0,e.useState)(!1),Z=(0,e.useRef)(),{lockApp:de,unlockApp:Be}=(0,E.MA)(),{trackUsage:Fe}=(0,E.z1)(),{formatAPIError:Ee}=(0,E.wq)(),{isLoading:ke,data:Le}=(0,h.K)(j,{cacheTime:0}),{roles:[he={}],isLoading:Me,refetch:Ne}=(0,g.g)({id:j},{cacheTime:0}),{permissions:He,isLoading:xe}=(0,N.R)({id:j},{cacheTime:0}),ee=async le=>{try{de(),pe(!0);const{permissionsToSend:ue,didUpdateConditions:Te}=Z.current.getPermissions();await X(`/admin/roles/${j}`,le),he.code!=="strapi-super-admin"&&(await X(`/admin/roles/${j}/permissions`,{permissions:ue}),Te&&Fe("didUpdateConditions")),Z.current.setFormAfterSubmit(),await Ne(),ne({type:"success",message:{id:"notification.success.saved"}})}catch(ue){ne({type:"warning",message:Ee(ue)})}finally{pe(!1),Be()}},ie=!Me&&he.code==="strapi-super-admin";return e.createElement(T.g,null,e.createElement(E.x7,{name:"Roles"}),e.createElement(p.l1,{enableReinitialize:!0,initialValues:{name:he.name,description:he.description},onSubmit:ee,validationSchema:ae,validateOnChange:!1},({handleSubmit:le,values:ue,errors:Te,handleChange:ot,handleBlur:We})=>e.createElement("form",{onSubmit:le},e.createElement(A.Q,{primaryAction:e.createElement(v.s,{gap:2},e.createElement(M.$,{disabled:he.code==="strapi-super-admin",onClick:le,loading:fe,size:"L"},Y({id:"global.save",defaultMessage:"Save"}))),title:Y({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:Y({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(E.N_,{startIcon:e.createElement(F.A,null),to:"/settings/roles"},Y({id:"global.back",defaultMessage:"Back"}))}),e.createElement(K.s,null,e.createElement(v.s,{direction:"column",alignItems:"stretch",gap:6},e.createElement(Ce,{isLoading:Me||xe,disabled:ie,errors:Te,values:ue,onChange:ot,onBlur:We,role:he}),!ke&&!Me&&!xe?e.createElement(a.a,{shadow:"filterShadow",hasRadius:!0},e.createElement(V.A,{isFormDisabled:ie,permissions:He,ref:Z,layout:Le})):e.createElement(a.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.Bl,null)))))))},J=()=>{const ne=(0,x.d4)(O.G),{isLoading:Y,allowedActions:{canRead:j,canUpdate:X}}=(0,E.ec)({read:ne.settings.roles.read,update:ne.settings.roles.update});return Y?e.createElement(E.Bl,null):!j&&!X?e.createElement(b.rd,{to:"/"}):e.createElement(Se,null)}},91125:(H,L,o)=>{"use strict";o.d(L,{K:()=>x});var e=o(78320),E=o(75942);const x=(b,O={})=>{const{get:T}=(0,e.ry)(),{data:A,error:v,isError:M,isLoading:K}=(0,E.useQuery)(["permissions",b],async()=>{const{data:{data:a}}=await T("/admin/permissions",{params:{role:b}});return a},O);return{data:A,error:v,isError:M,isLoading:K}}},63945:H=>{function L(o,e,E,x){for(var b=-1,O=o==null?0:o.length;++b<O;){var T=o[b];e(x,T,E(T),o)}return x}H.exports=L},62429:(H,L,o)=>{var e=o(80909);function E(x,b,O,T){return e(x,function(A,v,M){b(T,A,O(A),M)}),T}H.exports=E},42e3:(H,L,o)=>{var e=o(63945),E=o(62429),x=o(15389),b=o(56449);function O(T,A){return function(v,M){var K=b(v)?e:E,a=A?A():{};return K(v,T,x(M,2),a)}}H.exports=O},3176:(H,L,o)=>{var e=o(83120),E=1/0;function x(b){var O=b==null?0:b.length;return O?e(b,E):[]}H.exports=x},94394:(H,L,o)=>{var e=o(43360),E=o(42e3),x=Object.prototype,b=x.hasOwnProperty,O=E(function(T,A,v){b.call(T,v)?T[v].push(A):e(T,v,[A])});H.exports=O},82008:(H,L,o)=>{"use strict";o.d(L,{I:()=>K,n:()=>F});var e=o(74848),E=o(96540),x=o(40948),b=o(42349),O=o(28618),T=o(97939),A=o(98016),v=o(91616);const M=({theme:p,expanded:S,variant:N,disabled:g,error:h})=>h?`1px solid ${p.colors.danger600} !important`:g?`1px solid ${p.colors.neutral150}`:S?`1px solid ${p.colors.primary600}`:N==="primary"?`1px solid ${p.colors.neutral0}`:`1px solid ${p.colors.neutral100}`,K=(0,x.Ay)(T.o)``,a=(0,x.Ay)(v.a)`
  border: ${M};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:p})=>p.colors.primary600};

    ${K} {
      color: ${({theme:p,expanded:S})=>S?void 0:p.colors.primary700};
    }

    ${T.o} {
      color: ${({theme:p,expanded:S})=>S?void 0:p.colors.primary600};
    }

    & > ${A.s} {
      background: ${({theme:p})=>p.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:p})=>p.colors.primary200};
    }
  }
`,F=({children:p,disabled:S=!1,error:N,expanded:g=!1,hasErrorMessage:h=!0,id:V,onToggle:oe,toggle:ce,size:re="M",variant:C="primary",shadow:me})=>{const Q=(0,O.B)(V),z=E.useMemo(()=>({expanded:g,onToggle:oe,toggle:ce,id:Q,size:re,variant:C,disabled:S}),[S,g,Q,oe,re,ce,C]);return(0,e.jsxs)(b.C.Provider,{value:z,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:S,"aria-disabled":S,expanded:g,hasRadius:!0,variant:C,error:N,shadow:me,children:p}),N&&h&&(0,e.jsx)(v.a,{paddingTop:1,children:(0,e.jsx)(T.o,{variant:"pi",textColor:"danger600",children:N})})]})}},13203:(H,L,o)=>{"use strict";o.d(L,{u:()=>b});var e=o(74848),E=o(42349),x=o(91616);const b=({children:O,...T})=>{const{expanded:A,id:v}=(0,E.O)();if(!A)return null;const M=`accordion-content-${v}`,K=`accordion-label-${v}`,a=`accordion-desc-${v}`;return(0,e.jsx)(x.a,{role:"region",id:M,"aria-labelledby":K,"aria-describedby":a,...T,children:O})}},42349:(H,L,o)=>{"use strict";o.d(L,{C:()=>E,O:()=>x});var e=o(96540);const E=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),x=()=>(0,e.useContext)(E)},23845:(H,L,o)=>{"use strict";o.d(L,{P:()=>p});var e=o(74848),E=o(77044),x=o(40948),b=o(82008),O=o(42349);const T=({expanded:S,disabled:N,variant:g})=>{let h="neutral100";return S?h="primary100":N?h="neutral150":g==="primary"&&(h="neutral0"),h};var A=o(4800),v=o(41240),M=o(98016),K=o(97939);const a=(0,x.Ay)(A.Q)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:S,expanded:N})=>N?S.colors.primary600:S.colors.neutral500};
    }
  }
`,F=(0,x.Ay)(M.s)`
  min-height: ${({theme:S,size:N})=>S.sizes.accordions[N]};
  border-radius: ${({theme:S,expanded:N})=>N?`${S.borderRadius} ${S.borderRadius} 0 0`:S.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.primary600};
      }
    }
  }
`,p=({title:S,description:N,as:g="span",togglePosition:h="right",action:V,...oe})=>{const{onToggle:ce,toggle:re,expanded:C,id:me,size:Q,variant:z,disabled:_}=(0,O.O)(),Ce=`accordion-content-${me}`,be=`accordion-label-${me}`,Ae=`accordion-desc-${me}`,ae=Q==="M"?6:4,Re=Q==="M"?ae:ae-2,Se=T({expanded:C,disabled:_,variant:z}),w={as:g,fontWeight:Q==="S"?"bold":void 0,id:be,textColor:C?"primary600":"neutral700",ellipsis:!0,variant:Q==="M"?"delta":void 0},J=C?"primary600":"neutral600",ne=C?"primary200":"neutral200",Y=Q==="M"?`${32/16}rem`:`${24/16}rem`,j=()=>{_||(re&&!ce?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),re()):ce&&ce())},X=(0,e.jsx)(M.s,{justifyContent:"center",borderRadius:"50%",height:Y,width:Y,transform:C?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ne,cursor:_?"not-allowed":"pointer",onClick:j,shrink:0,children:(0,e.jsx)(v.I,{as:E.A,width:Q==="M"?`${11/16}rem`:`${8/16}rem`,color:C?"primary600":"neutral600"})});return(0,e.jsx)(F,{paddingBottom:Re,paddingLeft:ae,paddingRight:ae,paddingTop:Re,background:Se,expanded:C,size:Q,justifyContent:"space-between",cursor:_?"not-allowed":"",children:(0,e.jsxs)(M.s,{gap:3,flex:1,maxWidth:"100%",children:[h==="left"&&X,(0,e.jsx)(a,{onClick:j,"aria-disabled":_,"aria-expanded":C,"aria-controls":Ce,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:C,type:"button",flex:1,minWidth:0,...oe,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.I,{...w,children:S}),N&&(0,e.jsx)(K.o,{as:"p",id:Ae,textColor:J,children:N})]})}),h==="right"&&(0,e.jsxs)(M.s,{gap:3,children:[X,V]}),h==="left"&&V]})})}},81994:(H,L,o)=>{"use strict";o.d(L,{B:()=>b});var e=o(74848),E=o(40948),x=o(50497);const b=({options:T,...A})=>(0,e.jsx)(x.KF,{...A,children:T.map(v=>"children"in v?(0,e.jsx)(x.np,{label:v.label,values:v.children.map(M=>M.value.toString()),children:v.children.map(M=>(0,e.jsx)(O,{value:M.value,children:M.label},M.value))},v.label):(0,e.jsx)(x.fe,{value:v.value,children:v.label},v.value))}),O=(0,E.Ay)(x.fe)`
  padding-left: ${({theme:T})=>T.spaces[7]};
`}}]);
