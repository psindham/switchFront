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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var url = \"https://switchdiet.herokuapp.com\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), id = ref[0], setID = ref[1];\n    useEffect(function() {\n        var userdata;\n        userdata = JSON.parse(localstorage.get('userdata'));\n        setTimeout(function() {\n        }, timeout);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        __source: {\n            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n            lineNumber: 16,\n            columnNumber: 14\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            className: \"navBar themecolor\",\n            expand: \"lg\",\n            __source: {\n                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                lineNumber: 17,\n                columnNumber: 6\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                __source: {\n                    fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        class: \"navbar-brand\",\n                        href: \"/\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/images/logo.jpg\",\n                            alt: \"...\",\n                            height: \"45\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 20,\n                                columnNumber: 7\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                        \"aria-controls\": \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                        id: \"basic-navbar-nav\",\n                        __source: {\n                            fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            __source: {\n                                fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/SearchPage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"Search\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/EditProfile\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"Profile\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                                    className: \"navBarButtons\",\n                                    href: \"/dietselectionpage\",\n                                    __source: {\n                                        fileName: \"D:\\\\switch\\\\comps\\\\Header\\\\Header.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: \"Diet\"\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Header, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9IZWFkZXIvSGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0U7QUFDaEM7QUFDRzs7O0FBQ25DLEdBQUssQ0FBQ00sTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQzs7SUFDcEIsR0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBa0M7SUFDOUMsR0FBSyxDQUFhSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUF0QkksRUFBRSxHQUFTSixHQUFZLEtBQXBCSyxLQUFLLEdBQUdMLEdBQVk7SUFDOUJNLFNBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFHLENBQUNDLFFBQVE7UUFDWkEsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUMsQ0FBVTtRQUNqREMsVUFBVSxDQUFDLFFBQ2YsR0FEcUIsQ0FBQztRQUVsQixDQUFDLEVBQUVDLE9BQU87SUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR0gsTUFBTSxzRUFBSUMsQ0FBTTs7Ozs7Ozt1RkFDZGxCLG1EQUFNO1lBQUNtQixTQUFTLEVBQUMsQ0FBbUI7WUFBQ0MsTUFBTSxFQUFDLENBQUk7Ozs7Ozs7NEZBQy9DbkIsc0RBQVM7Ozs7Ozs7O3lGQUNUb0IsQ0FBQzt3QkFBQ0MsS0FBSyxFQUFDLENBQWM7d0JBQUNDLElBQUksRUFBQyxDQUFHOzs7Ozs7O3VHQUMvQkMsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFDLENBQWtCOzRCQUFDQyxHQUFHLEVBQUMsQ0FBSzs0QkFBQ0MsTUFBTSxFQUFDLENBQUk7Ozs7Ozs7Ozt5RkFFOUMzQiwwREFBYTt3QkFBQzZCLENBQWEsZ0JBQUMsQ0FBa0I7Ozs7Ozs7O3lGQUM5QzdCLDREQUFlO3dCQUFDUSxFQUFFLEVBQUMsQ0FBa0I7Ozs7Ozs7d0dBQ25DTixnREFBRzs0QkFBQ2lCLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OztxR0FFckJqQixxREFBUTtvQ0FBQ2lCLFNBQVMsRUFBQyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBYTs7Ozs7Ozs4Q0FBQyxDQUFNOztxR0FDNURyQixxREFBUTtvQ0FBQ2lCLFNBQVMsRUFBQyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs4Q0FBQyxDQUFPOztxR0FDOURyQixxREFBUTtvQ0FBQ2lCLFNBQVMsRUFBQyxDQUFlO29DQUFDSSxJQUFJLEVBQUMsQ0FBb0I7Ozs7Ozs7OENBQUMsQ0FBSTs7Ozs7Ozs7O0FBTTlFLENBQUM7R0E5QktqQixNQUFNO0tBQU5BLE1BQU07QUFnQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9IZWFkZXIvSGVhZGVyLmpzPzRiMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZiYXIsQ29udGFpbmVyLE5hdixOYXZEcm9wZG93bn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzZXQgfSBmcm9tICdsb2NhbC1zdG9yYWdlJztcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL3N3aXRjaGRpZXQuaGVyb2t1YXBwLmNvbVwiO1xuICBjb25zdCBbaWQsc2V0SURdPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHVzZXJkYXRhO1xuICAgIHVzZXJkYXRhID0gSlNPTi5wYXJzZShsb2NhbHN0b3JhZ2UuZ2V0KCd1c2VyZGF0YScpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIFxuICAgIH0sIHRpbWVvdXQpO1xuICB9LCBbXSlcblxuXG4gICAgcmV0dXJuICggPGhlYWRlcj5cbiAgICAgPE5hdmJhciBjbGFzc05hbWU9J25hdkJhciB0aGVtZWNvbG9yJyBleHBhbmQ9XCJsZ1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiIGFsdD1cIi4uLlwiIGhlaWdodD1cIjQ1XCIvPlxuICAgIDwvYT5cbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPSduYXZCYXJCdXR0b25zJyBocmVmPVwiL1NlYXJjaFBhZ2VcIj5TZWFyY2g8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9FZGl0UHJvZmlsZVwiPlByb2ZpbGU8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT0nbmF2QmFyQnV0dG9ucycgaHJlZj1cIi9kaWV0c2VsZWN0aW9ucGFnZVwiPkRpZXQ8L05hdi5MaW5rPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuPC9OYXZiYXI+XG4gIDwvaGVhZGVyPiAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJDb250YWluZXIiLCJOYXYiLCJOYXZEcm9wZG93biIsInVzZVN0YXRlIiwic2V0IiwiSGVhZGVyIiwidXJsIiwiaWQiLCJzZXRJRCIsInVzZUVmZmVjdCIsInVzZXJkYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxzdG9yYWdlIiwiZ2V0Iiwic2V0VGltZW91dCIsInRpbWVvdXQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJleHBhbmQiLCJhIiwiY2xhc3MiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Header/Header.js\n");

