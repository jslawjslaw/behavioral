/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var writtenLexicalDecision;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./shared/components/container.js":
/*!****************************************!*\
  !*** ./shared/components/container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONTAINER\": () => (/* binding */ CONTAINER)\n/* harmony export */ });\nconst CONTAINER = jQuery('<div/>', {\n    id: 'container', \n    css: {\n        display: 'flex',\n        flexDirection: 'column',\n        minHeight: '100vh',\n        background: '#f0f0f0',\n        alignItems: 'center',\n        justifyContent: 'center',\n        fontFamiliy: 'Poppins,Verdana,sans-serif'\n    }\n})\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/container.js?");

/***/ }),

/***/ "./shared/components/inputDevices.js":
/*!*******************************************!*\
  !*** ./shared/components/inputDevices.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INPUT_DEVICE_CONTAINER\": () => (/* binding */ INPUT_DEVICE_CONTAINER),\n/* harmony export */   \"INPUT_DEVICE_LABEL_CONTAINER\": () => (/* binding */ INPUT_DEVICE_LABEL_CONTAINER)\n/* harmony export */ });\n\nconst DEVICE_LABEL_CSS = {\n    color: '#000000',\n    width: '15%',\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    textAlign: 'center',\n    fontSize: '30px'\n}\n\n\nconst DEVICE_BUTTON_CSS = {\n    width: '15%',\n    marginLeft: 'auto',\n    marginRight: 'auto'\n}\n\n\nconst INPUT_DEVICE_CONTAINER = jQuery('<div/>', {\n    id: 'inputDeviceContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginTop: 'auto'\n    }\n})\n\n\nconst TOUCHSCREEN_BUTTON = jQuery('<img/>', {\n    id: 'touchscreenButton', \n    css: DEVICE_BUTTON_CSS,\n    src: 'https://jslawjslaw.github.io/js-crlab/static/touchscreen.png',\n}).hover(\n    () => TOUCHSCREEN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => TOUCHSCREEN_BUTTON.css({background: 'transparent'})\n)\n\n\nconst TRACKPAD_BUTTON = jQuery('<img/>', {\n    id: 'trackpadButton',\n    css: DEVICE_BUTTON_CSS,\n    src: 'https://jslawjslaw.github.io/js-crlab/static/trackpad.png',\n}).hover(\n    () => TRACKPAD_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => TRACKPAD_BUTTON.css({background: 'transparent'})\n)\n\n\nconst MOUSE_BUTTON = jQuery('<img/>', {\n    id: 'mouseButton',\n    css: DEVICE_BUTTON_CSS,\n    src: 'https://jslawjslaw.github.io/js-crlab/static/computer-mouse.png',\n}).hover(\n    () => MOUSE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => MOUSE_BUTTON.css({background: 'transparent'})\n)\n\n\nconst OTHER_BUTTON = jQuery('<img/>', {\n    id: 'otherButton',\n    css: DEVICE_BUTTON_CSS,\n    src: 'https://jslawjslaw.github.io/js-crlab/static/joystick.png',\n}).hover(\n    () => OTHER_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => OTHER_BUTTON.css({background: 'transparent'})\n)\n\n\nconst INPUT_DEVICE_LABEL_CONTAINER = jQuery('<div/>', {id: 'inputDeviceLabelContainer', css: {\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'flex-end',\n    minWidth: '100%',\n    marginTop: '2.5%',\n    marginBottom: 'auto',\n}})\n\n\nconst MOUSE_LABEL = jQuery('<div/>', {id: 'mouseLabel', css: DEVICE_LABEL_CSS}).text('Mouse')\nconst TRACKPAD_LABEL = jQuery('<div/>', {id: 'trackpadLabel', css: DEVICE_LABEL_CSS,}).text('Trackpad')\nconst TOUCHSCREEN_LABEL = jQuery('<div/>', {id: 'touchscreenLabel', css: DEVICE_LABEL_CSS}).text('Touchscreen')\nconst OTHER_LABEL = jQuery('<div/>', {id: 'otherLabel', css: DEVICE_LABEL_CSS}).text('Other')\n\n\nINPUT_DEVICE_CONTAINER.append(MOUSE_BUTTON, TRACKPAD_BUTTON, TOUCHSCREEN_BUTTON, OTHER_BUTTON)\nINPUT_DEVICE_LABEL_CONTAINER.append(MOUSE_LABEL, TRACKPAD_LABEL,TOUCHSCREEN_LABEL, OTHER_LABEL)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/inputDevices.js?");

