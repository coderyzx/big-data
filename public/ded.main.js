/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dedLog"] = factory();
	else
		root["dedLog"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/shim */ \"./node_modules/babel-polyfill/node_modules/core-js/shim.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js\");\n\n__webpack_require__(/*! core-js/fn/regexp/escape */ \"./node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js\");\n\nif (__webpack_require__.g._babelPolyfill) {\n  throw new Error(\"only one instance of babel-polyfill is allowed\");\n}\n\n__webpack_require__.g._babelPolyfill = true;\nvar DEFINE_PROPERTY = \"defineProperty\";\n\nfunction define(O, key, value) {\n  O[key] || Object[DEFINE_PROPERTY](O, key, {\n    writable: true,\n    configurable: true,\n    value: value\n  });\n}\n\ndefine(String.prototype, \"padLeft\", \"\".padStart);\ndefine(String.prototype, \"padRight\", \"\".padEnd);\n\"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill\".split(\",\").forEach(function (key) {\n  [][key] && define(Array, key, Function.call.bind([][key]));\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js ***!
  \******************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/core.regexp.escape */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js\");\n\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\").RegExp.escape;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('unscopables');\n\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\n\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar at = __webpack_require__(/*! ./_string-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js\")(true); // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\n\n\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {\n    throw TypeError(name + ': incorrect invocation!');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target\n/* = 0 */\n, start\n/* = 0, end = @length */\n) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];else delete O[to];\n    to += inc;\n    from += inc;\n  }\n\n  return O;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function fill(value\n/* , start = 0, end = @length */\n) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n\n  while (endPos > index) {\n    O[index++] = value;\n  }\n\n  return O;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\n\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value; // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++]; // eslint-disable-next-line no-self-compare\n\n      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not\n    } else for (; length > index; index++) {\n      if (IS_INCLUDES || index in O) {\n        if (O[index] === el) return IS_INCLUDES || index || 0;\n      }\n    }\n    return !IS_INCLUDES && -1;\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 18:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js\");\n\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n\n    for (; length > index; index++) {\n      if (NO_HOLES || index in self) {\n        val = self[index];\n        res = f(val, index, O);\n\n        if (TYPE) {\n          if (IS_MAP) result[index] = res; // map\n          else if (res) switch (TYPE) {\n              case 3:\n                return true;\n              // some\n\n              case 5:\n                return val;\n              // find\n\n              case 6:\n                return index;\n              // findIndex\n\n              case 2:\n                result.push(val);\n              // filter\n            } else if (IS_EVERY) return false; // every\n        }\n      }\n    }\n\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n\n    index += i;\n\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n\n  for (; isRight ? index >= 0 : length > index; index += i) {\n    if (index in self) {\n      memo = callbackfn(memo, self[index], index, O);\n    }\n  }\n\n  return memo;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js ***!
  \************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js\");\n\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n\n  if (isArray(original)) {\n    C = original.constructor; // cross-realm fallback\n\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  }\n\n  return C === undefined ? Array : C;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 25:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js\");\n\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function construct(F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) {\n      n[i] = 'a[' + i + ']';\n    } // eslint-disable-next-line no-new-func\n\n\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  }\n\n  return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that\n/* , ...args */\n) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n\n  var bound = function bound()\n  /* args... */\n  {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('toStringTag'); // ES3 wrong here\n\n\nvar ARG = cof(function () {\n  return arguments;\n}()) == 'Arguments'; // fallback for IE11 Script Access Denied error\n\nvar tryGet = function tryGet(it, key) {\n  try {\n    return it[key];\n  } catch (e) {\n    /* empty */\n  }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case\n  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case\n  : ARG ? cof(O) // ES3 arguments fallback\n  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 40:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\n\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\n\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\n\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js\");\n\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js\");\n\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\n\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").fastKey;\n\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\n\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function getEntry(that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index]; // frozen object case\n\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME; // collection type\n\n      that._i = create(null); // index\n\n      that._f = undefined; // first entry\n\n      that._l = undefined; // last entry\n\n      that[SIZE] = 0; // size\n\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function _delete(key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        }\n\n        return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn\n      /* , that = undefined */\n      ) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this); // revert to the last existing entry\n\n          while (entry && entry.r) {\n            entry = entry.p;\n          }\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function get() {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function def(that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index; // change existing entry\n\n    if (entry) {\n      entry.v = value; // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true),\n        // <- index\n        k: key,\n        // <- key\n        v: value,\n        // <- value\n        p: prev = that._l,\n        // <- previous entry\n        n: undefined,\n        // <- next entry\n        r: false // <- removed\n\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++; // add to index\n\n      if (index !== 'F') that._i[index] = entry;\n    }\n\n    return that;\n  },\n  getEntry: getEntry,\n  setStrong: function setStrong(C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n\n      this._k = kind; // kind\n\n      this._l = undefined; // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l; // revert to the last existing entry\n\n      while (entry && entry.r) {\n        entry = entry.p;\n      } // get next entry\n\n\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      } // return step by kind\n\n\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2\n\n    setSpecies(NAME);\n  }\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\n\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js\");\n\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 59:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\n\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").getWeak;\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\n\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\");\n\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\n\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0; // fallback for uncaught frozen keys\n\nvar uncaughtFrozenStore = function uncaughtFrozenStore(that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\n\nvar UncaughtFrozenStore = function UncaughtFrozenStore() {\n  this.a = [];\n};\n\nvar findUncaughtFrozen = function findUncaughtFrozen(store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\n\nUncaughtFrozenStore.prototype = {\n  get: function get(key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function has(key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function set(key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;else this.a.push([key, value]);\n  },\n  'delete': function _delete(key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\nmodule.exports = {\n  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME; // collection type\n\n      that._i = id++; // collection id\n\n      that._l = undefined; // leak store for uncaught frozen objects\n\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function _delete(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function def(that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 27:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\n\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\n\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\");\n\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js\");\n\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n\n  var fixMethod = function fixMethod(KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY, KEY == 'delete' ? function (a) {\n      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'has' ? function has(a) {\n      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'get' ? function get(a) {\n      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n    } : KEY == 'add' ? function add(a) {\n      fn.call(this, a === 0 ? 0 : a);\n      return this;\n    } : function set(a, b) {\n      fn.call(this, a === 0 ? 0 : a, b);\n      return this;\n    });\n  };\n\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C(); // early implementations not supports chaining\n\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n\n    var THROWS_ON_PRIMITIVES = fails(function () {\n      instance.has(1);\n    }); // most early implementations doesn't supports iterables, most modern - not close it correctly\n\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) {\n      new C(iter);\n    }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n\n      while (index--) {\n        $instance[ADDER](index, index);\n      }\n\n      return !$instance.has(-0);\n    });\n\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method\n\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n  return C;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:11-25 */
/***/ ((module) => {

eval("var core = module.exports = {\n  version: '2.6.12'\n};\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n\n  switch (length) {\n    case 1:\n      return function (a) {\n        return fn.call(that, a);\n      };\n\n    case 2:\n      return function (a, b) {\n        return fn.call(that, a, b);\n      };\n\n    case 3:\n      return function (a, b, c) {\n        return fn.call(that, a, b, c);\n      };\n  }\n\n  return function ()\n  /* ...args */\n  {\n    return fn.apply(that, arguments);\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function lz(num) {\n  return num > 9 ? num : '0' + num;\n}; // PhantomJS / old WebKit has a broken implementations\n\n\nmodule.exports = fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n}) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', {\n    get: function get() {\n      return 7;\n    }\n  }).a != 7;\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").document; // typeof document.createElement is 'object' in old IE\n\n\nvar is = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("// IE 8- don't enum bug keys\nmodule.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js\");\n\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\");\n\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n\n    while (symbols.length > i) {\n      if (isEnum.call(it, key = symbols[i++])) result.push(key);\n    }\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 58:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar PROTOTYPE = 'prototype';\n\nvar $export = function $export(type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed\n\n    out = (own ? target : source)[key]; // bind timers to global for call from export context\n\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global\n\n    if (target) redefine(target, key, out, type & $export.U); // export\n\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\n\nglobal.core = core; // type bitmap\n\n$export.F = 1; // forced\n\n$export.G = 2; // global\n\n$export.S = 4; // static\n\n$export.P = 8; // proto\n\n$export.B = 16; // bind\n\n$export.W = 32; // wrap\n\n$export.U = 64; // safe\n\n$export.R = 128; // real proto method for `library`\n\nmodule.exports = $export;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('match');\n\nmodule.exports = function (KEY) {\n  var re = /./;\n\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) {\n      /* empty */\n    }\n  }\n\n  return true;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 48:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js\");\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\n\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n\n  re.exec = function () {\n    var result = [];\n    result.groups = {\n      a: '7'\n    };\n    return result;\n  };\n\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n\n  re.exec = function () {\n    return originalExec.apply(this, arguments);\n  };\n\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n}();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n\n    O[SYMBOL] = function () {\n      return 7;\n    };\n\n    return ''[KEY](O) != 7;\n  });\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    re.exec = function () {\n      execCalled = true;\n      return null;\n    };\n\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n\n      re.constructor[SPECIES] = function () {\n        return re;\n      };\n    }\n\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n      if (regexp.exec === regexpExec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return {\n            done: true,\n            value: nativeRegExpMethod.call(regexp, str, arg2)\n          };\n        }\n\n        return {\n          done: true,\n          value: nativeMethod.call(str, regexp, arg2)\n        };\n      }\n\n      return {\n        done: false\n      };\n    });\n    var strfn = fns[0];\n    var rxfn = fns[1];\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n    // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n    ? function (string, arg) {\n      return rxfn.call(string, this, arg);\n    } // 21.2.5.6 RegExp.prototype[@@match](string)\n    // 21.2.5.9 RegExp.prototype[@@search](string)\n    : function (string) {\n      return rxfn.call(string, this);\n    });\n  }\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 21.2.5.3 get RegExp.prototype.flags\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 45:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\n\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n      spreadable = false;\n\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n\n    sourceIndex++;\n  }\n\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 16:14-28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js\");\n\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js\");\n\nvar BREAK = {};\nvar RETURN = {};\n\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () {\n    return iterable;\n  } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator\n\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\n\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_function-to-string.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_function-to-string.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:13-27 */
/***/ ((module) => {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func\n: Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").document;\n\nmodule.exports = document && document.documentElement;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js\")('div'), 'a', {\n    get: function get() {\n      return 7;\n    }\n  }).a != 7;\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js\").set;\n\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  }\n\n  return that;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n\n  switch (args.length) {\n    case 0:\n      return un ? fn() : fn.call(that);\n\n    case 1:\n      return un ? fn(args[0]) : fn.call(that, args[0]);\n\n    case 2:\n      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);\n\n    case 3:\n      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);\n\n    case 4:\n      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);\n  }\n\n  return fn.apply(that, args);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\"); // eslint-disable-next-line no-prototype-builtins\n\n\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\n\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator');\n\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar floor = Math.floor;\n\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (it) {\n  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('match');\n\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\n\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\n\nvar IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n\n__webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator'), function () {\n  return this;\n});\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, {\n    next: descriptor(1, next)\n  });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 31:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\n\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js\");\n\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator');\n\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\n\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function returnThis() {\n  return this;\n};\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n\n  var getMethod = function getMethod(kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n\n    switch (kind) {\n      case KEYS:\n        return function keys() {\n          return new Constructor(this, kind);\n        };\n\n      case VALUES:\n        return function values() {\n          return new Constructor(this, kind);\n        };\n    }\n\n    return function entries() {\n      return new Constructor(this, kind);\n    };\n  };\n\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype; // Fix native\n\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines\n\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  } // fix Array#{values, @@iterator}.name in V8 / FF\n\n\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n\n    $default = function values() {\n      return $native.call(this);\n    };\n  } // Define iterator\n\n\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  } // Plug for library\n\n\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n\n  return methods;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 20:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator');\n\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n\n  riter['return'] = function () {\n    SAFE_CLOSING = true;\n  }; // eslint-disable-next-line no-throw-literal\n\n\n  Array.from(riter, function () {\n    throw 2;\n  });\n} catch (e) {\n  /* empty */\n}\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n\n    iter.next = function () {\n      return {\n        done: safe = true\n      };\n    };\n\n    arr[ITERATOR] = function () {\n      return iter;\n    };\n\n    exec(arr);\n  } catch (e) {\n    /* empty */\n  }\n\n  return safe;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function (done, value) {\n  return {\n    value: value,\n    done: !!done\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = {};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = false;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = !$expm1 // Old FF bug\n|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug\n|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 14:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js\");\n\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function roundTiesToEven(n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs); // eslint-disable-next-line no-self-compare\n\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nmodule.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {\n  if (arguments.length === 0 // eslint-disable-next-line no-self-compare\n  || x != x // eslint-disable-next-line no-self-compare\n  || inLow != inLow // eslint-disable-next-line no-self-compare\n  || inHigh != inHigh // eslint-disable-next-line no-self-compare\n  || outLow != outLow // eslint-disable-next-line no-self-compare\n  || outHigh != outHigh) return NaN;\n  if (x === Infinity || x === -Infinity) return x;\n  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 67:11-25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar META = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\")('meta');\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\n\nvar id = 0;\n\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\n\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\n\nvar setMeta = function setMeta(it) {\n  setDesc(it, META, {\n    value: {\n      i: 'O' + ++id,\n      // object ID\n      w: {} // weak collections IDs\n\n    }\n  });\n};\n\nvar fastKey = function fastKey(it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F'; // not necessary to add metadata\n\n    if (!create) return 'E'; // add missing metadata\n\n    setMeta(it); // return object ID\n  }\n\n  return it[META].i;\n};\n\nvar getWeak = function getWeak(it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true; // not necessary to add metadata\n\n    if (!create) return false; // add missing metadata\n\n    setMeta(it); // return hash weak collections IDs\n  }\n\n  return it[META].w;\n}; // add metadata on freeze-family methods calling\n\n\nvar onFreeze = function onFreeze(it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\n\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 60:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar Map = __webpack_require__(/*! ./es6.map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\")('metadata');\n\nvar store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js\"))());\n\nvar getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {\n  var targetMetadata = store.get(target);\n\n  if (!targetMetadata) {\n    if (!create) return undefined;\n    store.set(target, targetMetadata = new Map());\n  }\n\n  var keyMetadata = targetMetadata.get(targetKey);\n\n  if (!keyMetadata) {\n    if (!create) return undefined;\n    targetMetadata.set(targetKey, keyMetadata = new Map());\n  }\n\n  return keyMetadata;\n};\n\nvar ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);\n};\n\nvar ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);\n};\n\nvar ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {\n  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);\n};\n\nvar ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {\n  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);\n  var keys = [];\n  if (metadataMap) metadataMap.forEach(function (_, key) {\n    keys.push(key);\n  });\n  return keys;\n};\n\nvar toMetaKey = function toMetaKey(it) {\n  return it === undefined || _typeof(it) == 'symbol' ? it : String(it);\n};\n\nvar exp = function exp(O) {\n  $export($export.S, 'Reflect', O);\n};\n\nmodule.exports = {\n  store: store,\n  map: getOrCreateMetadataMap,\n  has: ordinaryHasOwnMetadata,\n  get: ordinaryGetOwnMetadata,\n  set: ordinaryDefineOwnMetadata,\n  keys: ordinaryOwnMetadataKeys,\n  key: toMetaKey,\n  exp: exp\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js\").set;\n\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function flush() {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();else last = undefined;\n        throw e;\n      }\n    }\n\n    last = undefined;\n    if (parent) parent.enter();\n  }; // Node.js\n\n\n  if (isNode) {\n    notify = function notify() {\n      process.nextTick(flush);\n    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, {\n      characterData: true\n    }); // eslint-disable-line no-new\n\n    notify = function notify() {\n      node.data = toggle = !toggle;\n    }; // environments with maybe non-completely correct, but existent Promise\n\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n\n    notify = function notify() {\n      promise.then(flush);\n    }; // for other environments - macrotask based on:\n    // - setImmediate\n    // - MessageChannel\n    // - window.postMessag\n    // - onreadystatechange\n    // - setTimeout\n\n  } else {\n    notify = function notify() {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = {\n      fn: fn,\n      next: undefined\n    };\n    if (last) last.next = task;\n\n    if (!head) {\n      head = task;\n      notify();\n    }\n\n    last = task;\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js ***!
  \*********************************************************************************************/
/*! default exports */
/*! export f [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 25.4.1.5 NewPromiseCapability(C)\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 19.1.2.1 Object.assign(target, source, ...)\n\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\n\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js\");\n\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\");\n\nvar $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)\n\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {}; // eslint-disable-next-line no-undef\n\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) {\n    B[k] = k;\n  });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) {\n  // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  }\n\n  return T;\n} : $assign;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 45:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js\");\n\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nvar Empty = function Empty() {\n  /* empty */\n};\n\nvar PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype\n\nvar _createDict = function createDict() {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js\")('iframe');\n\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n\n  __webpack_require__(/*! ./_html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js\").appendChild(iframe);\n\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  _createDict = iframeDocument.F;\n\n  while (i--) {\n    delete _createDict[PROTOTYPE][enumBugKeys[i]];\n  }\n\n  return _createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null; // add \"__proto__\" for Object.getPrototypeOf polyfill\n\n    result[IE_PROTO] = O;\n  } else result = _createDict();\n\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js ***!
  \********************************************************************************/
/*! default exports */
/*! export f [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\nvar dP = Object.defineProperty;\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) {\n    /* empty */\n  }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n\n  while (length > i) {\n    dP.f(O, P = keys[i++], Properties[P]);\n  }\n\n  return O;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // Forced replacement prototype accessors methods\n\nmodule.exports = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\") || !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  var K = Math.random(); // In FF throws only define methods\n  // eslint-disable-next-line no-undef, no-useless-call\n\n  __defineSetter__.call(null, K, function () {\n    /* empty */\n  });\n\n  delete __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\")[K];\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js ***!
  \**********************************************************************************/
/*! default exports */
/*! export f [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\");\n\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js\");\n\nvar gOPD = Object.getOwnPropertyDescriptor;\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) {\n    /* empty */\n  }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**************************************************************************************/
/*! default exports */
/*! export f [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, module */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\n\nvar toString = {}.toString;\nvar windowNames = (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function getWindowNames(it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js ***!
  \**********************************************************************************/
/*! default exports */
/*! export f [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js ***!
  \**********************************************************************************/
/*! default exports */
/*! export f [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = Object.getOwnPropertySymbols;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  }\n\n  return O instanceof Object ? ObjectProto : null;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js\")(false);\n\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n\n  for (key in O) {\n    if (key != IE_PROTO) has(O, key) && result.push(key);\n  } // Don't enum bug & hidden keys\n\n\n  while (names.length > i) {\n    if (has(O, key = names[i++])) {\n      ~arrayIndexOf(result, key) || result.push(key);\n    }\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js ***!
  \*********************************************************************************/
/*! default exports */
/*! export f [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = {}.propertyIsEnumerable;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () {\n    fn(1);\n  }), 'Object', exp);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\n\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\").f;\n\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n\n    while (length > i) {\n      key = keys[i++];\n\n      if (!DESCRIPTORS || isEnum.call(O, key)) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }\n\n    return result;\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\");\n\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar Reflect = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").Reflect;\n\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $parseFloat = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").parseFloat;\n\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $parseInt = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").parseInt;\n\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\").trim;\n\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js\");\n\nvar hex = /^[-+]?0[xX]/;\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return {\n      e: false,\n      v: exec()\n    };\n  } catch (e) {\n    return {\n      e: true,\n      v: e\n    };\n  }\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\n\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    redefine(target, key, src[key], safe);\n  }\n\n  return target;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 18:1-15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\")('src');\n\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_function-to-string.js\");\n\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 10:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\n\nvar builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\n\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n\n    if (_typeof(result) !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n\n    return result;\n  }\n\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n\n  return builtinExec.call(R, S);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 56:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\n\nvar nativeReplace = String.prototype.replace;\nvar patchedExec = nativeExec;\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.\n\n\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = function (regExp, replace) {\n  var replacer = replace === Object(replace) ? function (part) {\n    return replace[part];\n  } : replace;\n  return function (it) {\n    return String(it).replace(regExp, replacer);\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 11:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://tc39.github.io/proposal-setmap-offrom/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, {\n    from: function from(source\n    /* , mapFn, thisArg */\n    ) {\n      var mapFn = arguments[1];\n      var mapping, A, n, cb;\n      aFunction(this);\n      mapping = mapFn !== undefined;\n      if (mapping) aFunction(mapFn);\n      if (source == undefined) return new this();\n      A = [];\n\n      if (mapping) {\n        n = 0;\n        cb = ctx(mapFn, arguments[2], 2);\n        forOf(source, false, function (nextItem) {\n          A.push(cb(nextItem, n++));\n        });\n      } else {\n        forOf(source, false, A.push, A);\n      }\n\n      return new this(A);\n    }\n  });\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://tc39.github.io/proposal-setmap-offrom/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, {\n    of: function of() {\n      var length = arguments.length;\n      var A = new Array(length);\n\n      while (length--) {\n        A[length] = arguments[length];\n      }\n\n      return new this(A);\n    }\n  });\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar check = function check(O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\n\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n  function (test, buggy, set) {\n    try {\n      set = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n      set(test, []);\n      buggy = !(test instanceof Array);\n    } catch (e) {\n      buggy = true;\n    }\n\n    return function setPrototypeOf(O, proto) {\n      check(O, proto);\n      if (buggy) O.__proto__ = proto;else set(O, proto);\n      return O;\n    };\n  }({}, false) : undefined),\n  check: check\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 11:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\n\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function get() {\n      return this;\n    }\n  });\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {\n    configurable: true,\n    value: tag\n  });\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\")('keys');\n\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\n\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:1-15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () {\n      /* empty */\n    }, 1) : method.call(null);\n  });\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\"); // true  -> String#at\n// false -> String#codePointAt\n\n\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nvar quot = /\"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)\n\nvar createHTML = function createHTML(string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\n\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n\n  for (; n > 0; (n >>>= 1) && (str += str)) {\n    if (n & 1) res += str;\n  }\n\n  return res;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 34:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js\");\n\nvar space = '[' + spaces + ']';\nvar non = \"\\u200B\\x85\";\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function exporter(KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n}; // 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\n\n\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

eval("module.exports = \"\\t\\n\\x0B\\f\\r \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\" + \"\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF\";\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 96:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js\");\n\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js\");\n\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js\");\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\n\nvar run = function run() {\n  var id = +this; // eslint-disable-next-line no-prototype-builtins\n\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar listener = function listener(event) {\n  run.call(event.data);\n}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:\n\n\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n\n    while (arguments.length > i) {\n      args.push(arguments[i++]);\n    }\n\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n\n    defer(counter);\n    return counter;\n  };\n\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  }; // Node.js 0.8-\n\n\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function defer(id) {\n      process.nextTick(ctx(run, id, 1));\n    }; // Sphere (JS game engine) Dispatch API\n\n  } else if (Dispatch && Dispatch.now) {\n    defer = function defer(id) {\n      Dispatch.now(ctx(run, id, 1));\n    }; // Browsers with MessageChannel, includes WebWorkers\n\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers\n    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function defer(id) {\n      global.postMessage(id + '', '*');\n    };\n\n    global.addEventListener('message', listener, false); // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function defer(id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    }; // Rest old browsers\n\n  } else {\n    defer = function defer(id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module) => {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\n\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar min = Math.min;\n\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 6:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\n\n\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 420:2-16 */
/*! CommonJS bailout: module.exports is used directly at 585:7-21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\n\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js\");\n\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js\");\n\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\n\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\n\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js\");\n\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\n\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\n\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js\");\n\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\n\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\n\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js\");\n\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\n\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\n\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\");\n\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js\");\n\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\n\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js\");\n\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\n\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js\");\n\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\");\n\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js\");\n\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js\");\n\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\n\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function toOffset(it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function validate(it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function allocate(C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    }\n\n    return new C(length);\n  };\n\n  var speciesFromList = function speciesFromList(O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function fromList(C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n\n    while (length > index) {\n      result[index] = list[index++];\n    }\n\n    return result;\n  };\n\n  var addGetter = function addGetter(it, key, internal) {\n    dP(it, key, {\n      get: function get() {\n        return this._d[internal];\n      }\n    });\n  };\n\n  var $from = function from(source\n  /* , mapfn, thisArg */\n  ) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      }\n\n      O = values;\n    }\n\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n\n    return result;\n  };\n\n  var $of = function of()\n  /* ...items */\n  {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n\n    while (length > index) {\n      result[index] = arguments[index++];\n    }\n\n    return result;\n  }; // iOS Safari 6.x fails here\n\n\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {\n    arrayToLocaleString.call(new Uint8Array(1));\n  });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start\n    /* , end */\n    ) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn\n    /* , thisArg */\n    ) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value\n    /* , start, end */\n    ) {\n      // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn\n    /* , thisArg */\n    ) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate\n    /* , thisArg */\n    ) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate\n    /* , thisArg */\n    ) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn\n    /* , thisArg */\n    ) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement\n    /* , fromIndex */\n    ) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement\n    /* , fromIndex */\n    ) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) {\n      // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement\n    /* , fromIndex */\n    ) {\n      // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn\n    /* , thisArg */\n    ) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn\n    /* , initialValue */\n    ) {\n      // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn\n    /* , initialValue */\n    ) {\n      // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      }\n\n      return that;\n    },\n    some: function some(callbackfn\n    /* , thisArg */\n    ) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike\n  /* , offset */\n  ) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n\n    while (index < len) {\n      this[offset + index] = src[index++];\n    }\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function isTAIndex(target, key) {\n    return isObject(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);\n  };\n\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);\n  };\n\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors\n    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {\n      target[key] = desc.value;\n      return target;\n    }\n\n    return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () {\n    arrayToString.call({});\n  })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function constructor() {\n      /* noop */\n    },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function get() {\n      return this[TYPED_ARRAY];\n    }\n  }); // eslint-disable-next-line max-statements\n\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n\n    var getter = function getter(that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n\n    var setter = function setter(that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n\n    var addElement = function addElement(that, index) {\n      dP(that, index, {\n        get: function get() {\n          return getter(this, index);\n        },\n        set: function set(value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n\n        while (index < length) {\n          addElement(that, index++);\n        }\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n\n      new TypedArray(null); // eslint-disable-line no-new\n\n      new TypedArray(1.5); // eslint-disable-line no-new\n\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass; // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n\n        if (!isObject(data)) return new Base(toIndex(data));\n\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);\n        }\n\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function get() {\n          return NAME;\n        }\n      });\n    }\n\n    O[NAME] = TypedArray;\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n    $export($export.S + $export.F * fails(function () {\n      Base.of.call(TypedArray, 1);\n    }), NAME, {\n      from: $from,\n      of: $of\n    });\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n    $export($export.P, NAME, proto);\n    setSpecies(NAME);\n    $export($export.P + $export.F * FORCED_SET, NAME, {\n      set: $set\n    });\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, {\n      slice: $slice\n    });\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, {\n      toLocaleString: $toLocaleString\n    });\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () {\n  /* empty */\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_exports__ */
/*! CommonJS bailout: exports is used directly at 358:0-7 */
/*! CommonJS bailout: exports is used directly at 359:0-7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\n\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\n\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js\");\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js\");\n\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\n\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js\");\n\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\n\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names\n\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754\n\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value); // eslint-disable-next-line no-self-compare\n\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {\n    ;\n  }\n\n  e = e << mLen | m;\n  eLen += mLen;\n\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {\n    ;\n  }\n\n  buffer[--i] |= s * 128;\n  return buffer;\n}\n\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {\n    ;\n  }\n\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {\n    ;\n  }\n\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  }\n\n  return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\n\nfunction packI8(it) {\n  return [it & 0xff];\n}\n\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\n\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\n\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\n\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, {\n    get: function get() {\n      return this[internal];\n    }\n  });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\n\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n\n  for (var i = 0; i < bytes; i++) {\n    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n  }\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset\n    /* , littleEndian */\n    ) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset\n    /* , littleEndian */\n    ) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset\n    /* , littleEndian */\n    ) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset\n    /* , littleEndian */\n    ) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset\n    /* , littleEndian */\n    ) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset\n    /* , littleEndian */\n    ) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value\n    /* , littleEndian */\n    ) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  } // iOS Safari 7.x bug\n\n\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\n\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 23:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\n\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\nvar TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

