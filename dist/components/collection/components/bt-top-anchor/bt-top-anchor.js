export class TopAnchor {
    handleScroll(ev) {
        console.log("the body was scrolled", ev);
    }
    render() {
        return h("p", null,
            "My name is ",
            this.name);
    }
    static get is() { return "bt-top-anchor"; }
    static get host() { return { "theme": "top", "role": "navigation" }; }
    static get properties() { return { "name": { "type": String, "attr": "name" } }; }
}