/***/ }),

/***/ "./shared/components/instructionButtons.js":
/*!*************************************************!*\
  !*** ./shared/components/instructionButtons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INSTRUCTION_BUTTON_CONTAINER\": () => (/* binding */ INSTRUCTION_BUTTON_CONTAINER)\n/* harmony export */ });\nconst INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginTop: 'auto',\n        marginBottom: '4vh'\n    }\n})\n\n\nconst NEXT_BUTTON = jQuery('<div/>', {\n    id: 'nextButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '2vw',\n        padding: '0.5em',\n        marginLeft: 'auto',\n        marginRight: '5vw'\n    \n    },\n    text: 'Next >>'\n}).hover(\n    () => NEXT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => NEXT_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nconst PREVIOUS_BUTTON = jQuery('<div/>', {\n    id: 'previousButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '2vw',\n        padding: '0.5em',\n        marginLeft: '5vw'\n    },\n    text: '<< Previous'\n}).hover(\n    () => PREVIOUS_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => PREVIOUS_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nINSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/instructionButtons.js?");

/***/ }),

/***/ "./shared/components/responseButtons.js":
/*!**********************************************!*\
  !*** ./shared/components/responseButtons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BUTTON_CONTAINER\": () => (/* binding */ BUTTON_CONTAINER),\n/* harmony export */   \"BUTTON_LABEL_CONTAINER\": () => (/* binding */ BUTTON_LABEL_CONTAINER)\n/* harmony export */ });\n\nconst BUTTON_CONTAINER = jQuery('<div/>', {id: 'buttonContainer', css: {\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'flex-end',\n    minWidth: '100%',\n    marginTop: '5%',\n}})\n\n\nconst GREEN_BUTTON = jQuery('<img/>', {\n    id: 'greenButton',\n    src: 'https://jslawjslaw.github.io/js-crlab/static/check.png',\n    css: {\n        marginLeft: 'auto',\n        marginRight: '2.5%',\n        padding: '1%',\n        width: '175px',\n        height: '175px',\n}}).hover(\n    () => GREEN_BUTTON.css({background: '#E3E3E3'}),\n    () => GREEN_BUTTON.css({background: 'transparent'})\n)\n\n\nconst RED_BUTTON = jQuery('<img/>', {\n    id: 'redButton',\n    src: 'https://jslawjslaw.github.io/js-crlab/static/remove.png',\n    css: {\n        marginLeft: '2.5%',\n        marginRight: 'auto',\n        padding: '1%',\n        width: '175px',\n        height: '175px',\n}}).hover(\n    () => RED_BUTTON.css({background: '#E3E3E3'}),\n    () => RED_BUTTON.css({background: 'transparent'})\n)\n\n\nconst BUTTON_LABEL_CONTAINER = jQuery('<div/>', {\n    id: 'labelContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginBottom: 'auto'\n    }\n})\n\n\nconst GREEN_LABEL = jQuery('<div/>', {\n    id: 'greenLabel', \n    css: {\n        color: '#000000',\n        marginLeft: 'auto',\n        marginRight: '2.5%',\n        padding: '1%',\n        justifyContent: 'center',\n        display: 'flex',\n        width: '175px',\n        height: '35px',\n        fontSize: '30px'\n    }\n}).text('Real word')\n\n\nconst RED_LABEL = jQuery('<div/>', {\n    id: 'redLabel', \n    css: {\n        color: '#000000',\n        marginLeft: '2.5%',\n        marginRight: 'auto',\n        padding: '1%',\n        justifyContent: 'center',\n        display: 'flex',\n        width: '175px',\n        height: '35px',\n        fontSize: '30px'\n    }\n}).text('Not a word')\n\n\nBUTTON_CONTAINER.append(GREEN_BUTTON, RED_BUTTON)\nBUTTON_LABEL_CONTAINER.append(GREEN_LABEL, RED_LABEL)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/responseButtons.js?");

/***/ }),