/***/ }),

/***/ "./node_modules/local-storage/local-storage.js":
/*!*****************************************************!*\
  !*** ./node_modules/local-storage/local-storage.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\nvar stub = __webpack_require__(/*! ./stub */ \"./node_modules/local-storage/stub.js\");\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/local-storage/parse.js\");\nvar tracking = __webpack_require__(/*! ./tracking */ \"./node_modules/local-storage/tracking.js\");\nvar ls = 'localStorage' in __webpack_require__.g && __webpack_require__.g.localStorage ? __webpack_require__.g.localStorage : stub;\n\nfunction accessor (key, value) {\n  if (arguments.length === 1) {\n    return get(key);\n  }\n  return set(key, value);\n}\n\nfunction get (key) {\n  const raw = ls.getItem(key);\n  const parsed = parse(raw);\n  return parsed;\n}\n\nfunction set (key, value) {\n  try {\n    ls.setItem(key, JSON.stringify(value));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction remove (key) {\n  return ls.removeItem(key);\n}\n\nfunction clear () {\n  return ls.clear();\n}\n\nfunction backend (store) {\n  store && (ls = store);\n\n  return ls;\n}\n\naccessor.set = set;\naccessor.get = get;\naccessor.remove = remove;\naccessor.clear = clear;\naccessor.backend = backend;\naccessor.on = tracking.on;\naccessor.off = tracking.off;\n\nmodule.exports = accessor;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyxvREFBUTtBQUMzQixZQUFZLG1CQUFPLENBQUMsc0RBQVM7QUFDN0IsZUFBZSxtQkFBTyxDQUFDLDREQUFZO0FBQ25DLDJCQUEyQixxQkFBTSxJQUFJLHFCQUFNLGdCQUFnQixxQkFBTTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2UuanM/OWI5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBzdHViID0gcmVxdWlyZSgnLi9zdHViJyk7XG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgdHJhY2tpbmcgPSByZXF1aXJlKCcuL3RyYWNraW5nJyk7XG52YXIgbHMgPSAnbG9jYWxTdG9yYWdlJyBpbiBnbG9iYWwgJiYgZ2xvYmFsLmxvY2FsU3RvcmFnZSA/IGdsb2JhbC5sb2NhbFN0b3JhZ2UgOiBzdHViO1xuXG5mdW5jdGlvbiBhY2Nlc3NvciAoa2V5LCB2YWx1ZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBnZXQoa2V5KTtcbiAgfVxuICByZXR1cm4gc2V0KGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXQgKGtleSkge1xuICBjb25zdCByYXcgPSBscy5nZXRJdGVtKGtleSk7XG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlKHJhdyk7XG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHNldCAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGxzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSAoa2V5KSB7XG4gIHJldHVybiBscy5yZW1vdmVJdGVtKGtleSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgcmV0dXJuIGxzLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIGJhY2tlbmQgKHN0b3JlKSB7XG4gIHN0b3JlICYmIChscyA9IHN0b3JlKTtcblxuICByZXR1cm4gbHM7XG59XG5cbmFjY2Vzc29yLnNldCA9IHNldDtcbmFjY2Vzc29yLmdldCA9IGdldDtcbmFjY2Vzc29yLnJlbW92ZSA9IHJlbW92ZTtcbmFjY2Vzc29yLmNsZWFyID0gY2xlYXI7XG5hY2Nlc3Nvci5iYWNrZW5kID0gYmFja2VuZDtcbmFjY2Vzc29yLm9uID0gdHJhY2tpbmcub247XG5hY2Nlc3Nvci5vZmYgPSB0cmFja2luZy5vZmY7XG5cbm1vZHVsZS5leHBvcnRzID0gYWNjZXNzb3I7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/local-storage/local-storage.js\n");

