/*! Built with http://stenciljs.com */
btw.loadBundle("bts-card-elm",["exports"],function(e){var t=window.btw.h,n=(window.btw.Context,function(){function e(){this.className="elm-borderless"}return e.prototype.render=function(){return t("div",{class:"card-elm "+this.className},t("slot",{name:"card-header"}),t("bts-card-elm-content",null,t("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"bts-card-elm"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"card-elm",role:"content"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),e}()),r=function(){function e(){this.className=""}return e.prototype.render=function(){return t("div",{class:"card-elm-content "+this.className},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"bts-card-elm-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"}}},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"card-elm-header "+this.className},t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"bts-card-elm-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"}}},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){this.label="Delete",this.confirmLabel="Confirm",this.timeout=4e3,this.classes="",this.buttonType="submit"}return e.prototype.componentDidLoad=function(){},e.prototype.handleClickActions=function(e){var t=this,n=e.target;e.returnValue,n.confirmLabel===n.innerHTML?n.innerHTML=this.label:(n.innerHTML=this.confirmLabel,setTimeout(function(){n.innerHTML=t.label},this.timeout),e.preventDefault())},e.prototype.render=function(){var e=this;return this.url?t("a",{onClick:function(t){return e.handleClickActions(t)},href:this.url,class:"button-elm "+this.classes},this.label):t("button",{onClick:function(t){return e.handleClickActions(t)},type:this.buttonType,class:"button-elm "+this.classes},this.label)},Object.defineProperty(e,"is",{get:function(){return"bts-confirm-actions"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{buttonType:{type:String,attr:"button-type"},classes:{type:String,attr:"classes"},confirmLabel:{type:String,attr:"confirm-label"},label:{type:String,attr:"label"},timeout:{type:Number,attr:"timeout"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){this.icon="i-photo",this.iconUrl="/icons/bytesize-symbols.min.svg",this.classes="svg-elm-48"}return e.prototype.componentDidLoad=function(){var e=document.querySelector("btw-svg-elm");e.classList.add(this.classes),e.classList.remove("hydrated"),console.log(e)},e.prototype.render=function(){return t("svg",{class:""+this.classes},t("use",{href:this.iconUrl+"#"+this.icon}))},Object.defineProperty(e,"is",{get:function(){return"bts-svg-elm"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"svg"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{classes:{type:String,attr:"classes"},icon:{type:String,attr:"icon"},iconUrl:{type:String,attr:"icon-url"}}},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){this.classes="animated bounceInUp elm-hide"}return e.prototype.componentDidLoad=function(){var e=window.innerHeight,t=document.querySelector(".back-to-top");window.addEventListener("scroll",function(){window.pageYOffset>e?t.classList.remove("elm-hide"):t.classList.add("elm-hide")})},e.prototype.render=function(){return t("div",null,t("a",{"data-scroll":!0,href:"#body",class:"back-to-top "+this.classes},t("i",{class:"im im-arrow-up-circle is-2"})))},Object.defineProperty(e,"is",{get:function(){return"bts-top-anchor"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"top",role:"navigation"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{classes:{type:String,attr:"classes"}}},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){this.label="File Upload",this.labelClass="",this.iconClasses="",this.iconSize="24",this.placeHolderClass="",this.fieldName="upload",this.required=!1,this.placeholder="Select a file to upload"}return e.prototype.componentDidLoad=function(){console.log("The component has been rendered")},e.prototype.handleSelectUpload=function(e){console.log(e.currentTarget.files),this.placeholder=e.target.files[0].name},e.prototype.render=function(){var e=this;return t("div",{class:"upload-elm "+this.classes},t("label",{htmlFor:this.fieldName},t("input",{type:"file",class:"file-elm",name:this.fieldName,onChange:function(t){e.handleSelectUpload(t)}}),t("span",{class:"file-elm-label "+this.labelClass},t("div",null,t("bts-svg-elm",{classes:"svg-elm-"+this.iconSize+" "+this.iconClasses,icon:"i-export"})," ",this.label)),t("span",{class:"file-elm-placeholder "+this.placeHolderClass},t("div",{class:"placeholder"},this.placeholder))))},Object.defineProperty(e,"is",{get:function(){return"bts-upload-elm"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{classes:{type:String,attr:"classes"},fieldName:{type:String,attr:"field-name"},iconClasses:{type:String,attr:"icon-classes"},iconSize:{type:String,attr:"icon-size"},label:{type:String,attr:"label"},labelClass:{type:String,attr:"label-class"},placeholder:{state:!0},placeHolderClass:{type:String,attr:"place-holder-class"},required:{type:Boolean,attr:"required"}}},enumerable:!0,configurable:!0}),e}();e.BtsCardElm=n,e.BtsCardElmContent=r,e.BtsCardElmHeader=i,e.BtsConfirmActions=l,e.BtsSvgElm=s,e.BtsTopAnchor=o,e.BtsUploadElm=a,Object.defineProperty(e,"__esModule",{value:!0})});