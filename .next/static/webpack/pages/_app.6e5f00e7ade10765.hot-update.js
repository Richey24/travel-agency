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

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/Layout/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Layout = (param)=>{\n    let { children  } = param;\n    _s();\n    const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_3__.useLayoutStyles)();\n    const alert = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.alertReducer);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classes.root,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"front\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"main\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Myprojects/travel-agency-nextjs/components/Layout/Layout.tsx\",\n                lineNumber: 13,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/user/Documents/Myprojects/travel-agency-nextjs/components/Layout/Layout.tsx\",\n            lineNumber: 12,\n            columnNumber: 16\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/user/Documents/Myprojects/travel-agency-nextjs/components/Layout/Layout.tsx\",\n        lineNumber: 11,\n        columnNumber: 11\n    }, undefined);\n};\n_s(Layout, \"lHn+JcotQcCzz5jnzzjsJP26kZo=\", false, function() {\n    return [\n        _styles__WEBPACK_IMPORTED_MODULE_3__.useLayoutStyles,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBa0M7QUFDUTtBQUVDO0FBRXBDLE1BQU1HLFNBQWtCLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7SUFDdkMsTUFBTUMsVUFBVUgsd0RBQWVBO0lBQy9CLE1BQU1JLFFBQVFMLHdEQUFXQSxDQUFDLENBQUNNLFFBQTBCQSxNQUFNQyxZQUFZO0lBRXZFLHFCQUNLLDhEQUFDQztRQUFJQyxXQUFXTCxRQUFRTSxJQUFJO2tCQUN2Qiw0RUFBQ0Y7WUFBSUMsV0FBVTtzQkFDViw0RUFBQ0Q7Z0JBQUlHLElBQUc7MEJBQVFSOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBDLEVBQUU7R0FYV0Q7O1FBQ1FELG9EQUFlQTtRQUNqQkQsb0RBQVdBOzs7S0FGakJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3g/NDZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBSb290U3RhdGVQcm9wcyB9IGZyb20gXCIuLi8uLi9yZWR1eC90eXBlc1wiO1xuaW1wb3J0IHsgdXNlTGF5b3V0U3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXQ6IEZDPGFueT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VMYXlvdXRTdHlsZXMoKTtcbiAgICAgY29uc3QgYWxlcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZVByb3BzKSA9PiBzdGF0ZS5hbGVydFJlZHVjZXIpO1xuXG4gICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VMYXlvdXRTdHlsZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJhbGVydCIsInN0YXRlIiwiYWxlcnRSZWR1Y2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9vdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Layout.tsx\n"));

/***/ })

});