/***/ }),

/***/ "./node_modules/local-storage/parse.js":
/*!*********************************************!*\
  !*** ./node_modules/local-storage/parse.js ***!
  \*********************************************/
/***/ (function(module) {

eval("\n\nfunction parse (rawValue) {\n  const parsed = parseValue(rawValue);\n\n  if (parsed === undefined) {\n    return null;\n  }\n\n  return parsed;\n}\n\nfunction parseValue (rawValue) {\n  try {\n    return JSON.parse(rawValue);\n  } catch (err) {\n    return rawValue;\n  }\n}\n\nmodule.exports = parse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbG9jYWwtc3RvcmFnZS9wYXJzZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvY2FsLXN0b3JhZ2UvcGFyc2UuanM/OGVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHBhcnNlIChyYXdWYWx1ZSkge1xuICBjb25zdCBwYXJzZWQgPSBwYXJzZVZhbHVlKHJhd1ZhbHVlKTtcblxuICBpZiAocGFyc2VkID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUgKHJhd1ZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmF3VmFsdWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gcmF3VmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/local-storage/parse.js\n");

/***/ }),

/***/ "./node_modules/local-storage/stub.js":
/*!********************************************!*\
  !*** ./node_modules/local-storage/stub.js ***!
  \********************************************/
/***/ (function(module) {

eval("\n\nvar ms = {};\n\nfunction getItem (key) {\n  return key in ms ? ms[key] : null;\n}\n\nfunction setItem (key, value) {\n  ms[key] = value;\n  return true;\n}\n\nfunction removeItem (key) {\n  var found = key in ms;\n  if (found) {\n    return delete ms[key];\n  }\n  return false;\n}\n\nfunction clear () {\n  ms = {};\n  return true;\n}\n\nmodule.exports = {\n  getItem: getItem,\n  setItem: setItem,\n  removeItem: removeItem,\n  clear: clear\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbG9jYWwtc3RvcmFnZS9zdHViLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvY2FsLXN0b3JhZ2Uvc3R1Yi5qcz8yMjc5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIG1zID0ge307XG5cbmZ1bmN0aW9uIGdldEl0ZW0gKGtleSkge1xuICByZXR1cm4ga2V5IGluIG1zID8gbXNba2V5XSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldEl0ZW0gKGtleSwgdmFsdWUpIHtcbiAgbXNba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbSAoa2V5KSB7XG4gIHZhciBmb3VuZCA9IGtleSBpbiBtcztcbiAgaWYgKGZvdW5kKSB7XG4gICAgcmV0dXJuIGRlbGV0ZSBtc1trZXldO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2xlYXIgKCkge1xuICBtcyA9IHt9O1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEl0ZW06IGdldEl0ZW0sXG4gIHNldEl0ZW06IHNldEl0ZW0sXG4gIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXG4gIGNsZWFyOiBjbGVhclxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/local-storage/stub.js\n");

/***/ }),

