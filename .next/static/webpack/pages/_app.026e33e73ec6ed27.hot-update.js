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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    useEffect(function() {\n        var userdata;\n        userdata = JSON.parse(localstorage.get('userdata'));\n        setTimeout(function() {\n            if (userdata === undefined) {\n                setLoggedin(true);\n            } else {\n                setLoggedin(false);\n            }\n        }, 100);\n    }, []);\n    if (loggedin == true) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                className: \"navBar themecolor\",\n                expand: \"lg\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 23,\n                    columnNumber: 6\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            class: \"navbar-brand\",\n                            href: \"/\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 25,\n                                columnNumber: 7\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: \"/images/logo.jpg\",\n                                alt: \"...\",\n                                height: \"45\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 7\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 28,\n                                columnNumber: 9\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                                className: \"me-auto\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                        className: \"navBarButtons\",\n                                        href: \"/SearchPage\",\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Search\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                        className: \"navBarButtons\",\n                                        href: \"/EditProfile\",\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Profile\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                        className: \"navBarButtons\",\n                                        href: \"/dietselectionpage\",\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Diet\"\n                                    })\n                                ]\n                            })\n                        })\n                    ]\n                })\n            })\n        }));\n    } else {\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                className: \"navBar themecolor\",\n                expand: \"lg\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 43,\n                    columnNumber: 6\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            class: \"navbar-brand\",\n                            href: \"/\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 7\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: \"/images/logo.jpg\",\n                                alt: \"...\",\n                                height: \"45\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 7\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                                className: \"me-auto\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        })\n                    ]\n                })\n            })\n        });\n    }\n};\n_s(Header, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzPzRiMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZiYXIsQ29udGFpbmVyLE5hdixOYXZEcm9wZG93bn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzZXQgfSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL3N3aXRjaGRpZXQuaGVyb2t1YXBwLmNvbVwiO1xuICBjb25zdCBbbG9nZ2VkaW4sc2V0TG9nZ2VkaW5dPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHVzZXJkYXRhO1xuICAgIHVzZXJkYXRhID0gSlNPTi5wYXJzZShsb2NhbHN0b3JhZ2UuZ2V0KCd1c2VyZGF0YScpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmKHVzZXJkYXRhPT09dW5kZWZpbmVkKXtcbiAgICAgICAgc2V0TG9nZ2VkaW4odHJ1ZSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgc2V0TG9nZ2VkaW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH0sIFtdKVxuXG4gIGlmKGxvZ2dlZGluPT10cnVlKXtcbiAgICByZXR1cm4gKCBcbiAgICAgIFxuICAgIDxoZWFkZXI+XG4gICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZCYXIgdGhlbWVjb2xvcicgZXhwYW5kPVwibGdcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIiBhbHQ9XCIuLi5cIiBoZWlnaHQ9XCI0NVwiLz5cbiAgICA8L2E+XG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9TZWFyY2hQYWdlXCI+U2VhcmNoPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIvRWRpdFByb2ZpbGVcIj5Qcm9maWxlPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIvZGlldHNlbGVjdGlvbnBhZ2VcIj5EaWV0PC9OYXYuTGluaz5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbjwvTmF2YmFyPlxuICA8L2hlYWRlcj4gIFxuICApO1xuICAgIH1lbHNle1xuICAgICAgPGhlYWRlcj5cbiAgICAgPE5hdmJhciBjbGFzc05hbWU9J25hdkJhciB0aGVtZWNvbG9yJyBleHBhbmQ9XCJsZ1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiIGFsdD1cIi4uLlwiIGhlaWdodD1cIjQ1XCIvPlxuICAgIDwvYT5cbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbjwvTmF2YmFyPlxuICA8L2hlYWRlcj4gIFxuICAgIH1cblxufVxuIFxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkNvbnRhaW5lciIsIk5hdiIsIk5hdkRyb3Bkb3duIiwidXNlU3RhdGUiLCJzZXQiLCJIZWFkZXIiLCJ1cmwiLCJsb2dnZWRpbiIsInNldExvZ2dlZGluIiwidXNlRWZmZWN0IiwidXNlcmRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbHN0b3JhZ2UiLCJnZXQiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZXhwYW5kIiwiYSIsImNsYXNzIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Header/Header.js\n");

/***/ })

});