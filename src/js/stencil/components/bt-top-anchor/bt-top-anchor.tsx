import { Component, Prop, Listen } from "@stencil/core";

@Component({
  tag: "bt-top-anchor",
  host: {
    theme: "top",
    role: "navigation"
  }
})
export class TopAnchor {

  @Listen("body:scroll")
  handleScroll(ev) {
    console.log("the body was scrolled", ev);
  }

  @Prop() name: string;

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
    return <p>My name is {this.name}</p>;
  }
}