/***/ "./node_modules/local-storage/tracking.js":
/*!************************************************!*\
  !*** ./node_modules/local-storage/tracking.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/local-storage/parse.js\");\nvar listeners = {};\nvar listening = false;\n\nfunction listen () {\n  if (__webpack_require__.g.addEventListener) {\n    __webpack_require__.g.addEventListener('storage', change, false);\n  } else if (__webpack_require__.g.attachEvent) {\n    __webpack_require__.g.attachEvent('onstorage', change);\n  } else {\n    __webpack_require__.g.onstorage = change;\n  }\n}\n\nfunction change (e) {\n  if (!e) {\n    e = __webpack_require__.g.event;\n  }\n  var all = listeners[e.key];\n  if (all) {\n    all.forEach(fire);\n  }\n\n  function fire (listener) {\n    listener(parse(e.newValue), parse(e.oldValue), e.url || e.uri);\n  }\n}\n\nfunction on (key, fn) {\n  if (listeners[key]) {\n    listeners[key].push(fn);\n  } else {\n    listeners[key] = [fn];\n  }\n  if (listening === false) {\n    listen();\n  }\n}\n\nfunction off (key, fn) {\n  var ns = listeners[key];\n  if (ns.length > 1) {\n    ns.splice(ns.indexOf(fn), 1);\n  } else {\n    listeners[key] = [];\n  }\n}\n\nmodule.exports = {\n  on: on,\n  off: off\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbG9jYWwtc3RvcmFnZS90cmFja2luZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsc0RBQVM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLE1BQU0scUJBQU07QUFDWixJQUFJLHFCQUFNO0FBQ1YsSUFBSSxTQUFTLHFCQUFNO0FBQ25CLElBQUkscUJBQU07QUFDVixJQUFJO0FBQ0osSUFBSSxxQkFBTTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEscUJBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2NhbC1zdG9yYWdlL3RyYWNraW5nLmpzP2E4ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgbGlzdGVuZXJzID0ge307XG52YXIgbGlzdGVuaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGxpc3RlbiAoKSB7XG4gIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgY2hhbmdlLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmF0dGFjaEV2ZW50KSB7XG4gICAgZ2xvYmFsLmF0dGFjaEV2ZW50KCdvbnN0b3JhZ2UnLCBjaGFuZ2UpO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5vbnN0b3JhZ2UgPSBjaGFuZ2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlIChlKSB7XG4gIGlmICghZSkge1xuICAgIGUgPSBnbG9iYWwuZXZlbnQ7XG4gIH1cbiAgdmFyIGFsbCA9IGxpc3RlbmVyc1tlLmtleV07XG4gIGlmIChhbGwpIHtcbiAgICBhbGwuZm9yRWFjaChmaXJlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpcmUgKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIocGFyc2UoZS5uZXdWYWx1ZSksIHBhcnNlKGUub2xkVmFsdWUpLCBlLnVybCB8fCBlLnVyaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb24gKGtleSwgZm4pIHtcbiAgaWYgKGxpc3RlbmVyc1trZXldKSB7XG4gICAgbGlzdGVuZXJzW2tleV0ucHVzaChmbik7XG4gIH0gZWxzZSB7XG4gICAgbGlzdGVuZXJzW2tleV0gPSBbZm5dO1xuICB9XG4gIGlmIChsaXN0ZW5pbmcgPT09IGZhbHNlKSB7XG4gICAgbGlzdGVuKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb2ZmIChrZXksIGZuKSB7XG4gIHZhciBucyA9IGxpc3RlbmVyc1trZXldO1xuICBpZiAobnMubGVuZ3RoID4gMSkge1xuICAgIG5zLnNwbGljZShucy5pbmRleE9mKGZuKSwgMSk7XG4gIH0gZWxzZSB7XG4gICAgbGlzdGVuZXJzW2tleV0gPSBbXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/local-storage/tracking.js\n");

/***/ })

});