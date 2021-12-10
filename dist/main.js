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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initializer */ \"./src/modules/initializer.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n\r\n\r\nfunction addEvent() {\r\n\tconst homeBtn = document.getElementById(\"home\");\r\n\tconst contactBtn = document.getElementById(\"contact\");\r\n\tconst menuBtn = document.getElementById(\"menu\");\r\n\r\n\thomeBtn.addEventListener(\"click\", _modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\tcontactBtn.addEventListener(\"click\", _modules_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\tmenuBtn.addEventListener(\"click\", _modules_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n}\r\n\r\nfunction init() {\r\n\t(0,_modules_initializer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\taddEvent();\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n\tconst contact = document.createElement(\"div\");\r\n\tcontact.setAttribute(\"id\", \"contact-container\");\r\n\r\n\tconst aboutTitle = document.createElement(\"h2\");\r\n\taboutTitle.setAttribute(\"id\", \"contact-title\");\r\n\taboutTitle.textContent = \"Contact Us \";\r\n\r\n\tconst mailPreText = document.createElement(\"p\");\r\n\tmailPreText.setAttribute(\"id\", \"mailPreText\");\r\n\tmailPreText.innerHTML = \"My Mail Adresse :\";\r\n\r\n\tconst mailText = document.createElement(\"a\");\r\n\tmailText.setAttribute(\"id\", \"mailText\");\r\n\tmailText.setAttribute(\"href\", \"mailto:msmelandry@hotmail.fr\");\r\n\tmailText.innerHTML = \"msmelandry@hotmail.fr\";\r\n\r\n\tconst numberPreText = document.createElement(\"p\");\r\n\tnumberPreText.innerHTML = \"My Number :\";\r\n\tnumberPreText.setAttribute(\"id\", \"numberPreText\");\r\n\r\n\tconst numberText = document.createElement(\"p\");\r\n\tnumberText.innerHTML = \"+33611792551\";\r\n\tnumberText.setAttribute(\"id\", \"numberText\");\r\n\r\n\tcontact.appendChild(aboutTitle);\r\n\tcontact.appendChild(mailPreText);\r\n\tcontact.appendChild(mailText);\r\n\tcontact.appendChild(numberPreText);\r\n\tcontact.appendChild(numberText);\r\n\r\n\treturn contact;\r\n}\r\n\r\nfunction setBtn() {\r\n\tconst getMain = document.getElementById(\"main-content\");\r\n\r\n\twhile (getMain.firstChild) {\r\n\t\tgetMain.removeChild(getMain.firstChild);\r\n\t}\r\n}\r\n\r\nfunction loadContact() {\r\n\tconst getMainDiv = document.getElementById(\"main-content\");\r\n\r\n\tsetBtn();\r\n\r\n\tgetMainDiv.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\r\n\tconst about = document.createElement(\"div\");\r\n\tabout.setAttribute(\"id\", \"about\");\r\n\r\n\tconst aboutTitle = document.createElement(\"h2\");\r\n\taboutTitle.textContent = \"ABOUT\";\r\n\r\n\tconst textContainer = document.createElement(\"div\");\r\n\ttextContainer.setAttribute(\"id\", \"textContainer\");\r\n\r\n\tconst aboutText = document.createElement(\"p\");\r\n\taboutText.textContent =\r\n\t\t\"Lorem ipsum dolor sit amet. Et reprehenderit magni a sunt exercitationem aut doloremque in beatae galisum et nesciunt placeat et iusto maxime et facilis dolorum? Ut quas harum id odio rerum qui inventore expedita sed placeat explicabo! Sed modi excepturi sed repellat perferendis At consequuntur reiciendis ut quam totam. Vel voluptatem doloribus vel sapiente minima ut omnis omnis aut numquam dolorum est soluta itaque.\";\r\n\r\n\tabout.appendChild(aboutTitle);\r\n\tabout.appendChild(textContainer);\r\n\ttextContainer.appendChild(aboutText);\r\n\r\n\treturn about;\r\n}\r\n\r\nfunction setBtn() {\r\n\tconst getMain = document.getElementById(\"main-content\");\r\n\r\n\twhile (getMain.firstChild) {\r\n\t\tgetMain.removeChild(getMain.firstChild);\r\n\t}\r\n}\r\n\r\nfunction loadHome() {\r\n\tconst getMainDiv = document.getElementById(\"main-content\");\r\n\r\n\tsetBtn();\r\n\r\n\tgetMainDiv.appendChild(createAbout());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initializer.js":
/*!************************************!*\
  !*** ./src/modules/initializer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id, text) {\r\n\tconst headerContainer = document.createElement(\"header\");\r\n\theaderContainer.setAttribute(\"id\", id);\r\n\r\n\tconst headerContent = document.createElement(\"h1\");\r\n\theaderContent.textContent = text;\r\n\r\n\theaderContainer.appendChild(headerContent);\r\n\r\n\treturn headerContainer;\r\n}\r\n\r\nfunction createNav() {\r\n\tconst navContainer = document.createElement(\"nav\");\r\n\r\n\tconst navUl = document.createElement(\"ul\");\r\n\r\n\tnavContainer.appendChild(navUl);\r\n\r\n\tconst navLink1 = document.createElement(\"a\");\r\n\tconst navLink2 = document.createElement(\"a\");\r\n\tconst navLink3 = document.createElement(\"a\");\r\n\r\n\tnavLink1.setAttribute(\"id\", \"home\");\r\n\tnavLink2.setAttribute(\"id\", \"menu\");\r\n\tnavLink3.setAttribute(\"id\", \"contact\");\r\n\r\n\tnavLink1.setAttribute(\"href\", \"#\");\r\n\tnavLink2.setAttribute(\"href\", \"#\");\r\n\tnavLink3.setAttribute(\"href\", \"#\");\r\n\r\n\tconst navLi1 = document.createElement(\"li\");\r\n\tconst navLi2 = document.createElement(\"li\");\r\n\tconst navLi3 = document.createElement(\"li\");\r\n\r\n\tnavLi1.appendChild(navLink1);\r\n\tnavLi2.appendChild(navLink2);\r\n\tnavLi3.appendChild(navLink3);\r\n\r\n\tnavLink1.innerHTML = \"Home\";\r\n\tnavLink2.innerHTML = \"Menu\";\r\n\tnavLink3.innerHTML = \"Contact\";\r\n\r\n\tnavUl.appendChild(navLi1);\r\n\tnavUl.appendChild(navLi2);\r\n\tnavUl.appendChild(navLi3);\r\n\r\n\treturn navContainer;\r\n}\r\n\r\nfunction createMain() {\r\n\tconst mainContent = document.createElement(\"div\");\r\n\tmainContent.setAttribute(\"id\", \"main-content\");\r\n\r\n\treturn mainContent;\r\n}\r\n\r\nfunction createFooter(text) {\r\n\tconst footerContainer = document.createElement(\"footer\");\r\n\tfooterContainer.setAttribute(\"id\", \"footer\");\r\n\r\n\tconst textFooter = document.createElement(\"p\");\r\n\ttextFooter.textContent = text;\r\n\r\n\tfooterContainer.appendChild(textFooter);\r\n\r\n\treturn footerContainer;\r\n}\r\n\r\nfunction loadPage() {\r\n\tconst content = document.getElementById(\"content\");\r\n\r\n\t//header\r\n\tconst header = createHeader(\"header\", \"Gusto Pizza\");\r\n\tcontent.appendChild(header);\r\n\r\n\t//nav\r\n\tconst nav = createNav(\r\n\t\t\"nav\",\r\n\t\t\"Home\",\r\n\t\t\"Menus\",\r\n\t\t\"Contact\",\r\n\t\t\"page-home\",\r\n\t\t\"page-menus\",\r\n\t\t\"page-contact\"\r\n\t);\r\n\tcontent.appendChild(nav);\r\n\r\n\t//mainContent\r\n\tconst mainContent = createMain();\r\n\tcontent.appendChild(mainContent);\r\n\r\n\t//footer\r\n\tconst footer = createFooter(\"Copyright © 2021 Melandry\");\r\n\tcontent.appendChild(footer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initializer.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFood(src, text, price, alt, height, width) {\r\n\tconst food = document.createElement(\"div\");\r\n\tfood.setAttribute(\"class\", \"food\");\r\n\r\n\tconst img = document.createElement(\"img\");\r\n\timg.setAttribute(\"src\", src);\r\n\timg.setAttribute(\"alt\", alt);\r\n\timg.setAttribute(\"height\", height);\r\n\timg.setAttribute(\"width\", width);\r\n\r\n\tconst description = document.createElement(\"div\");\r\n\tdescription.classList.add(\"description\");\r\n\r\n\tconst foodName = document.createElement(\"h3\");\r\n\tfoodName.textContent = text;\r\n\r\n\tconst foodPrice = document.createElement(\"h2\");\r\n\tfoodPrice.textContent = price;\r\n\r\n\tdescription.appendChild(foodName);\r\n\tdescription.appendChild(foodPrice);\r\n\r\n\tfood.appendChild(img);\r\n\tfood.appendChild(description);\r\n\treturn food;\r\n}\r\n\r\nfunction setBtn() {\r\n\tconst getMain = document.getElementById(\"main-content\");\r\n\r\n\twhile (getMain.firstChild) {\r\n\t\tgetMain.removeChild(getMain.firstChild);\r\n\t}\r\n}\r\n\r\nfunction loadMenu() {\r\n\tconst getMainDiv = document.getElementById(\"main-content\");\r\n\r\n\tgetMainDiv.textContent = \"\";\r\n\tsetBtn();\r\n\r\n\tconst foods = [\r\n\t\tcreateFood(\r\n\t\t\t\"https://media.gettyimages.com/photos/directly-above-shot-of-pizza-picture-id1183163714?k=20&m=1183163714&s=612x612&w=0&h=QDSJMt2nJwAvme_sccLNfSOs6JP2GTOgiOR2lnoLFqw=\",\r\n\t\t\t\"Pizza Margarita\",\r\n\t\t\t\"10$\",\r\n\t\t\t\"Pizza Margarita\",\r\n\t\t\t\"400px\",\r\n\t\t\t\"500px\"\r\n\t\t),\r\n\t\tcreateFood(\r\n\t\t\t\"https://media-cdn.tripadvisor.com/media/photo-s/17/31/41/ff/bresaola.jpg\",\r\n\t\t\t\"Pizza Margarita\",\r\n\t\t\t\"9$\",\r\n\t\t\t\"Pizza Margarita\",\r\n\t\t\t\"400px\",\r\n\t\t\t\"500px\"\r\n\t\t),\r\n\t\tcreateFood(\r\n\t\t\t\"https://media-cdn.tripadvisor.com/media/photo-s/0d/bf/9f/67/dsc-1160-largejpg.jpg\",\r\n\t\t\t\"Pizza Margarita\",\r\n\t\t\t\"8$\",\r\n\t\t\t\"Pizza Margarita\",\r\n\t\t\t\"400px\",\r\n\t\t\t\"500px\"\r\n\t\t),\r\n\t\tcreateFood(\r\n\t\t\t\"https://img2.freepng.fr/20180206/rbw/kisspng-new-york-style-pizza-submarine-sandwich-french-fri-pizza-slice-png-file-5a795dc0c18fd0.6621830415179032967928.jpg\",\r\n\t\t\t\"Pizza Margarita\",\r\n\t\t\t\"7$\",\r\n\t\t\t\"Pizza Margarita\",\r\n\t\t\t\"400px\",\r\n\t\t\t\"500px\"\r\n\t\t),\r\n\t];\r\n\r\n\tfoods.forEach((food) => {\r\n\t\tgetMainDiv.appendChild(food);\r\n\t});\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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