"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./comps/Header/Header.js":
/*!********************************!*\
  !*** ./comps/Header/Header.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction clearlocalstorage() {\n    console.log(\"hello\");\n}\nvar Header = function() {\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var userdata;\n        userdata = JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_2___default().get('userdata'));\n        if (userdata === undefined) {\n            setLoggedin(false);\n        } else {\n            setLoggedin(true);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        __source: {\n            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: loggedin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/dashboard\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SearchPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Search\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/EditProfile\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Profile\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/dietselectionpage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Diet\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        \"Logout \\xa0\",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSignOutAlt, {\n                                            __source: {\n                                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 64\n                                            },\n                                            __self: _this\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SignUpPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Sign up\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SignInPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Sign in\"\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Header, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBYTs7Ozs7Ozs4Q0FBQyxDQUFPOzs7Ozs7Ozs7QUFTNUUsQ0FBQztHQXBES2QsTUFBTTtLQUFOQSxNQUFNO0FBc0RaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvSGVhZGVyL0hlYWRlci5qcz80YjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2YmFyLENvbnRhaW5lcixOYXYsTmF2RHJvcGRvd259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbHN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBGYVNpZ25PdXRBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmZ1bmN0aW9uIGNsZWFybG9jYWxzdG9yYWdlKCl7XG4gIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG59XG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zd2l0Y2hkaWV0Lmhlcm9rdWFwcC5jb21cIjtcbiAgY29uc3QgW2xvZ2dlZGluLHNldExvZ2dlZGluXT0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB1c2VyZGF0YTtcbiAgICB1c2VyZGF0YSA9IEpTT04ucGFyc2UobG9jYWxzdG9yYWdlLmdldCgndXNlcmRhdGEnKSk7XG4gICAgICBpZih1c2VyZGF0YT09PXVuZGVmaW5lZCl7XG4gICAgICAgIHNldExvZ2dlZGluKGZhbHNlKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBzZXRMb2dnZWRpbih0cnVlKTtcbiAgICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuICggXG4gICAgPGhlYWRlcj5cbiAgICAgIHtsb2dnZWRpbj8oXG4gICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZCYXIgdGhlbWVjb2xvcicgZXhwYW5kPVwibGdcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL2Rhc2hib2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIiBhbHQ9XCIuLi5cIiBoZWlnaHQ9XCI0NVwiLz5cbiAgICAgICAgPC9hPlxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL1NlYXJjaFBhZ2VcIj5TZWFyY2g8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL0VkaXRQcm9maWxlXCI+UHJvZmlsZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIvZGlldHNlbGVjdGlvbnBhZ2VcIj5EaWV0PC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucyc+TG9nb3V0ICZuYnNwOzxGYVNpZ25PdXRBbHQvPjwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICAgICApOihcbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9J25hdkJhciB0aGVtZWNvbG9yJyBleHBhbmQ9XCJsZ1wiPlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgYWx0PVwiLi4uXCIgaGVpZ2h0PVwiNDVcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9TaWduVXBQYWdlXCI+U2lnbiB1cDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIvU2lnbkluUGFnZVwiPlNpZ24gaW48L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPiAgXG4gICAgKVxuICAgIFxufVxuIFxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkNvbnRhaW5lciIsIk5hdiIsIk5hdkRyb3Bkb3duIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsb2NhbHN0b3JhZ2UiLCJGYVNpZ25PdXRBbHQiLCJjbGVhcmxvY2Fsc3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJIZWFkZXIiLCJ1cmwiLCJsb2dnZWRpbiIsInNldExvZ2dlZGluIiwidXNlcmRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJ1bmRlZmluZWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJleHBhbmQiLCJhIiwiY2xhc3MiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Header/Header.js\n");

/***/ })

});