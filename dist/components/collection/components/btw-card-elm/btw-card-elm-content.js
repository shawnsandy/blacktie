export class CardElmContent {
    constructor() {
        this.className = "";
    }
    render() {
        return h("div", { class: `card-elm-content ${this.className}` },
            h("slot", null));
    }
    static get is() { return "btw-card-elm-content"; }
    static get properties() { return { "className": { "type": String, "attr": "class-name" } }; }
}