/***/ "./shared/components/textContainer.js":
/*!********************************************!*\
  !*** ./shared/components/textContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TEXT_CONTAINER\": () => (/* binding */ TEXT_CONTAINER)\n/* harmony export */ });\nconst TEXT_CONTAINER = jQuery(\"<div/>\", {\n    id: 'textContainer', \n    css: {\n        color: '#000000',\n        textAlign: 'center',\n        fontSize: '4vw',\n        minWidth: '100vw',\n        whiteSpace: 'pre-line',\n        lineHeight: '1.7em',\n        marginTop: 'auto',\n        marginBottom: 'auto'\n    }\n})\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/textContainer.js?");

/***/ }),

/***/ "./shared/screens/base.js":
/*!********************************!*\
  !*** ./shared/screens/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/container */ \"./shared/components/container.js\");\n\n\nclass Screen {\n    constructor(task) {\n        this.task = task\n        this.previousScreen = null\n        this.nextScreen = null\n        this.renderTime = null\n    }\n\n    get clickHandlers() {\n        return {}\n    }\n\n    render() {\n        _components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                component[setting](value)\n            }\n            _components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.updateClickHandlers()\n        this.renderTime = Date.now()\n    }\n\n    removeContainerClickHandler() {\n        _components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n    }\n\n    updateClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.click(callback)\n        }\n    }\n\n    updateText(text, css={fontSize: '4vw', fontColor: '#000000'}) {\n        jQuery('#textContainer').text(text).css(css)\n    }\n\n    inputDeviceClickHandler(inputDevice) {\n        this.task.inputDevice = inputDevice\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n\n    instructionButtonClickHandler(action) {\n        switch (action) {\n            case 'previous':\n                this.task.currentScreen = this.previousScreen\n                break\n            case 'next':\n                this.task.currentScreen = this.nextScreen\n                break\n        }\n        this.task.currentScreen.render()\n    }\n\n    containerClickHandler() {\n        if (Date.now() - this.renderTime > 500) {\n            this.removeContainerClickHandler()\n            this.task.currentScreen = this.task.trialScreen\n            this.task.currentScreen.render()\n        }\n    }\n}\n\n//# sourceURL=webpack://js-crlab/./shared/screens/base.js?");

/***/ }),

/***/ "./shared/screens/inputDevices.js":
/*!****************************************!*\
  !*** ./shared/screens/inputDevices.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputDevicesScreen\": () => (/* binding */ InputDevicesScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/inputDevices */ \"./shared/components/inputDevices.js\");\n/* harmony import */ var _components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/textContainer */ \"./shared/components/textContainer.js\");\n\n\n\n\nclass InputDevicesScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    components = new Map([\n        [_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_CONTAINER, {}],\n        [_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_LABEL_CONTAINER, {}],\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {\n            text: 'Please choose your input device to start.'\n        }],\n    ])\n\n    get clickHandlers() {\n        return {\n            mouseButton: () => this.inputDeviceClickHandler('mouse'),\n            trackpadButton: () => this.inputDeviceClickHandler('trackpad'),\n            touchscreenButton: () => this.inputDeviceClickHandler('touchscreen'),\n            otherButton: () => this.inputDeviceClickHandler('other'),\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/inputDevices.js?");

/***/ }),

/***/ "./written_lexical_decision/components/beginOrPractice.js":
/*!****************************************************************!*\
  !*** ./written_lexical_decision/components/beginOrPractice.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BEGIN_OR_PRACTICE_CONTAINER\": () => (/* binding */ BEGIN_OR_PRACTICE_CONTAINER)\n/* harmony export */ });\nconst BEGIN_OR_PRACTICE_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginTop: 'auto',\n        marginBottom: '4vh'\n    }\n})\n\n\nconst PRACTICE_BUTTON = jQuery('<div/>', {\n    id: 'practiceButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '2vw',\n        padding: '0.5em',\n        marginRight: 'auto',\n        marginLeft: '5vw'\n    \n    },\n    text: '<< PRACTICE'\n}).hover(\n    () => PRACTICE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => PRACTICE_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nconst BEGIN_BUTTON = jQuery('<div/>', {\n    id: 'beginButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '2vw',\n        padding: '0.5em',\n        marginRight: '5vw'\n    },\n    text: 'BEGIN >>'\n}).hover(\n    () => BEGIN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => BEGIN_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nBEGIN_OR_PRACTICE_CONTAINER.append(PRACTICE_BUTTON, BEGIN_BUTTON)\n\n\n\n//# sourceURL=webpack://js-crlab/./written_lexical_decision/components/beginOrPractice.js?");

/***/ }),

