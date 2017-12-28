webpackJsonp([0],[
/* 0 */
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
  var Module = __webpack_require__(3)("./" + name).default;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(4);

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL21vZHVsZXMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvYXBwLnNjc3MiXSwibmFtZXMiOlsibW9kdWxlRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiZWwiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwiTW9kdWxlIiwicmVxdWlyZSIsImRlZmF1bHQiLCJFeGFtcGxlIiwiY29uc29sZSIsImxvZyIsInRleHRDb250ZW50IiwiVGVzdENsYXNzIiwibXNnIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7OztBQUtBLElBQU1BLGlCQUFpQkMsU0FBU0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBdkI7O0FBRUEsS0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILGVBQWVJLE1BQW5DLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxNQUFNRSxLQUFLTCxlQUFlRyxDQUFmLENBQVg7QUFDQSxNQUFNRyxPQUFPRCxHQUFHRSxZQUFILENBQWdCLGFBQWhCLENBQWI7QUFDQSxNQUFNQyxTQUFTLDJCQUFBQyxHQUFhSCxJQUFiLEVBQXFCSSxPQUFwQztBQUNBLE1BQUlGLE1BQUosQ0FBV0gsRUFBWDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZHFCTSxPLEdBQ25CLGlCQUFZTixFQUFaLEVBQWdCO0FBQUE7O0FBQ2QsT0FBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0FPLFVBQVFDLEdBQVIsQ0FBWVIsR0FBR1MsV0FBZixFQUE0QiwyQkFBNUI7QUFDRCxDOztrQkFKa0JILE87Ozs7Ozs7OztBQ0FyQjs7QUFDQTs7OztBQUNBQyxRQUFRQyxHQUFSLENBQVksb0JBQVo7O0lBRU1FLFMsR0FDSixxQkFBYztBQUFBOztBQUNaLE1BQUlDLE1BQU0sc0JBQVY7QUFDQUosVUFBUUMsR0FBUixDQUFZRyxHQUFaO0FBQ0QsQzs7QUFHSCxJQUFJQyxPQUFPLElBQUlGLFNBQUosRUFBWCxDOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7O0FDckJBLHlDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEF1dG9tYXRpY2FsbHkgaW5zdGFudGlhdGVzIG1vZHVsZXMgYmFzZWQgb24gZGF0YS1hdHRyaWJ1dGVzXG4gIHNwZWNpZnlpbmcgbW9kdWxlIGZpbGUtbmFtZXMuXG4qL1xuXG5jb25zdCBtb2R1bGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZHVsZV0nKVxuXG5mb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gIGNvbnN0IGVsID0gbW9kdWxlRWxlbWVudHNbaV1cbiAgY29uc3QgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2R1bGUnKVxuICBjb25zdCBNb2R1bGUgPSByZXF1aXJlKGAuLyR7bmFtZX1gKS5kZWZhdWx0XG4gIG5ldyBNb2R1bGUoZWwpXG59XG5cbi8qXG4gIFVzYWdlOlxuICA9PT09PT1cblxuICBodG1sXG4gIC0tLS1cbiAgPGJ1dHRvbiBkYXRhLW1vZHVsZT1cImRpc2FwcGVhclwiPmRpc2FwcGVhciE8L2J1dHRvbj5cblxuICBqc1xuICAtLVxuICAvLyBtb2R1bGVzL2Rpc2FwcGVhci5qc1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNhcHBlYXIge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuICB9XG4qL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2phdmFzY3JpcHRzL21vZHVsZXMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICB0aGlzLmVsID0gZWxcbiAgICBjb25zb2xlLmxvZyhlbC50ZXh0Q29udGVudCwgJy0gRnJvbSB0aGUgZXhhbXBsZSBtb2R1bGUnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvamF2YXNjcmlwdHMvbW9kdWxlcy9leGFtcGxlLmpzIiwiaW1wb3J0ICcuL21vZHVsZXMnXG5pbXBvcnQgXCIuLy4uL3N0eWxlc2hlZXRzL2FwcC5zY3NzXCI7XG5jb25zb2xlLmxvZygnYXBwLmpzIGhhcyBsb2FkZWQhJylcblxuY2xhc3MgVGVzdENsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IG1zZyA9IFwiVXNpbmcgRVMyMDE1KyBzeW50YXhcIjtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICB9XG59XG5cbmxldCB0ZXN0ID0gbmV3IFRlc3RDbGFzcygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2phdmFzY3JpcHRzL2FwcC5qcyIsInZhciBtYXAgPSB7XG5cdFwiLi9cIjogMCxcblx0XCIuL2V4YW1wbGVcIjogMSxcblx0XCIuL2V4YW1wbGUuanNcIjogMSxcblx0XCIuL2luZGV4XCI6IDAsXG5cdFwiLi9pbmRleC5qc1wiOiAwXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qYXZhc2NyaXB0cy9tb2R1bGVzIF5cXC5cXC8uKiRcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXNoZWV0cy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9