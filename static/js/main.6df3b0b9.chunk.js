(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{237:function(e,t,r){},238:function(e,t,r){"use strict";r.r(t);var o=r(0),i=r(118),c=r.n(i),n=r(259),a=r(247),s=r(248),l=r(261),p=r(249),x=r(250),d=r(35),b=r(2),h=function(){return Object(b.jsxs)(a.a,{px:"5%",h:"100px",w:"100vw",bgColor:"primary",direction:"column",alignItems:"center",justifyContent:"center",children:[Object(b.jsx)(s.a,{as:"p",textAlign:"center",color:"terciary",fontWeight:"600",children:"Hecho con cari\xf1o por Lewis, Copyright 2021 - Todos los derechos reservados"}),Object(b.jsxs)(l.a,{spacing:2,children:[Object(b.jsx)(p.a,{href:"https://github.com/LewisContreras",isExternal:!0,children:Object(b.jsx)(x.a,{boxSize:5,color:"terciary",as:d.c})}),Object(b.jsx)(p.a,{href:"https://www.linkedin.com/in/lewis-contreras",isExternal:!0,children:Object(b.jsx)(x.a,{boxSize:5,color:"terciary",as:d.d})})]})]})},j=r(4),g=r(251),m=r(252),u=r(255),f=r(256),O=r(260),y=r(125),w=r(48),S=function(){var e=Object(o.useState)(!1),t=Object(j.a)(e,2),r=t[0],i=t[1],c=Object(y.a)({initialValues:{namePerson:"",email:"",message:""},validationSchema:w.a({namePerson:w.b().required("Este campo es requerido"),email:w.b().email("Debe ingresar un correo").required("Este campo es requerido"),message:w.b().required("Este campo es requerido")}),validateOnChange:function(e){console.log(e)},onSubmit:function(e){i(!1);var t=document.createElement("a");t.setAttribute("href","mailto:legiconba4@gmail.com?subject=".concat(e.namePerson," ").concat(e.email,"&body=").concat(e.message)),t.click()}});return Object(b.jsx)(g.a,{py:"10px",w:"100vw",minH:"calc(100vh - 170px)",bgColor:"terciary",children:Object(b.jsxs)(l.b,{spacing:"10px",px:"10px",py:"10px",as:"form",onSubmit:c.handleSubmit,borderRadius:"8px",w:"94%",bgColor:"primary",children:[Object(b.jsx)(s.a,{fontSize:"3xl",color:"secondary",fontWeight:"600",children:"Contacto"}),Object(b.jsx)(s.a,{fontSize:"xl",color:"terciary",children:"Si est\xe1 interesado en trabajar conmigo en su pr\xf3ximo proyecto, no dude en ponerse en contacto."}),Object(b.jsx)(m.a,{type:"text",color:"terciary",name:"namePerson",value:c.values.namePerson,onChange:c.handleChange,placeholder:"Nombre Completo"}),c.errors.namePerson&&r?Object(b.jsx)(u.a,{color:"secondary",children:c.errors.namePerson}):null,Object(b.jsx)(m.a,{type:"email",color:"terciary",placeholder:"Correo",name:"email",value:c.values.email,onChange:c.handleChange}),c.errors.email&&r?Object(b.jsx)(u.a,{color:"secondary",children:c.errors.email}):null,Object(b.jsx)(f.a,{h:"120px",color:"terciary",placeholder:"Mensaje...",name:"message",value:c.values.message,onChange:c.handleChange}),c.errors.message&&r?Object(b.jsx)(u.a,{color:"secondary",children:c.errors.message}):null,Object(b.jsx)(O.a,{type:"submit",onClick:function(){return i(!0)},colorScheme:"teal",children:"Enviar"})]})})},C=(r(237),function(){var e=Object(o.useState)(!1),t=Object(j.a)(e,2),r=t[0],i=t[1];return Object(b.jsxs)(u.a,{boxShadow:"base",display:"flex",alignItems:"center",position:"fixed",top:"0",w:"100vw",bgColor:"primary",zIndex:"10",h:"80px",children:[Object(b.jsxs)(l.a,{w:"90%",mx:"auto",justifyContent:"space-between",children:[Object(b.jsx)(g.a,{onClick:function(){return i(!r)},border:"1px solid",borderColor:"terciary",borderRadius:"4px",p:"5px",children:Object(b.jsx)(x.a,{color:"terciary",fontSize:"20px",as:d.b})}),Object(b.jsx)("a",{href:"https://drive.google.com/file/d/11aj2WBsoFrqqSeOlejw53-wF5EhOHNAk/view?usp=sharing",download:"cv.pdf",children:Object(b.jsx)(O.a,{colorScheme:"teal",children:"Descargar Curriculum"})})]}),Object(b.jsxs)(l.b,{className:"scene_fast scene_element--clippathdown",display:r?"flex":"none",bgColor:"primary",position:"absolute",top:"70px",width:"100vw",zIndex:"10",children:[Object(b.jsx)(p.a,{py:"4px",width:"100%",textAlign:"center",borderTop:"2px solid",borderColor:"terciary",color:"terciary",children:"Welcome"}),Object(b.jsx)(p.a,{py:"4px",width:"100%",textAlign:"center",borderTop:"2px solid",borderColor:"terciary",color:"terciary",children:"Projects"}),Object(b.jsx)(p.a,{py:"4px",width:"100%",textAlign:"center",borderTop:"2px solid",borderColor:"terciary",color:"terciary",children:"Technologies"}),Object(b.jsx)(p.a,{py:"4px",pb:"10px",width:"100%",textAlign:"center",borderTop:"2px solid",borderColor:"terciary",color:"terciary",children:"Contact"})]})]})}),v=r(257),z=function(){return Object(b.jsxs)(u.a,{py:"20px",px:"5%",bgColor:"secondary",w:"100vw",children:[Object(b.jsx)(s.a,{pb:"20px",color:"primary",fontSize:"3xl",fontWeight:"600",children:"Proyectos"}),Object(b.jsxs)(v.a,{gridTemplateColumns:"1fr",templateRows:"0.5fr 1fr 3fr 3fr 3fr",gap:"20px",children:[Object(b.jsx)(v.b,{color:"gray.300",fontSize:"26px",fontWeight:"600",children:"Parece magia, funciona con c\xf3digo."}),Object(b.jsx)(v.b,{color:"terciary",fontSize:"26px",fontWeight:"600",children:"A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e incre\xedbles."}),Object(b.jsx)(v.b,{borderRadius:"4px",bgImage:"url('https://i.imgur.com/rwfsmdJ.png')",bgPosition:"center",bgRepeat:"no-repeat",boxShadow:"2xl",bgSize:"cover",position:"relative",zIndex:"0",children:Object(b.jsxs)(u.a,{boxShadow:"2xl",borderRadius:"8px",position:"absolute",p:"10px",bottom:"30px",left:"-10px",bgColor:"primary",w:"90%",height:"40%",children:[Object(b.jsx)(s.a,{fontWeight:"600",fontSize:"3xl",color:"terciary",children:"Blockmaster"}),Object(b.jsx)(s.a,{fontSize:"xl",color:"terciary",children:" Revive una tienda ic\xf3nica para rentar pel\xedculas, regresa con una nueva plataforma de streaming."}),Object(b.jsxs)(l.a,{px:"10px",position:"absolute",bottom:"10px",right:"0",left:"0",justifyContent:"space-between",children:[Object(b.jsx)(p.a,{width:"45%",href:"https://github.com/LewisContreras/blockmaster-movies",isExternal:!0,children:Object(b.jsx)(O.a,{width:"100%",colorScheme:"teal",children:"Repositorio"})}),Object(b.jsx)(p.a,{width:"45%",href:"https://lewiscontreras.github.io/blockmaster-movies/",isExternal:!0,children:Object(b.jsx)(O.a,{width:"100%",colorScheme:"teal",children:"Despliegue"})})]})]})}),Object(b.jsx)(v.b,{borderRadius:"4px",bgImage:"url('https://i.imgur.com/nx7EOsb.png')",bgPosition:"center",bgRepeat:"no-repeat",boxShadow:"2xl",bgSize:"cover",position:"relative",zIndex:"0",children:Object(b.jsxs)(u.a,{boxShadow:"2xl",borderRadius:"8px",position:"absolute",p:"10px",bottom:"30px",left:"-10px",bgColor:"primary",w:"90%",height:"40%",children:[Object(b.jsx)(s.a,{fontWeight:"600",fontSize:"3xl",color:"terciary",children:"App de adopci\xf3n"}),Object(b.jsx)(s.a,{fontSize:"xl",color:"terciary",children:" Aplicaci\xf3n en la que podr\xe1s publicar y adoptar mascotas."}),Object(b.jsxs)(l.a,{px:"10px",position:"absolute",bottom:"10px",right:"0",left:"0",justifyContent:"space-between",children:[Object(b.jsx)(p.a,{width:"45%",href:"https://github.com/LewisContreras/adoptionApp",isExternal:!0,children:Object(b.jsx)(O.a,{width:"100%",colorScheme:"teal",children:"Repositorio"})}),Object(b.jsx)(p.a,{width:"45%",href:"https://lewiscontreras.github.io/adoptionApp/",isExternal:!0,children:Object(b.jsx)(O.a,{width:"100%",colorScheme:"teal",children:"Despliegue"})})]})]})}),Object(b.jsx)(v.b,{borderRadius:"4px",bgImage:"url('https://i.imgur.com/lT1gWYh.png')",bgPosition:"center",bgRepeat:"no-repeat",boxShadow:"2xl",bgSize:"cover",position:"relative",zIndex:"0",children:Object(b.jsxs)(u.a,{boxShadow:"2xl",borderRadius:"8px",position:"absolute",p:"10px",bottom:"30px",left:"-10px",bgColor:"primary",w:"90%",height:"40%",children:[Object(b.jsx)(s.a,{fontWeight:"600",fontSize:"3xl",color:"terciary",children:"Documentaci\xf3n"}),Object(b.jsx)(s.a,{fontSize:"xl",color:"terciary",children:"P\xe1gina de documentaci\xf3n t\xe9cnica donde podr\xe1s encontrar algunos conceptos b\xe1sicos de programaci\xf3n en Javascript."}),Object(b.jsxs)(l.a,{px:"10px",position:"absolute",bottom:"10px",right:"0",left:"0",justifyContent:"space-between",children:[Object(b.jsx)(p.a,{width:"45%",href:"https://github.com/LewisContreras/technicalDocumentationPage",isExternal:!0,children:Object(b.jsx)(O.a,{width:"100%",colorScheme:"teal",children:"Repositorio"})}),Object(b.jsx)(p.a,{width:"45%",href:"https://lewiscontreras.github.io/technicalDocumentationPage/",isExternal:!0,children:Object(b.jsx)(O.a,{width:"100%",colorScheme:"teal",children:"Despliegue"})})]})]})})]}),Object(b.jsx)(p.a,{display:"inline-block",mt:"20px",w:"100%",href:"https://github.com/LewisContreras?tab=repositories",isExternal:!0,children:Object(b.jsxs)(l.a,{p:"6px",w:"100%",border:"2px solid",borderColor:"primary",borderRadius:"6px",justifyContent:"center",fontWeight:"600",fontSize:"xl",color:"primary",children:[Object(b.jsx)(s.a,{children:"Ver m\xe1s proyectos"}),Object(b.jsx)(x.a,{as:d.a})]})})]})},W=r(262),E=function(){return Object(b.jsx)(g.a,{pt:"100px",bgColor:"primary",h:"100vh",w:"100vw",children:Object(b.jsxs)(a.a,{alignItems:"center",textAlign:"center",maxW:"90%",flexDirection:"column",children:[Object(b.jsx)(W.a,{maxW:"80%",maxH:"35vh",borderRadius:"20px",src:"https://i.imgur.com/92Ht5DC.jpeg"}),Object(b.jsx)(s.a,{pt:"20px",fontWeight:"600",color:"terciary",fontSize:"3xl",children:"\xa1Hola, bienvenido, soy Lewis Contreras!"}),Object(b.jsx)(s.a,{py:"10px",color:"secondary",fontWeight:"600",fontSize:"3xl",children:"Front-End Developer"}),Object(b.jsx)(s.a,{color:"terciary",fontSize:"xl",children:"Un desarrollador en constante aprendizaje y seguimiento de las nuevas tecnolog\xedas."})]})})},R=r(258),P=Object(R.a)({styles:{global:{body:{color:"#000"}}},colors:{primary:"#1D4044",secondary:"#38B2AC",terciary:"#CBD5E0"},textStyles:{h1:{fontSize:"46px",fontWeight:800,lineHeight:"56px",letterSpacing:"0.15%"},h2:{fontSize:"48px",fontWeight:700,lineHeight:"58px",letterSpacing:"0.15%"},h3:{fontSize:"37px",fontWeight:700,lineHeight:"37px"},h4:{fontSize:"30px",fontWeight:600,lineHeight:"34px"},h5:{fontSize:"30px",fontWeight:600,lineHeight:"26px"}}});var A=function(){return Object(b.jsxs)(n.a,{theme:P,children:[Object(b.jsx)(C,{}),Object(b.jsx)(E,{}),Object(b.jsx)(z,{}),Object(b.jsx)(S,{}),Object(b.jsx)(h,{})]})};c.a.render(Object(b.jsx)(A,{}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.6df3b0b9.chunk.js.map