(this["webpackJsonpcurrency-conventer-react"]=this["webpackJsonpcurrency-conventer-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),s=n.n(a),u=(n(9),n(2)),o=(n(10),n(0)),i=function(){return Object(o.jsx)("button",{className:"button",children:"Oblicz kurs"})},l=[{short:"USD",name:"Dolar Ameryka\u0144ski",rate:3.78},{short:"EUR",name:"Euro",rate:4.55},{short:"GBP",name:"Funt Brytyjski",rate:5.27}],j=function(e){var t=e.currency,n=e.setCurrency;return Object(o.jsx)("ul",{className:"form__listSelect",children:Object(o.jsx)("label",{className:"form__label",children:Object(o.jsx)("select",{className:"form__input",value:t,onChange:function(e){var t=e.target;return n(t.value)},children:l.map((function(e){return Object(o.jsx)("option",{value:e.short,children:e.name},e.short)}))})})})},b=(n(12),function(e){var t=e.calculateResult,n=Object(r.useState)(""),c=Object(u.a)(n,2),a=c[0],s=c[1],b=Object(r.useState)(l[0].short),m=Object(u.a)(b,2),h=m[0],f=m[1];return Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(a,h)},children:[Object(o.jsxs)("label",{className:"form__label",children:["Wpisz kwot\u0119*:",Object(o.jsx)("input",{className:"form__input",value:a,type:"number",min:"0.1",step:"any",required:!0,placeholder:"wpisz kwot\u0119 w PLN",onChange:function(e){var t=e.target;s(t.value)}})]}),Object(o.jsx)("h2",{className:"form__header",children:"Wybierz Walut\u0119:"}),Object(o.jsx)(j,{setCurrency:f,currency:h}),Object(o.jsx)(i,{})]})}),m=(n(13),function(e){return Object(o.jsx)("div",{className:"container",children:e.children})}),h=function(){return Object(o.jsx)("footer",{children:"2021\xa9 Wszelkie prawa zastrze\u017cone!!!"})},f=(n(14),function(e){var t=e.result;return Object(o.jsx)("p",{className:"result",children:void 0!==t&&Object(o.jsxs)(o.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0=\xa0",t.targetAmount.toFixed(2),"\xa0",t.currency]})})});var d=function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(m,{children:[Object(o.jsx)("h1",{className:"container__header",children:"Walutomat - Tw\xf3j kantor w sieci "}),Object(o.jsx)(b,{calculateResult:function(e,t){var n=l.find((function(e){return e.short===t})).rate;c({sourceAmount:+e,targetAmount:e/n,currency:t})}}),Object(o.jsx)(f,{result:n}),Object(o.jsx)(h,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),O()}],[[15,1,2]]]);
//# sourceMappingURL=main.9061cae6.chunk.js.map