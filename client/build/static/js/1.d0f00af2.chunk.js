(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{114:function(e,t,i){},116:function(e,t,i){"use strict";i.r(t);var n=i(5),a=i(6),c=i(8),o=i(7),s=i(9),r=i(17),d=i(1),x=i.n(d),v=i(3),u=(i(114),[{src:"https://drive.google.com/uc?id=150T1nmn0-8BIvuFm0FPFYb0jh8EPBk__"},{src:"https://drive.google.com/uc?id=11In-qJZRHJbfd-kcOJAOo-LP7UsMnzsS"},{src:"https://drive.google.com/uc?id=1PBiLHsyRkqAapMZUzUOPxDCp6TUXdR5M"},{src:"https://drive.google.com/uc?id=1S8FHRiqGFSGWPkp8iPUx81Urv8g5VsWX"}]),h=function(e){function t(e){var i;return Object(n.a)(this,t),(i=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={activeIndex:0},i.next=i.next.bind(Object(r.a)(Object(r.a)(i))),i.previous=i.previous.bind(Object(r.a)(Object(r.a)(i))),i.goToIndex=i.goToIndex.bind(Object(r.a)(Object(r.a)(i))),i.onExiting=i.onExiting.bind(Object(r.a)(Object(r.a)(i))),i.onExited=i.onExited.bind(Object(r.a)(Object(r.a)(i))),i}return Object(s.a)(t,e),Object(a.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===u.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?u.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,i=u.map(function(t){return x.a.createElement(v.l,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},x.a.createElement("img",{src:t.src,alt:t.altText,width:"100%",height:"526"}),x.a.createElement(v.i,{captionText:t.caption,captionHeader:t.caption}))});return x.a.createElement("div",{className:"move"},x.a.createElement(v.h,{activeIndex:t,next:this.next,previous:this.previous},x.a.createElement(v.k,{items:u,activeIndex:t,onClickHandler:this.goToIndex}),i,x.a.createElement(v.j,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),x.a.createElement(v.j,{direction:"next",directionText:"Next",onClickHandler:this.next})))}}]),t}(d.Component);t.default=h}}]);
//# sourceMappingURL=1.d0f00af2.chunk.js.map