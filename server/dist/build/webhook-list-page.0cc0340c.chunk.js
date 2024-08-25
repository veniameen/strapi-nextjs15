"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[4001],{60994:(U,u,t)=>{t.r(u),t.d(u,{default:()=>me});var e=t(96540),s=t(78320),c=t(69733),m=t(71526),g=t(99532),T=t(63214),A=t(71808),S=t(7562),D=t(96492),l=t(97939),L=t(90954),$=t(40121),K=t(91616),_=t(28244),ee=t(47527),te=t(64154),V=t(15912),i=t(69782),F=t(45073),ae=t(69688),ne=t(88920),j=t(98016),E=t(74848),z=t(40948);const P=z.Ay.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=z.Ay.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${P} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${P}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:o,onChange:h,onLabel:f="On",offLabel:d="Off",selected:M,visibleLabels:n=!1,...b},v)=>(0,E.jsx)(se,{ref:v,role:"switch","aria-checked":M,"aria-label":o,onClick:h,visibleLabels:n,type:"button",...b,children:(0,E.jsxs)(j.s,{children:[(0,E.jsxs)(P,{children:[(0,E.jsx)("span",{children:f}),(0,E.jsx)("span",{children:d})]}),n&&(0,E.jsx)(K.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:M?"success600":"danger600",children:M?f:d})]})}));var N=t(63292),le=t(25170),w=t(68433),G=t(34487),re=t(46748),ie=t(64184),de=t(6442),B=t(75942),Q=t(56347);const ce=()=>{const[o,h]=(0,e.useState)(!1),[f,d]=(0,e.useState)([]),M=(0,c.d4)(m.G),{formatMessage:n}=(0,de.A)(),{formatAPIError:b}=(0,s.wq)(),v=(0,s.hN)();(0,s.L4)();const{push:he}=(0,Q.W6)(),{pathname:H}=(0,Q.zy)(),{isLoading:ue,allowedActions:{canCreate:O,canUpdate:J,canDelete:X}}=(0,s.ec)(M.settings.webhooks),{get:ge,post:Ee,put:fe}=(0,s.ry)(),{notifyStatus:Y}=(0,g.W)(),be="webhooks",{isLoading:ve,data:y,error:W,refetch:Z}=(0,B.useQuery)(be,async()=>{const{data:{data:a}}=await ge("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(W){v({type:"warning",message:b(W)});return}y&&Y(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[y,W,v,n,Y,b]);const q=(0,B.useMutation)(async()=>{await Ee("/admin/webhooks/batch-delete",{ids:f})},{onError(a){v({type:"warning",message:b(a)}),h(!1)},onSuccess(){d([]),h(!1),Z()}}),ye=(0,B.useMutation)(async({isEnabled:a,id:r})=>{const{id:C,...I}=y.find(Ce=>Ce.id===r)??{},pe={...I,isEnabled:a};await fe(`/admin/webhooks/${r}`,pe)},{onError(a){v({type:"warning",message:b(a)})},onSuccess(){Z()}}),Me=()=>q.mutate(),xe=a=>d(a?y.map(r=>r.id):[]),Le=(a,r)=>d(a?C=>[...C,r]:C=>C.filter(I=>I!==r)),k=a=>he(`${H}/${a}`),R=ue||ve,p=y?.length??0,x=f.length;return e.createElement(T.P,null,e.createElement(s.x7,{name:"Webhooks"}),e.createElement(A.g,{"aria-busy":R},e.createElement(S.Q,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:O&&!R&&e.createElement(s.z9,{startIcon:e.createElement(w.A,null),variant:"default",to:`${H}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),x>0&&X&&e.createElement(D.B,{startActions:e.createElement(e.Fragment,null,e.createElement(l.o,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:x})),e.createElement(L.$,{onClick:()=>h(!0),startIcon:e.createElement(G.A,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement($.s,null,R?e.createElement(K.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.Bl,null)):p>0?e.createElement(_.X,{colCount:5,rowCount:p+1,footer:e.createElement(ee.S,{onClick:()=>O?k("create"):{},icon:e.createElement(w.A,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.d,null,e.createElement(V.Tr,null,e.createElement(i.Th,null,e.createElement(F.J,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:x>0&&x<p,value:x===p,onValueChange:xe})),e.createElement(i.Th,{width:"20%"},e.createElement(l.o,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.o,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.o,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(ae.s,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ne.N,null,y.map(a=>e.createElement(V.Tr,{key:a.id,...(0,s.qM)({fn:()=>k(a.id),condition:J})},e.createElement(i.Td,{...s.dG},e.createElement(F.J,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:f?.includes(a.id),onValueChange:r=>Le(r,a.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.o,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(i.Td,null,e.createElement(l.o,{textColor:"neutral800"},a.url)),e.createElement(i.Td,null,e.createElement(j.s,null,e.createElement(oe,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:r=>{r.stopPropagation(),ye.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(j.s,{gap:1},J&&e.createElement(N.K,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(re.A,null),noBorder:!0}),X&&e.createElement(N.K,{onClick:r=>{r.stopPropagation(),d([a.id]),h(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(G.A,null),noBorder:!0}))))))):e.createElement(le.p,{icon:e.createElement(ie.A,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(L.$,{variant:"secondary",startIcon:e.createElement(w.A,null),onClick:()=>O?k("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.TM,{isOpen:o,onToggleDialog:()=>h(a=>!a),onConfirm:Me,isConfirmButtonLoading:q.isLoading}))},me=()=>{const o=(0,c.d4)(m.G);return e.createElement(s.kz,{permissions:o.settings.webhooks.main},e.createElement(ce,null))}},96492:(U,u,t)=>{t.d(u,{B:()=>c});var e=t(74848),s=t(98016);const c=({startActions:m,endActions:g})=>!m&&!g?null:(0,e.jsxs)(s.s,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.s,{gap:2,wrap:"wrap",children:m}),(0,e.jsx)(s.s,{gap:2,shrink:0,wrap:"wrap",children:g})]})},47527:(U,u,t)=>{t.d(u,{S:()=>D});var e=t(74848),s=t(40948),c=t(91616),m=t(11744),g=t(98016),T=t(97939);const A=(0,s.Ay)(c.a)`
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
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,S=(0,s.Ay)(c.a)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,D=({children:l,icon:L,...$})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(m.c,{}),(0,e.jsx)(S,{as:"button",background:"primary100",padding:5,...$,children:(0,e.jsxs)(g.s,{children:[(0,e.jsx)(A,{"aria-hidden":!0,background:"primary200",children:L}),(0,e.jsx)(c.a,{paddingLeft:3,children:(0,e.jsx)(T.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
