"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/SignUpPage",{

/***/ "./pages/SignUpPage.js":
/*!*****************************!*\
  !*** ./pages/SignUpPage.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _comps_CustButton_CustButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/CustButton/CustButton */ \"./comps/CustButton/CustButton.js\");\n/* harmony import */ var _comps_CustInput_CustInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/CustInput/CustInput */ \"./comps/CustInput/CustInput.js\");\n/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datetime */ \"./node_modules/react-datetime/dist/react-datetime.cjs.js\");\n/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n//import DatePicker from \"react-date-picker\";\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SignUpPage = function() {\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), name = ref2[0], setName = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), height = ref3[0], setHeight = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), weight = ref4[0], setWeight = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), foodpreference = ref5[0], setFoodpreferences = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), Gender = ref6[0], setGender = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), setPassword = ref7[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: \"u-clearfix u-section-1\",\n        id: \"sec-4b2d\",\n        __source: {\n            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"u-clearfix u-sheet u-sheet-1\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                    className: \"u-text u-text-1 themecolortext\",\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Create Account\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                    className: \"text-center \",\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                            md: \"6\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                                onSubmit: signup,\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustInput_CustInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        label: \"Email Address\",\n                                        placeholder: \"Enter Your Email Address\",\n                                        typeInput: \"email\",\n                                        id: \"email\",\n                                        onChange: function(e) {\n                                            return setEmail(e.target.value);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustInput_CustInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        label: \"Name\",\n                                        placeholder: \"Enter Your Email Address\",\n                                        typeInput: \"text\",\n                                        id: \"name\",\n                                        onChange: function(e) {\n                                            return setName(e.target.value);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_datetime__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"bordercolor mt-2\",\n                                        timeFormat: false,\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Select, {\n                                        className: \"bordercolor mt-2\",\n                                        \"aria-label\": \"Gender\",\n                                        id: \"gender\",\n                                        onChange: function(e) {\n                                            return setGender(e.target.value);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Gender\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                                value: \"Male\",\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Male\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                                value: \"Female\",\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Female\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                                value: \"Others\",\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Others\"\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Select, {\n                                        className: \"bordercolor mt-2\",\n                                        \"aria-label\": \"Country\",\n                                        id: \"country\",\n                                        onChange: function(e) {\n                                            return setCountry(e.target.value);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Country\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                                value: \"Male\",\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"India\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                                value: \"Female\",\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Canada\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                                                value: \"Others\",\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"China\"\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustInput_CustInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        label: \"Food Preference\",\n                                        placeholder: \"Enter Your Food Preference\",\n                                        typeInput: \"email\",\n                                        id: \"foodpreference\",\n                                        onChange: function(e) {\n                                            return setFoodPreferences(e.target.value);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustInput_CustInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        xs: 1,\n                                        label: \"Height\",\n                                        typeInput: \"number\",\n                                        id: \"height\",\n                                        onChange: function(e) {\n                                            return setHeight(e.target.value);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustInput_CustInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        md: 2,\n                                        label: \"Weight\",\n                                        typeInput: \"number\",\n                                        id: \"weight\",\n                                        onChange: function(e) {\n                                            return setWeight(e.target.value);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustInput_CustInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        label: \"Password\",\n                                        typeInput: \"password\",\n                                        id: \"password\",\n                                        onChange: function(e) {\n                                            return setPassword(e.target.value);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                                        className: \"mt-2\",\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                            __source: {\n                                                fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustButton_CustButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                type: \"button\",\n                                                val: \"Signup\",\n                                                onclick: signup,\n                                                __source: {\n                                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 15\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    })\n                                ]\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                            md: \"6\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: \"images/undraw_profile_details_f8b7.png\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\SignUpPage.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(SignUpPage, \"iX9l2Eske7NIwng8Raka3xFpp6A=\");\n_c = SignUpPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpPage);\nvar _c;\n$RefreshReg$(_c, \"SignUpPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2wsIEZvcm0sIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBDdXN0QnV0dG9uIGZyb20gXCIuLi9jb21wcy9DdXN0QnV0dG9uL0N1c3RCdXR0b25cIjtcbmltcG9ydCBDdXN0SW5wdXQgZnJvbSBcIi4uL2NvbXBzL0N1c3RJbnB1dC9DdXN0SW5wdXRcIjtcbi8vaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGUtcGlja2VyXCI7XG5pbXBvcnQgRGF0ZXRpbWUgZnJvbSBcInJlYWN0LWRhdGV0aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgU2lnblVwUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL3N3aXRjaGRpZXQuaGVyb2t1YXBwLmNvbVwiO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3dlaWdodCwgc2V0V2VpZ2h0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Zvb2RwcmVmZXJlbmNlLCBzZXRGb29kcHJlZmVyZW5jZXNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbR2VuZGVyLCBzZXRHZW5kZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ1LWNsZWFyZml4IHUtc2VjdGlvbi0xXCIgaWQ9XCJzZWMtNGIyZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LWNsZWFyZml4IHUtc2hlZXQgdS1zaGVldC0xXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1LXRleHQgdS10ZXh0LTEgdGhlbWVjb2xvcnRleHRcIj5DcmVhdGUgQWNjb3VudDwvaDI+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgPENvbCBtZD1cIjZcIj5cbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtzaWdudXB9PlxuICAgICAgICAgICAgICA8Q3VzdElucHV0IFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIkVtYWlsIEFkZHJlc3NcIn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJFbnRlciBZb3VyIEVtYWlsIEFkZHJlc3NcIn1cbiAgICAgICAgICAgICAgICB0eXBlSW5wdXQ9e1wiZW1haWxcIn1cbiAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q3VzdElucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9e1wiTmFtZVwifVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkVudGVyIFlvdXIgRW1haWwgQWRkcmVzc1wifVxuICAgICAgICAgICAgICAgIHR5cGVJbnB1dD17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxEYXRldGltZSBjbGFzc05hbWU9XCJib3JkZXJjb2xvciBtdC0yXCIgdGltZUZvcm1hdD17ZmFsc2V9Lz5cbiAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0IGNsYXNzTmFtZT1cImJvcmRlcmNvbG9yIG10LTJcIiBhcmlhLWxhYmVsPVwiR2VuZGVyXCIgaWQ9XCJnZW5kZXJcIiBvbkNoYW5nZT17ZSA9PiBzZXRHZW5kZXIoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkdlbmRlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYWxlXCI+TWFsZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGZW1hbGVcIj5GZW1hbGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBjbGFzc05hbWU9XCJib3JkZXJjb2xvciBtdC0yXCIgYXJpYS1sYWJlbD1cIkNvdW50cnlcIiBpZD1cImNvdW50cnlcIiBvbkNoYW5nZT17ZSA9PiBzZXRDb3VudHJ5KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Db3VudHJ5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hbGVcIj5JbmRpYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGZW1hbGVcIj5DYW5hZGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+Q2hpbmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtLlNlbGVjdD5cbiAgICAgICAgICAgICAgPEN1c3RJbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIkZvb2QgUHJlZmVyZW5jZVwifVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkVudGVyIFlvdXIgRm9vZCBQcmVmZXJlbmNlXCJ9XG4gICAgICAgICAgICAgICAgdHlwZUlucHV0PXtcImVtYWlsXCJ9XG4gICAgICAgICAgICAgICAgaWQ9XCJmb29kcHJlZmVyZW5jZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Rm9vZFByZWZlcmVuY2VzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxDdXN0SW5wdXQgeHM9ezF9IGxhYmVsPXtcIkhlaWdodFwifSB0eXBlSW5wdXQ9e1wibnVtYmVyXCJ9IGlkPVwiaGVpZ2h0XCIgb25DaGFuZ2U9e2UgPT4gc2V0SGVpZ2h0KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICA8Q3VzdElucHV0IG1kPXsyfSBsYWJlbD17XCJXZWlnaHRcIn0gdHlwZUlucHV0PXtcIm51bWJlclwifSBpZD1cIndlaWdodFwiIG9uQ2hhbmdlPXtlID0+IHNldFdlaWdodChlLnRhcmdldC52YWx1ZSl9Lz5cblxuICAgICAgICAgICAgICA8Q3VzdElucHV0IGxhYmVsPXtcIlBhc3N3b3JkXCJ9IHR5cGVJbnB1dD17XCJwYXNzd29yZFwifSBpZD1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgIDxDdXN0QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YWw9XCJTaWdudXBcIiBvbmNsaWNrPXtzaWdudXB9Lz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy91bmRyYXdfcHJvZmlsZV9kZXRhaWxzX2Y4YjcucG5nXCIgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBQYWdlO1xuIl0sIm5hbWVzIjpbIkNvbCIsIkZvcm0iLCJSb3ciLCJDdXN0QnV0dG9uIiwiQ3VzdElucHV0IiwiRGF0ZXRpbWUiLCJ1c2VTdGF0ZSIsIlNpZ25VcFBhZ2UiLCJ1cmwiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm5hbWUiLCJzZXROYW1lIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Iiwid2VpZ2h0Iiwic2V0V2VpZ2h0IiwiZm9vZHByZWZlcmVuY2UiLCJzZXRGb29kcHJlZmVyZW5jZXMiLCJHZW5kZXIiLCJzZXRHZW5kZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXYiLCJoMiIsIm1kIiwib25TdWJtaXQiLCJzaWdudXAiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZUlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0aW1lRm9ybWF0IiwiU2VsZWN0IiwiYXJpYS1sYWJlbCIsIm9wdGlvbiIsInNldENvdW50cnkiLCJzZXRGb29kUHJlZmVyZW5jZXMiLCJ4cyIsInR5cGUiLCJ2YWwiLCJvbmNsaWNrIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/SignUpPage.js\n");

/***/ })

});