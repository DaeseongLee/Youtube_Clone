(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{23:function(e,t,a){e.exports={videos:"videoList_videos__Z4F_x"}},3:function(e,t,a){e.exports={container:"videoItem_container__3V1Ra",list:"videoItem_list__1vD1f",grid:"videoItem_grid__2URKZ",video:"videoItem_video__MOZ30",thumbnail:"videoItem_thumbnail__2-XXj",metadata:"videoItem_metadata__2VBSW",title:"videoItem_title__1iDV9",channelTitle:"videoItem_channelTitle__dOcdo"}},32:function(e,t,a){},4:function(e,t,a){e.exports={header:"headerSearch_header__3-7GR",logo:"headerSearch_logo__j7DT1",logoImg:"headerSearch_logoImg__2xHbb",logoTitle:"headerSearch_logoTitle__2lBuk",input:"headerSearch_input__2Tw6Y",button:"headerSearch_button__I5Pj2",searchImg:"headerSearch_searchImg__3mA4G"}},5:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",video:"app_video__3GKwE",list:"app_list__2we4s"}},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a.n(c),s=a(22),o=a.n(s),r=(a(32),a(11)),l=a(5),u=a.n(l),d=a(4),p=a.n(d),h=function(e){var t=e.onSearch,a=Object(c.useRef)(),i=function(){var e=a.current.value;t(e)};return Object(n.jsxs)("header",{className:p.a.header,children:[Object(n.jsxs)("div",{className:p.a.logo,children:[Object(n.jsx)("i",{className:"fab fa-youtube ".concat(p.a.logoImg)}),Object(n.jsx)("span",{className:p.a.logoTitle,children:"Youtube"})]}),Object(n.jsx)("input",{ref:a,type:"search",className:p.a.input,onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(n.jsx)("button",{className:p.a.button,children:Object(n.jsx)("i",{className:"fas fa-search ".concat(p.a.searchImg),onClick:function(){i()}})})]})},j=a(9),b=a.n(j),m=function(e){var t=e.video,a=e.video.snippet;return Object(n.jsxs)("section",{className:b.a.video,children:[Object(n.jsx)("iframe",{type:"text/html",title:"youtuve video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(n.jsx)("h2",{children:a.title}),Object(n.jsx)("h3",{children:a.channelTitle}),Object(n.jsx)("pre",{className:b.a.description,children:a.description})]})},_=a(3),v=a.n(_),O=Object(c.memo)((function(e){var t=e.video,a=e.video.snippet,c=a.title,i=a.channelTitle,s=a.thumbnails,o=e.onClickVideo,r="list"===e.displayType?v.a.list:v.a.grid;return console.log(r),Object(n.jsx)("li",{className:"".concat(v.a.container," ").concat(r),onClick:function(){o(t)},children:Object(n.jsxs)("div",{className:v.a.video,children:[Object(n.jsx)("img",{src:s.medium.url,alt:"thumbnail",className:v.a.thumbnail}),Object(n.jsxs)("div",{className:v.a.metadata,children:[Object(n.jsx)("p",{className:v.a.title,children:c}),Object(n.jsx)("p",{className:v.a.channelTitle,children:i})]})]})})})),f=a(23),x=a.n(f),y=function(e){var t=e.videos,a=e.onClickVideo,c=e.displayType;return Object(n.jsx)("ul",{className:x.a.videos,children:t.map((function(e){return Object(n.jsx)(O,{video:e,onClickVideo:a,displayType:c},e.id)}))})},g=function(e){var t=e.youtube,a=Object(c.useState)([]),i=Object(r.a)(a,2),s=i[0],o=i[1],l=Object(c.useState)(null),d=Object(r.a)(l,2),p=d[0],j=d[1];Object(c.useEffect)((function(){t.mostPopular().then(o)}),[t]);var b=Object(c.useCallback)((function(e){j(null),t.search(e).then(o)}),[t]);return Object(n.jsxs)("div",{className:u.a.app,children:[Object(n.jsx)(h,{onSearch:b}),Object(n.jsxs)("div",{className:u.a.content,children:[p&&Object(n.jsx)("div",{className:u.a.video,children:Object(n.jsx)(m,{video:p})}),Object(n.jsx)("div",{className:u.a.list,children:Object(n.jsx)(y,{videos:s,onClickVideo:function(e){j(e)},displayType:p?"list":"grid"})})]})]})},N=(a(33),a(12)),I=a(6),k=a.n(I),w=a(10),S=a(24),T=a(25),C=function(){function e(t){Object(S.a)(this,e),this.youtube=t}return Object(T.a)(e,[{key:"mostPopular",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResult:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResult:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),D=a(26),R=new C(a.n(D).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyDhdmGBAnHZbTzO2GWdEEw6SLl45NAZ0q4"}}));o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(g,{youtube:R})}),document.getElementById("root"))},9:function(e,t,a){e.exports={video:"videoDetail_video__8u4qB",description:"videoDetail_description__2SIPy"}}},[[54,1,2]]]);
//# sourceMappingURL=main.5c1bb593.chunk.js.map