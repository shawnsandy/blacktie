import { h, app } from "hyperapp";
import { Button } from "./elements/base";

import { u } from "umbrellajs";


const test = u("data-element").each(elm => {
  return 'tested';
});

const state = {
  count: 0,
  name: test
};

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 }),
  data: () => state => ({ name: u(".hyper").find("id") })
};

const view = (state, actions) => (
  <div
    class=""
    oncreate={e => {

      u("[data-element]").each(elm => {
        console.log(elm);
      });
    }}
  >
    <h1 class="title is-1 is-uppercase">
      {u(".hyper").data("element")} {state.count}
    </h1>
    <Button click={actions.down} selectors="elm-blue"> Min </Button> <Button click={actions.up} selectors="elm-blue"> Add </Button>
  </div>
);

const main = app(state, actions, view, document.querySelector(".hyper"));
const main1 = app(state, actions, view, document.querySelector(".hyper-1"));
