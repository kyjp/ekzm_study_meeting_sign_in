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

/***/ "./components/organisms/LoginSection.jsx":
/*!***********************************************!*\
  !*** ./components/organisms/LoginSection.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _atom_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atom/Email */ \"./components/atom/Email.jsx\");\n/* harmony import */ var _atom_Password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atom/Password */ \"./components/atom/Password.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst LoginSection = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"login\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleChange = (event)=>{\n        if (event.target.id === \"email\") {\n            setEmail(event.target.value);\n        }\n        if (event.target.id === \"password\") {\n            setPassword(event.target.value);\n        }\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            if (type === \"register\") {\n                await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(\"http://localhost:3005\", \"/auth/signup\"), {\n                    email,\n                    password\n                });\n            }\n            await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"\".concat(\"http://localhost:3005\", \"/auth/login\"), {\n                email,\n                password\n            });\n            setEmail(\"\");\n            setPassword(\"\");\n            router.push(\"/dashboard\");\n        } catch (error) {\n            setError(error.response.data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl\",\n                        children: type === \"register\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: \"Create your account\"\n                        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: \"Sign in to your account\"\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined),\n                    error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-6\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 20\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"space-y-4 md:space-y-6\",\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        className: \"block mb-2 text-sm font-medium text-gray-900\",\n                                        children: \"Your email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atom_Email__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        value: email,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"password\",\n                                        className: \"block mb-2 text-sm font-medium text-gray-900\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atom_Password__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        value: password,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center\",\n                                children: type === \"register\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: \"Sign up\"\n                                }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: \"Sign in\"\n                                }, void 0, false)\n                            }, void 0, false, {\n                                fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-light text-gray-500\",\n                                children: type === \"register\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    onClick: (event)=>{\n                                        event.preventDefault();\n                                        setType(\"login\");\n                                    },\n                                    children: \"Sign in to your account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    onClick: (event)=>{\n                                        event.preventDefault();\n                                        setType(\"register\");\n                                    },\n                                    children: \"Create your account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yoshihara/sites-yoshihara/test/login-sample/frontend/components/organisms/LoginSection.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginSection, \"2UUR6fUR1ALX7EjZ50BQiuC5aCQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginSection);\nvar _c;\n$RefreshReg$(_c, \"LoginSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Mb2dpblNlY3Rpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNBO0FBQ047QUFDTTtBQUV2QyxNQUFNTSxlQUFlLElBQU07O0lBQ3pCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTWEsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLElBQUlBLE1BQU1DLE1BQU0sQ0FBQ0MsRUFBRSxLQUFLLFNBQVM7WUFDL0JSLFNBQVNNLE1BQU1DLE1BQU0sQ0FBQ0UsS0FBSztRQUM3QixDQUFDO1FBQ0QsSUFBSUgsTUFBTUMsTUFBTSxDQUFDQyxFQUFFLEtBQUssWUFBWTtZQUNsQ04sWUFBWUksTUFBTUMsTUFBTSxDQUFDRSxLQUFLO1FBQ2hDLENBQUM7SUFDSDtJQUNBLE1BQU1DLGVBQWUsT0FBT0osUUFBVTtRQUNwQ0EsTUFBTUssY0FBYztRQUNwQixJQUFJO1lBQ0YsSUFBSWQsU0FBUyxZQUFZO2dCQUN2QixNQUFNUixpREFBVSxDQUFDLEdBQW1DLE9BQWhDd0IsdUJBQStCLEVBQUMsaUJBQWU7b0JBQ2pFZDtvQkFDQUU7Z0JBQ0Y7WUFDRixDQUFDO1lBQ0QsTUFBTVosaURBQVUsQ0FBQyxHQUFtQyxPQUFoQ3dCLHVCQUErQixFQUFDLGdCQUFjO2dCQUNoRWQ7Z0JBQ0FFO1lBQ0Y7WUFDQUQsU0FBUztZQUNURSxZQUFZO1lBQ1pOLE9BQU9vQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9iLE9BQU87WUFDZEMsU0FBU0QsTUFBTWMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE9BQU87UUFDdEM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUNYLFNBQVUsMkJBQ1Q7c0NBQUU7MERBQ0Y7c0NBQUU7eUNBQTBCOzs7Ozs7b0JBRy9CbEIsc0JBQVEsOERBQUNvQjt3QkFBRUYsV0FBVTtrQ0FBUWxCOzs7OztrREFBYSw2SUFBSztrQ0FDaEQsOERBQUNxQjt3QkFDQ0gsV0FBVTt3QkFDVkksVUFBVWY7OzBDQUVWLDhEQUFDVTs7a0RBQ0MsOERBQUNNO3dDQUFNQyxTQUFRO3dDQUFRTixXQUFVO2tEQUErQzs7Ozs7O2tEQUNoRiw4REFBQzVCLG1EQUFLQTt3Q0FDSmdCLE9BQU9WO3dDQUNQNkIsVUFBVXZCOzs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNlOztrREFDQyw4REFBQ007d0NBQU1DLFNBQVE7d0NBQVdOLFdBQVU7a0RBQStDOzs7Ozs7a0RBQ25GLDhEQUFDM0Isc0RBQVFBO3dDQUNQZSxPQUFPUjt3Q0FDUDJCLFVBQVV2Qjs7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDd0I7Z0NBQ0NoQyxNQUFLO2dDQUNMd0IsV0FBVTswQ0FFVCxTQUFVLDJCQUNUOzhDQUFFO2tFQUNGOzhDQUFFO2lEQUFVOzs7Ozs7MENBR2hCLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FDVixTQUFVLDJCQUNULDhEQUFDUztvQ0FDQ0MsTUFBSztvQ0FDTEMsU0FBUyxDQUFDMUIsUUFBVTt3Q0FDbEJBLE1BQU1LLGNBQWM7d0NBQ3BCYixRQUFRO29DQUNWOzhDQUNFOzs7Ozs4REFDSiw4REFBQ2dDO29DQUNDQyxNQUFLO29DQUNMQyxTQUFTLENBQUMxQixRQUFVO3dDQUNsQkEsTUFBTUssY0FBYzt3Q0FDcEJiLFFBQVE7b0NBQ1Y7OENBQ0E7Ozs7OzZDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QztHQS9GTUg7O1FBQ1dMLGtEQUFTQTs7O0tBRHBCSztBQWlHTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Mb2dpblNlY3Rpb24uanN4PzRkNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFbWFpbCBmcm9tICcuLi9hdG9tL0VtYWlsJ1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gJy4uL2F0b20vUGFzc3dvcmQnXG5cbmNvbnN0IExvZ2luU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJ2xvZ2luJylcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2VtYWlsJykge1xuICAgICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAncGFzc3dvcmQnKSB7XG4gICAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuICB9XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGUgPT09ICdyZWdpc3RlcicpIHtcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hdXRoL3NpZ251cGAsIHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hdXRoL2xvZ2luYCwge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH0pXG4gICAgICBzZXRFbWFpbCgnJylcbiAgICAgIHNldFBhc3N3b3JkKCcnKVxuICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTggbXgtYXV0byBtZDpoLXNjcmVlbiBsZzpweS0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBtZDptdC0wIHNtOm1heC13LW1kIHhsOnAtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHNtOnAtOFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgbWQ6dGV4dC0yeGxcIj5cbiAgICAgICAgICAgIHsodHlwZSA9PT0gXCJyZWdpc3RlclwiKSA/XG4gICAgICAgICAgICAgIDw+Q3JlYXRlIHlvdXIgYWNjb3VudDwvPiA6XG4gICAgICAgICAgICAgIDw+U2lnbiBpbiB0byB5b3VyIGFjY291bnQ8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHtlcnJvciA/IDxwIGNsYXNzTmFtZT1cIm10LTZcIj57ZXJyb3J9PC9wPiA6IDw+PC8+fVxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWQ6c3BhY2UteS02XCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+WW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxFbWFpbFxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxQYXNzd29yZFxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcHJpbWFyeS02MDAgaG92ZXI6YmctcHJpbWFyeS03MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXByaW1hcnktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsodHlwZSA9PT0gXCJyZWdpc3RlclwiKSA/XG4gICAgICAgICAgICAgICAgPD5TaWduIHVwPC8+IDpcbiAgICAgICAgICAgICAgICA8PlNpZ24gaW48Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICB7KHR5cGUgPT09IFwicmVnaXN0ZXJcIikgP1xuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBzZXRUeXBlKCdsb2dpbicpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9PlNpZ24gaW4gdG8geW91ciBhY2NvdW50PC9hPiA6XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHNldFR5cGUoJ3JlZ2lzdGVyJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9PkNyZWF0ZSB5b3VyIGFjY291bnQ8L2E+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5TZWN0aW9uXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiRW1haWwiLCJQYXNzd29yZCIsIkxvZ2luU2VjdGlvbiIsInJvdXRlciIsInR5cGUiLCJzZXRUeXBlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwdXNoIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/organisms/LoginSection.jsx\n"));

/***/ })

});