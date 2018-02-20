import { Component, Prop } from "@stencil/core";

@Component({
  tag: "btw-card-elm-content"
})
export class CardElmContent {
  @Prop() className: string = ""

  render() {
    return <div class={`card-elm-content ${this.className}`}>
        <slot />
      </div>;
  }
}
