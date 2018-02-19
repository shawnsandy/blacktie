import { Component } from "@stencil/core";

@Component({
  tag: "btw-top-anchor-content"
})

export class TopAnchorContent {


  render() {
	return (
	 <slot />
	)
  }
}
