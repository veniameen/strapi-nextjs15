"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[6827],{4858:(x,l,e)=>{e.r(l),e.d(l,{InternalErrorPage:()=>p});var t=e(96540),s=e(71808),c=e(7562),h=e(40121),v=e(25170),E=e(78320),o=e(65648),u=e(28963),g=e(6442);const p=()=>{const{formatMessage:m}=(0,g.A)();return(0,E.L4)(),t.createElement(s.g,{labelledBy:"title"},t.createElement(c.Q,{id:"title",title:m({id:"content-manager.pageNotFound",defaultMessage:"Page not found"})}),t.createElement(h.s,null,t.createElement(v.p,{action:t.createElement(E.z9,{variant:"secondary",endIcon:t.createElement(o.A,null),to:"/"},m({id:"app.components.NotFoundPage.back",defaultMessage:"Back to homepage"})),content:m({id:"notification.error",defaultMessage:"An error occured"}),hasRadius:!0,icon:t.createElement(u.A,{width:"10rem"}),shadow:"tableShadow"})))}},40121:(x,l,e)=>{e.d(l,{s:()=>c});var t=e(74848),s=e(91616);const c=({children:h})=>(0,t.jsx)(s.a,{paddingLeft:10,paddingRight:10,children:h})},7562:(x,l,e)=>{e.d(l,{Q:()=>p});var t=e(74848),s=e(96540),c=e(40948);const h=n=>{const a=(0,s.useRef)(null),[d,r]=(0,s.useState)(!0),i=([_])=>{r(_.isIntersecting)};return(0,s.useEffect)(()=>{const _=a.current,f=new IntersectionObserver(i,n);return _&&f.observe(a.current),()=>{_&&f.disconnect()}},[a,n]),[a,d]};var v=e(10263);const E=(n,a)=>{const d=(0,v.c)(a);(0,s.useLayoutEffect)(()=>{const r=new ResizeObserver(d);return Array.isArray(n)?n.forEach(i=>{i.current&&r.observe(i.current)}):n.current&&r.observe(n.current),()=>{r.disconnect()}},[n,d])};var o=e(91616),u=e(98016),g=e(97939);const p=n=>{const a=(0,s.useRef)(null),[d,r]=(0,s.useState)(null),[i,_]=h({root:null,rootMargin:"0px",threshold:0});return E(i,()=>{i.current&&r(i.current.getBoundingClientRect())}),(0,s.useEffect)(()=>{a.current&&r(a.current.getBoundingClientRect())},[a]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:d?.height},ref:i,children:_&&(0,t.jsx)(M,{ref:a,...n})}),!_&&(0,t.jsx)(M,{...n,sticky:!0,width:d?.width})]})};p.displayName="HeaderLayout";const m=(0,c.Ay)(o.a)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,M=s.forwardRef(({navigationAction:n,primaryAction:a,secondaryAction:d,subtitle:r,title:i,sticky:_,width:f,...P},O)=>{const j=typeof r=="string";return _?(0,t.jsx)(m,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:f,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(u.s,{justifyContent:"space-between",children:[(0,t.jsxs)(u.s,{children:[n&&(0,t.jsx)(o.a,{paddingRight:3,children:n}),(0,t.jsxs)(o.a,{children:[(0,t.jsx)(g.o,{variant:"beta",as:"h1",...P,children:i}),j?(0,t.jsx)(g.o,{variant:"pi",textColor:"neutral600",children:r}):r]}),d?(0,t.jsx)(o.a,{paddingLeft:4,children:d}):null]}),(0,t.jsx)(u.s,{children:a?(0,t.jsx)(o.a,{paddingLeft:2,children:a}):void 0})]})}):(0,t.jsxs)(o.a,{ref:O,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,t.jsx)(o.a,{paddingBottom:2,children:n}):null,(0,t.jsxs)(u.s,{justifyContent:"space-between",children:[(0,t.jsxs)(u.s,{minWidth:0,children:[(0,t.jsx)(g.o,{as:"h1",variant:"alpha",...P,children:i}),d?(0,t.jsx)(o.a,{paddingLeft:4,children:d}):null]}),a]}),j?(0,t.jsx)(g.o,{variant:"epsilon",textColor:"neutral600",as:"p",children:r}):r]})})},71808:(x,l,e)=>{e.d(l,{g:()=>v});var t=e(74848),s=e(40948),c=e(91616);const h=(0,s.Ay)(c.a)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,v=({labelledBy:E="main-content-title",...o})=>(0,t.jsx)(h,{"aria-labelledby":E,as:"main",id:"main-content",tabIndex:-1,...o})},65648:(x,l,e)=>{e.d(l,{A:()=>c});var t=e(74848);const s=h=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...h,children:(0,t.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),c=s}}]);
