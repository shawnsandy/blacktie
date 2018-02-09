import { h, app } from "hyperapp";
import { u } from "umbrellajs";
import {
  ConfirmButtonActions,
  ConfirmLinkActions
} from "./elements/confirmActions";

export const state = {
  url: "/",
  className: "button-elm",
  type: "submit",
  label: "Delete"
};

export const actions = {
  setUrl: value => state => ({ url: value }),
  setType: value => state => ({ type: value }),
  setLabel: value => state => ({ label: value }),

  setClassName: value => state => ({ className: value })
};

export const link = (state, actions) => (
  <span>
    <ConfirmLinkActions label="Remove" confirmLabel="Are you sure" />
  </span>
);

export const button = (state, actions) => (
  <span>
    <ConfirmButtonActions />
  </span>
);
