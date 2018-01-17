console.log('app.js has loaded!')

// let test = new TestClass();
import { u } from "umbrellajs";
const validate = require("validate");
validate.init();

const smoothScroll = require("smooth-scroll");
const scroll = new smoothScroll('a[href*="#"]');

/** scroll to top */

const screenHeight = window.innerHeight;
const toTop = u(".back-to-top");

window.addEventListener('scroll', (e) => {
  if(window.pageYOffset > screenHeight){
   u(toTop).removeClass("elm-hide");
 } else {
   u(toTop).addClass("elm-hide");
 }
});
