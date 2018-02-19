export class CardElm {
    constructor() {
        this.className = "elm-borderless";
    }
    render() {
        return (h("div", { class: `card-elm ${this.className}` },
            h("slot", { name: "card-header" }),
            h("bt-card-elm-content", null,
                h("slot", null))));
    }
    static get is() { return "bt-card-elm"; }
    static get host() { return { "theme": "card-elm", "role": "content" }; }
    static get properties() { return { "className": { "type": String, "attr": "class-name" }, "title": { "type": String, "attr": "title" } }; }
}
