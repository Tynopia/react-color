"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[410],{7126:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(2951),a=r(1914),o=r(7591),i=r(3415),s=r(1473),l=r(2650),c="Markdown_markdown__pdFcg",d="Markdown_editor__ktea2",u="Markdown_warpper__j-FaN",p="Markdown_example__q3W5x",h="Markdown_footer__ShQo5",g=r(9286),f=function(e){var t=e.editorUrl;return t?(0,g.jsx)("a",{className:d,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},x=function(e){(0,o.Z)(r,e);var t=(0,i.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).editorUrl=void 0,a.getMdStr=void 0,a.example=void 0,a.state={mdStr:""},a}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return(0,g.jsxs)("div",{className:u,children:[(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)(f,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:p,children:this.example}),(0,g.jsx)(l.Z,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px",minHeight:120}}),(0,g.jsx)(f,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(s.Component)},2532:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(1914),a=r(2951),o=r(7591),i=r(3415),s=r(189),l=r(1473),c=r(8935),d=r(7126),u=r(7664),p=r(9286);function h(){var e=(0,l.useContext)(u._y),t=e.hsva,r=e.dispatch;return(0,p.jsx)("div",{style:{width:256},children:(0,p.jsx)(c.Z,{color:t,onChange:function(e){r({hsva:(0,s.Z)((0,s.Z)({},t),e.hsva)})}})})}var g=function(e){(0,o.Z)(s,e);var t=(0,i.Z)(s);function s(){var e;(0,a.Z)(this,s);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).editorUrl="/packages/color-sketch/README.md",e.getMdStr=function(){return r.e(392).then(r.bind(r,6392))},e.example=(0,p.jsx)(h,{}),e}return(0,n.Z)(s)}(d.Z)},7302:function(e,t,r){var n=r(5773),a=r(808),o=r(1473),i=r(353),s=r(6433),l=r(9286),c=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],d=o.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-editable-input-rgba":r,d=e.hsva,u=e.placement,p=void 0===u?"bottom":u,h=e.rProps,g=void 0===h?{}:h,f=e.gProps,x=void 0===f?{}:f,v=e.bProps,m=void 0===v?{}:v,b=e.aProps,y=void 0===b?{}:b,Z=e.className,j=e.style,w=e.onChange,C=(0,a.Z)(e,c),k=d?(0,s.MA)(d):{};function N(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var S=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),w&&w((0,s.$_)((0,s.S7)((0,n.Z)({},k,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&w&&w((0,s.$_)((0,s.S7)((0,n.Z)({},k,{r:e})))),"g"===t&&w&&w((0,s.$_)((0,s.S7)((0,n.Z)({},k,{g:e})))),"b"===t&&w&&w((0,s.$_)((0,s.S7)((0,n.Z)({},k,{b:e})))))};return(0,l.jsxs)("div",(0,n.Z)({ref:t,className:[o,Z||""].filter(Boolean).join(" ")},C,{style:(0,n.Z)({fontSize:11,display:"flex"},j),children:[(0,l.jsx)(i.Z,(0,n.Z)({label:"R",value:k.r||0,onBlur:N,placement:p,onChange:function(e,t){return S(t,"r",e)}},g,{style:(0,n.Z)({},g.style)})),(0,l.jsx)(i.Z,(0,n.Z)({label:"G",value:k.g||0,onBlur:N,placement:p,onChange:function(e,t){return S(t,"g",e)}},x,{style:(0,n.Z)({marginLeft:5},g.style)})),(0,l.jsx)(i.Z,(0,n.Z)({label:"B",value:k.b||0,onBlur:N,placement:p,onChange:function(e,t){return S(t,"b",e)}},m,{style:(0,n.Z)({marginLeft:5},m.style)})),y&&(0,l.jsx)(i.Z,(0,n.Z)({label:"A",value:k.a?parseInt(String(100*k.a),10):0,onBlur:N,placement:p,onChange:function(e,t){return S(t,"a",e)}},y,{style:(0,n.Z)({marginLeft:5},y.style)}))]}))}));d.displayName="EditableInputRGBA",t.Z=d},353:function(e,t,r){var n=r(1026),a=r(5773),o=r(808),i=r(1473),s=r(9286),l=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],c=i.forwardRef((function(e,t){var r=e.prefixCls,c=void 0===r?"w-color-editable-input":r,d=e.placement,u=void 0===d?"bottom":d,p=e.label,h=e.value,g=e.className,f=e.style,x=e.labelStyle,v=e.inputStyle,m=e.onChange,b=e.onBlur,y=(0,o.Z)(e,l),Z=(0,i.useState)(h),j=(0,n.Z)(Z,2),w=j[0],C=j[1],k=(0,i.useRef)(!1);(0,i.useEffect)((function(){e.value!==w&&(k.current||C(e.value))}),[e.value]);var N={};return"bottom"===u&&(N.flexDirection="column"),"top"===u&&(N.flexDirection="column-reverse"),"left"===u&&(N.flexDirection="row-reverse"),(0,s.jsxs)("div",{className:[c,g||""].filter(Boolean).join(" "),style:(0,a.Z)({position:"relative",alignItems:"center",display:"flex",fontSize:11},N,f),children:[(0,s.jsx)("input",(0,a.Z)({ref:t,value:w,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&m&&m(e,r);var n=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(n)||m&&m(e,n),C(r)},onBlur:function(t){k.current=!1,C(e.value),b&&b(t)},autoComplete:"off",onFocus:function(){return k.current=!0}},y,{style:(0,a.Z)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},v)})),p&&(0,s.jsx)("span",{style:(0,a.Z)({color:"rgb(153, 153, 153)",textTransform:"capitalize"},x),children:p})]})}));c.displayName="EditableInput",t.Z=c},3989:function(e,t,r){var n=r(5773),a=r(808),o=r(1473),i=r(2077),s=r(9286),l=["prefixCls","className","hue","onChange","direction"],c=o.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-hue":r,c=e.className,d=e.hue,u=void 0===d?0:d,p=e.onChange,h=e.direction,g=void 0===h?"horizontal":h,f=(0,a.Z)(e,l);return(0,s.jsx)(i.Z,(0,n.Z)({ref:t,className:o+" "+(c||"")},f,{direction:g,background:"linear-gradient(to "+("horizontal"===g?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:u,s:100,v:100,a:u/360},onChange:function(e,t){p&&p({h:"horizontal"===g?360*t.left:360*t.top})}}))}));c.displayName="Hue",t.Z=c},2458:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(5773),a=r(808),o=r(1473),i=r(6433),s=r(1269),l=r(9286),c=function(e){var t=e.className,r=e.color,n=e.left,a=e.top,i=e.prefixCls,s={position:"absolute",top:a,left:n};return(0,o.useMemo)((function(){return(0,l.jsx)("div",{className:i+"-pointer "+(t||""),style:s,children:(0,l.jsx)("div",{className:i+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:r}})})}),[a,n,r,t,i])},d=["prefixCls","radius","pointer","className","style","hsva","onChange"],u=o.forwardRef((function(e,t){var r=e.prefixCls,u=void 0===r?"w-color-saturation":r,p=e.radius,h=void 0===p?0:p,g=e.pointer,f=e.className,x=e.style,v=e.hsva,m=e.onChange,b=(0,a.Z)(e,d),y=(0,n.Z)({width:200,height:200,borderRadius:h},x,{position:"relative"}),Z=function(e,t){m&&m({h:v.h,s:100*e.left,v:100*(1-e.top),a:v.a})},j={top:100-v.v+"%",left:v.s+"%",color:(0,i.Gg)(v)};return(0,l.jsx)(s.ZP,(0,n.Z)({className:[u,f||""].filter(Boolean).join(" ")},b,{style:(0,n.Z)({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+v.h+", 100%, 50%))"},y),ref:t,onMove:Z,onDown:Z,children:o.createElement(g||c,(0,n.Z)({prefixCls:u},j))}))}));u.displayName="Saturation";var p=u},8935:function(e,t,r){var n=r(1026),a=r(5773),o=r(808),i=r(1473),s=r(2458),l=r(2077),c=r(353),d=r(7302),u=r(3989),p=r(6651),h=r(6433),g=r(6726),f=r(9286),x=["prefixCls","className","onChange","width","presetColors","color","editableDisable","style"],v=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],m=function(e){return(0,f.jsx)("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}})},b=i.forwardRef((function(e,t){var r=e.prefixCls,b=void 0===r?"w-color-sketch":r,y=e.className,Z=e.onChange,j=e.width,w=void 0===j?218:j,C=e.presetColors,k=void 0===C?v:C,N=e.color,S=e.editableDisable,_=void 0===S||S,R=e.style,B=(0,o.Z)(e,x),A=(0,i.useState)({h:209,s:36,v:90,a:1}),E=(0,n.Z)(A,2),L=E[0],M=E[1];(0,i.useEffect)((function(){"string"===typeof N&&(0,p.Ff)(N)&&M((0,h.HW)(N)),"object"===typeof N&&M(N)}),[N]);var P=(0,i.useCallback)((function(e){M(e),Z&&Z((0,h.$_)(e))}),[L]);return(0,f.jsxs)("div",(0,a.Z)({},B,{className:b+" "+(y||""),ref:t,style:(0,a.Z)({background:"rgb(255, 255, 255)",borderRadius:4,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",width:w},R),children:[(0,f.jsxs)("div",{style:{padding:"10px 10px 8px"},children:[(0,f.jsx)(s.Z,{hsva:L,style:{width:"auto",height:150},onChange:function(e){return P((0,a.Z)({},L,e,{a:L.a}))}}),(0,f.jsxs)("div",{style:{display:"flex",marginTop:4},children:[(0,f.jsxs)("div",{style:{flex:1},children:[(0,f.jsx)(u.Z,{width:"auto",height:10,hue:L.h,pointer:m,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){return P((0,a.Z)({},L,e))}}),(0,f.jsx)(l.Z,{width:"auto",height:10,hsva:L,pointer:m,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){P((0,a.Z)({},L,{a:e.a}))}})]}),(0,f.jsx)(l.Z,{width:24,height:24,hsva:L,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:{borderRadius:2,background:(0,h.XL)(L),boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset"}},pointer:function(){return(0,f.jsx)(i.Fragment,{})}})]})]}),_&&(0,f.jsxs)("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[(0,f.jsx)(c.Z,{label:"Hex",value:(0,h.A)(L).replace(/^#/,"").toLocaleUpperCase(),onChange:function(e,t){var r;"string"===typeof(r=t)&&(0,p.Ff)(r)&&/(3|6)/.test(String(r.length))&&P((0,h.HW)(r))},style:{minWidth:58}}),(0,f.jsx)(d.Z,{hsva:L,style:{marginLeft:6},onChange:function(e){return P(e.hsva)}})]}),k&&k.length>0&&(0,f.jsx)(g.Z,{style:{borderTop:"1px solid rgb(238, 238, 238)",paddingTop:10,paddingLeft:10},colors:k,color:(0,h.A)(L),onChange:function(e){return P(e)},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset"}}})]}))}));b.displayName="Sketch",t.Z=b},6726:function(e,t,r){var n=r(5773),a=r(808),o=r(1473),i=r(6433),s=r(9286),l=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=o.forwardRef((function(e,t){var r=e.prefixCls,c=void 0===r?"w-color-swatch":r,d=e.className,u=e.color,p=e.colors,h=void 0===p?[]:p,g=e.style,f=e.rectProps,x=void 0===f?{}:f,v=e.onChange,m=e.addonAfter,b=e.addonBefore,y=e.rectRender,Z=(0,a.Z)(e,l),j=(0,n.Z)({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},x.style),w=function(e){v&&v((0,i.HW)(e))};return(0,s.jsxs)("div",(0,n.Z)({ref:t},Z,{className:[c,d||""].filter(Boolean).join(" "),style:(0,n.Z)({display:"flex",flexWrap:"wrap",position:"relative"},g),children:[b&&o.isValidElement(b)&&b,h&&Array.isArray(h)&&h.map((function(e,t){var r="",a="";"string"===typeof e&&(r=e,a=e),"object"===typeof e&&e.color&&(r=e.title||e.color,a=e.color);var i=u&&u.toLocaleLowerCase()===a.toLocaleLowerCase();if(y)return y({key:t,title:r,color:a,checked:!!i,style:(0,n.Z)({},j,{background:a}),onClick:function(){return w(a)}});var l=x.children&&o.isValidElement(x.children)?o.cloneElement(x.children,{color:a,checked:i}):null;return(0,s.jsx)("div",(0,n.Z)({tabIndex:0,title:r,onClick:function(){return w(a)}},x,{children:l,style:(0,n.Z)({},j,{background:a})}),t)})),m&&o.isValidElement(m)&&m]}))}));c.displayName="Swatch",t.Z=c}}]);
//# sourceMappingURL=410.3855e278.chunk.js.map