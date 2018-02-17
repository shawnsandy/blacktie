export class CardElmContent {
    constructor() {
        this.className = "";
    }
    componentWillLoad() {
        //console.log("The component is about to be rendered");
    }
    componentDidLoad() {
        // console.log("The component has been rendered");
    }
    componentWillUpdate() {
        // console.log("The component will update");
    }
    componentDidUpdate() {
        // console.log("The component did update");
    }
    componentDidUnload() {
        // console.log("The view has been removed from the DOM");
    }
    render() {
        return h("div", { class: `card-elm-content ${this.className}` },
            h("slot", null));
    }
    static get is() { return "bt-card-elm-content"; }
    static get properties() { return { "className": { "type": String, "attr": "class-name" } }; }
}
