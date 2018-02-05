import { h, app } from "hyperapp"
import { Button } from "./elements/core"
import { u } from "umbrellajs"

const btn = require("./button-component")
const top = require("./page-top")
const icon = require('./svg-icon')

const main = app(btn.state, btn.actions, btn.view, document.querySelector(".hyper"));

const toTop = app(top.state, top.actions, top.view, document.querySelector('.top'))

const svg = app(icon.state, icon.actions, icon.view, document.querySelector('.icon'))
