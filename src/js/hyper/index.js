import { h, app } from "hyperapp"
import { Button } from "./elements/index"
import { u } from "umbrellajs"


const btn = require("./button-component")
const top = require("./page-top")
const svg = require('./svg-icon')
const up = require("./upload")
const confirmBtn = require('./btn-actions');

const main = app(btn.state, btn.actions, btn.view, document.querySelector(".hyper"));

const main1 = app(btn.state, btn.actions, btn.view, document.querySelector(".hyper-1"));

const toTop = app(top.state, top.actions, top.view, document.querySelector('.top'))

let actions =  app(confirmBtn.state, confirmBtn.actions, confirmBtn.button, document.querySelector('.confirm-btn'))

const links =  app(confirmBtn.state, confirmBtn.actions, confirmBtn.link, document.querySelector('.confirm-link'))

const upload = app(up.state, up.actions, up.view, document.querySelector('.upload'))

const upload1 = app(up.state, up.actions, up.view, document.querySelector('.upload-1'))
