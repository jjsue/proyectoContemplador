(this["webpackJsonpproyecto-contemplador-front"]=this["webpackJsonpproyecto-contemplador-front"]||[]).push([[0],{64:function(e,a,t){e.exports=t(99)},66:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);t(65),t(66);var r=t(0),n=t.n(r),l=t(21),c=t.n(l),o=t(16),s=t(17),m=t(20),i=t(18),d=(t(71),t(24)),p=t(6),u=t(104),E=t(107),h=t(106),v=(t(72),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={bg1:{backgroundImage:"url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')"},bg2:{backgroundImage:"url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')"},bg3:{backgroundImage:"url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')"}},r}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"masthead"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row h-100 align-items-center"},n.a.createElement("div",{className:"col-12 text-center"},n.a.createElement("h1",{className:"font-weight-light"},this.props.titleData[0]),n.a.createElement("p",{className:"lead"},this.props.titleData[1]))))))}}]),t}(r.Component)),b=t(14),N=t.n(b),f=t(27),g=t(105),C=t(54),w=t(74).default,S="http://10.10.10.99:3000";function x(e,a,t,r){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(N.a.mark((function e(a,t,r,n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w({method:"POST",url:"".concat(S,"/api/dyd35/charactergenerator"),data:{level:"".concat(a),class:"".concat(t),race:"".concat(r),dices:"".concat(n)},withCredentials:!1}).then((function(e){return e})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=t(52),q=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={habilidadesTable:null,ataqueBase:null,conjuros:n.a.createElement("td",{colSpan:"10",className:"text-center"},"No tiene")},r}return Object(s.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],a=[],t=[],r=0;r<this.props.data.habilidades.length;r++)e[r]=n.a.createElement("tr",{key:r,className:this.props.data.habilidades[r][6]?"table-primary":null},n.a.createElement("th",{scope:"row"},this.props.data.habilidades[r][0]," ",this.props.data.habilidades[r][7]?n.a.createElement(k.a,{size:16}):null),n.a.createElement("td",null,parseInt(this.props.data.habilidades[r][3])+parseInt(this.props.data.habilidades[r][4])+parseInt(this.props.data.habilidades[r][5])),n.a.createElement("td",null,this.props.data.habilidades[r][3]),n.a.createElement("td",null,this.props.data.habilidades[r][4]),n.a.createElement("td",null,this.props.data.habilidades[r][5]));for(var l=0;l<this.props.data.ataqueBase.length;l++)a[l]=n.a.createElement("td",{key:l,className:"text-center"},this.props.data.ataqueBase[l]);if(null!==this.props.data.conjuros)for(var c=0;c<this.props.data.conjuros.length;c++)t[c]=n.a.createElement("td",{key:c,className:"text-center"},this.props.data.conjuros[c]);this.setState({habilidadesTable:e,ataqueBase:a,conjuros:t})}},{key:"componentDidUpdate",value:function(e){e.data!==this.props.data&&this.componentDidMount()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"pnjPage",className:"container"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("div",{className:"col-md"},n.a.createElement("h5",{className:"text-center"},"Raza: ",this.props.data.raza)),n.a.createElement("div",{className:"col-md"},n.a.createElement("h5",{className:"text-center"},"Clase: ",this.props.data.clase)),n.a.createElement("div",{className:"col-md"},n.a.createElement("h5",{className:"text-center"},"PG: ",this.props.data.pg)),n.a.createElement("div",{className:"col-md"},n.a.createElement("h5",{className:"text-center"},"Nivel: ",this.props.data.nivel)),n.a.createElement("div",{className:"col-md"},n.a.createElement("h5",{className:"text-center"},"Alin.: ",this.props.data.alineamiento)),n.a.createElement("div",{className:"col-md"},n.a.createElement("h5",{className:"text-center"},"Velocidad: ",this.props.data.velocidad))),n.a.createElement("hr",{className:"mb-4"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3",className:"text-center"},"Caracter\xedsticas")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Caract."),n.a.createElement("th",{scope:"col"},"Punt."),n.a.createElement("th",{scope:"col"},"Mod."))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Fue"),n.a.createElement("td",null,this.props.data.caracteristicas.Fue[0]),n.a.createElement("td",null,this.props.data.caracteristicas.Fue[1])),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Des"),n.a.createElement("td",null,this.props.data.caracteristicas.Des[0]),n.a.createElement("td",null,this.props.data.caracteristicas.Des[1])),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Con"),n.a.createElement("td",null,this.props.data.caracteristicas.Con[0]),n.a.createElement("td",null,this.props.data.caracteristicas.Con[1])),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Int"),n.a.createElement("td",null,this.props.data.caracteristicas.Int[0]),n.a.createElement("td",null,this.props.data.caracteristicas.Int[1])),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Sab"),n.a.createElement("td",null,this.props.data.caracteristicas.Sab[0]),n.a.createElement("td",null,this.props.data.caracteristicas.Sab[1])),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Car"),n.a.createElement("td",null,this.props.data.caracteristicas.Car[0]),n.a.createElement("td",null,this.props.data.caracteristicas.Car[1]))))),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"6",className:"text-center"},"Salvaciones"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Fortaleza"),n.a.createElement("td",null,parseInt(this.props.data.salvaciones.fortaleza)+parseInt(this.props.data.caracteristicas.Con[1]))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Reflejos"),n.a.createElement("td",null,parseInt(this.props.data.salvaciones.reflejos)+parseInt(this.props.data.caracteristicas.Des[1]))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Voluntad"),n.a.createElement("td",null,parseInt(this.props.data.salvaciones.voluntad)+parseInt(this.props.data.caracteristicas.Sab[1])))))),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"6",className:"text-center"},"CA"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"CA"),n.a.createElement("td",null,this.props.data.ca[0]),n.a.createElement("th",{scope:"row"},"Toque"),n.a.createElement("td",null,this.props.data.ca[1]),n.a.createElement("th",{scope:"row"},"Desprevenido"),n.a.createElement("td",null,this.props.data.ca[2]))))),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"6",className:"text-center"},"Ataque base"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,this.state.ataqueBase)))),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"5",className:"text-center"},"Ataques"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,this.props.data.ataques[0][0]),n.a.createElement("td",null,this.props.data.ataques[0][1]),n.a.createElement("td",null,this.props.data.ataques[0][2])),n.a.createElement("tr",null,n.a.createElement("th",null,this.props.data.ataques[1][0]),n.a.createElement("td",null,this.props.data.ataques[1][1]),n.a.createElement("td",null,this.props.data.ataques[1][2])),n.a.createElement("tr",null,n.a.createElement("th",null,this.props.data.ataques[2][0]),n.a.createElement("td",null,this.props.data.ataques[2][1]),n.a.createElement("td",null,this.props.data.ataques[2][2]))))),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"6",className:"text-center"},"Equipo"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row",rowSpan:"3",className:"text-center"},"Armas"),n.a.createElement("td",null,this.props.data.equipo.armas[0][0]),n.a.createElement("td",null,"med"===this.props.data.tam?this.props.data.equipo.armas[0][3]:this.props.data.equipo.armas[0][2]),n.a.createElement("td",null,this.props.data.equipo.armas[0][4]),n.a.createElement("td",null,this.props.data.equipo.armas[0][5]+"'")),n.a.createElement("tr",null,n.a.createElement("td",null,this.props.data.equipo.armas[1][0]),n.a.createElement("td",null,"med"===this.props.data.tam?this.props.data.equipo.armas[1][3]:this.props.data.equipo.armas[1][2]),n.a.createElement("td",null,this.props.data.equipo.armas[1][4]),n.a.createElement("td",null,this.props.data.equipo.armas[1][5]+"'")),n.a.createElement("tr",null,n.a.createElement("td",null,this.props.data.equipo.armas[2][0]),n.a.createElement("td",null,"med"===this.props.data.tam?this.props.data.equipo.armas[2][3]:this.props.data.equipo.armas[2][2]),n.a.createElement("td",null,this.props.data.equipo.armas[2][4]),n.a.createElement("td",null,this.props.data.equipo.armas[2][5]+"'")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Armadura"),n.a.createElement("td",{colSpan:"4"},null===this.props.data.equipo.armadura?"Sin armadura":this.props.data.equipo.armadura[0]+" + "+this.props.data.equipo.armadura[2]+" CA")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Escudo"),n.a.createElement("td",{colSpan:"4"},null===this.props.data.equipo.escudo?"Sin escudo":this.props.data.equipo.escudo[0]+" + "+this.props.data.equipo.escudo[2]+" CA"))))),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10",className:"text-center"},"Conjuros")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row",className:"text-center"},"0"),n.a.createElement("th",{scope:"row",className:"text-center"},"1"),n.a.createElement("th",{scope:"row",className:"text-center"},"2"),n.a.createElement("th",{scope:"row",className:"text-center"},"3"),n.a.createElement("th",{scope:"row",className:"text-center"},"4"),n.a.createElement("th",{scope:"row",className:"text-center"},"5"),n.a.createElement("th",{scope:"row",className:"text-center"},"6"),n.a.createElement("th",{scope:"row",className:"text-center"},"7"),n.a.createElement("th",{scope:"row",className:"text-center"},"8"),n.a.createElement("th",{scope:"row",className:"text-center"},"9"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,this.state.conjuros))))),n.a.createElement("div",{className:"col-md"},n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered table-hover table-sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Nombre"),n.a.createElement("th",{scope:"col"},"Mod. Hab."),n.a.createElement("th",{scope:"col"},"Caract."),n.a.createElement("th",{scope:"col"},"Rangos."),n.a.createElement("th",{scope:"col"},"Varios."))),n.a.createElement("tbody",null,this.state.habilidadesTable))))),n.a.createElement("hr",{className:"mb-4"}),n.a.createElement("div",{className:"row mb-2"},this.props.bottom),this.props.bottomFoot))}}]),t}(r.Component),j=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).levelController=function(e){r.setState({formNivel:e.target.value})},r.raceController=function(e){r.setState({formRaza:e.target.value})},r.classController=function(e){r.setState({formClase:e.target.value})},r.diceController=function(e){r.setState({formDados:e.target.value})},r.onClickChildrenReturn=function(e){e.preventDefault(),r.setState({renderingNow:r.state.form,title:"Generador de NPC"})},r.onClickGenerateAndDownload=function(e){e.preventDefault();var a=document.getElementById("pnjPage");console.log(a)},r.onClickGenerateOther=function(){var e=Object(f.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,x(r.state.formNivel,r.state.formClase,r.state.formRaza,r.state.formDados);case 4:t=e.sent,r.setState({responseState:t}),r.evaluator(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),r.submitController=function(){var e=Object(f.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r.setState({disabled:!0}),e.prev=2,e.next=5,x(r.state.formNivel,r.state.formClase,r.state.formRaza,r.state.formDados);case 5:t=e.sent,r.setState({responseState:t}),r.evaluator(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),r.submitSave=function(){var e=Object(f.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();try{r.setState({disabled:!0}),r.state.responseState.data.createdCharacter.name=r.state.characterName,201===r.state.saveResponse.status?r.setState({bottomChildren:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-md"},n.a.createElement(g.a,{onSubmit:r.submitSave},n.a.createElement("div",{className:"row"},n.a.createElement(g.a.Group,{className:"col-sm"},n.a.createElement(g.a.Control,{size:"lg",type:"text",placeholder:"Nombre del personaje",disabled:!0,onChange:r.onChangeSave}))),n.a.createElement("div",{className:"row"},n.a.createElement(C.a,{type:"submit",size:"lg",className:"col-sm disabled"},"Guardado")))),n.a.createElement("div",{className:"col-md"},n.a.createElement(C.a,{variant:"warning",size:"lg",block:!0,onClick:r.onClickChildrenReturn},"Crear otro")," "))}):422===r.state.saveResponse.status?alert("Ya tienes un personaje igual o la request no es v\xe1lida, intenta de nuevo mas tarde"):alert("Ha ocurrido un error, intentelo mas tarde")}catch(t){console.log(t)}case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),r.onChangeSave=function(e){r.setState({characterName:e.target.value})},r.evaluator=function(e){200===e.status&&(r.setState({renderingNow:n.a.createElement(q,{data:e.data.createdCharacter,bottom:r.state.bottomChildren}),title:"Tu personaje"}),422===e.status&&alert("Ya tienes un personaje igual o la request no es v\xe1lida, intenta de nuevo mas tarde"))},r.state={disabled:!1,formNivel:"1",formRaza:"humano",formClase:"barbaro",formDados:"2d6",renderingNow:"",title:"Generador de PNJ 3.5",saveResponse:null,characterName:"",form:n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{onSubmit:r.submitController},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(g.a.Group,{controlId:"nivel",className:"col-sm"},n.a.createElement(g.a.Label,null,"Nivel:"),n.a.createElement(g.a.Control,{as:"select",onChange:r.levelController},n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5"),n.a.createElement("option",{value:"6"},"6"),n.a.createElement("option",{value:"7"},"7"),n.a.createElement("option",{value:"8"},"8"),n.a.createElement("option",{value:"9"},"9"),n.a.createElement("option",{value:"10"},"10"),n.a.createElement("option",{value:"11"},"11"),n.a.createElement("option",{value:"12"},"12"),n.a.createElement("option",{value:"13"},"13"),n.a.createElement("option",{value:"14"},"14"),n.a.createElement("option",{value:"15"},"15"),n.a.createElement("option",{value:"16"},"16"),n.a.createElement("option",{value:"17"},"17"),n.a.createElement("option",{value:"18"},"18"),n.a.createElement("option",{value:"19"},"19"),n.a.createElement("option",{value:"20"},"20"))),n.a.createElement(g.a.Group,{controlId:"raza",className:"col-sm"},n.a.createElement(g.a.Label,null,"Raza:"),n.a.createElement(g.a.Control,{as:"select",onChange:r.raceController},n.a.createElement("option",{value:"humano"},"Humano"),n.a.createElement("option",{value:"elfo"},"Elfo"),n.a.createElement("option",{value:"enano"},"Enano"),n.a.createElement("option",{value:"gnomo"},"Gnomo"),n.a.createElement("option",{value:"mediano"},"Mediano"),n.a.createElement("option",{value:"semielfo"},"Semielfo"),n.a.createElement("option",{value:"semiorco"},"Semiorco"))),n.a.createElement(g.a.Group,{controlId:"clase",className:"col-sm"},n.a.createElement(g.a.Label,null,"Clase"),n.a.createElement(g.a.Control,{as:"select",onChange:r.classController},n.a.createElement("option",{value:"barbaro"},"B\xe1rbaro"),n.a.createElement("option",{value:"bardo"},"Bardo"),n.a.createElement("option",{value:"clerigo"},"Cl\xe9rigo"),n.a.createElement("option",{value:"druida"},"Druida"),n.a.createElement("option",{value:"explorador"},"Explorador"),n.a.createElement("option",{value:"guerrero"},"Guerrero"),n.a.createElement("option",{value:"hechicero"},"Hechicero"),n.a.createElement("option",{value:"mago"},"Mago"),n.a.createElement("option",{value:"monje"},"Monje"),n.a.createElement("option",{value:"paladin"},"Paladin"),n.a.createElement("option",{value:"picaro"},"P\xedcaro"))),n.a.createElement(g.a.Group,{controlId:"dados",className:"col-sm"},n.a.createElement(g.a.Label,null,"Dados:"),n.a.createElement(g.a.Control,{as:"select",onChange:r.diceController},n.a.createElement("option",{value:"2d6"},"2d6"),n.a.createElement("option",{value:"3d6"},"3d6"),n.a.createElement("option",{value:"4d6"},"4d6")))),n.a.createElement("div",{className:"row"},n.a.createElement(C.a,{type:"submit",className:"col-sm"},"Generar"))))),responseState:null,bottomChildren:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-md"},n.a.createElement(C.a,{type:"submit",size:"lg",block:!0,onClick:r.onClickGenerateAndDownload},"Descargar")),n.a.createElement("div",{className:"col-md"},n.a.createElement(C.a,{variant:"warning",size:"lg",block:!0,onClick:r.onClickChildrenReturn},"Crear otro")," "),n.a.createElement("div",{className:"col-md"},n.a.createElement(C.a,{variant:"warning",size:"lg",block:!0,onClick:r.onClickGenerateOther},"Generar otro igual")," "))},r}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({renderingNow:this.state.form})}},{key:"componentDidUpdate",value:function(e,a){a.bottomChildren!==this.state.bottomChildren&&this.setState({renderingNow:n.a.createElement(q,{data:this.state.responseState.data.createdCharacter,bottom:this.state.bottomChildren})})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card border-0 shadow my-5"},n.a.createElement("div",{className:"card-body p-5 bodyGen"},n.a.createElement("h1",{className:"font-weight-light"},this.state.title),n.a.createElement("hr",null),this.state.renderingNow))))}}]),t}(r.Component),D=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={},r}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement(u.a,{variant:"dark",bg:"dark",expand:"lg"},n.a.createElement(u.a.Brand,{href:"/app"},"Proyecto Contemplador"),n.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(E.a,{className:"mr-auto"},n.a.createElement(d.b,{to:"/app",className:"nav-link"},"Inicio"),n.a.createElement(h.a,{title:"Dragones y Mazmorras 3.5",id:"basic-nav-dropdown"},n.a.createElement(d.b,{to:"/app/npc35",className:"animate slideIn dropdown-item"},"PNJ")),n.a.createElement(h.a,{title:"Dragones y Mazmorras 5.0",id:"basic-nav-dropdown"},n.a.createElement(d.b,{to:"/app/underConstruction",className:"animate slideIn dropdown-item"},"PNJ")),n.a.createElement(h.a,{title:"Leyenda de los 5 anillos",id:"basic-nav-dropdown"},n.a.createElement(d.b,{to:"/app/underConstruction",className:"animate slideIn dropdown-item"},"PNJ")),n.a.createElement(h.a,{title:"Aquelarre",id:"basic-nav-dropdown"},n.a.createElement(d.b,{to:"/app/underConstruction",className:"animate slideIn dropdown-item"},"PNJ"))))),n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/app/npc35",component:j}),n.a.createElement(p.a,{exact:!0,path:"/app/underConstruction",render:function(e){return n.a.createElement(v,Object.assign({},e,{titleData:["En construcci\xf3n","Sentimos las molestias"]}))}}),n.a.createElement(p.a,{exact:!0,path:"/app",render:function(e){return n.a.createElement(v,Object.assign({},e,{titleData:["Proyecto Contemplador","Una aplicaci\xf3n web para los mas roleros"]}))}}))))}}]),t}(r.Component);var I=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.ba0894a7.chunk.js.map