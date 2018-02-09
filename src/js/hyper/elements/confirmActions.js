import { h, app } from "hyperapp";
import { u } from "umbrellajs";
import { setTimeout } from "timers";

/**
 * when a user hits submit on actions that removes / updates data
 * we the user clicks the button/link
 * want to ask them to confirm the action
 * @param {*} param0
 */

export const onCreateAction = e => {
  const parent = u(e).parent();
};

export const onClickAction = (e, confirmText = "Confirm", timeout = 3000) => {
  const label = u(e.target).html()
  if (confirmText === u(e.target).html()) {
    u(e.target).html(label);
  } else {
    u(e.target).html(confirmText)
    setTimeout(() => {
      u(e.target).html(label)
    }, timeout)
    e.preventDefault()
  }
}

export const ConfirmButtonActions = (
  { label = "Delete", className = "button-elm", type = "submit", confirmLabel= "Confirm" },
  children
) => (
  <button
    type="submit"
    class={`confirm-actions ${className}`}
    onclick={ (e, confirmLabel) => {
      onClickAction(e);
    }}
    oncreate={e => {

    }}
  >
    {label}
  </button>
);

export const ConfirmLinkActions = ({
  url = "/",
  label = "Delete",
  className = "button-elm",
  confirmLabel = "Confirm"
}) => (
  <a
    href={url}
    class={`confirm-actions ${className}`}
    onclick={e => {
      onClickAction(e, confirmLabel);
    }}
  >
    {label}
  </a>
);
