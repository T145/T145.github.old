(this["webpackJsonpt145.github.io"]=this["webpackJsonpt145.github.io"]||[]).push([[0],{68:function(e,a,t){e.exports=t(82)},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),o=t.n(i),c=t(32),l=t(3),s=t(50),m=t(41),p=t(7),u=t(109),h=t(110),d=t(111),E=t(112),f=t(33),g=t(116),b=t(113),v=t(114),w=t(115),y=t(104),x=t(117),S=t(58),j=t.n(S),k=t(59),B=t.n(k),O=t(37),N=t(51),M=t(103),R=Object(M.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(N.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(O.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),T=t(55),C=t.n(T),I=t(56),P=t.n(I),H=t(85);var A=[{key:100,path:"/home",name:"Home",icon:r.a.createElement(C.a,null),component:function(){var e=R();return r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(H.a,{className:e.paper},r.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Home Page"),r.a.createElement("p",null,"This is a website for all README information related to T145\u2019s Github Repositories!")))}},{key:101,path:"/archive",name:"Archive",icon:r.a.createElement(P.a,null),component:function(){var e=R();return r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(H.a,{className:e.paper},r.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},"Archive Page"),r.a.createElement("p",null,"This is a website for all README information related to T145\u2019s Github Repositories!")))}}],D=t(118),G=t(106),z=t(107);function F(e){var a=e.icon,t=e.primary,n=e.to,i=r.a.useMemo((function(){return r.a.forwardRef((function(e,a){return r.a.createElement(m.b,Object.assign({to:n,ref:a},e))}))}),[n]);return r.a.createElement("li",null,r.a.createElement(D.a,{button:!0,component:i},a?r.a.createElement(G.a,null,a):null,r.a.createElement(z.a,{primary:t})))}var J=t(108),W=t(46),q=t.n(W),L=t(57);function X(e,a){return Math.floor(Math.random()*(a-e+1)+e)}function Y(){var e=r.a.useState(""),a=Object(c.a)(e,2),t=a[0],n=a[1],i=r.a.useState(""),o=Object(c.a)(i,2),l=o[0],s=o[1];function m(){return(m=Object(L.a)(q.a.mark((function e(){var a,t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=X(1,151),t="https://pokeapi.co/api/v2/pokemon/".concat(a),e.next=4,fetch(t);case 4:e.sent.json().then((function(e){n(e.sprites.front_default),s(e.name)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.useEffect((function(){!function(){m.apply(this,arguments)}()}),[]),t?r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:l})):r.a.createElement(r.a.Fragment,null)}function _(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(J.a,{color:"inherit",href:"https://github.com/T145"},"T145")," ",(new Date).getFullYear(),".",r.a.createElement(y.a,{container:!0,direction:"row",justify:"center",alignItems:"baseline"},r.a.createElement(Y,null)," ",r.a.createElement(Y,null)," ",r.a.createElement(Y,null)))}function K(){var e=R(),a=r.a.useState(!s.isMobileOnly),t=Object(c.a)(a,2),n=t[0],i=t[1];return r.a.createElement(m.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(u.a,null),r.a.createElement(h.a,{position:"absolute",className:Object(l.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(d.a,{className:e.toolbar},r.a.createElement(E.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(l.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(j.a,null)),r.a.createElement(p.b,null,(function(a){var t=a.location;return r.a.createElement(f.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},t.pathname)})))),r.a.createElement(g.a,{variant:"permanent",classes:{paper:Object(l.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(E.a,{onClick:function(){i(!1)}},r.a.createElement(B.a,null))),r.a.createElement(b.a,null),r.a.createElement(v.a,null,A.map((function(e){return r.a.createElement(F,{to:e.path,primary:e.name,icon:e.icon,key:e.key})})))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(w.a,{maxWidth:"lg",className:e.container},r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(p.d,null,A.map((function(e){return r.a.createElement(p.b,{path:e.path,key:e.key,component:e.component})})),r.a.createElement(p.a,{from:"/",to:"home"}))),r.a.createElement(x.a,{pt:4},r.a.createElement(_,null))))))}t(81);o.a.render(r.a.createElement(n.StrictMode,null,r.a.createElement(K,null)),document.querySelector("#root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.8213ed18.chunk.js.map