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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    useEffect(function() {\n        var userdata;\n        userdata = JSON.parse(localstorage.get('userdata'));\n        setTimeout(function() {\n            if (userdata === undefined) {\n                setLoggedin(true);\n            } else {\n                setLoggedin(false);\n            }\n        }, 100);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        __source: {\n            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n            lineNumber: 20,\n            columnNumber: 14\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 21,\n                columnNumber: 6\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 23,\n                            columnNumber: 7\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 24,\n                                columnNumber: 7\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SearchPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"Search\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/EditProfile\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"Profile\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/dietselectionpage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"Diet\"\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Header, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9IZWFkZXIvSGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0U7QUFDaEM7QUFDRzs7O0FBQ25DLEdBQUssQ0FBQ00sTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQzs7SUFDcEIsR0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBa0M7SUFDOUMsR0FBSyxDQUF5QkgsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNJLFFBQVEsR0FBZUosR0FBZSxLQUE3QkssV0FBVyxHQUFHTCxHQUFlO0lBQzdDTSxTQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBRyxDQUFDQyxRQUFRO1FBQ1pBLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLENBQVU7UUFDakRDLFVBQVUsQ0FBQyxRQUNmLEdBRHFCLENBQUM7WUFDaEIsRUFBRSxFQUFDTCxRQUFRLEtBQUdNLFNBQVMsRUFBQyxDQUFDO2dCQUN2QlIsV0FBVyxDQUFDLElBQUk7WUFDbEIsQ0FBQyxNQUFJLENBQUM7Z0JBQ0pBLFdBQVcsQ0FBQyxLQUFLO1lBQ25CLENBQUM7UUFDSCxDQUFDLEVBQUUsR0FBRztJQUNSLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHSCxNQUFNLHNFQUFJUyxDQUFNOzs7Ozs7O3VGQUNkbEIsbURBQU07WUFBQ21CLFNBQVMsRUFBQyxDQUFtQjtZQUFDQyxNQUFNLEVBQUMsQ0FBSTs7Ozs7Ozs0RkFDL0NuQixzREFBUzs7Ozs7Ozs7eUZBQ1RvQixDQUFDO3dCQUFDQyxLQUFLLEVBQUMsQ0FBYzt3QkFBQ0MsSUFBSSxFQUFDLENBQUc7Ozs7Ozs7dUdBQy9CQyxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBa0I7NEJBQUNDLEdBQUcsRUFBQyxDQUFLOzRCQUFDQyxNQUFNLEVBQUMsQ0FBSTs7Ozs7Ozs7O3lGQUU5QzNCLDBEQUFhO3dCQUFDNkIsQ0FBYSxnQkFBQyxDQUFrQjs7Ozs7Ozs7eUZBQzlDN0IsNERBQWU7d0JBQUMrQixFQUFFLEVBQUMsQ0FBa0I7Ozs7Ozs7d0dBQ25DN0IsZ0RBQUc7NEJBQUNpQixTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7cUdBRXJCakIscURBQVE7b0NBQUNpQixTQUFTLEVBQUMsQ0FBZTtvQ0FBQ0ksSUFBSSxFQUFDLENBQWE7Ozs7Ozs7OENBQUMsQ0FBTTs7cUdBQzVEckIscURBQVE7b0NBQUNpQixTQUFTLEVBQUMsQ0FBZTtvQ0FBQ0ksSUFBSSxFQUFDLENBQWM7Ozs7Ozs7OENBQUMsQ0FBTzs7cUdBQzlEckIscURBQVE7b0NBQUNpQixTQUFTLEVBQUMsQ0FBZTtvQ0FBQ0ksSUFBSSxFQUFDLENBQW9COzs7Ozs7OzhDQUFDLENBQUk7Ozs7Ozs7OztBQU05RSxDQUFDO0dBbENLakIsTUFBTTtLQUFOQSxNQUFNO0FBb0NaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvSGVhZGVyL0hlYWRlci5qcz80YjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2YmFyLENvbnRhaW5lcixOYXYsTmF2RHJvcGRvd259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9zd2l0Y2hkaWV0Lmhlcm9rdWFwcC5jb21cIjtcbiAgY29uc3QgW2xvZ2dlZGluLHNldExvZ2dlZGluXT0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB1c2VyZGF0YTtcbiAgICB1c2VyZGF0YSA9IEpTT04ucGFyc2UobG9jYWxzdG9yYWdlLmdldCgndXNlcmRhdGEnKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZih1c2VyZGF0YT09PXVuZGVmaW5lZCl7XG4gICAgICAgIHNldExvZ2dlZGluKHRydWUpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHNldExvZ2dlZGluKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9LCBbXSlcblxuXG4gICAgcmV0dXJuICggPGhlYWRlcj5cbiAgICAgPE5hdmJhciBjbGFzc05hbWU9J25hdkJhciB0aGVtZWNvbG9yJyBleHBhbmQ9XCJsZ1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiIGFsdD1cIi4uLlwiIGhlaWdodD1cIjQ1XCIvPlxuICAgIDwvYT5cbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL1NlYXJjaFBhZ2VcIj5TZWFyY2g8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9FZGl0UHJvZmlsZVwiPlByb2ZpbGU8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9kaWV0c2VsZWN0aW9ucGFnZVwiPkRpZXQ8L05hdi5MaW5rPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuPC9OYXZiYXI+XG4gIDwvaGVhZGVyPiAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJDb250YWluZXIiLCJOYXYiLCJOYXZEcm9wZG93biIsInVzZVN0YXRlIiwic2V0IiwiSGVhZGVyIiwidXJsIiwibG9nZ2VkaW4iLCJzZXRMb2dnZWRpbiIsInVzZUVmZmVjdCIsInVzZXJkYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxzdG9yYWdlIiwiZ2V0Iiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImhlYWRlciIsImNsYXNzTmFtZSIsImV4cGFuZCIsImEiLCJjbGFzcyIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsIkxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Header/Header.js\n");

/***/ })

});