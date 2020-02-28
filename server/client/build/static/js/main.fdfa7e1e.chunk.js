(this.webpackJsonpcbm2web=this.webpackJsonpcbm2web||[]).push([[0],{165:function(e,a,t){e.exports=t(311)},170:function(e,a,t){},171:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},172:function(e,a,t){},311:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),o=t.n(i),l=(t(170),t(171),t(172),t(15)),c=t(33),m={isAuthenticated:function(){return"undefined"!=typeof window&&(!!sessionStorage.getItem("jwt")&&JSON.parse(sessionStorage.getItem("jwt")))},authenticate:function(e,a){"undefined"!==typeof window&&sessionStorage.setItem("jwt",JSON.stringify(e)),a()},signout:function(e){"undefined"!==typeof window&&sessionStorage.removeItem("jwt"),e(),fetch("/auth/signout/",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){document.cookie="t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}))}},s=t(342),u=t(140),p=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function d(e){var a=e.history,t=p();return m.isAuthenticated()?r.a.createElement("div",{className:t.paper},r.a.createElement("h1",null,"JWT Authentication"),r.a.createElement("h3",null,"React JS | Express JS | MongoDB"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Hello!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,{color:"secondary",variant:"contained",onClick:function(){m.signout((function(){return a.push("/signin")}))}},"Sign out")):r.a.createElement("div",{className:t.paper},r.a.createElement("h1",null,"JWT Authentication"),r.a.createElement("h3",null,"React JS | Express JS | MongoDB"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(l.b,{to:"/signin"},r.a.createElement(s.a,{color:"primary",variant:"contained"},"Sign In")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(l.b,{to:"/signup"},r.a.createElement(s.a,{color:"secondary",variant:"contained"},"Sign up")),r.a.createElement("br",null),r.a.createElement("br",null))}var g=t(18),f=t(353),E=t(345),h=t(349),b=t(347),v=t(351),w=t(346),y=t(350),S=t(69),j=t.n(S),x=t(313),N=t(344),O=t(352),C=t(67),k=t(34);function W(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(l.b,{color:"inherit",to:"https://www.sydneybackups.com.au/"},"Your Website")," ",(new Date).getFullYear(),".")}var A=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),T=k.object().shape({firstName:k.string().required(),email:k.string().email()});function D(){var e=A(),a=Object(C.a)({validationSchema:T}),t=a.register,i=a.handleSubmit,o=a.errors,m=Object(n.useState)(!1),u=Object(g.a)(m,2),p=u[0],d=u[1],S=Object(n.useState)(""),k=Object(g.a)(S,2),D=k[0],J=k[1];return p?r.a.createElement(c.a,{to:"/signin"}):r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(f.a,{className:e.avatar},r.a.createElement(j.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:i((function(e){(function(e){return fetch("/api/users/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})({name:e.firstName+e.lastName||void 0,email:e.email||void 0,password:e.password||void 0}).then((function(e){e.error?(J(e.error),console.log(e.error),d(!1)):(J(""),d(!0))}))}))},r.a.createElement(w.a,{container:!0,spacing:2},r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,error:!!o.firstName,inputRef:t}),o.firstName&&r.a.createElement(O.a,{error:"false"},o.firstName.message)),r.a.createElement(w.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",inputRef:t})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",error:!!o.email,inputRef:t}),o.email&&r.a.createElement(O.a,{error:"false"},o.email.message)),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:t})),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(b.a,{control:r.a.createElement(v.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})),D&&r.a.createElement(O.a,{error:"false"},D)),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(w.a,{container:!0,justify:"flex-end"},r.a.createElement(w.a,{item:!0},r.a.createElement(l.b,{to:"/signin",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(y.a,{mt:5},r.a.createElement(W,null)))}var J=t(147),I=t(348);function F(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(l.b,{color:"inherit",to:"https://www.sydneybackups.com.au/"},"Your Website")," ",(new Date).getFullYear(),".")}var R=Object(J.a)({palette:{type:"light"}}),q=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),P=k.object().shape({email:k.string().email(),password:k.string().required()});function $(e){var a=q(),t=Object(C.a)({validationSchema:P}),i=t.register,o=t.handleSubmit,u=t.errors,p=Object(n.useState)(!1),d=Object(g.a)(p,2),b=d[0],v=d[1],S=Object(n.useState)(""),k=Object(g.a)(S,2),W=k[0],A=k[1],T=(e.location.state||{from:{pathname:"/"}}).from;return b?(console.log("1"),r.a.createElement(c.a,{to:T})):(console.log("2"),r.a.createElement(I.a,{theme:R},r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(f.a,{className:a.avatar},r.a.createElement(j.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:o((function(e,a){a.preventDefault(),console.log(e),console.log(e.email),A(""),function(e){return fetch("/auth/signin/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:e.email||void 0,password:e.password||void 0}).then((function(e){e.error?(A(e.error),console.log(e.error)):m.authenticate(e,(function(){A(""),v(!0)}))}))}))},r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:!!u.email,inputRef:i}),u.email&&r.a.createElement(O.a,{error:"false"},u.email.message),r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:!!u.password,inputRef:i}),u.password&&r.a.createElement(O.a,{error:"false"},u.password.message),W&&r.a.createElement(O.a,{error:"false"},W),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(l.b,{to:"/",variant:"body2"},"back Home")),r.a.createElement(w.a,{item:!0},r.a.createElement(l.b,{to:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(y.a,{mt:8},r.a.createElement(F,null)))))}t(2);var B=t(70),Y=t(30),U=t(145),G=t(146),H=t(148);function L(e,a,t,n){return{name:e,calories:a,fat:t,carbs:n}}var M=[L("First-time Adult Passport Book","DS-11","$110","$35"),L("First-time Adult Passport Card","DS-11","$30","$35"),L("First-time Adult Passport Book & Card","DS-11","$140","$35"),L("Adult Passport Card ","DS-82","$30","No Charge")];n.Component,Object(u.a)((function(e){return{root:{flexGrow:1,paddingRight:300,paddingLeft:300},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},title:{backgroundImage:"linear-gradient(to right, #00AEEF , #253F8E)",margin:0,color:"white",height:40}}}));var V=function(){return r.a.createElement(l.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:d}),r.a.createElement(c.b,{path:"/signup",component:D}),r.a.createElement(c.b,{path:"/signin",component:$}),r.a.createElement(c.a,{from:"/",to:{pathname:"/signin"}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(307),t(308);o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[165,1,2]]]);
//# sourceMappingURL=main.fdfa7e1e.chunk.js.map