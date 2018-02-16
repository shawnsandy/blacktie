import { Component, Prop } from "@stencil/core";

@Component({
  tag: "blk-card"
})
export class Card {
  @Prop() name: string;

  @Prop() className: string = "card-elm elm-borderless elm-background-transparent";

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
      <span>
        <div class={`${this.className}`}>
          <div class="card-elm-content">
            <slot />
          </div>
        </div>
      </span>
    );
  }
}
