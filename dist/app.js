webpackJsonp([0],[
/* 0 */
/*!******************************************!*\
  !*** ./src/javascripts/modules/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/

var moduleElements = document.querySelectorAll('[data-module]');

for (var i = 0; i < moduleElements.length; i++) {
  var el = moduleElements[i];
  var name = el.getAttribute('data-module');
  var Module = __webpack_require__(/*! . */ 3)("./" + name).default;
  new Module(el);
}

/*
  Usage:
  ======

  html
  ----
  <button data-module="disappear">disappear!</button>

  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/

/***/ }),
/* 1 */
/*!********************************************!*\
  !*** ./src/javascripts/modules/example.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = function Example(el) {
  _classCallCheck(this, Example);

  this.el = el;
  console.log(el.textContent, '- From the example module');
};

exports.default = Example;

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/javascripts/app.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./modules */ 0);

__webpack_require__(/*! ./../stylesheets/app.scss */ 4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('app.js has loaded!');

var TestClass = function TestClass() {
  _classCallCheck(this, TestClass);

  var msg = "Using ES2015+ syntax";
  console.log(msg);
};

var test = new TestClass();

/***/ }),
/* 3 */
/*!******************************************!*\
  !*** ./src/javascripts/modules ^\.\/.*$ ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 0,
	"./example": 1,
	"./example.js": 1,
	"./index": 0,
	"./index.js": 0
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3;

/***/ }),
/* 4 */
/*!**********************************!*\
  !*** ./src/stylesheets/app.scss ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL21vZHVsZXMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvYXBwLnNjc3MiXSwibmFtZXMiOlsibW9kdWxlRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiZWwiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwiTW9kdWxlIiwicmVxdWlyZSIsImRlZmF1bHQiLCJFeGFtcGxlIiwiY29uc29sZSIsImxvZyIsInRleHRDb250ZW50IiwiVGVzdENsYXNzIiwibXNnIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0EsSUFBTUEsaUJBQWlCQyxTQUFTQyxnQkFBVCxDQUEwQixlQUExQixDQUF2Qjs7QUFFQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsZUFBZUksTUFBbkMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLE1BQU1FLEtBQUtMLGVBQWVHLENBQWYsQ0FBWDtBQUNBLE1BQU1HLE9BQU9ELEdBQUdFLFlBQUgsQ0FBZ0IsYUFBaEIsQ0FBYjtBQUNBLE1BQU1DLFNBQVMsb0NBQUFDLEdBQWFILElBQWIsRUFBcUJJLE9BQXBDO0FBQ0EsTUFBSUYsTUFBSixDQUFXSCxFQUFYO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2RxQk0sTyxHQUNuQixpQkFBWU4sRUFBWixFQUFnQjtBQUFBOztBQUNkLE9BQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBTyxVQUFRQyxHQUFSLENBQVlSLEdBQUdTLFdBQWYsRUFBNEIsMkJBQTVCO0FBQ0QsQzs7a0JBSmtCSCxPOzs7Ozs7Ozs7Ozs7OztBQ0FyQjs7QUFDQTs7OztBQUNBQyxRQUFRQyxHQUFSLENBQVksb0JBQVo7O0lBRU1FLFMsR0FDSixxQkFBYztBQUFBOztBQUNaLE1BQUlDLE1BQU0sc0JBQVY7QUFDQUosVUFBUUMsR0FBUixDQUFZRyxHQUFaO0FBQ0QsQzs7QUFHSCxJQUFJQyxPQUFPLElBQUlGLFNBQUosRUFBWCxDOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ3JCQSx5QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBBdXRvbWF0aWNhbGx5IGluc3RhbnRpYXRlcyBtb2R1bGVzIGJhc2VkIG9uIGRhdGEtYXR0cmlidXRlc1xuICBzcGVjaWZ5aW5nIG1vZHVsZSBmaWxlLW5hbWVzLlxuKi9cblxuY29uc3QgbW9kdWxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2R1bGVdJylcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICBjb25zdCBlbCA9IG1vZHVsZUVsZW1lbnRzW2ldXG4gIGNvbnN0IG5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJylcbiAgY29uc3QgTW9kdWxlID0gcmVxdWlyZShgLi8ke25hbWV9YCkuZGVmYXVsdFxuICBuZXcgTW9kdWxlKGVsKVxufVxuXG4vKlxuICBVc2FnZTpcbiAgPT09PT09XG5cbiAgaHRtbFxuICAtLS0tXG4gIDxidXR0b24gZGF0YS1tb2R1bGU9XCJkaXNhcHBlYXJcIj5kaXNhcHBlYXIhPC9idXR0b24+XG5cbiAganNcbiAgLS1cbiAgLy8gbW9kdWxlcy9kaXNhcHBlYXIuanNcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYXBwZWFyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cbiAgfVxuKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgdGhpcy5lbCA9IGVsXG4gICAgY29uc29sZS5sb2coZWwudGV4dENvbnRlbnQsICctIEZyb20gdGhlIGV4YW1wbGUgbW9kdWxlJylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvZXhhbXBsZS5qcyIsImltcG9ydCAnLi9tb2R1bGVzJ1xuaW1wb3J0IFwiLi8uLi9zdHlsZXNoZWV0cy9hcHAuc2Nzc1wiO1xuY29uc29sZS5sb2coJ2FwcC5qcyBoYXMgbG9hZGVkIScpXG5cbmNsYXNzIFRlc3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBtc2cgPSBcIlVzaW5nIEVTMjAxNSsgc3ludGF4XCI7XG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgfVxufVxuXG5sZXQgdGVzdCA9IG5ldyBUZXN0Q2xhc3MoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0cy9hcHAuanMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vXCI6IDAsXG5cdFwiLi9leGFtcGxlXCI6IDEsXG5cdFwiLi9leGFtcGxlLmpzXCI6IDEsXG5cdFwiLi9pbmRleFwiOiAwLFxuXHRcIi4vaW5kZXguanNcIjogMFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcyBeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzaGVldHMvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==