eval("var id = 0;\nvar px = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar navigator = global.navigator;\nmodule.exports = navigator && navigator.userAgent || '';\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 11:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\n\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\n\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js\");\n\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\n\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {\n    value: wksExt.f(name)\n  });\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js ***!
  \******************************************************************************/
/*! default exports */
/*! export f [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js */
/*!   exports [maybe provided (runtime-defined)] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js ***!
  \**************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 9:15-29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\")('wks');\n\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\n\nvar _Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").Symbol;\n\nvar USE_SYMBOL = typeof _Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\n\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('iterator');\n\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\n\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];\n};\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/benjamingr/RexExp.escape\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $re = __webpack_require__(/*! ./_replacer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js\")(/[\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n\n$export($export.S, 'RegExp', {\n  escape: function escape(it) {\n    return $re(it);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', {\n  copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js\")\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn\n  /* , thisArg */\n  ) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', {\n  fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js\")\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn\n  /* , thisArg */\n  ) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(6);\n\nvar KEY = 'findIndex';\nvar forced = true; // Shouldn't skip holes\n\nif (KEY in []) Array(1)[KEY](function () {\n  forced = false;\n});\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn\n  /* , that = undefined */\n  ) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(5);\n\nvar KEY = 'find';\nvar forced = true; // Shouldn't skip holes\n\nif (KEY in []) Array(1)[KEY](function () {\n  forced = false;\n});\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn\n  /* , that = undefined */\n  ) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(0);\n\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn\n  /* , thisArg */\n  ) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js\");\n\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js\");\n\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  Array.from(iter);\n}), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike\n  /* , mapfn = undefined, thisArg = undefined */\n  ) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case\n\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n\n    result.length = index;\n    return result;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js\")(false);\n\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement\n  /* , fromIndex = 0 */\n  ) {\n    return NEGATIVE_ZERO // convert -0 to +0\n    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', {\n  isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\");\n\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js\");\n\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\"); // 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\n\n\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n\n  this._i = 0; // next index\n\n  this._k = kind; // kind\n  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\n\nIterators.Arguments = Iterators.Array;\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 22.1.3.13 Array.prototype.join(separator)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar arrayJoin = [].join; // fallback for not array-like strings\n\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement\n  /* , fromIndex = @[*-1] */\n  ) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n\n    for (; index >= 0; index--) {\n      if (index in O) if (O[index] === searchElement) return index || 0;\n    }\n\n    return -1;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn\n  /* , thisArg */\n  ) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js\"); // WebKit Array.of isn't generic\n\n\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  function F() {\n    /* empty */\n  }\n\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of()\n  /* ...args */\n  {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n\n    while (aLen > index) {\n      createProperty(result, index, arguments[index++]);\n    }\n\n    result.length = aLen;\n    return result;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn\n  /* , initialValue */\n  ) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn\n  /* , initialValue */\n  ) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_html.js\");\n\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n\n    for (; i < size; i++) {\n      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];\n    }\n\n    return cloned;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn\n  /* , thisArg */\n  ) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null); // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")('Array');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', {\n  now: function now() {\n    return new Date().getTime();\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js\"); // PhantomJS / old WebKit has a broken implementations\n\n\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({\n    toISOString: function toISOString() {\n      return 1;\n    }\n  }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('toPrimitive');\n\nvar proto = Date.prototype;\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js\"));\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\n\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this); // eslint-disable-next-line no-self-compare\n\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', {\n  bind: __webpack_require__(/*! ./_bind */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js ***!
  \***********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('hasInstance');\n\nvar FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)\n\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, {\n  value: function value(O) {\n    if (typeof this != 'function' || !isObject(O)) return false;\n    if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n\n    while (O = getPrototypeOf(O)) {\n      if (this.prototype === O) return true;\n    }\n\n    return false;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\n\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name'; // 19.2.4.2 name\n\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function get() {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js\");\n\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\n\nvar MAP = 'Map'; // 23.1 Map Objects\n\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js\");\n\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n$export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN\n&& $acosh(Infinity) == Infinity), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n} // Tor Browser bug: Math.asinh(0) -> -0\n\n\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {\n  asinh: asinh\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0\n\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar exp = Math.exp;\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {\n  expm1: $expm1\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar abs = Math.abs;\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) {\n    // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity\n\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js\");\n\nvar exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers\n\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js\");\n\nvar exp = Math.exp;\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\n\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f;\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\n\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\").trim;\n\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype; // Opera ~12 has broken Object#toString\n\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = ('trim' in String.prototype); // 7.1.3 ToNumber(argument)\n\nvar toNumber = function toNumber(argument) {\n  var it = toPrimitive(argument, false);\n\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66:\n        case 98:\n          radix = 2;\n          maxCode = 49;\n          break;\n        // fast equal /^0b[01]+$/i\n\n        case 79:\n        case 111:\n          radix = 8;\n          maxCode = 55;\n          break;\n        // fast equal /^0o[0-7]+$/i\n\n        default:\n          return +it;\n      }\n\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n\n        if (code < 48 || code > maxCode) return NaN;\n      }\n\n      return parseInt(digits, radix);\n    }\n  }\n\n  return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number // check on 1..constructor(foo) case\n    && (BROKEN_COF ? fails(function () {\n      proto.valueOf.call(that);\n    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : ( // ES3:\n  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):\n  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  EPSILON: Math.pow(2, -52)\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js\");\n\nvar abs = Math.abs;\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  MAX_SAFE_INTEGER: 0x1fffffffffffff\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  MIN_SAFE_INTEGER: -0x1fffffffffffff\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js\"); // 20.1.2.12 Number.parseFloat(string)\n\n\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {\n  parseFloat: $parseFloat\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js\"); // 20.1.2.13 Number.parseInt(string, radix)\n\n\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {\n  parseInt: $parseInt\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js\");\n\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js\");\n\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function multiply(n, c) {\n  var i = -1;\n  var c2 = c;\n\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\n\nvar divide = function divide(n) {\n  var i = 6;\n  var c = 0;\n\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = c % n * 1e7;\n  }\n};\n\nvar numToString = function numToString() {\n  var i = 6;\n  var s = '';\n\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  }\n\n  return s;\n};\n\nvar pow = function pow(x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\n\nvar log = function log(x) {\n  var n = 0;\n  var x2 = x;\n\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  }\n\n  return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare\n\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    }\n\n    return m;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js\");\n\nvar $toPrecision = 1.0.toPrecision;\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', {\n  assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\"); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n\n\n$export($export.S, 'Object', {\n  create: __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\"); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\"), 'Object', {\n  defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js ***!
  \************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\"); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\"), 'Object', {\n  defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \*******************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Object', {\n  is: __webpack_require__(/*! ./_same-value */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Object', {\n  setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js\").set\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 19.1.3.6 Object.prototype.toString()\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\n\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\n\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js\"); // 18.2.4 parseFloat(string)\n\n\n$export($export.G + $export.F * (parseFloat != $parseFloat), {\n  parseFloat: $parseFloat\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js\"); // 18.2.5 parseInt(string, radix)\n\n\n$export($export.G + $export.F * (parseInt != $parseInt), {\n  parseInt: $parseInt\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\");\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js\");\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\n\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\n\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js\").set;\n\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js\")();\n\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js\");\n\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js\");\n\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js\");\n\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js\");\n\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\n\nvar empty = function empty() {\n  /* empty */\n};\n\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n\n\n    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n    // we can't detect it synchronously, so just check versions\n    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) {\n    /* empty */\n  }\n}(); // helpers\n\nvar isThenable = function isThenable(it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\n\nvar notify = function notify(promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n\n    var run = function run(reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n\n          if (handler === true) result = value;else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n\n    while (chain.length > i) {\n      run(chain[i++]);\n    } // variable length - can't use forEach\n\n\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\n\nvar onUnhandled = function onUnhandled(promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({\n            promise: promise,\n            reason: value\n          });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    }\n\n    promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\n\nvar isUnhandled = function isUnhandled(promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\n\nvar onHandleUnhandled = function onHandleUnhandled(promise) {\n  task.call(global, function () {\n    var handler;\n\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({\n        promise: promise,\n        reason: promise._v\n      });\n    }\n  });\n};\n\nvar $reject = function $reject(value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\n\nvar $resolve = function $resolve(value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = {\n          _w: promise,\n          _d: false\n        }; // wrap\n\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({\n      _w: promise,\n      _d: false\n    }, e); // wrap\n  }\n}; // constructor polyfill\n\n\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  }; // eslint-disable-next-line no-unused-vars\n\n\n  Internal = function Promise(executor) {\n    this._c = []; // <- awaiting reactions\n\n    this._a = undefined; // <- checked in isUnhandled reactions\n\n    this._s = 0; // <- state\n\n    this._d = false; // <- done\n\n    this._v = undefined; // <- value\n\n    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n\n    this._n = false; // <- notify\n  };\n\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n\n      this._c.push(reaction);\n\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function _catch(onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n\n  OwnPromiseCapability = function OwnPromiseCapability() {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n\n  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {\n    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, {\n  Promise: $Promise\n});\n\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")(PROMISE);\n\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\")[PROMISE]; // statics\n\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar rApply = (__webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply; // MS Edge argumentsList argument is optional\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () {\n    /* empty */\n  });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js\");\n\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\n\nvar NEW_TARGET_BUG = fails(function () {\n  function F() {\n    /* empty */\n  }\n\n  return !(rConstruct(function () {\n    /* empty */\n  }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () {\n    /* empty */\n  });\n});\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args\n  /* , newTarget */\n  ) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0:\n          return new Target();\n\n        case 1:\n          return new Target(args[0]);\n\n        case 2:\n          return new Target(args[0], args[1]);\n\n        case 3:\n          return new Target(args[0], args[1], args[2]);\n\n        case 4:\n          return new Target(args[0], args[1], args[2], args[3]);\n      } // w/o altered newTarget, lot of arguments case\n\n\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    } // with altered newTarget, not support built-in constructors\n\n\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\"); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n\n\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, {\n    value: 1\n  }), 1, {\n    value: 2\n  });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f;\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 26.1.5 Reflect.enumerate(target)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar Enumerate = function Enumerate(iterated) {\n  this._t = anObject(iterated); // target\n\n  this._i = 0; // next index\n\n  var keys = this._k = []; // keys\n\n  var key;\n\n  for (key in iterated) {\n    keys.push(key);\n  }\n};\n\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n\n  do {\n    if (that._i >= keys.length) return {\n      value: undefined,\n      done: true\n    };\n  } while (!((key = keys[that._i++]) in that._t));\n\n  return {\n    value: key,\n    done: false\n  };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey\n/* , receiver */\n) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', {\n  get: get\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \***********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar $isExtensible = Object.isExtensible;\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \****************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar $preventExtensions = Object.preventExtensions;\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V\n/* , receiver */\n) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n\n    ownDesc = createDesc(0);\n  }\n\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n\n    return true;\n  }\n\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', {\n  set: set\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js\");\n\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f;\n\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f;\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js\");\n\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\");\n\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g; // \"new\" creates a new object, old webkit buggy here\n\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match\n\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);\n  };\n\n  var proxy = function proxy(key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function get() {\n        return Base[key];\n      },\n      set: function set(it) {\n        Base[key] = it;\n      }\n    });\n  };\n\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) {\n    proxy(keys[i++]);\n  }\n\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js\");\n\n__webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js\");\n\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js\"); // @@match logic\n\n\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [// `String.prototype.match` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.match\n  function match(regexp) {\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[MATCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n  }, // `RegExp.prototype[@@match]` method\n  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n  function (regexp) {\n    var res = maybeCallNative($match, regexp, this);\n    if (res.done) return res.value;\n    var rx = anObject(regexp);\n    var S = String(this);\n    if (!rx.global) return regExpExec(rx, S);\n    var fullUnicode = rx.unicode;\n    rx.lastIndex = 0;\n    var A = [];\n    var n = 0;\n    var result;\n\n    while ((result = regExpExec(rx, S)) !== null) {\n      var matchStr = String(result[0]);\n      A[n] = matchStr;\n      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      n++;\n    }\n\n    return n === 0 ? null : A;\n  }];\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js\");\n\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function maybeToString(it) {\n  return it === undefined ? it : String(it);\n}; // @@replace logic\n\n\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [// `String.prototype.replace` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n  function replace(searchValue, replaceValue) {\n    var O = defined(this);\n    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);\n  }, // `RegExp.prototype[@@replace]` method\n  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n  function (regexp, replaceValue) {\n    var res = maybeCallNative($replace, regexp, this, replaceValue);\n    if (res.done) return res.value;\n    var rx = anObject(regexp);\n    var S = String(this);\n    var functionalReplace = typeof replaceValue === 'function';\n    if (!functionalReplace) replaceValue = String(replaceValue);\n    var global = rx.global;\n\n    if (global) {\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n    }\n\n    var results = [];\n\n    while (true) {\n      var result = regExpExec(rx, S);\n      if (result === null) break;\n      results.push(result);\n      if (!global) break;\n      var matchStr = String(result[0]);\n      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n    }\n\n    var accumulatedResult = '';\n    var nextSourcePosition = 0;\n\n    for (var i = 0; i < results.length; i++) {\n      result = results[i];\n      var matched = String(result[0]);\n      var position = max(min(toInteger(result.index), S.length), 0);\n      var captures = []; // NOTE: This is equivalent to\n      //   captures = result.slice(1).map(maybeToString)\n      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n      // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n\n      for (var j = 1; j < result.length; j++) {\n        captures.push(maybeToString(result[j]));\n      }\n\n      var namedCaptures = result.groups;\n\n      if (functionalReplace) {\n        var replacerArgs = [matched].concat(captures, position, S);\n        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n        var replacement = String(replaceValue.apply(undefined, replacerArgs));\n      } else {\n        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n      }\n\n      if (position >= nextSourcePosition) {\n        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n        nextSourcePosition = position + matched.length;\n      }\n    }\n\n    return accumulatedResult + S.slice(nextSourcePosition);\n  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution\n\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n\n      switch (ch.charAt(0)) {\n        case '$':\n          return '$';\n\n        case '&':\n          return matched;\n\n        case '`':\n          return str.slice(0, position);\n\n        case \"'\":\n          return str.slice(tailPos);\n\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n\n        default:\n          // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n\n          capture = captures[n - 1];\n      }\n\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar sameValue = __webpack_require__(/*! ./_same-value */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js\");\n\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js\"); // @@search logic\n\n\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [// `String.prototype.search` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.search\n  function search(regexp) {\n    var O = defined(this);\n    var fn = regexp == undefined ? undefined : regexp[SEARCH];\n    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n  }, // `RegExp.prototype[@@search]` method\n  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n  function (regexp) {\n    var res = maybeCallNative($search, regexp, this);\n    if (res.done) return res.value;\n    var rx = anObject(regexp);\n    var S = String(this);\n    var previousLastIndex = rx.lastIndex;\n    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n    var result = regExpExec(rx, S);\n    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n    return result === null ? -1 : result.index;\n  }];\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\n\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_advance-string-index.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_regexp-exec.js\");\n\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\n\nvar SUPPORTS_Y = !fails(function () {\n  RegExp(MAX_UINT32, 'y');\n}); // @@split logic\n\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n\n  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function internalSplit(separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split\n\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy\n\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    }; // Chakra, V8\n\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function internalSplit(separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [// `String.prototype.split` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.split\n  function split(separator, limit) {\n    var O = defined(this);\n    var splitter = separator == undefined ? undefined : separator[SPLIT];\n    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);\n  }, // `RegExp.prototype[@@split]` method\n  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n  //\n  // NOTE: This cannot be properly polyfilled in engines that don't support\n  // the 'y' flag.\n  function (regexp, limit) {\n    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n    if (res.done) return res.value;\n    var rx = anObject(regexp);\n    var S = String(this);\n    var C = speciesConstructor(rx, RegExp);\n    var unicodeMatching = rx.unicode;\n    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to\n    // simulate the 'y' flag.\n\n    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n    if (lim === 0) return [];\n    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n    var p = 0;\n    var q = 0;\n    var A = [];\n\n    while (q < S.length) {\n      splitter.lastIndex = SUPPORTS_Y ? q : 0;\n      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n      var e;\n\n      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {\n        q = advanceStringIndex(S, q, unicodeMatching);\n      } else {\n        A.push(S.slice(p, q));\n        if (A.length === lim) return A;\n\n        for (var i = 1; i <= z.length - 1; i++) {\n          A.push(z[i]);\n          if (A.length === lim) return A;\n        }\n\n        q = p = e;\n      }\n    }\n\n    A.push(S.slice(p));\n    return A;\n  }];\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\n\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function define(fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n}; // 21.2.5.14 RegExp.prototype.toString()\n\n\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return $toString.call({\n    source: 'a',\n    flags: 'b'\n  }) != '/a/b';\n})) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  }); // FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js\");\n\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\n\nvar SET = 'Set'; // 23.2 Set Objects\n\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.2 String.prototype.anchor(name)\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.3 String.prototype.big()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.4 String.prototype.blink()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.5 String.prototype.bold()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js\")(false);\n\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js\");\n\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString\n  /* , endPosition = @length */\n  ) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.6 String.prototype.fixed()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.7 String.prototype.fontcolor(color)\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.8 String.prototype.fontsize(size)\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\n\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem\n\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) {\n    // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));\n    }\n\n    return res.join('');\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js\");\n\nvar INCLUDES = 'includes';\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString\n  /* , position = 0 */\n  ) {\n    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.9 String.prototype.italics()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js\")(true); // 21.1.3.27 String.prototype[@@iterator]()\n\n\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n\n  this._i = 0; // next index\n  // 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return {\n    value: undefined,\n    done: true\n  };\n  point = $at(O, index);\n  this._i += point.length;\n  return {\n    value: point,\n    done: false\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.10 String.prototype.link(url)\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    }\n\n    return res.join('');\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.11 String.prototype.small()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js\");\n\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString\n  /* , position = 0 */\n  ) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.12 String.prototype.strike()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.13 String.prototype.sub()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // B.2.3.14 String.prototype.sup()\n\n__webpack_require__(/*! ./_string-html */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // 21.1.3.25 String.prototype.trim()\n\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // ECMAScript 6 symbols shim\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_has.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\n\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\").KEY;\n\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js\");\n\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js\");\n\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js\");\n\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\n\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js\");\n\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js\");\n\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js\");\n\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js\");\n\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js\");\n\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js\");\n\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\n\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js\");\n\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\");\n\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\n\nvar _stringify = $JSON && $JSON.stringify;\n\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\n\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\n\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function get() {\n      return dP(this, 'a', {\n        value: 7\n      }).a;\n    }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function wrap(tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {\n  return _typeof(it) == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, {\n        enumerable: createDesc(0, false)\n      });\n    }\n\n    return setSymbolDesc(it, key, D);\n  }\n\n  return dP(it, key, D);\n};\n\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n\n  while (l > i) {\n    $defineProperty(it, key = keys[i++], P[key]);\n  }\n\n  return it;\n};\n\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  }\n\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  }\n\n  return result;\n}; // 19.4.1.1 Symbol([description])\n\n\nif (!USE_NATIVE) {\n  $Symbol = function _Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n\n    var $set = function $set(value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {\n      configurable: true,\n      set: $set\n    });\n    return wrap(tag);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, {\n  Symbol: $Symbol\n});\n\nfor (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {\n  wks(es6Symbols[j++]);\n}\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {\n  wksDefine(wellKnownSymbols[k++]);\n}\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function _for(key) {\n    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n\n    for (var key in SymbolRegistry) {\n      if (SymbolRegistry[key] === sym) return key;\n    }\n  },\n  useSetter: function useSetter() {\n    setter = true;\n  },\n  useSimple: function useSimple() {\n    setter = false;\n  }\n});\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n\nvar FAILS_ON_PRIMITIVES = $fails(function () {\n  $GOPS.f(1);\n});\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n}); // 24.3.2 JSON.stringify(value [, replacer [, space]])\n\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n\n  return _stringify([S]) != '[null]' || _stringify({\n    a: S\n  }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n\n    while (arguments.length > i) {\n      args.push(arguments[i++]);\n    }\n\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n\n    if (!isArray(replacer)) replacer = function replacer(key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]\n\nsetToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]\n\nsetToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]\n\nsetToStringTag(global.JSON, 'JSON', true);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js\");\n\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").ArrayBuffer;\n\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\n\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {\n  ArrayBuffer: $ArrayBuffer\n});\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    }\n\n    return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 49:15-29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js\")(0);\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\n\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js\");\n\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js\");\n\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js\");\n\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js\");\n\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\n\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\n\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar InternalMap;\n\nvar wrapper = function wrapper(get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n}; // 23.3 WeakMap Objects\n\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix\n\n\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n\n        var result = this._f[key](a, b);\n\n        return key == 'set' ? this : result; // store all the rest on native weakmap\n      }\n\n      return method.call(this, a, b);\n    });\n  });\n}\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js\");\n\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js\");\n\nvar WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects\n\n__webpack_require__(/*! ./_collection */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn\n  /* , thisArg */\n  ) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatten: function flatten()\n  /* depthArg = 1 */\n  {\n    var depthArg = arguments[0];\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('flatten');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://github.com/tc39/Array.prototype.includes\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el\n  /* , fromIndex = 0 */\n  ) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js\")();\n\nvar process = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\").process;\n\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\")(process) == 'process';\n$export($export.G, {\n  asap: function asap(fn) {\n    var domain = isNode && process.domain;\n    microtask(domain ? domain.bind(fn) : fn);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/ljharb/proposal-is-error\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js\");\n\n$export($export.S, 'Error', {\n  isError: function isError(it) {\n    return cof(it) === 'Error';\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.G, {\n  global: __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js\")('Map');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js\")('Map');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Map', {\n  toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js\")('Map')\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clamp: function clamp(x, lower, upper) {\n    return Math.min(upper, Math.max(lower, x));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  DEG_PER_RAD: Math.PI / 180\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar RAD_PER_DEG = 180 / Math.PI;\n$export($export.S, 'Math', {\n  degrees: function degrees(radians) {\n    return radians * RAD_PER_DEG;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar scale = __webpack_require__(/*! ./_math-scale */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js\");\n\nvar fround = __webpack_require__(/*! ./_math-fround */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js\");\n\n$export($export.S, 'Math', {\n  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {\n    return fround(scale(x, inLow, inHigh, outLow, outHigh));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  iaddh: function iaddh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  imulh: function imulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >> 16;\n    var v1 = $v >> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  isubh: function isubh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  RAD_PER_DEG: 180 / Math.PI\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar DEG_PER_RAD = Math.PI / 180;\n$export($export.S, 'Math', {\n  radians: function radians(degrees) {\n    return degrees * DEG_PER_RAD;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  scale: __webpack_require__(/*! ./_math-scale */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// http://jfbastien.github.io/papers/Math.signbit.html\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  signbit: function signbit(x) {\n    // eslint-disable-next-line no-self-compare\n    return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  umulh: function umulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >>> 16;\n    var v1 = $v >>> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\"); // B.2.2.2 Object.prototype.__defineGetter__(P, getter)\n\n\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineGetter__: function __defineGetter__(P, getter) {\n    $defineProperty.f(toObject(this), P, {\n      get: aFunction(getter),\n      enumerable: true,\n      configurable: true\n    });\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js\"); // B.2.2.3 Object.prototype.__defineSetter__(P, setter)\n\n\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineSetter__: function __defineSetter__(P, setter) {\n    $defineProperty.f(toObject(this), P, {\n      set: aFunction(setter),\n      enumerable: true,\n      configurable: true\n    });\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js\");\n\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js\");\n\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\");\n\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n\n    return result;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f; // B.2.2.4 Object.prototype.__lookupGetter__(P)\n\n\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupGetter__: function __lookupGetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.get;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js\").f; // B.2.2.5 Object.prototype.__lookupSetter__(P)\n\n\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupSetter__: function __lookupSetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.set;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://github.com/zenparsing/es-observable\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\n\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js\")();\n\nvar OBSERVABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\")('observable');\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js\");\n\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js\");\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js\");\n\nvar RETURN = forOf.RETURN;\n\nvar getMethod = function getMethod(fn) {\n  return fn == null ? undefined : aFunction(fn);\n};\n\nvar cleanupSubscription = function cleanupSubscription(subscription) {\n  var cleanup = subscription._c;\n\n  if (cleanup) {\n    subscription._c = undefined;\n    cleanup();\n  }\n};\n\nvar subscriptionClosed = function subscriptionClosed(subscription) {\n  return subscription._o === undefined;\n};\n\nvar closeSubscription = function closeSubscription(subscription) {\n  if (!subscriptionClosed(subscription)) {\n    subscription._o = undefined;\n    cleanupSubscription(subscription);\n  }\n};\n\nvar Subscription = function Subscription(observer, subscriber) {\n  anObject(observer);\n  this._c = undefined;\n  this._o = observer;\n  observer = new SubscriptionObserver(this);\n\n  try {\n    var cleanup = subscriber(observer);\n    var subscription = cleanup;\n\n    if (cleanup != null) {\n      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {\n        subscription.unsubscribe();\n      };else aFunction(cleanup);\n      this._c = cleanup;\n    }\n  } catch (e) {\n    observer.error(e);\n    return;\n  }\n\n  if (subscriptionClosed(this)) cleanupSubscription(this);\n};\n\nSubscription.prototype = redefineAll({}, {\n  unsubscribe: function unsubscribe() {\n    closeSubscription(this);\n  }\n});\n\nvar SubscriptionObserver = function SubscriptionObserver(subscription) {\n  this._s = subscription;\n};\n\nSubscriptionObserver.prototype = redefineAll({}, {\n  next: function next(value) {\n    var subscription = this._s;\n\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n\n      try {\n        var m = getMethod(observer.next);\n        if (m) return m.call(observer, value);\n      } catch (e) {\n        try {\n          closeSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }\n    }\n  },\n  error: function error(value) {\n    var subscription = this._s;\n    if (subscriptionClosed(subscription)) throw value;\n    var observer = subscription._o;\n    subscription._o = undefined;\n\n    try {\n      var m = getMethod(observer.error);\n      if (!m) throw value;\n      value = m.call(observer, value);\n    } catch (e) {\n      try {\n        cleanupSubscription(subscription);\n      } finally {\n        throw e;\n      }\n    }\n\n    cleanupSubscription(subscription);\n    return value;\n  },\n  complete: function complete(value) {\n    var subscription = this._s;\n\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      subscription._o = undefined;\n\n      try {\n        var m = getMethod(observer.complete);\n        value = m ? m.call(observer, value) : undefined;\n      } catch (e) {\n        try {\n          cleanupSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }\n\n      cleanupSubscription(subscription);\n      return value;\n    }\n  }\n});\n\nvar $Observable = function Observable(subscriber) {\n  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);\n};\n\nredefineAll($Observable.prototype, {\n  subscribe: function subscribe(observer) {\n    return new Subscription(observer, this._f);\n  },\n  forEach: function forEach(fn) {\n    var that = this;\n    return new (core.Promise || global.Promise)(function (resolve, reject) {\n      aFunction(fn);\n      var subscription = that.subscribe({\n        next: function next(value) {\n          try {\n            return fn(value);\n          } catch (e) {\n            reject(e);\n            subscription.unsubscribe();\n          }\n        },\n        error: reject,\n        complete: resolve\n      });\n    });\n  }\n});\nredefineAll($Observable, {\n  from: function from(x) {\n    var C = typeof this === 'function' ? this : $Observable;\n    var method = getMethod(anObject(x)[OBSERVABLE]);\n\n    if (method) {\n      var observable = anObject(method.call(x));\n      return observable.constructor === C ? observable : new C(function (observer) {\n        return observable.subscribe(observer);\n      });\n    }\n\n    return new C(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          try {\n            if (forOf(x, false, function (it) {\n              observer.next(it);\n              if (done) return RETURN;\n            }) === RETURN) return;\n          } catch (e) {\n            if (done) throw e;\n            observer.error(e);\n            return;\n          }\n\n          observer.complete();\n        }\n      });\n      return function () {\n        done = true;\n      };\n    });\n  },\n  of: function of() {\n    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) {\n      items[i] = arguments[i++];\n    }\n\n    return new (typeof this === 'function' ? this : $Observable)(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          for (var j = 0; j < items.length; ++j) {\n            observer.next(items[j]);\n            if (done) return;\n          }\n\n          observer.complete();\n        }\n      });\n      return function () {\n        done = true;\n      };\n    });\n  }\n});\nhide($Observable.prototype, OBSERVABLE, function () {\n  return this;\n});\n$export($export.G, {\n  Observable: $Observable\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js\")('Observable');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js\");\n\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', {\n  'finally': function _finally(onFinally) {\n    var C = speciesConstructor(this, core.Promise || global.Promise);\n    var isFunction = typeof onFinally == 'function';\n    return this.then(isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () {\n        return x;\n      });\n    } : onFinally, isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () {\n        throw e;\n      });\n    } : onFinally);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://github.com/tc39/proposal-promise-try\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js\");\n\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js\");\n\n$export($export.S, 'Promise', {\n  'try': function _try(callbackfn) {\n    var promiseCapability = newPromiseCapability.f(this);\n    var result = perform(callbackfn);\n    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n    return promiseCapability.promise;\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar toMetaKey = metadata.key;\nvar ordinaryDefineOwnMetadata = metadata.set;\nmetadata.exp({\n  defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {\n    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar toMetaKey = metadata.key;\nvar getOrCreateMetadataMap = metadata.map;\nvar store = metadata.store;\nmetadata.exp({\n  deleteMetadata: function deleteMetadata(metadataKey, target\n  /* , targetKey */\n  ) {\n    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);\n    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);\n    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;\n    if (metadataMap.size) return true;\n    var targetMetadata = store.get(target);\n    targetMetadata['delete'](targetKey);\n    return !!targetMetadata.size || store['delete'](target);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Set = __webpack_require__(/*! ./es6.set */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js\");\n\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js\");\n\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nvar ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {\n  var oKeys = ordinaryOwnMetadataKeys(O, P);\n  var parent = getPrototypeOf(O);\n  if (parent === null) return oKeys;\n  var pKeys = ordinaryMetadataKeys(parent, P);\n  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;\n};\n\nmetadata.exp({\n  getMetadataKeys: function getMetadataKeys(target\n  /* , targetKey */\n  ) {\n    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar ordinaryHasOwnMetadata = metadata.has;\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nvar ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;\n};\n\nmetadata.exp({\n  getMetadata: function getMetadata(metadataKey, target\n  /* , targetKey */\n  ) {\n    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \*******************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\nmetadata.exp({\n  getOwnMetadataKeys: function getOwnMetadataKeys(target\n  /* , targetKey */\n  ) {\n    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\nmetadata.exp({\n  getOwnMetadata: function getOwnMetadata(metadataKey, target\n  /* , targetKey */\n  ) {\n    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js\");\n\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nvar ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return true;\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;\n};\n\nmetadata.exp({\n  hasMetadata: function hasMetadata(metadataKey, target\n  /* , targetKey */\n  ) {\n    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\nmetadata.exp({\n  hasOwnMetadata: function hasOwnMetadata(metadataKey, target\n  /* , targetKey */\n  ) {\n    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js\");\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js\");\n\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js\");\n\nvar toMetaKey = $metadata.key;\nvar ordinaryDefineOwnMetadata = $metadata.set;\n$metadata.exp({\n  metadata: function metadata(metadataKey, metadataValue) {\n    return function decorator(target, targetKey) {\n      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));\n    };\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js\")('Set');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js\")('Set');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Set', {\n  toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js\")('Set')\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://github.com/mathiasbynens/String.prototype.at\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js\")(true);\n\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js\");\n\nvar FORCED = $fails(function () {\n  return '𠮷'.at(0) !== '𠮷';\n});\n$export($export.P + $export.F * FORCED, 'String', {\n  at: function at(pos) {\n    return $at(this, pos);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://tc39.github.io/String.prototype.matchAll/\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js\");\n\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js\");\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js\");\n\nvar getFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js\");\n\nvar RegExpProto = RegExp.prototype;\n\nvar $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {\n  this._r = regexp;\n  this._s = string;\n};\n\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js\")($RegExpStringIterator, 'RegExp String', function next() {\n  var match = this._r.exec(this._s);\n\n  return {\n    value: match,\n    done: match === null\n  };\n});\n\n$export($export.P, 'String', {\n  matchAll: function matchAll(regexp) {\n    defined(this);\n    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');\n    var S = String(this);\n    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);\n    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);\n    rx.lastIndex = toLength(regexp.lastIndex);\n    return new $RegExpStringIterator(rx, S);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js ***!
  \****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://github.com/tc39/proposal-string-pad-start-end\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js\");\n\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js\"); // https://github.com/zloirock/core-js/issues/280\n\n\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padEnd: function padEnd(maxLength\n  /* , fillString = ' ' */\n  ) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://github.com/tc39/proposal-string-pad-start-end\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js\");\n\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js\"); // https://github.com/zloirock/core-js/issues/280\n\n\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength\n  /* , fillString = ' ' */\n  ) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js ***!
  \******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \***********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js\")('observable');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'System', {\n  global: __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\")\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js\")('WeakMap');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js\")('WeakMap');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js\")('WeakSet');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js\")('WeakSet');\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js ***!
  \**************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js\");\n\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js\");\n\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js\");\n\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js\");\n\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js\");\n\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js\");\n\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\nvar DOMIterables = {\n  CSSRuleList: true,\n  // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true,\n  // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true,\n  // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) {\n      if (!proto[key]) redefine(proto, key, $iterators[key], true);\n    }\n  }\n}\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_task.js\");\n\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js ***!
  \********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_global.js\");\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_export.js\");\n\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js\");\n\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\n\nvar wrap = function wrap(set) {\n  return function (fn, time\n  /* , ...args */\n  ) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/core-js/shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/core-js/shim.js ***!
  \******************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] -> ./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./modules/es6.symbol */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js\");\n\n__webpack_require__(/*! ./modules/es6.object.create */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js\");\n\n__webpack_require__(/*! ./modules/es6.object.define-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js\");\n\n__webpack_require__(/*! ./modules/es6.object.define-properties */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js\");\n\n__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n\n__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n\n__webpack_require__(/*! ./modules/es6.object.keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js\");\n\n__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n\n__webpack_require__(/*! ./modules/es6.object.freeze */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js\");\n\n__webpack_require__(/*! ./modules/es6.object.seal */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js\");\n\n__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n\n__webpack_require__(/*! ./modules/es6.object.is-frozen */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js\");\n\n__webpack_require__(/*! ./modules/es6.object.is-sealed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js\");\n\n__webpack_require__(/*! ./modules/es6.object.is-extensible */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js\");\n\n__webpack_require__(/*! ./modules/es6.object.assign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js\");\n\n__webpack_require__(/*! ./modules/es6.object.is */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js\");\n\n__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n\n__webpack_require__(/*! ./modules/es6.object.to-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js\");\n\n__webpack_require__(/*! ./modules/es6.function.bind */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js\");\n\n__webpack_require__(/*! ./modules/es6.function.name */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js\");\n\n__webpack_require__(/*! ./modules/es6.function.has-instance */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js\");\n\n__webpack_require__(/*! ./modules/es6.parse-int */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js\");\n\n__webpack_require__(/*! ./modules/es6.parse-float */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js\");\n\n__webpack_require__(/*! ./modules/es6.number.constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js\");\n\n__webpack_require__(/*! ./modules/es6.number.to-fixed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js\");\n\n__webpack_require__(/*! ./modules/es6.number.to-precision */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js\");\n\n__webpack_require__(/*! ./modules/es6.number.epsilon */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js\");\n\n__webpack_require__(/*! ./modules/es6.number.is-finite */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js\");\n\n__webpack_require__(/*! ./modules/es6.number.is-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js\");\n\n__webpack_require__(/*! ./modules/es6.number.is-nan */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js\");\n\n__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n\n__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n\n__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n\n__webpack_require__(/*! ./modules/es6.number.parse-float */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js\");\n\n__webpack_require__(/*! ./modules/es6.number.parse-int */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js\");\n\n__webpack_require__(/*! ./modules/es6.math.acosh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js\");\n\n__webpack_require__(/*! ./modules/es6.math.asinh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js\");\n\n__webpack_require__(/*! ./modules/es6.math.atanh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js\");\n\n__webpack_require__(/*! ./modules/es6.math.cbrt */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js\");\n\n__webpack_require__(/*! ./modules/es6.math.clz32 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js\");\n\n__webpack_require__(/*! ./modules/es6.math.cosh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js\");\n\n__webpack_require__(/*! ./modules/es6.math.expm1 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js\");\n\n__webpack_require__(/*! ./modules/es6.math.fround */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js\");\n\n__webpack_require__(/*! ./modules/es6.math.hypot */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js\");\n\n__webpack_require__(/*! ./modules/es6.math.imul */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js\");\n\n__webpack_require__(/*! ./modules/es6.math.log10 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js\");\n\n__webpack_require__(/*! ./modules/es6.math.log1p */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js\");\n\n__webpack_require__(/*! ./modules/es6.math.log2 */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js\");\n\n__webpack_require__(/*! ./modules/es6.math.sign */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js\");\n\n__webpack_require__(/*! ./modules/es6.math.sinh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js\");\n\n__webpack_require__(/*! ./modules/es6.math.tanh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js\");\n\n__webpack_require__(/*! ./modules/es6.math.trunc */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js\");\n\n__webpack_require__(/*! ./modules/es6.string.from-code-point */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js\");\n\n__webpack_require__(/*! ./modules/es6.string.raw */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js\");\n\n__webpack_require__(/*! ./modules/es6.string.trim */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js\");\n\n__webpack_require__(/*! ./modules/es6.string.iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js\");\n\n__webpack_require__(/*! ./modules/es6.string.code-point-at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js\");\n\n__webpack_require__(/*! ./modules/es6.string.ends-with */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js\");\n\n__webpack_require__(/*! ./modules/es6.string.includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js\");\n\n__webpack_require__(/*! ./modules/es6.string.repeat */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js\");\n\n__webpack_require__(/*! ./modules/es6.string.starts-with */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js\");\n\n__webpack_require__(/*! ./modules/es6.string.anchor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js\");\n\n__webpack_require__(/*! ./modules/es6.string.big */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js\");\n\n__webpack_require__(/*! ./modules/es6.string.blink */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js\");\n\n__webpack_require__(/*! ./modules/es6.string.bold */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js\");\n\n__webpack_require__(/*! ./modules/es6.string.fixed */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js\");\n\n__webpack_require__(/*! ./modules/es6.string.fontcolor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js\");\n\n__webpack_require__(/*! ./modules/es6.string.fontsize */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js\");\n\n__webpack_require__(/*! ./modules/es6.string.italics */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js\");\n\n__webpack_require__(/*! ./modules/es6.string.link */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js\");\n\n__webpack_require__(/*! ./modules/es6.string.small */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js\");\n\n__webpack_require__(/*! ./modules/es6.string.strike */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js\");\n\n__webpack_require__(/*! ./modules/es6.string.sub */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js\");\n\n__webpack_require__(/*! ./modules/es6.string.sup */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js\");\n\n__webpack_require__(/*! ./modules/es6.date.now */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js\");\n\n__webpack_require__(/*! ./modules/es6.date.to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js\");\n\n__webpack_require__(/*! ./modules/es6.date.to-iso-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js\");\n\n__webpack_require__(/*! ./modules/es6.date.to-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js\");\n\n__webpack_require__(/*! ./modules/es6.date.to-primitive */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js\");\n\n__webpack_require__(/*! ./modules/es6.array.is-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js\");\n\n__webpack_require__(/*! ./modules/es6.array.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js\");\n\n__webpack_require__(/*! ./modules/es6.array.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js\");\n\n__webpack_require__(/*! ./modules/es6.array.join */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js\");\n\n__webpack_require__(/*! ./modules/es6.array.slice */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js\");\n\n__webpack_require__(/*! ./modules/es6.array.sort */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js\");\n\n__webpack_require__(/*! ./modules/es6.array.for-each */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js\");\n\n__webpack_require__(/*! ./modules/es6.array.map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js\");\n\n__webpack_require__(/*! ./modules/es6.array.filter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js\");\n\n__webpack_require__(/*! ./modules/es6.array.some */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js\");\n\n__webpack_require__(/*! ./modules/es6.array.every */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js\");\n\n__webpack_require__(/*! ./modules/es6.array.reduce */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js\");\n\n__webpack_require__(/*! ./modules/es6.array.reduce-right */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js\");\n\n__webpack_require__(/*! ./modules/es6.array.index-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js\");\n\n__webpack_require__(/*! ./modules/es6.array.last-index-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js\");\n\n__webpack_require__(/*! ./modules/es6.array.copy-within */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js\");\n\n__webpack_require__(/*! ./modules/es6.array.fill */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js\");\n\n__webpack_require__(/*! ./modules/es6.array.find */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js\");\n\n__webpack_require__(/*! ./modules/es6.array.find-index */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js\");\n\n__webpack_require__(/*! ./modules/es6.array.species */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js\");\n\n__webpack_require__(/*! ./modules/es6.array.iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js\");\n\n__webpack_require__(/*! ./modules/es6.regexp.constructor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js\");\n\n__webpack_require__(/*! ./modules/es6.regexp.exec */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.exec.js\");\n\n__webpack_require__(/*! ./modules/es6.regexp.to-string */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js\");\n\n__webpack_require__(/*! ./modules/es6.regexp.flags */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js\");\n\n__webpack_require__(/*! ./modules/es6.regexp.match */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js\");\n\n__webpack_require__(/*! ./modules/es6.regexp.replace */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js\");\n\n__webpack_require__(/*! ./modules/es6.regexp.search */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js\");\n\n__webpack_require__(/*! ./modules/es6.regexp.split */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js\");\n\n__webpack_require__(/*! ./modules/es6.promise */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js\");\n\n__webpack_require__(/*! ./modules/es6.map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js\");\n\n__webpack_require__(/*! ./modules/es6.set */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js\");\n\n__webpack_require__(/*! ./modules/es6.weak-map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js\");\n\n__webpack_require__(/*! ./modules/es6.weak-set */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.array-buffer */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.data-view */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.int8-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.uint8-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.int16-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.uint16-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.int32-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.uint32-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.float32-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js\");\n\n__webpack_require__(/*! ./modules/es6.typed.float64-array */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.apply */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.construct */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.define-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.delete-property */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.enumerate */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.get */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.has */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.own-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.set */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js\");\n\n__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\n\n__webpack_require__(/*! ./modules/es7.array.includes */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js\");\n\n__webpack_require__(/*! ./modules/es7.array.flat-map */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js\");\n\n__webpack_require__(/*! ./modules/es7.array.flatten */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js\");\n\n__webpack_require__(/*! ./modules/es7.string.at */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js\");\n\n__webpack_require__(/*! ./modules/es7.string.pad-start */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js\");\n\n__webpack_require__(/*! ./modules/es7.string.pad-end */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js\");\n\n__webpack_require__(/*! ./modules/es7.string.trim-left */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js\");\n\n__webpack_require__(/*! ./modules/es7.string.trim-right */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js\");\n\n__webpack_require__(/*! ./modules/es7.string.match-all */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js\");\n\n__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n\n__webpack_require__(/*! ./modules/es7.symbol.observable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js\");\n\n__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\n\n__webpack_require__(/*! ./modules/es7.object.values */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js\");\n\n__webpack_require__(/*! ./modules/es7.object.entries */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js\");\n\n__webpack_require__(/*! ./modules/es7.object.define-getter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js\");\n\n__webpack_require__(/*! ./modules/es7.object.define-setter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js\");\n\n__webpack_require__(/*! ./modules/es7.object.lookup-getter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js\");\n\n__webpack_require__(/*! ./modules/es7.object.lookup-setter */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js\");\n\n__webpack_require__(/*! ./modules/es7.map.to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js\");\n\n__webpack_require__(/*! ./modules/es7.set.to-json */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js\");\n\n__webpack_require__(/*! ./modules/es7.map.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js\");\n\n__webpack_require__(/*! ./modules/es7.set.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js\");\n\n__webpack_require__(/*! ./modules/es7.weak-map.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js\");\n\n__webpack_require__(/*! ./modules/es7.weak-set.of */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js\");\n\n__webpack_require__(/*! ./modules/es7.map.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js\");\n\n__webpack_require__(/*! ./modules/es7.set.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js\");\n\n__webpack_require__(/*! ./modules/es7.weak-map.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js\");\n\n__webpack_require__(/*! ./modules/es7.weak-set.from */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js\");\n\n__webpack_require__(/*! ./modules/es7.global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js\");\n\n__webpack_require__(/*! ./modules/es7.system.global */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js\");\n\n__webpack_require__(/*! ./modules/es7.error.is-error */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js\");\n\n__webpack_require__(/*! ./modules/es7.math.clamp */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js\");\n\n__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js\");\n\n__webpack_require__(/*! ./modules/es7.math.degrees */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js\");\n\n__webpack_require__(/*! ./modules/es7.math.fscale */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js\");\n\n__webpack_require__(/*! ./modules/es7.math.iaddh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js\");\n\n__webpack_require__(/*! ./modules/es7.math.isubh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js\");\n\n__webpack_require__(/*! ./modules/es7.math.imulh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js\");\n\n__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js\");\n\n__webpack_require__(/*! ./modules/es7.math.radians */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js\");\n\n__webpack_require__(/*! ./modules/es7.math.scale */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js\");\n\n__webpack_require__(/*! ./modules/es7.math.umulh */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js\");\n\n__webpack_require__(/*! ./modules/es7.math.signbit */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js\");\n\n__webpack_require__(/*! ./modules/es7.promise.finally */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js\");\n\n__webpack_require__(/*! ./modules/es7.promise.try */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js\");\n\n__webpack_require__(/*! ./modules/es7.reflect.metadata */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js\");\n\n__webpack_require__(/*! ./modules/es7.asap */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js\");\n\n__webpack_require__(/*! ./modules/es7.observable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js\");\n\n__webpack_require__(/*! ./modules/web.timers */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js\");\n\n__webpack_require__(/*! ./modules/web.immediate */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js\");\n\n__webpack_require__(/*! ./modules/web.dom.iterable */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js\");\n\nmodule.exports = __webpack_require__(/*! ./modules/_core */ \"./node_modules/babel-polyfill/node_modules/core-js/modules/_core.js\");\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/core-js/shim.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, top-level-this-exports, __webpack_require__.g, __webpack_require__.* */
