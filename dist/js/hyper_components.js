webpackJsonp([0],{8:function(n,t,e){"use strict";var u=e(1),c=e(9),o=e(0),r={count:0,name:(0,o.u)("Hyper-button").each(function(n){return(0,o.u)(n).data("element")})},i={down:function(){return function(n){return{count:n.count-1}}},up:function(){return function(n){return{count:n.count+1}}},data:function(){return function(n){return{name:(0,o.u)(".hyper").find("id")}}}},l=function(n,t){return(0,u.h)("div",{class:"",oncreate:function(n){console.log((0,o.u)(n))}},(0,u.h)("h1",{class:"title is-1 is-uppercase"},(0,o.u)(".hyper").data("element")," ",n.count),(0,u.h)(c.Button,{click:t.down,selectors:"elm-blue"}," Min ")," ",(0,u.h)(c.Button,{click:t.up,selectors:"elm-blue"}," Add "))};(0,u.app)(r,i,l,document.querySelector(".hyper")),(0,u.app)(r,i,l,document.querySelector(".hyper-1"))},9:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Button=t.Link=void 0;var u=e(1);e(0),e(5),t.Link=function(n,t){var e=n.link,c=n.click,o=n.selectors,r=void 0===o?null:o;return(0,u.h)("a",{href:e,class:"button-elm "+r,onclick:c},t)},t.Button=function(n,t){var e=n.click,c=n.selectors,o=void 0===c?null:c;return(0,u.h)("button",{class:"button-elm "+o,onclick:e},t)}}},[8]);