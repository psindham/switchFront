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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comps_SignUpButton_SignUpButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/SignUpButton/SignUpButton */ \"./comps/SignUpButton/SignUpButton.js\");\n/* harmony import */ var _comps_CustButton_CustButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/CustButton/CustButton */ \"./comps/CustButton/CustButton.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/DisplayCard/Card */ \"./comps/DisplayCard/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var userdata;\n        userdata = JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_5___default().get('userdata'));\n        if (userdata === undefined) {\n            setLoggedin(false);\n        } else {\n            setLoggedin(true);\n        }\n    }, []);\n    var displayCards = [\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            image: \"/images/undraw_Artificial_intelligence_re_enpp.png\",\n            title: \"Food Image recognizer\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            },\n            __self: _this\n        }),\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            image: \"/images/undraw_breakfast_psiw.png\",\n            title: \"Diet Generator\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            },\n            __self: _this\n        }),\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            image: \"/images/undraw_visual_data_re_mxxo.png\",\n            title: \"Food Analyzer\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            },\n            __self: _this\n        })\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        __source: {\n            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                className: \"align-items-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        xs: 4,\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"home-text\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Switch helps you to transform your unhealthy lifestyle into a Healthy Lifestyle.\"\n                            }),\n                            !loggedin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                class: \"nav-link active\",\n                                \"aria-current\": \"page\",\n                                href: \"/SignUpPage\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 22\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_SignUpButton_SignUpButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 88\n                                    },\n                                    __self: _this\n                                })\n                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                class: \"nav-link active\",\n                                \"aria-current\": \"page\",\n                                href: \"/Dashboard\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 12\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustButton_CustButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    val: \"Goto Dashboard\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 77\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        className: \"containterOfImage\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/undraw_mint_tea_7su01.png\",\n                            alt: \"\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                className: \"text-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 42,\n                            columnNumber: 14\n                        },\n                        __self: _this,\n                        children: \"Why is it so great?\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"em\", {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 12\n                    },\n                    __self: _this,\n                    children: \"The purpose of this project is to maintain the healthy lifestyle of the people. The main purpose is to create a healthy diet chart using the information entered by the user. Users can also get detailed information about the particular dish by uploading its image or searching by its name. Moreover, Users are also feasible to make some changes in diet charts according to their needs.\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                className: \"text-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: displayCards\n            })\n        ]\n    }));\n};\n_s(HomePage, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ047QUFDRjtBQUNGO0FBQ1Q7QUFDRjs7O0FBRXhDLEdBQUssQ0FBQ1MsUUFBUSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUV0QixHQUFLLENBQXlCSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyQ0ksUUFBUSxHQUFlSixHQUFlLEtBQTdCSyxXQUFXLEdBQUdMLEdBQWU7SUFDN0NDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFHLENBQUNLLFFBQVE7UUFDWkEsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ04sd0RBQWdCLENBQUMsQ0FBVTtRQUMvQyxFQUFFLEVBQUNJLFFBQVEsS0FBR0ksU0FBUyxFQUFDLENBQUM7WUFDdkJMLFdBQVcsQ0FBQyxLQUFLO1FBQ25CLENBQUMsTUFBSSxDQUFDO1lBQ0pBLFdBQVcsQ0FBQyxJQUFJO1FBQ2xCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBRyxDQUFDTSxZQUFZLEdBQUcsQ0FBQzs2RUFDakJaLCtEQUFXO1lBQUNhLEtBQUssRUFBRyxDQUFrRDtZQUFHQyxLQUFLLEVBQUcsQ0FBcUI7Ozs7Ozs7OzZFQUN0R2QsK0RBQVc7WUFBQ2EsS0FBSyxFQUFHLENBQWlDO1lBQUdDLEtBQUssRUFBRyxDQUFjOzs7Ozs7Ozs2RUFDOUVkLCtEQUFXO1lBQUNhLEtBQUssRUFBRyxDQUFzQztZQUFHQyxLQUFLLEVBQUcsQ0FBYTs7Ozs7Ozs7SUFDckYsQ0FBQztJQUNELE1BQU0sdUVBQ0hoQixzREFBUzs7Ozs7Ozs7a0ZBQ1BDLGdEQUFHO2dCQUFDZ0IsU0FBUyxFQUFDLENBQW9COzs7Ozs7OzswRkFDaENsQixnREFBRzt3QkFBQ21CLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OztpR0FDUEMsQ0FBQztnQ0FBQ0YsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7MENBQUMsQ0FHekI7OzZCQUNDVixRQUFRLHdFQUFHYSxDQUFDO2dDQUFDQyxLQUFLLEVBQUMsQ0FBaUI7Z0NBQUNDLENBQVksZUFBQyxDQUFNO2dDQUFDQyxJQUFJLEVBQUMsQ0FBYTs7Ozs7OzsrR0FBRTFCLHdFQUFZOzs7Ozs7OztzR0FDeEZ1QixDQUFDO2dDQUFDQyxLQUFLLEVBQUMsQ0FBaUI7Z0NBQUNDLENBQVksZUFBQyxDQUFNO2dDQUFDQyxJQUFJLEVBQUMsQ0FBWTs7Ozs7OzsrR0FBRXpCLG9FQUFVO29DQUFDMEIsR0FBRyxFQUFDLENBQWdCOzs7Ozs7Ozs7Ozt5RkFFbkd6QixnREFBRzt3QkFBQ2tCLFNBQVMsRUFBQyxDQUFtQjs7Ozs7Ozt1R0FDL0JRLENBQUc7NEJBQUNDLEdBQUcsRUFBQyxDQUFtQzs0QkFBQ0MsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7Ozs7O2lGQUd0RDFCLGdEQUFHO2dCQUFDZ0IsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7K0ZBQ3pCbEIsZ0RBQUc7Ozs7Ozs7bUdBQUU2QixDQUFFOzs7Ozs7O2tDQUFDLENBQW1COzs7O2lGQUM3QjNCLGdEQUFHOzs7Ozs7OytGQUFFNEIsQ0FBRTs7Ozs7Ozs4QkFBQyxDQU15Qjs7O2lGQUVqQzVCLGdEQUFHO2dCQUFDZ0IsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7MEJBQUVILFlBQVk7Ozs7QUFHaEQsQ0FBQztHQTlDS1IsUUFBUTtLQUFSQSxRQUFRO0FBZ0RkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnblVwQnV0dG9uIGZyb20gXCIuLi9jb21wcy9TaWduVXBCdXR0b24vU2lnblVwQnV0dG9uXCI7XHJcbmltcG9ydCBDdXN0QnV0dG9uIGZyb20gXCIuLi9jb21wcy9DdXN0QnV0dG9uL0N1c3RCdXR0b25cIjtcclxuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IERpc3BsYXlDYXJkIGZyb20gXCIuLi9jb21wcy9EaXNwbGF5Q2FyZC9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxvY2Fsc3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbbG9nZ2VkaW4sc2V0TG9nZ2VkaW5dPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciB1c2VyZGF0YTtcclxuICAgIHVzZXJkYXRhID0gSlNPTi5wYXJzZShsb2NhbHN0b3JhZ2UuZ2V0KCd1c2VyZGF0YScpKTtcclxuICAgICAgaWYodXNlcmRhdGE9PT11bmRlZmluZWQpe1xyXG4gICAgICAgIHNldExvZ2dlZGluKGZhbHNlKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc2V0TG9nZ2VkaW4odHJ1ZSk7XHJcbiAgICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGxldCBkaXNwbGF5Q2FyZHMgPSBbXHJcbiAgICA8RGlzcGxheUNhcmQgaW1hZ2U9e2AvaW1hZ2VzL3VuZHJhd19BcnRpZmljaWFsX2ludGVsbGlnZW5jZV9yZV9lbnBwLnBuZ2B9IHRpdGxlPXtgRm9vZCBJbWFnZSByZWNvZ25pemVyYH0gLz4sXHJcbiAgICA8RGlzcGxheUNhcmQgaW1hZ2U9e2AvaW1hZ2VzL3VuZHJhd19icmVha2Zhc3RfcHNpdy5wbmdgfSB0aXRsZT17YERpZXQgR2VuZXJhdG9yYH0gLz4sXHJcbiAgICA8RGlzcGxheUNhcmQgaW1hZ2U9e2AvaW1hZ2VzL3VuZHJhd192aXN1YWxfZGF0YV9yZV9teHhvLnBuZ2B9IHRpdGxlPXtgRm9vZCBBbmFseXplcmB9IC8+XHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8Q29sIHhzPXs0fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhvbWUtdGV4dFwiPlxyXG4gICAgICAgICAgICBTd2l0Y2ggaGVscHMgeW91IHRvIHRyYW5zZm9ybSB5b3VyIHVuaGVhbHRoeSBsaWZlc3R5bGUgaW50byBhXHJcbiAgICAgICAgICAgIEhlYWx0aHkgTGlmZXN0eWxlLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICB7IWxvZ2dlZGluPyg8YSBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiL1NpZ25VcFBhZ2VcIj48U2lnblVwQnV0dG9uIC8+PC9hPilcclxuICAgICAgICAgOig8YSBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiL0Rhc2hib2FyZFwiPjxDdXN0QnV0dG9uIHZhbD1cIkdvdG8gRGFzaGJvYXJkXCIvPjwvYT4pfSBcclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbnRhaW50ZXJPZkltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz0nL2ltYWdlcy91bmRyYXdfbWludF90ZWFfN3N1MDEucG5nJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxDb2w+PGg0PldoeSBpcyBpdCBzbyBncmVhdD88L2g0PjwvQ29sPjwvUm93PlxyXG4gICAgICA8Um93PjxlbT5cclxuICAgICAgICBUaGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QgaXMgdG8gbWFpbnRhaW4gdGhlIGhlYWx0aHkgbGlmZXN0eWxlIG9mIHRoZVxyXG4gICAgICAgIHBlb3BsZS4gVGhlIG1haW4gcHVycG9zZSBpcyB0byBjcmVhdGUgYSBoZWFsdGh5IGRpZXQgY2hhcnQgdXNpbmcgdGhlXHJcbiAgICAgICAgaW5mb3JtYXRpb24gZW50ZXJlZCBieSB0aGUgdXNlci4gVXNlcnMgY2FuIGFsc28gZ2V0IGRldGFpbGVkIGluZm9ybWF0aW9uXHJcbiAgICAgICAgYWJvdXQgdGhlIHBhcnRpY3VsYXIgZGlzaCBieSB1cGxvYWRpbmcgaXRzIGltYWdlIG9yIHNlYXJjaGluZyBieSBpdHNcclxuICAgICAgICBuYW1lLiBNb3Jlb3ZlciwgVXNlcnMgYXJlIGFsc28gZmVhc2libGUgdG8gbWFrZSBzb21lIGNoYW5nZXMgaW4gZGlldFxyXG4gICAgICAgIGNoYXJ0cyBhY2NvcmRpbmcgdG8gdGhlaXIgbmVlZHMuPC9lbT5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57ZGlzcGxheUNhcmRzfTwvUm93PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiU2lnblVwQnV0dG9uIiwiQ3VzdEJ1dHRvbiIsIkNvbCIsIkNvbnRhaW5lciIsIlJvdyIsIkRpc3BsYXlDYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsb2NhbHN0b3JhZ2UiLCJIb21lUGFnZSIsImxvZ2dlZGluIiwic2V0TG9nZ2VkaW4iLCJ1c2VyZGF0YSIsIkpTT04iLCJwYXJzZSIsImdldCIsInVuZGVmaW5lZCIsImRpc3BsYXlDYXJkcyIsImltYWdlIiwidGl0bGUiLCJjbGFzc05hbWUiLCJ4cyIsInAiLCJhIiwiY2xhc3MiLCJhcmlhLWN1cnJlbnQiLCJocmVmIiwidmFsIiwiaW1nIiwic3JjIiwiYWx0IiwiaDQiLCJlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});