/*! CommonJS bailout: this is used directly at 718:258-262 */
/*! CommonJS bailout: module.exports is used directly at 30:6-20 */
/*! CommonJS bailout: module.exports is used directly at 40:51-65 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * Copyright (c) 2014, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * https://raw.github.com/facebook/regenerator/master/LICENSE file. An\n * additional grant of patent rights can be found in the PATENTS file in\n * the same directory.\n */\n!function (global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  var inModule = ( false ? 0 : _typeof(module)) === \"object\";\n  var runtime = global.regeneratorRuntime;\n\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    } // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n\n\n    return;\n  } // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n\n\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n    return generator;\n  }\n\n  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\"; // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n\n  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n\n  function Generator() {}\n\n  function GeneratorFunction() {}\n\n  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n\n\n  var IteratorPrototype = {};\n\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n\n  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = \"GeneratorFunction\"; // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      prototype[method] = function (arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function (genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can\n    // do is to check its .name property.\n    (ctor.displayName || ctor.name) === \"GeneratorFunction\" : false;\n  };\n\n  runtime.mark = function (genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  }; // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n\n\n  runtime.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n\n        if (value && _typeof(value) === \"object\" && hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function (value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function (err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function (unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    if (_typeof(global.process) === \"object\" && global.process.domain) {\n      invoke = global.process.domain.bind(invoke);\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise = // If enqueue has been called before, then we want to wait until\n      // all previous Promises have been resolved before calling invoke,\n      // so that results are always delivered in the correct order. If\n      // enqueue has not been called before, then it is important to\n      // call invoke immediately, without waiting on a callback to fire,\n      // so that the async generator function has the opportunity to do\n      // any necessary setup in a predictable way. This predictability\n      // is why the Promise constructor synchronously invokes its\n      // executor callback, and why async functions synchronously\n      // execute code before the first await. Since we implement simple\n      // async functions in terms of async generators, it is especially\n      // important to get this right, even though it requires care.\n      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later\n      // invocations of the iterator.\n      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    } // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n\n\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n\n  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n\n  runtime.async = function (innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));\n    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.\n    : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        } // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n\n\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n        var record = tryCatch(innerFn, self, context);\n\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done ? GenStateCompleted : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted; // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  } // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n\n\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (!info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).\n\n      context.next = delegate.nextLoc; // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    } // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n\n\n    context.delegate = null;\n    return ContinueSentinel;\n  } // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n\n\n  defineIteratorMethods(Gp);\n  Gp[toStringTagSymbol] = \"Generator\"; // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n\n  Gp[iteratorSymbol] = function () {\n    return this;\n  };\n\n  Gp.toString = function () {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function (object) {\n    var keys = [];\n\n    for (var key in object) {\n      keys.push(key);\n    }\n\n    keys.reverse(); // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      } // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n\n\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n          return next;\n        };\n\n        return next.next = next;\n      }\n    } // Return an iterator with no values.\n\n\n    return {\n      next: doneResult\n    };\n  }\n\n  runtime.values = values;\n\n  function doneResult() {\n    return {\n      value: undefined,\n      done: true\n    };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      this.prev = 0;\n      this.next = 0; // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n      this.method = \"next\";\n      this.arg = undefined;\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n    stop: function stop() {\n      this.done = true;\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry && (type === \"break\" || type === \"continue\") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" || record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n\n          return thrown;\n        }\n      } // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n\n\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n}( // Among the various tricks for obtaining a reference to the global\n// object, this seems to be the most reliable technique that does not\n// use indirect eval (which violates Content Security Policy).\n(typeof __webpack_require__.g === \"undefined\" ? \"undefined\" : _typeof(__webpack_require__.g)) === \"object\" ? __webpack_require__.g : (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\" ? window : (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) === \"object\" ? self : this);\n\n//# sourceURL=webpack://dedLog/./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/ua-parser-js/src/ua-parser.js":
/*!****************************************************!*\
  !*** ./node_modules/ua-parser-js/src/ua-parser.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, top-level-this-exports, __webpack_require__, __webpack_require__.* */
