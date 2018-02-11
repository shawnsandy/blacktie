import { h } from "hyperapp";
import { u } from "umbrellajs";

export const Link = ({ link, click, classes = "button-elm" }, children) => (
  <a href={link} class={`button-elm ${classes}`} onclick={click}>
    {children}
  </a>
);

export const Button = (
  { click, type = "button", classes = null },
  children
) => (
  <button type={type} class={`button-elm ${classes}`} onclick={click}>
    {children}
  </button>
);

export const Svg = ({
  icon = "/icons/bytesize-symbols.min.svg#i-chevron-right",
  classes = "svg-elm-48"
}) => (
  <svg
    class={classes}
    oncreate={e => {
      console.log(u(e).find('use').attr('href'));
    }}
  >
    <use key={icon} href={icon} />
  </svg>
);
