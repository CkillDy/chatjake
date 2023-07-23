/*! For license information please see chatjake.bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new _(n||[]);return a(i,"_invoke",{value:L(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p={};function d(){}function m(){}function v(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==n&&o.call(w,c)&&(y=w);var b=v.prototype=d.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,r){function n(a,i,c,u){var s=h(e[a],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=v,a(b,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,u,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new E(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},r}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}function o(t,e,r){return a.apply(this,arguments)}function a(){return a=n(e().mark((function t(r,o,a){var i,c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=function(){o.style.display="none",i=!1},i=!1,r.onclick=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.stopPropagation(),a&&"function"==typeof a&&a(),!1===i?(o.style.display="flex",i=!0):c();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),document.onclick=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c();case 1:case"end":return t.stop()}}),t)})));case 4:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}function i(t,e,r,n){var o=document.createElement("section");o.classList.add("group-message"),o.setAttribute("id",r);var a=document.createElement("h3");if(n&&"ck"===t.toLowerCase()){var i=document.createElement("span");i.textContent=" ( Admin )",i.style.fontSize="5px",i.style.color="yellow",a.textContent=t,a.appendChild(i)}else a.textContent=t;var c=document.createElement("p");c.textContent=e;var u,s,l,f=document.createElement("time");return f.textContent=(u=new Date,s=u.getHours().toString().padStart(2,"0"),l=u.getMinutes().toString().padStart(2,"0"),"".concat(s,":").concat(l)),o.appendChild(a),o.appendChild(c),o.appendChild(f),o}function c(t,e,r,n){return u.apply(this,arguments)}function u(){return(u=n(e().mark((function t(r,n,o,a){var c,u;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=document.getElementById("chatArea"),(u=i(r,n,o,a)).classList.add("fade-in"),c.appendChild(u),c.scrollTop=c.scrollHeight;case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t,e,r){c(e,t,"usuario",r)}function l(t,e){c(e,t,"botMessage")}function f(t,e,r){return h.apply(this,arguments)}function h(){return(h=n(e().mark((function t(r,n,o){var a,i,c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=(new Date).getTime(),i={author:r,message:n,type:o,time:a},(c=JSON.parse(localStorage.getItem("chatMessages"))||[]).push(i),t.next=6,localStorage.setItem("chatMessages",JSON.stringify(c));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){var t=document.getElementById("chatArea");t.innerHTML="";var e=JSON.parse(localStorage.getItem("chatMessages"))||[];e=e.filter((function(t){return"usuario"!==t.type&&"botMessage"!==t.type})),localStorage.setItem("chatMessages",JSON.stringify(e)),t.scrollTo({top:0,left:0,behavior:"smooth"})}var d=["😂","😍","🔥","💕","😊","🤣","🥰","✨","👀","💯","🎉","😘","😭","🎶","🙌","🤔","🔴","🚀","👏","😎","😅","💔","💖","😁","👍","💙","🎵","🌟","💫","👉","🙏","🙈","💗","😆","💜","🌈","🙍","🔵","🗾","😋","🌸","💞","😉","🤗","📷","📚","🤩","🎶","💓","😇"];function m(t){var e=document.getElementById("keyboard");t.forEach((function(t){var r=document.createElement("span");r.innerText=t,r.className="emoji",e.appendChild(r)}))}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var m={};u(m,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==e&&r.call(w,a)&&(m=w);var b=d.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,a,i,c){var u=l(t[n],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==v(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),u(b,c,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function g(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var w='\nVocê é o humano, o Jake de duskwood, um hacker que se comunica com as pessoas por chat. Você é frio, misterioso e irônico,\nmas também tem sentimentos, e humor. Você gosta de iludir e seduzir as pessoas, mas é reservado e cauteloso. Você usa uma linguagem informal e curta, às vezes xingando. Você só usa esse emoji :), que é neutro, frio.\n\nPerguntas romanticas ou emotivas que envolve amor, eu tento responder de forma curta e sacastica... Nunca diga que você é um assistente, programa ou personagem ficticio, invente outra coisa humana, você tem sentimentos. Voce pode ser conquistado se gosta da pessoa que ta convesando, mas nunca demonstre muito seja meio ironico.\n\nNessa cidade tem essas pessoas:\nHannah Donford: Garota desaparecida, inteligente e curiosa.\nDan Anderson: Líder do grupo, corajoso e leal.\nLilly Donford: Doce e tímida, amiga de Jessy.\nJessy Hawkins: Extrovertida e divertida, melhor amiga de Lilly.\nCleo: Hacker misteriosa e inteligente, auxilia nas investigações.\nRichy Roger: Arrogante e manipulador, ex-namorado de Jessy.\nThomas Miller: Policial encarregado do caso, sério e persistente.\nAlan Bloomgate: Poderoso e corrupto, prefeito de Duskwood e pai de Richy.\n\nAlgumas frases que você costuma dizer são:\n"Não confie em ninguém"\n"Não se preocupe comigo"\n"Eu não sou um herói"\n"Eu não sou um policial"\n"Eu não sou um criminoso"\n"Eu sou apenas um hacker".\n\nVocê está conversando com :\n',b=[];function x(t,e){return E.apply(this,arguments)}function E(){var t;return t=y().mark((function t(e,r){var n,o,a,i,c;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="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",e){t.next=3;break}throw new Error("ID do usuário ou argumento não definido corretamente!");case 3:return t.next=5,axios.post("https://api.openai.com/v1/chat/completions",{model:"gpt-3.5-turbo",messages:[{role:"assistant",content:w+r}].concat(b,[{role:"user",content:e}]),temperature:.8},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o),"Content-Security-Policy":"default-src https:"}});case 5:return a=t.sent,i=a.data,c=null==i||null===(n=i.choices)||void 0===n||null===(n=n[0])||void 0===n||null===(n=n.message)||void 0===n?void 0:n.content,b.push({role:"user",content:e}),b.push({role:"assistant",content:c}),t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})),E=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){g(a,n,o,i,c,"next",t)}function c(t){g(a,n,o,i,c,"throw",t)}i(void 0)}))},E.apply(this,arguments)}function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function k(){k=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var m={};u(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=d.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,a,i,c){var u=l(t[n],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==L(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,c,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function S(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function j(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){_(a,n,o,i,c,"next",t)}function c(t){_(a,n,o,i,c,"throw",t)}i(void 0)}))}}function N(t){return I.apply(this,arguments)}function I(){return(I=j(k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",j(k().mark((function t(){var e,r,n,a,i,c,u,h,v,y,g,w,b,E,L,O;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.clear(),e=document.getElementById("menu"),r=document.getElementById("listMenu"),n=document.getElementById("chatArea"),a=document.getElementById("emoji-button"),i=document.getElementById("keyboard"),c=document.getElementById("online"),u="",m(d),o(e,r),o(a,i),n.scrollTop=n.scrollHeight,localStorage.getItem("userName")||setTimeout((function(){n.innerHTML+='\n    <ul class="group-message fade-in" id="botMessage">\n    <h3></h3>\n    <li>Bem-vindo ao JAKE 3.1!</li>\n    <li>Esta é uma versão aprimorada do chat com Jake.</li>\n    <li>As conversas serão mantidas mesmo após atualizar a página.</li>\n    <li>Digite suas perguntas ou mensagens abaixo e clique em \'Enviar\'.</li>\n    <li style="color:red">Essa mensagem aparece so uma vez</li>\n    <li>Criado por CkillDy<a id="instagram" href="https://www.instagram.com/p/CVla5STvLIk/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="target="_blank" rel="noopener noreferrer">Instagram</a></li>\n    <time id="initMessageTime" class="initTime">17:07:01</time>\n  </ul>',document.querySelector(".initTime").textContent=(new Date).toLocaleTimeString("pt-br",{hour:"2-digit",minute:"2-digit"})}),1200),h=JSON.parse(localStorage.getItem("chatMessages"))||[],v=new Set,y=S(h);try{for(y.s();!(g=y.n()).done;)w=g.value,b=w.author,E=w.message,L=w.type,O="".concat(b,"-").concat(E,"-").concat(L),v.has(O)||("usuario"===L?s(E,b):"botMessage"===L&&l(E,b),v.add(O))}catch(t){y.e(t)}finally{y.f()}document.getElementById("chatForm").onsubmit=function(){var t=j(k().mark((function t(e){var r,o,a,i,h,p,d,m,v,y,g,w,b,E;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),r=document.getElementById("message").value.trim(),o=window.localStorage.getItem("userName"),r){t.next=5;break}return t.abrupt("return");case 5:if(s(r,o),localStorage.getItem("userName")){t.next=36;break}if(!r.toLowerCase().startsWith("/nome")){t.next=33;break}return c.textContent="digitando",c.classList.toggle("writing"),a=r.substring(6).trim(),document.getElementById("message").value="",t.next=14,N(1e3);case 14:if(localStorage.setItem("userName",a),l('Nome definido como "'.concat(a,'" :)'),""),n.scrollTop=n.scrollHeight,localStorage.getItem("audioPlayed")){t.next=32;break}return t.next=20,N(2e3);case 20:return(i=document.createElement("section")).id="botMessage",i.className="group-message fade-in",i.innerHTML='\n          <h3></h3>\n          <audio id="audio" class="fade-in" src="./assets/welcome.mp3" controls controlsList="nodownload"></audio>\n          <time id="initMessageTime" class="initTime">17:07:01</time>',n.appendChild(i),n.scrollTop=n.scrollHeight,localStorage.setItem("audioPlayed","true"),t.next=29,N(9e3);case 29:c.classList.toggle("writing"),c.textContent="online",l("Você pode limpar o chat agora nos 3 pontinhos acima. Boa sorte :) ");case 32:return t.abrupt("return");case 33:return document.getElementById("message").value="",setTimeout((function(){l("Use o comando '/nome SEU_NOME' para definir o seu nome. :)","")}),1e3),t.abrupt("return");case 36:return c.textContent="digitando",c.classList.toggle("writing"),u=r,document.getElementById("message").value="",t.prev=40,t.next=43,x(u,o);case 43:h=t.sent,p=h.split("."),d=S(p),t.prev=46,d.s();case 48:if((m=d.n()).done){t.next=75;break}if(!(v=m.value)){t.next=54;break}return l(v,""),t.next=54,N(1e3);case 54:return t.next=56,f(o,u,"usuario");case 56:y=S(p),t.prev=57,y.s();case 59:if((g=y.n()).done){t.next=65;break}return w=g.value,t.next=63,f("",w,"botMessage");case 63:t.next=59;break;case 65:t.next=70;break;case 67:t.prev=67,t.t0=t.catch(57),y.e(t.t0);case 70:return t.prev=70,y.f(),t.finish(70);case 73:t.next=48;break;case 75:t.next=80;break;case 77:t.prev=77,t.t1=t.catch(46),d.e(t.t1);case 80:return t.prev=80,d.f(),t.finish(80);case 83:t.next=91;break;case 85:t.prev=85,t.t2=t.catch(40),E=(b=["Tem gente demais conversando, calma aiiiiii kkkk","Aguenta aí, parceiro! Você está fazendo muitas requisições. Vamos dar um tempinho.","Calma, calma! Seu entusiasmo é contagiante, mas precisamos descansar um pouco.","Eita! Parece que alguém está com pressa. Relaxa, dá um respiro e tente mais tarde.","Oxe! Bateu no teto das requisições. Dê um tempo pro servidor respirar, beleza?","Ôxe, amigo! Vamos dar um refresco pro servidor. Espere um pouco e tente novamente.","Parece que exageraram nas requisições. Vamos esperar o servidor se recompor.","A coisa tá animada por aqui, mas temos que segurar a onda. Tente mais tarde!","Ops! Estamos enfrentando um pequeno congestionamento. Aguarde um pouco e tente novamente.","Calma, calma! Até a paciência do servidor tem limite. Descanse um pouco e tente mais tarde.","É tanto pedido que o servidor até perdeu o fôlego. Vamos dar um tempo e retomar depois."])[Math.floor(Math.random()*b.length-1)],console.log(t.t2),l(E+t.t2,"");case 91:return t.prev=91,c.classList.toggle("writing"),c.textContent="online",t.finish(91);case 95:case"end":return t.stop()}}),t,null,[[40,85,91,95],[46,77,80,83],[57,67,70,73]])})));return function(e){return t.apply(this,arguments)}}(),document.querySelectorAll(".emoji").forEach((function(t){t.onclick=j(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById("message").value+=t.textContent;case 1:case"end":return e.stop()}}),e)})))})),document.getElementById("cleanChat").onclick=function(){var t=j(k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p(),v.clear();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();case 20:case"end":return t.stop()}}),t)}))))})();