/*! CommonJS bailout: this is used directly at 576:91-95 */
/*! CommonJS bailout: exports is used directly at 533:62-69 */
/*! CommonJS bailout: module.exports is used directly at 535:90-104 */
/*! CommonJS bailout: module.exports is used directly at 536:16-30 */
/*! CommonJS bailout: exports is used directly at 536:6-13 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*!\n * UAParser.js v0.7.22\n * Lightweight JavaScript-based User-Agent string parser\n * https://github.com/faisalman/ua-parser-js\n *\n * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>\n * Licensed under MIT License\n */\n(function (window, undefined) {\n  'use strict'; //////////////\n  // Constants\n  /////////////\n\n  var LIBVERSION = '0.7.22',\n      EMPTY = '',\n      UNKNOWN = '?',\n      FUNC_TYPE = 'function',\n      UNDEF_TYPE = 'undefined',\n      OBJ_TYPE = 'object',\n      STR_TYPE = 'string',\n      MAJOR = 'major',\n      // deprecated\n  MODEL = 'model',\n      NAME = 'name',\n      TYPE = 'type',\n      VENDOR = 'vendor',\n      VERSION = 'version',\n      ARCHITECTURE = 'architecture',\n      CONSOLE = 'console',\n      MOBILE = 'mobile',\n      TABLET = 'tablet',\n      SMARTTV = 'smarttv',\n      WEARABLE = 'wearable',\n      EMBEDDED = 'embedded'; ///////////\n  // Helper\n  //////////\n\n  var util = {\n    extend: function extend(regexes, extensions) {\n      var mergedRegexes = {};\n\n      for (var i in regexes) {\n        if (extensions[i] && extensions[i].length % 2 === 0) {\n          mergedRegexes[i] = extensions[i].concat(regexes[i]);\n        } else {\n          mergedRegexes[i] = regexes[i];\n        }\n      }\n\n      return mergedRegexes;\n    },\n    has: function has(str1, str2) {\n      if (typeof str1 === \"string\") {\n        return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;\n      } else {\n        return false;\n      }\n    },\n    lowerize: function lowerize(str) {\n      return str.toLowerCase();\n    },\n    major: function major(version) {\n      return _typeof(version) === STR_TYPE ? version.replace(/[^\\d\\.]/g, '').split(\".\")[0] : undefined;\n    },\n    trim: function trim(str) {\n      return str.replace(/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g, '');\n    }\n  }; ///////////////\n  // Map helper\n  //////////////\n\n  var mapper = {\n    rgx: function rgx(ua, arrays) {\n      var i = 0,\n          j,\n          k,\n          p,\n          q,\n          matches,\n          match; // loop through all regexes maps\n\n      while (i < arrays.length && !matches) {\n        var regex = arrays[i],\n            // even sequence (0,2,4,..)\n        props = arrays[i + 1]; // odd sequence (1,3,5,..)\n\n        j = k = 0; // try matching uastring with regexes\n\n        while (j < regex.length && !matches) {\n          matches = regex[j++].exec(ua);\n\n          if (!!matches) {\n            for (p = 0; p < props.length; p++) {\n              match = matches[++k];\n              q = props[p]; // check if given property is actually array\n\n              if (_typeof(q) === OBJ_TYPE && q.length > 0) {\n                if (q.length == 2) {\n                  if (_typeof(q[1]) == FUNC_TYPE) {\n                    // assign modified match\n                    this[q[0]] = q[1].call(this, match);\n                  } else {\n                    // assign given value, ignore regex match\n                    this[q[0]] = q[1];\n                  }\n                } else if (q.length == 3) {\n                  // check whether function or regex\n                  if (_typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {\n                    // call function (usually string mapper)\n                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;\n                  } else {\n                    // sanitize match using given regex\n                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;\n                  }\n                } else if (q.length == 4) {\n                  this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;\n                }\n              } else {\n                this[q] = match ? match : undefined;\n              }\n            }\n          }\n        }\n\n        i += 2;\n      }\n    },\n    str: function str(_str, map) {\n      for (var i in map) {\n        // check if array\n        if (_typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {\n          for (var j = 0; j < map[i].length; j++) {\n            if (util.has(map[i][j], _str)) {\n              return i === UNKNOWN ? undefined : i;\n            }\n          }\n        } else if (util.has(map[i], _str)) {\n          return i === UNKNOWN ? undefined : i;\n        }\n      }\n\n      return _str;\n    }\n  }; ///////////////\n  // String map\n  //////////////\n\n  var maps = {\n    browser: {\n      oldsafari: {\n        version: {\n          '1.0': '/8',\n          '1.2': '/1',\n          '1.3': '/3',\n          '2.0': '/412',\n          '2.0.2': '/416',\n          '2.0.3': '/417',\n          '2.0.4': '/419',\n          '?': '/'\n        }\n      }\n    },\n    device: {\n      amazon: {\n        model: {\n          'Fire Phone': ['SD', 'KF']\n        }\n      },\n      sprint: {\n        model: {\n          'Evo Shift 4G': '7373KT'\n        },\n        vendor: {\n          'HTC': 'APA',\n          'Sprint': 'Sprint'\n        }\n      }\n    },\n    os: {\n      windows: {\n        version: {\n          'ME': '4.90',\n          'NT 3.11': 'NT3.51',\n          'NT 4.0': 'NT4.0',\n          '2000': 'NT 5.0',\n          'XP': ['NT 5.1', 'NT 5.2'],\n          'Vista': 'NT 6.0',\n          '7': 'NT 6.1',\n          '8': 'NT 6.2',\n          '8.1': 'NT 6.3',\n          '10': ['NT 6.4', 'NT 10.0'],\n          'RT': 'ARM'\n        }\n      }\n    }\n  }; //////////////\n  // Regex map\n  /////////////\n\n  var regexes = {\n    browser: [[// Presto based\n    /(opera\\smini)\\/([\\w\\.-]+)/i, // Opera Mini\n    /(opera\\s[mobiletab]+).+version\\/([\\w\\.-]+)/i, // Opera Mobi/Tablet\n    /(opera).+version\\/([\\w\\.]+)/i, // Opera > 9.80\n    /(opera)[\\/\\s]+([\\w\\.]+)/i // Opera < 9.80\n    ], [NAME, VERSION], [/(opios)[\\/\\s]+([\\w\\.]+)/i // Opera mini on iphone >= 8.0\n    ], [[NAME, 'Opera Mini'], VERSION], [/\\s(opr)\\/([\\w\\.]+)/i // Opera Webkit\n    ], [[NAME, 'Opera'], VERSION], [// Mixed\n    /(kindle)\\/([\\w\\.]+)/i, // Kindle\n    /(lunascape|maxthon|netfront|jasmine|blazer)[\\/\\s]?([\\w\\.]*)/i, // Lunascape/Maxthon/Netfront/Jasmine/Blazer\n    // Trident based\n    /(avant\\s|iemobile|slim)(?:browser)?[\\/\\s]?([\\w\\.]*)/i, // Avant/IEMobile/SlimBrowser\n    /(bidubrowser|baidubrowser)[\\/\\s]?([\\w\\.]+)/i, // Baidu Browser\n    /(?:ms|\\()(ie)\\s([\\w\\.]+)/i, // Internet Explorer\n    // Webkit/KHTML based\n    /(rekonq)\\/([\\w\\.]*)/i, // Rekonq\n    /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\\/([\\w\\.-]+)/i // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon\n    ], [NAME, VERSION], [/(konqueror)\\/([\\w\\.]+)/i // Konqueror\n    ], [[NAME, 'Konqueror'], VERSION], [/(trident).+rv[:\\s]([\\w\\.]+).+like\\sgecko/i // IE11\n    ], [[NAME, 'IE'], VERSION], [/(edge|edgios|edga|edg)\\/((\\d+)?[\\w\\.]+)/i // Microsoft Edge\n    ], [[NAME, 'Edge'], VERSION], [/(yabrowser)\\/([\\w\\.]+)/i // Yandex\n    ], [[NAME, 'Yandex'], VERSION], [/(Avast)\\/([\\w\\.]+)/i // Avast Secure Browser\n    ], [[NAME, 'Avast Secure Browser'], VERSION], [/(AVG)\\/([\\w\\.]+)/i // AVG Secure Browser\n    ], [[NAME, 'AVG Secure Browser'], VERSION], [/(puffin)\\/([\\w\\.]+)/i // Puffin\n    ], [[NAME, 'Puffin'], VERSION], [/(focus)\\/([\\w\\.]+)/i // Firefox Focus\n    ], [[NAME, 'Firefox Focus'], VERSION], [/(opt)\\/([\\w\\.]+)/i // Opera Touch\n    ], [[NAME, 'Opera Touch'], VERSION], [/((?:[\\s\\/])uc?\\s?browser|(?:juc.+)ucweb)[\\/\\s]?([\\w\\.]+)/i // UCBrowser\n    ], [[NAME, 'UCBrowser'], VERSION], [/(comodo_dragon)\\/([\\w\\.]+)/i // Comodo Dragon\n    ], [[NAME, /_/g, ' '], VERSION], [/(windowswechat qbcore)\\/([\\w\\.]+)/i // WeChat Desktop for Windows Built-in Browser\n    ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [/(micromessenger)\\/([\\w\\.]+)/i // WeChat\n    ], [[NAME, 'WeChat'], VERSION], [/(brave)\\/([\\w\\.]+)/i // Brave browser\n    ], [[NAME, 'Brave'], VERSION], [/(qqbrowserlite)\\/([\\w\\.]+)/i // QQBrowserLite\n    ], [NAME, VERSION], [/(QQ)\\/([\\d\\.]+)/i // QQ, aka ShouQ\n    ], [NAME, VERSION], [/m?(qqbrowser)[\\/\\s]?([\\w\\.]+)/i // QQBrowser\n    ], [NAME, VERSION], [/(baiduboxapp)[\\/\\s]?([\\w\\.]+)/i // Baidu App\n    ], [NAME, VERSION], [/(2345Explorer)[\\/\\s]?([\\w\\.]+)/i // 2345 Browser\n    ], [NAME, VERSION], [/(MetaSr)[\\/\\s]?([\\w\\.]+)/i // SouGouBrowser\n    ], [NAME], [/(LBBROWSER)/i // LieBao Browser\n    ], [NAME], [/xiaomi\\/miuibrowser\\/([\\w\\.]+)/i // MIUI Browser\n    ], [VERSION, [NAME, 'MIUI Browser']], [/;fbav\\/([\\w\\.]+);/i // Facebook App for iOS & Android\n    ], [VERSION, [NAME, 'Facebook']], [/safari\\s(line)\\/([\\w\\.]+)/i, // Line App for iOS\n    /android.+(line)\\/([\\w\\.]+)\\/iab/i // Line App for Android\n    ], [NAME, VERSION], [/headlesschrome(?:\\/([\\w\\.]+)|\\s)/i // Chrome Headless\n    ], [VERSION, [NAME, 'Chrome Headless']], [/\\swv\\).+(chrome)\\/([\\w\\.]+)/i // Chrome WebView\n    ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/((?:oculus|samsung)browser)\\/([\\w\\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [// Oculus / Samsung Browser\n    /android.+version\\/([\\w\\.]+)\\s+(?:mobile\\s?safari|safari)*/i // Android Browser\n    ], [VERSION, [NAME, 'Android Browser']], [/(sailfishbrowser)\\/([\\w\\.]+)/i // Sailfish Browser\n    ], [[NAME, 'Sailfish Browser'], VERSION], [/(chrome|omniweb|arora|[tizenoka]{5}\\s?browser)\\/v?([\\w\\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia\n    ], [NAME, VERSION], [/(dolfin)\\/([\\w\\.]+)/i // Dolphin\n    ], [[NAME, 'Dolphin'], VERSION], [/(qihu|qhbrowser|qihoobrowser|360browser)/i // 360\n    ], [[NAME, '360 Browser']], [/((?:android.+)crmo|crios)\\/([\\w\\.]+)/i // Chrome for Android/iOS\n    ], [[NAME, 'Chrome'], VERSION], [/(coast)\\/([\\w\\.]+)/i // Opera Coast\n    ], [[NAME, 'Opera Coast'], VERSION], [/fxios\\/([\\w\\.-]+)/i // Firefox for iOS\n    ], [VERSION, [NAME, 'Firefox']], [/version\\/([\\w\\.]+).+?mobile\\/\\w+\\s(safari)/i // Mobile Safari\n    ], [VERSION, [NAME, 'Mobile Safari']], [/version\\/([\\w\\.]+).+?(mobile\\s?safari|safari)/i // Safari & Safari Mobile\n    ], [VERSION, NAME], [/webkit.+?(gsa)\\/([\\w\\.]+).+?(mobile\\s?safari|safari)(\\/[\\w\\.]+)/i // Google Search Appliance on iOS\n    ], [[NAME, 'GSA'], VERSION], [/webkit.+?(mobile\\s?safari|safari)(\\/[\\w\\.]+)/i // Safari < 3.0\n    ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(webkit|khtml)\\/([\\w\\.]+)/i], [NAME, VERSION], [// Gecko based\n    /(navigator|netscape)\\/([\\w\\.-]+)/i // Netscape\n    ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, // Swiftfox\n    /(icedragon|iceweasel|camino|chimera|fennec|maemo\\sbrowser|minimo|conkeror)[\\/\\s]?([\\w\\.\\+]+)/i, // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror\n    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([\\w\\.-]+)$/i, // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix\n    /(mozilla)\\/([\\w\\.]+).+rv\\:.+gecko\\/\\d+/i, // Mozilla\n    // Other\n    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\\/\\s]?([\\w\\.]+)/i, // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir\n    /(links)\\s\\(([\\w\\.]+)/i, // Links\n    /(gobrowser)\\/?([\\w\\.]*)/i, // GoBrowser\n    /(ice\\s?browser)\\/v?([\\w\\._]+)/i, // ICE Browser\n    /(mosaic)[\\/\\s]([\\w\\.]+)/i // Mosaic\n    ], [NAME, VERSION]],\n    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\\)]/i // AMD64\n    ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)\n    ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\\)]/i // IA32\n    ], [[ARCHITECTURE, 'ia32']], [// PocketPC mistakenly identified as PowerPC\n    /windows\\s(ce|mobile);\\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\\smac|;|\\))/i // PowerPC\n    ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\\w)[;\\)]/i // SPARC\n    ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\\))|arm(?:64|(?=v\\d+[;l]))|(?=atmel\\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC\n    ], [[ARCHITECTURE, util.lowerize]]],\n    device: [[/\\((ipad|playbook);[\\w\\s\\),;-]+(rim|apple)/i // iPad/PlayBook\n    ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\\/[\\w\\.]+ \\((ipad)/ // iPad\n    ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\\s{0,1}tv)/i // Apple TV\n    ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple'], [TYPE, SMARTTV]], [/(archos)\\s(gamepad2?)/i, // Archos\n    /(hp).+(touchpad)/i, // HP TouchPad\n    /(hp).+(tablet)/i, // HP Tablet\n    /(kindle)\\/([\\w\\.]+)/i, // Kindle\n    /\\s(nook)[\\w\\s]+build\\/(\\w+)/i, // Nook\n    /(dell)\\s(strea[kpr\\s\\d]*[\\dko])/i // Dell Streak\n    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\\sbuild\\/.+silk\\//i // Kindle Fire HD\n    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\\sbuild\\/.+silk\\//i // Fire Phone\n    ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/android.+aft([bms])\\sbuild/i // Fire TV\n    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [/\\((ip[honed|\\s\\w*]+);.+(apple)/i // iPod/iPhone\n    ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\\((ip[honed|\\s\\w*]+);/i // iPod/iPhone\n    ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\\s-]?(\\w+)/i, // BlackBerry\n    /(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\\s_-]?([\\w-]*)/i, // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron\n    /(hp)\\s([\\w\\s]+\\w)/i, // HP iPAQ\n    /(asus)-?(\\w+)/i // Asus\n    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\\(bb10;\\s(\\w+)/i // BlackBerry 10\n    ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [// Asus Tablets\n    /android.+(transfo[prime\\s]{4,10}\\s\\w+|eeepc|slider\\s\\w+|nexus 7|padfone|p00c)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\\s(tablet\\s[ps])\\sbuild\\//i, // Sony\n    /(sony)?(?:sgp.+)\\sbuild\\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/android.+\\s([c-g]\\d{4}|so[-l]\\w+)(?=\\sbuild\\/|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [/\\s(ouya)\\s/i, // Ouya\n    /(nintendo)\\s([wids3u]+)/i // Nintendo\n    ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\\s(shield)\\sbuild/i // Nvidia\n    ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\\s[34portablevi]+)/i // Playstation\n    ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\\s(\\w+))/i // Sprint Phones\n    ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(htc)[;_\\s-]+([\\w\\s]+(?=\\)|\\sbuild)|\\w+)/i, // HTC\n    /(zte)-(\\w*)/i, // ZTE\n    /(alcatel|geeksphone|nexian|panasonic|(?=;\\s)sony)[_\\s-]?([\\w-]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony\n    ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\\s9)/i // HTC Nexus 9\n    ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/d\\/huawei([\\w\\s-]+)[;\\)]/i, /(nexus\\s6p|vog-l29|ane-lx1|eml-l29|ele-l29)/i // Huawei\n    ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/android.+(bah2?-a?[lw]\\d{2})/i // Huawei MediaPad\n    ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [/(microsoft);\\s(lumia[\\s\\w]+)/i // Microsoft Lumia\n    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\\s\\(;](xbox(?:\\sone)?)[\\s\\);]/i // Microsoft Xbox\n    ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\\.[onetw]{3})/i // Microsoft Kin\n    ], [[MODEL, /\\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [// Motorola\n    /\\s(milestone|droid(?:[2-4x]|\\s(?:bionic|x2|pro|razr))?:?(\\s4g)?)[\\w\\s]+build\\//i, /mot[\\s-]?(\\w*)/i, /(XT\\d{3,4}) build\\//i, /(nexus\\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\\s(mz60\\d|xoom[\\s2]{0,2})\\sbuild\\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\\/\\d+\\.\\d+\\.\\d+\\s+\\([\\w\\s]*;\\s*(\\w[^;]*);([^;]*)/i // HbbTV devices\n    ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\\(dtv[\\);].+(aquos)/i // Sharp\n    ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\\d|shw-m380s|gt-p\\d{4}|gt-n\\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [// Samsung\n    /smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\\w+|gt-\\w+|galaxy\\snexus|sm-\\w[\\w\\d]+))/i, /(sam[sung]*)[\\s-]*(\\w+-?[\\w-]*)/i, /sec-((sgh\\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\\w*)/i // Siemens\n    ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\\s\\d+)/i, // Nokia\n    /(nokia)[\\s_-]?([\\w-]*)/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android[x\\d\\.\\s;]+\\s([ab][1-7]\\-?[0178a]\\d\\d?)/i // Acer\n    ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android.+([vl]k\\-?\\d{3})\\s+build/i // LG Tablet\n    ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [/android\\s3\\.[\\s\\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet\n    ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\\.tv/i // LG SmartTV\n    ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\\s[45])/i, // LG\n    /lg[e;\\s\\/-]+(\\w*)/i, /android.+lg(\\-?[\\d\\w]+)\\s+build/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/(lenovo)\\s?(s(?:5000|6000)(?:[\\w-]+)|tab(?:[\\s\\w]+))/i // Lenovo tablets\n    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+(ideatab[a-z0-9\\-\\s]+)/i // Lenovo\n    ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/(lenovo)[_\\s-]?([\\w-]+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/linux;.+((jolla));/i // Jolla\n    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\\/[\\d\\.]+\\s/i // Pebble\n    ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\\s(oppo)\\s?([\\w\\s]+)\\sbuild/i // OPPO\n    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i // Google Chromecast\n    ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [/android.+;\\s(glass)\\s\\d/i // Google Glass\n    ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+;\\s(pixel c)[\\s)]/i // Google Pixel C\n    ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [/android.+;\\s(pixel( [23])?( xl)?)[\\s)]/i // Google Pixel\n    ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [/android.+;\\s(\\w+)\\s+build\\/hm\\1/i, // Xiaomi Hongmi 'numeric' models\n    /android.+(hm[\\s\\-_]*note?[\\s_]*(?:\\d\\w)?)\\s+build/i, // Xiaomi Hongmi\n    /android.+(mi[\\s\\-_]*(?:a\\d|one|one[\\s_]plus|note lte)?[\\s_]*(?:\\d?\\w?)[\\s_]*(?:plus)?)\\s+build/i, // Xiaomi Mi\n    /android.+(redmi[\\s\\-_]*(?:note)?(?:[\\s_]?[\\w\\s]+))\\s+build/i // Redmi Phones\n    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+(mi[\\s\\-_]*(?:pad)(?:[\\s_]?[\\w\\s]+))\\s+build/i // Mi Pad tablets\n    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [/android.+;\\s(m[1-5]\\snote)\\sbuild/i // Meizu\n    ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [/(mz)-([\\w-]{2,})/i], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [/android.+a000(1)\\s+build/i, // OnePlus\n    /android.+oneplus\\s(a\\d{4})[\\s)]/i], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/android.+[;\\/]\\s*(RCT[\\d\\w]+)\\s+build/i // RCA Tablets\n    ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [/android.+[;\\/\\s]+(Venue[\\d\\s]{2,7})\\s+build/i // Dell Venue Tablets\n    ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [/android.+[;\\/]\\s*(Q[T|M][\\d\\w]+)\\s+build/i // Verizon Tablet\n    ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [/android.+[;\\/]\\s+(Barnes[&\\s]+Noble\\s+|BN[RT])(V?.*)\\s+build/i // Barnes & Noble Tablet\n    ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [/android.+[;\\/]\\s+(TM\\d{3}.*\\b)\\s+build/i // Barnes & Noble Tablet\n    ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [/android.+;\\s(k88)\\sbuild/i // ZTE K Series Tablet\n    ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [/android.+[;\\/]\\s*(gen\\d{3})\\s+build.*49h/i // Swiss GEN Mobile\n    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [/android.+[;\\/]\\s*(zur\\d{3})\\s+build/i // Swiss ZUR Tablet\n    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [/android.+[;\\/]\\s*((Zeki)?TB.*\\b)\\s+build/i // Zeki Tablets\n    ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [/(android).+[;\\/]\\s+([YR]\\d{2})\\s+build/i, /android.+[;\\/]\\s+(Dragon[\\-\\s]+Touch\\s+|DT)(\\w{5})\\sbuild/i // Dragon Touch Tablet\n    ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [/android.+[;\\/]\\s*(NS-?\\w{0,9})\\sbuild/i // Insignia Tablets\n    ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [/android.+[;\\/]\\s*((NX|Next)-?\\w{0,9})\\s+build/i // NextBook Tablets\n    ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [/android.+[;\\/]\\s*(Xtreme\\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\\s+build/i], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [// Voice Xtreme Phones\n    /android.+[;\\/]\\s*(LVTEL\\-)?(V1[12])\\s+build/i // LvTel Phones\n    ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [/android.+;\\s(PH-1)\\s/i], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [// Essential PH-1\n    /android.+[;\\/]\\s*(V(100MD|700NA|7011|917G).*\\b)\\s+build/i // Envizen Tablets\n    ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [/android.+[;\\/]\\s*(Le[\\s\\-]+Pan)[\\s\\-]+(\\w{1,9})\\s+build/i // Le Pan Tablets\n    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\\/]\\s*(Trio[\\s\\-]*.*)\\s+build/i // MachSpeed Tablets\n    ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [/android.+[;\\/]\\s*(Trinity)[\\-\\s]*(T\\d{3})\\s+build/i // Trinity Tablets\n    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\\/]\\s*TU_(1491)\\s+build/i // Rotor Tablets\n    ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [/android.+(KS(.+))\\s+build/i // Amazon Kindle Tablets\n    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/android.+(Gigaset)[\\s\\-]+(Q\\w{1,9})\\s+build/i // Gigaset Tablets\n    ], [VENDOR, MODEL, [TYPE, TABLET]], [/\\s(tablet|tab)[;\\/]/i, // Unidentifiable Tablet\n    /\\s(mobile)(?:[;\\/]|\\ssafari)/i // Unidentifiable Mobile\n    ], [[TYPE, util.lowerize], VENDOR, MODEL], [/[\\s\\/\\(](smart-?tv)[;\\)]/i // SmartTV\n    ], [[TYPE, SMARTTV]], [/(android[\\w\\.\\s\\-]{0,9});.+build/i // Generic Android Device\n    ], [MODEL, [VENDOR, 'Generic']]],\n    engine: [[/windows.+\\sedge\\/([\\w\\.]+)/i // EdgeHTML\n    ], [VERSION, [NAME, 'EdgeHTML']], [/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i // Blink\n    ], [VERSION, [NAME, 'Blink']], [/(presto)\\/([\\w\\.]+)/i, // Presto\n    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna\n    /(khtml|tasman|links)[\\/\\s]\\(?([\\w\\.]+)/i, // KHTML/Tasman/Links\n    /(icab)[\\/\\s]([23]\\.[\\d\\.]+)/i // iCab\n    ], [NAME, VERSION], [/rv\\:([\\w\\.]{1,9}).+(gecko)/i // Gecko\n    ], [VERSION, NAME]],\n    os: [[// Windows based\n    /microsoft\\s(windows)\\s(vista|xp)/i // Windows (iTunes)\n    ], [NAME, VERSION], [/(windows)\\snt\\s6\\.2;\\s(arm)/i, // Windows RT\n    /(windows\\sphone(?:\\sos)*)[\\s\\/]?([\\d\\.\\s\\w]*)/i, // Windows Phone\n    /(windows\\smobile|windows)[\\s\\/]?([ntce\\d\\.\\s]+\\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\\s9x\\s)([nt\\d\\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [// Mobile/Embedded OS\n    /\\((bb)(10);/i // BlackBerry 10\n    ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\\w*\\/?([\\w\\.]*)/i, // Blackberry\n    /(tizen|kaios)[\\/\\s]([\\w\\.]+)/i, // Tizen/KaiOS\n    /(android|webos|palm\\sos|qnx|bada|rim\\stablet\\sos|meego|sailfish|contiki)[\\/\\s-]?([\\w\\.]*)/i // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS\n    ], [NAME, VERSION], [/(symbian\\s?os|symbos|s60(?=;))[\\/\\s-]?([\\w\\.]*)/i // Symbian\n    ], [[NAME, 'Symbian'], VERSION], [/\\((series40);/i // Series 40\n    ], [NAME], [/mozilla.+\\(mobile;.+gecko.+firefox/i // Firefox OS\n    ], [[NAME, 'Firefox OS'], VERSION], [// Console\n    /(nintendo|playstation)\\s([wids34portablevu]+)/i, // Nintendo/Playstation\n    // GNU/Linux based\n    /(mint)[\\/\\s\\(]?(\\w*)/i, // Mint\n    /(mageia|vectorlinux)[;\\s]/i, // Mageia/VectorLinux\n    /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\\/\\s-]?(?!chrom)([\\w\\.-]*)/i, // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware\n    // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus\n    /(hurd|linux)\\s?([\\w\\.]*)/i, // Hurd/Linux\n    /(gnu)\\s?([\\w\\.]*)/i // GNU\n    ], [NAME, VERSION], [/(cros)\\s[\\w]+\\s([\\w\\.]+\\w)/i // Chromium OS\n    ], [[NAME, 'Chromium OS'], VERSION], [// Solaris\n    /(sunos)\\s?([\\w\\.\\d]*)/i // Solaris\n    ], [[NAME, 'Solaris'], VERSION], [// BSD based\n    /\\s([frentopc-]{0,4}bsd|dragonfly)\\s?([\\w\\.]*)/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly\n    ], [NAME, VERSION], [/(haiku)\\s(\\w+)/i // Haiku\n    ], [NAME, VERSION], [/cfnetwork\\/.+darwin/i, /ip[honead]{2,4}(?:.*os\\s([\\w]+)\\slike\\smac|;\\sopera)/i // iOS\n    ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [/(mac\\sos\\sx)\\s?([\\w\\s\\.]*)/i, /(macintosh|mac(?=_powerpc)\\s)/i // Mac OS\n    ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [// Other\n    /((?:open)?solaris)[\\/\\s-]?([\\w\\.]*)/i, // Solaris\n    /(aix)\\s((\\d)(?=\\.|\\)|\\s)[\\w\\.])*/i, // AIX\n    /(plan\\s9|minix|beos|os\\/2|amigaos|morphos|risc\\sos|openvms|fuchsia)/i, // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia\n    /(unix)\\s?([\\w\\.]*)/i // UNIX\n    ], [NAME, VERSION]]\n  }; /////////////////\n  // Constructor\n  ////////////////\n\n  var UAParser = function UAParser(uastring, extensions) {\n    if (_typeof(uastring) === 'object') {\n      extensions = uastring;\n      uastring = undefined;\n    }\n\n    if (!(this instanceof UAParser)) {\n      return new UAParser(uastring, extensions).getResult();\n    }\n\n    var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);\n    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;\n\n    this.getBrowser = function () {\n      var browser = {\n        name: undefined,\n        version: undefined\n      };\n      mapper.rgx.call(browser, ua, rgxmap.browser);\n      browser.major = util.major(browser.version); // deprecated\n\n      return browser;\n    };\n\n    this.getCPU = function () {\n      var cpu = {\n        architecture: undefined\n      };\n      mapper.rgx.call(cpu, ua, rgxmap.cpu);\n      return cpu;\n    };\n\n    this.getDevice = function () {\n      var device = {\n        vendor: undefined,\n        model: undefined,\n        type: undefined\n      };\n      mapper.rgx.call(device, ua, rgxmap.device);\n      return device;\n    };\n\n    this.getEngine = function () {\n      var engine = {\n        name: undefined,\n        version: undefined\n      };\n      mapper.rgx.call(engine, ua, rgxmap.engine);\n      return engine;\n    };\n\n    this.getOS = function () {\n      var os = {\n        name: undefined,\n        version: undefined\n      };\n      mapper.rgx.call(os, ua, rgxmap.os);\n      return os;\n    };\n\n    this.getResult = function () {\n      return {\n        ua: this.getUA(),\n        browser: this.getBrowser(),\n        engine: this.getEngine(),\n        os: this.getOS(),\n        device: this.getDevice(),\n        cpu: this.getCPU()\n      };\n    };\n\n    this.getUA = function () {\n      return ua;\n    };\n\n    this.setUA = function (uastring) {\n      ua = uastring;\n      return this;\n    };\n\n    return this;\n  };\n\n  UAParser.VERSION = LIBVERSION;\n  UAParser.BROWSER = {\n    NAME: NAME,\n    MAJOR: MAJOR,\n    // deprecated\n    VERSION: VERSION\n  };\n  UAParser.CPU = {\n    ARCHITECTURE: ARCHITECTURE\n  };\n  UAParser.DEVICE = {\n    MODEL: MODEL,\n    VENDOR: VENDOR,\n    TYPE: TYPE,\n    CONSOLE: CONSOLE,\n    MOBILE: MOBILE,\n    SMARTTV: SMARTTV,\n    TABLET: TABLET,\n    WEARABLE: WEARABLE,\n    EMBEDDED: EMBEDDED\n  };\n  UAParser.ENGINE = {\n    NAME: NAME,\n    VERSION: VERSION\n  };\n  UAParser.OS = {\n    NAME: NAME,\n    VERSION: VERSION\n  }; ///////////\n  // Export\n  //////////\n  // check js environment\n\n  if (( false ? 0 : _typeof(exports)) !== UNDEF_TYPE) {\n    // nodejs env\n    if (( false ? 0 : _typeof(module)) !== UNDEF_TYPE && module.exports) {\n      exports = module.exports = UAParser;\n    }\n\n    exports.UAParser = UAParser;\n  } else {\n    // requirejs env (optional)\n    if (true) {\n      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n        return UAParser;\n      }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n  } // jQuery/Zepto specific (optional)\n  // Note:\n  //   In AMD env the global scope should be kept clean, but jQuery is an exception.\n  //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,\n  //   and we should catch that.\n\n\n  var $ = window && (window.jQuery || window.Zepto);\n\n  if ($ && !$.ua) {\n    var parser = new UAParser();\n    $.ua = parser.getResult();\n\n    $.ua.get = function () {\n      return parser.getUA();\n    };\n\n    $.ua.set = function (uastring) {\n      parser.setUA(uastring);\n      var result = parser.getResult();\n\n      for (var prop in result) {\n        $.ua[prop] = result[prop];\n      }\n    };\n  }\n})((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === 'object' ? window : this);\n\n//# sourceURL=webpack://dedLog/./node_modules/ua-parser-js/src/ua-parser.js?");

/***/ }),

