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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), loggedin = ref[0], setLoggedin = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var userdata;\n        userdata = JSON.parse(local_storage__WEBPACK_IMPORTED_MODULE_1___default().get('userdata'));\n        setTimeout(function() {\n            if (userdata === undefined) {\n                setLoggedin(true);\n            } else {\n                setLoggedin(false);\n            }\n        }, 1000);\n    }, []);\n    setTimeout(function() {\n    }, 1000);\n};\n_s(Header, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9IZWFkZXIvSGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRTtBQUN0QjtBQUNQO0FBQ0s7O0FBQ3hDLEdBQUssQ0FBQ1EsTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQzs7SUFDcEIsR0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBa0M7SUFDOUMsR0FBSyxDQUF5QkwsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNNLFFBQVEsR0FBZU4sR0FBZSxLQUE3Qk8sV0FBVyxHQUFHUCxHQUFlO0lBQzdDQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUcsQ0FBQ08sUUFBUTtRQUNaQSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCx3REFBZ0IsQ0FBQyxDQUFVO1FBQ2pEUyxVQUFVLENBQUMsUUFDZixHQURxQixDQUFDO1lBQ2hCLEVBQUUsRUFBQ0osUUFBUSxLQUFHSyxTQUFTLEVBQUMsQ0FBQztnQkFDdkJOLFdBQVcsQ0FBQyxJQUFJO1lBQ2xCLENBQUMsTUFBSSxDQUFDO2dCQUNKQSxXQUFXLENBQUMsS0FBSztZQUNuQixDQUFDO1FBQ0gsQ0FBQyxFQUFFLElBQUk7SUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUxLLFVBQVUsQ0FBQyxRQUNiLEdBRG1CLENBQUM7SUFFbEIsQ0FBQyxFQUFFLElBQUk7QUFHVCxDQUFDO0dBcEJLUixNQUFNO0tBQU5BLE1BQU07QUFzQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9IZWFkZXIvSGVhZGVyLmpzPzRiMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZiYXIsQ29udGFpbmVyLE5hdixOYXZEcm9wZG93bn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgbG9jYWxzdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc3dpdGNoZGlldC5oZXJva3VhcHAuY29tXCI7XG4gIGNvbnN0IFtsb2dnZWRpbixzZXRMb2dnZWRpbl09IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdXNlcmRhdGE7XG4gICAgdXNlcmRhdGEgPSBKU09OLnBhcnNlKGxvY2Fsc3RvcmFnZS5nZXQoJ3VzZXJkYXRhJykpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYodXNlcmRhdGE9PT11bmRlZmluZWQpe1xuICAgICAgICBzZXRMb2dnZWRpbih0cnVlKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBzZXRMb2dnZWRpbihmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH0sIFtdKVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIFxuICB9LCAxMDAwKTtcbiBcbiAgICBcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJDb250YWluZXIiLCJOYXYiLCJOYXZEcm9wZG93biIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0IiwibG9jYWxzdG9yYWdlIiwiSGVhZGVyIiwidXJsIiwibG9nZ2VkaW4iLCJzZXRMb2dnZWRpbiIsInVzZXJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2V0Iiwic2V0VGltZW91dCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Header/Header.js\n");

/***/ })

});