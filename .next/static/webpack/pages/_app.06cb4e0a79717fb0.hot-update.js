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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar clearlocalstorage = function(e) {\n    e.stopPropagation();\n    e.preventDefault();\n    console.log(\"hello\");\n    local_storage__WEBPACK_IMPORTED_MODULE_2___default().clear();\n};\nvar Header = function() {\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var userdata;\n        userdata = JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_2___default().get('userdata'));\n        setTimeout(function() {\n            console.log(userdata);\n        }, 100);\n        if (userdata == \"\") {\n            setLoggedin(false);\n        } else {\n            setLoggedin(true);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        __source: {\n            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: loggedin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/dashboard\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SearchPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Search\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/EditProfile\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Profile\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/dietselectionpage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Diet\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"#\",\n                                    onClick: clearlocalstorage,\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        \"Logout \\xa0\",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSignOutAlt, {\n                                            __source: {\n                                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 101\n                                            },\n                                            __self: _this\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SignUpPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Sign up\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SignInPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Sign in\"\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Header, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q21DLENBQWEsZ0JBQUMsQ0FBa0I7Ozs7Ozs7O3lGQUM5Q25DLDREQUFlO3dCQUFDcUMsRUFBRSxFQUFDLENBQWtCOzs7Ozs7O3dHQUNuQ25DLGdEQUFHOzRCQUFDdUIsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7O3FHQUN2QnZCLHFEQUFRO29DQUFDdUIsU0FBUyxFQUFDLENBQWU7b0NBQUNJLElBQUksRUFBQyxDQUFhOzs7Ozs7OzhDQUFDLENBQU87O3FHQUM3RDNCLHFEQUFRO29DQUFDdUIsU0FBUyxFQUFDLENBQWU7b0NBQUNJLElBQUksRUFBQyxDQUFhOzs7Ozs7OzhDQUFDLENBQU87Ozs7Ozs7OztBQVM1RSxDQUFDO0dBeERLZCxNQUFNO0tBQU5BLE1BQU07QUEwRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9IZWFkZXIvSGVhZGVyLmpzPzRiMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZiYXIsQ29udGFpbmVyLE5hdixOYXZEcm9wZG93bn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxvY2Fsc3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmltcG9ydCB7IEZhU2lnbk91dEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xubGV0IGNsZWFybG9jYWxzdG9yYWdlPShlKT0+e1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gIGxvY2Fsc3RvcmFnZS5jbGVhcigpO1xufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zd2l0Y2hkaWV0Lmhlcm9rdWFwcC5jb21cIjtcbiAgY29uc3QgW2xvZ2dlZGluLHNldExvZ2dlZGluXT0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB1c2VyZGF0YTtcbiAgICB1c2VyZGF0YSA9IEpTT04ucGFyc2UobG9jYWxzdG9yYWdlLmdldCgndXNlcmRhdGEnKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyZGF0YSk7XG4gICAgfSwgMTAwKTtcbiAgICAgIGlmKHVzZXJkYXRhPT1cIlwiKXtcbiAgICAgICAgc2V0TG9nZ2VkaW4oZmFsc2UpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHNldExvZ2dlZGluKHRydWUpO1xuICAgICAgfVxuICB9LCBbXSlcblxuXG4gIHJldHVybiAoIFxuICAgIDxoZWFkZXI+XG4gICAgICB7bG9nZ2VkaW4/KFxuICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0nbmF2QmFyIHRoZW1lY29sb3InIGV4cGFuZD1cImxnXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgYWx0PVwiLi4uXCIgaGVpZ2h0PVwiNDVcIi8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9TZWFyY2hQYWdlXCI+U2VhcmNoPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9FZGl0UHJvZmlsZVwiPlByb2ZpbGU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL2RpZXRzZWxlY3Rpb25wYWdlXCI+RGlldDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIjXCIgb25DbGljaz17Y2xlYXJsb2NhbHN0b3JhZ2V9PkxvZ291dCAmbmJzcDs8RmFTaWduT3V0QWx0Lz48L05hdi5MaW5rPlxuICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICAgICAgKTooXG4gICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZCYXIgdGhlbWVjb2xvcicgZXhwYW5kPVwibGdcIj5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiIGFsdD1cIi4uLlwiIGhlaWdodD1cIjQ1XCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIvU2lnblVwUGFnZVwiPlNpZ24gdXA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL1NpZ25JblBhZ2VcIj5TaWduIGluPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcj5cbiAgICAgICl9XG4gICAgICA8L2hlYWRlcj4gIFxuICAgIClcbiAgICBcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJDb250YWluZXIiLCJOYXYiLCJOYXZEcm9wZG93biIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9jYWxzdG9yYWdlIiwiRmFTaWduT3V0QWx0IiwiY2xlYXJsb2NhbHN0b3JhZ2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY2xlYXIiLCJIZWFkZXIiLCJ1cmwiLCJsb2dnZWRpbiIsInNldExvZ2dlZGluIiwidXNlcmRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJzZXRUaW1lb3V0IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZXhwYW5kIiwiYSIsImNsYXNzIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiTGluayIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Header/Header.js\n");

/***/ })

});