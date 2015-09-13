/*! formstone v0.8.7 [asap.js] 2015-09-13 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(c){q||b.support.history&&(o=b.$body,q=a.extend(s,c),q.$container=a(q.container),q.render===a.noop&&(q.render=k),q.transitionOut===a.noop&&(q.transitionOut=function(){return a.Deferred().resolve()}),y=window.location.href,t.on(w.popState,h),e())}function e(){o&&!o.hasClass(x.base)&&o.on(w.click,s.selector,g).addClass(x.base)}function f(a){q&&b.support.history?a&&i(a):window.location.href=a}function g(a){var b=a.currentTarget;a.which>1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||window.location.protocol!==b.protocol||window.location.host!==b.host||"_blank"===b.target||(!b.hash||b.href.replace(b.hash,"")!==window.location.href.replace(location.hash,"")&&b.href!==window.location.href+"#")&&(v.killEvent(a),a.stopImmediatePropagation(),b.href===y||i(b.href))}function h(a){var b=a.originalEvent.state;b&&(q.modal&&0===z&&b.url&&!b.initial?window.location.href=b.url:b.url!==y&&(q.force?i(b.url):(t.trigger(w.requested,[!0]),j(b.url,b.hash,b.data,b.scroll,!1))))}function i(b){p&&p.abort(),t.trigger(w.requested,[!1]),q.transitionOutDeferred=q.transitionOut.apply(u,[!1]);var c=b.indexOf("?"),d=b.indexOf("#"),e={},f="",g=b,h="User error",i=null,k=a.Deferred();d>-1&&(f=b.slice(d),g=b.slice(0,d)),c>-1&&(e=n(b.slice(c+1,d>-1?d:b.length)),g=b.slice(0,c)),e[q.requestKey]=!0,p=a.ajax({url:g,data:e,dataType:"json",cache:q.cache,xhr:function(){var a=new u.XMLHttpRequest;return a.addEventListener("progress",function(a){if(a.lengthComputable){var b=a.loaded/a.total;t.trigger(w.progress,[b])}},!1),a},success:function(c){i="string"===a.type(c)?a.parseJSON(c):c,c.location&&(b=c.location),k.resolve()},error:function(a,b,c){h=c,k.reject()}}),a.when(k,q.transitionOutDeferred).done(function(){j(b,f,i,q.jump?0:!1,!0)}).fail(function(){t.trigger(w.failed,[h])})}function j(b,d,e,f,g){if(t.trigger(w.loaded,[e]),a.analytics!==c&&a.analytics("pageview"),l(e),q.render.call(this,e,d),y=b,g?(history.pushState({url:y,data:e,scroll:f,hash:d},"state-"+y,y),z++):l(e),t.trigger(w.rendered,[e]),""!==d){var h=a(d);h.length&&(f=h.offset().top)}f!==!1&&t.scrollTop(f)}function k(b){if("undefined"!==a.type(b)){var c;for(var d in b)b.hasOwnProperty(d)&&(c=a(d),c.length&&c.html(b[d]))}}function l(b){var c=[];if("undefined"!==a.type(b)){var d;for(var e in b)b.hasOwnProperty(e)&&(d=a(e),d.length&&(c[e]=d.html()))}history.replaceState({url:y,data:c,scroll:t.scrollTop()},"state-"+y,y)}function m(a){var b=history.state,c=[];b&&b.data&&(c=b.data),y=a,l(c)}function n(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}var o,p,q,r=b.Plugin("asap",{utilities:{_initialize:d,load:f,replace:m},events:{failed:"failed",loaded:"loaded",popState:"popstate",progress:"progress",requested:"requested",rendered:"rendered"}}),s={cache:!0,force:!1,jump:!0,modal:!1,selector:"a",render:a.noop,requestKey:"fs-asap",transitionOut:a.noop},t=b.$window,u=t[0],v=r.functions,w=r.events,x=r.classes.raw,y="",z=0}(jQuery,Formstone);