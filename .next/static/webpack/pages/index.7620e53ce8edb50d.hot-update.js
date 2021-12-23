"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comps_SignUpButton_SignUpButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/SignUpButton/SignUpButton */ \"./comps/SignUpButton/SignUpButton.js\");\n/* harmony import */ var _comps_CustButton_CustButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/CustButton/CustButton */ \"./comps/CustButton/CustButton.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/DisplayCard/Card */ \"./comps/DisplayCard/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var userdata;\n        userdata = JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_5___default().get('userdata'));\n        if (userdata === undefined) {\n            setLoggedin(false);\n        } else {\n            setLoggedin(true);\n        }\n    }, []);\n    var displayCards = [\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            image: \"/images/undraw_Artificial_intelligence_re_enpp.png\",\n            title: \"Food Image recognizer\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            },\n            __self: _this\n        }),\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            image: \"/images/undraw_breakfast_psiw.png\",\n            title: \"Diet Generator\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            },\n            __self: _this\n        }),\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            image: \"/images/undraw_visual_data_re_mxxo.png\",\n            title: \"Food Analyzer\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            },\n            __self: _this\n        })\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        __source: {\n            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                className: \"align-items-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        xs: 4,\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"home-text\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Switch helps you to transform your unhealthy lifestyle into a Healthy Lifestyle.\"\n                            }),\n                            !loggedin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                class: \"nav-link active\",\n                                \"aria-current\": \"page\",\n                                href: \"/SignUpPage\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 22\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_SignUpButton_SignUpButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 88\n                                    },\n                                    __self: _this\n                                })\n                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                class: \"nav-link active\",\n                                \"aria-current\": \"page\",\n                                href: \"/Dashboard\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 12\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"cus\", {\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 77\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        className: \"containterOfImage\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/undraw_mint_tea_7su01.png\",\n                            alt: \"\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                className: \"text-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 42,\n                            columnNumber: 14\n                        },\n                        __self: _this,\n                        children: \"Why is it so great?\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"em\", {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 12\n                    },\n                    __self: _this,\n                    children: \"The purpose of this project is to maintain the healthy lifestyle of the people. The main purpose is to create a healthy diet chart using the information entered by the user. Users can also get detailed information about the particular dish by uploading its image or searching by its name. Moreover, Users are also feasible to make some changes in diet charts according to their needs.\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                className: \"text-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: displayCards\n            })\n        ]\n    }));\n};\n_s(HomePage, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ047QUFDRjtBQUNGO0FBQ1Q7QUFDRjs7O0FBRXhDLEdBQUssQ0FBQ1MsUUFBUSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUV0QixHQUFLLENBQXlCSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyQ0ksUUFBUSxHQUFlSixHQUFlLEtBQTdCSyxXQUFXLEdBQUdMLEdBQWU7SUFDN0NDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFHLENBQUNLLFFBQVE7UUFDWkEsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ04sd0RBQWdCLENBQUMsQ0FBVTtRQUMvQyxFQUFFLEVBQUNJLFFBQVEsS0FBR0ksU0FBUyxFQUFDLENBQUM7WUFDdkJMLFdBQVcsQ0FBQyxLQUFLO1FBQ25CLENBQUMsTUFBSSxDQUFDO1lBQ0pBLFdBQVcsQ0FBQyxJQUFJO1FBQ2xCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBRyxDQUFDTSxZQUFZLEdBQUcsQ0FBQzs2RUFDakJaLCtEQUFXO1lBQUNhLEtBQUssRUFBRyxDQUFrRDtZQUFHQyxLQUFLLEVBQUcsQ0FBcUI7Ozs7Ozs7OzZFQUN0R2QsK0RBQVc7WUFBQ2EsS0FBSyxFQUFHLENBQWlDO1lBQUdDLEtBQUssRUFBRyxDQUFjOzs7Ozs7Ozs2RUFDOUVkLCtEQUFXO1lBQUNhLEtBQUssRUFBRyxDQUFzQztZQUFHQyxLQUFLLEVBQUcsQ0FBYTs7Ozs7Ozs7SUFDckYsQ0FBQztJQUNELE1BQU0sdUVBQ0hoQixzREFBUzs7Ozs7Ozs7a0ZBQ1BDLGdEQUFHO2dCQUFDZ0IsU0FBUyxFQUFDLENBQW9COzs7Ozs7OzswRkFDaENsQixnREFBRzt3QkFBQ21CLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OztpR0FDUEMsQ0FBQztnQ0FBQ0YsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7MENBQUMsQ0FHekI7OzZCQUNDVixRQUFRLHdFQUFHYSxDQUFDO2dDQUFDQyxLQUFLLEVBQUMsQ0FBaUI7Z0NBQUNDLENBQVksZUFBQyxDQUFNO2dDQUFDQyxJQUFJLEVBQUMsQ0FBYTs7Ozs7OzsrR0FBRTFCLHdFQUFZOzs7Ozs7OztzR0FDeEZ1QixDQUFDO2dDQUFDQyxLQUFLLEVBQUMsQ0FBaUI7Z0NBQUNDLENBQVksZUFBQyxDQUFNO2dDQUFDQyxJQUFJLEVBQUMsQ0FBWTs7Ozs7OzsrR0FBRUMsQ0FBRzs7Ozs7Ozs7Ozs7eUZBRXZFekIsZ0RBQUc7d0JBQUNrQixTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7dUdBQy9CUSxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBbUM7NEJBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7OztpRkFHdEQxQixnREFBRztnQkFBQ2dCLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OytGQUN6QmxCLGdEQUFHOzs7Ozs7O21HQUFFNkIsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFtQjs7OztpRkFDN0IzQixnREFBRzs7Ozs7OzsrRkFBRTRCLENBQUU7Ozs7Ozs7OEJBQUMsQ0FNeUI7OztpRkFFakM1QixnREFBRztnQkFBQ2dCLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzBCQUFFSCxZQUFZOzs7O0FBR2hELENBQUM7R0E5Q0tSLFFBQVE7S0FBUkEsUUFBUTtBQWdEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25VcEJ1dHRvbiBmcm9tIFwiLi4vY29tcHMvU2lnblVwQnV0dG9uL1NpZ25VcEJ1dHRvblwiO1xyXG5pbXBvcnQgQ3VzdEJ1dHRvbiBmcm9tIFwiLi4vY29tcHMvQ3VzdEJ1dHRvbi9DdXN0QnV0dG9uXCI7XHJcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEaXNwbGF5Q2FyZCBmcm9tIFwiLi4vY29tcHMvRGlzcGxheUNhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBsb2NhbHN0b3JhZ2UgZnJvbSAnbG9jYWwtc3RvcmFnZSc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2xvZ2dlZGluLHNldExvZ2dlZGluXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgdXNlcmRhdGE7XHJcbiAgICB1c2VyZGF0YSA9IEpTT04ucGFyc2UobG9jYWxzdG9yYWdlLmdldCgndXNlcmRhdGEnKSk7XHJcbiAgICAgIGlmKHVzZXJkYXRhPT09dW5kZWZpbmVkKXtcclxuICAgICAgICBzZXRMb2dnZWRpbihmYWxzZSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHNldExvZ2dlZGluKHRydWUpO1xyXG4gICAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBsZXQgZGlzcGxheUNhcmRzID0gW1xyXG4gICAgPERpc3BsYXlDYXJkIGltYWdlPXtgL2ltYWdlcy91bmRyYXdfQXJ0aWZpY2lhbF9pbnRlbGxpZ2VuY2VfcmVfZW5wcC5wbmdgfSB0aXRsZT17YEZvb2QgSW1hZ2UgcmVjb2duaXplcmB9IC8+LFxyXG4gICAgPERpc3BsYXlDYXJkIGltYWdlPXtgL2ltYWdlcy91bmRyYXdfYnJlYWtmYXN0X3BzaXcucG5nYH0gdGl0bGU9e2BEaWV0IEdlbmVyYXRvcmB9IC8+LFxyXG4gICAgPERpc3BsYXlDYXJkIGltYWdlPXtgL2ltYWdlcy91bmRyYXdfdmlzdWFsX2RhdGFfcmVfbXh4by5wbmdgfSB0aXRsZT17YEZvb2QgQW5hbHl6ZXJgfSAvPlxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCB4cz17NH0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob21lLXRleHRcIj5cclxuICAgICAgICAgICAgU3dpdGNoIGhlbHBzIHlvdSB0byB0cmFuc2Zvcm0geW91ciB1bmhlYWx0aHkgbGlmZXN0eWxlIGludG8gYVxyXG4gICAgICAgICAgICBIZWFsdGh5IExpZmVzdHlsZS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgeyFsb2dnZWRpbj8oPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgaHJlZj1cIi9TaWduVXBQYWdlXCI+PFNpZ25VcEJ1dHRvbiAvPjwvYT4pXHJcbiAgICAgICAgIDooPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgaHJlZj1cIi9EYXNoYm9hcmRcIj48Y3VzLz48L2E+KX0gXHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb250YWludGVyT2ZJbWFnZVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvdW5kcmF3X21pbnRfdGVhXzdzdTAxLnBuZycgYWx0PVwiXCIgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8Q29sPjxoND5XaHkgaXMgaXQgc28gZ3JlYXQ/PC9oND48L0NvbD48L1Jvdz5cclxuICAgICAgPFJvdz48ZW0+XHJcbiAgICAgICAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBwcm9qZWN0IGlzIHRvIG1haW50YWluIHRoZSBoZWFsdGh5IGxpZmVzdHlsZSBvZiB0aGVcclxuICAgICAgICBwZW9wbGUuIFRoZSBtYWluIHB1cnBvc2UgaXMgdG8gY3JlYXRlIGEgaGVhbHRoeSBkaWV0IGNoYXJ0IHVzaW5nIHRoZVxyXG4gICAgICAgIGluZm9ybWF0aW9uIGVudGVyZWQgYnkgdGhlIHVzZXIuIFVzZXJzIGNhbiBhbHNvIGdldCBkZXRhaWxlZCBpbmZvcm1hdGlvblxyXG4gICAgICAgIGFib3V0IHRoZSBwYXJ0aWN1bGFyIGRpc2ggYnkgdXBsb2FkaW5nIGl0cyBpbWFnZSBvciBzZWFyY2hpbmcgYnkgaXRzXHJcbiAgICAgICAgbmFtZS4gTW9yZW92ZXIsIFVzZXJzIGFyZSBhbHNvIGZlYXNpYmxlIHRvIG1ha2Ugc29tZSBjaGFuZ2VzIGluIGRpZXRcclxuICAgICAgICBjaGFydHMgYWNjb3JkaW5nIHRvIHRoZWlyIG5lZWRzLjwvZW0+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2Rpc3BsYXlDYXJkc308L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbIlNpZ25VcEJ1dHRvbiIsIkN1c3RCdXR0b24iLCJDb2wiLCJDb250YWluZXIiLCJSb3ciLCJEaXNwbGF5Q2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9jYWxzdG9yYWdlIiwiSG9tZVBhZ2UiLCJsb2dnZWRpbiIsInNldExvZ2dlZGluIiwidXNlcmRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJ1bmRlZmluZWQiLCJkaXNwbGF5Q2FyZHMiLCJpbWFnZSIsInRpdGxlIiwiY2xhc3NOYW1lIiwieHMiLCJwIiwiYSIsImNsYXNzIiwiYXJpYS1jdXJyZW50IiwiaHJlZiIsImN1cyIsImltZyIsInNyYyIsImFsdCIsImg0IiwiZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});