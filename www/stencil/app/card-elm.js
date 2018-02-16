/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class CardElm {
    constructor() {
        this.className = "card-elm elm-borderless elm-background-transparent";
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
        return (h("div", { class: `${this.className}` },
            h("card-elm-content", { class: "card-elm-content" },
                h("slot", null))));
    }
    static get is() { return "card-elm"; }
    static get properties() { return { "className": { "type": String, "attr": "class-name" } }; }
}

class CardElmContent {
    constructor() {
        this.className = "card-elm-content";
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
        return (h("div", { class: `${this.className}` },
            h("slot", null)));
    }
    static get is() { return "card-elm-content"; }
    static get properties() { return { "className": { "type": String, "attr": "class-name" } }; }
}

class MyFirstComponent {
    render() {
        return (h("span", null,
            h("p", { class: `selector ${this.classname}` },
                "My name is ",
                this.name,
                h("slot", null)),
            h("p", null,
                h("button", { class: "button-elm" }, "Button")),
            h("hr", null)));
    }
    static get is() { return "my-first-component"; }
    static get properties() { return { "classname": { "type": String, "attr": "classname" }, "name": { "type": String, "attr": "name" } }; }
}

export { CardElm, CardElmContent, MyFirstComponent };
