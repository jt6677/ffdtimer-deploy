(this["webpackJsonpffdtimer-deploy"]=this["webpackJsonpffdtimer-deploy"]||[]).push([[0],{164:function(e,t,n){},170:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},197:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),r=n.n(a),c=n(42),i=n.n(c),o=n(14),l=n(15),u=n(18),d=n(17),j=n(13),h=(n(164),n(21)),b=n(16),m=(n(170),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderAuthButton",value:function(){return this.props.authenticated&&""!==this.props.authenticated?Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(h.a,{className:"link text-link",to:"/",children:"Timer"}),Object(s.jsx)(h.a,{className:"link text-link",to:"/datepicker",children:"Date-pick"}),Object(s.jsx)(h.a,{className:"link text-link ",to:"/signout",children:"Sign Out"})]}):Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(h.a,{className:"link text-link ",to:"/signinandsignup",children:"New Account"}),Object(s.jsx)(h.a,{className:"link text-link ",to:"/signin",children:"Sign In"})]})}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"navbar",style:{backgroundImage:"none"},children:this.renderAuthButton()})}}]),n}(a.Component)),p=Object(b.b)((function(e){return{authenticated:e.auth.authenticated}}))(m),O=n(158),x=n(34),v=n.n(x),g=n(50),f=(n(175),n.p+"static/media/welldone.b7666902.mp3"),y=(n(176),n(45)),N=n.n(y);var S=function(e){var t=e.history,n=t.map((function(e){return Object(s.jsxs)("tr",{className:"sessiontable__tr__content",children:[Object(s.jsx)("td",{className:"cell",children:e.ID}),Object(s.jsx)("td",{className:"cell",children:e.StartedAt}),Object(s.jsx)("td",{className:"cell",children:N()(e.UpdatedAt).format("YYYY-MM-DD HH:mm:ss")})]},e.ID)}));return t.length>0?Object(s.jsx)("div",{children:Object(s.jsxs)("table",{className:" sessiontable table table-hover table-mc-light-blue",children:[Object(s.jsxs)("thead",{children:[Object(s.jsx)("tr",{children:Object(s.jsxs)("th",{className:"sessiontable__count",children:["Total: ",t.length]})}),Object(s.jsxs)("tr",{className:"sessiontable__tr",children:[Object(s.jsx)("th",{className:"head",children:"Session_ID"}),Object(s.jsx)("th",{className:"head",children:"Started"}),Object(s.jsx)("th",{className:"head",children:"Ended"})]})]}),Object(s.jsx)("tbody",{children:n})]})}):Object(s.jsx)("div",{})},k=n(33),w=n(151),M=n.n(w)()();function C(e){var t=function(t){Object(u.a)(a,t);var n=Object(d.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.shouldNavigateAway()}},{key:"componentDidUpdate",value:function(){this.shouldNavigateAway()}},{key:"shouldNavigateAway",value:function(){this.props.auth||M.push("/signinandsignup")}},{key:"render",value:function(){return Object(s.jsx)(e,Object(k.a)({},this.props))}}]),a}(a.Component);return Object(b.b)((function(e){return{auth:e.auth.authenticated}}))(t)}var I=n(152),A=n.n(I).a.create({baseURL:"http://localhost:8080"}),D=C(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={timeRemain:"",currentSessionID:null,minutes:"",seconds:"",counting:!1,sessionStarted:"",history:[]},e.audio=new Audio(f),e.sendEndSig=Object(g.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={url:"/recordsession",method:"post",withCredentials:!0,data:{startedat:e.state.sessionStarted},headers:{"Access-Control-Allow-Origin":"https://jt6677.github.io","Access-Control-Allow-Headers":"Content-Type,Authorization"}};try{A.request(n)}catch(s){console.log(s)}case 2:case"end":return t.stop()}}),t)}))),e.onAddSession=function(){var t={ID:e.state.history.length+1,StartedAt:e.state.sessionStarted,UpdatedAt:e.getCurrentTime()};e.setState((function(e){return{history:[].concat(Object(O.a)(e.history),[t])}})),e.sendEndSig(),localStorage.setItem("sessionhistory",JSON.stringify(e.state.history))},e.timerStart=function(){e.setState({counting:!0,sessionStarted:e.getCurrentTime()});var t=setInterval((function(){e.state.timeRemain>0?(e.setState((function(e){return{timeRemain:e.timeRemain-1}})),e.changeMinSec(e.state.timeRemain),localStorage.setItem("timeRemain",e.state.timeRemain)):(e.audio.play(),localStorage.removeItem("timeRemain"),e.setState({timeRemain:5,counting:!1}),e.onAddSession(),clearInterval(t))}),1e3);e.setState({currentSessionID:t})},e.changeMinSec=function(t){var n=parseInt(t/60,10),s=parseInt(t%60,10);n=n<10?"0"+n:n,s=s<10?"0"+s:s,e.setState({minutes:n,seconds:s})},e}return Object(l.a)(n,[{key:"renderButtons",value:function(){var e=this;return Object(s.jsxs)("div",{className:"buttonBlock",children:[Object(s.jsx)("button",{className:this.state.counting?"ButtonDisabled":" ActiveButton",disabled:this.state.counting,onClick:function(){return e.timerStart()},children:"Start"}),"   ",Object(s.jsx)("button",{className:this.state.counting?" ActiveButton":"ButtonDisabled",disabled:!this.state.counting,onClick:function(){return e.timerPause()},children:"Pause"})]})}},{key:"getCurrentTime",value:function(){var e=new Date;return N()(e).format("YYYY-MM-DD HH:mm:ss")}},{key:"timerPause",value:function(){clearInterval(this.state.currentSessionID),this.setState({counting:!1})}},{key:"componentDidMount",value:function(){var e=this;!0===localStorage.hasOwnProperty("timeRemain")?this.setState({timeRemain:localStorage.getItem("timeRemain")},(function(){return e.changeMinSec(e.state.timeRemain)})):this.setState({timeRemain:5},(function(){return e.changeMinSec(e.state.timeRemain)})),null!==localStorage.getItem("sessionhistory")&&this.setState({history:JSON.parse(localStorage.getItem("sessionhistory"))})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"mainbody",children:[Object(s.jsx)("div",{className:".timer-box",children:Object(s.jsx)("div",{className:"countdown",children:Object(s.jsxs)("div",{className:"tiles",children:[Object(s.jsx)("span",{className:"minute whitebox",children:this.state.minutes}),Object(s.jsx)("span",{className:"second whitebox",children:this.state.seconds}),Object(s.jsxs)("div",{className:"labels",children:[Object(s.jsx)("li",{children:"Mins"}),Object(s.jsx)("li",{children:"Secs"})]})]})})}),this.renderButtons(),Object(s.jsx)(S,{history:this.state.history})]})}}]),n}(a.Component)),L=(n(82),n.p+"static/media/circle250.439011ca.png"),_=(n(197),function(e){if(e)return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"wisdom-line__One",children:'"Drop By Drop,'}),Object(s.jsx)("p",{className:"wisdom-line__Two",children:' "The Bucket Will Be Filled."'})]})});var R=function(e){var t=e.showWisdom;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:" logo-container",children:Object(s.jsx)("img",{className:"logo",src:L,alt:"FallForward"})}),Object(s.jsx)("h1",{className:"slogon",children:"Fall Forward"})]}),_(t)]})},F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"main-body",children:[Object(s.jsx)(R,{showWisdom:!0}),Object(s.jsx)("div",{className:"buttonList",children:Object(s.jsxs)("ul",{className:"buttons",children:[Object(s.jsx)("li",{children:Object(s.jsx)(h.a,{className:"primary",to:"/signin",children:"Log In"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.a,{className:"signupbutton",to:"/signup",children:"Sign Up"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.a,{to:"/",className:"minor",children:"\u27f5 Go back"})})]})})]})}}]),n}(a.Component),G=function(e){switch(e){case"user":return"M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z";case"password":return"M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23";case"mobile":return"M21 2 L11 2 C10 2 9 3 9 4 L9 28 C9 29 10 30 11 30 L21 30 C22 30 23 29 23 28 L23 4 C23 3 22 2 21 2 Z M9 5 L23 5 M9 27 L23 27";case"calendar":return"M2 6 L2 30 30 30 30 6 Z M2 15 L30 15 M7 3 L7 9 M13 3 L13 9 M19 3 L19 9 M25 3 L25 9";default:return""}},B=function(e){return Object(s.jsx)("svg",{style:{width:"2rem",height:"1.5rem"},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32",stroke:"currentColor",className:"icon",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"6.25%",d:G(e.iconName)})})},Y="auth_user",T="auth_error",U="get_dailysession",H="get_dailysession_error",P=n(79),W=n.n(P),q=n(363),Z=n(362),J=function(e){return e||"number"===typeof e?void 0:"Required"},E=function(e){return function(t){return t&&t.length<e?"Must be ".concat(e," characters or more"):void 0}},z=E(4),K=E(6),Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onSubmit=function(t){e.props.signIn(t)},e.renderInput=function(e){return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsxs)("div",{className:"fields",children:[Object(s.jsx)("label",{htmlFor:"name",children:Object(s.jsx)(B,{className:"icon",iconName:e.label})}),Object(s.jsx)("input",{onChange:e.input.onChange,value:e.input.value,type:e.type,placeholder:e.placeholder,autoComplete:"off"})]}),Object(s.jsx)("div",{className:"errorMSG",children:e.meta.touched&&e.meta.error&&Object(s.jsx)("span",{children:e.meta.error})})]})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"main-body",children:[Object(s.jsx)(R,{showWisdom:!0}),Object(s.jsx)("div",{children:Object(s.jsxs)("form",{className:" signin-container error",onSubmit:this.props.handleSubmit(this.onSubmit),children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(q.a,{type:"text",name:"username",placeholder:" Username or Cellphone",component:this.renderInput,validate:[J,z],label:"user"}),Object(s.jsx)(q.a,{type:"password",name:"password",placeholder:" Password",component:this.renderInput,validate:[J,K],label:"password"})]}),Object(s.jsxs)("div",{className:"buttonList",children:[Object(s.jsx)("div",{className:"errorMSG",children:this.props.errorMessage}),Object(s.jsxs)("ul",{className:"buttons",children:[Object(s.jsx)("li",{children:Object(s.jsx)("input",{className:this.props.pristine||this.props.submitting?"primary signinbutton disabled ":"primary signinbutton ",type:"submit",value:"Log In"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.a,{to:"/signinandsignup",className:"minor",children:"\u27f5 Go back"})})]})]})]})})]})}}]),n}(a.Component),V=Object(Z.a)({form:"signinform"})(Q),X={signIn:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(n){var s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.post("/signin",Object(k.a)({},e));case 3:""!==(s=t.sent).data.errormsg?n({type:T,payload:s.data.errormsg}):(n({type:Y,payload:s.data.response}),localStorage.setItem("remember_token",s.data.response),W.a.set("remember_token",s.data.response),M.push("/")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:T,payload:"Network Failed"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},$=Object(b.b)((function(e){return{errorMessage:e.auth.errorMessage}}),X)(V),ee=function(e){return e||"number"===typeof e?void 0:"Required"},te=function(e){return function(t){return t&&t.length<e?"Must be ".concat(e," characters or more"):void 0}},ne=te(4),se=te(6),ae=te(11),re=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.signUp(t)},e.renderInput=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"fields",children:[Object(s.jsx)("label",{htmlFor:"name",children:Object(s.jsx)(B,{className:"icon",iconName:e.label})}),Object(s.jsx)("input",{onChange:e.input.onChange,value:e.input.value,type:e.type,placeholder:e.placeholder,autoComplete:"off"})]}),Object(s.jsx)("div",{className:"errorMSG",children:e.meta.touched&&e.meta.error&&Object(s.jsx)("span",{children:e.meta.error})})]})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"main-body",children:[Object(s.jsx)(R,{}),Object(s.jsx)("div",{children:Object(s.jsxs)("form",{className:"signin-container",onSubmit:this.props.handleSubmit(this.onSubmit),children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(q.a,{type:"text",name:"username",placeholder:" Username",component:this.renderInput,validate:[ee,ne],label:"user"}),Object(s.jsx)(q.a,{type:"text",name:"cellphone",placeholder:" Cellphone",component:this.renderInput,validate:[ee,ae],label:"mobile"}),Object(s.jsx)(q.a,{type:"password",name:"password",placeholder:" Password",component:this.renderInput,validate:[ee,se],label:"password"})]}),Object(s.jsxs)("div",{className:"buttonList",children:[Object(s.jsx)("div",{children:this.props.errorMessage}),Object(s.jsxs)("ul",{className:"buttons",children:[Object(s.jsx)("li",{children:Object(s.jsx)("input",{className:this.props.pristine||this.props.submitting?"primary signinbutton disabled ":"primary signinbutton ",type:"submit",value:"Log In"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.a,{to:"/signinandsignup",className:"minor",children:"\u27f5 Go back"})})]})]})]})})]})}}]),n}(a.Component),ce=Object(Z.a)({form:"signupform"})(re),ie={signUp:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(n){var s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.post("/signup",Object(k.a)({},e));case 3:""!==(s=t.sent).data.errormsg?n({type:T,payload:s.data.errormsg}):(n({type:Y,payload:s.data.response}),localStorage.setItem("remember_token",s.data.response),W.a.set("remember_token",s.data.response),M.push("/")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:T,payload:"Network Failed"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},oe=Object(b.b)((function(e){return{errorMessage:e.auth.errorMessage}}),ie)(ce),le=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.signOut()}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(F,{})})}}]),n}(a.Component),ue={signOut:function(){return localStorage.removeItem("remember_token"),W.a.remove("remember_token"),{type:Y,payload:""}}},de=Object(b.b)(null,ue)(le),je=n(155),he=n.n(je),be=(n(296),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={selecteddate:new Date},e.handleSubmit=function(t){t.preventDefault();var n=N()(e.state.selecteddate).format("YYYYMMDD");e.props.checkDailySession(n)},e.handleChange=function(t){e.setState({selecteddate:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"main-body",children:[Object(s.jsx)(R,{showWisdom:!0}),Object(s.jsxs)("form",{className:" signin-container",onSubmit:this.handleSubmit,children:[Object(s.jsx)("label",{htmlFor:"name",children:Object(s.jsx)(B,{className:"icon",iconName:"calendar"})}),Object(s.jsx)(he.a,{className:"datepicker",selected:this.state.selecteddate,onChange:function(t){return e.handleChange(t)},dateFormat:"yyyyMMdd",isClearable:!0}),Object(s.jsxs)("div",{className:"buttonList",children:[Object(s.jsx)("span",{className:"errorMSG",children:this.props.errorMSG}),Object(s.jsxs)("ul",{className:"buttons",children:[Object(s.jsx)("li",{children:Object(s.jsx)("input",{type:"submit",value:"Go",className:"primary signinbutton"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.a,{to:"/signinandsignup",className:"minor",children:"\u27f5 Go back"})})]})]})]})]})}}]),n}(a.Component)),me={checkDailySession:function(e){return function(){var t=Object(g.a)(v.a.mark((function t(n){var s,a,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s="/dailysession/".concat(e),a={url:s,method:"get",withCredentials:!0,headers:{"Access-Control-Allow-Origin":"https://jt6677.github.io","Access-Control-Allow-Headers":"Content-Type,Authorization"}},t.prev=2,t.next=5,A.request(a);case 5:0===(r=t.sent).data.length?n({type:H,payload:"No Session is Found on ".concat(e)}):(n({type:U,payload:r.data}),M.push("/date/".concat(e))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:T,payload:"Network Failed"});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}},pe=C(Object(b.b)((function(e){return{errorMSG:e.getSession.errorMSG}}),me)(be)),Oe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"main-body",children:Object(s.jsx)(S,{history:this.props.sessions})})}}]),n}(a.Component),xe=C(Object(b.b)((function(e){return{sessions:e.getSession.sessions}}))(Oe)),ve=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(j.b,{history:M,children:[Object(s.jsx)(p,{}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{path:"/",exact:!0,component:D}),Object(s.jsx)(j.a,{path:"/signinandsignup",exact:!0,component:F}),Object(s.jsx)(j.a,{path:"/signin",exact:!0,component:$}),Object(s.jsx)(j.a,{path:"/signup",exact:!0,component:oe}),Object(s.jsx)(j.a,{path:"/signout",exact:!0,component:de}),Object(s.jsx)(j.a,{path:"/date/:id",exact:!0,component:xe}),Object(s.jsx)(j.a,{path:"/datepicker",exact:!0,component:pe})]})]})})}}]),n}(a.Component),ge=n(10),fe=n(364),ye={authenticated:"",errorMessage:""};var Ne={sessions:[],errorMSG:""};var Se=Object(ge.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.payload;switch(n){case Y:return Object(k.a)(Object(k.a)({},e),{},{authenticated:s});case T:return Object(k.a)(Object(k.a)({},e),{},{errorMessage:s});default:return e}},form:fe.a,getSession:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{sessions:t.payload};case H:return{errorMSG:t.payload};default:return e}}}),ke=n(157),we=Object(ge.d)(Se,{auth:{authenticated:localStorage.getItem("remember_token")}},Object(ge.a)(ke.a));i.a.render(Object(s.jsx)(b.a,{store:we,children:Object(s.jsx)(ve,{})}),document.querySelector("#root"))},82:function(e,t,n){}},[[357,1,2]]]);
//# sourceMappingURL=main.cf8ef420.chunk.js.map