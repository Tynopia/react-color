(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[20],{104:function(t,e,r){"use strict";var i=r(2),a=r.n(i),s=r(4),n=r.n(s),o=r(0),c=r.n(o),l=r(10),d=r(7),h=r(13),u=r(1),b=function(t){var e=t.className,r=t.color,i=t.left,s=t.top,n=t.style,c=t.prefixCls,l=a()({},n,{position:"absolute",top:s,left:i});return Object(o.useMemo)((function(){return Object(u.jsx)("div",{className:c+"-pointer "+(e||""),style:l,children:Object(u.jsx)("div",{className:c+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:Object(u.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})}),[s,i,r,e,c])},p=2*Math.PI,j=function(t,e){return Math.sqrt(t*t+e*e)};function g(t){var e=t.width,r=void 0===e?0:e,i=r/2;return{width:r,radius:i,cx:i,cy:i}}function x(t){var e=t.width;return(void 0===e?0:e)/2}function f(t,e,r){var i,a=t.angle||0,s=t.direction;return r&&"clockwise"===s?e=a+e:"clockwise"===s?e=360-a+e:r&&"anticlockwise"===s?e=a+180-e:"anticlockwise"===s&&(e=a-e),(e%(i=360)+i)%i}var m=["prefixCls","radius","pointer","className","style","width","height","direction","angle","color","onChange"],v=c.a.forwardRef((function(t,e){var r=t.prefixCls,i=void 0===r?"w-color-wheel":r,s=(t.radius,t.pointer),o=t.className,v=t.style,w=t.width,O=void 0===w?200:w,k=t.height,_=void 0===k?200:k,y=t.direction,M=void 0===y?"anticlockwise":y,C=t.angle,N=void 0===C?180:C,S=t.color,R=t.onChange,E=n()(t,m),U="string"===typeof S&&Object(l.a)(S)?Object(d.b)(S):S||{},D=S?Object(d.f)(U):"",q=function(t,e){var r=g(t),i=r.cx,a=r.cy,s=x(t),n=(180+f(t,e.h,!0))*(p/360),o=e.s/100*s,c="clockwise"===t.direction?-1:1;return{x:i+o*Math.cos(n)*c,y:a+o*Math.sin(n)*c}}({width:O},U),A={top:"0",left:"0",color:D},I=function(t,e){var r=function(t,e,r){var i=g(t),a=i.cx,s=i.cy,n=x(t);e=a-e,r=s-r;var o=f(t,Math.atan2(-r,-e)*(360/p)),c=Math.min(j(e,r),n);return{h:Math.round(o),s:Math.round(100/n*c)}}({width:O},O-t.x,_-t.y),i={h:r.h,s:r.s,v:U.v,a:U.a};R&&R(Object(d.a)(i))};return Object(u.jsxs)(h.a,a()({className:[i,o||""].filter(Boolean).join(" ")},E,{style:a()({},v,{position:"relative",width:O,height:_}),ref:e,onMove:I,onDown:I,children:[c.a.createElement(s||b,a()({prefixCls:i,style:{zIndex:1,transform:"translate("+q.x+"px, "+q.y+"px)"}},A)),Object(u.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===M?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",transform:"rotateZ("+(N+90)+"deg)",inset:0}}),Object(u.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),Object(u.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof U.v?1-U.v/100:0}})]}))}));v.displayName="Wheel";e.a=v},34:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var i=r(31),a=r(30),s=r(32),n=r(33),o=r(0),c=r(37),l=r(35),d=r.n(l),h=r(1),u=function(t){var e=t.editorUrl;return e?Object(h.jsx)("a",{className:d.a.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(e),children:"Edit this page"}):null},b=function(t){Object(s.a)(r,t);var e=Object(n.a)(r);function r(t){var a;return Object(i.a)(this,r),(a=e.call(this,t)).editorUrl=void 0,a.getMdStr=void 0,a.example=void 0,a.state={mdStr:""},a}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var t=this;this.getMdStr&&this.getMdStr().then((function(e){t.setState({mdStr:e.default||e})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:d.a.warpper,children:[Object(h.jsxs)("div",{className:d.a.markdown,children:[Object(h.jsx)(u,{editorUrl:this.editorUrl}),this.example&&Object(h.jsx)("div",{className:d.a.example,children:this.example}),Object(h.jsx)(c.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px",minHeight:120}}),Object(h.jsx)(u,{editorUrl:this.editorUrl})]}),Object(h.jsxs)("div",{className:d.a.footer,children:[Object(h.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(h.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),Object(h.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(h.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(h.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(h.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(h.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(h.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(h.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(o.Component)},35:function(t,e,r){t.exports={markdown:"Markdown_markdown__2igKS",editor:"Markdown_editor___Td2W",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},474:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return p}));var i=r(30),a=r(31),s=r(32),n=r(33),o=r(5),c=r(0),l=r(104),d=r(34),h=r(6),u=r(1);function b(){var t=Object(c.useContext)(h.a),e=t.hsva,r=t.dispatch;return Object(u.jsx)("div",{style:{width:256},children:Object(u.jsx)(l.a,{color:e,onChange:function(t){r({hsva:Object(o.a)(Object(o.a)({},e),t.hsva)})}})})}var p=function(t){Object(s.a)(o,t);var e=Object(n.a)(o);function o(){var t;Object(a.a)(this,o);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).editorUrl="/packages/color-wheel/README.md",t.getMdStr=function(){return r.e(47).then(r.bind(null,441))},t.example=Object(u.jsx)(b,{}),t}return Object(i.a)(o)}(d.a)}}]);
//# sourceMappingURL=20.70ba5eaa.chunk.js.map