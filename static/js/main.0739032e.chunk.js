(this.webpackJsonpggd_webapp=this.webpackJsonpggd_webapp||[]).push([[0],{64:function(e,t,a){e.exports=a(86)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n,c,l=a(0),o=a.n(l),r=a(7),s=a.n(r),i=(a(69),a(70),a(31)),m=a(23),u=a(46),d=a(45),b=a(5),E=(a(71),a(16)),g=a(10),p=a(6),h=(a(120),a(124)),v=a(127),N=(a(121),a(128),a(51),a(56),a(50),a(72),function(e,t){return Math.floor(Math.random()*(t-e+1))+e});n=N(2,9),c=N(2,9);var f,O,y=function(){n=N(2,9),c=N(2,9)},S=[],_=[],k=[],j=[],C=[],w=[];var x=function(){var e=Object(l.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],s=Object(l.useState)(0),i=Object(b.a)(s,2),m=i[0],u=i[1],d=Object(l.useState)(0),E=Object(b.a)(d,2),g=E[0],p=E[1],h=Object(l.useState)(""),v=Object(b.a)(h,2),N=v[0],x=v[1],B=Object(l.useState)("none"),I=Object(b.a)(B,2),D=I[0],M=I[1],P=Object(l.useState)("none"),T=Object(b.a)(P,2),J=T[0],H=T[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"desc_box",style:{display:N}},o.a.createElement("button",{onClick:function(e){x("none"),M(""),H("none")}},"\uc2dc\uc791\ud558\uae30")),o.a.createElement("div",{className:"gugudan_box",style:{display:D}},o.a.createElement("p",{className:"text",style:{width:"100%"}},n),o.a.createElement("p",{className:"text",style:{width:"100%"}},o.a.createElement("span",{className:"text",style:{width:"100%"}},o.a.createElement("span",{className:"text",style:{marginLeft:"0"}},"x")," ",o.a.createElement("span",{className:"text"},c))),o.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},onKeyPress:function(e){if("Enter"===e.key&&(Number(a)===n*c?(p(g+1),u(m+1),y(),r(""),C.push("".concat(n," x ").concat(c," = ").concat(n*c))):(p(g+1),y(),r(""),w.push("".concat(n," x ").concat(c," = ").concat(e.target.value))),9===Number(g))){M("none"),H(""),S.push(m),localStorage.setItem("Totalscore",JSON.stringify(S));var t=new Date,l=t.getFullYear();_.push(l),localStorage.setItem("YearOfScore",JSON.stringify(_));var s=t.getMonth();k.push(s+1),localStorage.setItem("MonthOfScore",JSON.stringify(k));var i=t.getDate();j.push(i),localStorage.setItem("DateOfScore",JSON.stringify(j)),console.log(localStorage.getItem("Totalscore")),console.log(localStorage.getItem("YearOfScore")),console.log(localStorage.getItem("MonthOfScore")),console.log(localStorage.getItem("DateOfScore")),f=C.map((function(e){return o.a.createElement("li",{style:{listStyle:"none",color:"blue"},key:e},e)})),O=w.map((function(e){return o.a.createElement("li",{style:{listStyle:"none",color:"red"},key:e},e)})),C=[],w=[]}}}),o.a.createElement("div",null,"\ubb38\uc81c \uc218 : ",g,"/10")),o.a.createElement("div",{className:"result_box",style:{display:J}},o.a.createElement("p",null,"\uc810\uc218 : ",10*m,"/100"),o.a.createElement("div",null,f),o.a.createElement("div",null,O),o.a.createElement("button",{onClick:function(e){u(0),p(0),r(""),M(""),H("none")}},"\ub2e4\uc2dc\ud558\uae30")))};var B=function(){return o.a.createElement("div",null,o.a.createElement(x,{Min:"2",Max:"9"}))},I=a(15);a(73);var D=function(){var e=Object(l.useState)(function(){var e=localStorage.getItem("Totalscore"),t=JSON.parse(e),a=localStorage.getItem("YearOfScore"),n=JSON.parse(a),c=localStorage.getItem("MonthOfScore"),l=JSON.parse(c),o=localStorage.getItem("DateOfScore"),r=JSON.parse(o);console.log(t),console.log(n),console.log(l),console.log(r);for(var s=[],i=0;i<t.length;i++){var m=void 0;m=t[i]>=9?"\ud6cc\ub96d\ud574\uc694!":t[i]>=6?"\uc88b\uc544\uc694!":"\ubd84\ubc1c\ud574\uc694!";var u=n[i]+"."+l[i]+"."+r[i]+"\u3000\u3000\u3000\u3000"+10*t[i]+"\uc810\u3000\u3000\u3000\u3000"+m;s=[].concat(Object(I.a)(s),[u])}return console.log(s),s}()),t=Object(b.a)(e,2),a=t[0],n=(t[1],a.map((function(e){return o.a.createElement("li",{style:{listStyle:"none"},key:e},e)})));return o.a.createElement("div",null,o.a.createElement("div",{className:"Checkscore_graphBox"},"\uc774\ubbf8\uc9c0"),o.a.createElement("div",{className:"Score_table"},n))};a(74);var M,P,T=function(){var e=[],t=[],a=[],n=[],c=Object(l.useState)(),r=Object(b.a)(c,2),s=r[0],i=r[1],m=Object(l.useState)(),u=Object(b.a)(m,2),d=u[0],E=u[1],g=Object(l.useState)(),p=Object(b.a)(g,2),h=p[0],v=p[1],N=Object(l.useState)(),f=Object(b.a)(N,2),O=f[0],y=f[1],S=Object(l.useState)("flex"),_=Object(b.a)(S,2),k=_[0],j=_[1],C=Object(l.useState)("none"),w=Object(b.a)(C,2),x=w[0],B=w[1],D=function(c){!function(c){for(var l=1;l<=5;l++){var r=c+" x "+l+" = "+c*l;a=[].concat(Object(I.a)(a),[r]),r=c+" x "+l,e=[].concat(Object(I.a)(e),[r])}for(var s=6;s<10;s++){var m=c+" x "+s+" = "+c*s;n=[].concat(Object(I.a)(n),[m]),m=c+" x "+s,t=[].concat(Object(I.a)(t),[m])}var u=0,d=a.map((function(e){return o.a.createElement("li",{className:"showall_listitem",key:u++},e)})),b=n.map((function(e){return o.a.createElement("li",{className:"showall_listitem",key:u++},e)})),g=e.map((function(e){return o.a.createElement("li",{className:"showall_listiem",key:u++},e)})),p=t.map((function(e){return o.a.createElement("li",{className:"showall_listiem",key:u++},e)}));i(d),E(b),v(g),y(p)}(c.target.id)};return o.a.createElement("div",{className:"Showall_Container"},o.a.createElement("div",{className:"showmodebtn_box"},o.a.createElement("button",{className:"showmode_btn",onClick:function(e){j("flex"),B("none")}},"\ub2f5\ubcf4\uae30"),o.a.createElement("button",{className:"showmode_btn",onClick:function(e){j("none"),B("flex")}},"\ub2f5\uac00\ub9ac\uae30")),o.a.createElement("div",null,o.a.createElement("div",{className:"show_Box",style:{display:k}},o.a.createElement("ul",{className:"Showall_list"},s),o.a.createElement("ul",{className:"Showall_list"},d)),o.a.createElement("div",{className:"show_Box",style:{display:x}},o.a.createElement("ul",{className:"Showall_list"},h),o.a.createElement("ul",{className:"Showall_list"},O)),o.a.createElement("div",null,o.a.createElement("button",{className:"dan_btn",id:"2",onClick:D},"2\ub2e8"),o.a.createElement("button",{className:"dan_btn",id:"3",onClick:D},"3\ub2e8"),o.a.createElement("button",{className:"dan_btn",id:"4",onClick:D},"4\ub2e8"),o.a.createElement("button",{className:"dan_btn",id:"5",onClick:D},"5\ub2e8")),o.a.createElement("div",null,o.a.createElement("button",{className:"dan_btn",id:"6",onClick:D},"6\ub2e8"),o.a.createElement("button",{className:"dan_btn",id:"7",onClick:D},"7\ub2e8"),o.a.createElement("button",{className:"dan_btn",id:"8",onClick:D},"8\ub2e8"),o.a.createElement("button",{className:"dan_btn",id:"9",onClick:D},"9\ub2e8"))))};a(75),a(76);P=0;var J=[],H=function(){P++,(J=[(M-1)*P,M*(P-1),M*P,M*(P+1)]).sort((function(){return Math.random()-Math.random()}))};var A=function(e){var t=Object(l.useState)(""),a=Object(b.a)(t,2),n=(a[0],a[1]),c=Object(l.useState)(0),r=Object(b.a)(c,2),s=r[0],i=r[1],m=Object(l.useState)(0),u=Object(b.a)(m,2),d=u[0],E=u[1],g=Object(l.useState)(""),p=Object(b.a)(g,2),h=p[0],v=p[1],N=Object(l.useState)("none"),f=Object(b.a)(N,2),O=f[0],y=f[1],S=Object(l.useState)("none"),_=Object(b.a)(S,2),k=_[0],j=_[1];M=e.dan;var C=function(e){Number(e.target.id)===M*P?(E(d+1),i(s+1),H(),n("")):(E(d+1),H(),n("")),9===d&&(y("none"),j(""),alert("\uac8c\uc784\ub05d\ub0ac\uc5c9"),P=1)};return o.a.createElement("div",{className:"Game_choice_Container"},o.a.createElement("div",{className:"desc_box",style:{display:h}},o.a.createElement("button",{onClick:function(e){v("none"),y(""),j("none"),H()}},"\uc2dc\uc791\ud558\uae30")),o.a.createElement("div",{className:"gugudan_box",style:{display:O}},o.a.createElement("div",null,"(\ubb38\uc81c ",d+1,")"),o.a.createElement("p",{className:"text",style:{width:"100%"}},M),o.a.createElement("p",{className:"text",style:{width:"100%"}},o.a.createElement("span",{className:"text",style:{width:"100%"}},o.a.createElement("span",{className:"text"},"x")," ",o.a.createElement("span",{className:"text"},P))),o.a.createElement("div",{className:"Choice_Box"},o.a.createElement("button",{className:"Answer_Btn",id:J[0],onClick:C},J[0]),o.a.createElement("button",{className:"Answer_Btn",id:J[1],onClick:C},J[1])),o.a.createElement("div",{className:"Choice_Box"},o.a.createElement("button",{className:"Answer_Btn",id:J[2],onClick:C},J[2]),o.a.createElement("button",{className:"Answer_Btn",id:J[3],onClick:C},J[3])),o.a.createElement("div",null,"\ubb38\uc81c \uc218 : ",d,"/10")),o.a.createElement("div",{className:"result_box",style:{display:k}},o.a.createElement("p",null,"\uc810\uc218 : ",10*s,"/100"),o.a.createElement("button",{onClick:function(e){i(0),E(0),n(""),y(""),j("none")}},"\ub2e4\uc2dc\ud558\uae30")))};var Y=function(){var e=Object(l.useState)(),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(""),r=Object(b.a)(c,2),s=r[0],i=r[1],m=Object(l.useState)("none"),u=Object(b.a)(m,2),d=u[0],E=u[1],g=function(e){n(e.target.id),alert("".concat(e.target.id,"\uc744 \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4.")),E(""),i("none")};return o.a.createElement("div",{className:"Practice_Container"},o.a.createElement("div",{style:{display:d}},o.a.createElement(A,{dan:a})),o.a.createElement("div",{style:{display:s}},o.a.createElement("div",{className:"Practice_imgbox"},"Imgae"),o.a.createElement("p",null,"\uc5f0\uc2b5\ud558\uace0\uc790 \ud558\ub294 \uad6c\uad6c\ub2e8\uc744 \uc120\ud0dd\ud558\uc138\uc694"),o.a.createElement("div",null,o.a.createElement("button",{className:"Practice_Btn",id:"2",onClick:g},"2\ub2e8"),o.a.createElement("button",{className:"Practice_Btn",id:"3",onClick:g},"3\ub2e8"),o.a.createElement("button",{className:"Practice_Btn",id:"4",onClick:g},"4\ub2e8"),o.a.createElement("button",{className:"Practice_Btn",id:"5",onClick:g},"5\ub2e8")),o.a.createElement("div",null,o.a.createElement("button",{className:"Practice_Btn",id:"6",onClick:g},"6\ub2e8"),o.a.createElement("button",{className:"Practice_Btn",id:"7",onClick:g},"7\ub2e8"),o.a.createElement("button",{className:"Practice_Btn",id:"8",onClick:g},"8\ub2e8"),o.a.createElement("button",{className:"Practice_Btn",id:"9",onClick:g},"9\ub2e8")),o.a.createElement("button",{className:"Practice_Btn2",id:"all"},"\ubaa8\ub450")))};a(77),localStorage.getItem("Nickname");var L=function(e){var t=e.history;return o.a.createElement("div",{className:"Homepage_Container"},o.a.createElement("div",{className:"Homepage_ImgBox"},"\uc774\ubbf8\uc9c0"),o.a.createElement("div",{className:"Homepage_BtnBox"},o.a.createElement("button",{className:"Homepage_Btn",id:"1",type:"button",onClick:function(){return t.push("/showall")}},"\uad6c\uad6c\ub2e8 \ud45c"),o.a.createElement("button",{className:"Homepage_Btn",id:"2",type:"button",onClick:function(){return t.push("/practice")}},"\uc5f0\uc2b5 \ud558\uae30"),o.a.createElement("button",{className:"Homepage_Btn",id:"3",type:"button",onClick:function(){return t.push("/easytest")}},"\uc2dc\ud5d8 \ubcf4\uae30"),o.a.createElement("button",{className:"Homepage_Btn",id:"4",type:"button",onClick:function(){return t.push("/checkscore")}},"\uc131\uc801 \ud655\uc778")))};Object(p.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return o.a.createElement(h.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),Object(p.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(v.a);a(84);var z=a(122),G=a(126),W=a(123),F=a(57),K=a.n(F),R=(a(85),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleDrawerToggle=function(e){n.setState({toggle:!n.state.toggle,toptitle:e.target.name})},n.state={toggle:!1,toptitle:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state.toptitle;return o.a.createElement(E.a,{basename:"/ggd_webapp"},o.a.createElement("div",{className:e.root},o.a.createElement(z.a,{className:"Top_bar",position:"static",style:{display:"block"}},o.a.createElement(W.a,{className:e.menuButton,id:"hamburgerMenu",color:"inherit",onClick:this.handleDrawerToggle},o.a.createElement(K.a,null)),o.a.createElement("p",{className:"Top_bar_text"},t)),o.a.createElement(G.a,{open:this.state.toggle},o.a.createElement("div",{className:"Navibar_imgbox"},"\uc774\ubbf8\uc9c0"),o.a.createElement(v.a,{onClick:this.handleDrawerToggle},o.a.createElement(E.b,{name:"\ud648",className:"linkitem",to:"/"},"\ud648\ud398\uc774\uc9c0")),o.a.createElement(v.a,{id:"\uad6c\uad6c\ub2e8 \ud45c",onClick:this.handleDrawerToggle},o.a.createElement(E.b,{name:"\uad6c\uad6c\ub2e8\ud45c \ubcf4\uae30",className:"linkitem",to:"/showall"},"\uad6c\uad6c\ub2e8 \ud45c")),o.a.createElement(v.a,{id:"\uc5f0\uc2b5 \ud558\uae30",onClick:this.handleDrawerToggle},o.a.createElement(E.b,{name:"\uc5f0\uc2b5 \ud558\uae30",className:"linkitem",to:"/practice"},"\uc5f0\uc2b5 \ud558\uae30")),o.a.createElement(v.a,{id:"\uc2dc\ud5d8 \ubcf4\uae30",onClick:this.handleDrawerToggle},o.a.createElement(E.b,{name:"\uc2dc\ud5d8 \ubcf4\uae30",className:"linkitem",to:"/easytest"},"\uc2dc\ud5d8 \ubcf4\uae30")),o.a.createElement(v.a,{id:"\uc131\uc801 \ud655\uc778",onClick:this.handleDrawerToggle},o.a.createElement(E.b,{name:"\uc131\uc801 \ud655\uc778",className:"linkitem",to:"/checkscore"},"\uc131\uc801 \ud655\uc778")))),o.a.createElement("div",{style:{textAlign:"center",width:"100%"}},o.a.createElement(g.a,{exact:!0,path:"/",component:L}),o.a.createElement(g.a,{path:"/showall",component:T}),o.a.createElement(g.a,{path:"/practice",component:Y}),o.a.createElement(g.a,{path:"/easytest",component:B}),o.a.createElement(g.a,{path:"/checkscore",component:D})))}}]),a}(o.a.Component)),$=Object(p.a)({root:{flexGrow:1},menuButton:{marginRight:"auto"}})(R);null!=localStorage.getItem("Nickname")&&console.log("\uc788\ub2e4\uc774\ubbf8");var q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={registerInput:"",registerDP:"",choiceDP:"none"},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"register",style:{display:this.state.registerDP}},o.a.createElement("div",{className:"Main_ImgBox"},"\uc774\ubbf8\uc9c0"),o.a.createElement("input",{className:"Main_InputBox",type:"text",value:this.state.registerInput,onChange:function(t){e.setState({registerInput:t.target.value})}}),o.a.createElement("button",{className:"Main_registerBtn",onClick:function(){""===e.state.registerInput?alert("\ub2c9\ub124\uc784\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694!"):(e.setState({registerDP:"none",choiceDP:"grid"}),localStorage.setItem("Nickname",e.state.registerInput))}},"\ub4f1\ub85d\ud558\uae30")),o.a.createElement("div",{className:"choice",style:{display:this.state.choiceDP}},o.a.createElement($,{name:this.state.registerInput})))}}]),a}(o.a.Component);var Q=function(){return o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.0739032e.chunk.js.map