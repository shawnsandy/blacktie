/*! Built with http://stenciljs.com */
blacktie.loadBundle("btw-top-anchor",["exports"],function(e){var t=window.blacktie.h,n=(window.blacktie.Context,function(){function e(){this.classes="animated bounceInUp elm-hide"}return e.prototype.componentDidLoad=function(){var e=window.innerHeight,t=document.querySelector(".back-to-top");window.addEventListener("scroll",function(){window.pageYOffset>e?t.classList.remove("elm-hide"):t.classList.add("elm-hide")})},e.prototype.render=function(){return t("div",null,t("a",{"data-scroll":!0,href:"#body",class:"back-to-top "+this.classes},t("i",{class:"im im-arrow-up-circle is-2"})))},Object.defineProperty(e,"is",{get:function(){return"btw-top-anchor"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"top",role:"navigation"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{classes:{type:String,attr:"classes"}}},enumerable:!0,configurable:!0}),e}()),r=function(){function e(){}return e.prototype.render=function(){return t("span",null,t("p",{class:"selector "+this.classname},"My name is ",this.name,"!!!",t("slot",null)),t("p",null,t("button",{class:"button-elm"},"Button")),t("hr",null))},Object.defineProperty(e,"is",{get:function(){return"my-first-component"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{classname:{type:String,attr:"classname"},name:{type:String,attr:"name"}}},enumerable:!0,configurable:!0}),e}();e.BtwTopAnchor=n,e.MyFirstComponent=r,Object.defineProperty(e,"__esModule",{value:!0})});