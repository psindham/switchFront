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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar clearlocalstorage = function(e) {\n    e.stopPropagation();\n    e.preventDefault();\n    console.log(\"hello\");\n    (local_storage__WEBPACK_IMPORTED_MODULE_2___default().cle);\n};\nvar Header = function() {\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var userdata;\n        userdata = JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_2___default().get('userdata'));\n        if (userdata === undefined) {\n            setLoggedin(false);\n        } else {\n            setLoggedin(true);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        __source: {\n            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: loggedin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/dashboard\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SearchPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Search\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/EditProfile\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Profile\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/dietselectionpage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Diet\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"#\",\n                                    onClick: clearlocalstorage,\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        \"Logout \\xa0\",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSignOutAlt, {\n                                            __source: {\n                                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 101\n                                            },\n                                            __self: _this\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SignUpPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Sign up\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SignInPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Sign in\"\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Header, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs0QkFBQ3VCLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OztxR0FDdkJ2QixxREFBUTtvQ0FBQ3VCLFNBQVMsRUFBQyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBYTs7Ozs7Ozs4Q0FBQyxDQUFPOztxR0FDN0QzQixxREFBUTtvQ0FBQ3VCLFNBQVMsRUFBQyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBYTs7Ozs7Ozs4Q0FBQyxDQUFPOzs7Ozs7Ozs7QUFTNUUsQ0FBQztHQXJES2QsTUFBTTtLQUFOQSxNQUFNO0FBdURaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvSGVhZGVyL0hlYWRlci5qcz80YjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2YmFyLENvbnRhaW5lcixOYXYsTmF2RHJvcGRvd259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbHN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBGYVNpZ25PdXRBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmxldCBjbGVhcmxvY2Fsc3RvcmFnZT0oZSk9PntcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICBsb2NhbHN0b3JhZ2UuY2xlXG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL3N3aXRjaGRpZXQuaGVyb2t1YXBwLmNvbVwiO1xuICBjb25zdCBbbG9nZ2VkaW4sc2V0TG9nZ2VkaW5dPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHVzZXJkYXRhO1xuICAgIHVzZXJkYXRhID0gSlNPTi5wYXJzZShsb2NhbHN0b3JhZ2UuZ2V0KCd1c2VyZGF0YScpKTtcbiAgICAgIGlmKHVzZXJkYXRhPT09dW5kZWZpbmVkKXtcbiAgICAgICAgc2V0TG9nZ2VkaW4oZmFsc2UpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHNldExvZ2dlZGluKHRydWUpO1xuICAgICAgfVxuICB9LCBbXSlcblxuXG4gIHJldHVybiAoIFxuICAgIDxoZWFkZXI+XG4gICAgICB7bG9nZ2VkaW4/KFxuICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0nbmF2QmFyIHRoZW1lY29sb3InIGV4cGFuZD1cImxnXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgYWx0PVwiLi4uXCIgaGVpZ2h0PVwiNDVcIi8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9TZWFyY2hQYWdlXCI+U2VhcmNoPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9FZGl0UHJvZmlsZVwiPlByb2ZpbGU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL2RpZXRzZWxlY3Rpb25wYWdlXCI+RGlldDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIjXCIgb25DbGljaz17Y2xlYXJsb2NhbHN0b3JhZ2V9PkxvZ291dCAmbmJzcDs8RmFTaWduT3V0QWx0Lz48L05hdi5MaW5rPlxuICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICAgICAgKTooXG4gICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZCYXIgdGhlbWVjb2xvcicgZXhwYW5kPVwibGdcIj5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiIGFsdD1cIi4uLlwiIGhlaWdodD1cIjQ1XCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIvU2lnblVwUGFnZVwiPlNpZ24gdXA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL1NpZ25JblBhZ2VcIj5TaWduIGluPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcj5cbiAgICAgICl9XG4gICAgICA8L2hlYWRlcj4gIFxuICAgIClcbiAgICBcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJDb250YWluZXIiLCJOYXYiLCJOYXZEcm9wZG93biIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9jYWxzdG9yYWdlIiwiRmFTaWduT3V0QWx0IiwiY2xlYXJsb2NhbHN0b3JhZ2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY2xlIiwiSGVhZGVyIiwidXJsIiwibG9nZ2VkaW4iLCJzZXRMb2dnZWRpbiIsInVzZXJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2V0IiwidW5kZWZpbmVkIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZXhwYW5kIiwiYSIsImNsYXNzIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiTGluayIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Header/Header.js\n");

/***/ })

});