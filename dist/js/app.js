webpackJsonp([1],[,,,,,function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(6);\n\n__webpack_require__(7);\n\nvar _umbrellajs = __webpack_require__(1);\n\n__webpack_require__(8);\n\nvar validate = __webpack_require__(2);\n\n// let test = new TestClass();\n\nvar smoothScroll = __webpack_require__(4);\n\n/** simple and easy form validation */\nvalidate.init();\n\n/** scroll to anchors */\nvar scroll = new smoothScroll(\'a[href*="#"]\');\n\n/**\n * Confirm actions before submit\n * Prompt user before deleting data\n */\n(0, _umbrellajs.u)(".confirm-actions").each(function (elm, i) {\n  if (elm) {\n    // grab the default element html value\n    var val = (0, _umbrellajs.u)(elm).html();\n    //console.log(val);\n\n    // listen for the click event\n    (0, _umbrellajs.u)(elm).on("click", function (e) {\n      // set the confirmation value\n      // search for data-confirm-html attribute\n      // or defaults to confirm\n      var confirmation = (0, _umbrellajs.u)(elm).data("confirm-html") || "Confirm";\n      var timer = (0, _umbrellajs.u)(elm).data("timeout") || 4000;\n\n      // check if element html value is the same as the confirmation\n      // if is reset to original value else set to confirmation\n      // sets a 5 second timeout for user to respond\n      // or reset the element to original value\n      if (confirmation === (0, _umbrellajs.u)(elm).html()) {\n        (0, _umbrellajs.u)(elm).html(val);\n      } else {\n        (0, _umbrellajs.u)(elm).html(confirmation);\n        setTimeout(function () {\n          (0, _umbrellajs.u)(elm).html(val);\n        }, timer);\n        e.preventDefault();\n      }\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJyZXF1aXJlIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInNjcm9sbCIsImVhY2giLCJlbG0iLCJpIiwidmFsIiwiaHRtbCIsIm9uIiwiY29uZmlybWF0aW9uIiwiZGF0YSIsInRpbWVyIiwic2V0VGltZW91dCIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFHQTs7QUFNQTs7QUFKQSxJQUFNQSxXQUFXLG1CQUFBQyxDQUFRLENBQVIsQ0FBakI7O0FBSEE7O0FBSUEsSUFBTUMsZUFBZSxtQkFBQUQsQ0FBUSxDQUFSLENBQXJCOztBQUtBO0FBQ0FELFNBQVNHLElBQVQ7O0FBRUE7QUFDQSxJQUFNQyxTQUFTLElBQUlGLFlBQUosQ0FBaUIsY0FBakIsQ0FBZjs7QUFFQTs7OztBQUlBLG1CQUFFLGtCQUFGLEVBQXNCRyxJQUF0QixDQUEyQixVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUNyQyxNQUFJRCxHQUFKLEVBQVM7QUFDUDtBQUNBLFFBQU1FLE1BQU0sbUJBQUVGLEdBQUYsRUFBT0csSUFBUCxFQUFaO0FBQ0E7O0FBRUE7QUFDQSx1QkFBRUgsR0FBRixFQUFPSSxFQUFQLENBQVUsT0FBVixFQUFtQixhQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFVBQU1DLGVBQWUsbUJBQUVMLEdBQUYsRUFBT00sSUFBUCxDQUFZLGNBQVosS0FBK0IsU0FBcEQ7QUFDQSxVQUFNQyxRQUFRLG1CQUFFUCxHQUFGLEVBQU9NLElBQVAsQ0FBWSxTQUFaLEtBQTBCLElBQXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBSUQsaUJBQWlCLG1CQUFFTCxHQUFGLEVBQU9HLElBQVAsRUFBckIsRUFBb0M7QUFDbEMsMkJBQUVILEdBQUYsRUFBT0csSUFBUCxDQUFZRCxHQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsMkJBQUVGLEdBQUYsRUFBT0csSUFBUCxDQUFZRSxZQUFaO0FBQ0FHLG1CQUFXLFlBQU07QUFDZiw2QkFBRVIsR0FBRixFQUFPRyxJQUFQLENBQVlELEdBQVo7QUFDRCxTQUZELEVBRUdLLEtBRkg7QUFHQUUsVUFBRUMsY0FBRjtBQUNEO0FBQ0YsS0FwQkQ7QUFxQkQ7QUFDRixDQTdCRCIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9jb2xvcnMuc2Nzc1wiO1xuXG4vLyBsZXQgdGVzdCA9IG5ldyBUZXN0Q2xhc3MoKTtcbmltcG9ydCB7IHUgfSBmcm9tIFwidW1icmVsbGFqc1wiO1xuXG5jb25zdCB2YWxpZGF0ZSA9IHJlcXVpcmUoXCJ2YWxpZGF0ZVwiKTtcbmNvbnN0IHNtb290aFNjcm9sbCA9IHJlcXVpcmUoXCJzbW9vdGgtc2Nyb2xsXCIpO1xuXG5cbmltcG9ydCAnLi9jb21wb25lbnRzL3NlbGVjdGlvbnMvZHJvcGRvd24vZHJvcGRvd24uanMnXG5cbi8qKiBzaW1wbGUgYW5kIGVhc3kgZm9ybSB2YWxpZGF0aW9uICovXG52YWxpZGF0ZS5pbml0KCk7XG5cbi8qKiBzY3JvbGwgdG8gYW5jaG9ycyAqL1xuY29uc3Qgc2Nyb2xsID0gbmV3IHNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl0nKTtcblxuLyoqXG4gKiBDb25maXJtIGFjdGlvbnMgYmVmb3JlIHN1Ym1pdFxuICogUHJvbXB0IHVzZXIgYmVmb3JlIGRlbGV0aW5nIGRhdGFcbiAqL1xudShcIi5jb25maXJtLWFjdGlvbnNcIikuZWFjaCgoZWxtLCBpKSA9PiB7XG4gIGlmIChlbG0pIHtcbiAgICAvLyBncmFiIHRoZSBkZWZhdWx0IGVsZW1lbnQgaHRtbCB2YWx1ZVxuICAgIGNvbnN0IHZhbCA9IHUoZWxtKS5odG1sKCk7XG4gICAgLy9jb25zb2xlLmxvZyh2YWwpO1xuXG4gICAgLy8gbGlzdGVuIGZvciB0aGUgY2xpY2sgZXZlbnRcbiAgICB1KGVsbSkub24oXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIC8vIHNldCB0aGUgY29uZmlybWF0aW9uIHZhbHVlXG4gICAgICAvLyBzZWFyY2ggZm9yIGRhdGEtY29uZmlybS1odG1sIGF0dHJpYnV0ZVxuICAgICAgLy8gb3IgZGVmYXVsdHMgdG8gY29uZmlybVxuICAgICAgY29uc3QgY29uZmlybWF0aW9uID0gdShlbG0pLmRhdGEoXCJjb25maXJtLWh0bWxcIikgfHwgXCJDb25maXJtXCI7XG4gICAgICBjb25zdCB0aW1lciA9IHUoZWxtKS5kYXRhKFwidGltZW91dFwiKSB8fCA0MDAwO1xuXG4gICAgICAvLyBjaGVjayBpZiBlbGVtZW50IGh0bWwgdmFsdWUgaXMgdGhlIHNhbWUgYXMgdGhlIGNvbmZpcm1hdGlvblxuICAgICAgLy8gaWYgaXMgcmVzZXQgdG8gb3JpZ2luYWwgdmFsdWUgZWxzZSBzZXQgdG8gY29uZmlybWF0aW9uXG4gICAgICAvLyBzZXRzIGEgNSBzZWNvbmQgdGltZW91dCBmb3IgdXNlciB0byByZXNwb25kXG4gICAgICAvLyBvciByZXNldCB0aGUgZWxlbWVudCB0byBvcmlnaW5hbCB2YWx1ZVxuICAgICAgaWYgKGNvbmZpcm1hdGlvbiA9PT0gdShlbG0pLmh0bWwoKSkge1xuICAgICAgICB1KGVsbSkuaHRtbCh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdShlbG0pLmh0bWwoY29uZmlybWF0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdShlbG0pLmh0bWwodmFsKTtcbiAgICAgICAgfSwgdGltZXIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n')},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvYXBwLnNjc3M/M2I4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXNoZWV0cy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n")},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvY29sb3JzLnNjc3M/OTAzNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXNoZWV0cy9jb2xvcnMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n")},function(module,exports,__webpack_require__){"use strict";eval('\n\ndocument.addEventListener("click", function (e) {\n  var addressButton = e.target;\n\n  var timer = void 0;\n\n  if (e.target.matches(".address-dropdown-btn")) {\n    var btn = e.target;\n\n    e.preventDefault();\n    hidebtAddressList();\n    console.log(e.target, "clicked arrow");\n    //hidebtAddressTitle()\n\n    var add = document.querySelector(".bt-address-list");\n    add.addEventListener("mouseleave", function (e) {\n      console.log("leave list", e.target);\n      var aList = e.target;\n      aList.classList.add("d-none");\n    });\n  }\n\n  if (e.target.matches(".bt-address-option")) {\n    e.preventDefault();\n    console.log("address option", e.target.textContent);\n    document.querySelector(".bt-address-selected").value = e.target.textContent.trim();\n    hidebtAddressList();\n  }\n\n  if (e.target.matches(".bt-address-select")) {\n    console.log(e.target, "bt-address-list");\n  }\n}, false);\n\nfunction hidebtAddressList() {\n  var add = document.querySelector(".bt-address-list");\n  add.classList.toggle("d-none");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWxlY3Rpb25zL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzPzYxNDAiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkcmVzc0J1dHRvbiIsImUiLCJ0YXJnZXQiLCJ0aW1lciIsIm1hdGNoZXMiLCJidG4iLCJwcmV2ZW50RGVmYXVsdCIsImhpZGVidEFkZHJlc3NMaXN0IiwiY29uc29sZSIsImxvZyIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJhTGlzdCIsImNsYXNzTGlzdCIsInRleHRDb250ZW50IiwidmFsdWUiLCJ0cmltIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxTQUFTQyxnQkFBVCxDQUNFLE9BREYsRUFFRSxhQUFLO0FBQ0gsTUFBTUMsZ0JBQWdCQyxFQUFFQyxNQUF4Qjs7QUFFQSxNQUFJQyxjQUFKOztBQUVBLE1BQUlGLEVBQUVDLE1BQUYsQ0FBU0UsT0FBVCxDQUFpQix1QkFBakIsQ0FBSixFQUErQztBQUM3QyxRQUFNQyxNQUFNSixFQUFFQyxNQUFkOztBQUVBRCxNQUFFSyxjQUFGO0FBQ0FDO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWVIsRUFBRUMsTUFBZCxFQUFzQixlQUF0QjtBQUNBOztBQUVBLFFBQU1RLE1BQU1aLFNBQVNhLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVo7QUFDQUQsUUFBSVgsZ0JBQUosQ0FBcUIsWUFBckIsRUFBbUMsYUFBSztBQUN0Q1MsY0FBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJSLEVBQUVDLE1BQTVCO0FBQ0EsVUFBTVUsUUFBUVgsRUFBRUMsTUFBaEI7QUFDQVUsWUFBTUMsU0FBTixDQUFnQkgsR0FBaEIsQ0FBb0IsUUFBcEI7QUFDRCxLQUpEO0FBS0Q7O0FBRUQsTUFBSVQsRUFBRUMsTUFBRixDQUFTRSxPQUFULENBQWlCLG9CQUFqQixDQUFKLEVBQTRDO0FBQzFDSCxNQUFFSyxjQUFGO0FBQ0FFLFlBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlIsRUFBRUMsTUFBRixDQUFTWSxXQUF2QztBQUNBaEIsYUFBU2EsYUFBVCxDQUNFLHNCQURGLEVBRUVJLEtBRkYsR0FFVWQsRUFBRUMsTUFBRixDQUFTWSxXQUFULENBQXFCRSxJQUFyQixFQUZWO0FBR0FUO0FBQ0Q7O0FBRUQsTUFBSU4sRUFBRUMsTUFBRixDQUFTRSxPQUFULENBQWlCLG9CQUFqQixDQUFKLEVBQTRDO0FBQzFDSSxZQUFRQyxHQUFSLENBQVlSLEVBQUVDLE1BQWQsRUFBc0IsaUJBQXRCO0FBQ0Q7QUFDRixDQW5DSCxFQW9DRSxLQXBDRjs7QUF1Q0EsU0FBU0ssaUJBQVQsR0FBNkI7QUFDM0IsTUFBTUcsTUFBTVosU0FBU2EsYUFBVCxDQUF1QixrQkFBdkIsQ0FBWjtBQUNBRCxNQUFJRyxTQUFKLENBQWNJLE1BQWQsQ0FBcUIsUUFBckI7QUFDRCIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJjbGlja1wiLFxuICBlID0+IHtcbiAgICBjb25zdCBhZGRyZXNzQnV0dG9uID0gZS50YXJnZXQ7XG5cbiAgICBsZXQgdGltZXI7XG5cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5hZGRyZXNzLWRyb3Bkb3duLWJ0blwiKSkge1xuICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhpZGVidEFkZHJlc3NMaXN0KCk7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCwgXCJjbGlja2VkIGFycm93XCIpO1xuICAgICAgLy9oaWRlYnRBZGRyZXNzVGl0bGUoKVxuXG4gICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0LWFkZHJlc3MtbGlzdFwiKTtcbiAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsZWF2ZSBsaXN0XCIsIGUudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgYUxpc3QgPSBlLnRhcmdldDtcbiAgICAgICAgYUxpc3QuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmJ0LWFkZHJlc3Mtb3B0aW9uXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zb2xlLmxvZyhcImFkZHJlc3Mgb3B0aW9uXCIsIGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmJ0LWFkZHJlc3Mtc2VsZWN0ZWRcIlxuICAgICAgKS52YWx1ZSA9IGUudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgIGhpZGVidEFkZHJlc3NMaXN0KCk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuYnQtYWRkcmVzcy1zZWxlY3RcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LCBcImJ0LWFkZHJlc3MtbGlzdFwiKTtcbiAgICB9XG4gIH0sXG4gIGZhbHNlXG4pO1xuXG5mdW5jdGlvbiBoaWRlYnRBZGRyZXNzTGlzdCgpIHtcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idC1hZGRyZXNzLWxpc3RcIik7XG4gIGFkZC5jbGFzc0xpc3QudG9nZ2xlKFwiZC1ub25lXCIpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VsZWN0aW9ucy9kcm9wZG93bi9kcm9wZG93bi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n')}],[5]);