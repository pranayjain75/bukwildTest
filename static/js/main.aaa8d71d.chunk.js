(this["webpackJsonpmarquee-test"]=this["webpackJsonpmarquee-test"]||[]).push([[0],[,,,,function(e,t,s){},,function(e){e.exports=JSON.parse('{"pages":[{"title":"Industries","slug":"industries","blocks":[{"type":"marquee","headline":"Industries","subhead":"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.","cta":"Vestibulum id ligula porta felis euismod semper.","background":"slide_one.jpg"}]},{"title":"Services","slug":"services","blocks":[{"type":"marquee","headline":"Services","subhead":"Cras mattis consectetur purus sit amet fermentum.","cta":"Donec id elit non mi porta gravida at eget metus.","background":"slide_two.jpg"}]},{"title":"About Us","slug":"about-us","blocks":[{"type":"marquee","headline":"Maecenas sed diam eget risus varius blandit sit amet non magna","subhead":"Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.","cta":"Nullam quis risus eget urna mollis ornare vel eu leo.","background":"slide_three.jpg"}]}]}')},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(5),i=s.n(c),r=(s(11),s(2)),u=(s.p,s(12),s.p+"static/media/abc_logo.c72ca4e0.svg"),l=s(0),o=function(e){return Object(l.jsxs)("div",{className:"row app-header",children:[Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:Object(l.jsx)("img",{src:u,alt:"Logo",className:"app-logo"})})}),Object(l.jsx)("div",{className:"header-btn",onClick:function(){},children:Object(l.jsx)("span",{className:"header-btn-text",children:"Contact Us"})})]})},d=(s(4),s.p+"static/media/arrow.bdcff81d.png"),b=function(e){return Object(l.jsxs)("div",{className:"cta-container row justify-space-between",children:[Object(l.jsx)("div",{className:"flex-one",children:Object(l.jsx)("span",{className:"cta-text",children:null===e||void 0===e?void 0:e.text})}),Object(l.jsx)("div",{className:"flex-one justify-center",children:Object(l.jsxs)("span",{children:["LET'S TALK.",Object(l.jsx)("img",{src:d,className:"cta-arrow",alt:"next"})]})})]})},j=function(e){var t=e.pageContent.filter((function(t){return t.title==e.currentPage}));return console.log("Hello",t),t.length>0?Object(l.jsx)("div",{className:"marquee-container",style:{backgroundImage:"url(".concat("../assets/currentMarquee[0].blocks[0].background",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"#d4d4d4"},children:Object(l.jsxs)("div",{className:"container ",children:[Object(l.jsx)("div",{className:"heading-container",children:Object(l.jsx)("p",{className:"heading",children:t[0].blocks[0].headline})}),Object(l.jsx)("div",{className:"sub-heading-container",children:Object(l.jsx)("p",{className:"sub-heading",children:t[0].blocks[0].subhead})}),Object(l.jsx)(b,{text:t[0].blocks[0].cta,img:""})]})}):null},m=function(e){return Object(l.jsx)("div",{className:"menu-item-container",children:e.pageContent.map((function(t,s){return Object(l.jsx)("div",{className:"item-text ".concat((null===e||void 0===e?void 0:e.currentPage)===t.title?"selected":""),onClick:function(){e.setCurrentPage(t.title)},children:t.title})}))})},g=function(e){var t=e.pageContent,s=Object(n.useState)("Industries"),a=Object(r.a)(s,2),c=a[0],i=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(m,{pageContent:t,currentPage:c,setCurrentPage:i}),Object(l.jsx)(j,{pageContent:t,currentPage:c})]})},p=s(6);var h=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){a(p.pages)}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(g,{pageContent:s})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,15)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),x()}],[[14,1,2]]]);
//# sourceMappingURL=main.aaa8d71d.chunk.js.map