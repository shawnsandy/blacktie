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



  render() {
    return <p>My name is {this.name}</p>;
  }
}
