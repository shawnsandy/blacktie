import { Component, Prop } from "@stencil/core";

@Component({
  tag: "btw-card-elm-header"
})
export class CardElmHeader {

  @Prop() className: string;

  render() {
    return (
      <div class={`card-elm-header ${this.className}`}>
        <slot />
      </div>
    );
  }
}
