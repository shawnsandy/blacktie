import { h, app } from "hyperapp";
import { u } from "umbrellajs";

export const state = {
  url: null,
  style: null,
  button: "button-elm",
  type: null,
  name: "Delete"
};

export const actions = {
  setName: () => state => ({ name: "John Hancock" })
};

const confirmActions = elm => {
  const val = u(elm).html();
  u(elm).on("click", e => {
    const confirmation = u(elm).data("confirm-html") || "Confirm";
    const timer = u(elm).data("timeout") || 2000;
    if (confirmation === u(elm).html()) {
      u(elm).html(val);
    } else {
      u(elm).html(confirmation);
      setTimeout(() => {
        u(elm).html(val);
      }, timer);
      e.preventDefault();
    }
  });
};

export const link = (state, actions) => (

    <a
      href="/"
      class={`confirm-actions ${state.button}`}
      oncreate={elm => {
        confirmActions(elm);
      }}
    >
      {state.name}
    </a>

);

export const button = (state, actions) => (
  <button
    type={state.type}
    class={`confirm-actions ${state.button}`}
    type="submit"
    oncreate={elm => {
      confirmActions(elm);
    }}
  >
    {state.name}
  </button>
);
