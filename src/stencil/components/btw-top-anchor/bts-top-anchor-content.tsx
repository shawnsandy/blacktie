import { Component } from "@stencil/core";

@Component({
  tag: "bts-top-anchor-content"
})

export class TopAnchorContent {


  render() {
	return (
	 <slot />
	)
  }
}