/***/ "./src/global/global.js":
/*!******************************!*\
  !*** ./src/global/global.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 53:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar parser = __webpack_require__(/*! ua-parser-js */ \"./node_modules/ua-parser-js/src/ua-parser.js\");\n\nvar get_global_info = function get_global_info(w, data) {\n  var uih = _objectSpread(_objectSpread({}, w.uih), data); // 为什么这样做\n\n\n  var _parser = new parser(); // 这里是浏览器相关的信息\n\n\n  var client_info = _parser.getResult(); // 预置页面信息\n\n\n  var page_info = {\n    lib: uih.lib,\n    lib_version: uih.lib_version,\n    app_version: uih.app_version,\n    is_first_time: uih.is_first_time,\n    screen_height: document.body.clientHeight || document.documentElement.clientHeight,\n    screen_width: document.body.clientWidth || document.documentElement.clientWidth,\n    title: document.title,\n    url: location.href,\n    time: new Date().getTime(),\n    manufacturer: 'U+',\n    referrer: document.referrer\n  }; // 获取用户相关数据\n\n  var user_info = {\n    distinct_id: uih.distinct_id || localStorage.visitorId || null,\n    gender: uih.gender,\n    year_of_birth: uih.year_of_birth,\n    birthday: uih.birthday,\n    country: uih.country,\n    province: uih.province,\n    city: uih.city,\n    email: uih.email,\n    phone_number: uih.phone_number,\n    register_time: uih.register_time,\n    first_visit_source: uih.first_visit_source\n  };\n  var globalInfo = {\n    user_info: Object.assign({}, user_info, page_info),\n    client_info: client_info\n  };\n  return globalInfo;\n};\n\nmodule.exports = {\n  get: get_global_info\n};\n\n//# sourceURL=webpack://dedLog/./src/global/global.js?");

/***/ }),

