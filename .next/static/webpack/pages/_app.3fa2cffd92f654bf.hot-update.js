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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Header = function() {\n    var clearlocalstorage = function clearlocalstorage() {\n        console.log(\"hello\");\n    };\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var userdata;\n        userdata = JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_2___default().get('userdata'));\n        if (userdata === undefined) {\n            setLoggedin(false);\n        } else {\n            setLoggedin(true);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        __source: {\n            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: loggedin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/dashboard\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SearchPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Search\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/EditProfile\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Profile\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/dietselectionpage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Diet\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/\",\n                                    onclick: clearlocalstorage(),\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        \"Logout \\xa0\",\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSignOutAlt, {\n                                            __source: {\n                                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 103\n                                            },\n                                            __self: _this\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SignUpPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Sign up\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SignInPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Sign in\"\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Header, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9IZWFkZXIvSGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ3RCO0FBQ0Y7QUFDSzs7O0FBQzdDLEdBQUssQ0FBQ1EsTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQztRQVlYQyxpQkFBaUIsR0FBMUIsUUFBUSxDQUFDQSxpQkFBaUIsR0FBRSxDQUFDO1FBRTNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFPO0lBQ3JCLENBQUM7O0lBZEQsR0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBa0M7SUFDOUMsR0FBSyxDQUF5QlIsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNTLFFBQVEsR0FBZVQsR0FBZSxLQUE3QlUsV0FBVyxHQUFHVixHQUFlO0lBQzdDQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUcsQ0FBQ1UsUUFBUTtRQUNaQSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDWCx3REFBZ0IsQ0FBQyxDQUFVO1FBQy9DLEVBQUUsRUFBQ1MsUUFBUSxLQUFHSSxTQUFTLEVBQUMsQ0FBQztZQUN2QkwsV0FBVyxDQUFDLEtBQUs7UUFDbkIsQ0FBQyxNQUFJLENBQUM7WUFDSkEsV0FBVyxDQUFDLElBQUk7UUFDbEIsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFLTCxNQUFNLHNFQUNITSxDQUFNOzs7Ozs7O2tCQUNKUCxRQUFRLHdFQUNOYixtREFBTTtZQUFDcUIsU0FBUyxFQUFDLENBQW1CO1lBQUNDLE1BQU0sRUFBQyxDQUFJOzs7Ozs7OzRGQUNoRHJCLHNEQUFTOzs7Ozs7Ozt5RkFDVHNCLENBQUM7d0JBQUNDLEtBQUssRUFBQyxDQUFjO3dCQUFDQyxJQUFJLEVBQUMsQ0FBWTs7Ozs7Ozt1R0FDeENDLENBQUc7NEJBQUNDLEdBQUcsRUFBQyxDQUFrQjs0QkFBQ0MsR0FBRyxFQUFDLENBQUs7NEJBQUNDLE1BQU0sRUFBQyxDQUFJOzs7Ozs7Ozs7eUZBRTlDN0IsMERBQWE7d0JBQUMrQixDQUFhLGdCQUFDLENBQWtCOzs7Ozs7Ozt5RkFDOUMvQiw0REFBZTt3QkFBQ2lDLEVBQUUsRUFBQyxDQUFrQjs7Ozs7Ozt3R0FDbkMvQixnREFBRzs0QkFBQ21CLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OztxR0FFckJuQixxREFBUTtvQ0FBQ21CLFNBQVMsRUFBQyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBYTs7Ozs7Ozs4Q0FBQyxDQUFNOztxR0FDNUR2QixxREFBUTtvQ0FBQ21CLFNBQVMsRUFBQyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs4Q0FBQyxDQUFPOztxR0FDOUR2QixxREFBUTtvQ0FBQ21CLFNBQVMsRUFBQyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBb0I7Ozs7Ozs7OENBQUMsQ0FBSTs7c0dBQ2pFdkIscURBQVE7b0NBQUNtQixTQUFTLEVBQUMsQ0FBZTtvQ0FBQ0ksSUFBSSxFQUFDLENBQUc7b0NBQUNVLE9BQU8sRUFBRTFCLGlCQUFpQjs7Ozs7Ozs7d0NBQUksQ0FBYTs2R0FBQ0Ysd0RBQVk7Ozs7Ozs7Ozs7Ozs7OztrRkFNMUdQLG1EQUFNO1lBQUNxQixTQUFTLEVBQUMsQ0FBbUI7WUFBQ0MsTUFBTSxFQUFDLENBQUk7Ozs7Ozs7NEZBQzlDckIsc0RBQVM7Ozs7Ozs7O3lGQUNQc0IsQ0FBQzt3QkFBQ0MsS0FBSyxFQUFDLENBQWM7d0JBQUNDLElBQUksRUFBQyxDQUFHOzs7Ozs7O3VHQUMzQkMsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFDLENBQWtCOzRCQUFDQyxHQUFHLEVBQUMsQ0FBSzs0QkFBQ0MsTUFBTSxFQUFDLENBQUk7Ozs7Ozs7Ozt5RkFFcEQ3QiwwREFBYTt3QkFBQytCLENBQWEsZ0JBQUMsQ0FBa0I7Ozs7Ozs7O3lGQUM5Qy9CLDREQUFlO3dCQUFDaUMsRUFBRSxFQUFDLENBQWtCOzs7Ozs7O3dHQUNuQy9CLGdEQUFHOzRCQUFDbUIsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7O3FHQUN2Qm5CLHFEQUFRO29DQUFDbUIsU0FBUyxFQUFDLENBQWU7b0NBQUNJLElBQUksRUFBQyxDQUFhOzs7Ozs7OzhDQUFDLENBQU87O3FHQUM3RHZCLHFEQUFRO29DQUFDbUIsU0FBUyxFQUFDLENBQWU7b0NBQUNJLElBQUksRUFBQyxDQUFhOzs7Ozs7OzhDQUFDLENBQU87Ozs7Ozs7OztBQVM1RSxDQUFDO0dBdkRLakIsTUFBTTtLQUFOQSxNQUFNO0FBeURaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvSGVhZGVyL0hlYWRlci5qcz80YjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2YmFyLENvbnRhaW5lcixOYXYsTmF2RHJvcGRvd259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2NhbHN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBGYVNpZ25PdXRBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL3N3aXRjaGRpZXQuaGVyb2t1YXBwLmNvbVwiO1xuICBjb25zdCBbbG9nZ2VkaW4sc2V0TG9nZ2VkaW5dPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHVzZXJkYXRhO1xuICAgIHVzZXJkYXRhID0gSlNPTi5wYXJzZShsb2NhbHN0b3JhZ2UuZ2V0KCd1c2VyZGF0YScpKTtcbiAgICAgIGlmKHVzZXJkYXRhPT09dW5kZWZpbmVkKXtcbiAgICAgICAgc2V0TG9nZ2VkaW4oZmFsc2UpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHNldExvZ2dlZGluKHRydWUpO1xuICAgICAgfVxuICB9LCBbXSlcbiAgZnVuY3Rpb24gY2xlYXJsb2NhbHN0b3JhZ2UoKXtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICB9XG4gIHJldHVybiAoIFxuICAgIDxoZWFkZXI+XG4gICAgICB7bG9nZ2VkaW4/KFxuICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0nbmF2QmFyIHRoZW1lY29sb3InIGV4cGFuZD1cImxnXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgYWx0PVwiLi4uXCIgaGVpZ2h0PVwiNDVcIi8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9TZWFyY2hQYWdlXCI+U2VhcmNoPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9FZGl0UHJvZmlsZVwiPlByb2ZpbGU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL2RpZXRzZWxlY3Rpb25wYWdlXCI+RGlldDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIvXCIgb25jbGljaz17Y2xlYXJsb2NhbHN0b3JhZ2UoKX0+TG9nb3V0ICZuYnNwOzxGYVNpZ25PdXRBbHQvPjwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICAgICApOihcbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9J25hdkJhciB0aGVtZWNvbG9yJyBleHBhbmQ9XCJsZ1wiPlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgYWx0PVwiLi4uXCIgaGVpZ2h0PVwiNDVcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9TaWduVXBQYWdlXCI+U2lnbiB1cDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9J25hdkJhckJ1dHRvbnMnIGhyZWY9XCIvU2lnbkluUGFnZVwiPlNpZ24gaW48L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPiAgXG4gICAgKVxuICAgIFxufVxuIFxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkNvbnRhaW5lciIsIk5hdiIsIk5hdkRyb3Bkb3duIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsb2NhbHN0b3JhZ2UiLCJGYVNpZ25PdXRBbHQiLCJIZWFkZXIiLCJjbGVhcmxvY2Fsc3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJsb2dnZWRpbiIsInNldExvZ2dlZGluIiwidXNlcmRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJ1bmRlZmluZWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJleHBhbmQiLCJhIiwiY2xhc3MiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJMaW5rIiwib25jbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Header/Header.js\n");

/***/ })

});