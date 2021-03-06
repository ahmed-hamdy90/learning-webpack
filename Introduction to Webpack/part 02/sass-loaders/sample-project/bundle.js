/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// require say-hello module

	var sayHello = __webpack_require__(1);

	// require main scss file
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	sayHello('Guybrush', document.querySelector('h2'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * setting text content of HtmlElement with hello message
	 *
	 * @param  {string}      name    given name will used in hello message
	 * @param  {HtmlElement} element Html element which it's content
	 *                               will used to write hello message
	 */

	var sayHello = function sayHello(name, element) {
	  element.textContent = 'Hello ' + name + '!';
	};

	module.exports = sayHello;

/***/ }
/******/ ]);