/***/ "./written_lexical_decision/screens/instructions.js":
/*!**********************************************************!*\
  !*** ./written_lexical_decision/screens/instructions.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InstructionsOne\": () => (/* binding */ InstructionsOne),\n/* harmony export */   \"InstructionsThree\": () => (/* binding */ InstructionsThree),\n/* harmony export */   \"InstructionsTwo\": () => (/* binding */ InstructionsTwo)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n\n\n\n\n\n\nclass InstructionsOne extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {\n            text: 'You will see a sequence of letters on the screen.\\nSome of these are real words.\\nOthers are not real words.\\n'\n        }],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass InstructionsTwo extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {\n            text: 'If the sequence IS a real word, click \\\"Real Word.\\\"\\nIf the sequence is NOT a real word, click \\\"Not a word.\\\"'\n        }],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_LABEL_CONTAINER, {}],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass InstructionsThree extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {\n            text: `Let's Practice.`\n        }],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./written_lexical_decision/screens/instructions.js?");

/***/ }),

/***/ "./written_lexical_decision/screens/transitions.js":
/*!*********************************************************!*\
  !*** ./written_lexical_decision/screens/transitions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BeginOrPracticeAgain\": () => (/* binding */ BeginOrPracticeAgain),\n/* harmony export */   \"Break\": () => (/* binding */ Break),\n/* harmony export */   \"Finished\": () => (/* binding */ Finished),\n/* harmony export */   \"Incorrect\": () => (/* binding */ Incorrect)\n/* harmony export */ });\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _components_beginOrPractice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/beginOrPractice */ \"./written_lexical_decision/components/beginOrPractice.js\");\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n\n\n\n\n\nclass BeginOrPracticeAgain extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: 'Begin or practice again?'}],\n        [_components_beginOrPractice__WEBPACK_IMPORTED_MODULE_1__.BEGIN_OR_PRACTICE_CONTAINER, {css: {fontSize: '4vw'}}]\n    ])\n\n    get clickHandlers() {\n        return {\n            practiceButton: () => this.handle('practice'),\n            beginButton: () => this.handle('begin')\n        }\n    }\n\n    handle(action) {\n        switch (action) {\n            case 'practice':\n                this.task.dataIndex = 0\n                break\n            case 'begin':\n                this.task.dataIndex++\n                break\n        }\n        this.task.newTrial()\n        this.task.currentScreen = this.task.trialScreen\n        this.task.currentScreen.render()\n    }\n}\n\n\nclass Break extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, \n            {\n                text: 'Take a break. Click or touch anywhere to continue.',\n                css: {color: '#0000FF', fontSize: '4vw'}\n            }\n        ]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler()}\n    }\n}\n\n\nclass Incorrect extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [\n            _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, \n            {\n                text: 'Incorrect, click or touch anywhere to try again.',\n                css: {color: '#FF0000', fontSize: '4vw'}\n            }\n        ]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler()}\n    }\n}\n\n\nclass Finished extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `You've completed this exercise!`}]\n    ])\n\n    render() {\n        setTimeout(() => this.task.submit())\n        super.render()\n    }\n} \n\n\n\n\n//# sourceURL=webpack://js-crlab/./written_lexical_decision/screens/transitions.js?");

/***/ }),

/***/ "./written_lexical_decision/screens/trial.js":
/*!***************************************************!*\
  !*** ./written_lexical_decision/screens/trial.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TrialScreen\": () => (/* binding */ TrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n\n\n\n\n\nclass TrialScreen extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: '+', css: {color: '#000000', fontSize: '7vw'}}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__.BUTTON_LABEL_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            greenButton: () => this.responseClickHandler('yes'),\n            redButton: () => this.responseClickHandler('no')\n        }\n    }\n\n    responseClickHandler(response) {\n        if (!this.task.inTrial) {\n            return\n        }\n        clearTimeout(this.timeoutID)\n        this.task.inTrial = false\n        this.task.currentTrial.responseTime = Date.now()\n        this.task.currentTrial.response = response\n        \n        const isCorrectResponse = this.task.currentTrial.correctResponse === response\n        const isPracticeRound = this.task.currentTrial.trialType === 'Practice'\n        const isLastPracticeRound = this.task.currentProcedure === 'showlastpractice'\n\n        if (isPracticeRound && !isCorrectResponse) {\n            this.task.currentScreen = this.task.incorrectScreen\n            this.task.newTrial()\n        } else if (isLastPracticeRound) {\n            this.task.currentScreen = this.task.beginOrPracticeAgainScreen\n        } else if (this.task.isDone) {\n            this.task.currentScreen = this.task.finishedScreen\n        } else {\n            this.task.dataIndex++\n            this.task.newTrial()\n        }\n        this.task.currentScreen.render()\n    }\n\n    render() {\n        super.render()\n        setTimeout(() => {\n            this.updateText(this.task.currentTrial.stimulus, {fontSize: '7vw'})\n            this.task.currentTrial.startTime = Date.now()\n            this.task.inTrial = true\n            this.timeoutID = setTimeout(() => this.responseClickHandler(null), 5000)\n        }, 500)\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./written_lexical_decision/screens/trial.js?");

/***/ }),

