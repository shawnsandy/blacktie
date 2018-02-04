import { app } from "hyperapp"
import { Button } from "./elements/core"
import { u } from "umbrellajs"

const btn = require("./button-component")
const top = require("./pageTop")
const main = app(btn.state, btn.actions, btn.view, document.querySelector(".hyper"));

const main1 = app(btn.state, btn.actions, btn.view, document.querySelector(".hyper-1"));

const toTop = app(top.state, top.actions, top.view, document.querySelector('.top'))
