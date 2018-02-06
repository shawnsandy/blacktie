import { h, app } from "hyperapp"
import { Button } from "./elements/index"
import { u } from "umbrellajs"


const btn = require("./button-component")
const top = require("./page-top")
const svg = require('./svg-icon')
const confirmBtn = require('./btn-actions');

const main = app(btn.state, btn.actions, btn.view, document.querySelector(".hyper"));

const toTop = app(top.state, top.actions, top.view, document.querySelector('.top'))

const icon = app(svg.state, svg.actions, svg.view, document.querySelector('.icon'))

const actions =  app(confirmBtn.state, confirmBtn.actions, confirmBtn.button, document.querySelector('.confirm-btn'))


const links =  app(confirmBtn.state, confirmBtn.actions, confirmBtn.link, document.querySelector('.confirm-link'))
