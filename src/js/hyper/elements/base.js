import { h } from "hyperapp";
import { u } from "umbrellajs";

const nested = require("hyperapp-nestable");

export const Link = ({ link, click, selectors = null }, children) => (
  <a
    href={link}
    class={`button-elm ${selectors}`}
    onclick={click}
  >
    {children}
  </a>
);

export const Button = ({ click, selectors = null }, children) => (
  <button class={`button-elm ${selectors}`} onclick={click}>
    {children}
  </button>
);
