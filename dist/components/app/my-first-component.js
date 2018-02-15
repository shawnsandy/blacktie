/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class MyComponent {
    render() {
        return (h("p", null,
            "My name is ",
            this.name,
            "!!!!"));
    }
    static get is() { return "my-first-component"; }
    static get properties() { return { "name": { "type": String, "attr": "name" } }; }
}

export { MyComponent as MyFirstComponent };
