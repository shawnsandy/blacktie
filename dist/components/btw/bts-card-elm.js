/*! Built with http://stenciljs.com */
const{h:t,Context:s}=window.btw;class e{constructor(){this.className="elm-borderless"}render(){return t("div",{class:`card-elm ${this.className}`},t("slot",{name:"card-header"}),t("btw-card-elm-content",null,t("slot",null)))}static get is(){return"bts-card-elm"}static get host(){return{theme:"card-elm",role:"content"}}static get properties(){return{className:{type:String,attr:"class-name"},title:{type:String,attr:"title"}}}}class r{constructor(){this.className=""}render(){return t("div",{class:`card-elm-content ${this.className}`},t("slot",null))}static get is(){return"bts-card-elm-content"}static get properties(){return{className:{type:String,attr:"class-name"}}}}class a{render(){return t("div",{class:`card-elm-header ${this.className}`},t("slot",null))}static get is(){return"bts-card-elm-header"}static get properties(){return{className:{type:String,attr:"class-name"}}}}class i{constructor(){this.label="Delete",this.confirmLabel="Confirm",this.timeout=2e3,this.classes="",this.buttonType="submit"}componentDidLoad(){}handleClickActions(t){const s=t.target;t.returnValue,this.confirmLabel===s.innerHTML?s.innerHTML=this.label:(s.innerHTML=this.confirmLabel,setTimeout(()=>{s.innerHTML=this.label},this.timeout),t.preventDefault())}render(){return this.url?t("a",{onClick:t=>this.handleClickActions(t),href:this.url,class:`button-elm ${this.classes}`},this.label):t("button",{onClick:t=>this.handleClickActions(t),type:this.buttonType,class:`button-elm ${this.classes}`},this.label)}static get is(){return"bts-confirm-actions"}static get properties(){return{buttonType:{type:String,attr:"button-type"},classes:{type:String,attr:"classes"},confirmLabel:{type:String,attr:"confirm-label"},label:{type:String,attr:"label"},timeout:{type:Number,attr:"timeout"},url:{type:String,attr:"url"}}}}class n{constructor(){this.icon="i-photo",this.iconUrl="/icons/bytesize-symbols.min.svg",this.classes="svg-elm-48"}componentDidLoad(){const t=document.querySelector("btw-svg-elm");t.classList.add(this.classes),t.classList.remove("hydrated"),console.log(t)}render(){return t("svg",{class:`${this.classes}`},t("use",{href:`${this.iconUrl}#${this.icon}`}))}static get is(){return"bts-svg-elm"}static get host(){return{theme:"svg"}}static get properties(){return{classes:{type:String,attr:"classes"},icon:{type:String,attr:"icon"},iconUrl:{type:String,attr:"icon-url"}}}}class l{constructor(){this.classes="animated bounceInUp elm-hide"}componentDidLoad(){const t=window.innerHeight,s=document.querySelector(".back-to-top");window.addEventListener("scroll",()=>{window.pageYOffset>t?s.classList.remove("elm-hide"):s.classList.add("elm-hide")})}render(){return t("div",null,t("a",{"data-scroll":!0,href:"#body",class:`back-to-top ${this.classes}`},t("i",{class:"im im-arrow-up-circle is-2"})))}static get is(){return"bts-top-anchor"}static get host(){return{theme:"top",role:"navigation"}}static get properties(){return{classes:{type:String,attr:"classes"}}}}export{e as BtsCardElm,r as BtsCardElmContent,a as BtsCardElmHeader,i as BtsConfirmActions,n as BtsSvgElm,l as BtsTopAnchor};