/***/ "./src/global/performance.js":
/*!***********************************!*\
  !*** ./src/global/performance.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 95:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var RUMSpeedIndex = __webpack_require__(/*! ../utils/speenIndex */ \"./src/utils/speenIndex.js\");\n\nvar performanceFn = function performanceFn() {\n  var _window$performance$t = window.performance.timing,\n      fetchStart = _window$performance$t.fetchStart,\n      domainLookupStart = _window$performance$t.domainLookupStart,\n      domainLookupEnd = _window$performance$t.domainLookupEnd,\n      connectStart = _window$performance$t.connectStart,\n      connectEnd = _window$performance$t.connectEnd,\n      domContentLoadedEventStart = _window$performance$t.domContentLoadedEventStart,\n      domComplete = _window$performance$t.domComplete,\n      responseStart = _window$performance$t.responseStart,\n      domLoading = _window$performance$t.domLoading,\n      loadEventEnd = _window$performance$t.loadEventEnd,\n      domContentLoadedEventEnd = _window$performance$t.domContentLoadedEventEnd,\n      domInteractive = _window$performance$t.domInteractive;\n  var navigationstart = window.performance.timing.navigationstart;\n  navigationstart = navigationstart || fetchStart;\n\n  var _RUMSpeedIndex = RUMSpeedIndex(),\n      firstPaint = _RUMSpeedIndex.firstPaint,\n      SpeedIndex = _RUMSpeedIndex.SpeedIndex;\n\n  var performanceObj = {\n    dns: domainLookupEnd - domainLookupStart,\n    ttfb: domainLookupEnd - domainLookupStart,\n    white_screen_time: domLoading - fetchStart,\n    can_operation_time: domContentLoadedEventEnd - fetchStart,\n    page_ready_time: loadEventEnd - navigationstart,\n    create_dom_time: domInteractive - domLoading,\n    first_paint: firstPaint,\n    dom_num: document.getElementsByTagName('*').length,\n    tcpConnect: connectEnd - connectStart,\n    speed_index: SpeedIndex,\n    dom_content_loaded: domContentLoadedEventStart - domLoading,\n    dom_complete: domComplete - domLoading\n  };\n  var performanceMapping = [{\n    name: 'DNS',\n    result: domainLookupEnd - domainLookupStart,\n    des: 'DNS所需时长。'\n  }, {\n    name: 'TTFB',\n    result: responseStart - navigationstart,\n    des: 'Time To First Byte，第一个字节到达的所需时长。'\n  }, {\n    name: '白屏时间',\n    result: domLoading - fetchStart,\n    des: '用户看到有内容展示出来所需时长。'\n  }, {\n    name: '用户可操作时间',\n    result: domContentLoadedEventEnd - fetchStart,\n    des: 'DOM ready被触发的所需时长，用户在这个时刻后方可对网页进行交互。'\n  }, {\n    name: '网页加载完成时间',\n    result: loadEventEnd - navigationstart,\n    des: '整个页面加载完成的时间'\n  }, {\n    name: 'dom树构建',\n    result: domInteractive - domLoading,\n    des: 'dom树构建'\n  }, {\n    name: '首次内容渲染时间',\n    result: firstPaint,\n    des: '整个页面首次内容渲染firstPaint'\n  }, // {\n  //   name: '首次有效渲染时间',\n  //   result: '限于chrom中的接口获取',\n  //   des: '首次有效渲染firstContentfulPaint',\n  // },\n  {\n    name: 'dom总数',\n    result: document.getElementsByTagName('*').length,\n    des: '整个页面domCount'\n  }, {\n    name: 'tcpConnect 连接时间',\n    result: connectEnd - connectStart,\n    des: 'tcp连接时间'\n  }, {\n    name: 'speedindex',\n    result: SpeedIndex,\n    des: '速度指数'\n  }, {\n    name: 'DOMContentLoaded',\n    result: domContentLoadedEventStart - domLoading,\n    des: 'DOM 和 CSSOM 均准备就绪的时间点'\n  }, {\n    name: 'domComplete',\n    result: domComplete - domLoading,\n    des: '表示网页及其所有子资源都准备就绪的时间点'\n  }];\n  return performanceObj;\n};\n\nmodule.exports = performanceFn;\n\n//# sourceURL=webpack://dedLog/./src/global/performance.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 23:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\r\n  这里来撸一下跟浏览器有关系的各种参数\r\n  文档的地址： https://github.com/faisalman/ua-parser-js\r\n*/\n__webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n\nvar _dedLog = __webpack_require__(/*! ./utils/dedLog */ \"./src/utils/dedLog.js\");\n\nvar dedLog = {\n  init: function init() {\n    _dedLog.init.apply(_dedLog, arguments);\n  },\n  send: function send() {\n    _dedLog.send.apply(_dedLog, arguments);\n  },\n  viewSend: function viewSend() {\n    _dedLog.viewSend.apply(_dedLog, arguments);\n  },\n  sendAPM: function sendAPM() {\n    _dedLog.sendAPM.apply(_dedLog, arguments);\n  }\n};\nmodule.exports = dedLog;\n\n//# sourceURL=webpack://dedLog/./src/index.js?");

/***/ }),

/***/ "./src/utils/addEvent.js":
/*!*******************************!*\
  !*** ./src/utils/addEvent.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 21:0-14 */
/***/ ((module) => {

eval("var addEvent = function addEvent(obj, type, fn) {\n  if (obj.addEventListener) {\n    obj.addEventListener(type, fn, false);\n  } else if (obj.attachEvent) {\n    obj['e' + type + fn] = fn;\n    obj.attachEvent('on' + type, function () {\n      obj['e' + type + fn]();\n    });\n  }\n};\n\nvar removeEvent = function removeEvent(obj, type, fn) {\n  if (obj.removeEventListener) {\n    obj.removeEventListener(type, fn, false);\n  } else if (obj.detachEvent) {\n    obj.detachEvent('on' + type, obj['e' + type + fn]);\n    obj['e' + type + fn] = null;\n  }\n};\n\nmodule.exports = {\n  addEvent: addEvent,\n  removeEvent: removeEvent\n};\n\n//# sourceURL=webpack://dedLog/./src/utils/addEvent.js?");

/***/ }),

/***/ "./src/utils/dedLog.js":
/*!*****************************!*\
  !*** ./src/utils/dedLog.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 186:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar globalInfo = __webpack_require__(/*! ../global/global */ \"./src/global/global.js\");\n\nvar performance = __webpack_require__(/*! ../global/performance */ \"./src/global/performance.js\");\n\nvar FingerprintJS = __webpack_require__(/*! ./fp */ \"./src/utils/fp.js\");\n\nvar eventFn = __webpack_require__(/*! ./addEvent */ \"./src/utils/addEvent.js\");\n\nvar sendLog = __webpack_require__(/*! ./sendLog */ \"./src/utils/sendLog.js\");\n\nvar _dedLog = {\n  init: function init(options, callback) {\n    var params = options || {};\n    this.url = params.url; // log server path\n\n    this.root = params.root || document.body;\n\n    if (localStorage.uuid) {\n      this.normalLogic();\n    } else {\n      this.initFingerprintJS();\n    }\n\n    if (callback) {\n      callback();\n    }\n  },\n  initFingerprintJS: function initFingerprintJS() {\n    var _this = this;\n\n    FingerprintJS.load().then(function (fp) {\n      // The FingerprintJS agent is ready.\n      // Get a visitor identifier when you'd like to.\n      fp.get().then(function (result) {\n        // This is the visitor identifier:\n        var visitorId = result.visitorId;\n        localStorage.uuid = visitorId;\n\n        _this.resetTimer();\n\n        _this.normalLogic();\n      });\n    });\n  },\n  normalLogic: function normalLogic() {\n    window.uih = window.uih || {};\n    window.uih.distinct_id = localStorage.uuid;\n    this.addEvent();\n  },\n  send: function send(options, target, event_type) {\n    var params = options;\n    var globalDatas = globalInfo.get(window);\n    params.client_info = globalDatas.client_info;\n    params.user_info = globalDatas.user_info;\n    var sendDatas = params;\n\n    if (target) {\n      sendDatas = _objectSpread(_objectSpread({}, this.getTargetDatas(target, event_type || 'click')), params);\n    }\n\n    sendLog(this.url, sendDatas);\n  },\n  viewSend: function viewSend() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var globalDatas = globalInfo.get(window);\n    var params = {\n      events: _objectSpread({\n        type: 'view'\n      }, options.events),\n      client_info: globalDatas.client_info,\n      user_info: _objectSpread(_objectSpread(_objectSpread({}, globalDatas.user_info), options.user_info), {}, {\n        current_page_live_time: new Date().getTime() - (sessionStorage.current_page_time || new Date().getTime())\n      })\n    };\n    sendLog(this.url, params);\n    this.resetTimer();\n  },\n  getPerformance: function getPerformance(callback) {\n    var that = this;\n    that.performanceInfo = performance();\n    var page_ready_time = that.performanceInfo.page_ready_time;\n\n    if (this.prev_page_ready_time === page_ready_time && page_ready_time > 0) {\n      callback();\n    } else {\n      setTimeout(function () {\n        that.prev_page_ready_time = page_ready_time;\n        that.getPerformance(callback);\n      }, 1000);\n    }\n  },\n  sendAPM: function sendAPM() {\n    var that = this;\n    this.prev_page_ready_time = this.prev_page_ready_time || 0;\n    this.getPerformance(function () {\n      var globalDatas = globalInfo.get(window);\n\n      var params = _objectSpread({\n        events: {\n          type: 'APM'\n        },\n        performance: that.performanceInfo\n      }, globalDatas);\n\n      sendLog(this.url, params);\n    });\n  },\n  resetTimer: function resetTimer() {\n    sessionStorage.current_page_time = new Date().getTime();\n  },\n  getTargetDatas: function getTargetDatas(target, event_type) {\n    var params = {};\n    var className = target.getAttribute('class');\n    params.events = {\n      type: event_type,\n      block: target.getAttribute('block'),\n      rset: target.getAttribute('rset'),\n      element_id: target.getAttribute('id'),\n      element_content: target.innerText,\n      element_class_name: className,\n      element_type: target.nodeName.toLocaleLowerCase(),\n      element_selector: className ? target.getAttribute('class').split(' ')[0] : '',\n      element_target_url: target.getAttribute('href')\n    };\n    var excess = target.getAttribute('excess');\n\n    if (excess) {\n      if (/^{.*}$/g.test(excess)) {\n        var curData = JSON.parse(excess);\n\n        for (var key in curData) {\n          params.events[key] = curData[key];\n        }\n      } else {\n        params.events.other_string = excess;\n      }\n    }\n\n    var globalDatas = globalInfo.get(window);\n    params.client_info = globalDatas.client_info;\n    params.user_info = globalDatas.user_info;\n    return params;\n  },\n  clickSend: function clickSend(e) {\n    if (e.target && e.target.getAttribute('data-log') === 'click') {\n      var params = this.getTargetDatas(e.target, 'click');\n      sendLog(this.url, params);\n    }\n  },\n  hoverSend: function hoverSend(e) {\n    if (e.target && e.target.getAttribute('data-log') === 'hover') {\n      var params = this.getTargetDatas(e.target, 'hover');\n      sendLog(this.url, params);\n    }\n  },\n  addEvent: function addEvent() {\n    eventFn.addEvent(this.root, 'click', this.clickSend.bind(this));\n    eventFn.addEvent(this.root, 'mouseover', this.hoverSend.bind(this));\n    eventFn.addEvent(window, 'error', this.errorMsg.bind(this));\n  },\n  errorMsg: function errorMsg(e) {\n    var error_info = {\n      msg: e.error.message,\n      stack: e.error.stack,\n      lineno: e.lineno,\n      colno: e.colno,\n      error_time: new Date().getTime()\n    };\n    var globalDatas = globalInfo.get(window);\n    var params = {\n      events: _objectSpread({\n        type: 'error'\n      }, error_info),\n      client_info: globalDatas.client_info,\n      user_info: _objectSpread({}, globalDatas.user_info)\n    };\n    sendLog(this.url, params);\n  }\n};\nmodule.exports = _dedLog;\n\n//# sourceURL=webpack://dedLog/./src/utils/dedLog.js?");

/***/ }),

/***/ "./src/utils/fp.js":
/*!*************************!*\
  !*** ./src/utils/fp.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1552:37-51 */
