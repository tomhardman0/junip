!function(){"use strict";function n(n,t){return t={exports:{}},n(t,t.exports),t.exports}var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=n(function(n,r){(function(){function t(n){function t(t,r,e,o,i,u){for(;i>=0&&i<u;i+=n){var a=o?o[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,o,i){e=k(e,i,4);var u=!_(r)&&w.keys(r),a=(u||r).length,c=n>0?0:a-1;return arguments.length<3&&(o=r[u?u[c]:c],c+=n),t(r,e,o,u,c,a)}}function e(n){return function(t,r,e){r=O(r,e);for(var o=A(t),i=n>0?0:o-1;i>=0&&i<o;i+=n)if(r(t[i],i,t))return i;return-1}}function o(n,t,r){return function(e,o,i){var u=0,a=A(e);if("number"==typeof i)n>0?u=i>=0?i:Math.max(i+a,u):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,o),e[i]===o?i:-1;if(o!==o)return i=t(p.call(e,u,a),w.isNaN),i>=0?i+u:-1;for(i=n>0?u:a-1;i>=0&&i<a;i+=n)if(e[i]===o)return i;return-1}}function i(n,t){var r=C.length,e=n.constructor,o=w.isFunction(e)&&e.prototype||f,i="constructor";for(w.has(n,i)&&!w.contains(t,i)&&t.push(i);r--;)i=C[r],i in n&&n[i]!==o[i]&&!w.contains(t,i)&&t.push(i)}var u=this,a=u._,c=Array.prototype,f=Object.prototype,l=Function.prototype,s=c.push,p=c.slice,h=f.toString,d=f.hasOwnProperty,y=Array.isArray,v=Object.keys,m=l.bind,g=Object.create,b=function(){},w=function(n){return n instanceof w?n:this instanceof w?void(this._wrapped=n):new w(n)};"undefined"!=typeof r?("undefined"!=typeof n&&n.exports&&(r=n.exports=w),r._=w):u._=w,w.VERSION="1.8.3";var k=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,o){return n.call(t,r,e,o)};case 4:return function(r,e,o,i){return n.call(t,r,e,o,i)}}return function(){return n.apply(t,arguments)}},O=function(n,t,r){return null==n?w.identity:w.isFunction(n)?k(n,t,r):w.isObject(n)?w.matcher(n):w.property(n)};w.iteratee=function(n,t){return O(n,t,1/0)};var j=function(n,t){return function(r){var e=arguments.length;if(e<2||null==r)return r;for(var o=1;o<e;o++)for(var i=arguments[o],u=n(i),a=u.length,c=0;c<a;c++){var f=u[c];t&&void 0!==r[f]||(r[f]=i[f])}return r}},E=function(n){if(!w.isObject(n))return{};if(g)return g(n);b.prototype=n;var t=new b;return b.prototype=null,t},x=function(n){return function(t){return null==t?void 0:t[n]}},S=Math.pow(2,53)-1,A=x("length"),_=function(n){var t=A(n);return"number"==typeof t&&t>=0&&t<=S};w.each=w.forEach=function(n,t,r){t=k(t,r);var e,o;if(_(n))for(e=0,o=n.length;e<o;e++)t(n[e],e,n);else{var i=w.keys(n);for(e=0,o=i.length;e<o;e++)t(n[i[e]],i[e],n)}return n},w.map=w.collect=function(n,t,r){t=O(t,r);for(var e=!_(n)&&w.keys(n),o=(e||n).length,i=Array(o),u=0;u<o;u++){var a=e?e[u]:u;i[u]=t(n[a],a,n)}return i},w.reduce=w.foldl=w.inject=t(1),w.reduceRight=w.foldr=t(-1),w.find=w.detect=function(n,t,r){var e;if(e=_(n)?w.findIndex(n,t,r):w.findKey(n,t,r),void 0!==e&&e!==-1)return n[e]},w.filter=w.select=function(n,t,r){var e=[];return t=O(t,r),w.each(n,function(n,r,o){t(n,r,o)&&e.push(n)}),e},w.reject=function(n,t,r){return w.filter(n,w.negate(O(t)),r)},w.every=w.all=function(n,t,r){t=O(t,r);for(var e=!_(n)&&w.keys(n),o=(e||n).length,i=0;i<o;i++){var u=e?e[i]:i;if(!t(n[u],u,n))return!1}return!0},w.some=w.any=function(n,t,r){t=O(t,r);for(var e=!_(n)&&w.keys(n),o=(e||n).length,i=0;i<o;i++){var u=e?e[i]:i;if(t(n[u],u,n))return!0}return!1},w.contains=w.includes=w.include=function(n,t,r,e){return _(n)||(n=w.values(n)),("number"!=typeof r||e)&&(r=0),w.indexOf(n,t,r)>=0},w.invoke=function(n,t){var r=p.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){var o=e?t:n[t];return null==o?o:o.apply(n,r)})},w.pluck=function(n,t){return w.map(n,w.property(t))},w.where=function(n,t){return w.filter(n,w.matcher(t))},w.findWhere=function(n,t){return w.find(n,w.matcher(t))},w.max=function(n,t,r){var e,o,i=-(1/0),u=-(1/0);if(null==t&&null!=n){n=_(n)?n:w.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e>i&&(i=e)}else t=O(t,r),w.each(n,function(n,r,e){o=t(n,r,e),(o>u||o===-(1/0)&&i===-(1/0))&&(i=n,u=o)});return i},w.min=function(n,t,r){var e,o,i=1/0,u=1/0;if(null==t&&null!=n){n=_(n)?n:w.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e<i&&(i=e)}else t=O(t,r),w.each(n,function(n,r,e){o=t(n,r,e),(o<u||o===1/0&&i===1/0)&&(i=n,u=o)});return i},w.shuffle=function(n){for(var t,r=_(n)?n:w.values(n),e=r.length,o=Array(e),i=0;i<e;i++)t=w.random(0,i),t!==i&&(o[i]=o[t]),o[t]=r[i];return o},w.sample=function(n,t,r){return null==t||r?(_(n)||(n=w.values(n)),n[w.random(n.length-1)]):w.shuffle(n).slice(0,Math.max(0,t))},w.sortBy=function(n,t,r){return t=O(t,r),w.pluck(w.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};var I=function(n){return function(t,r,e){var o={};return r=O(r,e),w.each(t,function(e,i){var u=r(e,i,t);n(o,e,u)}),o}};w.groupBy=I(function(n,t,r){w.has(n,r)?n[r].push(t):n[r]=[t]}),w.indexBy=I(function(n,t,r){n[r]=t}),w.countBy=I(function(n,t,r){w.has(n,r)?n[r]++:n[r]=1}),w.toArray=function(n){return n?w.isArray(n)?p.call(n):_(n)?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:_(n)?n.length:w.keys(n).length},w.partition=function(n,t,r){t=O(t,r);var e=[],o=[];return w.each(n,function(n,r,i){(t(n,r,i)?e:o).push(n)}),[e,o]},w.first=w.head=w.take=function(n,t,r){if(null!=n)return null==t||r?n[0]:w.initial(n,n.length-t)},w.initial=function(n,t,r){return p.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},w.last=function(n,t,r){if(null!=n)return null==t||r?n[n.length-1]:w.rest(n,Math.max(0,n.length-t))},w.rest=w.tail=w.drop=function(n,t,r){return p.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var T=function(n,t,r,e){for(var o=[],i=0,u=e||0,a=A(n);u<a;u++){var c=n[u];if(_(c)&&(w.isArray(c)||w.isArguments(c))){t||(c=T(c,t,r));var f=0,l=c.length;for(o.length+=l;f<l;)o[i++]=c[f++]}else r||(o[i++]=c)}return o};w.flatten=function(n,t){return T(n,t,!1)},w.without=function(n){return w.difference(n,p.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=O(r,e));for(var o=[],i=[],u=0,a=A(n);u<a;u++){var c=n[u],f=r?r(c,u,n):c;t?(u&&i===f||o.push(c),i=f):r?w.contains(i,f)||(i.push(f),o.push(c)):w.contains(o,c)||o.push(c)}return o},w.union=function(){return w.uniq(T(arguments,!0,!0))},w.intersection=function(n){for(var t=[],r=arguments.length,e=0,o=A(n);e<o;e++){var i=n[e];if(!w.contains(t,i)){for(var u=1;u<r&&w.contains(arguments[u],i);u++);u===r&&t.push(i)}}return t},w.difference=function(n){var t=T(arguments,!0,!0,1);return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){return w.unzip(arguments)},w.unzip=function(n){for(var t=n&&w.max(n,A).length||0,r=Array(t),e=0;e<t;e++)r[e]=w.pluck(n,e);return r},w.object=function(n,t){for(var r={},e=0,o=A(n);e<o;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.findIndex=e(1),w.findLastIndex=e(-1),w.sortedIndex=function(n,t,r,e){r=O(r,e,1);for(var o=r(t),i=0,u=A(n);i<u;){var a=Math.floor((i+u)/2);r(n[a])<o?i=a+1:u=a}return i},w.indexOf=o(1,w.findIndex,w.sortedIndex),w.lastIndexOf=o(-1,w.findLastIndex),w.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),o=Array(e),i=0;i<e;i++,n+=r)o[i]=n;return o};var L=function(n,t,r,e,o){if(!(e instanceof t))return n.apply(r,o);var i=E(n.prototype),u=n.apply(i,o);return w.isObject(u)?u:i};w.bind=function(n,t){if(m&&n.bind===m)return m.apply(n,p.call(arguments,1));if(!w.isFunction(n))throw new TypeError("Bind must be called on a function");var r=p.call(arguments,2),e=function(){return L(n,e,t,this,r.concat(p.call(arguments)))};return e},w.partial=function(n){var t=p.call(arguments,1),r=function(){for(var e=0,o=t.length,i=Array(o),u=0;u<o;u++)i[u]=t[u]===w?arguments[e++]:t[u];for(;e<arguments.length;)i.push(arguments[e++]);return L(n,r,this,this,i)};return r},w.bindAll=function(n){var t,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(t=1;t<e;t++)r=arguments[t],n[r]=w.bind(n[r],n);return n},w.memoize=function(n,t){var r=function(e){var o=r.cache,i=""+(t?t.apply(this,arguments):e);return w.has(o,i)||(o[i]=n.apply(this,arguments)),o[i]};return r.cache={},r},w.delay=function(n,t){var r=p.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=w.partial(w.delay,w,1),w.throttle=function(n,t,r){var e,o,i,u=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:w.now(),u=null,i=n.apply(e,o),u||(e=o=null)};return function(){var f=w.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,o=arguments,l<=0||l>t?(u&&(clearTimeout(u),u=null),a=f,i=n.apply(e,o),u||(e=o=null)):u||r.trailing===!1||(u=setTimeout(c,l)),i}},w.debounce=function(n,t,r){var e,o,i,u,a,c=function(){var f=w.now()-u;f<t&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,o),e||(i=o=null)))};return function(){i=this,o=arguments,u=w.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,o),i=o=null),a}},w.wrap=function(n,t){return w.partial(t,n)},w.negate=function(n){return function(){return!n.apply(this,arguments)}},w.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},w.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},w.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}},w.once=w.partial(w.before,2);var R=!{toString:null}.propertyIsEnumerable("toString"),C=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];w.keys=function(n){if(!w.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)w.has(n,r)&&t.push(r);return R&&i(n,t),t},w.allKeys=function(n){if(!w.isObject(n))return[];var t=[];for(var r in n)t.push(r);return R&&i(n,t),t},w.values=function(n){for(var t=w.keys(n),r=t.length,e=Array(r),o=0;o<r;o++)e[o]=n[t[o]];return e},w.mapObject=function(n,t,r){t=O(t,r);for(var e,o=w.keys(n),i=o.length,u={},a=0;a<i;a++)e=o[a],u[e]=t(n[e],e,n);return u},w.pairs=function(n){for(var t=w.keys(n),r=t.length,e=Array(r),o=0;o<r;o++)e[o]=[t[o],n[t[o]]];return e},w.invert=function(n){for(var t={},r=w.keys(n),e=0,o=r.length;e<o;e++)t[n[r[e]]]=r[e];return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=j(w.allKeys),w.extendOwn=w.assign=j(w.keys),w.findKey=function(n,t,r){t=O(t,r);for(var e,o=w.keys(n),i=0,u=o.length;i<u;i++)if(e=o[i],t(n[e],e,n))return e},w.pick=function(n,t,r){var e,o,i={},u=n;if(null==u)return i;w.isFunction(t)?(o=w.allKeys(u),e=k(t,r)):(o=T(arguments,!1,!1,1),e=function(n,t,r){return t in r},u=Object(u));for(var a=0,c=o.length;a<c;a++){var f=o[a],l=u[f];e(l,f,u)&&(i[f]=l)}return i},w.omit=function(n,t,r){if(w.isFunction(t))t=w.negate(t);else{var e=w.map(T(arguments,!1,!1,1),String);t=function(n,t){return!w.contains(e,t)}}return w.pick(n,t,r)},w.defaults=j(w.allKeys,!0),w.create=function(n,t){var r=E(n);return t&&w.extendOwn(r,t),r},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n},w.isMatch=function(n,t){var r=w.keys(t),e=r.length;if(null==n)return!e;for(var o=Object(n),i=0;i<e;i++){var u=r[i];if(t[u]!==o[u]||!(u in o))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var o=h.call(n);if(o!==h.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===o;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var u=n.constructor,a=t.constructor;if(u!==a&&!(w.isFunction(u)&&u instanceof u&&w.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=w.keys(n);if(c=l.length,w.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!w.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};w.isEqual=function(n,t){return N(n,t)},w.isEmpty=function(n){return null==n||(_(n)&&(w.isArray(n)||w.isString(n)||w.isArguments(n))?0===n.length:0===w.keys(n).length)},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=y||function(n){return"[object Array]"===h.call(n)},w.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},w.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){w["is"+n]=function(t){return h.call(t)==="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return w.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(w.isFunction=function(n){return"function"==typeof n||!1}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!==+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===h.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return null!=n&&d.call(n,t)},w.noConflict=function(){return u._=a,this},w.identity=function(n){return n},w.constant=function(n){return function(){return n}},w.noop=function(){},w.property=x,w.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},w.matcher=w.matches=function(n){return n=w.extendOwn({},n),function(t){return w.isMatch(t,n)}},w.times=function(n,t,r){var e=Array(Math.max(0,n));t=k(t,r,1);for(var o=0;o<n;o++)e[o]=t(o);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},w.now=Date.now||function(){return(new Date).getTime()};var q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},M=w.invert(q),F=function(n){var t=function(t){return n[t]},r="(?:"+w.keys(n).join("|")+")",e=RegExp(r),o=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(o,t):n}};w.escape=F(q),w.unescape=F(M),w.result=function(n,t,r){var e=null==n?void 0:n[t];return void 0===e&&(e=r),w.isFunction(e)?e.call(n):e};var D=0;w.uniqueId=function(n){var t=++D+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var B=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},P=/\\|'|\r|\n|\u2028|\u2029/g,U=function(n){return"\\"+z[n]};w.template=function(n,t,r){!t&&r&&(t=r),t=w.defaults({},t,w.templateSettings);var e=RegExp([(t.escape||B).source,(t.interpolate||B).source,(t.evaluate||B).source].join("|")+"|$","g"),o=0,i="__p+='";n.replace(e,function(t,r,e,u,a){return i+=n.slice(o,a).replace(P,U),o=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(i+="';\n"+u+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var u=new Function(t.variable||"obj","_",i)}catch(n){throw n.source=i,n}var a=function(n){return u.call(this,n,w)},c=t.variable||"obj";return a.source="function("+c+"){\n"+i+"}",a},w.chain=function(n){var t=w(n);return t._chain=!0,t};var J=function(n,t){return n._chain?w(t).chain():t};w.mixin=function(n){w.each(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return s.apply(n,arguments),J(this,r.apply(w,n))}})},w.mixin(w),w.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=c[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],J(this,r)}}),w.each(["concat","join","slice"],function(n){var t=c[n];w.prototype[n]=function(){return J(this,t.apply(this._wrapped,arguments))}}),w.prototype.value=function(){return this._wrapped},w.prototype.valueOf=w.prototype.toJSON=w.prototype.value,w.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return w})}).call(t)}),e=n(function(n){!function(){function r(){}function e(n){return n}function o(n){return!!n}function i(n){return!n}function u(n){return function(){if(null===n)throw new Error("Callback was already called.");n.apply(this,arguments),n=null}}function a(n){return function(){null!==n&&(n.apply(this,arguments),n=null)}}function c(n){return D(n)||"number"==typeof n.length&&n.length>=0&&n.length%1===0}function f(n,t){for(var r=-1,e=n.length;++r<e;)t(n[r],r,n)}function l(n,t){for(var r=-1,e=n.length,o=Array(e);++r<e;)o[r]=t(n[r],r,n);return o}function s(n){return l(Array(n),function(n,t){return t})}function p(n,t,r){return f(n,function(n,e,o){r=t(r,n,e,o)}),r}function h(n,t){f(z(n),function(r){t(n[r],r)})}function d(n,t){for(var r=0;r<n.length;r++)if(n[r]===t)return r;return-1}function y(n){var t,r,e=-1;return c(n)?(t=n.length,function(){return e++,e<t?e:null}):(r=z(n),t=r.length,function(){return e++,e<t?r[e]:null})}function v(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),o=0;o<r;o++)e[o]=arguments[o+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e)}}}function m(n){return function(t,r,e){return n(t,e)}}function g(n){return function(t,e,o){o=a(o||r),t=t||[];var i=y(t);if(n<=0)return o(null);var c=!1,f=0,l=!1;!function r(){if(c&&f<=0)return o(null);for(;f<n&&!l;){var a=i();if(null===a)return c=!0,void(f<=0&&o(null));f+=1,e(t[a],a,u(function(n){f-=1,n?(o(n),l=!0):r()}))}}()}}function b(n){return function(t,r,e){return n(q.eachOf,t,r,e)}}function w(n){return function(t,r,e,o){return n(g(r),t,e,o)}}function k(n){return function(t,r,e){return n(q.eachOfSeries,t,r,e)}}function O(n,t,e,o){o=a(o||r),t=t||[];var i=c(t)?[]:{};n(t,function(n,t,r){e(n,function(n,e){i[t]=e,r(n)})},function(n){o(n,i)})}function j(n,t,r,e){var o=[];n(t,function(n,t,e){r(n,function(r){r&&o.push({index:t,value:n}),e()})},function(){e(l(o.sort(function(n,t){return n.index-t.index}),function(n){return n.value}))})}function E(n,t,r,e){j(n,t,function(n,t){r(n,function(n){t(!n)})},e)}function x(n,t,r){return function(e,o,i,u){function a(){u&&u(r(!1,void 0))}function c(n,e,o){return u?void i(n,function(e){u&&t(e)&&(u(r(!0,n)),u=i=!1),o()}):o()}arguments.length>3?n(e,o,c,a):(u=i,i=o,n(e,c,a))}}function S(n,t){return t}function A(n,t,e){e=e||r;var o=c(t)?[]:{};n(t,function(n,t,r){n(v(function(n,e){e.length<=1&&(e=e[0]),o[t]=e,r(n)}))},function(n){e(n,o)})}function _(n,t,r,e){var o=[];n(t,function(n,t,e){r(n,function(n,t){o=o.concat(t||[]),e(n)})},function(n){e(n,o)})}function I(n,t,e){function o(n,t,e,o){if(null!=o&&"function"!=typeof o)throw new Error("task callback must be a function");return n.started=!0,D(t)||(t=[t]),0===t.length&&n.idle()?q.setImmediate(function(){n.drain()}):(f(t,function(t){var i={data:t,callback:o||r};e?n.tasks.unshift(i):n.tasks.push(i),n.tasks.length===n.concurrency&&n.saturated()}),void q.setImmediate(n.process))}function i(n,t){return function(){a-=1;var r=!1,e=arguments;f(t,function(n){f(c,function(t,e){t!==n||r||(c.splice(e,1),r=!0)}),n.callback.apply(n,e)}),n.tasks.length+a===0&&n.drain(),n.process()}}if(null==t)t=1;else if(0===t)throw new Error("Concurrency must not be zero");var a=0,c=[],s={tasks:[],concurrency:t,payload:e,saturated:r,empty:r,drain:r,started:!1,paused:!1,push:function(n,t){o(s,n,!1,t)},kill:function(){s.drain=r,s.tasks=[]},unshift:function(n,t){o(s,n,!0,t)},process:function(){for(;!s.paused&&a<s.concurrency&&s.tasks.length;){var t=s.payload?s.tasks.splice(0,s.payload):s.tasks.splice(0,s.tasks.length),r=l(t,function(n){return n.data});0===s.tasks.length&&s.empty(),a+=1,c.push(t[0]);var e=u(i(s,t));n(r,e)}},length:function(){return s.tasks.length},running:function(){return a},workersList:function(){return c},idle:function(){return s.tasks.length+a===0},pause:function(){s.paused=!0},resume:function(){if(s.paused!==!1){s.paused=!1;for(var n=Math.min(s.concurrency,s.tasks.length),t=1;t<=n;t++)q.setImmediate(s.process)}}};return s}function T(n){return v(function(t,r){t.apply(null,r.concat([v(function(t,r){"object"==typeof console&&(t?console.error&&console.error(t):console[n]&&f(r,function(t){console[n](t)}))})]))})}function L(n){return function(t,r,e){n(s(t),r,e)}}function R(n){return v(function(t,r){var e=v(function(r){var e=this,o=r.pop();return n(t,function(n,t,o){n.apply(e,r.concat([o]))},o)});return r.length?e.apply(this,r):e})}function C(n){return v(function(t){var r=t.pop();t.push(function(){var n=arguments;e?q.setImmediate(function(){r.apply(null,n)}):r.apply(null,n)});var e=!0;n.apply(this,t),e=!1})}var N,q={},M="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t||this;null!=M&&(N=M.async),q.noConflict=function(){return M.async=N,q};var F=Object.prototype.toString,D=Array.isArray||function(n){return"[object Array]"===F.call(n)},B=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},z=Object.keys||function(n){var t=[];for(var r in n)n.hasOwnProperty(r)&&t.push(r);return t},P="function"==typeof setImmediate&&setImmediate,U=P?function(n){P(n)}:function(n){setTimeout(n,0)};"object"==typeof process&&"function"==typeof process.nextTick?q.nextTick=process.nextTick:q.nextTick=U,q.setImmediate=P?U:q.nextTick,q.forEach=q.each=function(n,t,r){return q.eachOf(n,m(t),r)},q.forEachSeries=q.eachSeries=function(n,t,r){return q.eachOfSeries(n,m(t),r)},q.forEachLimit=q.eachLimit=function(n,t,r,e){return g(t)(n,m(r),e)},q.forEachOf=q.eachOf=function(n,t,e){function o(n){f--,n?e(n):null===i&&f<=0&&e(null)}e=a(e||r),n=n||[];for(var i,c=y(n),f=0;null!=(i=c());)f+=1,t(n[i],i,u(o));0===f&&e(null)},q.forEachOfSeries=q.eachOfSeries=function(n,t,e){function o(){var r=!0;return null===c?e(null):(t(n[c],c,u(function(n){if(n)e(n);else{if(c=i(),null===c)return e(null);r?q.setImmediate(o):o()}})),void(r=!1))}e=a(e||r),n=n||[];var i=y(n),c=i();o()},q.forEachOfLimit=q.eachOfLimit=function(n,t,r,e){g(t)(n,r,e)},q.map=b(O),q.mapSeries=k(O),q.mapLimit=w(O),q.inject=q.foldl=q.reduce=function(n,t,r,e){q.eachOfSeries(n,function(n,e,o){r(t,n,function(n,r){t=r,o(n)})},function(n){e(n,t)})},q.foldr=q.reduceRight=function(n,t,r,o){var i=l(n,e).reverse();q.reduce(i,t,r,o)},q.transform=function(n,t,r,e){3===arguments.length&&(e=r,r=t,t=D(n)?[]:{}),q.eachOf(n,function(n,e,o){r(t,n,e,o)},function(n){e(n,t)})},q.select=q.filter=b(j),q.selectLimit=q.filterLimit=w(j),q.selectSeries=q.filterSeries=k(j),q.reject=b(E),q.rejectLimit=w(E),q.rejectSeries=k(E),q.any=q.some=x(q.eachOf,o,e),q.someLimit=x(q.eachOfLimit,o,e),q.all=q.every=x(q.eachOf,i,i),q.everyLimit=x(q.eachOfLimit,i,i),q.detect=x(q.eachOf,e,S),q.detectSeries=x(q.eachOfSeries,e,S),q.detectLimit=x(q.eachOfLimit,e,S),q.sortBy=function(n,t,r){function e(n,t){var r=n.criteria,e=t.criteria;return r<e?-1:r>e?1:0}q.map(n,function(n,r){t(n,function(t,e){t?r(t):r(null,{value:n,criteria:e})})},function(n,t){return n?r(n):void r(null,l(t.sort(e),function(n){return n.value}))})},q.auto=function(n,t,e){function o(n){g.unshift(n)}function i(n){var t=d(g,n);t>=0&&g.splice(t,1)}function u(){l--,f(g.slice(0),function(n){n()})}"function"==typeof arguments[1]&&(e=t,t=null),e=a(e||r);var c=z(n),l=c.length;if(!l)return e(null);t||(t=l);var s={},y=0,m=!1,g=[];o(function(){l||e(null,s)}),f(c,function(r){function a(){return y<t&&p(b,function(n,t){return n&&s.hasOwnProperty(t)},!0)&&!s.hasOwnProperty(r)}function c(){a()&&(y++,i(c),l[l.length-1](g,s))}if(!m){for(var f,l=D(n[r])?n[r]:[n[r]],g=v(function(n,t){if(y--,t.length<=1&&(t=t[0]),n){var o={};h(s,function(n,t){o[t]=n}),o[r]=t,m=!0,e(n,o)}else s[r]=t,q.setImmediate(u)}),b=l.slice(0,l.length-1),w=b.length;w--;){if(!(f=n[b[w]]))throw new Error("Has nonexistent dependency in "+b.join(", "));if(D(f)&&d(f,r)>=0)throw new Error("Has cyclic dependencies")}a()?(y++,l[l.length-1](g,s)):o(c)}})},q.retry=function(n,t,r){function e(n,t){if("number"==typeof t)n.times=parseInt(t,10)||i;else{if("object"!=typeof t)throw new Error("Unsupported argument type for 'times': "+typeof t);n.times=parseInt(t.times,10)||i,n.interval=parseInt(t.interval,10)||u}}function o(n,t){function r(n,r){return function(e){n(function(n,t){e(!n||r,{err:n,result:t})},t)}}function e(n){return function(t){setTimeout(function(){t(null)},n)}}for(;c.times;){var o=!(c.times-=1);a.push(r(c.task,o)),!o&&c.interval>0&&a.push(e(c.interval))}q.series(a,function(t,r){r=r[r.length-1],(n||c.callback)(r.err,r.result)})}var i=5,u=0,a=[],c={times:i,interval:u},f=arguments.length;if(f<1||f>3)throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");return f<=2&&"function"==typeof n&&(r=t,t=n),"function"!=typeof n&&e(c,n),c.callback=r,c.task=t,c.callback?o():o},q.waterfall=function(n,t){function e(n){return v(function(r,o){if(r)t.apply(null,[r].concat(o));else{var i=n.next();i?o.push(e(i)):o.push(t),C(n).apply(null,o)}})}if(t=a(t||r),!D(n)){var o=new Error("First argument to waterfall must be an array of functions");return t(o)}return n.length?void e(q.iterator(n))():t()},q.parallel=function(n,t){A(q.eachOf,n,t)},q.parallelLimit=function(n,t,r){A(g(t),n,r)},q.series=function(n,t){A(q.eachOfSeries,n,t)},q.iterator=function(n){function t(r){function e(){return n.length&&n[r].apply(null,arguments),e.next()}return e.next=function(){return r<n.length-1?t(r+1):null},e}return t(0)},q.apply=v(function(n,t){return v(function(r){return n.apply(null,t.concat(r))})}),q.concat=b(_),q.concatSeries=k(_),q.whilst=function(n,t,e){if(e=e||r,n()){var o=v(function(r,i){r?e(r):n.apply(this,i)?t(o):e.apply(null,[null].concat(i))});t(o)}else e(null)},q.doWhilst=function(n,t,r){var e=0;return q.whilst(function(){return++e<=1||t.apply(this,arguments)},n,r)},q.until=function(n,t,r){return q.whilst(function(){return!n.apply(this,arguments)},t,r)},q.doUntil=function(n,t,r){return q.doWhilst(n,function(){return!t.apply(this,arguments)},r)},q.during=function(n,t,e){e=e||r;var o=v(function(t,r){t?e(t):(r.push(i),n.apply(this,r))}),i=function(n,r){n?e(n):r?t(o):e(null)};n(i)},q.doDuring=function(n,t,r){var e=0;q.during(function(n){e++<1?n(null,!0):t.apply(this,arguments)},n,r)},q.queue=function(n,t){var r=I(function(t,r){n(t[0],r)},t,1);return r},q.priorityQueue=function(n,t){function e(n,t){return n.priority-t.priority}function o(n,t,r){for(var e=-1,o=n.length-1;e<o;){var i=e+(o-e+1>>>1);r(t,n[i])>=0?e=i:o=i-1}return e}function i(n,t,i,u){if(null!=u&&"function"!=typeof u)throw new Error("task callback must be a function");return n.started=!0,D(t)||(t=[t]),0===t.length?q.setImmediate(function(){n.drain()}):void f(t,function(t){var a={data:t,priority:i,callback:"function"==typeof u?u:r};n.tasks.splice(o(n.tasks,a,e)+1,0,a),n.tasks.length===n.concurrency&&n.saturated(),q.setImmediate(n.process)})}var u=q.queue(n,t);return u.push=function(n,t,r){i(u,n,t,r)},delete u.unshift,u},q.cargo=function(n,t){return I(n,1,t)},q.log=T("log"),q.dir=T("dir"),q.memoize=function(n,t){var r={},o={},i=Object.prototype.hasOwnProperty;t=t||e;var u=v(function(e){var u=e.pop(),a=t.apply(null,e);i.call(r,a)?q.setImmediate(function(){u.apply(null,r[a])}):i.call(o,a)?o[a].push(u):(o[a]=[u],n.apply(null,e.concat([v(function(n){r[a]=n;var t=o[a];delete o[a];for(var e=0,i=t.length;e<i;e++)t[e].apply(null,n)})])))});return u.memo=r,u.unmemoized=n,u},q.unmemoize=function(n){return function(){return(n.unmemoized||n).apply(null,arguments)}},q.times=L(q.map),q.timesSeries=L(q.mapSeries),q.timesLimit=function(n,t,r,e){return q.mapLimit(s(n),t,r,e)},q.seq=function(){var n=arguments;return v(function(t){var e=this,o=t[t.length-1];"function"==typeof o?t.pop():o=r,q.reduce(n,t,function(n,t,r){t.apply(e,n.concat([v(function(n,t){r(n,t)})]))},function(n,t){o.apply(e,[n].concat(t))})})},q.compose=function(){return q.seq.apply(null,Array.prototype.reverse.call(arguments))},q.applyEach=R(q.eachOf),q.applyEachSeries=R(q.eachOfSeries),q.forever=function(n,t){function e(n){return n?o(n):void i(e)}var o=u(t||r),i=C(n);e()},q.ensureAsync=C,q.constant=v(function(n){var t=[null].concat(n);return function(n){return n.apply(this,t)}}),q.wrapSync=q.asyncify=function(n){return v(function(t){var r,e=t.pop();try{r=n.apply(this,t)}catch(n){return e(n)}B(r)&&"function"==typeof r.then?r.then(function(n){e(null,n)}).catch(function(n){e(n.message?n:new Error(n))}):e(null,r)})},"object"==typeof n&&n.exports?n.exports=q:"function"==typeof define&&define.amd?define([],function(){return q}):M.async=q}()}),o=n(function(n,r){!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof r?n.exports=e():t.returnExports=e()}(t,function(){function n(o,i){if("function"!=typeof i)throw new Error("Bad callback given: "+i);if(!o)throw new Error("No options given");var a=o.onResponse;if(o="string"==typeof o?{uri:o}:JSON.parse(JSON.stringify(o)),o.onResponse=a,o.verbose&&(n.log=e()),o.url&&(o.uri=o.url,delete o.url),!o.uri&&""!==o.uri)throw new Error("options.uri is a required argument");if("string"!=typeof o.uri)throw new Error("options.uri must be a string");for(var c=["proxy","_redirectsFollowed","maxRedirects","followRedirect"],f=0;f<c.length;f++)if(o[c[f]])throw new Error("options."+c[f]+" is not supported");if(o.callback=i,o.method=o.method||"GET",o.headers=o.headers||{},o.body=o.body||null,o.timeout=o.timeout||n.DEFAULT_TIMEOUT,o.headers.host)throw new Error("Options.headers.host is not supported");o.json&&(o.headers.accept=o.headers.accept||"application/json","GET"!==o.method&&(o.headers["content-type"]="application/json"),"boolean"!=typeof o.json?o.body=JSON.stringify(o.json):"string"!=typeof o.body&&(o.body=JSON.stringify(o.body)));var l=function(n){var t=[];for(var r in n)n.hasOwnProperty(r)&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(n[r]));return t.join("&")};if(o.qs){var s="string"==typeof o.qs?o.qs:l(o.qs);o.uri.indexOf("?")!==-1?o.uri=o.uri+"&"+s:o.uri=o.uri+"?"+s}var p=function(n){var t={};t.boundry="-------------------------------"+Math.floor(1e9*Math.random());var r=[];for(var e in n)n.hasOwnProperty(e)&&r.push("--"+t.boundry+'\nContent-Disposition: form-data; name="'+e+'"\n\n'+n[e]+"\n");return r.push("--"+t.boundry+"--"),t.body=r.join(""),t.length=t.body.length,t.type="multipart/form-data; boundary="+t.boundry,t};if(o.form){if("string"==typeof o.form)throw"form name unsupported";if("POST"===o.method){var h=(o.encoding||"application/x-www-form-urlencoded").toLowerCase();switch(o.headers["content-type"]=h,h){case"application/x-www-form-urlencoded":o.body=l(o.form).replace(/%20/g,"+");break;case"multipart/form-data":var d=p(o.form);o.body=d.body,o.headers["content-type"]=d.type;break;default:throw new Error("unsupported encoding:"+h)}}}return o.onResponse=o.onResponse||r,o.onResponse===!0&&(o.onResponse=i,o.callback=r),!o.headers.authorization&&o.auth&&(o.headers.authorization="Basic "+u(o.auth.username+":"+o.auth.password)),t(o)}function t(t){function r(){s=!0;var r=new Error("ETIMEDOUT");return r.code="ETIMEDOUT",r.duration=t.timeout,n.log.error("Timeout",{id:l._id,milliseconds:t.timeout}),t.callback(r,l)}function e(r){if(s)return n.log.debug("Ignoring timed out state change",{state:l.readyState,id:l.id});if(n.log.debug("State change",{state:l.readyState,id:l.id,timed_out:s}),l.readyState===a.OPENED){n.log.debug("Request started",{id:l.id});for(var e in t.headers)l.setRequestHeader(e,t.headers[e])}else l.readyState===a.HEADERS_RECEIVED?o():l.readyState===a.LOADING?(o(),u()):l.readyState===a.DONE&&(o(),u(),c())}function o(){if(!y.response){if(y.response=!0,n.log.debug("Got response",{id:l.id,status:l.status}),clearTimeout(l.timeoutTimer),l.statusCode=l.status,p&&0==l.statusCode){var r=new Error("CORS request rejected: "+t.uri);return r.cors="rejected",
y.loading=!0,y.end=!0,t.callback(r,l)}t.onResponse(null,l)}}function u(){y.loading||(y.loading=!0,n.log.debug("Response body loading",{id:l.id}))}function c(){if(!y.end){if(y.end=!0,n.log.debug("Request done",{id:l.id}),l.body=l.responseText,t.json)try{l.body=JSON.parse(l.responseText)}catch(n){return t.callback(n,l)}t.callback(null,l,l.body)}}var l=new a,s=!1,p=i(t.uri),h="withCredentials"in l;if(f+=1,l.seq_id=f,l.id=f+": "+t.method+" "+t.uri,l._id=l.id,p&&!h){var d=new Error("Browser does not support cross-origin request: "+t.uri);return d.cors="unsupported",t.callback(d,l)}l.timeoutTimer=setTimeout(r,t.timeout);var y={response:!1,loading:!1,end:!1};return l.onreadystatechange=e,l.open(t.method,t.uri,!0),p&&(l.withCredentials=!!t.withCredentials),l.send(t.body),l}function r(){}function e(){var n,t,e={},i=["trace","debug","info","warn","error"];for(t=0;t<i.length;t++)n=i[t],e[n]=r,"undefined"!=typeof console&&console&&console[n]&&(e[n]=o(console,n));return e}function o(n,t){function r(r,e){return"object"==typeof e&&(r+=" "+JSON.stringify(e)),n[t].call(n,r)}return r}function i(n){var t,r=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;try{t=location.href}catch(n){t=document.createElement("a"),t.href="",t=t.href}var e=r.exec(t.toLowerCase())||[],o=r.exec(n.toLowerCase()),i=!(!o||o[1]==e[1]&&o[2]==e[2]&&(o[3]||("http:"===o[1]?80:443))==(e[3]||("http:"===e[1]?80:443)));return i}function u(n){var t,r,e,o,i,u,a,c,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,s=0,p="",h=[];if(!n)return n;do t=n.charCodeAt(l++),r=n.charCodeAt(l++),e=n.charCodeAt(l++),c=t<<16|r<<8|e,o=c>>18&63,i=c>>12&63,u=c>>6&63,a=63&c,h[s++]=f.charAt(o)+f.charAt(i)+f.charAt(u)+f.charAt(a);while(l<n.length);switch(p=h.join(""),n.length%3){case 1:p=p.slice(0,-2)+"==";break;case 2:p=p.slice(0,-1)+"="}return p}var a=XMLHttpRequest;if(!a)throw new Error("missing XMLHttpRequest");n.log={trace:r,debug:r,info:r,warn:r,error:r};var c=18e4,f=0;n.withCredentials=!1,n.DEFAULT_TIMEOUT=c,n.defaults=function(t,r){var e=function(n){var r=function(r,e){r="string"==typeof r?{uri:r}:JSON.parse(JSON.stringify(r));for(var o in t)void 0===r[o]&&(r[o]=t[o]);return n(r,e)};return r},o=e(n);return o.get=e(n.get),o.post=e(n.post),o.put=e(n.put),o.head=e(n.head),o};var l=["get","put","post","head"];return l.forEach(function(t){var r=t.toUpperCase(),e=t.toLowerCase();n[e]=function(t){"string"==typeof t?t={method:r,uri:t}:(t=JSON.parse(JSON.stringify(t)),t.method=r);var e=[t].concat(Array.prototype.slice.apply(arguments,[1]));return n.apply(this,e)}}),n.couch=function(t,e){function o(n,t,r){if(n)return e(n,t,r);if((t.statusCode<200||t.statusCode>299)&&r.error){n=new Error("CouchDB error: "+(r.error.reason||r.error.error));for(var o in r)n[o]=r[o];return e(n,t,r)}return e(n,t,r)}"string"==typeof t&&(t={uri:t}),t.json=!0,t.body&&(t.json=t.body),delete t.body,e=e||r;var i=n(t,o);return i},n})}),i=function(n){var t=document.querySelector(".js-signup-form"),r={method:"POST",url:"/signup",json:!0},e=function n(t,e,i){if(t)throw new Error(t);i.build&&"succeeded"===i.build.status?console.log(i):"pending"===i.status&&(r.url="/signup/"+i.id,r.method="GET",delete r.body,setTimeout(function(){o(r,n)},1e3))},i=function(n){n.preventDefault();var i=t.elements.email.value,u=t.elements.password.value,a={email:i,password:u};r.body=a,console.log(r),o(r,e)};t.addEventListener("submit",i)},u=[i],a=window.app={};a.utils={_:r,async:e},a.state={},u.forEach(function(n){a[n.name]=n,a[n.name](a)})}();
