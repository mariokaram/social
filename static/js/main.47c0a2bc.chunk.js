(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{46:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(10),a=n.n(c),r=(n(46),n(39)),o=n(31),d=n.n(o),l=n(33),j=n(11),u=n(5),b=n(8),h=n(7),O=n(20),m=n(21),v=n(27),p=n(25),f=n(74),x=n(75),N=n(0),y=Object(i.createContext)(),w=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(O.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={spinner:!1},e.showSpinner=function(t){e.setState({spinner:t})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(y.Provider,{value:{showSpinner:this.showSpinner},children:[Object(N.jsx)(f.a,{style:{zIndex:"999999999999",color:"#fff"},open:this.state.spinner,children:Object(N.jsx)(x.a,{color:"inherit"})}),this.props.children]})}}]),n}(i.Component),g=Object(i.createContext)(),C=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(O.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={mode:""},e.submitMode=function(t){e.setState({mode:t})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(N.jsx)(g.Provider,{value:{mode:this.state.mode,submitMode:this.submitMode},children:this.props.children})}}]),n}(i.Component);n(56);var S=function(e){var t,n,s=Object(i.useContext)(y).showSpinner,c=Object(i.useContext)(g).mode,a=Object(i.useState)(),r=Object(j.a)(a,2),o=r[0],d=r[1],l=e.data,O=e.onSubmit,m=Object(i.useState)({firstName:"",lastName:"",email:"",city:"",street:"",phone:"",website:"",id:""}),v=Object(j.a)(m,2),p=v[0],f=v[1],x=Object(i.useState)(!1),w=Object(j.a)(x,2),C=w[0],S=w[1];return Object(N.jsxs)("div",{className:"container",children:[l&&"view"===c&&"edit"!==o&&l.map((function(e){var t,n;return Object(N.jsxs)("div",{onClick:function(){return f({firstName:(t=e).name.split(" ")[0],lastName:t.name.split(" ")[1],email:t.email,city:t.address.city,street:t.address.street,phone:t.phone,website:t.website,id:t.id}),void d("edit");var t},className:"cards",children:[Object(N.jsx)("div",{className:"profile",children:Object(N.jsx)("div",{className:"initilals",children:Object(N.jsxs)("div",{children:[null===(t=e.name.split(" ")[0])||void 0===t?void 0:t.substring(0,1),null===(n=e.name.split(" ")[1])||void 0===n?void 0:n.substring(0,1)]})})}),Object(N.jsxs)("div",{className:"userDetails",children:[Object(N.jsx)("div",{className:"title",children:e.name}),Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{icon:b.b})," ",e.email]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{icon:b.a})," ",e.address.city,","," ",e.address.street]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{icon:b.d})," ",e.phone]}),Object(N.jsxs)("div",{className:"website",children:[Object(N.jsx)(h.a,{icon:b.c})," ",e.website]})]})]},e.id)})),("add"===c||"edit"===o)&&Object(N.jsxs)("div",{className:"cards",style:{boxShadow:"none",width:"100%",height:"600px"},children:[Object(N.jsx)("div",{className:"profile",children:Object(N.jsx)("div",{className:"initilals",children:Object(N.jsxs)("div",{children:[null===(t=p.firstName)||void 0===t?void 0:t.substring(0,1),null===(n=p.lastName)||void 0===n?void 0:n.substring(0,1)]})})}),Object(N.jsxs)("div",{className:"userDetailsModif",children:[Object(N.jsxs)("div",{className:"title",children:[" ","First Name:"," ",Object(N.jsx)("input",{name:"firstName",value:p.firstName,style:{border:!p.firstName&&C&&"1px solid red"},onChange:function(e){var t=e.target;return f((function(e){return Object(u.a)(Object(u.a)({},e),{},{firstName:t.value})}))}})," "]}),Object(N.jsxs)("div",{className:"title",children:[" ","Last Name:"," ",Object(N.jsx)("input",{name:"lastName",value:p.lastName,style:{border:!p.lastName&&C&&"1px solid red"},onChange:function(e){var t=e.target;return f((function(e){return Object(u.a)(Object(u.a)({},e),{},{lastName:t.value})}))}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{icon:b.b})," email:"," ",Object(N.jsx)("input",{name:"email",value:p.email,type:"email",style:{border:!p.email&&C&&"1px solid red"},onChange:function(e){var t=e.target;return f((function(e){return Object(u.a)(Object(u.a)({},e),{},{email:t.value})}))}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{icon:b.a})," city:"," ",Object(N.jsx)("input",{name:"city",value:p.city,style:{border:!p.city&&C&&"1px solid red"},onChange:function(e){var t=e.target;return f((function(e){return Object(u.a)(Object(u.a)({},e),{},{city:t.value})}))}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{icon:b.a})," street:",Object(N.jsx)("input",{name:"street",value:p.street,onChange:function(e){var t=e.target;return f((function(e){return Object(u.a)(Object(u.a)({},e),{},{street:t.value})}))},style:{border:!p.street&&C&&"1px solid red"}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(h.a,{icon:b.d})," phone:"," ",Object(N.jsx)("input",{name:"phone",type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}",style:{border:!p.phone&&C&&"1px solid red"},value:p.phone,onChange:function(e){var t=e.target;return f((function(e){return Object(u.a)(Object(u.a)({},e),{},{phone:t.value})}))}})]}),Object(N.jsxs)("div",{className:"website",children:[Object(N.jsx)(h.a,{icon:b.c})," website"," ",Object(N.jsx)("input",{name:"website",value:p.website,style:{border:!p.website&&C&&"1px solid red"},onChange:function(e){var t=e.target;return f((function(e){return Object(u.a)(Object(u.a)({},e),{},{website:t.value})}))}})]}),Object(N.jsxs)("div",{className:"btnFooter",children:[Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:function(){return f({firstName:"",lastName:"",email:"",city:"",street:"",phone:"",website:"",id:p.id}),void S(!1)},className:"clear",children:"clear"})}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:function(){return function(){console.log(p);try{if(!p.firstName||!p.lastName||!p.city||!p.street||!p.phone||!p.email||!p.website)return S(!0);s(!0),fetch("https://jsonplaceholder.typicode.com/users/".concat(p.id),{method:"add"===c?"POST":"PUT",body:JSON.stringify({name:"".concat(p.firstName," ").concat(p.lastName),email:p.email,phone:p.phone,address:{street:p.street,city:p.city},website:p.website}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return O(e)})).then((function(){return s(!1)})).then((function(){return d("view")}))}catch(C){console.log(C,"err"),s(!1)}}()},className:"accept",children:"ok"})})]})]})]})]})};n(57);var k=function(){var e=Object(i.useContext)(y).showSpinner,t=Object(i.useContext)(g),n=t.submitMode,s=t.mode,c=Object(i.useState)([]),a=Object(j.a)(c,2),o=a[0],u=a[1];Object(i.useEffect)((function(){b()}),[]);var b=function(){var t=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n("view"),e(!0),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return u(e)})).then((function(){return e(!1)}))}catch(i){console.log(i.message,"err"),e(!1)}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(e){n(e)},O=function(){return function(e){"add"===s?u([].concat(Object(r.a)(o),[e])):o.map((function(t){t.id==e.id&&(t.name=e.name,t.phone=e.phone,t.email=e.email,t.website=e.website,t.address.city=e.address.city,t.address.street=e.address.street)})),n("view")}};return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsxs)("header",{children:[Object(N.jsx)("div",{className:"marginLeft"}),Object(N.jsx)("div",{className:"title",children:"Profile Cards Lists"}),Object(N.jsx)("div",{className:"addUser",children:"view"===s?Object(N.jsx)("button",{onClick:function(){return h("add")},children:" Add user "}):Object(N.jsx)("button",{onClick:function(){return h("view")},children:"Show List"})})]}),"view"===s&&Object(N.jsx)(S,{onSubmit:O(),data:o}),("add"===s||"edit"===s)&&Object(N.jsx)(S,{onSubmit:O(),data:o})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(w,{children:Object(N.jsx)(C,{children:Object(N.jsx)(k,{})})})}),document.getElementById("root")),F()}},[[58,1,2]]]);
//# sourceMappingURL=main.47c0a2bc.chunk.js.map