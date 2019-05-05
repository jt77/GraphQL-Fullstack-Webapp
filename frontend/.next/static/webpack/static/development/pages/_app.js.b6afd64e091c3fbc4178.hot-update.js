webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Signout.js":
/*!*******************************!*\
  !*** ./components/Signout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/Juan/Desktop/tutorials/wesbos/advanced_react/working_files/graphql_fullstack_webapp/frontend/components/Signout.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation SIGN_OUT_MUTATION {\n            signout {\n                    message\n            }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Signout = function Signout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, function (signout) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Sign Out");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ })

})
//# sourceMappingURL=_app.js.b6afd64e091c3fbc4178.hot-update.js.map