(this["webpackJsonpmarquee-test"]=this["webpackJsonpmarquee-test"]||[]).push([[0],[,,,,function(e,t,s){},,function(e){e.exports=JSON.parse('{"pages":[{"title":"Industries","slug":"industries","blocks":[{"type":"marquee","headline":"Industries","subhead":"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.","cta":"Vestibulum id ligula porta felis euismod semper.","background":"slide_one.jpg"}]},{"title":"Services","slug":"services","blocks":[{"type":"marquee","headline":"Services","subhead":"Cras mattis consectetur purus sit amet fermentum.","cta":"Donec id elit non mi porta gravida at eget metus.","background":"slide_two.jpg"}]},{"title":"About Us","slug":"about-us","blocks":[{"type":"marquee","headline":"Maecenas sed diam eget risus varius blandit sit amet non magna","subhead":"Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.","cta":"Nullam quis risus eget urna mollis ornare vel eu leo.","background":"slide_three.jpg"}]}]}')},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(5),i=s.n(c),r=(s(11),s(2)),l=(s.p,s(12),s.p+"static/media/abc_logo.c72ca4e0.svg"),u=s(0),o=function(e){return Object(u.jsxs)("div",{className:"row app-header",children:[Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:l,alt:"Logo",className:"app-logo"})})}),Object(u.jsx)("div",{className:"header-btn",onClick:function(){},children:Object(u.jsx)("span",{className:"header-btn-text",children:"Contact Us"})})]})},d=(s(4),s.p+"static/media/arrow.bdcff81d.png"),j=function(e){return Object(u.jsxs)("div",{className:"cta-container row justify-space-between",children:[Object(u.jsx)("div",{className:"flex-one",children:Object(u.jsx)("span",{className:"cta-text",children:null===e||void 0===e?void 0:e.text})}),Object(u.jsx)("div",{className:"flex-one justify-center",children:Object(u.jsxs)("span",{children:["LET'S TALK.",Object(u.jsx)("img",{src:d,className:"cta-arrow",alt:"next"})]})})]})},b=s.p+"static/media/slide_one.df407357.jpg",m=s.p+"static/media/slide_two.b7b871cc.jpg",g=s.p+"static/media/slide_three.25c6c4ee.jpg",p=function(e){var t=e.pageContent.filter((function(t){return t.title==e.currentPage}));if(console.log("Hello",t),t.length>0){var s;switch(t[0].blocks[0].background){case"slide_one.jpg":s=b;break;case"slide_two.jpg":s=m;break;case"slide_three.jpg":s=g}return Object(u.jsx)("div",{className:"marquee-container",style:{backgroundImage:"url('".concat(s,"')"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"#d4d4d4"},children:Object(u.jsxs)("div",{className:"container ",children:[Object(u.jsx)("div",{className:"heading-container",children:Object(u.jsx)("p",{className:"heading",children:t[0].blocks[0].headline})}),Object(u.jsx)("div",{className:"sub-heading-container",children:Object(u.jsx)("p",{className:"sub-heading",children:t[0].blocks[0].subhead})}),Object(u.jsx)(j,{text:t[0].blocks[0].cta,img:""})]})})}return null},h=function(e){return Object(u.jsx)("div",{className:"menu-item-container",children:e.pageContent.map((function(t,s){return Object(u.jsx)("div",{className:"item-text ".concat((null===e||void 0===e?void 0:e.currentPage)===t.title?"selected":""),onClick:function(){e.setCurrentPage(t.title)},children:t.title})}))})},x=function(e){var t=e.pageContent,s=Object(a.useState)("Industries"),n=Object(r.a)(s,2),c=n[0],i=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o,{}),Object(u.jsx)(h,{pageContent:t,currentPage:c,setCurrentPage:i}),Object(u.jsx)(p,{pageContent:t,currentPage:c})]})},f=s(6);var O=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){n(f.pages)}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(x,{pageContent:s})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,15)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),v()}],[[14,1,2]]]);
//# sourceMappingURL=main.375ffe79.chunk.js.map