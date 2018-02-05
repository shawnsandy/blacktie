import { h, app } from "hyperapp";
import { u } from "umbrellajs";
import { Svg } from "./elements/core";

export const state = {
  icon: "i-chevron-right",
  tag: null,
  classes: "svg-elm",
  svg_url: "/icons/bytesize-symbols.min.svg#"
};

export const actions = {
  setTag: tag => state => ({
    tag: null
  }),

  setIcon: icon => state => ({
    icon: icon
  }),

  setClass: classes => state => ({
    classes: classes
  }),

  setUrl: svg_url => state => ({
    svg_url: svg_url
  })
};

const getIcon = (elm) => {
  return  u(elm)
          .parent()
          .data("icon") || "/icons/bytesize-symbols.min.svg#i-chevron-right";
}

const getClasses = elm => {
  return u(elm)
      .parent()
      .data("class") || "svg-elm";
}

export const view = (state, actions) => (
  <span
    oncreate={e => {
      const icon = getIcon(e)
      const classes = getClasses(e)
      actions.setIcon(icon);
      actions.setClass(classes);
    }}
  >
    <Svg icon={state.icon} classes={state.classes} />
  </span>
)