/*! CommonJS bailout: module.exports is used directly at 1553:2-16 */
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n * FingerprintJS v3.0.3 - Copyright (c) FingerprintJS, Inc, 2020 (https://fingerprintjs.com)\r\n * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.\r\n *\r\n * This software contains code from open-source projects:\r\n * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)\r\n */\nvar FingerprintJS = function (exports) {\n  'use strict';\n  /*\r\n   * Taken from https://github.com/karanlyons/murmurHash3.js/blob/a33d0723127e2e5415056c455f8aed2451ace208/murmurHash3.js\r\n   */\n  //\n  // Given two 64bit ints (as an array of two 32bit ints) returns the two\n  // added together as a 64bit int (as an array of two 32bit ints).\n  //\n\n  function x64Add(m, n) {\n    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];\n    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];\n    var o = [0, 0, 0, 0];\n    o[3] += m[3] + n[3];\n    o[2] += o[3] >>> 16;\n    o[3] &= 0xffff;\n    o[2] += m[2] + n[2];\n    o[1] += o[2] >>> 16;\n    o[2] &= 0xffff;\n    o[1] += m[1] + n[1];\n    o[0] += o[1] >>> 16;\n    o[1] &= 0xffff;\n    o[0] += m[0] + n[0];\n    o[0] &= 0xffff;\n    return [o[0] << 16 | o[1], o[2] << 16 | o[3]];\n  } //\n  // Given two 64bit ints (as an array of two 32bit ints) returns the two\n  // multiplied together as a 64bit int (as an array of two 32bit ints).\n  //\n\n\n  function x64Multiply(m, n) {\n    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];\n    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];\n    var o = [0, 0, 0, 0];\n    o[3] += m[3] * n[3];\n    o[2] += o[3] >>> 16;\n    o[3] &= 0xffff;\n    o[2] += m[2] * n[3];\n    o[1] += o[2] >>> 16;\n    o[2] &= 0xffff;\n    o[2] += m[3] * n[2];\n    o[1] += o[2] >>> 16;\n    o[2] &= 0xffff;\n    o[1] += m[1] * n[3];\n    o[0] += o[1] >>> 16;\n    o[1] &= 0xffff;\n    o[1] += m[2] * n[2];\n    o[0] += o[1] >>> 16;\n    o[1] &= 0xffff;\n    o[1] += m[3] * n[1];\n    o[0] += o[1] >>> 16;\n    o[1] &= 0xffff;\n    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];\n    o[0] &= 0xffff;\n    return [o[0] << 16 | o[1], o[2] << 16 | o[3]];\n  } //\n  // Given a 64bit int (as an array of two 32bit ints) and an int\n  // representing a number of bit positions, returns the 64bit int (as an\n  // array of two 32bit ints) rotated left by that number of positions.\n  //\n\n\n  function x64Rotl(m, n) {\n    n %= 64;\n\n    if (n === 32) {\n      return [m[1], m[0]];\n    } else if (n < 32) {\n      return [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n];\n    } else {\n      n -= 32;\n      return [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n];\n    }\n  } //\n  // Given a 64bit int (as an array of two 32bit ints) and an int\n  // representing a number of bit positions, returns the 64bit int (as an\n  // array of two 32bit ints) shifted left by that number of positions.\n  //\n\n\n  function x64LeftShift(m, n) {\n    n %= 64;\n\n    if (n === 0) {\n      return m;\n    } else if (n < 32) {\n      return [m[0] << n | m[1] >>> 32 - n, m[1] << n];\n    } else {\n      return [m[1] << n - 32, 0];\n    }\n  } //\n  // Given two 64bit ints (as an array of two 32bit ints) returns the two\n  // xored together as a 64bit int (as an array of two 32bit ints).\n  //\n\n\n  function x64Xor(m, n) {\n    return [m[0] ^ n[0], m[1] ^ n[1]];\n  } //\n  // Given a block, returns murmurHash3's final x64 mix of that block.\n  // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the\n  // only place where we need to right shift 64bit ints.)\n  //\n\n\n  function x64Fmix(h) {\n    h = x64Xor(h, [0, h[0] >>> 1]);\n    h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);\n    h = x64Xor(h, [0, h[0] >>> 1]);\n    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);\n    h = x64Xor(h, [0, h[0] >>> 1]);\n    return h;\n  } //\n  // Given a string and an optional seed as an int, returns a 128 bit\n  // hash using the x64 flavor of MurmurHash3, as an unsigned hex.\n  //\n\n\n  function x64hash128(key, seed) {\n    key = key || '';\n    seed = seed || 0;\n    var remainder = key.length % 16;\n    var bytes = key.length - remainder;\n    var h1 = [0, seed];\n    var h2 = [0, seed];\n    var k1 = [0, 0];\n    var k2 = [0, 0];\n    var c1 = [0x87c37b91, 0x114253d5];\n    var c2 = [0x4cf5ad43, 0x2745937f];\n    var i;\n\n    for (i = 0; i < bytes; i = i + 16) {\n      k1 = [key.charCodeAt(i + 4) & 0xff | (key.charCodeAt(i + 5) & 0xff) << 8 | (key.charCodeAt(i + 6) & 0xff) << 16 | (key.charCodeAt(i + 7) & 0xff) << 24, key.charCodeAt(i) & 0xff | (key.charCodeAt(i + 1) & 0xff) << 8 | (key.charCodeAt(i + 2) & 0xff) << 16 | (key.charCodeAt(i + 3) & 0xff) << 24];\n      k2 = [key.charCodeAt(i + 12) & 0xff | (key.charCodeAt(i + 13) & 0xff) << 8 | (key.charCodeAt(i + 14) & 0xff) << 16 | (key.charCodeAt(i + 15) & 0xff) << 24, key.charCodeAt(i + 8) & 0xff | (key.charCodeAt(i + 9) & 0xff) << 8 | (key.charCodeAt(i + 10) & 0xff) << 16 | (key.charCodeAt(i + 11) & 0xff) << 24];\n      k1 = x64Multiply(k1, c1);\n      k1 = x64Rotl(k1, 31);\n      k1 = x64Multiply(k1, c2);\n      h1 = x64Xor(h1, k1);\n      h1 = x64Rotl(h1, 27);\n      h1 = x64Add(h1, h2);\n      h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);\n      k2 = x64Multiply(k2, c2);\n      k2 = x64Rotl(k2, 33);\n      k2 = x64Multiply(k2, c1);\n      h2 = x64Xor(h2, k2);\n      h2 = x64Rotl(h2, 31);\n      h2 = x64Add(h2, h1);\n      h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);\n    }\n\n    k1 = [0, 0];\n    k2 = [0, 0];\n\n    switch (remainder) {\n      case 15:\n        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));\n      // fallthrough\n\n      case 14:\n        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));\n      // fallthrough\n\n      case 13:\n        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));\n      // fallthrough\n\n      case 12:\n        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));\n      // fallthrough\n\n      case 11:\n        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));\n      // fallthrough\n\n      case 10:\n        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));\n      // fallthrough\n\n      case 9:\n        k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);\n        k2 = x64Multiply(k2, c2);\n        k2 = x64Rotl(k2, 33);\n        k2 = x64Multiply(k2, c1);\n        h2 = x64Xor(h2, k2);\n      // fallthrough\n\n      case 8:\n        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));\n      // fallthrough\n\n      case 7:\n        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));\n      // fallthrough\n\n      case 6:\n        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));\n      // fallthrough\n\n      case 5:\n        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));\n      // fallthrough\n\n      case 4:\n        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));\n      // fallthrough\n\n      case 3:\n        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));\n      // fallthrough\n\n      case 2:\n        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));\n      // fallthrough\n\n      case 1:\n        k1 = x64Xor(k1, [0, key.charCodeAt(i)]);\n        k1 = x64Multiply(k1, c1);\n        k1 = x64Rotl(k1, 31);\n        k1 = x64Multiply(k1, c2);\n        h1 = x64Xor(h1, k1);\n      // fallthrough\n    }\n\n    h1 = x64Xor(h1, [0, key.length]);\n    h2 = x64Xor(h2, [0, key.length]);\n    h1 = x64Add(h1, h2);\n    h2 = x64Add(h2, h1);\n    h1 = x64Fmix(h1);\n    h2 = x64Fmix(h2);\n    h1 = x64Add(h1, h2);\n    h2 = x64Add(h2, h1);\n    return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8);\n  }\n  /*! *****************************************************************************\r\n  Copyright (c) Microsoft Corporation.\r\n    Permission to use, copy, modify, and/or distribute this software for any\r\n  purpose with or without fee is hereby granted.\r\n    THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\n  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\n  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\n  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\n  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\n  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\n  PERFORMANCE OF THIS SOFTWARE.\r\n  ***************************************************************************** */\n\n\n  var _assign = function __assign() {\n    _assign = Object.assign || function __assign(t) {\n      for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n\n        for (var p in s) {\n          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n        }\n      }\n\n      return t;\n    };\n\n    return _assign.apply(this, arguments);\n  };\n\n  function __awaiter(thisArg, _arguments, P, generator) {\n    function adopt(value) {\n      return value instanceof P ? value : new P(function (resolve) {\n        resolve(value);\n      });\n    }\n\n    return new (P || (P = Promise))(function (resolve, reject) {\n      function fulfilled(value) {\n        try {\n          step(generator.next(value));\n        } catch (e) {\n          reject(e);\n        }\n      }\n\n      function rejected(value) {\n        try {\n          step(generator[\"throw\"](value));\n        } catch (e) {\n          reject(e);\n        }\n      }\n\n      function step(result) {\n        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n      }\n\n      step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n  }\n\n  function __generator(thisArg, body) {\n    var _ = {\n      label: 0,\n      sent: function sent() {\n        if (t[0] & 1) throw t[1];\n        return t[1];\n      },\n      trys: [],\n      ops: []\n    },\n        f,\n        y,\n        t,\n        g;\n    return g = {\n      next: verb(0),\n      \"throw\": verb(1),\n      \"return\": verb(2)\n    }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n      return this;\n    }), g;\n\n    function verb(n) {\n      return function (v) {\n        return step([n, v]);\n      };\n    }\n\n    function step(op) {\n      if (f) throw new TypeError(\"Generator is already executing.\");\n\n      while (_) {\n        try {\n          if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n          if (y = 0, t) op = [op[0] & 2, t.value];\n\n          switch (op[0]) {\n            case 0:\n            case 1:\n              t = op;\n              break;\n\n            case 4:\n              _.label++;\n              return {\n                value: op[1],\n                done: false\n              };\n\n            case 5:\n              _.label++;\n              y = op[1];\n              op = [0];\n              continue;\n\n            case 7:\n              op = _.ops.pop();\n\n              _.trys.pop();\n\n              continue;\n\n            default:\n              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n                _ = 0;\n                continue;\n              }\n\n              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n                _.label = op[1];\n                break;\n              }\n\n              if (op[0] === 6 && _.label < t[1]) {\n                _.label = t[1];\n                t = op;\n                break;\n              }\n\n              if (t && _.label < t[2]) {\n                _.label = t[2];\n\n                _.ops.push(op);\n\n                break;\n              }\n\n              if (t[2]) _.ops.pop();\n\n              _.trys.pop();\n\n              continue;\n          }\n\n          op = body.call(thisArg, _);\n        } catch (e) {\n          op = [6, e];\n          y = 0;\n        } finally {\n          f = t = 0;\n        }\n      }\n\n      if (op[0] & 5) throw op[1];\n      return {\n        value: op[0] ? op[1] : void 0,\n        done: true\n      };\n    }\n  }\n\n  var version = \"3.0.3\";\n\n  function requestIdleCallbackIfAvailable(fallbackTimeout) {\n    return new Promise(function (resolve) {\n      if (window.requestIdleCallback) {\n        window.requestIdleCallback(function () {\n          return resolve();\n        });\n      } else {\n        setTimeout(resolve, fallbackTimeout);\n      }\n    });\n  }\n  /*\r\n   * This file contains functions to work with pure data only (no browser features, DOM, side effects, etc).\r\n   */\n\n  /**\r\n   * Does the same as Array.prototype.includes but has better typing\r\n   */\n\n\n  function includes(haystack, needle) {\n    for (var i = 0, l = haystack.length; i < l; ++i) {\n      if (haystack[i] === needle) {\n        return true;\n      }\n    }\n\n    return false;\n  }\n  /**\r\n   * Like `!includes()` but with proper typing\r\n   */\n\n\n  function excludes(haystack, needle) {\n    return !includes(haystack, needle);\n  }\n  /**\r\n   * Be careful, NaN can return\r\n   */\n\n\n  function toInt(value) {\n    if (typeof value === 'number') {\n      return value | 0;\n    }\n\n    return parseInt(value);\n  }\n  /**\r\n   * Be careful, NaN can return\r\n   */\n\n\n  function toFloat(value) {\n    if (typeof value === 'number') {\n      return value;\n    }\n\n    return parseFloat(value);\n  }\n\n  function countTruthy(values) {\n    return values.reduce(function (sum, value) {\n      return sum + (value ? 1 : 0);\n    }, 0);\n  }\n  /*\r\n   * Functions to help with browser features\r\n   */\n\n\n  var w = window;\n  var n = navigator;\n  var d = document;\n  /**\r\n   * Checks whether the browser is based on Trident (the Internet Explorer engine) without using user-agent.\r\n   *\r\n   * Warning for package users:\r\n   * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.\r\n   */\n\n  function isTrident() {\n    // The properties are checked to be in IE 10, IE 11 and not to be in other browsers in October 2020\n    return countTruthy(['MSCSSMatrix' in w, 'msSetImmediate' in w, 'msIndexedDB' in w, 'msMaxTouchPoints' in n, 'msPointerEnabled' in n]) >= 4;\n  }\n  /**\r\n   * Checks whether the browser is based on EdgeHTML (the pre-Chromium Edge engine) without using user-agent.\r\n   *\r\n   * Warning for package users:\r\n   * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.\r\n   */\n\n\n  function isEdgeHTML() {\n    // Based on research in October 2020\n    return countTruthy(['msWriteProfilerMark' in w, 'MSStream' in w, 'msLaunchUri' in n, 'msSaveBlob' in n]) >= 3 && !isTrident();\n  }\n  /**\r\n   * Checks whether the browser is based on Chromium without using user-agent.\r\n   *\r\n   * Warning for package users:\r\n   * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.\r\n   */\n\n\n  function isChromium() {\n    // Based on research in October 2020. Tested to detect Chromium 42-86.\n    return countTruthy(['webkitPersistentStorage' in n, 'webkitTemporaryStorage' in n, n.vendor.indexOf('Google') === 0, 'webkitResolveLocalFileSystemURL' in w, 'BatteryManager' in w, 'webkitMediaStream' in w, 'webkitSpeechGrammar' in w]) >= 5;\n  }\n  /**\r\n   * Checks whether the browser is based on mobile or desktop Safari without using user-agent.\r\n   * All iOS browsers use WebKit (the Safari engine).\r\n   *\r\n   * Warning for package users:\r\n   * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.\r\n   */\n\n\n  function isWebKit() {\n    // Based on research in September 2020\n    return countTruthy(['ApplePayError' in w, 'CSSPrimitiveValue' in w, 'Counter' in w, n.vendor.indexOf('Apple') === 0, 'getStorageUpdates' in n, 'WebKitMediaKeys' in w]) >= 4;\n  }\n  /**\r\n   * Checks whether the WebKit browser is a desktop Safari.\r\n   *\r\n   * Warning for package users:\r\n   * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.\r\n   */\n\n\n  function isDesktopSafari() {\n    return countTruthy(['safari' in w, !('DeviceMotionEvent' in w), !('ongestureend' in w), !('standalone' in n)]) >= 3;\n  }\n  /**\r\n   * Checks whether the browser is based on Gecko (Firefox engine) without using user-agent.\r\n   *\r\n   * Warning for package users:\r\n   * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.\r\n   */\n\n\n  function isGecko() {\n    var _a; // Based on research in September 2020\n\n\n    return countTruthy(['buildID' in n, ((_a = d.documentElement) === null || _a === void 0 ? void 0 : _a.style) && 'MozAppearance' in d.documentElement.style, 'MediaRecorderErrorEvent' in w, 'mozInnerScreenX' in w, 'CSSMozDocumentRule' in w, 'CanvasCaptureMediaStream' in w]) >= 4;\n  }\n  /**\r\n   * Checks whether the browser is based on Chromium version ≥86 without using user-agent.\r\n   * It doesn't check that the browser is based on Chromium, there is a separate function for this.\r\n   */\n\n\n  function isChromium86OrNewer() {\n    // Checked in Chrome 85 vs Chrome 86 both on desktop and Android\n    return countTruthy([!('MediaSettingsRange' in w), 'RTCEncodedAudioFrame' in w, '' + w.Intl === '[object Intl]', '' + w.Reflect === '[object Reflect]']) >= 3;\n  }\n  /**\r\n   * Checks whether the browser is based on WebKit version ≥606 (Safari ≥12) without using user-agent.\r\n   * It doesn't check that the browser is based on WebKit, there is a separate function for this.\r\n   *\r\n   * @link https://en.wikipedia.org/wiki/Safari_version_history#Release_history Safari-WebKit versions map\r\n   */\n\n\n  function isWebKit606OrNewer() {\n    // Checked in Safari 9–14\n    return countTruthy(['DOMRectList' in w, 'RTCPeerConnectionIceEvent' in w, 'SVGGeometryElement' in w, 'ontransitioncancel' in w]) >= 3;\n  }\n\n  var w$1 = window;\n  var d$1 = document; // Inspired by and based on https://github.com/cozylife/audio-fingerprint\n\n  function getAudioFingerprint() {\n    return __awaiter(this, void 0, void 0, function () {\n      var AudioContext, context, oscillator, compressor, buffer, error_1;\n      return __generator(this, function (_a) {\n        switch (_a.label) {\n          case 0:\n            // In some browsers, audio context always stays suspended unless the context is started in response to a user action\n            // (e.g. a click or a tap). It prevents audio fingerprint from being taken at an arbitrary moment of time.\n            // Such browsers are old and unpopular, so the audio fingerprinting is just skipped in them.\n            // See a similar case explanation at https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088\n            if (doesCurrentBrowserSuspendAudioContext()) {\n              return [2\n              /*return*/\n              , -1];\n            }\n\n            AudioContext = w$1.OfflineAudioContext || w$1.webkitOfflineAudioContext;\n\n            if (!AudioContext) {\n              return [2\n              /*return*/\n              , -2];\n            }\n\n            context = new AudioContext(1, 44100, 44100);\n            oscillator = context.createOscillator();\n            oscillator.type = 'triangle';\n            setAudioParam(context, oscillator.frequency, 10000);\n            compressor = context.createDynamicsCompressor();\n            setAudioParam(context, compressor.threshold, -50);\n            setAudioParam(context, compressor.knee, 40);\n            setAudioParam(context, compressor.ratio, 12);\n            setAudioParam(context, compressor.reduction, -20);\n            setAudioParam(context, compressor.attack, 0);\n            setAudioParam(context, compressor.release, 0.25);\n            oscillator.connect(compressor);\n            compressor.connect(context.destination);\n            oscillator.start(0);\n            _a.label = 1;\n\n          case 1:\n            _a.trys.push([1, 3, 4, 5]);\n\n            return [4\n            /*yield*/\n            , renderAudio(context)];\n\n          case 2:\n            buffer = _a.sent();\n            return [3\n            /*break*/\n            , 5];\n\n          case 3:\n            error_1 = _a.sent();\n\n            if (error_1.name === \"timeout\"\n            /* Timeout */\n            || error_1.name === \"suspended\"\n            /* Suspended */\n            ) {\n                return [2\n                /*return*/\n                , -3];\n              }\n\n            throw error_1;\n\n          case 4:\n            oscillator.disconnect();\n            compressor.disconnect();\n            return [7\n            /*endfinally*/\n            ];\n\n          case 5:\n            return [2\n            /*return*/\n            , getHash(buffer.getChannelData(0))];\n        }\n      });\n    });\n  }\n  /**\r\n   * Checks if the current browser is known to always suspend audio context\r\n   */\n\n\n  function doesCurrentBrowserSuspendAudioContext() {\n    return isWebKit() && !isDesktopSafari() && !isWebKit606OrNewer();\n  }\n\n  function setAudioParam(context, param, value) {\n    var isAudioParam = function isAudioParam(value) {\n      return value && typeof value.setValueAtTime === 'function';\n    };\n\n    if (isAudioParam(param)) {\n      param.setValueAtTime(value, context.currentTime);\n    }\n  }\n\n  function renderAudio(context) {\n    var resumeTriesMaxCount = 3;\n    var resumeRetryDelay = 500;\n    var runningTimeout = 1000;\n    return new Promise(function (resolve, reject) {\n      context.oncomplete = function (event) {\n        return resolve(event.renderedBuffer);\n      };\n\n      var resumeTriesLeft = resumeTriesMaxCount;\n\n      var tryResume = function tryResume() {\n        context.startRendering();\n\n        switch (context.state) {\n          case 'running':\n            setTimeout(function () {\n              return reject(makeInnerError(\"timeout\"\n              /* Timeout */\n              ));\n            }, runningTimeout);\n            break;\n          // Sometimes the audio context doesn't start after calling `startRendering` (in addition to the cases where\n          // audio context doesn't start at all). A known case is starting an audio context when the browser tab is in\n          // background on iPhone. Retries usually help in this case.\n\n          case 'suspended':\n            // The audio context can reject starting until the tab is in foreground. Long fingerprint duration\n            // in background isn't a problem, therefore the retry attempts don't count in background. It can lead to\n            // a situation when a fingerprint takes very long time and finishes successfully. FYI, the audio context\n            // can be suspended when `document.hidden === false` and start running after a retry.\n            if (!d$1.hidden) {\n              resumeTriesLeft--;\n            }\n\n            if (resumeTriesLeft > 0) {\n              setTimeout(tryResume, resumeRetryDelay);\n            } else {\n              reject(makeInnerError(\"suspended\"\n              /* Suspended */\n              ));\n            }\n\n            break;\n        }\n      };\n\n      tryResume();\n    });\n  }\n\n  function getHash(signal) {\n    var hash = 0;\n\n    for (var i = 4500; i < 5000; ++i) {\n      hash += Math.abs(signal[i]);\n    }\n\n    return hash;\n  }\n\n  function makeInnerError(name) {\n    var error = new Error(name);\n    error.name = name;\n    return error;\n  }\n\n  var d$2 = document; // We use m or w because these two characters take up the maximum width.\n  // And we use a LLi so that the same matching fonts can get separated.\n\n  var testString = 'mmMwWLliI0O&1'; // We test using 48px font size, we may use any size. I guess larger the better.\n\n  var testSize = '48px'; // A font will be compared against all the three default fonts.\n  // And if it doesn't match all 3 then that font is not available.\n\n  var baseFonts = ['monospace', 'sans-serif', 'serif'];\n  var fontList = [// This is android-specific font from \"Roboto\" family\n  'sans-serif-thin', 'ARNO PRO', 'Agency FB', 'Arabic Typesetting', 'Arial Unicode MS', 'AvantGarde Bk BT', 'BankGothic Md BT', 'Batang', 'Bitstream Vera Sans Mono', 'Calibri', 'Century', 'Century Gothic', 'Clarendon', 'EUROSTILE', 'Franklin Gothic', 'Futura Bk BT', 'Futura Md BT', 'GOTHAM', 'Gill Sans', 'HELV', 'Haettenschweiler', 'Helvetica Neue', 'Humanst521 BT', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'Lucida Bright', 'Lucida Sans', 'Menlo', 'MS Mincho', 'MS Outlook', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MYRIAD PRO', 'Marlett', 'Meiryo UI', 'Microsoft Uighur', 'Minion Pro', 'Monotype Corsiva', 'PMingLiU', 'Pristina', 'SCRIPTINA', 'Segoe UI Light', 'Serifa', 'SimHei', 'Small Fonts', 'Staccato222 BT', 'TRAJAN PRO', 'Univers CE 55 Medium', 'Vrinda', 'ZWAdobeF'];\n  var fontSpanStyle = {\n    // CSS font reset to reset external styles\n    fontStyle: 'normal',\n    fontWeight: 'normal',\n    letterSpacing: 'normal',\n    lineBreak: 'auto',\n    lineHeight: 'normal',\n    textTransform: 'none',\n    textAlign: 'left',\n    textDecoration: 'none',\n    textShadow: 'none',\n    whiteSpace: 'normal',\n    wordBreak: 'normal',\n    wordSpacing: 'normal',\n    // We need this css as in some weird browser this span elements shows up for a microSec which creates\n    // a bad user experience\n    position: 'absolute',\n    left: '-9999px',\n    fontSize: testSize\n  }; // kudos to http://www.lalit.org/lab/javascript-css-font-detect/\n\n  function getFonts() {\n    var h = d$2.body; // div to load spans for the base fonts\n\n    var baseFontsDiv = d$2.createElement('div'); // div to load spans for the fonts to detect\n\n    var fontsDiv = d$2.createElement('div');\n    var defaultWidth = {};\n    var defaultHeight = {}; // creates a span where the fonts will be loaded\n\n    var createSpan = function createSpan() {\n      var span = d$2.createElement('span');\n      span.textContent = testString;\n\n      for (var _i = 0, _a = Object.keys(fontSpanStyle); _i < _a.length; _i++) {\n        var prop = _a[_i];\n        span.style[prop] = fontSpanStyle[prop];\n      }\n\n      return span;\n    }; // creates a span and load the font to detect and a base font for fallback\n\n\n    var createSpanWithFonts = function createSpanWithFonts(fontToDetect, baseFont) {\n      var s = createSpan();\n      s.style.fontFamily = \"'\" + fontToDetect + \"',\" + baseFont;\n      return s;\n    }; // creates spans for the base fonts and adds them to baseFontsDiv\n\n\n    var initializeBaseFontsSpans = function initializeBaseFontsSpans() {\n      return baseFonts.map(function (baseFont) {\n        var s = createSpan();\n        s.style.fontFamily = baseFont;\n        baseFontsDiv.appendChild(s);\n        return s;\n      });\n    }; // creates spans for the fonts to detect and adds them to fontsDiv\n\n\n    var initializeFontsSpans = function initializeFontsSpans() {\n      // Stores {fontName : [spans for that font]}\n      var spans = {};\n\n      var _loop_1 = function _loop_1(font) {\n        spans[font] = baseFonts.map(function (baseFont) {\n          var s = createSpanWithFonts(font, baseFont);\n          fontsDiv.appendChild(s);\n          return s;\n        });\n      };\n\n      for (var _i = 0, fontList_1 = fontList; _i < fontList_1.length; _i++) {\n        var font = fontList_1[_i];\n\n        _loop_1(font);\n      }\n\n      return spans;\n    }; // checks if a font is available\n\n\n    var isFontAvailable = function isFontAvailable(fontSpans) {\n      return baseFonts.some(function (baseFont, baseFontIndex) {\n        return fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont] || fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont];\n      });\n    }; // create spans for base fonts\n\n\n    var baseFontsSpans = initializeBaseFontsSpans(); // add the spans to the DOM\n\n    h.appendChild(baseFontsDiv); // get the default width for the three base fonts\n\n    for (var index = 0, length_1 = baseFonts.length; index < length_1; index++) {\n      defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font\n\n      defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font\n    } // create spans for fonts to detect\n\n\n    var fontsSpans = initializeFontsSpans(); // add all the spans to the DOM\n\n    h.appendChild(fontsDiv); // check available fonts\n\n    var available = [];\n\n    for (var i = 0, l = fontList.length; i < l; i++) {\n      if (isFontAvailable(fontsSpans[fontList[i]])) {\n        available.push(fontList[i]);\n      }\n    } // remove spans from DOM\n\n\n    h.removeChild(fontsDiv);\n    h.removeChild(baseFontsDiv);\n    return available;\n  }\n\n  function getPlugins() {\n    if (isTrident()) {\n      return [];\n    }\n\n    if (!navigator.plugins) {\n      return undefined;\n    }\n\n    var plugins = []; // Safari 10 doesn't support iterating navigator.plugins with for...of\n\n    for (var i = 0; i < navigator.plugins.length; ++i) {\n      var plugin = navigator.plugins[i];\n\n      if (!plugin) {\n        continue;\n      }\n\n      var mimeTypes = [];\n\n      for (var j = 0; j < plugin.length; ++j) {\n        var mimeType = plugin[j];\n        mimeTypes.push({\n          type: mimeType.type,\n          suffixes: mimeType.suffixes\n        });\n      }\n\n      plugins.push({\n        name: plugin.name,\n        description: plugin.description,\n        mimeTypes: mimeTypes\n      });\n    }\n\n    return plugins;\n  }\n\n  function makeCanvasContext() {\n    var canvas = document.createElement('canvas');\n    canvas.width = 240;\n    canvas.height = 140;\n    canvas.style.display = 'inline';\n    return [canvas, canvas.getContext('2d')];\n  }\n\n  function isSupported(canvas, context) {\n    // TODO: look into: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob\n    return !!(context && canvas.toDataURL);\n  }\n\n  function save(canvas) {\n    // TODO: look into: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob\n    return canvas.toDataURL();\n  } // https://www.browserleaks.com/canvas#how-does-it-work\n\n\n  function getCanvasFingerprint() {\n    var _a = makeCanvasContext(),\n        canvas = _a[0],\n        context = _a[1];\n\n    if (!isSupported(canvas, context)) {\n      return {\n        winding: false,\n        data: ''\n      };\n    } // detect browser support of canvas winding\n    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/\n    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js\n\n\n    context.rect(0, 0, 10, 10);\n    context.rect(2, 2, 6, 6);\n    var winding = !context.isPointInPath(5, 5, 'evenodd');\n    context.textBaseline = 'alphabetic';\n    context.fillStyle = '#f60';\n    context.fillRect(125, 1, 62, 20);\n    context.fillStyle = '#069'; // https://github.com/Valve/fingerprintjs2/issues/66\n    // this can affect FP generation when applying different CSS on different websites\n\n    context.font = '11pt no-real-font-123'; // the choice of emojis has a gigantic impact on rendering performance (especially in FF)\n    // some newer emojis cause it to slow down 50-200 times\n    // context.fillText(\"Cw爨m fjordbank \\ud83d\\ude03 gly\", 2, 15)\n\n    var printedText = \"Cwm fjordbank \\uD83D\\uDE03 gly\";\n    context.fillText(printedText, 2, 15);\n    context.fillStyle = 'rgba(102, 204, 0, 0.2)';\n    context.font = '18pt Arial';\n    context.fillText(printedText, 4, 45); // canvas blending\n    // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/\n    // http://jsfiddle.net/NDYV8/16/\n\n    context.globalCompositeOperation = 'multiply';\n    context.fillStyle = 'rgb(255,0,255)';\n    context.beginPath();\n    context.arc(50, 50, 50, 0, Math.PI * 2, true);\n    context.closePath();\n    context.fill();\n    context.fillStyle = 'rgb(0,255,255)';\n    context.beginPath();\n    context.arc(100, 50, 50, 0, Math.PI * 2, true);\n    context.closePath();\n    context.fill();\n    context.fillStyle = 'rgb(255,255,0)';\n    context.beginPath();\n    context.arc(75, 100, 50, 0, Math.PI * 2, true);\n    context.closePath();\n    context.fill();\n    context.fillStyle = 'rgb(255,0,255)'; // canvas winding\n    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/\n    // http://jsfiddle.net/NDYV8/19/\n\n    context.arc(75, 75, 75, 0, Math.PI * 2, true);\n    context.arc(75, 75, 25, 0, Math.PI * 2, true);\n    context.fill('evenodd');\n    return {\n      winding: winding,\n      data: save(canvas)\n    };\n  }\n\n  var n$1 = navigator;\n  var w$2 = window;\n  /**\r\n   * This is a crude and primitive touch screen detection. It's not possible to currently reliably detect the availability\r\n   * of a touch screen with a JS, without actually subscribing to a touch event.\r\n   *\r\n   * @see http://www.stucox.com/blog/you-cant-detect-a-touchscreen/\r\n   * @see https://github.com/Modernizr/Modernizr/issues/548\r\n   */\n\n  function getTouchSupport() {\n    var maxTouchPoints = 0;\n    var touchEvent;\n\n    if (n$1.maxTouchPoints !== undefined) {\n      maxTouchPoints = toInt(n$1.maxTouchPoints);\n    } else if (n$1.msMaxTouchPoints !== undefined) {\n      maxTouchPoints = n$1.msMaxTouchPoints;\n    }\n\n    try {\n      document.createEvent('TouchEvent');\n      touchEvent = true;\n    } catch (_) {\n      touchEvent = false;\n    }\n\n    var touchStart = ('ontouchstart' in w$2);\n    return {\n      maxTouchPoints: maxTouchPoints,\n      touchEvent: touchEvent,\n      touchStart: touchStart\n    };\n  }\n\n  function getOsCpu() {\n    return navigator.oscpu;\n  }\n\n  var n$2 = navigator;\n\n  function getLanguages() {\n    var result = [];\n    var language = n$2.language || n$2.userLanguage || n$2.browserLanguage || n$2.systemLanguage;\n\n    if (language !== undefined) {\n      result.push([language]);\n    }\n\n    if (Array.isArray(n$2.languages)) {\n      // Starting from Chromium 86, there is only a single value in `navigator.language` in Incognito mode:\n      // the value of `navigator.language`. Therefore the value is ignored in this browser.\n      if (!(isChromium() && isChromium86OrNewer())) {\n        result.push(n$2.languages);\n      }\n    } else if (typeof n$2.languages === 'string') {\n      var languages = n$2.languages;\n\n      if (languages) {\n        result.push(languages.split(','));\n      }\n    }\n\n    return result;\n  }\n\n  function getColorDepth() {\n    return window.screen.colorDepth;\n  }\n\n  function getDeviceMemory() {\n    return navigator.deviceMemory;\n  }\n\n  var w$3 = window;\n\n  function getScreenResolution() {\n    // Some browsers return screen resolution as strings, e.g. \"1200\", instead of a number, e.g. 1200.\n    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.\n    var dimensions = [toInt(w$3.screen.width), toInt(w$3.screen.height)];\n    dimensions.sort().reverse();\n    return dimensions;\n  }\n\n  var w$4 = window;\n\n  function getAvailableScreenResolution() {\n    if (w$4.screen.availWidth && w$4.screen.availHeight) {\n      // Some browsers return screen resolution as strings, e.g. \"1200\", instead of a number, e.g. 1200.\n      // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.\n      var dimensions = [toInt(w$4.screen.availWidth), toInt(w$4.screen.availHeight)];\n      dimensions.sort().reverse();\n      return dimensions;\n    }\n\n    return undefined;\n  }\n\n  function getHardwareConcurrency() {\n    try {\n      // sometimes hardware concurrency is a string\n      var concurrency = toInt(navigator.hardwareConcurrency);\n      return isNaN(concurrency) ? 1 : concurrency;\n    } catch (e) {\n      return 1;\n    }\n  }\n\n  function getTimezoneOffset() {\n    var currentYear = new Date().getFullYear(); // The timezone offset may change over time due to daylight saving time (DST) shifts.\n    // The non-DST timezone offset is used as the result timezone offset.\n    // Since the DST season differs in the northern and the southern hemispheres,\n    // both January and July timezones offsets are considered.\n\n    return Math.max( // `getTimezoneOffset` returns a number as a string in some unidentified cases\n    toFloat(new Date(currentYear, 0, 1).getTimezoneOffset()), toFloat(new Date(currentYear, 6, 1).getTimezoneOffset()));\n  }\n\n  var w$5 = window;\n\n  function getTimezone() {\n    var _a;\n\n    if ((_a = w$5.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat) {\n      return new w$5.Intl.DateTimeFormat().resolvedOptions().timeZone;\n    }\n\n    return undefined;\n  }\n\n  function getSessionStorage() {\n    try {\n      return !!window.sessionStorage;\n    } catch (error) {\n      /* SecurityError when referencing it means it exists */\n      return true;\n    }\n  } // https://bugzilla.mozilla.org/show_bug.cgi?id=781447\n\n\n  function getLocalStorage() {\n    try {\n      return !!window.localStorage;\n    } catch (e) {\n      /* SecurityError when referencing it means it exists */\n      return true;\n    }\n  }\n\n  function getIndexedDB() {\n    // IE and Edge don't allow accessing indexedDB in private mode, therefore IE and Edge will have different\n    // visitor identifier in normal and private modes.\n    if (isTrident() || isEdgeHTML()) {\n      return undefined;\n    }\n\n    try {\n      return !!window.indexedDB;\n    } catch (e) {\n      /* SecurityError when referencing it means it exists */\n      return true;\n    }\n  }\n\n  function getOpenDatabase() {\n    return !!window.openDatabase;\n  }\n\n  function getCpuClass() {\n    return navigator.cpuClass;\n  }\n\n  function getPlatform() {\n    return navigator.platform;\n  }\n\n  function getPluginsSupport() {\n    return navigator.plugins !== undefined;\n  }\n\n  function getProductSub() {\n    return navigator.productSub;\n  }\n\n  function getEmptyEvalLength() {\n    return eval.toString().length;\n  }\n\n  function getErrorFF() {\n    try {\n      throw 'a';\n    } catch (e) {\n      try {\n        e.toSource();\n        return true;\n      } catch (e2) {\n        return false;\n      }\n    }\n  }\n\n  function getVendor() {\n    return navigator.vendor;\n  }\n\n  function getChrome() {\n    return window.chrome !== undefined;\n  }\n\n  var d$3 = document;\n  /**\r\n   * navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking\r\n   * cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past with\r\n   * site-specific exceptions. Don't rely on it.\r\n   *\r\n   * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js Taken from here\r\n   */\n\n  function areCookiesEnabled() {\n    // Taken from here: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js\n    // navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking\n    // cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past\n    // with site-specific exceptions. Don't rely on it.\n    // try..catch because some in situations `document.cookie` is exposed but throws a\n    // SecurityError if you try to access it; e.g. documents created from data URIs\n    // or in sandboxed iframes (depending on flags/context)\n    try {\n      // Create cookie\n      d$3.cookie = 'cookietest=1';\n      var result = d$3.cookie.indexOf('cookietest=') !== -1; // Delete cookie\n\n      d$3.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';\n      return result;\n    } catch (e) {\n      return false;\n    }\n  }\n  /**\r\n   * The list of entropy sources used to make visitor identifiers.\r\n   *\r\n   * This value isn't restricted by Semantic Versioning, i.e. it may be changed without bumping minor or major version of\r\n   * this package.\r\n   */\n\n\n  var sources = {\n    // Expected errors and default values must be handled inside the functions. Unexpected errors must be thrown.\n    osCpu: getOsCpu,\n    languages: getLanguages,\n    colorDepth: getColorDepth,\n    deviceMemory: getDeviceMemory,\n    screenResolution: getScreenResolution,\n    availableScreenResolution: getAvailableScreenResolution,\n    hardwareConcurrency: getHardwareConcurrency,\n    timezoneOffset: getTimezoneOffset,\n    timezone: getTimezone,\n    sessionStorage: getSessionStorage,\n    localStorage: getLocalStorage,\n    indexedDB: getIndexedDB,\n    openDatabase: getOpenDatabase,\n    cpuClass: getCpuClass,\n    // Maybe it should be excluded: https://github.com/fingerprintjs/fingerprintjs/issues/514#issuecomment-688754892\n    platform: getPlatform,\n    plugins: getPlugins,\n    canvas: getCanvasFingerprint,\n    // adBlock: isAdblockUsed, // https://github.com/fingerprintjs/fingerprintjs/issues/405\n    touchSupport: getTouchSupport,\n    fonts: getFonts,\n    audio: getAudioFingerprint,\n    pluginsSupport: getPluginsSupport,\n    productSub: getProductSub,\n    emptyEvalLength: getEmptyEvalLength,\n    errorFF: getErrorFF,\n    vendor: getVendor,\n    chrome: getChrome,\n    cookiesEnabled: areCookiesEnabled,\n    userIP: window.uih && window.uih.userIP || 'united-imaging.com'\n  };\n  /**\r\n   * Gets a components list from the given list of entropy sources.\r\n   *\r\n   * Warning for package users:\r\n   * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.\r\n   */\n\n  function getComponents(sources, sourceOptions, excludeSources) {\n    return __awaiter(this, void 0, void 0, function () {\n      var timestamp, components, _i, _a, sourceKey, result, error_1, nextTimestamp;\n\n      var _b;\n\n      return __generator(this, function (_c) {\n        switch (_c.label) {\n          case 0:\n            timestamp = Date.now();\n            components = {};\n            _i = 0, _a = Object.keys(sources);\n            _c.label = 1;\n\n          case 1:\n            if (!(_i < _a.length)) return [3\n            /*break*/\n            , 7];\n            sourceKey = _a[_i];\n\n            if (!excludes(excludeSources, sourceKey)) {\n              return [3\n              /*break*/\n              , 6];\n            }\n\n            result = void 0;\n            _c.label = 2;\n\n          case 2:\n            _c.trys.push([2, 4,, 5]);\n\n            _b = {};\n            return [4\n            /*yield*/\n            , sources[sourceKey](sourceOptions)];\n\n          case 3:\n            result = (_b.value = _c.sent(), _b);\n            return [3\n            /*break*/\n            , 5];\n\n          case 4:\n            error_1 = _c.sent();\n            result = error_1 && _typeof(error_1) === 'object' && 'message' in error_1 ? {\n              error: error_1\n            } : {\n              error: {\n                message: error_1\n              }\n            };\n            return [3\n            /*break*/\n            , 5];\n\n          case 5:\n            nextTimestamp = Date.now();\n            components[sourceKey] = _assign(_assign({}, result), {\n              duration: nextTimestamp - timestamp\n            }); // TypeScript has beaten me here\n\n            timestamp = nextTimestamp;\n            _c.label = 6;\n\n          case 6:\n            _i++;\n            return [3\n            /*break*/\n            , 1];\n\n          case 7:\n            return [2\n            /*return*/\n            , components];\n        }\n      });\n    });\n  }\n  /**\r\n   * Collects entropy components from the built-in sources to make the visitor identifier.\r\n   */\n\n\n  function getBuiltinComponents() {\n    return getComponents(sources, undefined, []);\n  }\n\n  function componentsToCanonicalString(components) {\n    var result = '';\n\n    for (var _i = 0, _a = Object.keys(components); _i < _a.length; _i++) {\n      var componentKey = _a[_i];\n      var component = components[componentKey];\n      var value = component.error ? 'error' : JSON.stringify(component.value);\n      result += \"\" + (result ? '|' : '') + componentKey.replace(/([:|\\\\])/g, '\\\\$1') + \":\" + value;\n    }\n\n    return result;\n  }\n\n  function componentsToDebugString(components) {\n    return JSON.stringify(components, function (_key, value) {\n      var _a;\n\n      if (value instanceof Error) {\n        return _assign(_assign({}, value), {\n          message: value.message,\n          stack: (_a = value.stack) === null || _a === void 0 ? void 0 : _a.split('\\n')\n        });\n      }\n\n      return value;\n    }, 2);\n  }\n\n  function hashComponents(components) {\n    return x64hash128(componentsToCanonicalString(components));\n  }\n  /**\r\n   * Makes a GetResult implementation that calculates the visitor id hash on demand.\r\n   * Designed for optimisation.\r\n   */\n\n\n  function makeLazyGetResult(components) {\n    var visitorIdCache; // A plain class isn't used because its getters and setters aren't enumerable.\n\n    return {\n      components: components,\n\n      get visitorId() {\n        if (visitorIdCache === undefined) {\n          visitorIdCache = hashComponents(this.components);\n        }\n\n        return visitorIdCache;\n      },\n\n      set visitorId(visitorId) {\n        visitorIdCache = visitorId;\n      }\n\n    };\n  }\n  /**\r\n   * The class isn't exported from the index file to not expose the constructor.\r\n   * The hiding gives more freedom for future non-breaking updates.\r\n   */\n\n\n  var OpenAgent =\n  /** @class */\n  function () {\n    function OpenAgent() {}\n    /**\r\n     * @inheritDoc\r\n     */\n\n\n    OpenAgent.prototype.get = function (options) {\n      if (options === void 0) {\n        options = {};\n      }\n\n      return __awaiter(this, void 0, void 0, function () {\n        var components, result;\n        return __generator(this, function (_a) {\n          switch (_a.label) {\n            case 0:\n              return [4\n              /*yield*/\n              , getBuiltinComponents()];\n\n            case 1:\n              components = _a.sent();\n              result = makeLazyGetResult(components);\n\n              if (options.debug) {\n                // console.log is ok here because it's under a debug clause\n                // eslint-disable-next-line no-console\n                console.log(\"Copy the text below to get the debug data:\\n\\n```\\nversion: \" + version + \"\\nuserAgent: \" + navigator.userAgent + \"\\ngetOptions: \" + JSON.stringify(options, undefined, 2) + \"\\nvisitorId: \" + result.visitorId + \"\\ncomponents: \" + componentsToDebugString(components) + \"\\n```\");\n              }\n\n              return [2\n              /*return*/\n              , result];\n          }\n        });\n      });\n    };\n\n    return OpenAgent;\n  }();\n  /**\r\n   * Builds an instance of Agent and waits a delay required for a proper operation.\r\n   */\n\n\n  function load(_a) {\n    var _b = (_a === void 0 ? {} : _a).delayFallback,\n        delayFallback = _b === void 0 ? 50 : _b;\n    return __awaiter(this, void 0, void 0, function () {\n      return __generator(this, function (_c) {\n        switch (_c.label) {\n          case 0:\n            // A delay is required to ensure consistent entropy components.\n            // See https://github.com/fingerprintjs/fingerprintjs/issues/254\n            // and https://github.com/fingerprintjs/fingerprintjs/issues/307\n            return [4\n            /*yield*/\n            , requestIdleCallbackIfAvailable(delayFallback)];\n\n          case 1:\n            // A delay is required to ensure consistent entropy components.\n            // See https://github.com/fingerprintjs/fingerprintjs/issues/254\n            // and https://github.com/fingerprintjs/fingerprintjs/issues/307\n            _c.sent();\n\n            return [2\n            /*return*/\n            , new OpenAgent()];\n        }\n      });\n    });\n  } // The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).\n  // It should contain all the public exported values.\n\n\n  var index = {\n    load: load,\n    hashComponents: hashComponents,\n    componentsToDebugString: componentsToDebugString\n  }; // The exports below are for private usage. They may change unexpectedly. Use them at your own risk.\n\n  /** Not documented, out of Semantic Versioning, usage is at your own risk */\n\n  var murmurX64Hash128 = x64hash128;\n  exports.componentsToDebugString = componentsToDebugString;\n  exports[\"default\"] = index;\n  exports.getComponents = getComponents;\n  exports.hashComponents = hashComponents;\n  exports.isChromium = isChromium;\n  exports.isDesktopSafari = isDesktopSafari;\n  exports.isEdgeHTML = isEdgeHTML;\n  exports.isGecko = isGecko;\n  exports.isTrident = isTrident;\n  exports.isWebKit = isWebKit;\n  exports.load = load;\n  exports.murmurX64Hash128 = murmurX64Hash128;\n  return exports;\n}({});\n\nif ( true && module.exports) {\n  module.exports = FingerprintJS;\n}\n\n//# sourceURL=webpack://dedLog/./src/utils/fp.js?");

/***/ }),

