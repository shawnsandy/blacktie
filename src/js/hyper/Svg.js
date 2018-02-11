import { h, app } from "hyperapp";
import { u } from "umbrellajs";
const Svg = require("./svg-icon");

const search = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-search")
);

const close = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-close")
);

const plus = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-plus")
);

const minus = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-minus")
);

const play = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-play")
);

const pause = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-pause")
);

const backwards = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-backwards")
);

const forwards = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-forwards")
);

const move = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-move")
);

const star = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-star")
);

const checkmark = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-checkmark")
);

const chevronTop = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-chevron-top")
);

const chevronBottom = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-chevron-bottom")
);

const chevronRight = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-chevron-right")
);

const chevronLeft = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-chevron-left")
);

const arrowTop = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-arrow-top")
);

const arrowRight = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-arrow-right")
);

const arrowBottom = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-arrow-bottom")
);

const arrowLeft = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-arrow-left")
);

const caretTop = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-caret-top")
);

const caretRight = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-caret-right")
);

const caretBottom = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-caret-bottom")
);

const caretLeft = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-caret-left")
);

const start = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-start")
);


const end = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-end")
);


const eject = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-eject")
);


const mute = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-mute")
);


const volume = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-volume")
);


const ban = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-ban")
);


const flag = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-flag")
);


const options = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-options")
);


const settings = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-settings")
);


const heart = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-heart")
);


const clock = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-clock")
);

const menu = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-menu")
);

const message = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-message")
);

const photo = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-photo")
);


const camera = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-camera")
);

const video = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-video")
);

const music = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-music")
);


const mail = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-mail")
);

const home = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-home")
);

const user = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-user")
);


const signOut = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-sign-out")
);

const signIn = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-sign-in")
);


const trash = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-trash")
);


const paperclip = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-paperclip")
);


const folder = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-folder")
);

const folderopen = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-folder-open")
);

const work = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-work")
);

const portfoilo = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-portfoilo")
)


const book = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-book")
)


const calendar = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-calendar")
);


const print = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-print")
);

const eye = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-eye")
)


const bookmark = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-bookmark")
);

const tag = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-tag")
);

const lighting = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-lighting")
);

const activity = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-activity")
);


const exports = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-export")
);

const imports = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-import")
);

const location = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-location")
);

const inbox = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-inbox")
);

const archive = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-archive")
);

const reply = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-reply")
);

const edit = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-edit")
);

const compose = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-compose")
);

const upload = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-upload")
);

const download = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-download")
);

const send = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-send")
);

const link = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-link")
);

const code = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-code")
);

const lock = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-lock")
);

const unlock = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-unlock")
);

const bell = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-bell")
);

const alert = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-alert")
);

const info = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-info")
);

const creditcard = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-credit-card")
);

const cart = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-cart")
);

const bag = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-bag")
);

const gift = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-gift")
);

const external = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-external")
);

const reload = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-reload")
);

const clipboard = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-clipboard")
);

const microphone = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-microphone")
);

const telephone = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-telephone")
);

const desktop = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-desktop")
);

const horizontalellipsis = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-horizontal-ellipsis")
)

const verticalellipsis = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-vertical-ellipsis")
);

const twitter = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-twitter")
);

const github = app(
  Svg.state,
  Svg.actions,
  Svg.byteSizeIcons,
  document.querySelector(".i-github")
);
