webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "../node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "../node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Container */ "../node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-cookie */ "../node_modules/react-cookie/es6/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/index.js");









var _jsxFileName = "C:\\Users\\Andrew\\Desktop\\E2E Image Upload Service\\web\\src\\components\\LoginForm.js";










var LOGIN_END_POINT = 'http://localhost:4000/users/authenticate';
var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_16__["Cookies"]();

var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LoginForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onLoginClick",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var loginDetails, response, token;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              console.log("test");
              loginDetails = {
                username: _this.state.username,
                password: _this.state.password
              };
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(LOGIN_END_POINT, loginDetails);

            case 5:
              response = _context.sent;

              if (response.data.success) {
                token = response.data.data.token;
                cookies.set('token', token);

                _this.setState({
                  token: token
                });

                if (token) {
                  console.log("Logged in");
                  next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push('/internal');
                }
              } else {
                _this.setState({
                  message: response.data.message
                });
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      token: cookies.get('token') || null,
      username: "",
      password: "",
      message: ""
    };
    _this.handleUsernameChange = _this.handleUsernameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handlePasswordChange = _this.handlePasswordChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onLoginClick = _this.onLoginClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginForm, [{
    key: "handleUsernameChange",
    value: function handleUsernameChange(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: "handlePasswordChange",
    value: function handlePasswordChange(e) {
      this.setState({
        password: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__["default"], {
        style: {
          padding: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
        component: "main",
        maxWidth: "xs",
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
        component: "h1",
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
        component: "h4",
        variant: "h5",
        style: {
          color: "#ff0000"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, this.state.message), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        noValidate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        margin: "normal",
        required: true,
        fullWidth: true,
        id: "username",
        label: "Username",
        name: "username",
        autoComplete: "username",
        onChange: this.handleUsernameChange,
        autoFocus: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
        variant: "outlined",
        margin: "normal",
        required: true,
        fullWidth: true,
        name: "password",
        label: "Password",
        type: "password",
        id: "password",
        onChange: this.handlePasswordChange,
        autoComplete: "current-password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        fullWidth: true,
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          return _this2.onLoginClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Sign In"))))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.222bc0ca7dd5453e2cf9.hot-update.js.map