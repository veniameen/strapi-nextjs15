"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[3340],{80377:(d,s,t)=>{t.r(s),t.d(s,{Onboarding:()=>V});var e=t(96540),l=t(90954),n=t(98016),o=t(97939),m=t(91616),p=t(41240),w=t(39398),y=t(48176),x=t(11744),M=t(69688),A=t(78320),O=t(95274),C=t(9605),I=t(81813),j=t(37259),B=t(6442),r=t(40948);const L=t.p+"19eb2dfcf2603eb55733.png";var P=t(27220),D=t(62881);const R=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],u={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},T=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:P.A},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:D.A}],Z=(0,r.Ay)(l.$)`
  border-radius: 50%;
  padding: ${({theme:a})=>a.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,$=(0,r.Ay)(n.s)`
  transform: translate(-50%, -50%);
`,H=(0,r.Ay)(n.s)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:a})=>`-${a.spaces[1]}`};
  }

  :hover {
    background: ${({theme:a})=>a.colors.primary100};

    /* Hover style for the number displayed */
    ${o.o}:first-child {
      color: ${({theme:a})=>a.colors.primary500};
    }

    /* Hover style for the label */
    ${o.o}:nth-child(1) {
      color: ${({theme:a})=>a.colors.primary600};
    }
  }
`,W=r.Ay.img`
  width: ${({theme:a})=>a.spaces[10]};
  height: ${({theme:a})=>a.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:a})=>`${a.colors.neutral800}1F`};
  border-radius: ${({theme:a})=>a.borderRadius};
`,f=(0,r.Ay)(o.o)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,E=(0,r.Ay)(f)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,V=()=>{const a=(0,e.useRef)(),[g,K]=(0,e.useState)(!1),{formatMessage:c}=(0,B.A)(),{communityEdition:k}=(0,A.Xe)(),b=()=>{K(i=>!i)},N=[...T,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:O.A,href:k?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(m.a,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(Z,{"aria-label":c(g?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:b,ref:a},e.createElement(p.I,{as:g?C.A:I.A,color:"buttonNeutral0"})),g&&e.createElement(w.Z,null,e.createElement(y.UC,{padding:0,onDimiss:b,source:a,placement:"top-end",spacing:12},e.createElement(n.s,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(f,{fontWeight:"bold"},c({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(E,{as:"a",href:u.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},c(u.label))),e.createElement(x.c,null),R.map(({href:i,duration:h,label:v},U)=>e.createElement(H,{as:"a",href:i,target:"_blank",rel:"noreferrer noopener",key:i,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(m.a,{paddingRight:5},e.createElement(o.o,{textColor:"neutral200",variant:"alpha"},U+1)),e.createElement(m.a,{position:"relative"},e.createElement(W,{src:L,alt:""}),e.createElement($,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(p.I,{as:j.A,color:"buttonNeutral0",width:3,height:3}))),e.createElement(n.s,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(o.o,{fontWeight:"bold"},c(v)),e.createElement(M.s,null,":"),e.createElement(o.o,{textColor:"neutral600",variant:"pi"},h)))),e.createElement(n.s,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},N.map(({label:i,href:h,icon:v})=>e.createElement(n.s,{gap:3,key:h},e.createElement(p.I,{as:v,color:"primary600"}),e.createElement(E,{as:"a",href:h,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},c(i))))))))}},27220:(d,s,t)=>{t.d(s,{A:()=>n});var e=t(74848);const l=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7Zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 1 0 0 3H7ZM7 5v2h2V5H7Zm0 3v2h2V8H7Zm0 3v2h2v-2H7Z"})}),n=l},95274:(d,s,t)=>{t.d(s,{A:()=>n});var e=t(74848);const l=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"})}),n=l},62881:(d,s,t)=>{t.d(s,{A:()=>n});var e=t(74848);const l=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"})}),n=l},37259:(d,s,t)=>{t.d(s,{A:()=>n});var e=t(74848);const l=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),n=l},81813:(d,s,t)=>{t.d(s,{A:()=>n});var e=t(74848);const l=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 15 14",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"M5.08 4.1c0-1.19 1.18-2.17 2.42-2.17s2.43.98 2.43 2.17c0 1.1-.56 1.61-1.31 2.28l-.03.03c-.75.65-1.66 1.47-1.66 3.09a.57.57 0 1 0 1.15 0c0-1.08.55-1.6 1.3-2.26l.02-.02c.75-.66 1.67-1.48 1.67-3.12C11.07 2.13 9.22.78 7.5.78 5.78.78 3.93 2.13 3.93 4.1a.57.57 0 1 0 1.15 0Zm2.42 9.26a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z"})}),n=l}}]);
