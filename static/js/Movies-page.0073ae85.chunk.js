(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{50:function(e,t,n){"use strict";var r=n(55),a=n.n(r),c=n(56),o=n(57),i=n.n(o);i.a.defaults.baseURL="https://api.themoviedb.org/3";var u="a15f9b7f27bd19853a969d23685d4c4f",s=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l("/movie/".concat(t,"/reviews?api_key=").concat(u)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",i.a.get(t).then((function(e){return e.data})));case 4:throw e.prev=4,e.t0=e.catch(0),e.t0;case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}();t.a={fetchPopularFilms:function(){return fetch("".concat("https://api.themoviedb.org/3","/trending/movie/day?api_key=").concat(u)).then((function(e){return e.json()}))},fetchFilmDetails:function(e){return l("/movie/".concat(e,"?api_key=").concat(u))},fetchFilmWithQuery:function(e){return l("/search/movie?api_key=".concat(u,"&query=").concat(e,"&page=1&include_adult=false"))},fetchFilmActors:function(e){return l("/movie/".concat(e,"/credits?api_key=").concat(u))},fetchFilmReviews:s}},58:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.message;return a.a.createElement("div",null," ",t)}},59:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(9);t.a=function(e){var t=e.films,n=e.location;return a.a.createElement("ul",{className:"popularFilmList"},t.map((function(e){var t=e.id,r=e.title;return a.a.createElement("li",{key:t},a.a.createElement(c.b,{to:{pathname:"/movies/".concat(t),state:{from:n}}},r))})))}},87:function(e,t,n){"use strict";var r=n(88),a=n(13);function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!==typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),n(decodeURIComponent(a),c,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[c(t,e),"[",r,"]"].join(""):[c(t,e),"[",c(r,e),"]=",c(n,e)].join("")};case"bracket":return function(t,n){return null===n?c(t,e):[c(t,e),"[]=",c(n,e)].join("")};default:return function(t,n){return null===n?c(t,e):[c(t,e),"=",c(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return c(r,t);if(Array.isArray(a)){var o=[];return a.slice().forEach((function(e){void 0!==e&&o.push(n(r,e,o.length))})),o.join("&")}return c(r,t)+"="+c(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},88:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},90:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,"default",(function(){return O}));var o=n(51),i=n(52),u=n(54),s=n(53),l=n(0),f=n.n(l),p=n(14),h=n.n(p),m=(n(18),n(50)),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={value:""},e.handleChange=function(t){var n=t.target;e.setState({value:n.value})},e.handleSubmit=function(t){var n=e.state.value;t.preventDefault(),e.props.onSubmit(n),e.setState({value:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.value;return f.a.createElement("form",{onSubmit:this.handleSubmit},f.a.createElement("input",{type:"text",value:e,onChange:this.handleChange,placeholder:"Enter film name",autoFocus:!0}),f.a.createElement("button",{type:"submit"},"Search"))}}]),n}(l.Component),d=n(87),y=n.n(d);function b(e){return y.a.parse(e)}var g=n(58),j=n(59),O=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={error:null,loading:!1,filmsSearch:[],value:""},e.fetchFilms=function(t){e.setState({loading:!0,value:t}),m.a.fetchFilmWithQuery(t).then((function(t){return e.setState({filmsSearch:t.results})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1})}))},e.handleChangeQuery=function(t){e.props.history.push(c(c({},e.props.location),{},{search:"query=".concat(t)}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=b(this.props.location.search).query;e&&this.fetchFilms(e)}},{key:"componentDidUpdate",value:function(e,t){var n=b(e.location.search).query,r=b(this.props.location.search).query;n!==r&&this.fetchFilms(r)}},{key:"render",value:function(){var e=this.state,t=e.filmsSearch,n=e.loading,r=e.error,a=e.value,c=this.props,o=(c.match,c.location);return f.a.createElement(f.a.Fragment,null,f.a.createElement(v,{onSubmit:this.handleChangeQuery}),n&&f.a.createElement(h.a,{type:"ThreeDots",color:"#f5f505",height:50,width:100,timeout:3e3}),r&&f.a.createElement(g.a,{message:"Whoops ".concat(r.message)}),0===t.length&&a&&f.a.createElement("p",null,"Not found"),t&&f.a.createElement(j.a,{films:t,location:o}))}}]),n}(l.Component)}}]);
//# sourceMappingURL=Movies-page.0073ae85.chunk.js.map