/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var modal = document.querySelector('#modal');\n  var modalBtn = document.querySelector('#modal-btn');\n  var ideaList = document.querySelector('#idea-list');\n  var ideaForm = document.querySelector('#idea-form');\n\n  // Open modal\n  function open() {\n    modal.style.display = 'block';\n  }\n\n  // Close modal\n  function close() {\n    modal.style.display = 'none';\n  }\n\n  // Close modal if clicked outside\n  function outsideClick(e) {\n    if (e.target === modal) {\n      close();\n    }\n  }\n\n  // Fetch random ideas from the API\n  function fetchIdeas() {\n    return _fetchIdeas.apply(this, arguments);\n  } // Delete idea\n  function _fetchIdeas() {\n    _fetchIdeas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n      var response, data, ideas, username;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch('http://localhost:8000/api/ideas');\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n          case 6:\n            data = _context.sent;\n            if (data.success) {\n              ideas = data.data; // Clear existing ideas\n              ideaList.innerHTML = '';\n\n              // Retrieve the username from localStorage\n              username = localStorage.getItem('username'); // Display ideas on the page\n              ideas.forEach(function (idea) {\n                var card = document.createElement('div');\n                card.classList.add('card');\n                var deleteBtn = document.createElement('button');\n                deleteBtn.classList.add('delete');\n                deleteBtn.innerHTML = '<i class=\"fas fa-times\"></i>';\n\n                // Check if the user is the owner of the idea\n                if (idea.username === username) {\n                  deleteBtn.style.display = 'block';\n                  deleteBtn.addEventListener('click', function () {\n                    deleteIdea(idea._id);\n                  });\n                } else {\n                  deleteBtn.style.display = 'none';\n                }\n                var title = document.createElement('h3');\n                title.textContent = idea.text;\n\n                // Display tag if it exists and add the appropriate class for the tag like tag-technology, tag-business, etc. while also making the first letter uppercase\n                var tag = document.createElement('p');\n                if (idea.tag) {\n                  tag.classList.add(\"tag\", \"tag-\".concat(idea.tag.toLowerCase())); // Adds the appropriate class for the tag like tag-technology, tag-business, etc.\n                  tag.textContent = idea.tag.charAt(0).toUpperCase() + idea.tag.slice(1); // Make the first letter uppercase\n                }\n\n                var postedBy = document.createElement('p');\n                postedBy.innerHTML = \"Posted on <span class=\\\"date\\\">\".concat(formatDate(idea.date // Format date as \"Month DD, YYYY via the formatDate() function outside of the fetchIdeas() function\"\n                ), \"</span> by <span class=\\\"author\\\">\").concat(idea.username, \"</span>\");\n                card.appendChild(deleteBtn);\n                card.appendChild(title);\n                card.appendChild(tag);\n                card.appendChild(postedBy);\n                ideaList.appendChild(card);\n              });\n            } else {\n              console.error('Failed to fetch ideas:', data.error);\n            }\n            _context.next = 13;\n            break;\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            console.error('Error fetching ideas:', _context.t0);\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 10]]);\n    }));\n    return _fetchIdeas.apply(this, arguments);\n  }\n  function deleteIdea(_x) {\n    return _deleteIdea.apply(this, arguments);\n  } // Submit idea\n  function _deleteIdea() {\n    _deleteIdea = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ideaId) {\n      var response, data;\n      return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return fetch(\"http://localhost:8000/api/ideas/\".concat(ideaId), {\n              method: 'DELETE'\n            });\n          case 3:\n            response = _context2.sent;\n            _context2.next = 6;\n            return response.json();\n          case 6:\n            data = _context2.sent;\n            if (data.success) {\n              fetchIdeas(); // Refresh ideas after deletion\n            } else {\n              console.error('Failed to delete idea:', data.error);\n            }\n            _context2.next = 13;\n            break;\n          case 10:\n            _context2.prev = 10;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error('Error deleting idea:', _context2.t0);\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2, null, [[0, 10]]);\n    }));\n    return _deleteIdea.apply(this, arguments);\n  }\n  function submitIdea(_x2) {\n    return _submitIdea.apply(this, arguments);\n  } // Format date as \"Month DD, YYYY\" // Utility function - can be used anywhere by calling formatDate()\n  function _submitIdea() {\n    _submitIdea = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {\n      var usernameInput, ideaTextInput, tagInput, username, ideaText, tag, response, data;\n      return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n        while (1) switch (_context3.prev = _context3.next) {\n          case 0:\n            event.preventDefault();\n            usernameInput = document.querySelector('#username');\n            ideaTextInput = document.querySelector('#idea-text');\n            tagInput = document.querySelector('#tag');\n            username = usernameInput.value.trim();\n            ideaText = ideaTextInput.value.trim();\n            tag = tagInput.value.trim();\n            if (!(!username || !ideaText || !tag)) {\n              _context3.next = 10;\n              break;\n            }\n            alert('Please fill in all fields');\n            return _context3.abrupt(\"return\");\n          case 10:\n            _context3.prev = 10;\n            _context3.next = 13;\n            return fetch('http://localhost:8000/api/ideas', {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/x-www-form-urlencoded'\n              },\n              body: \"username=\".concat(encodeURIComponent(username), \"&text=\").concat(encodeURIComponent(ideaText), \"&tag=\").concat(encodeURIComponent(tag))\n            });\n          case 13:\n            response = _context3.sent;\n            _context3.next = 16;\n            return response.json();\n          case 16:\n            data = _context3.sent;\n            if (data.success) {\n              usernameInput.value = '';\n              ideaTextInput.value = '';\n              tagInput.value = '';\n              close(); // Close the modal\n              fetchIdeas(); // Refresh ideas after submission\n\n              // Store the username in localStorage\n              localStorage.setItem('username', username);\n            } else {\n              console.error('Failed to submit idea:', data.error);\n            }\n            _context3.next = 23;\n            break;\n          case 20:\n            _context3.prev = 20;\n            _context3.t0 = _context3[\"catch\"](10);\n            console.error('Error submitting idea:', _context3.t0);\n          case 23:\n          case \"end\":\n            return _context3.stop();\n        }\n      }, _callee3, null, [[10, 20]]);\n    }));\n    return _submitIdea.apply(this, arguments);\n  }\n  function formatDate(dateString) {\n    var date = new Date(dateString);\n    var options = {\n      month: 'long',\n      day: 'numeric',\n      year: 'numeric'\n    };\n    return date.toLocaleDateString(undefined, options);\n  }\n  modalBtn.addEventListener('click', open);\n  window.addEventListener('click', outsideClick);\n  ideaForm.addEventListener('submit', submitIdea);\n\n  // Fetch ideas when the page loads\n  fetchIdeas();\n});\n\n//# sourceURL=webpack://webpack-starter/./src/index.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./src/css/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;