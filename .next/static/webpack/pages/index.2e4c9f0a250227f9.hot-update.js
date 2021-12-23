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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comps_SignUpButton_SignUpButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/SignUpButton/SignUpButton */ \"./comps/SignUpButton/SignUpButton.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/DisplayCard/Card */ \"./comps/DisplayCard/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var userdata;\n        userdata = JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_4___default().get('userdata'));\n        if (userdata === undefined) {\n            setLoggedin(false);\n        } else {\n            setLoggedin(true);\n        }\n    }, []);\n    var displayCards = [\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            image: \"/images/undraw_Artificial_intelligence_re_enpp.png\",\n            title: \"Food Image recognizer\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 5\n            },\n            __self: _this\n        }),\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            image: \"/images/undraw_breakfast_psiw.png\",\n            title: \"Diet Generator\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            },\n            __self: _this\n        }),\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_DisplayCard_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            image: \"/images/undraw_visual_data_re_mxxo.png\",\n            title: \"Food Analyzer\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            },\n            __self: _this\n        })\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        __source: {\n            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                className: \"align-items-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xs: 4,\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"home-text\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Switch helps you to transform your unhealthy lifestyle into a Healthy Lifestyle.\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                class: \"nav-link active\",\n                                \"aria-current\": \"page\",\n                                href: \"/SignUpPage\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_SignUpButton_SignUpButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 77\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        className: \"containterOfImage\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/undraw_mint_tea_7su01.png\",\n                            alt: \"\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                className: \"text-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                            lineNumber: 39,\n                            columnNumber: 14\n                        },\n                        __self: _this,\n                        children: \"Why is it so great?\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"em\", {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 12\n                    },\n                    __self: _this,\n                    children: \"The purpose of this project is to maintain the healthy lifestyle of the people. The main purpose is to create a healthy diet chart using the information entered by the user. Users can also get detailed information about the particular dish by uploading its image or searching by its name. Moreover, Users are also feasible to make some changes in diet charts according to their needs.\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                className: \"text-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: displayCards\n            })\n        ]\n    }));\n};\n_s(HomePage, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDUjtBQUNGO0FBQ1Q7QUFDRjs7O0FBRXhDLEdBQUssQ0FBQ1EsUUFBUSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUN0QixHQUFLLENBQXlCSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyQ0ksUUFBUSxHQUFlSixHQUFlLEtBQTdCSyxXQUFXLEdBQUdMLEdBQWU7SUFDN0NDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFHLENBQUNLLFFBQVE7UUFDWkEsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ04sd0RBQWdCLENBQUMsQ0FBVTtRQUMvQyxFQUFFLEVBQUNJLFFBQVEsS0FBR0ksU0FBUyxFQUFDLENBQUM7WUFDdkJMLFdBQVcsQ0FBQyxLQUFLO1FBQ25CLENBQUMsTUFBSSxDQUFDO1lBQ0pBLFdBQVcsQ0FBQyxJQUFJO1FBQ2xCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBRyxDQUFDTSxZQUFZLEdBQUcsQ0FBQzs2RUFDakJaLCtEQUFXO1lBQUNhLEtBQUssRUFBRyxDQUFrRDtZQUFHQyxLQUFLLEVBQUcsQ0FBcUI7Ozs7Ozs7OzZFQUN0R2QsK0RBQVc7WUFBQ2EsS0FBSyxFQUFHLENBQWlDO1lBQUdDLEtBQUssRUFBRyxDQUFjOzs7Ozs7Ozs2RUFDOUVkLCtEQUFXO1lBQUNhLEtBQUssRUFBRyxDQUFzQztZQUFHQyxLQUFLLEVBQUcsQ0FBYTs7Ozs7Ozs7SUFDckYsQ0FBQztJQUNELE1BQU0sdUVBQ0hoQixzREFBUzs7Ozs7Ozs7a0ZBQ1BDLGdEQUFHO2dCQUFDZ0IsU0FBUyxFQUFDLENBQW9COzs7Ozs7OzswRkFDaENsQixnREFBRzt3QkFBQ21CLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OztpR0FDUEMsQ0FBQztnQ0FBQ0YsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7MENBQUMsQ0FHekI7O2lHQUNDRyxDQUFDO2dDQUFDQyxLQUFLLEVBQUMsQ0FBaUI7Z0NBQUNDLENBQVksZUFBQyxDQUFNO2dDQUFDQyxJQUFJLEVBQUMsQ0FBYTs7Ozs7OzsrR0FBRXpCLHdFQUFZOzs7Ozs7Ozs7Ozt5RkFFaEZDLGdEQUFHO3dCQUFDa0IsU0FBUyxFQUFDLENBQW1COzs7Ozs7O3VHQUMvQk8sQ0FBRzs0QkFBQ0MsR0FBRyxFQUFDLENBQW1DOzRCQUFDQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7Ozs7Ozs7aUZBR3REekIsZ0RBQUc7Z0JBQUNnQixTQUFTLEVBQUMsQ0FBYTs7Ozs7OzsrRkFDekJsQixnREFBRzs7Ozs7OzttR0FBRTRCLENBQUU7Ozs7Ozs7a0NBQUMsQ0FBbUI7Ozs7aUZBQzdCMUIsZ0RBQUc7Ozs7Ozs7K0ZBQUUyQixDQUFFOzs7Ozs7OzhCQUFDLENBTXlCOzs7aUZBRWpDM0IsZ0RBQUc7Z0JBQUNnQixTQUFTLEVBQUMsQ0FBYTs7Ozs7OzswQkFBRUgsWUFBWTs7OztBQUdoRCxDQUFDO0dBNUNLUixRQUFRO0tBQVJBLFFBQVE7QUE4Q2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduVXBCdXR0b24gZnJvbSBcIi4uL2NvbXBzL1NpZ25VcEJ1dHRvbi9TaWduVXBCdXR0b25cIjtcclxuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IERpc3BsYXlDYXJkIGZyb20gXCIuLi9jb21wcy9EaXNwbGF5Q2FyZC9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxvY2Fsc3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlJztcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2dnZWRpbixzZXRMb2dnZWRpbl09IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIHVzZXJkYXRhO1xyXG4gICAgdXNlcmRhdGEgPSBKU09OLnBhcnNlKGxvY2Fsc3RvcmFnZS5nZXQoJ3VzZXJkYXRhJykpO1xyXG4gICAgICBpZih1c2VyZGF0YT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgc2V0TG9nZ2VkaW4oZmFsc2UpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBzZXRMb2dnZWRpbih0cnVlKTtcclxuICAgICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgbGV0IGRpc3BsYXlDYXJkcyA9IFtcclxuICAgIDxEaXNwbGF5Q2FyZCBpbWFnZT17YC9pbWFnZXMvdW5kcmF3X0FydGlmaWNpYWxfaW50ZWxsaWdlbmNlX3JlX2VucHAucG5nYH0gdGl0bGU9e2BGb29kIEltYWdlIHJlY29nbml6ZXJgfSAvPixcclxuICAgIDxEaXNwbGF5Q2FyZCBpbWFnZT17YC9pbWFnZXMvdW5kcmF3X2JyZWFrZmFzdF9wc2l3LnBuZ2B9IHRpdGxlPXtgRGlldCBHZW5lcmF0b3JgfSAvPixcclxuICAgIDxEaXNwbGF5Q2FyZCBpbWFnZT17YC9pbWFnZXMvdW5kcmF3X3Zpc3VhbF9kYXRhX3JlX214eG8ucG5nYH0gdGl0bGU9e2BGb29kIEFuYWx5emVyYH0gLz5cclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxDb2wgeHM9ezR9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaG9tZS10ZXh0XCI+XHJcbiAgICAgICAgICAgIFN3aXRjaCBoZWxwcyB5b3UgdG8gdHJhbnNmb3JtIHlvdXIgdW5oZWFsdGh5IGxpZmVzdHlsZSBpbnRvIGFcclxuICAgICAgICAgICAgSGVhbHRoeSBMaWZlc3R5bGUuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiL1NpZ25VcFBhZ2VcIj48U2lnblVwQnV0dG9uIC8+PC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29udGFpbnRlck9mSW1hZ2VcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL3VuZHJhd19taW50X3RlYV83c3UwMS5wbmcnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPENvbD48aDQ+V2h5IGlzIGl0IHNvIGdyZWF0PzwvaDQ+PC9Db2w+PC9Sb3c+XHJcbiAgICAgIDxSb3c+PGVtPlxyXG4gICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCBpcyB0byBtYWludGFpbiB0aGUgaGVhbHRoeSBsaWZlc3R5bGUgb2YgdGhlXHJcbiAgICAgICAgcGVvcGxlLiBUaGUgbWFpbiBwdXJwb3NlIGlzIHRvIGNyZWF0ZSBhIGhlYWx0aHkgZGlldCBjaGFydCB1c2luZyB0aGVcclxuICAgICAgICBpbmZvcm1hdGlvbiBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBVc2VycyBjYW4gYWxzbyBnZXQgZGV0YWlsZWQgaW5mb3JtYXRpb25cclxuICAgICAgICBhYm91dCB0aGUgcGFydGljdWxhciBkaXNoIGJ5IHVwbG9hZGluZyBpdHMgaW1hZ2Ugb3Igc2VhcmNoaW5nIGJ5IGl0c1xyXG4gICAgICAgIG5hbWUuIE1vcmVvdmVyLCBVc2VycyBhcmUgYWxzbyBmZWFzaWJsZSB0byBtYWtlIHNvbWUgY2hhbmdlcyBpbiBkaWV0XHJcbiAgICAgICAgY2hhcnRzIGFjY29yZGluZyB0byB0aGVpciBuZWVkcy48L2VtPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntkaXNwbGF5Q2FyZHN9PC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJTaWduVXBCdXR0b24iLCJDb2wiLCJDb250YWluZXIiLCJSb3ciLCJEaXNwbGF5Q2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9jYWxzdG9yYWdlIiwiSG9tZVBhZ2UiLCJsb2dnZWRpbiIsInNldExvZ2dlZGluIiwidXNlcmRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXQiLCJ1bmRlZmluZWQiLCJkaXNwbGF5Q2FyZHMiLCJpbWFnZSIsInRpdGxlIiwiY2xhc3NOYW1lIiwieHMiLCJwIiwiYSIsImNsYXNzIiwiYXJpYS1jdXJyZW50IiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImg0IiwiZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});