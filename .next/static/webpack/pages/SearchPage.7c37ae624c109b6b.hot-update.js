"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/SearchPage",{

/***/ "./pages/SearchPage.js":
/*!*****************************!*\
  !*** ./pages/SearchPage.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _comps_CustButton_CustButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/CustButton/CustButton */ \"./comps/CustButton/CustButton.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! form-data */ \"./node_modules/form-data/lib/browser.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar url = \"https://switchfood.herokuapp.com\";\nvar subFile;\nfunction uploadFile() {\n    console.log(\"Hello\");\n    if (subFile === undefined) {\n        return;\n    }\n    var fd = new (form_data__WEBPACK_IMPORTED_MODULE_2___default())();\n    fd.append('image', subFile);\n    fetch(url + \"/food/image/\", {\n        method: 'POST',\n        origin: '*',\n        mode: 'cors',\n        header: {\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Content-Type\": \"form-data\",\n            \"Accept\": \"application/json\"\n        },\n        body: fd\n    }).then(function(res) {\n        console.log(res);\n    }).then(function(json) {\n        return console.log(json);\n    }).catch(function(err) {\n        return console.error(err);\n    });\n}\nfunction onFileChange(fileChangeEvent) {\n    fileChangeEvent.preventDefault();\n    subFile = fileChangeEvent.target.files[0];\n    console.log(\"Hello\");\n}\nvar SearchPage = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        __source: {\n            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n            lineNumber: 44,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                className: \"align-items-center\",\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                            lineNumber: 46,\n                            columnNumber: 14\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"themecolortext\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                lineNumber: 46,\n                                columnNumber: 18\n                            },\n                            __self: _this,\n                            children: \"FooBit Search\"\n                        })\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                    xs: \"5\",\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.InputGroup, {\n                        className: \"mb-3\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                placeholder: \"Search here\",\n                                \"aria-label\": \"Search here\",\n                                \"aria-describedby\": \"basic-addon2\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                className: \"CustButton themecolor\",\n                                variant: \"success\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSearch, {\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                    className: \"themecolortext\",\n                    __source: {\n                        fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"OR\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                        xs: \"5\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                            onSubmit: uploadFile,\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {\n                                controlId: \"formFile\",\n                                className: \"mb-3\",\n                                __source: {\n                                    fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: \"Search By Image\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {\n                                        type: \"file\",\n                                        onChange: function(ev) {\n                                            return onFileChange(ev);\n                                        },\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_comps_CustButton_CustButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        type: \"button\",\n                                        onclick: uploadFile,\n                                        val: \"Search\",\n                                        __source: {\n                                            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 13\n                                        },\n                                        __self: _this\n                                    })\n                                ]\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"images/undraw_searching_p5ux.png\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\pages\\\\SearchPage.js\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = SearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\nvar _c;\n$RefreshReg$(_c, \"SearchPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkEseURBQVk7d0NBQUNnRCxJQUFJLEVBQUMsQ0FBTTt3Q0FBQ0MsUUFBUSxFQUFFLFFBQVF0QixDQUFQdUIsRUFBRTs0Q0FBS3ZCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDdUIsRUFBRTs7Ozs7Ozs7O3lHQUMxREMsQ0FBRTs7Ozs7Ozs7eUdBQ0Y5QyxvRUFBVTt3Q0FBRTJDLElBQUksRUFBQyxDQUFRO3dDQUFDSSxPQUFPLEVBQUUzQyxVQUFVO3dDQUFFNEMsR0FBRyxFQUFDLENBQVE7Ozs7Ozs7Ozs7Ozt5RkFJL0R2RCxnREFBRzs7Ozs7Ozt1R0FDQ3dELENBQUc7NEJBQUNDLEdBQUcsRUFBQyxDQUFrQzs7Ozs7Ozs7Ozs7aUZBS2hEcEQsZ0RBQUc7Ozs7Ozs7Ozs7QUFHVixDQUFDO0tBMUNLNkIsVUFBVTtBQTRDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9TZWFyY2hQYWdlLmpzPzhhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb2wsXG4gIENvbnRhaW5lcixcbiAgRm9ybSxcbiAgRm9ybUNvbnRyb2wsXG4gIElucHV0R3JvdXAsXG4gIFJvdyxcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgRmFTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBDdXN0QnV0dG9uIGZyb20gXCIuLi9jb21wcy9DdXN0QnV0dG9uL0N1c3RCdXR0b25cIlxuaW1wb3J0IEZvcm1EYXRhIGZyb20gJ2Zvcm0tZGF0YSc7XG5jb25zdCB1cmwgPSBcImh0dHBzOi8vc3dpdGNoZm9vZC5oZXJva3VhcHAuY29tXCI7XG52YXIgc3ViRmlsZTtcbiBcbmZ1bmN0aW9uIHVwbG9hZEZpbGUoKXtcbiAgY29uc29sZS5sb2coXCJIZWxsb1wiKTtcbiAgaWYoc3ViRmlsZSA9PT0gdW5kZWZpbmVkKSB7cmV0dXJufVxuICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuICBmZC5hcHBlbmQoJ2ltYWdlJywgc3ViRmlsZSk7XG4gIGZldGNoKHVybCtcIi9mb29kL2ltYWdlL1wiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG9yaWdpbjogJyonLFxuICAgICAgbW9kZTonY29ycycsXG4gICAgICBoZWFkZXIgOntcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJmb3JtLWRhdGFcIixcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICBib2R5OiBmZFxuICB9KVxuICAgLnRoZW4ocmVzID0+IHtjb25zb2xlLmxvZyhyZXMpfSlcbiAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xufSA7XG5mdW5jdGlvbiBvbkZpbGVDaGFuZ2UoZmlsZUNoYW5nZUV2ZW50KSB7XG4gICBmaWxlQ2hhbmdlRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIHN1YkZpbGUgPSBmaWxlQ2hhbmdlRXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgY29uc29sZS5sb2coXCJIZWxsb1wiKTtcbn07XG5cbmNvbnN0IFNlYXJjaFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxDb2w+PGgzPjxwIGNsYXNzTmFtZT1cInRoZW1lY29sb3J0ZXh0XCI+Rm9vQml0IFNlYXJjaDwvcD48L2gzPjwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPVwiNVwiPlxuICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBoZXJlXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJDdXN0QnV0dG9uIHRoZW1lY29sb3JcIiB2YXJpYW50PVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgICA8RmFTZWFyY2ggLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIFxuICAgICAgPGgxPjxiIGNsYXNzTmFtZT1cInRoZW1lY29sb3J0ZXh0XCI+T1I8L2I+PC9oMT5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgeHM9JzUnPlxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt1cGxvYWRGaWxlfT4gXG4gICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUZpbGVcIiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5TZWFyY2ggQnkgSW1hZ2U8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhldikgPT4gb25GaWxlQ2hhbmdlKGV2KSB9Lz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8Q3VzdEJ1dHRvbiAgdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9e3VwbG9hZEZpbGV9IHZhbD1cIlNlYXJjaFwiLz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3VuZHJhd19zZWFyY2hpbmdfcDV1eC5wbmdcIiAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgPC9Sb3c+XG4gICAgICBcbiAgICAgIDxSb3c+PC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNvbCIsIkNvbnRhaW5lciIsIkZvcm0iLCJGb3JtQ29udHJvbCIsIklucHV0R3JvdXAiLCJSb3ciLCJGYVNlYXJjaCIsIkN1c3RCdXR0b24iLCJGb3JtRGF0YSIsInVybCIsInN1YkZpbGUiLCJ1cGxvYWRGaWxlIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImZkIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJvcmlnaW4iLCJtb2RlIiwiaGVhZGVyIiwiYm9keSIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm9uRmlsZUNoYW5nZSIsImZpbGVDaGFuZ2VFdmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJTZWFyY2hQYWdlIiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwieHMiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJhcmlhLWRlc2NyaWJlZGJ5IiwidmFyaWFudCIsImgxIiwiYiIsIm9uU3VibWl0IiwiR3JvdXAiLCJjb250cm9sSWQiLCJMYWJlbCIsIkNvbnRyb2wiLCJ0eXBlIiwib25DaGFuZ2UiLCJldiIsImJyIiwib25jbGljayIsInZhbCIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/SearchPage.js\n");

/***/ })

});