import { Component, Prop } from "@stencil/core";

@Component({
  tag: "bts-svg-elm",
  host: {
    theme: "svg"
  }
})
export class SvgElm {

  @Prop() icon: string = "i-photo";
  @Prop() iconUrl: string = "/icons/bytesize-symbols.min.svg";
  @Prop() classes: string = "svg-elm";

  componentDidLoad() {
	const elm = document.querySelector("btw-svg-elm");
	elm.classList.add(this.classes)
	elm.classList.remove('hydrated')
    console.log(elm);
  }

  render() {
    return (
      <svg class={`${this.classes}`}>
        <use href={`${this.iconUrl}#${this.icon}`} />
      </svg>
    );
  }

}
