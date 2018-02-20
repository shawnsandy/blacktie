import { Component, Prop } from "@stencil/core";

@Component({
  tag: "bts-card-elm",
  host: {
    theme: "card-elm",
    role: 'content'
  }
})
export class CardElm {
  @Prop() className: string = "elm-borderless";
  @Prop() title: string;

  render() {
    return (
      <div class={`card-elm ${this.className}`}>
        <slot name="card-header" />
        <btw-card-elm-content>
          <slot />
        </btw-card-elm-content>
      </div>
    );
  }
}
