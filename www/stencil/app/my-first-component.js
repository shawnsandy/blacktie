/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class MyComponent {
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

export { MyComponent as MyFirstComponent };
