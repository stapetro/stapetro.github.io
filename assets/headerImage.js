!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.headerImage=t():(e.MyLibrary=e.MyLibrary||{},e.MyLibrary.headerImage=t())}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/",n(n.s=2)}({2:function(e,t,n){"use strict";function r(e,t,n){const r=o(n);if(!r)return console.warn("masthead img container is not found!"),!1;const u=t.map(t=>({width:t.width,url:`${e}${t.path}`}));return r.backstretch([u],{fade:700}),!0}n.r(t),n.d(t,"loadHeaderImage",(function(){return r})),n.d(t,"MIN_WIDTH_PX",(function(){return u})),n.d(t,"showSiteLogo",(function(){return i}));const o=e=>{for(const t of e)if(t.length>0)return t},u=640;function i(e,t,n,r){const o=n&&n.length>0;if(r){if(o)return;e.append(t)}else o&&n.remove()}}})}));
//# sourceMappingURL=headerImage.js.map