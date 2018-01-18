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


/**
 * Confirm actions before submit
 * Prompt user before deleting data
 */
u(".confirm-actions").each((elm, i) => {

  if(elm)
  {
    let val = u(elm).html();
    //console.log(val);

    u(elm).on("click", (e) => {
      console.log("clicked")
      const confirmation = u(elm).data('confirm-html') || "confirm";

      if (confirmation === u(elm).html()) {
        u(elm).html(val);
        console.log(val);
      } else {
        u(elm).html(confirmation);
        console.log(val);
        e.preventDefault();
      }

    });
  }

});
