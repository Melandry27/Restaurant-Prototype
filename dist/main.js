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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initializer */ \"./src/modules/initializer.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n\n\nfunction addEvent() {\n\tconst homeBtn = document.getElementById(\"home\");\n\tconst contactBtn = document.getElementById(\"contact\");\n\tconst menuBtn = document.getElementById(\"menu\");\n\n\thomeBtn.addEventListener(\"click\", _modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\tcontactBtn.addEventListener(\"click\", _modules_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\tmenuBtn.addEventListener(\"click\", _modules_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n}\n\nfunction init() {\n\t(0,_modules_initializer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\taddEvent();\n}\n\ninit();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n\tconst contact = document.createElement(\"div\");\n\tcontact.setAttribute(\"id\", \"contact-container\");\n\n\tconst aboutTitle = document.createElement(\"h2\");\n\taboutTitle.setAttribute(\"id\", \"contact-title\");\n\taboutTitle.textContent = \"Contact Us \";\n\n\tconst mailPreText = document.createElement(\"p\");\n\tmailPreText.setAttribute(\"id\", \"mailPreText\");\n\tmailPreText.innerHTML = \"My Mail Adresse :\";\n\n\tconst mailText = document.createElement(\"a\");\n\tmailText.setAttribute(\"id\", \"mailText\");\n\tmailText.setAttribute(\"href\", \"mailto:msmelandry@hotmail.fr\");\n\tmailText.innerHTML = \"msmelandry@hotmail.fr\";\n\n\tconst numberPreText = document.createElement(\"p\");\n\tnumberPreText.innerHTML = \"My Number :\";\n\tnumberPreText.setAttribute(\"id\", \"numberPreText\");\n\n\tconst numberText = document.createElement(\"p\");\n\tnumberText.innerHTML = \"+33611792551\";\n\tnumberText.setAttribute(\"id\", \"numberText\");\n\n\tcontact.appendChild(aboutTitle);\n\tcontact.appendChild(mailPreText);\n\tcontact.appendChild(mailText);\n\tcontact.appendChild(numberPreText);\n\tcontact.appendChild(numberText);\n\n\treturn contact;\n}\n\nfunction setBtn() {\n\tconst getMain = document.getElementById(\"main-content\");\n\n\twhile (getMain.firstChild) {\n\t\tgetMain.removeChild(getMain.firstChild);\n\t}\n}\n\nfunction loadContact() {\n\tconst getMainDiv = document.getElementById(\"main-content\");\n\n\tsetBtn();\n\n\tgetMainDiv.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\n\tconst about = document.createElement(\"div\");\n\tabout.setAttribute(\"id\", \"about\");\n\n\tconst aboutTitle = document.createElement(\"h2\");\n\taboutTitle.textContent = \"ABOUT\";\n\n\tconst textContainer = document.createElement(\"div\");\n\ttextContainer.setAttribute(\"id\", \"textContainer\");\n\n\tconst aboutText = document.createElement(\"p\");\n\taboutText.textContent =\n\t\t\"Lorem ipsum dolor sit amet. Et reprehenderit magni a sunt exercitationem aut doloremque in beatae galisum et nesciunt placeat et iusto maxime et facilis dolorum? Ut quas harum id odio rerum qui inventore expedita sed placeat explicabo! Sed modi excepturi sed repellat perferendis At consequuntur reiciendis ut quam totam. Vel voluptatem doloribus vel sapiente minima ut omnis omnis aut numquam dolorum est soluta itaque.\";\n\n\tabout.appendChild(aboutTitle);\n\tabout.appendChild(textContainer);\n\ttextContainer.appendChild(aboutText);\n\n\treturn about;\n}\n\nfunction setBtn() {\n\tconst getMain = document.getElementById(\"main-content\");\n\n\twhile (getMain.firstChild) {\n\t\tgetMain.removeChild(getMain.firstChild);\n\t}\n}\n\nfunction loadHome() {\n\tconst getMainDiv = document.getElementById(\"main-content\");\n\n\tsetBtn();\n\n\tgetMainDiv.appendChild(createAbout());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initializer.js":
/*!************************************!*\
  !*** ./src/modules/initializer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id, text) {\n\tconst headerContainer = document.createElement(\"header\");\n\theaderContainer.setAttribute(\"id\", id);\n\n\tconst headerContent = document.createElement(\"h1\");\n\theaderContent.textContent = text;\n\n\theaderContainer.appendChild(headerContent);\n\n\treturn headerContainer;\n}\n\nfunction createNav() {\n\tconst navContainer = document.createElement(\"nav\");\n\n\tconst navUl = document.createElement(\"ul\");\n\n\tnavContainer.appendChild(navUl);\n\n\tconst navLink1 = document.createElement(\"a\");\n\tconst navLink2 = document.createElement(\"a\");\n\tconst navLink3 = document.createElement(\"a\");\n\n\tnavLink1.setAttribute(\"id\", \"home\");\n\tnavLink2.setAttribute(\"id\", \"menu\");\n\tnavLink3.setAttribute(\"id\", \"contact\");\n\n\tnavLink1.setAttribute(\"href\", \"#\");\n\tnavLink2.setAttribute(\"href\", \"#\");\n\tnavLink3.setAttribute(\"href\", \"#\");\n\n\tconst navLi1 = document.createElement(\"li\");\n\tconst navLi2 = document.createElement(\"li\");\n\tconst navLi3 = document.createElement(\"li\");\n\n\tnavLi1.appendChild(navLink1);\n\tnavLi2.appendChild(navLink2);\n\tnavLi3.appendChild(navLink3);\n\n\tnavLink1.innerHTML = \"Home\";\n\tnavLink2.innerHTML = \"Menu\";\n\tnavLink3.innerHTML = \"Contact\";\n\n\tnavUl.appendChild(navLi1);\n\tnavUl.appendChild(navLi2);\n\tnavUl.appendChild(navLi3);\n\n\treturn navContainer;\n}\n\nfunction createMain() {\n\tconst mainContent = document.createElement(\"div\");\n\tmainContent.setAttribute(\"id\", \"main-content\");\n\n\treturn mainContent;\n}\n\nfunction createFooter(text) {\n\tconst footerContainer = document.createElement(\"footer\");\n\tfooterContainer.setAttribute(\"id\", \"footer\");\n\n\tconst textFooter = document.createElement(\"p\");\n\ttextFooter.textContent = text;\n\n\tfooterContainer.appendChild(textFooter);\n\n\treturn footerContainer;\n}\n\nfunction loadPage() {\n\tconst content = document.getElementById(\"content\");\n\n\t//header\n\tconst header = createHeader(\"header\", \"Gusto Pizza\");\n\tcontent.appendChild(header);\n\n\t//nav\n\tconst nav = createNav(\n\t\t\"nav\",\n\t\t\"Home\",\n\t\t\"Menus\",\n\t\t\"Contact\",\n\t\t\"page-home\",\n\t\t\"page-menus\",\n\t\t\"page-contact\"\n\t);\n\tcontent.appendChild(nav);\n\n\t//mainContent\n\tconst mainContent = createMain();\n\tcontent.appendChild(mainContent);\n\n\t//footer\n\tconst footer = createFooter(\"Copyright © 2021 Melandry\");\n\tcontent.appendChild(footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initializer.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFood(src, text, price, alt, height, width) {\n\tconst food = document.createElement(\"div\");\n\tfood.setAttribute(\"class\", \"food\");\n\n\tconst img = document.createElement(\"img\");\n\timg.setAttribute(\"src\", src);\n\timg.setAttribute(\"alt\", alt);\n\timg.setAttribute(\"height\", height);\n\timg.setAttribute(\"width\", width);\n\n\tconst description = document.createElement(\"div\");\n\tdescription.classList.add(\"description\");\n\n\tconst foodName = document.createElement(\"h3\");\n\tfoodName.textContent = text;\n\n\tconst foodPrice = document.createElement(\"h2\");\n\tfoodPrice.textContent = price;\n\n\tdescription.appendChild(foodName);\n\tdescription.appendChild(foodPrice);\n\n\tfood.appendChild(img);\n\tfood.appendChild(description);\n\treturn food;\n}\n\nfunction setBtn() {\n\tconst getMain = document.getElementById(\"main-content\");\n\n\twhile (getMain.firstChild) {\n\t\tgetMain.removeChild(getMain.firstChild);\n\t}\n}\n\nfunction loadMenu() {\n\tconst getMainDiv = document.getElementById(\"main-content\");\n\n\tgetMainDiv.textContent = \"\";\n\tsetBtn();\n\n\tconst foods = [\n\t\tcreateFood(\n\t\t\t\"https://medias.delarte.fr/media/sys_master/images/hbe/h1f/8855982800926.png\",\n\t\t\t\"SPECIALE PIZZAIOLO\",\n\t\t\t\"10$\",\n\t\t\t\"Pizza Margarita\",\n\t\t\t\"400px\",\n\t\t\t\"500px\",\n\t\t),\n\t\tcreateFood(\n\t\t\t\"https://medias.delarte.fr/media/sys_master/images/hf1/h6d/8855990272030.png\",\n\t\t\t\"REGINA\",\n\t\t\t\"9$\",\n\t\t\t\"Pizza Margarita\",\n\t\t\t\"400px\",\n\t\t\t\"500px\",\n\t\t),\n\t\tcreateFood(\n\t\t\t\"https://medias.delarte.fr/media/sys_master/images/hdb/he8/8855994204190.png\",\n\t\t\t\"5 FORMAGGI\",\n\t\t\t\"8$\",\n\t\t\t\"Pizza Margarita\",\n\t\t\t\"400px\",\n\t\t\t\"500px\",\n\t\t),\n\t\tcreateFood(\n\t\t\t\"https://medias.delarte.fr/media/sys_master/images/h5e/hcf/8856958468126.png\",\n\t\t\t\"CARBONARA\",\n\t\t\t\"7$\",\n\t\t\t\"Pizza Margarita\",\n\t\t\t\"400px\",\n\t\t\t\"500px\",\n\t\t),\n\t];\n\n\tfoods.forEach((food) => {\n\t\tgetMainDiv.appendChild(food);\n\t});\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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