/***/ "./written_lexical_decision/task.js":
/*!******************************************!*\
  !*** ./written_lexical_decision/task.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/container */ \"./shared/components/container.js\");\n/* harmony import */ var _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/screens/inputDevices */ \"./shared/screens/inputDevices.js\");\n/* harmony import */ var _screens_instructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/instructions */ \"./written_lexical_decision/screens/instructions.js\");\n/* harmony import */ var _screens_trial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/trial */ \"./written_lexical_decision/screens/trial.js\");\n/* harmony import */ var _screens_transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/transitions */ \"./written_lexical_decision/screens/transitions.js\");\n/* harmony import */ var _trial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trial */ \"./written_lexical_decision/trial.js\");\n\n\n\n\n\n\n\n\nclass Task {\n\tconstructor(data, engine) {\n        this.engine = engine\n        this.trials = []\n        this.data = data\n        this.dataIndex = 0\n        this.inTrial = false\n\n        this.recordMouseMove = this.recordMouseMove.bind(this)\n\n        this.initializeScreens()\n        this.newTrial()\n\t}\n\n    initializeScreens() {\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER)\n        jQuery(document).mousemove(this.recordMouseMove)\n\n        this.trialScreen = new _screens_trial__WEBPACK_IMPORTED_MODULE_3__.TrialScreen(this)\n        this.incorrectScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_4__.Incorrect(this)\n        this.breakScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_4__.Break(this)\n        this.beginOrPracticeAgainScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_4__.BeginOrPracticeAgain(this)\n        this.finishedScreen = new _screens_transitions__WEBPACK_IMPORTED_MODULE_4__.Finished(this)\n        \n        const instructionScreens = [\n            new _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_1__.InputDevicesScreen(this), \n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_2__.InstructionsOne(this), \n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_2__.InstructionsTwo(this), \n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_2__.InstructionsThree(this),\n            this.trialScreen\n        ]\n\n        for (let i=0; i<instructionScreens.length; i++) {\n            if (i < instructionScreens.length - 1) {\n                instructionScreens[i].nextScreen = instructionScreens[i + 1]\n            }\n            if (i > 0) {\n                instructionScreens[i].previousScreen = instructionScreens[i - 1]\n            }\n             \n        }\n        this.currentScreen = instructionScreens[0]\n        this.currentScreen.render()\n    }\n\n    get currentTrial() {\n        return this.trials[this.trials.length - 1]\n    }\n\n    get currentProcedure() {\n        return this.data[this.dataIndex].Procedure\n    }\n\n    get isDone() {\n        return this.dataIndex === this.data.length - 1\n    }\n\n    newTrial() {\n        const config = this.data[this.dataIndex]\n\n        if (this.currentProcedure === 'showasbreak') {\n            this.currentScreen = this.breakScreen\n        } else {\n            this.trials.push(\n                new _trial__WEBPACK_IMPORTED_MODULE_5__.Trial(\n                    config.TrialType, \n                    config.word,\n                    config.Lexicality,\n                    config.CRESP,\n                    config.WordType,\n                    config.Frequency,\n                    config.Regularity,\n                    config.Imageability,\n                    config.PartOfSpeech\n                )\n            )\n        }\n        \n    }\n\n    recordMouseMove(event) {\n        if (this.inTrial) {\n            this.currentTrial.recordMouseMove(Date.now(), event.clientX, event.clientY)\n        }\n    }\n\n    submit() {\n        const responses = []\n        const responseTimes = []\n        const stimuli = []\n        const correctResponses = []\n        const trialTypes = []\n        const reactionTimes = []\n        const mouseMoveDurations = []\n        const mouseMoveDistances = []\n        const mouseMoveAverageVelocities = []\n        const wordTypes = []\n        const frequencies = []\n        const regularities = []\n        const imageabilities = []\n        const partsOfSpeech = []\n        this.trials.map((trial) => {\n            let reactionTime, duration, distance, avgVelocity \n            [reactionTime, duration, distance, avgVelocity] = trial.computeMousemoveStats()\n            responses.push(trial.response)\n            responseTimes.push(trial.responseTime - trial.startTime)\n            stimuli.push(trial.stimulus)\n            correctResponses.push(trial.correctResponse)\n            trialTypes.push(trial.trailType)\n            reactionTimes.push(reactionTime)\n            mouseMoveDurations.push(duration)\n            mouseMoveDistances.push(distance)\n            mouseMoveAverageVelocities.push(avgVelocity)\n            wordTypes.push(trial.wordType)\n            frequencies.push(trial.frequency)\n            regularities.push(trial.regularity)\n            imageabilities.push(trial.imageabilities)\n            partsOfSpeech.push(trial.partOfSpeech)\n        })\n\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            Qualtrics.SurveyEngine.setEmbeddedData('responses', responses.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('responseTimes', responseTimes.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('stimuli', stimuli.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('correctResponses', correctResponses.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('trialTypes', trialTypes.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent)\n            Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)\n            Qualtrics.SurveyEngine.setEmbeddedData('reactionTimes', reactionTimes.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDurations', mouseMoveDurations.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDistances', mouseMoveDistances.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveAverageVelocities', mouseMoveAverageVelocities.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('wordTypes', wordTypes.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('frequencies', frequencies.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('regularities', regularities.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('imageabilities', imageabilities.join(','))\n            Qualtrics.SurveyEngine.setEmbeddedData('partsOfSpeech', partsOfSpeech.join(','))\n\n            this.engine.clickNextButton()\n        }\n    }\n}\n\n//# sourceURL=webpack://js-crlab/./written_lexical_decision/task.js?");

