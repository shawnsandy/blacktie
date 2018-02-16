import { Component, Prop } from "@stencil/core";

@Component({
  tag: "card-elm-content"
})
export class CardElmContent {
  @Prop() className: string = "card-elm-content";

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
    return (
      <div class={`${this.className}`}>
        <slot />
      </div>
    );
  }
}
