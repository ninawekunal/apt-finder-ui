(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},73:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),s=n.n(r),i=(n(68),n(18)),l=n(19),o=n(22),j=n(21),d=(n(69),n(59)),b=n(55),m=n.n(b),h=n(56),u=n.n(h),O=n(57),p=n.n(O),x=n(50),f=n.n(x),v=n(60),g=(n(73),n(1));function N(e){var t=e.apartment,n=Object(a.useState)(!1),c=Object(d.a)(n,2),r=c[0],s=c[1];return Object(g.jsxs)("article",{className:"apartment",children:[Object(g.jsxs)("div",{className:"img-container",children:[Object(g.jsx)("img",{src:"Images/"+t[t.length-1]+".jpg",alt:"Apartment"}),Object(g.jsxs)("div",{className:"price-top",children:[Object(g.jsxs)("h6",{children:["$",t[1]]}),Object(g.jsx)("p",{children:"per month"})]}),Object(g.jsx)("p",{className:"apartment-link"})]}),Object(g.jsx)("p",{className:"apartment-info",children:Object(g.jsxs)("span",{children:[Object(g.jsx)(f.a,{className:"homeIcon"}),t[6]," - ",t[3]]})}),Object(g.jsxs)("div",{className:"apartment-more-info",children:[Object(g.jsxs)("div",{className:"more-info",children:[Object(g.jsx)(m.a,{className:"bedIcon"})," ",0===t[0]?"Studio":1===t[0]?t[0]+" Bed":t[0]+" Beds"," ",Object(g.jsx)(u.a,{className:"bathIcon"})," ",t[2]," ",1!==t[2]?"Baths":"Bath",Object(g.jsx)("br",{}),Object(g.jsx)(p.a,{className:"locationIcon"}),t[4]+" - "+t[5]]}),Object(g.jsx)("span",{className:"heart-icon",children:Object(g.jsx)(v.a,{isClick:r,onClick:function(){return s(!r)}})})]})]})}n(78);function y(e){var t=e.apartments;return 0===t.length?Object(g.jsx)("div",{className:"empty-search",children:Object(g.jsx)("h3",{children:"Unfortunately no apartments match your search parameters!"})}):Object(g.jsx)("section",{className:"apartmentList",children:Object(g.jsx)("div",{className:"apartmentList-center",children:t.map((function(e){return Object(g.jsx)(N,{apartment:e},e[0]+e[1])}))})})}var A=n(17),C=n(33),k=n(41),B=c.a.createContext(),S=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={apartments:[],sortedApartments:[],loading:!0,fields:[],count:0,offset:0,total:0,limit:1,minPrice:0,maxPrice:0,minBeds:0,maxBeds:0,minBaths:0,maxBaths:0,baths:"All",beds:"All",price:0},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(k.a)({},n,a),e.filterApartments)},e.filterApartments=function(){var t,n=e.state,a=n.apartments,c=n.price,r=n.beds,s=n.baths,i=n.count,l=Object(A.a)(a);"All"!==r&&(r=parseInt(r),l=l.filter((function(e){return e[0]===r}))),"All"!==s&&(s=parseInt(s),l=l.filter((function(e){return e[2]===s}))),c=parseInt(c),l=l.filter((function(e){return e[1]<=c}));var o=0;l.forEach((function(e){o++})),t=o,e.setState({sortedApartments:l,count:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("data.json").then((function(e){return e.json()})).then((function(t){var n=Math.max.apply(Math,Object(A.a)(t.data.map((function(e){return e[1]})))),a=Math.max.apply(Math,Object(A.a)(t.data.map((function(e){return e[0]})))),c=Math.max.apply(Math,Object(A.a)(t.data.map((function(e){return e[2]}))));e.setState({loading:!1,fields:t.fields,count:t.count,apartments:t.data,sortedApartments:t.data,limit:t.limit,offset:t.offset,total:t.total,maxPrice:n,maxBeds:a,maxBaths:c,price:n})}))}},{key:"render",value:function(){return Object(g.jsx)(B.Provider,{value:Object(C.a)(Object(C.a)({},this.state),{},{getApartment:this.getApartment,handleChange:this.handleChange}),children:this.props.children})}}]),n}(a.Component),w=B.Consumer;var I=n(99),P=(n(79),function(e,t){return Object(A.a)(new Set(e.map((function(e){return e[t]}))))}),F=function(e){var t=e.apartments,n=Object(a.useContext)(B),c=n.handleChange,r=n.minPrice,s=n.maxPrice,i=n.price,l=n.count,o=P(t,0);o.sort(),o=(o=["All"].concat(Object(A.a)(o))).map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}));var j=P(t,2);return j.sort(),j=(j=["All"].concat(Object(A.a)(j))).map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)})),Object(g.jsxs)("section",{className:"filter-container",children:[Object(g.jsx)("center",{children:Object(g.jsxs)("h4",{children:["Search from ",l," Apartments"]})}),Object(g.jsxs)("form",{className:"filter-form",children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"beds",children:"Beds"}),Object(g.jsx)("select",{name:"beds",id:"beds",className:"form-control",onChange:c,children:o})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"baths",children:"Baths"}),Object(g.jsx)("select",{name:"baths",id:"baths",className:"form-control",onChange:c,children:j})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsxs)("label",{htmlFor:"price",children:["Room Price $0-$",i]}),Object(g.jsx)("input",{type:"range",name:"price",min:r,max:s,id:"price",value:i,onChange:c,className:"form-control"})]}),Object(g.jsx)("a",{href:"/",className:"a-reset",children:Object(g.jsx)(I.a,{variant:"outlined",className:"form-control btn-reset",children:"Reset Filters"})})]})]})},M=n.p+"static/media/loading-arrow.dd29210f.gif";function L(){return Object(g.jsxs)("div",{className:"loading",children:[Object(g.jsx)("h4",{children:"Apartment data loading..."}),Object(g.jsx)("img",{src:M,alt:""})]})}var T,D=(T=function(e){var t=e.context,n=t.loading,a=t.sortedApartments,c=t.apartments;return n?Object(g.jsx)(L,{}):Object(g.jsxs)("div",{children:[Object(g.jsx)(F,{apartments:c}),Object(g.jsx)(y,{apartments:a})]})},function(e){return Object(g.jsx)(w,{children:function(t){return Object(g.jsx)(T,Object(C.a)(Object(C.a)({},e),{},{context:t}))}})}),E=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)(D,{})}}]),n}(a.Component),U=n(14);function $(){return Object(g.jsxs)("div",{className:"error",children:[Object(g.jsx)("center",{children:Object(g.jsx)("h2",{children:"404 Error Page not found."})}),Object(g.jsx)("center",{children:Object(g.jsx)(U.b,{to:"/",className:"errorButton",children:Object(g.jsx)(I.a,{variant:"outlined",children:"Home"})})})]})}n(82);var H=n(58),J=n.p+"static/media/favicon.4fe75d5f.ico",R=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"header",children:Object(g.jsxs)("div",{className:"nav",children:[Object(g.jsxs)(U.b,{to:"/",className:"nav-link",children:[Object(g.jsx)("img",{className:"header_icon",src:J,alt:"Logo"}),"\xa0",Object(g.jsx)("span",{className:"logoName",children:"Apt Finder"})]}),Object(g.jsx)("button",{type:"button",className:"nav-bar",onClick:this.handleToggle,children:Object(g.jsx)(H.a,{})}),Object(g.jsxs)("ul",{className:this.state.isOpen?"nav-menu-mobile":"nav-menu",children:[Object(g.jsx)(U.b,{className:"nav-link",to:"/",activestyle:"true",children:"Home"}),Object(g.jsx)(U.b,{className:"nav-link",to:"/",activestyle:"true",children:"Apartments"}),Object(g.jsx)(U.b,{className:"nav-link",to:"/",activestyle:"true",children:"About Us"}),Object(g.jsx)(U.b,{className:"nav-link",to:"/",activestyle:"true",children:"Sign Up"})]}),Object(g.jsx)("div",{className:"nav-btn",children:Object(g.jsx)("button",{className:"nav-btn-link",children:"Sign In"})})]})})}}]),n}(a.Component);n(83);var _=function(){return Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsxs)("p",{children:["2021 - Nokia Frontend coding Challenge - demo developed by: ",Object(g.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/ninawekunal",children:"Kunal Ninawe"})]}),Object(g.jsx)("p",{children:"Privacy - Terms - Sitemap - Company Details"})]})},K=n(4),q=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(R,{}),Object(g.jsxs)(K.c,{children:[Object(g.jsx)(K.a,{exact:!0,path:"/apt-finder-ui",component:E}),Object(g.jsx)(K.a,{component:$})]}),Object(g.jsx)(_,{})]})}}]),n}(a.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(S,{children:Object(g.jsx)(U.a,{children:Object(g.jsx)(q,{})})})}),document.getElementById("root")),z()}},[[84,1,2]]]);
//# sourceMappingURL=main.5286b9fe.chunk.js.map