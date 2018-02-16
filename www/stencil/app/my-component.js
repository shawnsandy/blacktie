/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class MyComponent {
    componentWillLoad() {
        console.log("The component is about to be rendered");
    }
    componentDidLoad() {
        console.log("The component has been rendered");
    }
    componentWillUpdate() {
        console.log("The component will update");
    }
    componentDidUpdate() {
        console.log("The component did update");
    }
    componentDidUnload() {
        console.log("The view has been removed from the DOM");
    }
    render() {
        return h("p", null,
            "My name is ",
            this.name);
    }
    static get is() { return "my-component"; }
    static get properties() { return { "name": { "type": String, "attr": "name" } }; }
}

export { MyComponent };
