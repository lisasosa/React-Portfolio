(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/newsapp.cdf9083a.png"},45:function(e,t,a){e.exports=a.p+"static/media/project2.9606955d.png"},46:function(e,t,a){e.exports=a.p+"static/media/weather.37beb84a.png"},47:function(e,t,a){e.exports=a.p+"static/media/team.6baded9c.png"},48:function(e,t,a){e.exports=a.p+"static/media/burger.0f9f6eed.png"},49:function(e,t,a){e.exports=a.p+"static/media/dayplanner.e6c1ccc5.png"},58:function(e,t,a){e.exports=a(72)},63:function(e,t,a){},65:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),i=a.n(r),s=(a(63),a(64),a(7)),c=a(10),o=a(9),m=a(8),u=a(27),d=a(5),p=a(23),h=a(28),b=a(56),E=(a(65),a(17)),g=a(15);var f=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(E.a,{className:"border-top justify-content-between p-3"},l.a.createElement(g.a,{className:"p-0",md:3,sm:12},"Elizabeth Sosa"),l.a.createElement(g.a,{className:"p-0 d-flex justify-content-end",md:3},"By Elizabeth Sosa"))))},y=a(43);var v=function(e){return l.a.createElement(y.a,{className:"bg-transparent jumbotron fluid p-0"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center py-5"},l.a.createElement(g.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.SubTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.SubTitle),e.text&&l.a.createElement("h3",{className:"Lead font-weight-light"},e.text)))))},k=a(22),w=a(40);var S=function(e){var t=Object(w.b)({opacity:1,from:{opacity:0}});return l.a.createElement(w.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Navigate to App"))};var N=function(e){return l.a.createElement("div",{className:"d-inline-block g-card  col-sm-3 d-inline-block g-card-deck",onClick:function(t){return e.onClick(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(S,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},j=a(44),C=a.n(j),x=a(45),T=a.n(x),O=a(46),A=a.n(O),B=a(47),D=a.n(B),z=a(48),W=a.n(z),I=a(49),G=a.n(I),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(N,{item:e,onClick:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Project 1 - News App",subTitle:"News inded to show different news sources in one place",imgSrc:C.a,link:"https://szaster.github.io/Your-Breaking-News/",selected:!1},{id:1,title:"Weather Dashboard",subTitle:"This app allow you to search by city name and displays current and future weather",imgSrc:A.a,link:"https://lisasosa.github.io/Weather-Dashboard/",selected:!1},{id:2,title:"Project 2 - personal care app",subTitle:"App intended for business owners to advertise their beauty business",imgSrc:T.a,link:"https://personal-care1.herokuapp.com/business",selected:!1},{id:3,title:"Team Generator App",subTitle:"App intended to help employers easily access their team members information",imgSrc:D.a,link:"https://lisasosa.github.io/Team-Generator-App/",selected:!1},{id:4,title:"Burger App",subTitle:"Burger App allows the user enter enter a burger name and then select it",imgSrc:W.a,link:"https://sheltered-spire-84268.herokuapp.com/",selected:!1},{id:5,title:"Work Day Scheduler",subTitle:"Designed for the busy employee in mind so he/she can plan the day ahead",imgSrc:G.a,link:"https://lisasosa.github.io/ElizabeS-Work-Day-Scheduler/",selected:!1}]},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var M=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title,subTitle:e.subtitle,text:e.text}),l.a.createElement(L,null))};var P=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center"},l.a.createElement(g.a,{md:8},e.children)))};var F=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title}),l.a.createElement(P,null,l.a.createElement("p",null,"BSET University of Houston Down Town"),l.a.createElement("p",null,"Current Student at UT-Austin Coding BootCamp"),l.a.createElement("p",null,"Business Systems Analyst at Wex Inc"),l.a.createElement("h4",null,"Quick learner"),l.a.createElement("p",null,"Enthusiastic and always looking out to learn new things. Not a very risk taker person by DNA but when it comes to education and learning, I\u2019m always willing to take risks and make investments."),l.a.createElement("h4",null,"Excellent Collaborator and results oriented"),l.a.createElement("p",null,"Always willing to support and help other people when they need me as well as collaborate with them to improve things."),l.a.createElement("p",null,"I have successfully collaborated with multiple teams including Operations, Engineering, Software Developers, Risk, and Product teams to either build a new project or improve an existing one.")))},H=a(21),J=a(13),U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(H.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0})},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,{title:this.props.title}),l.a.createElement(P,null,l.a.createElement("p",null,"phone number: 832-275-4532"),l.a.createElement(J.a,{onSubmit:this.handleSubmit},l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"full-name"},"Name"),l.a.createElement(J.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(J.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(J.a.Group,{action:"mailto:Sosa.elizabeth@ymail.com"},l.a.createElement(J.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(J.a.Control,{id:"message",name:"message",as:"textarea",rows:"5",value:this.state.message,onChange:this.handleChange})),l.a.createElement("button",{className:"d-inline-block btn btn-primary",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline sucess-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),Q=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={title:"Elizabeth Sosa",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contac",path:"/contact"}],home:{title:"My Projects",subtitle:"",text:"See my projects below"},about:{title:"About me",subtitle:"",text:"See my projects below"},contact:{title:"Contact Me"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"p-0",fluid:!0},l.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(h.a.Brand,null,"Elizabeth Sosa"),l.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(h.a.Collapse,{id:"navar-toggle"},l.a.createElement(b.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(M,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(F,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(U,{title:e.state.contact.title})}}),l.a.createElement(f,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.31bda86a.chunk.js.map