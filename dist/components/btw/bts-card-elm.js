/*! Built with http://stenciljs.com */
const{h:t,Context:e}=window.btw;class s{constructor(){this.className="elm-borderless"}render(){return t("div",{class:`card-elm ${this.className}`},t("slot",{name:"card-header"}),t("bts-card-elm-content",null,t("slot",null)))}static get is(){return"bts-card-elm"}static get host(){return{theme:"card-elm",role:"content"}}static get properties(){return{className:{type:String,attr:"class-name"},title:{type:String,attr:"title"}}}}class r{constructor(){this.className=""}render(){return t("div",{class:`card-elm-content ${this.className}`},t("slot",null))}static get is(){return"bts-card-elm-content"}static get properties(){return{className:{type:String,attr:"class-name"}}}}export{s as BtsCardElm,r as BtsCardElmContent};