/***/ }),

/***/ "./written_lexical_decision/trial.js":
/*!*******************************************!*\
  !*** ./written_lexical_decision/trial.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Trial\": () => (/* binding */ Trial)\n/* harmony export */ });\nclass Trial {\n    constructor(trialType, stimulus, lexicality, correctResponse, wordType, frequency, regularity, imageability, partOfSpeech) {\n        this.trialType = trialType\n        this.stimulus = stimulus\n        this.lexicality = lexicality\n        this.correctResponse = correctResponse\n        this.wordType = wordType\n        this.frequency = frequency\n        this.regularity = regularity\n        this.imageability = imageability\n        this.partOfSpeech = partOfSpeech\n        this.response = null\n        this.startTime = null\n        this.responseTime = null\n        this.mouseMoveTimes = []\n        this.mouseMoveXPositions = []\n        this.mouseMoveYPositions = []\n\n    }\n\n    recordMouseMove(time, xPosition, yPosition) {\n        this.mouseMoveTimes.push(time)\n        this.mouseMoveXPositions.push(xPosition)\n        this.mouseMoveYPositions.push(yPosition)\n    }\n\n    computeMousemoveStats() {\n        const reactionTime = this.mouseMoveTimes.length > 0 ? this.mouseMoveTimes[0] - this.startTime : null\n        let duration = 0\n        let distance = 0\n        let avgVelocity = null\n        let startTime = null\n        let startX = null\n        let startY = null\n        while (this.mouseMoveTimes.length > 0) {\n            let currentTime = this.mouseMoveTimes.shift() \n            let currentX = this.mouseMoveXPositions.shift()\n            let currentY = this.mouseMoveYPositions.shift()\n            if (startTime !== null || currentTime - startTime < 500) {\n                const aSquared = Math.pow(startX - currentX, 2)        \n                const bSquared = Math.pow(startY - currentY, 2)\n                distance += Math.round(Math.sqrt(aSquared + bSquared))\n                duration += currentTime - startTime\n                avgVelocity = (distance / duration).toFixed(3)\n            }\n            startTime = currentTime\n            startX = currentX\n            startY = currentY\n        }\n\n        return [reactionTime, duration, distance, avgVelocity]\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./written_lexical_decision/trial.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./written_lexical_decision/task.js");
/******/ 	writtenLexicalDecision = __webpack_exports__;
/******/ 	
/******/ })()
;