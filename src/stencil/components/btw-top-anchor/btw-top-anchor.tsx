import { Component, Prop } from "@stencil/core";
//import { u } from 'umbrellajs'

@Component({
  tag: "btw-top-anchor",
  host: {
    theme: "top",
    role: "navigation"
  }
})
export class BtwTopAnchor {
  @Prop() classes: string = "animated bounceInUp elm-hide";

  componentDidLoad() {
    const screenHeight = window.innerHeight;
    const topLink = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > screenHeight) {
        topLink.classList.remove("elm-hide");
      } else {
        topLink.classList.add("elm-hide");
      }
    })
  }

  render() {
    return (
      <div>
        <a data-scroll href="#body" class={`back-to-top ${this.classes}`}>
          <i class="im im-arrow-up-circle is-2" />
        </a>
      </div>
    );
  }
}
