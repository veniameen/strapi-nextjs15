"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[1926],{42252:(W,m,e)=>{e.d(m,{g:()=>L});var t=e(78320),R=e(6442),S=e(75942);const L=(M={},p={})=>{const{id:r="",...f}=M,{get:y}=(0,t.ry)(),{locale:d}=(0,R.A)(),O=(0,t.QM)(d,{sensitivity:"base"}),{data:n,error:C,isError:h,isLoading:o,refetch:A}=(0,S.useQuery)(["roles",r,f],async()=>{const{data:c}=await y(`/admin/roles/${r??""}`,{params:f});return c},p);let g=[];return r&&n?g=[n.data]:Array.isArray(n?.data)&&(g=n.data),{roles:g.sort((c,I)=>O.compare(c.name,I.name)),error:C,isError:h,isLoading:o,refetch:A}}},67061:(W,m,e)=>{e.r(m),e.d(m,{SingleSignOn:()=>x,default:()=>F});var t=e(96540),R=e(63214),S=e(71808),L=e(7562),M=e(90954),p=e(40121),r=e(98016),f=e(97939),y=e(96630),d=e(16473),O=e(4556),n=e(15074),C=e(62431),h=e(50497),o=e(78320),A=e(26437),g=e(2404),c=e.n(g),I=e(6442),T=e(69733),G=e(33878),K=e(42252),b=e(71526),u=e(20627);const U=u.Ik().shape({autoRegister:u.lc().required(o.iW.required),defaultRole:u.gl().when("autoRegister",(a,l)=>a?l.required(o.iW.required):l.nullable()),ssoLockedRoles:u.YO().nullable().of(u.gl().when("ssoLockedRoles",(a,l)=>a?l.required(o.iW.required):l.nullable()))}),x=()=>{(0,o.L4)();const{formatMessage:a}=(0,I.A)(),l=(0,T.d4)(b.G),{isLoading:Q,allowedActions:{canUpdate:P,canReadRoles:z}}=(0,o.ec)({...l.settings.sso,readRoles:l.settings.roles.read}),[{formErrors:i,initialData:H,isLoading:$,modifiedData:v,showHeaderButtonLoader:k},,{handleChange:E,handleSubmit:Y}]=(0,G.T6)("/admin/providers/options",U,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:B,isLoading:j}=(0,K.g)(void 0,{enabled:z}),J=Q||j||$;return t.createElement(R.P,null,t.createElement(o.x7,{name:"SSO"}),t.createElement(S.g,{tabIndex:-1},t.createElement("form",{onSubmit:Y},t.createElement(L.Q,{primaryAction:t.createElement(M.$,{"data-testid":"save-button",disabled:c()(H,v),loading:k,startIcon:t.createElement(A.A,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(p.s,null,J?t.createElement(o.Bl,null):t.createElement(r.s,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(f.o,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(y.x,{gap:4},t.createElement(d.E,{col:6,m:6,s:12},t.createElement(O.l,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!P,checked:v.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{E({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(d.E,{col:6,m:6,s:12},t.createElement(n.l,{disabled:!P,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole.id,defaultMessage:i.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{E({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:v.defaultRole},B.map(({id:s,name:D})=>t.createElement(C.c,{key:s,value:s.toString()},D)))),t.createElement(d.E,{col:6,m:6,s:12},t.createElement(h.KF,{disabled:!P,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles.id,defaultMessage:i.ssoLockedRoles.id}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:s=>{E({target:{name:"ssoLockedRoles",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{E({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:v.ssoLockedRoles||[],withTags:!0},B.map(({id:s,name:D})=>t.createElement(h.fe,{key:s,value:s.toString()},D))))))))))},F=()=>{const a=(0,T.d4)(b.G);return t.createElement(o.kz,{permissions:a.settings.sso.main},t.createElement(x,null))}}}]);
