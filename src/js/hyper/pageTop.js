import { h } from "hyperapp";
import { Button } from "./elements/core";
import { u } from "umbrellajs";

export const state = {
  name: null
};

export const actions = {
  getName: () => state => ({ name: "John Hancock" }),
  topBtn: (e) => {
	  const screenHeight = window.innerHeight;
	  const toTop = u(".back-to-top");

    window.addEventListener("scroll", e => {
      if (window.pageYOffset > screenHeight) {
        u(toTop).removeClass("elm-hide");
      } else {
        u(toTop).addClass("elm-hide");
      }
    });
  }
};

export const view = (state, actions) => (
  <div oncreate={(e) => { actions.topBtn(e)}} >
    <a href="#body" class="back-to-top animated bounceInUp">
      <i class="im im-arrow-up-circle is-2" />
    </a>
  </div>
);