/***/ "./src/utils/sendLog.js":
/*!******************************!*\
  !*** ./src/utils/sendLog.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ ((module) => {

eval("var sendLog = function sendLog(url, datas) {\n  var result = [];\n\n  for (var key in datas) {\n    var val = datas[key];\n    result.push(key + '=' + encodeURIComponent(JSON.stringify(val)));\n  }\n\n  ;\n  var queryStr = '?' + result.join('&');\n  var oImg = new Image();\n  console.log(datas);\n  oImg.src = url + queryStr;\n};\n\nmodule.exports = sendLog;\n\n//# sourceURL=webpack://dedLog/./src/utils/sendLog.js?");

/***/ }),

/***/ "./src/utils/speenIndex.js":
/*!*********************************!*\
  !*** ./src/utils/speenIndex.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 313:37-51 */
/*! CommonJS bailout: module.exports is used directly at 314:2-16 */
/***/ ((module) => {

eval("/******************************************************************************\r\nCopyright (c) 2014, Google Inc.\r\nAll rights reserved.\r\n\r\nRedistribution and use in source and binary forms, with or without\r\nmodification, are permitted provided that the following conditions are met:\r\n\r\n    * Redistributions of source code must retain the above copyright notice,\r\n      this list of conditions and the following disclaimer.\r\n    * Redistributions in binary form must reproduce the above copyright notice,\r\n      this list of conditions and the following disclaimer in the documentation\r\n      and/or other materials provided with the distribution.\r\n    * Neither the name of the <ORGANIZATION> nor the names of its contributors\r\n    may be used to endorse or promote products derived from this software\r\n    without specific prior written permission.\r\n\r\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\"\r\nAND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\r\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\r\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE\r\nFOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL\r\nDAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR\r\nSERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\r\nCAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,\r\nOR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\r\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\r\n******************************************************************************/\n\n/******************************************************************************\r\n*******************************************************************************\r\n  Calculates the Speed Index for a page by:\r\n  - Collecting a list of visible rectangles for elements that loaded\r\n    external resources (images, background images, fonts)\r\n  - Gets the time when the external resource for those elements loaded\r\n    through Resource Timing\r\n  - Calculates the likely time that the background painted\r\n  - Runs the various paint rectangles through the SpeedIndex calculation:\r\n    https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index\r\n\r\n  TODO:\r\n  - Improve the start render estimate\r\n  - Handle overlapping rects (though maybe counting the area as multiple paints\r\n    will work out well)\r\n  - Detect elements with Custom fonts and the time that the respective font\r\n    loaded\r\n  - Better error handling for browsers that don't support resource timing\r\n*******************************************************************************\r\n******************************************************************************/\nvar RUMSpeedIndex = function RUMSpeedIndex(win) {\n  win = win || window;\n  var doc = win.document;\n  /****************************************************************************\r\n    Support Routines\r\n  ****************************************************************************/\n  // Get the rect for the visible portion of the provided DOM element\n\n  var GetElementViewportRect = function GetElementViewportRect(el) {\n    var intersect = false;\n\n    if (el.getBoundingClientRect) {\n      var elRect = el.getBoundingClientRect();\n      intersect = {\n        'top': Math.max(elRect.top, 0),\n        'left': Math.max(elRect.left, 0),\n        'bottom': Math.min(elRect.bottom, win.innerHeight || doc.documentElement.clientHeight),\n        'right': Math.min(elRect.right, win.innerWidth || doc.documentElement.clientWidth)\n      };\n\n      if (intersect.bottom <= intersect.top || intersect.right <= intersect.left) {\n        intersect = false;\n      } else {\n        intersect.area = (intersect.bottom - intersect.top) * (intersect.right - intersect.left);\n      }\n    }\n\n    return intersect;\n  }; // Check a given element to see if it is visible\n\n\n  var CheckElement = function CheckElement(el, url) {\n    if (url) {\n      var rect = GetElementViewportRect(el);\n\n      if (rect) {\n        rects.push({\n          'url': url,\n          'area': rect.area,\n          'rect': rect\n        });\n      }\n    }\n  }; // Get the visible rectangles for elements that we care about\n\n\n  var GetRects = function GetRects() {\n    // Walk all of the elements in the DOM (try to only do this once)\n    var elements = doc.getElementsByTagName('*');\n    var re = /url\\(.*(http.*)\\)/ig;\n\n    for (var i = 0; i < elements.length; i++) {\n      var el = elements[i];\n      var style = win.getComputedStyle(el); // check for Images\n\n      if (el.tagName == 'IMG') {\n        CheckElement(el, el.currentSrc || el.src);\n      } // Check for background images\n\n\n      if (style['background-image']) {\n        re.lastIndex = 0;\n        var matches = re.exec(style['background-image']);\n        if (matches && matches.length > 1) CheckElement(el, matches[1].replace('\"', ''));\n      } // recursively walk any iFrames\n\n\n      if (el.tagName == 'IFRAME') {\n        try {\n          var rect = GetElementViewportRect(el);\n\n          if (rect) {\n            var tm = RUMSpeedIndex(el.contentWindow);\n\n            if (tm) {\n              rects.push({\n                'tm': tm,\n                'area': rect.area,\n                'rect': rect\n              });\n            }\n          }\n        } catch (e) {}\n      }\n    }\n  }; // Get the time at which each external resource loaded\n\n\n  var GetRectTimings = function GetRectTimings() {\n    var timings = {};\n    var requests = win.performance.getEntriesByType(\"resource\");\n\n    for (var i = 0; i < requests.length; i++) {\n      timings[requests[i].name] = requests[i].responseEnd;\n    }\n\n    for (var j = 0; j < rects.length; j++) {\n      if (!('tm' in rects[j])) rects[j].tm = timings[rects[j].url] !== undefined ? timings[rects[j].url] : 0;\n    }\n  }; // Get the first paint time.\n\n\n  var GetFirstPaint = function GetFirstPaint() {\n    // Try the standardized paint timing api\n    try {\n      var entries = performance.getEntriesByType('paint');\n\n      for (var i = 0; i < entries.length; i++) {\n        if (entries[i]['name'] == 'first-paint') {\n          navStart = performance.getEntriesByType(\"navigation\")[0].startTime;\n          firstPaint = entries[i].startTime - navStart;\n          break;\n        }\n      }\n    } catch (e) {} // If the browser supports a first paint event, just use what the browser reports\n\n\n    if (firstPaint === undefined && 'msFirstPaint' in win.performance.timing) firstPaint = win.performance.timing.msFirstPaint - navStart;\n\n    if (firstPaint === undefined && 'chrome' in win && 'loadTimes' in win.chrome) {\n      var chromeTimes = win.chrome.loadTimes();\n\n      if ('firstPaintTime' in chromeTimes && chromeTimes.firstPaintTime > 0) {\n        var startTime = chromeTimes.startLoadTime;\n        if ('requestTime' in chromeTimes) startTime = chromeTimes.requestTime;\n        if (chromeTimes.firstPaintTime >= startTime) firstPaint = (chromeTimes.firstPaintTime - startTime) * 1000.0;\n      }\n    } // For browsers that don't support first-paint or where we get insane values,\n    // use the time of the last non-async script or css from the head.\n\n\n    if (firstPaint === undefined || firstPaint < 0 || firstPaint > 120000) {\n      firstPaint = win.performance.timing.responseStart - navStart;\n      var headURLs = {};\n      var headElements = doc.getElementsByTagName('head')[0].children;\n\n      for (var i = 0; i < headElements.length; i++) {\n        var el = headElements[i];\n        if (el.tagName == 'SCRIPT' && el.src && !el.async) headURLs[el.src] = true;\n        if (el.tagName == 'LINK' && el.rel == 'stylesheet' && el.href) headURLs[el.href] = true;\n      }\n\n      var requests = win.performance.getEntriesByType(\"resource\");\n      var doneCritical = false;\n\n      for (var j = 0; j < requests.length; j++) {\n        if (!doneCritical && headURLs[requests[j].name] && (requests[j].initiatorType == 'script' || requests[j].initiatorType == 'link')) {\n          var requestEnd = requests[j].responseEnd;\n          if (firstPaint === undefined || requestEnd > firstPaint) firstPaint = requestEnd;\n        } else {\n          doneCritical = true;\n        }\n      }\n    }\n\n    firstPaint = Math.max(firstPaint, 0);\n  }; // Sort and group all of the paint rects by time and use them to\n  // calculate the visual progress\n\n\n  var CalculateVisualProgress = function CalculateVisualProgress() {\n    var paints = {\n      '0': 0\n    };\n    var total = 0;\n\n    for (var i = 0; i < rects.length; i++) {\n      var tm = firstPaint;\n      if ('tm' in rects[i] && rects[i].tm > firstPaint) tm = rects[i].tm;\n      if (paints[tm] === undefined) paints[tm] = 0;\n      paints[tm] += rects[i].area;\n      total += rects[i].area;\n    } // Add a paint area for the page background (count 10% of the pixels not\n    // covered by existing paint rects.\n\n\n    var pixels = Math.max(doc.documentElement.clientWidth, win.innerWidth || 0) * Math.max(doc.documentElement.clientHeight, win.innerHeight || 0);\n\n    if (pixels > 0) {\n      pixels = Math.max(pixels - total, 0) * pageBackgroundWeight;\n      if (paints[firstPaint] === undefined) paints[firstPaint] = 0;\n      paints[firstPaint] += pixels;\n      total += pixels;\n    } // Calculate the visual progress\n\n\n    if (total) {\n      for (var time in paints) {\n        if (paints.hasOwnProperty(time)) {\n          progress.push({\n            'tm': time,\n            'area': paints[time]\n          });\n        }\n      }\n\n      progress.sort(function (a, b) {\n        return a.tm - b.tm;\n      });\n      var accumulated = 0;\n\n      for (var j = 0; j < progress.length; j++) {\n        accumulated += progress[j].area;\n        progress[j].progress = accumulated / total;\n      }\n    }\n  }; // Given the visual progress information, Calculate the speed index.\n\n\n  var CalculateSpeedIndex = function CalculateSpeedIndex() {\n    if (progress.length) {\n      SpeedIndex = 0;\n      var lastTime = 0;\n      var lastProgress = 0;\n\n      for (var i = 0; i < progress.length; i++) {\n        var elapsed = progress[i].tm - lastTime;\n        if (elapsed > 0 && lastProgress < 1) SpeedIndex += (1 - lastProgress) * elapsed;\n        lastTime = progress[i].tm;\n        lastProgress = progress[i].progress;\n      }\n    } else {\n      SpeedIndex = firstPaint;\n    }\n  };\n  /****************************************************************************\r\n    Main flow\r\n  ****************************************************************************/\n\n\n  var rects = [];\n  var progress = [];\n  var firstPaint;\n  var SpeedIndex;\n  var pageBackgroundWeight = 0.1;\n\n  try {\n    var navStart = win.performance.timing.navigationStart;\n    GetRects();\n    GetRectTimings();\n    GetFirstPaint();\n    CalculateVisualProgress();\n    CalculateSpeedIndex();\n  } catch (e) {}\n  /* Debug output for testing\r\n  var dbg = '';\r\n  dbg += \"Paint Rects\\n\";\r\n  for (var i = 0; i < rects.length; i++)\r\n    dbg += '(' + rects[i].area + ') ' + rects[i].tm + ' - ' + rects[i].url + \"\\n\";\r\n  dbg += \"Visual Progress\\n\";\r\n  for (var i = 0; i < progress.length; i++)\r\n    dbg += '(' + progress[i].area + ') ' + progress[i].tm + ' - ' + progress[i].progress + \"\\n\";\r\n  dbg += 'First Paint: ' + firstPaint + \"\\n\";\r\n  dbg += 'Speed Index: ' + SpeedIndex + \"\\n\";\r\n  console.log(dbg);\r\n  */\n\n\n  return {\n    firstPaint: firstPaint,\n    SpeedIndex: SpeedIndex\n  };\n};\n\nif ( true && module.exports) {\n  module.exports = RUMSpeedIndex;\n}\n\n//# sourceURL=webpack://dedLog/./src/utils/speenIndex.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/babel-polyfill/lib/index.js");
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});