import { h } from "hyperapp";
import { Button } from "./elements/core";
import { u } from "umbrellajs";

export const state = {
  count: 0,
};

export const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
};

export const view = (state, actions) => (
  <div
    class=""
    oncreate={ e => {

    }}
  >
    <h1 class="title is-1 is-uppercase">{u(".hyper").data("element")}  {state.count}</h1>
    <Button click={actions.down}> Min </Button>   <Button click={actions.up} classes="elm-blue"> Add </Button>

  </div>
);
