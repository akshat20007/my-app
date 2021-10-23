(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(4),o=a.n(l),r=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)("a",{className:"nav-link",href:"#",children:[e.aboutText," "]})})]}),Object(s.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",align:"right",onClick:e.toggleMode}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault ",children:"Dark Mode"})]}),Object(s.jsxs)("div",{className:"form-check form-switch",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",align:"right",onClick:e.toggleNewMode}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"New Mode"})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],l=a[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),d=i[0],b=i[1],m=Object(c.useState)(""),h=Object(r.a)(m,2),j=h[0],u=h[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{style:{color:"dark"===e.mode?"white":"black"},children:e.heading}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log("On change "),l(e.target.value)},id:"exampleFormControlTextarea1",rows:"8",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"}})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"dark":"primary"," mx-2"),onClick:function(){console.log("Uppercase was clicked"+n);var t=n.toUpperCase();l(t),e.showAlert("All capitalized","success")},children:"Convert to uppercase"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"dark":"primary"," mx-2"),onClick:function(){console.log("Uppercase was clicked"+n);var e=n.toLowerCase();l(e)},children:"Convert to lowercase"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"dark":"primary"," mx-2"),onClick:function(){console.log("delete was clicked "),l("")},children:"Delete Text"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"dark":"primary"," mx-2"),onClick:function(){var e=n.trim();l(e)},children:"Delete White Spaces"}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"dark":"primary"," mx-2"),onClick:function(){console.log("replace was clicked");var e=document.getElementById("exampleFormControlTextarea1");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"})]}),Object(s.jsxs)("div",{className:"container ",align:"right","margin-right":"30",children:[Object(s.jsx)("input",{type:"search",className:"col-auto my-3",value:d,onChange:function(e){console.log("R1 "),b(e.target.value)},id:"exampleFormControlinput1",rows:"1",style:{backgroundColor:"dark"===e.mode?"grey":"white"}}),Object(s.jsx)("input",{type:"search",className:"col-auto mx-3 my-3",value:j,onChange:function(e){console.log("R2 "),u(e.target.value)},id:"exampleFormControlinput2",rows:"1",style:{backgroundColor:"dark"===e.mode?"grey":"white"}}),Object(s.jsx)("button",{className:"btn btn-".concat("dark"===e.mode?"dark":"primary"," mx-3"),onClick:function(){console.log("replace was clicked");var e=n.replace(d,j);l(e)},children:"Replace Word"})]})]}),Object(s.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(s.jsx)("h2",{children:"Your Text Summary"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:n.split(" ").length-1})," words and",Object(s.jsxs)("b",{children:[" ",n.length]})," ","characters"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:n.split(" ").length-1<1?"0.000":.008*n.split(" ").length})," Minutes"]}),Object(s.jsx)("h2",{children:"Preview Text"}),Object(s.jsx)("p",{children:n.length>0?n:"Enter something above to preview here"})]})]})}i.defaultProps={title:"Set Title"},d.defaultProps={heading:"Enter something"};var b=function(e){return e.alert&&Object(s.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(s.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})};var m=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(null),o=Object(r.a)(l,2),m=o[0],h=o[1],j=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),2e3)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextUtils",aboutText:"About Text",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="grey",j("Dark mode was enabled","success"),document.title="Text Utils-Dark Mode"):(n("light"),document.body.style.backgroundColor="white",j("light mode was enabled","success"),document.title="Text Utils-Light Mode")},toggleNewMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#02240a",j("Green mode was enabled","success"),console.log("new toggle")):(n("light"),document.body.style.backgroundColor="white",j("light mode was enabled","success"))}}),Object(s.jsx)(b,{alert:m}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(d,{heading:"Enter your text",mode:a,showAlert:j})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),l(e),o(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.9abe2e24.chunk.js.map