!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=43)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(21);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(22),a=r(23);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=React},function(e,t){e.exports=lodash},,function(e,t,r){var n=r(24),a=r(25),o=r(26);e.exports=function(e,t){return n(e)||a(e,t)||o()}},,,,function(e,t,r){"use strict";var n=r(4),a=r.n(n),o=r(5),c=r.n(o),i=r(6),s=r.n(i),l=r(7),u=r.n(l),p=r(1),f=r.n(p),d=r(0),m=r(9);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return u()(this,r)}}var h=function(e){s()(r,e);var t=b(r);function r(){return a()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){return Object(d.createElement)("div",{className:"shield red"},Object(d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18.77",height:"21.7",viewBox:"0 0 18.77 21.7"},Object(d.createElement)("path",{className:"path",d:"M1,11.24V1.52a44.9,44.9,0,0,0,8.33,1h.12a44.79,44.79,0,0,0,8.32-1h0v9.72",transform:"translate(0.02 -0.28)",fill:"none",stroke:"#a51417",strokeMiterlimit:"10",strokeWidth:"2"}),Object(d.createElement)("path",{className:"path-second",d:"M1,11.24v4.64H1a2.52,2.52,0,0,0,.61,1.61,4.54,4.54,0,0,0,1.11.83c.13.08.27.15.43.23l.38.16h0l.56.24,5.29,2h0l5.29-2,.55-.24h0l.38-.16.44-.23a4.48,4.48,0,0,0,1.1-.83,2.52,2.52,0,0,0,.61-1.61h0V11.24",transform:"translate(0.02 -0.28)",fill:"none",stroke:"#a51417",strokeMiterlimit:"10",strokeWidth:"2"}),Object(d.createElement)("path",{className:"path-small",d:"M14,11.31V6h0a23.85,23.85,0,0,1-4.54.53H9.35A24,24,0,0,1,4.8,6v5.31",transform:"translate(0.02 -0.28)",fill:"none",stroke:"#a51417",strokeMiterlimit:"10",strokeWidth:"2.11"}),Object(d.createElement)("path",{className:"path-small-second",d:"M13.93,11.31v2.53h0a1.41,1.41,0,0,1-.33.88,2.72,2.72,0,0,1-.61.46l-.24.12-.2.09h0l-.31.12-2.88,1.1h0l-2.89-1.1-.31-.12h0L6,15.3l-.24-.12a3.37,3.37,0,0,1-.61-.46,1.32,1.32,0,0,1-.32-.88h0V11.31",transform:"translate(0.02 -0.28)",fill:"none",stroke:"#a51417",strokeMiterlimit:"10",strokeWidth:"2.11"})))}}]),r}(m.Component);t.a=h},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){!function(){e.exports=this.wp.coreData}()},,function(e,t){!function(){e.exports=this.wp.date}()},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){!function(){e.exports=this.wp.data}()},,,,,,,,,,,,function(e,t){!function(e,t){"use strict";var r=t(".content-area"),n=t(".accordion-header"),a=t(".accordion-content"),o=function(e,r){r.each((function(){t(this).attr("aria-selected","false")})),e.attr({"aria-selected":"true"})},c=function(e,t){var r=e.next();o(e,t),r.hasClass("active")?(r.removeClass("active"),e.attr("aria-expanded","false"),r.attr("aria-hidden","true")):(r.addClass("active"),e.attr("aria-expanded","true"),r.attr("aria-hidden","false"))};n.each((function(e){t(this).attr({id:"accordion-header-"+e,role:"tab","aria-controls":"accordion-header-"+e,"aria-selected":"false",tabindex:"0"}),t(this).attr("aria-expanded")||t(this).attr({"aria-expanded":"false"})})),a.each((function(e){t(this).attr({id:"accordion-content-"+e,role:"tabpanel","aria-labelledby":"accordion-header-"+e,"aria-hidden":"true"})})),r.each((function(){var e=t(this),r=e.find(".accordion-header");e.attr({role:"tablist","aria-multiselectable":"true"}),r.each((function(e){var n=t(this);0===e&&n.attr("tabindex","0"),n.on("click",(function(){c(t(this),r)})),n.on("keydown",(function(e){!function(e,t,r){var n=t.which,a=!!e.next().next().is("dt")&&e.next().next(),o=!!e.prev().prev().is("dt")&&e.prev().prev(),i=e.parent().find("dt:first"),s=e.parent().find("dt:last");switch(n){case 37:case 38:t.preventDefault(),t.stopPropagation(),o?o.focus():s.focus();break;case 39:case 40:t.preventDefault(),t.stopPropagation(),a?a.focus():i.focus();break;case 36:t.preventDefault(),t.stopPropagation(),i.focus();break;case 35:t.preventDefault(),t.stopPropagation(),s.focus();break;case 13:case 32:t.preventDefault(),t.stopPropagation(),c(e,r)}}(t(this),e,r)})),n.on("focus",(function(){o(t(this),r)}))}))}));var i=window.location.search.replace(/%20/g," "),s=/(openAccordion=)(.*?)(&|$)/.exec(i);if(s){var l=s[2];t(".accordion-header").each((function(){var e=t(this);e.find(".accordion-header-content").html()===l&&(e.click(),e[0].scrollIntoView({block:"center"}))}))}}(window,window.jQuery)},,function(e,t,r){"use strict";r.r(t);r(41);var n=r(0),a=r(2),o=r.n(a),c=r(12),i=r.n(c),s=r(10),l=r(27),u=r.n(l),p=r(28),f=r(29),d=r(18),m=r(16),b=r(17),h=r.n(b),y=r(3),v=r.n(y),g=r(8),O=r(20);function j(e){var t=e.post,r=e.postLayout,a=e.renderFeaturedImage,o=e.imageClasses,c=e.featuredImage,i=e.displayCategory,s=e.cats,l=e.postLink,u=e.title,p=e.displayAuthor,f=e.displayPostDate,d=e.displayExcerpt,m=e.excerpt,b=Object(O.__experimentalGetSettings)().formats.date,h=a?" has-post-thumbnail":"";return Object(n.createElement)("article",{className:"entry post-"+t.id+" post type-post status-publish format-standard hentry"+h},a&&("list"===r||"grid"===r)&&Object(n.createElement)("div",{className:o},Object(n.createElement)("a",{href:t.link,rel:"noreferrer noopener"},c)),Object(n.createElement)("header",{className:"entry-header"},i&&Object(n.createElement)("span",{className:"categories"},s),Object(n.createElement)("h2",{className:"entry-title"},Object(n.createElement)("a",{href:l,rel:"noreferrer noopener"},u||Object(g.__)("(no title)"),t.external_url?Object(n.createElement)("span",{className:"dashicons dashicons-external"},Object(n.createElement)("span",{className:"screen-reader-text"}," (Links to an external site)")):"")),p||f?Object(n.createElement)("div",{className:"entry-meta"},p&&""!==t.washu_author_info&&Object(n.createElement)("span",{className:"entry-author",dangerouslySetInnerHTML:{__html:"By "+t.washu_author_info}}),f&&t.date_gmt&&Object(n.createElement)("time",{dateTime:Object(O.format)("c",t.date_gmt),className:"entry-date"},Object(O.dateI18n)(b,t.date_gmt))):""),a&&"thumbnail"===r&&Object(n.createElement)("div",{className:o+" entry-thumbnail"},Object(n.createElement)("a",{href:t.link,rel:"noreferrer noopener"},c)),d&&Object(n.createElement)("div",{className:"entry-excerpt"},m))}function x(e){var t=e.displayPosts,r=e.atts,a=e.blockProps,c=void 0===a?{}:a,i=e.categoriesList,l=r.displayThumbnail,u=r.displayExcerpt,p=r.displayPostDate,f=r.displayAuthor,d=r.postLayout,m=r.columns,b=r.displayCategory,y=r.featuredImageAlign,g="grid"===d?" columns-"+m:"";return Object(n.createElement)("div",h()({className:"wp-block-latest-posts latest-posts-"+d+g},c),t.map((function(e,t){var r,a,c=Object(s.invoke)(e,["title","rendered","trim"]),m=e.excerpt.rendered,h=e.external_url?e.external_url:e.link,g=document.createElement("span");g.innerHTML=c,a=g.textContent||g.innerText||"";var O=null==i||null===(r=i.filter((function(t){return e.categories.includes(t.id)})))||void 0===r?void 0:r.map((function(e){return Object(n.createElement)("a",{key:e.id,href:e.link,dangerouslySetInnerHTML:{__html:e.name}})}));O.length>1&&(O=O.reduce((function(e,t){return[e,", ",t]})));var x=document.createElement("div");x.innerHTML=m,m=x.textContent||x.innerText||"";var E=e.featuredImageInfo,w=(E=void 0===E?{}:E).url,_=E.alt,P=v()(o()({"wp-block-latest-posts__featured-image":!0},"align".concat(y),!!y)),k=l&&w,N=Object(n.createElement)("img",{src:w,alt:_}),S=Object(n.createElement)(j,{key:t,post:e,postLayout:d,renderFeaturedImage:k,imageClasses:P,featuredImage:N,displayCategory:b,cats:O,postLink:h,title:a,displayAuthor:f,displayPostDate:p,displayExcerpt:u,excerpt:m});return"grid"===d?Object(n.createElement)("div",{key:t+"-div",className:"grid-item"},S):S})))}function E(e){var t=e.page,r=e.totalPages,a=e.setPage;return Object(n.createElement)("nav",{className:"washu-latest-posts-nav paging-navigation"},Object(n.createElement)("h3",{className:"screen-reader-text"},"Posts navigation"),Object(n.createElement)("div",{className:"nav-links"},Object(n.createElement)("div",{className:"nav-previous"},t>1?Object(n.createElement)("button",{onClick:function(){return a(t-1)},href:"#"},Object(n.createElement)("span",{className:"screen-reader-text"},"Previous Page")):null),Object(n.createElement)("div",{className:"nav-count"},Object(n.createElement)("span",{className:"current-page"},t)," ",Object(n.createElement)("span",{className:"of"},"of"),Object(n.createElement)("span",{className:"max-page"},r)),Object(n.createElement)("div",{className:"nav-next"},t<r?Object(n.createElement)("button",{onClick:function(){return a(t+1)},href:"#"},Object(n.createElement)("span",{className:"screen-reader-text"},"Next Page")):null)))}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={per_page:-1},k={per_page:-1};function N(e){var t=e.attributes,r=e.p,a=JSON.parse(t.reactAttributes),o=a.postsToShow,c=a.order,l=a.orderBy,b=a.categories,h=a.selectedAuthor,y=a.postLayout,v=a.totalPages,g=Object(n.useState)(r),O=i()(g,2),j=O[0],w=O[1],N={list:"large",thumbnail:"post_list_thumbnail",grid:"medium_large",carousel:"large"},S=Object(f.useSelect)((function(e){var t=e(d.store),r=t.getEntityRecords,n=t.getMedia,i=Object(s.isUndefined)(b)?[]:JSON.parse(b),u=r("postType","post",Object(s.pickBy)({categories:i,author:h,order:c,orderby:l,per_page:o,page:j},(function(e){return!Object(s.isUndefined)(e)})));return{latestPosts:Array.isArray(u)?u.map((function(e){if(!e.featured_media)return e;var t="grid"===y&&a.cropImages?"grid_thumbnail":N[y],r=n(e.featured_media),o=Object(s.get)(r,["media_details","sizes",t,"source_url"],null);o||(o=Object(s.get)(r,"source_url",null));var c={url:o,alt:null==r?void 0:r.alt_text};return _(_({},e),{},{featuredImageInfo:c})})):u}}),[y,o,c,l,b,h,j]).latestPosts,A=Object(n.useState)([]),M=i()(A,2),D=M[0],I=M[1],L=Object(n.useState)([]),T=i()(L,2),C=T[0],R=T[1],F=Object(n.useRef)();if(Object(n.useEffect)((function(){return F.current=!0,u()({path:Object(p.addQueryArgs)("/wp/v2/categories",P)}).then((function(e){F.current&&I(e)})).catch((function(){F.current&&I([])})),u()({path:Object(p.addQueryArgs)("/wp/v2/users",k)}).then((function(e){F.current&&R(e)})).catch((function(){F.current&&R([])})),function(){F.current=!1}}),[]),!(Array.isArray(S)&&S.length))return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"shield-medium"},Object(n.createElement)(m.a,null)),Object(n.createElement)(E,{page:j,totalPages:v,setPage:w}));var H=S.length>o?S.slice(0,o):S;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(x,{displayPosts:H,authorList:C,categoriesList:D,atts:a}),Object(n.createElement)(E,{page:j,totalPages:v,setPage:w}))}var S=window.wp;S.apiFetch.use((function(e,t){return e.path=e.path.replace("context=edit","context=view"),t(e)})),document.querySelectorAll(".washu-latest-posts-nav .nav-next > a").forEach((function(e){e.onclick=function(){var t=e.parentElement.parentElement.parentElement.parentElement;return S.element.render(Object(n.createElement)(N,{attributes:t.dataset,p:2}),t),!1}}))}]);