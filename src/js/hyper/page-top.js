import { h } from "hyperapp";
import { Button } from "./elements/core";
import { u } from "umbrellajs";

export const state = {
  name: null
};

export const actions = {
  /** scroll to anchors */

  getName: () => state => ({ name: "John Hancock" }),
  topBtn: e => {
    const screenHeight = window.innerHeight;
    const toTop = u(".back-to-top");

    window.addEventListener("scroll", e => {
      if (window.pageYOffset > screenHeight) {
        u(toTop).removeClass("elm-hide");
      } else {
        u(toTop).addClass("elm-hide");
      }
    });
    //console.log(u(e).parent())
  }
};

export const view = (state, actions) => (
  <div
    oncreate={e => {
      actions.topBtn(e);
    }}
  >
    <a
      data-scroll
      href="#body"
      class="back-to-top animated bounceInUp elm-hide"
    >
      <i class="im im-arrow-up-circle is-2" />
    </a>
  </div>

);
