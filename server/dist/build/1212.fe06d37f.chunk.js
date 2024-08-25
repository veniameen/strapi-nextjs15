"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[1212],{86085:(M,d,e)=>{e.d(d,{E:()=>o});var t=e(96540),u=e(78320),E=e(75942);const o=(l={})=>{const{get:s}=(0,u.ry)(),{data:m,isLoading:a}=(0,E.useQuery)(["ee","providers"],async()=>{const{data:g}=await s("/admin/providers");return g},l);return{providers:t.useMemo(()=>m??[],[m]),isLoading:a}}},40811:(M,d,e)=>{e.d(d,{A:()=>y});var t=e(96540),u=e(98016),E=e(43210),o=e(97939),l=e(96630),s=e(16473),m=e(5556),a=e.n(m),h=e(6442),g=e(54625),v=e(40948);const p=v.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,O=(0,v.Ay)(u.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,i=({provider:n})=>t.createElement(E.m,{label:n.displayName},t.createElement(p,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(o.o,null,n.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const P=({providers:n,displayAllProviders:A})=>{const{formatMessage:f}=(0,h.A)();return A?t.createElement(l.x,{gap:4},n.map(r=>t.createElement(s.E,{key:r.uid,col:4},t.createElement(i,{provider:r})))):n.length>2&&!A?t.createElement(l.x,{gap:4},n.slice(0,2).map(r=>t.createElement(s.E,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(s.E,{col:4},t.createElement(E.m,{label:f({id:"global.see-more"})},t.createElement(p,{as:g.N_,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(O,{justifyContent:"center"},n.map(r=>t.createElement(i,{key:r.uid,provider:r})))};P.defaultProps={displayAllProviders:!0},P.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const y=P},11212:(M,d,e)=>{e.r(d),e.d(d,{FORMS:()=>r});var t=e(96540),u=e(11744),E=e(71808),o=e(91616),l=e(97939),s=e(98016),m=e(10457),a=e(90954),h=e(78320),g=e(6442),v=e(56347),p=e(40948),O=e(81594),i=e(37198),P=e(86085),y=e(40811);const n=(0,p.Ay)(u.c)`
  flex: 1;
`,r={providers:{Component:()=>{const{push:R}=(0,v.W6)(),{formatMessage:c}=(0,g.A)(),{isLoading:D,providers:C}=(0,P.E)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),L=()=>{R("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!D&&C.length===0?t.createElement(v.rd,{to:"/auth/login"}):t.createElement(i.Ay,null,t.createElement(E.g,null,t.createElement(i.A1,null,t.createElement(i.VP,null,t.createElement(O.A,null),t.createElement(o.a,{paddingTop:6,paddingBottom:1},t.createElement(l.o,{as:"h1",variant:"alpha"},c({id:"Auth.form.welcome.title"}))),t.createElement(o.a,{paddingBottom:7},t.createElement(l.o,{variant:"epsilon",textColor:"neutral600"},c({id:"Auth.login.sso.subtitle"})))),t.createElement(s.s,{direction:"column",alignItems:"stretch",gap:7},D?t.createElement(s.s,{justifyContent:"center"},t.createElement(m.a,null,c({id:"Auth.login.sso.loading"}))):t.createElement(y.A,{providers:C}),t.createElement(s.s,null,t.createElement(n,null),t.createElement(o.a,{paddingLeft:3,paddingRight:3},t.createElement(l.o,{variant:"sigma",textColor:"neutral600"},c({id:"or"}))),t.createElement(n,null)),t.createElement(a.$,{fullWidth:!0,size:"L",onClick:L},c({id:"Auth.form.button.login.strapi"})))),t.createElement(s.s,{justifyContent:"center"},t.createElement(o.a,{paddingTop:4},t.createElement(h.N_,{to:"/auth/forgot-password"},t.createElement(l.o,{variant:"pi"},c({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}}}]);
