(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/menu.6952c106.wav"},function(e,t,a){e.exports=a.p+"static/media/back.483fb361.wav"},,function(e,t,a){e.exports=a.p+"static/media/match.9a5e6ba6.wav"},,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/menu.de126af1.svg"},,,function(e,t,a){var n={"./apple.svg":22,"./banana.svg":23,"./cherries.svg":24,"./grapes.svg":25,"./lemon.svg":26,"./pear.svg":27,"./pineapple.svg":28,"./raspberry.svg":29,"./tomato.svg":30,"./watermelon.svg":31};function c(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=21},function(e,t,a){e.exports=a.p+"static/media/apple.96037b82.svg"},function(e,t,a){e.exports=a.p+"static/media/banana.892b8f16.svg"},function(e,t,a){e.exports=a.p+"static/media/cherries.6f7f637f.svg"},function(e,t,a){e.exports=a.p+"static/media/grapes.11be6a40.svg"},function(e,t,a){e.exports=a.p+"static/media/lemon.812f3c7a.svg"},function(e,t,a){e.exports=a.p+"static/media/pear.0c89232e.svg"},function(e,t,a){e.exports=a.p+"static/media/pineapple.c9276cc2.svg"},function(e,t,a){e.exports=a.p+"static/media/raspberry.509d71bb.svg"},function(e,t,a){e.exports=a.p+"static/media/tomato.ba199f9c.svg"},function(e,t,a){e.exports=a.p+"static/media/watermelon.4bb012a3.svg"},function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a(3),s=a(10),i=a(1),m=function(e){var t=e.text,a=e.onClick,n=e.onMouseEnter;return c.a.createElement("button",{type:"button",className:"game-menu__btn",onClick:a,onMouseEnter:n},t)},l=a(6),u=a.n(l),p=a(7),d=a.n(p),f=(a(16),function(e){var t=e.isPlaying,r=e.playGame,o=e.quitGame,s=Object(n.useState)(!1),l=Object(i.a)(s,2),p=l[0],f=l[1],b=Object(n.useRef)(),g=function(){b.current.play()},v=function(){f(!p)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"game-menu__toggler",onClick:v},c.a.createElement("img",{className:"game-menu__icon",alt:"menu icon",src:a(18)})),c.a.createElement("div",{className:"game-menu\n        ".concat(p?"game-menu--open":"","\n      "),onClick:function(e){e.target.classList.contains("game-menu__btn")&&f(!p)}},c.a.createElement("audio",{ref:b,id:"menu-sound",src:u.a}),c.a.createElement("audio",{id:"back-sound",src:d.a}),c.a.createElement("div",{className:"game-menu__container"},t&&c.a.createElement(m,{text:"Resume",onClick:v,onMouseEnter:g}),c.a.createElement(m,{text:t?"Restart Game":"Play",onClick:r,onMouseEnter:g}),c.a.createElement(m,{text:"Close Menu",onClick:v,onMouseEnter:g}),c.a.createElement(m,{text:"Quit",onClick:o,onMouseEnter:g}))))}),b=a(2),g=a.n(b),v=(g.a.shape({id:g.a.string.isRequired,name:g.a.string.isRequired,completed:g.a.bool.isRequired}),function(e){var t=e.fruit,n=e.choosable,r=e.completed,o=e.chooseFruit,s=e.index,i="tile slide-in-elliptic-right-fwd delay-".concat(s);return r&&(i+=" completed"),n||(i+=" choosen"),c.a.createElement("div",{id:t.id,className:i,"data-fruit":t.name,onClick:n&&!r?function(){return o(t)}:null},c.a.createElement("figure",{className:"fruit__figure"},c.a.createElement("img",{className:"fruit__img",alt:t.name,src:a(21)("./".concat(t.name,".svg"))})))}),E=(a(32),function(e){var t=e.grid,a=e.fruits,n=e.chooseFruit,r=e.score,o=e.scoreMultiplier,s=e.guesses,i=e.totalCombos,m=e.currentCombo;return c.a.createElement("div",{className:"game__container"},c.a.createElement("header",{className:"game__header"},c.a.createElement("div",{className:"scoreboard"},c.a.createElement("span",{className:"scoreboard__item"},"Score: ".concat(r)),c.a.createElement("span",{className:"scoreboard__item"},"Score Multiplier: x".concat(o)),c.a.createElement("span",{className:"scoreboard__item"},"Guesses: ".concat(s)),c.a.createElement("span",{className:"scoreboard__item"},"Combo: ".concat(m)),c.a.createElement("span",{className:"scoreboard__item"},"Total Combos: ".concat(i)))),c.a.createElement("main",{className:"grid-container"},t.map(function(e,t){return c.a.createElement(v,{choosable:!a.some(function(t){return t.id===e.id})&&!e.completed,completed:e.completed,key:e.id,fruit:e,chooseFruit:n,index:t})})))}),_=(a(34),function(e){var t=e.stats,a=e.playAgain;return c.a.createElement("div",{className:"game-recap"},c.a.createElement("h3",{className:"game-recap__title"},"You Won!"),c.a.createElement("span",{className:"game-recap__field"},"Score: ".concat(t.score)),c.a.createElement("span",{className:"game-recap__field"},"Guesses: ".concat(t.guesses)),c.a.createElement("span",{className:"game-recap__field"},"Total Combos: ".concat(t.totalCombos)),c.a.createElement("button",{type:"button",onClick:a,className:"game-recap__btn"},"Play Again"))}),O=a(8),j=a.n(O),h=["apple","apple","banana","banana","cherries","cherries","grapes","grapes","lemon","lemon","pear","pear","pineapple","pineapple","raspberry","raspberry","tomato","tomato","watermelon","watermelon"],N=null,x=function(){var e=parseInt(Math.random()*N.length,10);return N.splice(e,1)[0]},y=function(){return N=h.concat(),Object(o.a)(Array(20)).map(function(){return{name:x(),id:j()(),completed:!1}})},w=a(9),C=a.n(w),k=(a(38),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],m=Object(n.useState)([]),l=Object(i.a)(m,2),u=l[0],p=l[1],d=Object(n.useState)([]),b=Object(i.a)(d,2),g=b[0],v=b[1],O=Object(n.useState)(0),j=Object(i.a)(O,2),h=j[0],N=j[1],x=Object(n.useState)(1),w=Object(i.a)(x,2),k=w[0],S=w[1],M=Object(n.useState)(!1),G=Object(i.a)(M,2),R=G[0],F=G[1],q=Object(n.useState)(0),A=Object(i.a)(q,2),P=A[0],T=A[1],W=Object(n.useState)(!1),B=Object(i.a)(W,2),D=B[0],I=B[1],J=Object(n.useState)(0),L=Object(i.a)(J,2),U=L[0],Q=L[1],Y=Object(n.useState)(0),$=Object(i.a)(Y,2),z=$[0],H=$[1],K=Object(n.useRef)(),V=function(){r(!1),p(y()),v([]),N(0),S(1),F(!1),T(0),I(!1),Q(0),H(0),r(!0)},X=function(){u.every(function(e){return e.completed})&&(r(!1),F(!0))};return Object(n.useEffect)(function(){if(2===g.length){if(T(P+1),(e=g)[0].name!==e[1].name)return I(!1),Q(0),k>1&&S(k-.25),void setTimeout(function(){return v([])},500);var e,t;D?(Q(U+1),H(z+1)):I(!0),K.current.play(),t=g[0].name,p(u.map(function(e){return e.name===t?Object(s.a)({},e,{completed:!0}):e})),N(h+1e3*k),S(k+1),v([])}},[g]),Object(n.useEffect)(function(){a&&X()},[u]),c.a.createElement("div",{className:"game-wrapper"},c.a.createElement(f,{isPlaying:a,playGame:V,quitGame:function(){r(!1)}}),a&&c.a.createElement(E,{grid:u,score:h,fruits:g,chooseFruit:function(e){2!==g.length&&v(Object(o.a)(g).concat([e]))},scoreMultiplier:k,guesses:P,currentCombo:U,totalCombos:z}),R&&c.a.createElement(_,{stats:{score:h,guesses:P,totalCombos:z},playAgain:V}),c.a.createElement("audio",{ref:K,src:C.a}))}),S=(a(40),function(){return c.a.createElement("div",{className:"container"},c.a.createElement(k,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.43595493.chunk.js.map