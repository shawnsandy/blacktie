export class CardElmHeader {
    render() {
        return (h("div", { class: `card-elm-header ${this.className}` },
            h("slot", null)));
    }
    static get is() { return "btw-card-elm-header"; }
    static get properties() { return { "className": { "type": String, "attr": "class-name" } }; }
}
