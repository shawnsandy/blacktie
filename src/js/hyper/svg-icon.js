import { h, app } from "hyperapp";
import { u } from "umbrellajs";
import { Svg } from "./elements/core";

export const state = {
  icon: "/icons/bytesize-symbols.min.svg#i-chevron-right",
  tag: null,
  classes: "svg-elm",
}

export const actions = {
  setTag: tag => state => ({
    tag: null
  }),
  setIcon: icon => state => ({
    icon: icon
  }),
  setClass: classes => state => ({
    classes: classes
  })
}

export const view = (state, actions) => (
  <span oncreate={e => {
   const icon = u(e).parent().data('icon') || "/icons/bytesize-symbols.min.svg#i-chevron-right"
   const classes = u(e).parent().data('class') || "svg-elm"
   console.log( classes )
   actions.setIcon(icon);
   actions.setClass(classes)
  }}
     >
    <Svg icon={state.icon} classes={state.classes} />
  </span>
)
