(this.webpackJsonphoteles=this.webpackJsonphoteles||[]).push([[0],{140:function(e,t,a){},333:function(e,t){},335:function(e,t){},345:function(e,t){},347:function(e,t){},374:function(e,t){},376:function(e,t){},377:function(e,t){},382:function(e,t){},384:function(e,t){},390:function(e,t){},392:function(e,t){},411:function(e,t){},423:function(e,t){},426:function(e,t){},456:function(e,t,a){},564:function(e,t,a){},567:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(26),r=a.n(c),o=(a(140),a(11)),s=a(0),l=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Login"})})},i=function(){return Object(s.jsx)("div",{className:"navbar text-white",children:Object(s.jsx)("h3",{children:"Hoteles"})})},d=a(37),b=function(){return Object(s.jsxs)("div",{className:"sidebar p-3 text-white bg-dark",children:[Object(s.jsx)(d.b,{className:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none",to:"/",children:Object(s.jsx)("span",{className:"fs-4",children:"Sidebar"})}),Object(s.jsx)("hr",{}),Object(s.jsxs)("ul",{className:"nav nav-pills flex-column mb-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.c,{activeClassName:"active",className:"nav-link text-white",exact:!0,to:"/",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.c,{activeClassName:"active",className:"nav-link text-white",exact:!0,to:"/dashboard",children:"Dashboard"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.c,{activeClassName:"active",className:"nav-link text-white",exact:!0,to:"/register",children:"Registro"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.c,{activeClassName:"active",className:"nav-link text-white",exact:!0,to:"/huesped",children:"Huesped"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.c,{activeClassName:"active",className:"nav-link text-white",exact:!0,to:"/informs",children:"Informes"})})]})]})},u=function(){return Object(s.jsx)("div",{})},j=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Home Screen"})})},m=function(){return Object(s.jsx)("div",{})},h=a(6),O=a(14),p=a(10),x=a(15),f=a.n(x),v=a(27),g=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,c,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={date:t},console.log(a),"https://hotelesaitechbeta.azurewebsites.net/api/flujos/informDayly",e.next=5,fetch("https://hotelesaitechbeta.azurewebsites.net/api/flujos/informDayly",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return n=e.sent,e.next=8,n.json();case 8:if(c=e.sent,r=c.status,o=c.data,!r){e.next=14;break}return console.log(o),e.abrupt("return",o);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,c,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,console.log(Object(h.a)({},a)),"https://hotelesaitechbeta.azurewebsites.net/api/flujos/rangeInform",e.next=5,fetch("https://hotelesaitechbeta.azurewebsites.net/api/flujos/rangeInform",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(h.a)({},a))});case 5:return n=e.sent,e.next=8,n.json();case 8:if(c=e.sent,r=c.status,o=c.data,!r){e.next=14;break}return console.log(o),e.abrupt("return",o);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y="[ui] Open modal",w="[ui] Close modal",k="[ui] Modal page",I="[Register] Registro Pasaporte",C="[Register] Registro Nuevo Pasaporte",D="[Register] Registro Usuario",F="[Register] Registro Entrada Salida",P="[Register] Registro Liompiar",S="[Register] Pre-registro",E="[Register] Reducir el numero de personas",T="[Register] Limpiar para el pre-registro",R="[Vista] Loading",L="[Vista] Stop Loading",_="[inform] Informe Listo ",A="[inform] Informe no Preparado",M="[inform] Informe Listo 2 ",z="[inform] Informe no Preparado 2",H="[inform] Informe Listo 3",V="[inform] Informe no Preparado 3",B="[inform] Informe guardado",Y="[inform] Informe Listo Deploy",J="[inform] Informe no Listo Deploy",X="[inform] Informe Listo Deploy 2",U="[inform] Informe no Listo Deploy 2",G="[inform] Informe Listo Deploy 3",K="[inform] Informe no Listo Deploy 3",Z="[inform] Informe Rango guardado",q="[Auth] Login",Q="[Auth] Logout",W=function(){return{type:R}},$=function(){return{type:L}},ee=function(){return{type:_}},te=function(){return{type:A}},ae=function(){return{type:M}},ne=function(){return{type:z}},ce=function(){return{type:Y}},re=function(){return{type:X}},oe=function(e){return{type:B,payload:{data:e}}},se=function(e){return{type:Z,payload:{data:e}}},le=a(32),ie=a.n(le),de=(a(92),a(59));Object(le.registerLocale)("es",de.a);var be=function(e){var t=e.date,a=e.setDate,n=Object(p.c)((function(e){return e.view})).loading;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(ie.a,{locale:"es",selected:t,onChange:function(e){return a(e)},disabled:n})})},ue=a(44),je=a.n(ue),me=je.a.ExcelFile,he=je.a.ExcelFile.ExcelSheet,Oe=je.a.ExcelFile.ExcelColumn,pe=function(e){var t=e.date,a=Object(p.c)((function(e){return e.inform})).data;return Object(s.jsx)(me,{filename:"Informe-"+t,hideElement:!0,children:Object(s.jsxs)(he,{data:a,name:"Parte Diario",children:[Object(s.jsx)(Oe,{label:"CHECK IN",value:"check_in"}),Object(s.jsx)(Oe,{label:"CHECK OUT",value:"check_out"}),Object(s.jsx)(Oe,{label:"N\xb0 PIEZA",value:"id_habitacion"}),Object(s.jsx)(Oe,{label:"NOMBRE Y APELLIDO",value:"fullName"}),Object(s.jsx)(Oe,{label:"SEXO",value:function(e){return 1===e.sexo?"Masculino":"Femenino"}}),Object(s.jsx)(Oe,{label:"NACIONALIDAD",value:"nacionalidad"}),Object(s.jsx)(Oe,{label:"EDAD",value:"edad"}),Object(s.jsx)(Oe,{label:"Celular",value:"celular"}),Object(s.jsx)(Oe,{label:"DESTINO",value:"destino"}),Object(s.jsx)(Oe,{label:"TEMP",value:"temperatura"}),Object(s.jsx)(Oe,{label:"OXI",value:"oxigenacion"}),Object(s.jsx)(Oe,{label:"Doc. N\xfamero",value:"pasaporte_CI"}),Object(s.jsx)(Oe,{label:"No Factura",value:"factura"})]})})},xe=je.a.ExcelFile,fe=je.a.ExcelFile.ExcelSheet,ve=je.a.ExcelFile.ExcelColumn,ge=function(){var e=Object(p.c)((function(e){return e.inform})).dataRange;return Object(s.jsx)(xe,{filename:"Informe",hideElement:!0,children:Object(s.jsxs)(fe,{data:e,name:"Parte Diario",children:[Object(s.jsx)(ve,{label:"Doc. N\xfamero",value:"pasaporte_CI"}),Object(s.jsx)(ve,{label:"NACIONALIDAD",value:"nacionalidad"}),Object(s.jsx)(ve,{label:"FECHA DE INGRESO",value:"check_in"}),Object(s.jsx)(ve,{label:"FECHA DE SALIDA",value:"check_out"}),Object(s.jsx)(ve,{label:"No Factura",value:"factura"}),Object(s.jsx)(ve,{label:"N\xb0 PIEZA",value:"id_habitacion"}),Object(s.jsx)(ve,{label:"NOMBRE Y APELLIDO",value:"fullName"}),Object(s.jsx)(ve,{label:"NIT",value:"nit"}),Object(s.jsx)(ve,{label:"SEXO",value:"sexo"}),Object(s.jsx)(ve,{label:"EDAD",value:"edad"}),Object(s.jsx)(ve,{label:"Celular",value:"celular"}),Object(s.jsx)(ve,{label:"DESTINO",value:"destino"}),Object(s.jsx)(ve,{label:"TEMP",value:"temperatura"}),Object(s.jsx)(ve,{label:"OXI",value:"oxigenacion"})]})})};Object(le.registerLocale)("es",de.a);var Ne=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.inform})),a=Object(p.c)((function(e){return e.view})).loading,c=Object(n.useState)(new Date),r=Object(O.a)(c,2),o=r[0],l=r[1],i=Object(n.useState)({date1:new Date,date2:new Date}),d=Object(O.a)(i,2),b=d[0],u=d[1],j=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate(),m=b.date1.getFullYear()+"-"+(b.date1.getMonth()+1)+"-"+b.date1.getDate(),x=b.date2.getFullYear()+"-"+(b.date2.getMonth()+1)+"-"+b.date2.getDate();return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Pagina de Informes"}),Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsxs)("div",{className:"row align-items-start justify-content-evenly",children:[Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("h6",{children:"Seleccione el dia del cual desea el informe"}),Object(s.jsx)(be,{date:o,setDate:l}),t.readyToDownload?Object(s.jsx)(pe,{date:j}):Object(s.jsx)(s.Fragment,{}),Object(s.jsx)("button",{className:"btn btn-primary btn-lg mt-3",onClick:function(){e(function(e){return function(t){t(W()),g(e).then((function(e){e&&(t(oe(e)),t(ce()),t(ee()),t($()),t(te()))})).catch()}}(j))},disabled:a,children:"Descargar Informe Diario"})]}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("h6",{children:"Seleccione el intervalo de fechas para el informe"}),Object(s.jsx)("label",{children:"Desde"}),Object(s.jsx)(ie.a,{locale:"es",selected:b.date1,onChange:function(e){return u(Object(h.a)(Object(h.a)({},b),{},{date1:e}))},disabled:a}),Object(s.jsx)("label",{children:"Hasta:"}),Object(s.jsx)(ie.a,{locale:"es",selected:b.date2,onChange:function(e){return u(Object(h.a)(Object(h.a)({},b),{},{date2:e}))},disabled:a}),Object(s.jsx)("button",{className:"btn btn-primary btn-lg mt-3",onClick:function(){e(function(e){return function(t){t(W()),N(e).then((function(e){e&&(t(se(e)),t(re()),t(ae()),t($()),t(ne()))})).catch()}}({beginDate:m,endDate:x}))},disabled:a,children:"Descargar Informe"}),t.readyToDownload2?Object(s.jsx)(ge,{}):Object(s.jsx)(s.Fragment,{})]}),Object(s.jsx)("div",{className:"col"})]})})]})},ye=a(138),we=a.n(ye),ke=function(){return{type:w}},Ie=function(e){return{type:k,payload:{page:e}}},Ce=a(139),De=a.n(Ce),Fe=(a(456),a(243)),Pe=a.n(Fe),Se=a(244),Ee=a.n(Se),Te=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,c,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://hotelesaitechbeta.azurewebsites.net/api/user/".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,r=c.status,o=c.usuario,!r){e.next=12;break}return console.log(o[0]),e.abrupt("return",o[0]);case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,c,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id_cliente:t.id,temperatura:t.temperature,oxigenacion:t.oxygenation,id_habitacion:t.room,factura:t.invoice,check_in:t.checkIn,check_out:t.checkOut,destino:t.destination,nit:t.nit},console.log(a),"https://hotelesaitechbeta.azurewebsites.net/api/flujos/",e.next=5,fetch("https://hotelesaitechbeta.azurewebsites.net/api/flujos/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return n=e.sent,e.next=8,n.json();case 8:if(c=e.sent,r=c.status,o=c.flujo,!r){e.next=14;break}return console.log(o),e.abrupt("return",o);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,c,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={nombres:t.name,apellidos:t.lastName,nacionalidad:t.citizen,email:t.correo,sexo:t.genero,edad:t.edad,celular:t.cellphone,pasaporte_CI:t.passaporte},"https://hotelesaitechbeta.azurewebsites.net/api/user/",e.next=4,fetch("https://hotelesaitechbeta.azurewebsites.net/api/user/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,n.json();case 7:if(c=e.sent,r=c.status,o=c.usuario,!r){e.next=13;break}return console.log(o),e.abrupt("return",o);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=Ee()(Pe.a),Ae=function(e){return{type:C,payload:{passport:e}}},Me=function(e){return{type:I,payload:e}},ze=function(e){return{type:D,payload:e}},He=function(){return{type:E}},Ve=function(){return{type:T}},Be=function(){return{type:P}},Ye=a(71),Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(O.a)(t,2),c=a[0],r=a[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(h.a)(Object(h.a)({},c),{},Object(Ye.a)({},t.name,t.value)))},l=function(e){r(Object(h.a)(Object(h.a)({},c),{},Object(Ye.a)({},e.name,e.label)))};return[c,s,l,o]};Object(le.registerLocale)("es",de.a);var Xe=function(){var e=Object(p.b)(),t=Je({numberPeople:"",habitacion:"",destino:"",nit:"",noFactura:""}),a=Object(O.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(new Date),l=Object(O.a)(o,2),i=l[0],d=l[1],b=Object(n.useState)(new Date),u=Object(O.a)(b,2),j=u[0],m=u[1],x=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),f=j.getFullYear()+"-"+(j.getMonth()+1)+"-"+j.getDate(),v=Object(p.c)((function(e){return e.view})).loading;return Object(s.jsxs)("form",{children:[Object(s.jsx)("h3",{children:" Registro de Ingreso"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"numberPeopleId",className:"form-label-sm",children:"Numero de Personas"}),Object(s.jsx)("input",{type:"number",className:"form-control",id:"numberPeopleId",placeholder:"00",autoFocus:!0,name:"numberPeople",value:c.numberPeople,onChange:r}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Por favor ingrese un numero valido."})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"habitacionId",className:"form-label-sm",children:"Habitacion"}),Object(s.jsx)("input",{type:"number",className:"form-control",id:"habitacionId",placeholder:"Habitacion",name:"habitacion",value:c.habitacion,onChange:r}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Por favor ingrese un numero valido."})]})})]}),Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"destinoId",className:"form-label-sm",children:"Destino"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"destinoId",placeholder:"Destino Final",name:"destino",value:c.destino,onChange:r}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Por favor ingrese un destino valido."})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"nitId",className:"form-label-sm",children:"NIT"}),Object(s.jsx)("input",{type:"number",className:"form-control",id:"nitId",placeholder:"00000000000",name:"nit",value:c.nit,onChange:r}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Por favor ingrese un NIT valido."})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"noFacturaId",className:"form-label-sm",children:"No de Factura"}),Object(s.jsx)("input",{type:"number",className:"form-control",id:"noFacturaId",placeholder:"000000",name:"noFactura",value:c.noFactura,onChange:r}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Por favor ingrese un numero de Factura."})]})})]}),Object(s.jsxs)("div",{className:"row mb-2",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"check-in",className:"form-label-sm",children:"Check-In"}),Object(s.jsx)(ie.a,{id:"check-in",name:"check-in",locale:"es",selected:i,onChange:function(e){return d(e)},disabled:v,className:"pt-1"})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"check-out",className:"form-label-sm",children:"Check-Out"}),Object(s.jsx)(ie.a,{id:"check-out",name:"check-out",locale:"es",selected:j,onChange:function(e){return m(e)},disabled:v,className:"pt-1"})]})})]}),Object(s.jsx)("div",{className:"d-flex justify-content-end",children:Object(s.jsx)("button",{className:"btn btn-primary btn-lg ",onClick:function(t){var a;t.preventDefault(),e((a=Object(h.a)(Object(h.a)({},c),{},{checkInVal:x,checkOutVal:f}),{type:S,payload:a})),e(Ie(1))},disabled:v,children:"Siguiente"})})]})},Ue=a(245),Ge=a.n(Ue),Ke=function(){var e=Object(n.useState)(!0),t=Object(O.a)(e,2),a=(t[0],t[1],Je({passportId:""})),c=Object(O.a)(a,2),r=c[0],o=c[1],l=Object(p.c)((function(e){return e.registerForm})),i=l.numberPeople,d=l.maxNumber,b=Object(p.c)((function(e){return e.view})).loading,u=Object(p.b)();return Object(s.jsxs)("form",{children:[Object(s.jsxs)("h3",{children:[" Paso 1: Registro de la persona ",d-i+1," / ",d]}),Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"pasaport",className:"form-label-sm",children:"CI o Pasaporte"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"passport",placeholder:"00000000-00",autoFocus:!0,name:"passportId",value:r.passportId,onChange:o}),Object(s.jsx)("div",{className:"invalid-feedback",children:"Por favor ingrese un pasaporte o CI valido."})]}),Object(s.jsx)("div",{className:"d-flex justify-content-end",children:Object(s.jsx)("button",{className:"btn btn-primary btn-lg ",onClick:function(e){e.preventDefault(),Ge.a.isLength(r.passportId,{min:3,max:void 0})?u(function(e){return function(t){t(W()),Te(e).then((function(a){a?(t(Me(a)),t($()),t(Ie(2))):(t(Ae(e)),t($()),t(Ie(2)))}))}}(r.passportId)):console.log("mal")},disabled:b,children:"Siguiente"})})]})},Ze=a(248),qe=a(246),Qe=a.n(qe),We=function(){var e=Object(p.c)((function(e){return e.registerForm})),t=e.numberPeople,a=e.maxNumber,c=Je({name:"",lastName:"",correo:"",edad:"",gender:"",citizen:"",cellphone:""}),r=Object(O.a)(c,3),o=r[0],l=r[1],i=r[2],d=Object(p.b)(),b=Object(p.c)((function(e){return e.registerForm})),u=b.newReg,j=b.nombre,m=b.apellidos,x=b.correo,f=b.edad,v=b.genero,g=(b.nacionalidad,b.celular),N=b.passaporte,y=Object(p.c)((function(e){return e.view})).loading,w=Object(n.useState)(""),k=Object(O.a)(w,2),I=k[0],C=k[1],D=Object(n.useMemo)((function(){return Qe()().getData()}),[]);return Object(s.jsxs)("form",{children:[Object(s.jsxs)("h3",{children:[" Paso 2: Registro de la persona ",a-t+1," / ",a," "]}),Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"nombres",className:"form-label-sm",children:"Nombres"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"nombres",placeholder:"",name:"name",value:u?o.name:j,onChange:l,disabled:!u})]}),Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"apellidos",className:"form-label-sm",children:"Apellidos"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"apellidos",placeholder:"",name:"lastName",value:u?o.lastName:m,onChange:l,disabled:!u})]}),Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"correo",className:"form-label-sm",children:"Correo Electronico"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"correo",placeholder:"",name:"correo",value:u?o.correo:x,onChange:l,disabled:!u})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"edad",className:"form-label-sm",children:"Edad"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"edad",placeholder:"",name:"edad",value:u?o.edad:f,onChange:l,disabled:!u})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"celular",className:"form-label-sm",children:"Celular"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"celular",placeholder:"",name:"cellphone",value:u?o.cellphone:g,onChange:l,disabled:!u})]})})]}),Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("label",{htmlFor:"nacionalidad",className:"form-label-sm",children:"Nacionalidad"}),Object(s.jsx)(Ze.a,{options:D,value:u?I:{label:"Bolivia"},onChange:function(e){C(e),i(Object(h.a)(Object(h.a)({},e),{},{name:"citizen"}))},isDisabled:!u,placeholder:"Seleccione la nacionalidad...."})]}),Object(s.jsx)("div",{children:Object(s.jsx)("label",{className:"form-label-sm",children:"Genero"})}),Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",type:"radio",name:"genero",id:"genero1",value:1,onChange:l,disabled:!u,checked:u?"1"===o.genero:1===v}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"genero1",children:"Masculino"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",type:"radio",name:"genero",id:"genero2",value:2,onChange:l,disabled:!u,checked:u?"2"===o.genero:2===v}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"genero2",children:"Femenino"})]})]}),Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("button",{className:"btn btn-primary btn-lg ",onClick:function(e){e.preventDefault(),d(Ie(1)),d(Be())},disabled:y,children:"Atras"}),Object(s.jsx)("button",{className:"btn btn-primary btn-lg ",onClick:function(e){e.preventDefault(),d(u?function(e){return function(t){t(W()),Le(e).then((function(e){t(ze(e)),t($()),t(Ie(3))}))}}(Object(h.a)(Object(h.a)({},o),{},{passaporte:N})):Ie(3))},disabled:y,children:"Siguiente"})]})]})},$e=function(){var e=Object(p.c)((function(e){return e.registerForm})),t=e.numberPeople,a=e.maxNumber,n=Object(p.c)((function(e){return e.registerForm})),c=n.id,r=n.nombre,o=n.room,l=n.invoice,i=n.checkIn,d=n.checkOut,b=n.destination,u=n.nit,j=Je({temperature:"",oxygenation:""}),m=Object(O.a)(j,2),x=m[0],f=m[1],v=Object(p.b)(),g=Object(p.c)((function(e){return e.view})).loading;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("h3",{children:[" Paso 3: Registro de la persona ",a-t+1," / ",a]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("label",{htmlFor:"temperatura",className:"form-label-sm",children:"Temperatura"}),Object(s.jsxs)("div",{className:"input-group mb-2",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"temperatura",placeholder:"",name:"temperature",value:x.temperature,onChange:f}),Object(s.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"\xb0C"})]})]}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("label",{htmlFor:"oxigenacion",className:"form-label-sm",children:"Oxigenacion"}),Object(s.jsxs)("div",{className:"input-group mb-2",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"oxigenacion",placeholder:"",name:"oxygenation",value:x.oxygenation,onChange:f}),Object(s.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"%"})]})]})]}),Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("button",{className:"btn btn-primary btn-lg ",onClick:function(e){e.preventDefault(),v(Ie(2))},disabled:g,children:"Atras"}),Object(s.jsx)("button",{className:"btn btn-primary btn-lg ",onClick:function(e){var a;e.preventDefault(),v((a=Object(h.a)(Object(h.a)({},x),{},{id:c,nombre:r,room:o,invoice:l,checkIn:i,checkOut:d,destination:b,nit:u,numberPeople:t}),function(e){e(W()),Re(a).then((function(){_e.fire({title:Object(s.jsx)("strong",{children:"Registro Exitoso"}),icon:"success",confirmButtonText:"Continuar"}),1===a.numberPeople||"1"===a.numberPeople?(e($()),e(Ie(0)),e(Be()),e(ke())):(e($()),e(Ie(1)),e(Ve()),e(He()))})).catch()}))},disabled:g,children:"Registrar"})]})]})})};De.a.setAppElement("#root");var et=function(){var e=Object(p.c)((function(e){return e.ui})).modalOpen,t=Object(p.b)(),a=Object(p.c)((function(e){return e.ui})).modalPage;return Object(s.jsxs)(De.a,{isOpen:e,onRequestClose:function(){t(ke())},className:"mymodal",overlayClassName:"myoverlay",children:[Object(s.jsx)("h2",{children:"Formulario de entradas y salidas"}),Object(s.jsx)("hr",{}),0===a&&Object(s.jsx)(Xe,{}),1===a&&Object(s.jsx)(Ke,{}),2===a&&Object(s.jsx)(We,{}),3===a&&Object(s.jsx)($e,{})]})},tt=(a(564),function(){var e=Object(p.b)(),t=Object(n.useState)([]),a=Object(O.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we.a.post("https://hotelesaitechbeta.azurewebsites.net/api/flujos/inform10",{});case 2:t=e.sent,r(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Pagina de Registros"}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("button",{className:"btn btn-primary btn-lg",onClick:function(){e({type:y})},children:"Registrar Nuevo ingreso"})}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col tabla-1",children:[Object(s.jsx)("h2",{id:"title-Table1",children:"Ultimos 10 ingresos"}),Object(s.jsxs)("table",{id:"flujo-top-ten",className:"tabla-1",children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:["Id","Nombre Completo","Habitacion","Fecha-Hora","Temperatura","Oxigenacion","Borrar"].map((function(e,t){return Object(s.jsxs)("th",{children:[" ",e," "]},t)}))})}),Object(s.jsx)("tbody",{children:c&&c.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.id}),Object(s.jsx)("td",{children:e.fullName}),Object(s.jsx)("td",{children:e.id_habitacion}),Object(s.jsx)("td",{children:e.Fecha_hora}),Object(s.jsx)("td",{children:e.temperatura}),Object(s.jsx)("td",{children:e.oxigenacion}),Object(s.jsx)("td",{className:"opration",children:Object(s.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.id,void we.a.post("https://hotelesaitechbeta.azurewebsites.net/api/flujos/delete",{id:t}).then((function(e){var a=c.filter((function(e){return t!==e.id}));r(a)}));var t},children:"Borrar"})})]},e.id)}))})]})]})})}),Object(s.jsx)(et,{})]})}),at=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{}),Object(s.jsxs)("div",{className:"middle",children:[Object(s.jsx)(b,{}),Object(s.jsx)("div",{className:"main-body",children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(s.jsx)(o.a,{exact:!0,path:"/huesped",component:m}),Object(s.jsx)(o.a,{exact:!0,path:"/register",component:tt}),Object(s.jsx)(o.a,{exact:!0,path:"/informs",component:Ne}),Object(s.jsx)(o.a,{exact:!0,path:"/dashboard",component:u})]})})]})]})},nt=function(){return Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/login",component:l}),Object(s.jsx)(o.a,{path:"/",component:at})]})},ct=a(60),rt=a(247),ot={readyToDownload:!1,readyToShow:!1,readyToDownload2:!1,readyToShow2:!1,readyToDownload3:!1,readyToShow3:!1,data:[],dataRange:[]},st={maxNumber:1,numberPeople:1,passaporte:"",newReg:!0,id:null,nombre:"",apellidos:"",correo:"",edad:"",genero:"",nacionalidad:"",celular:"",temperature:"",oxygenation:"",room:"",invoice:"",destination:"",checkIn:"",checkOut:"",inOutVal:"",nit:""},lt={modalOpen:!1,modalPage:0},it={loading:!1,errorMsg:""},dt=Object(ct.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(h.a)(Object(h.a)({},e),{},{modalOpen:!0});case w:return Object(h.a)(Object(h.a)({},e),{},{modalOpen:!1});case k:return Object(h.a)(Object(h.a)({},e),{},{modalPage:t.payload.page});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{uid:t.payload.uid,name:t.payload.displayName};case Q:return{};default:return e}},registerForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(h.a)(Object(h.a)({},e),{},{numberPeople:t.payload.numberPeople,maxNumber:t.payload.numberPeople,room:t.payload.habitacion,nit:t.payload.nit,invoice:t.payload.noFactura,destination:t.payload.destino,checkIn:t.payload.checkInVal,checkOut:t.payload.checkOutVal});case C:return Object(h.a)(Object(h.a)({},e),{},{passaporte:t.payload.passport});case I:return Object(h.a)(Object(h.a)({},e),{},{newReg:!1,passaporte:t.payload.pasaporte_CI,nombre:t.payload.nombres,apellidos:t.payload.apellidos,correo:t.payload.email,edad:t.payload.edad,genero:t.payload.sexo,nacionalidad:t.payload.nacionalidad,celular:t.payload.celular,nit:t.payload.nit,id:t.payload.id});case D:return Object(h.a)(Object(h.a)({},e),{},{newReg:!1,id:t.payload.id,nombre:t.payload.nombres,apellidos:t.payload.apellidos,correo:t.payload.nacionalidad,edad:t.payload.email,genero:t.payload.sexo,nacionalidad:t.payload.nacionalidad,celular:t.payload.celular});case F:return Object(h.a)(Object(h.a)({},e),{},{temperature:t.payload.temperature,oxygenation:t.payload.oxygenation,room:t.payload.room,invoice:t.payload.invoice,destination:t.payload.destination,inOutVal:t.payload.inOutVal});case P:return st;case T:return Object(h.a)(Object(h.a)({},e),{},{passaporte:"",newReg:!0,id:null,nombre:"",apellidos:"",correo:"",edad:"",genero:"",nacionalidad:"",celular:"",temperature:"",oxygenation:"",inOutVal:""});case E:return Object(h.a)(Object(h.a)({},e),{},{numberPeople:e.numberPeople-1});default:return e}},view:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case L:return Object(h.a)(Object(h.a)({},e),{},{loading:!1});default:return e}},inform:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(h.a)(Object(h.a)({},e),{},{readyToDownload:!0});case A:return Object(h.a)(Object(h.a)({},e),{},{readyToDownload:!1});case M:return Object(h.a)(Object(h.a)({},e),{},{readyToDownload2:!0});case z:return Object(h.a)(Object(h.a)({},e),{},{readyToDownload2:!1});case H:return Object(h.a)(Object(h.a)({},e),{},{readyToDownload3:!0});case V:return Object(h.a)(Object(h.a)({},e),{},{readyToDownload3:!1});case Y:return Object(h.a)(Object(h.a)({},e),{},{readyToShow:!0});case J:return Object(h.a)(Object(h.a)({},e),{},{readyToShow:!1});case X:return Object(h.a)(Object(h.a)({},e),{},{readyToShow2:!0});case U:return Object(h.a)(Object(h.a)({},e),{},{readyToShow2:!1});case G:return Object(h.a)(Object(h.a)({},e),{},{readyToShow3:!0});case K:return Object(h.a)(Object(h.a)({},e),{},{readyToShow3:!1});case B:return Object(h.a)(Object(h.a)({},e),{},{data:t.payload.data});case Z:return Object(h.a)(Object(h.a)({},e),{},{dataRange:t.payload.data});default:return e}}}),bt="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ct.c,ut=Object(ct.d)(dt,bt(Object(ct.a)(rt.a))),jt=function(){return Object(s.jsx)(p.a,{store:ut,children:Object(s.jsx)(nt,{})})};a(565);r.a.render(Object(s.jsx)(d.a,{children:Object(s.jsx)(jt,{})}),document.getElementById("root"))}},[[567,1,2]]]);
//# sourceMappingURL=main.d12b6d79.chunk.js.map