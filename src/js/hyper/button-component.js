import { h } from "hyperapp";
import { Button } from "./elements/index";
import { u } from "umbrellajs";

export const state = {
  count: 0,
  label: "..."
};

export const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 }),
  label: (val) => state => ({ label: val })
};

export const view = (state, actions) => (
  <div
    class=""
    oncreate={ e => {

    }}
  >
    <h1 class="title is-1 is-uppercase">
      {state.count}
    </h1>
    <Button click={actions.down}> Min </Button>{" "}
    <Button click={actions.up} classes="elm-blue">
      {" "}
      Add{" "}
    </Button>
  </div>
);
