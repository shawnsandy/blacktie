/*! Built with http://stenciljs.com */
App.loadBundle("bt-card-elm",["exports"],function(e){var t=window.App.h,n=(window.App.Context,function(){function e(){this.className="elm-borderless"}return e.prototype.render=function(){return t("div",{class:"card-elm "+this.className},t("slot",{name:"card-header"}),t("bt-card-elm-content",null,t("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"bt-card-elm"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"card-elm-header",role:"contentinfo"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),e}()),o=function(){function e(){this.className=""}return e.prototype.componentWillLoad=function(){},e.prototype.componentDidLoad=function(){},e.prototype.componentWillUpdate=function(){},e.prototype.componentDidUpdate=function(){},e.prototype.componentDidUnload=function(){},e.prototype.render=function(){return t("div",{class:"card-elm-content "+this.className},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"bt-card-elm-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"}}},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){}return e.prototype.componentWillLoad=function(){console.log("The component is about to be rendered")},e.prototype.componentDidLoad=function(){console.log("The component has been rendered")},e.prototype.componentWillUpdate=function(){console.log("The component will update")},e.prototype.componentDidUpdate=function(){console.log("The component did update")},e.prototype.componentDidUnload=function(){console.log("The view has been removed from the DOM")},e.prototype.render=function(){return t("div",{class:"card-elm-header "+this.className},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"bt-card-elm-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"}}},enumerable:!0,configurable:!0}),e}();e.BtCardElm=n,e.BtCardElmContent=o,e.BtCardElmHeader=r,Object.defineProperty(e,"__esModule",{value:!0})});