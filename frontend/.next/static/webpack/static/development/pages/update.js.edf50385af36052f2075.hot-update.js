webpackHotUpdate("static/development/pages/update.js",{

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UpdateItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UpdateItem */ "./components/UpdateItem.js");
var _jsxFileName = "/Users/Juan/Desktop/tutorials/wesbos/advanced_react/working_files/graphql_fullstack_webapp/frontend/pages/update.js";


/**
 *
 * @param props
 * the props for this and all pages in the pages directory
 * are passed down from the global parent page component "_app"
 * through the "Component" component wrapper...see _app.js
 */

var Sell = function Sell(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UpdateItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Sell);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/update")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=update.js.edf50385af36052f2075.hot-update.js.map