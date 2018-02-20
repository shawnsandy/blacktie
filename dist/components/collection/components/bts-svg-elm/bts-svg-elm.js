export class SvgElm {
    constructor() {
        this.icon = "i-photo";
        this.iconUrl = "/icons/bytesize-symbols.min.svg";
        this.classes = "svg-elm-48";
    }
    componentDidLoad() {
        const elm = document.querySelector("btw-svg-elm");
        elm.classList.add(this.classes);
        elm.classList.remove('hydrated');
        console.log(elm);
    }
    render() {
        return (h("svg", { class: `${this.classes}` },
            h("use", { href: `${this.iconUrl}#${this.icon}` })));
    }
    static get is() { return "bts-svg-elm"; }
    static get host() { return { "theme": "svg" }; }
    static get properties() { return { "classes": { "type": String, "attr": "classes" }, "icon": { "type": String, "attr": "icon" }, "iconUrl": { "type": String, "attr": "icon-url" } }; }
}
