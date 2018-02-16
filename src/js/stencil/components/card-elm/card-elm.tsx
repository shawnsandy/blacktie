import { Component, Prop } from "@stencil/core";

@Component({
  tag: "card-elm"
})
export class CardElm {
  @Prop() className: string = "elm-borderless elm-background-transparent";
  @Prop() title: string;

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
      <div class={`card-elm ${this.className}`}>
        <card-elm-header>{this.title}</card-elm-header>
        <card-elm-content>
          <slot />
        </card-elm-content>
      </div>
    );
  }
}
