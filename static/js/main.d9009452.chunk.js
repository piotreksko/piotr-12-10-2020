(this.webpackJsonporderbook=this.webpackJsonporderbook||[]).push([[0],{13:function(e,t,n){var r=n(30),i=["socket"];e.exports=function(){var e=new Worker(n.p+"daba64fefa711758fe41.worker.js",{name:"[hash].worker.js"});return r(e,i),e}},19:function(e,t,n){},20:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r,i=n(0),o=n.n(i),c=n(11),s=n.n(c),a=(n(19),n(20),n(3)),l=n(2),d=Object(l.a)({container:{display:"flex",flexDirection:"column",maxWidth:"1280px",margin:"auto"},column:{display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"30%"}}),u=n(10),b=n(14),j={black:"#141622",dark:"#222431",negative1:"#a23838",negative2:"#3a1f28",positive1:"#31805c",positive2:"#193434",violet:"#5934d4"},f=function(e,t,n){var r=t?j.negative2:j.positive2;return{background:"linear-gradient(".concat(t||n?"to right":"to left",", ").concat(r," ").concat(e,"%, ").concat(j.black," ").concat(e,"%)")}},p=Object(l.a)({row:{color:"white",display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems:"flex-start",textAlign:"right",padding:"4px 0"},cell:{textAlign:"center",width:"100%"}}),x=n(1),h=function(e){var t=e.order,n=e.isAsksTable,i=e.maxTotal,o=e.columns,c=e.isMobile,s=p(),a=(100*t.total/i).toFixed(1),l=function(e){return e!==r.price?{}:{color:n?j.negative1:j.positive1}},d=function(e,t){return t===r.price?e.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}(e)};return Object(x.jsx)("tr",{className:s.row,style:f(a,n,c),children:o.map((function(e){return Object(x.jsx)("td",{className:s.cell,style:l(e),children:d(t[e],e)},e)}))},t.price)},m=n(4),v="@media (max-width: ".concat(720,"px)"),g=Object(l.a)(Object(m.a)({table:{borderCollapse:"collapse",width:"100%",maxWidth:"900px",display:"flex",flexDirection:"column"},heading:{display:"flex",color:"grey",width:"100%",justifyContent:"space-between",border:"1px solid ".concat(j.dark),borderLeft:"none",borderRight:"none",padding:"2px 0"},body:{display:"flex",flexDirection:"column"},cell:{textAlign:"center",width:"100%"}},v,{body:{flexDirection:"column-reverse"}}));!function(e){e.price="price",e.size="size",e.total="total"}(r||(r={}));var O,w,k=[r.price,r.size,r.total],y=function(e){var t=g(),n=e.orders,r=e.maxTotal,i=e.isAsksTable,o=e.isMobile,c=!i&&!o?[].concat(k).reverse():k,s=o&&!i?Object(b.a)(n).reverse():n,a=o&&!i;return Object(x.jsxs)("table",{className:t.table,children:[!a&&Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{className:t.heading,children:c.map((function(e){return Object(x.jsx)("th",{className:t.cell,children:e.toUpperCase()},e)}))})}),Object(x.jsx)("tbody",{className:t.body,children:s.map((function(e){return Object(x.jsx)(h,{columns:c,order:e,maxTotal:r,isAsksTable:i,isMobile:o},e.price)}))})]})},B=Object(l.a)(Object(m.a)({container:{display:"flex",flexDirection:"row",margin:"auto",width:"100%"}},v,{container:{flexDirection:"column-reverse"}})),N=Object(l.a)({spreadContainer:{width:"100%",textAlign:"center",color:"grey",margin:"0.4rem"}}),T=function(e){var t,n,r,i,o=e.orderBook,c=N(),s=null===(t=o.bids)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.price,a=null===(r=o.asks)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.price;if(!s||!a)return null;var l=(Number(a)-Number(s)).toFixed(1),d=(100*(1-Number(s)/Number(a))).toFixed(2),u="Spread ".concat(l," (").concat(d,"%)");return Object(x.jsx)("div",{className:c.spreadContainer,children:Object(x.jsx)("span",{children:u})})},C=function(e){var t=e.orderBook,n=e.isMobile,r=B(),i=n?12:20,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=0;return e.slice(0,i).map((function(e){var n=Math.round(t+e.size);return t=n,Object(u.a)(Object(u.a)({},e),{},{total:n})}))},c=o(t.asks),s=o(t.bids);if(c.length<1&&s.length<1)return null;var a=c[i-1].total,l=s[i-1].total,d=Math.max(a,l);return Object(x.jsxs)("div",{className:r.container,children:[Object(x.jsx)(y,{orders:s,maxTotal:d,isMobile:n}),n&&Object(x.jsx)(T,{orderBook:t}),Object(x.jsx)(y,{orders:c,maxTotal:d,isMobile:n,isAsksTable:!0})]})},M=Object(l.a)({container:{display:"flex",justifyContent:"space-between",margin:".5rem 0"},header:{color:"white",textAlign:"left",width:"100%",display:"flex",alignItems:"center"}}),_=function(e){var t=e.orderBook,n=e.isMobile,r=M();return Object(x.jsxs)("div",{className:r.container,children:[Object(x.jsx)("div",{className:r.header,children:"Order Book"}),!n&&Object(x.jsx)(T,{orderBook:t}),Object(x.jsx)("div",{className:r.header})]})},D=Object(l.a)({container:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginTop:"1rem"},button:{width:"8rem",height:"2rem",color:"white",borderRadius:"4px",border:"none"},violetButton:{composes:"$button",backgroundColor:j.violet},greenButton:{composes:"$button",backgroundColor:j.positive1},disconnectContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},disconnectText:{color:"white"}}),S=function(e){var t=e.disconnectedOnBlur,n=e.reconnect,r=e.toggleFeed,i=D();return Object(x.jsxs)("div",{className:i.container,children:[t&&Object(x.jsxs)("div",{className:i.disconnectContainer,children:[Object(x.jsx)("button",{className:i.greenButton,onClick:n,children:"Reconnect"}),Object(x.jsx)("div",{className:i.disconnectText,children:"The feed has been disconnected due to inactivity."})]}),!t&&Object(x.jsx)("button",{className:i.violetButton,onClick:r,children:"Toggle feed"})]})};!function(e){e.pi_ethusd="PI_ETHUSD",e.pi_xbtusd="PI_XBTUSD"}(O||(O={})),function(e){e.subscribe="subscribe",e.unsubscribe="unsubscribe"}(w||(w={}));var A="update_orderbook",E="toggle_feed",I="close_subscription",z="subscribe",F=(O.pi_ethusd,n(13)),L=n.n(F),R=function(){var e=Object(i.useState)({}),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(i.useRef)(),c=function(e){if(e.data.type===A)r(e.data.orderBook)};return Object(i.useEffect)((function(){o.current=L()(),o.current.onmessage=c}),[]),{orderBook:n,worker:o.current}};function W(e,t){var n,r;return function(){var i=arguments,o=this;return n||(n=!0,setTimeout((function(){return n=!1}),t),r=e.apply(o,i)),r}}var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=function(){return window.innerWidth<720},n=Object(i.useState)(t()),r=Object(a.a)(n,2),o=r[0],c=r[1];return Object(i.useEffect)((function(){var n=W((function(){c(t())}),e);return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e]),o},J=function(){var e=d(),t=U(),n=Object(i.useState)(!1),r=Object(a.a)(n,2),o=r[0],c=r[1],s=Object(i.useState)(O.pi_ethusd),l=Object(a.a)(s,2),u=l[0],b=l[1],j=R(),f=j.worker,p=j.orderBook,h=function(){o||(f.postMessage({type:I}),c(!0))};return Object(i.useEffect)((function(){return window.addEventListener("visibilitychange",h),function(){window.removeEventListener("visibilitychange",h)}})),Object(x.jsxs)("div",{className:e.container,children:[Object(x.jsx)(_,{orderBook:p,isMobile:t}),Object(x.jsx)(C,{orderBook:p,isMobile:t}),Object(x.jsx)(S,{disconnectedOnBlur:o,reconnect:function(){c(!1),f.postMessage({type:z,productId:u})},toggleFeed:function(){var e=u===O.pi_ethusd?O.pi_xbtusd:O.pi_ethusd;f.postMessage({type:E,productId:e}),b(e)}})]})},P=function(){return Object(x.jsx)(J,{})};s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d9009452.chunk.js.map