(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),l=(a(9),a(2)),i=(a(10),a(0));function o(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Home"})})}),Object(i.jsxs)("div",{className:"form-check form-switch text-light",children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{className:"mb-3",children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"},id:"mybox",rows:"10"})}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to UpperCase","Success")},children:"To UpperCase"}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to LowerCase","Success")},children:"To LowerCase"}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(c),e.showAlert("Text copied","Success")},children:"Copy Text"}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){s(""),e.showAlert("Text cleared","Success")},children:"Clear Text"}),Object(i.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed","Success")},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h2",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(i.jsxs)("p",{children:[.008*c.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:c.length>0?c:"Nothing to preview!"})]}),Object(i.jsx)("div",{className:"accordion-body",align:"center",children:"This utility has been created by Tarun Sehgal. I'm a 3rd year IT student."})]})}function b(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(i.jsx)("strong",{children:e.alert.type}),": ",e.alert.msg]})})}o.defaultProps={title:"Set title here",aboutText:"Set about here"};var h=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),h=r[0],j=r[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{title:"TextUtils",aboutText:"About",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",u("Dark mode has been enabled","Success")):(c("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","Success"))}}),Object(i.jsx)(b,{alert:h}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(d,{showAlert:u,heading:"Try TextUtils - Word counter,Character counter,Remove extra spaces",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0f24d912.chunk.js.map