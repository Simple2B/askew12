(this.webpackJsonpfinal_front=this.webpackJsonpfinal_front||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/askew_search_logo.9e56b7ea.png"},26:function(e,t,a){e.exports=a(48)},31:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=a(3),l=a(2),u=a(5),i=a(4),p=(a(31),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:""},e.onSearchChange=function(t){var a=t.target.value;e.setState({searchInput:a}),e.props.onSearchChange(a)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{className:"form-control-lg askew-search-bar",type:"search",placeholder:"Our database is yours",onChange:this.onSearchChange})}}]),a}(r.a.Component)),m=a(10),h=(a(17),a(34),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.chart;return r.a.createElement("div",{className:"image-box"},r.a.createElement(m.a,{src:e,zoomSrc:e,className:"image-zoom-box",moveType:"drag"}))}}]),a}(r.a.Component)),f=(a(35),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.code;return r.a.createElement("div",{className:"pl-3"},r.a.createElement("div",{className:"code-block"},r.a.createElement("pre",null,r.a.createElement("code",null,"".concat(e)))))}}]),a}(r.a.Component)),d=(a(36),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.description_picture;return r.a.createElement("div",{className:"image-box"},r.a.createElement(m.a,{src:e,zoomSrc:e,className:"image-zoom-box",moveType:"drag"}))}}]),a}(r.a.Component)),v=(a(37),a(7)),b=(a(38),function(e){var t=e.sample,a=t.code,n=t.chart,c=t.description_picture,s=t.language;return r.a.createElement("div",{className:"code-meta"},r.a.createElement("div",null,r.a.createElement(f,{code:a})),r.a.createElement("div",{className:"border-left pl-3 pr-3"},r.a.createElement(v.d,null,r.a.createElement(v.b,null,r.a.createElement(v.a,null,r.a.createElement("h5",null,"Code Flowchart")),r.a.createElement(v.a,null,r.a.createElement("h5",null,"Word Flowchart"))),r.a.createElement(v.c,null,r.a.createElement(h,{chart:n})),r.a.createElement(v.c,null,r.a.createElement(d,{description_picture:c,language:s})))))}),E=a(6),g=a.n(E),k=a(11),w=function(){function e(){Object(o.a)(this,e),this._apiBase="http://".concat(window.location.hostname,":8000/api")}return Object(l.a)(e,[{key:"getResource",value:function(){var e=Object(k.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Couldn't fetch ".concat(t,", received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllSamples",value:function(){var e=Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/samples/");case 2:return t=e.sent,console.log(t,typeof t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCodeSampleById",value:function(){var e=Object(k.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/samples/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),O=a(19),j=a.n(O),y=(a(40),function(){return r.a.createElement("div",{className:"askew-logo-and-header"},r.a.createElement("h1",{className:"askew-title"},"Askew13"),r.a.createElement("h5",{className:"askew-slogan"},"Some average coding website"),r.a.createElement("img",{className:"askew-logo",src:j.a,alt:"search-png"}))}),C=a(20),S=a.n(C),N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{targetId:"askew-header",behavior:"smooth",buttonBackgroundColor:"#58d9ad",iconType:"chevron-up",style:{fontSize:"24px"}})}}]),a}(n.Component),x=a(23),I=a.n(x),_=(a(47),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).apiService=new w,e.state={results:[],searchInput:""},e.onSearchChange=function(t){e.setState({searchInput:t}),console.log("Search input: ",t)},e.updateResults(),e}return Object(l.a)(a,[{key:"updateResults",value:function(){var e=this;return this.apiService.getAllSamples().then((function(t){e.setState({results:t})}))}}]),Object(l.a)(a,[{key:"search",value:function(){var e=this;return this.state.searchInput.length<4?[]:this.state.results.filter((function(t){return t.title.toLowerCase().indexOf(e.state.searchInput.toLowerCase())>-1}))}},{key:"render",value:function(){var e=this.search(),t=e.length?e[0]:null;return r.a.createElement("div",{className:"askew-react-app"},r.a.createElement("div",{className:"askew-header",id:"askew-header"},r.a.createElement(y,null),r.a.createElement(p,{onSearchChange:this.onSearchChange}),r.a.createElement("div",{className:"scroll-button-container"},t?r.a.createElement(I.a,{selector:"#askew-code-sample"},r.a.createElement("button",{className:"btn btn-outline-info scroll-btn shadow-none"},"Check it out!")):r.a.createElement("div",null)),r.a.createElement(N,null)),r.a.createElement("div",{id:"askew-code-sample"},t?r.a.createElement(b,{sample:t}):r.a.createElement("div",null)))}}]),a}(r.a.Component));s.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.9fe74e72.chunk.js.map