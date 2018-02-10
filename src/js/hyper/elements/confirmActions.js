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

export const onClickAction = (e, confirmLabel = "Confirm", timeout = 3000) => {
  const label = u(e.target).html()
  if (confirmLabel === u(e.target).html()) {
    u(e.target).html(label);
  } else {
    u(e.target).html(confirmLabel)
    setTimeout(() => {
      u(e.target).html(label)
    }, timeout)
    e.preventDefault()
  }
}

export const ConfirmButtonActions = (
  { label = "Delete", className = "button-elm", type = "submit", confirmLabel= "Confirm". timeout = 3000 },
  children
) => (
  <button
    type="submit"
    class={`confirm-actions ${className}`}
    onclick={ (e, confirmLabel, timeout) => {
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
  confirmLabel = "Confirm",
  timeout = "3000"
}) => (
  <a
    href={url}
    class={`confirm-actions ${className}`}
    onclick={e => {
      onClickAction(e, confirmLabel, timeout);
    }}
  >
    {label}
  </a>
);
