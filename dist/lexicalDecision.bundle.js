/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var lexicalDecision;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lexicalDecision/components/audioContainer.js":
/*!******************************************************!*\
  !*** ./lexicalDecision/components/audioContainer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AUDIO_CONTAINER\": () => (/* binding */ AUDIO_CONTAINER),\n/* harmony export */   \"AUDIO_SOURCE\": () => (/* binding */ AUDIO_SOURCE)\n/* harmony export */ });\nconst AUDIO_CONTAINER = jQuery(\"<audio/>\", {\n    id: 'audioContainer',\n})\n\n\nconst AUDIO_SOURCE = jQuery(\"<source/>\", {\n    id: 'audioSource',\n    type: 'audio/wav'\n})\n\nAUDIO_CONTAINER.append(AUDIO_SOURCE)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./lexicalDecision/components/audioContainer.js?");

/***/ }),

/***/ "./lexicalDecision/screens/auditoryTrial.js":
/*!**************************************************!*\
  !*** ./lexicalDecision/screens/auditoryTrial.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuditoryTrialScreen\": () => (/* binding */ AuditoryTrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _baseTrial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseTrial */ \"./lexicalDecision/screens/baseTrial.js\");\n/* harmony import */ var _components_audioContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/audioContainer */ \"./lexicalDecision/components/audioContainer.js\");\n\n\n\n\n\n\nclass AuditoryTrialScreen extends _baseTrial__WEBPACK_IMPORTED_MODULE_2__.LexicalDecisionTrialScreen {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: '+', css: {fontSize: '60pt', color: '#000000', height: '90px'}}],\n        [_components_audioContainer__WEBPACK_IMPORTED_MODULE_3__.AUDIO_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__.BUTTON_LABEL_CONTAINER, {}]\n    ])\n\n    render() {\n        if (this.task.currentProcedure === 'showasbreak') {\n            this.task.currentScreen = this.task.breakScreen\n            this.task.currentScreen.render()\n            return\n        }\n\n        setTimeout(() => {\n            this.task.newTrial()\n            super.render()\n            _components_audioContainer__WEBPACK_IMPORTED_MODULE_3__.AUDIO_SOURCE.attr('src', this.task.currentTrial.audioSource)\n            _components_audioContainer__WEBPACK_IMPORTED_MODULE_3__.AUDIO_CONTAINER.off('ended')\n            _components_audioContainer__WEBPACK_IMPORTED_MODULE_3__.AUDIO_CONTAINER.on('ended', () => {\n                this.task.currentTrial.startTime = new Date()\n                this.task.inTrial = true\n                this.updateText('')\n                this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)\n            })\n            _components_audioContainer__WEBPACK_IMPORTED_MODULE_3__.AUDIO_CONTAINER[0].load()\n            _components_audioContainer__WEBPACK_IMPORTED_MODULE_3__.AUDIO_CONTAINER[0].play()\n        }, 250)\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./lexicalDecision/screens/auditoryTrial.js?");

/***/ }),

/***/ "./lexicalDecision/screens/baseTrial.js":
/*!**********************************************!*\
  !*** ./lexicalDecision/screens/baseTrial.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LexicalDecisionTrialScreen\": () => (/* binding */ LexicalDecisionTrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n\n\n\n\n\nclass LexicalDecisionTrialScreen extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    get clickHandlers() {\n        return {\n            greenButton: () => this.responseClickHandler('yes'),\n            redButton: () => this.responseClickHandler('no')\n        }\n    }\n\n    responseClickHandler(response) {\n        if (!this.task.inTrial) {\n            return\n        }\n        _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.GREEN_BUTTON.mouseout()\n        _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.RED_BUTTON.mouseout()\n        clearTimeout(this.timeoutID)\n        this.task.inTrial = false\n        this.task.currentTrial.responseTime = new Date()\n        this.task.currentTrial.Response = response\n        \n        const isCorrectResponse = this.task.currentTrial.CRESP === response\n        const isPracticeRound = this.task.currentTrial.TrialType === 'Practice'\n        const isLastPracticeRound = this.task.currentProcedure === 'showlastpractice'\n\n        if (isPracticeRound && !isCorrectResponse) {\n            this.task.currentScreen = this.task.incorrectScreen\n        } else if (isLastPracticeRound) {\n            this.task.currentScreen = this.task.beginOrPracticeAgainScreen\n        } else if (this.task.isDone) {\n            this.task.currentScreen = this.task.finishedScreen\n        } else if (response === 'NR') {\n            this.task.currentScreen = this.task.timeoutScreen\n        } else {\n            this.task.dataIndex++\n        }\n        this.task.currentScreen.render()\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./lexicalDecision/screens/baseTrial.js?");

/***/ }),

/***/ "./lexicalDecision/screens/instructions.js":
/*!*************************************************!*\
  !*** ./lexicalDecision/screens/instructions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InstructionsOne\": () => (/* binding */ InstructionsOne),\n/* harmony export */   \"InstructionsThree\": () => (/* binding */ InstructionsThree),\n/* harmony export */   \"InstructionsTwo\": () => (/* binding */ InstructionsTwo)\n/* harmony export */ });\n/* harmony import */ var _shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/instructionButtons */ \"./shared/components/instructionButtons.js\");\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/screens/base */ \"./shared/screens/base.js\");\n\n\n\n\n\n\nclass InstructionsOne extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    get components() {\n        let instructionText\n        switch (this.task.type) {\n            case 'auditory':\n                instructionText = 'You will hear a word.\\nSome of these words are real words.\\nOthers are not real words.'\n                break\n            case 'written':\n                instructionText = 'You will see a string of letters on the screen.\\nSome of these letter strings are real words.\\nOthers are not real words.\\n'\n                break\n        }\n        \n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {text: instructionText, css: {fontSize: '45pt'}}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass InstructionsTwo extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    get components() {\n        let instructionText\n        switch (this.task.type) {\n            case 'auditory':\n                instructionText = 'If the word IS a real word, touch \\\"Real word.\\\"\\nIf the word is NOT a real word, touch \\\"Not a word\\\"'\n                break\n            case 'written':\n                instructionText = 'If the letter string IS a real word, touch \\\"Real Word.\\\"\\nIf the letter string is NOT a real word, touch \\\"Not a word.\\\"'\n                break\n        }\n        \n        return new Map([\n            [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {\n                text: instructionText,\n                css: {fontSize: '40pt'}\n            }],\n            [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_CONTAINER, {}],\n            [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_1__.BUTTON_LABEL_CONTAINER, {}],\n            [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n        ])\n    }\n    \n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\nclass InstructionsThree extends _shared_screens_base__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {\n            text: `Let's Practice.`\n        }],\n        [_shared_components_instructionButtons__WEBPACK_IMPORTED_MODULE_0__.INSTRUCTION_BUTTON_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            nextButton: () => this.instructionButtonClickHandler('next'),\n            previousButton: () => this.instructionButtonClickHandler('previous')\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./lexicalDecision/screens/instructions.js?");

/***/ }),

/***/ "./lexicalDecision/screens/writtenTrial.js":
/*!*************************************************!*\
  !*** ./lexicalDecision/screens/writtenTrial.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WrittenTrialScreen\": () => (/* binding */ WrittenTrialScreen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/responseButtons */ \"./shared/components/responseButtons.js\");\n/* harmony import */ var _shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _baseTrial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseTrial */ \"./lexicalDecision/screens/baseTrial.js\");\n\n\n\n\n\nclass WrittenTrialScreen extends _baseTrial__WEBPACK_IMPORTED_MODULE_2__.LexicalDecisionTrialScreen {\n    components = new Map([\n        [_shared_components_textContainer__WEBPACK_IMPORTED_MODULE_1__.TEXT_CONTAINER, {text: '+', css: {color: '#000000', fontSize: '60pt'}}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__.BUTTON_CONTAINER, {}],\n        [_shared_components_responseButtons__WEBPACK_IMPORTED_MODULE_0__.BUTTON_LABEL_CONTAINER, {}]\n    ])\n\n    render() {\n        if (this.task.currentProcedure === 'showasbreak') {\n            this.task.currentScreen = this.task.breakScreen\n            this.task.currentScreen.render()\n            return\n        }\n        \n        this.task.newTrial()\n        super.render()\n        setTimeout(() => {\n            this.updateText(this.task.currentTrial.Item)\n            this.task.currentTrial.startTime = new Date()\n            this.task.inTrial = true\n            this.timeoutID = setTimeout(() => this.responseClickHandler('NR'), 5000)\n        }, 500)\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./lexicalDecision/screens/writtenTrial.js?");

/***/ }),

/***/ "./lexicalDecision/task.js":
/*!*********************************!*\
  !*** ./lexicalDecision/task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/screens/inputDevices */ \"./shared/screens/inputDevices.js\");\n/* harmony import */ var _screens_instructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/instructions */ \"./lexicalDecision/screens/instructions.js\");\n/* harmony import */ var _shared_screens_transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/screens/transitions */ \"./shared/screens/transitions.js\");\n/* harmony import */ var _screens_auditoryTrial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/auditoryTrial */ \"./lexicalDecision/screens/auditoryTrial.js\");\n/* harmony import */ var _screens_writtenTrial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/writtenTrial */ \"./lexicalDecision/screens/writtenTrial.js\");\n/* harmony import */ var _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/screens/participantID */ \"./shared/screens/participantID.js\");\n/* harmony import */ var _trial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trial */ \"./lexicalDecision/trial.js\");\n/* harmony import */ var _shared_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/task */ \"./shared/task.js\");\n\n\n\n\n\n\n\n\n\n\nclass Task extends _shared_task__WEBPACK_IMPORTED_MODULE_7__.BaseTask {\n\tconstructor(data, engine, type) {\n        super()\n        \n        this.engine = engine\n        this.trials = []\n        this.data = data\n        this.dataIndex = 0\n        this.inTrial = false\n        this.type = type\n\n        this.initializeScreens()\n\t}\n\n    initializeScreens() {\n        this.setupDOM()\n\n        this.trialScreen = this.type === 'auditory' ? new _screens_auditoryTrial__WEBPACK_IMPORTED_MODULE_3__.AuditoryTrialScreen(this) : new _screens_writtenTrial__WEBPACK_IMPORTED_MODULE_4__.WrittenTrialScreen(this)\n        this.incorrectScreen = new _shared_screens_transitions__WEBPACK_IMPORTED_MODULE_2__.Incorrect(this)\n        this.breakScreen = new _shared_screens_transitions__WEBPACK_IMPORTED_MODULE_2__.Break(this)\n        this.beginOrPracticeAgainScreen = new _shared_screens_transitions__WEBPACK_IMPORTED_MODULE_2__.BeginOrPracticeAgain(this)\n        this.finishedScreen = new _shared_screens_transitions__WEBPACK_IMPORTED_MODULE_2__.Finished(this)\n        this.timeoutScreen = new _shared_screens_transitions__WEBPACK_IMPORTED_MODULE_2__.TimeOut(this)\n        \n        this.instructionScreens = [\n            new _shared_screens_participantID__WEBPACK_IMPORTED_MODULE_5__.ParticipantIdScreen(this),\n            new _shared_screens_inputDevices__WEBPACK_IMPORTED_MODULE_0__.InputDevicesScreen(this), \n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_1__.InstructionsOne(this), \n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_1__.InstructionsTwo(this), \n            new _screens_instructions__WEBPACK_IMPORTED_MODULE_1__.InstructionsThree(this),\n            this.trialScreen\n        ]\n\n        this.setupInstructionScreens()\n    }\n\n    get currentTrial() {\n        return this.trials[this.trials.length - 1]\n    }\n\n    get currentProcedure() {\n        return this.data[this.dataIndex].Procedure\n    }\n\n    get isDone() {\n        return this.dataIndex === this.data.length - 1\n    }\n\n    newTrial() {\n        this.trials.push(new _trial__WEBPACK_IMPORTED_MODULE_6__.Trial(this.data[this.dataIndex]))        \n    }\n\n    submit() {\n        const columns = {\n            'ItemNum': [],\n            'Item': [],\n            'CRESP': [],\n            'TimedOut': [],\n            'RT': [],\n            'Accuracy': [],\n            'WordType': [],\n            'Frequency': [],\n            'Regularity': [],\n            'Imageability': [],\n            'PartofSpeech': [],\n            'Lexicality': [],\n            'Response': [],\n            'TrialType': [],\n            'Time': []\n        }\n        const mouseMoveDistances = []\n        const mouseMoveDurations = []\n        const mouseMoveAverageVelocities = []\n        const firstMouseMoves = []\n\n        this.trials.map((trial) => {\n            let firstMouseMove, duration, distance, avgVelocity \n            [firstMouseMove, duration, distance, avgVelocity] = trial.computeMousemoveStats()\n            firstMouseMoves.push(firstMouseMove)\n            mouseMoveDurations.push(duration)\n            mouseMoveDistances.push(distance)\n            mouseMoveAverageVelocities.push(avgVelocity)\n            \n            for (const [key, values] of Object.entries(columns)) {\n                values.push(trial[key])\n            }\n        })\n\n        if (window.location.host === \"georgetown.az1.qualtrics.com\") {\n            for (const [key, values] of Object.entries(columns)) {\n                Qualtrics.SurveyEngine.setEmbeddedData(key, values.join(';'))\n            }\n            Qualtrics.SurveyEngine.setEmbeddedData('userAgent', navigator.userAgent.replace(',', '|').replace(';','|'))\n            Qualtrics.SurveyEngine.setEmbeddedData('inputDevice', this.inputDevice)\n            Qualtrics.SurveyEngine.setEmbeddedData('SubjectID', this.participantID)\n            Qualtrics.SurveyEngine.setEmbeddedData('firstMouseMoves', firstMouseMoves.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDurations', mouseMoveDurations.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveDistances', mouseMoveDistances.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('mouseMoveAverageVelocities', mouseMoveAverageVelocities.join(';'))\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientFirstName', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientLastName', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('RecipientEmail', 'N/A')\n            Qualtrics.SurveyEngine.setEmbeddedData('ExternalReference', 'N/A')\n\n            this.engine.clickNextButton()\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./lexicalDecision/task.js?");

/***/ }),

/***/ "./lexicalDecision/trial.js":
/*!**********************************!*\
  !*** ./lexicalDecision/trial.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Trial\": () => (/* binding */ Trial)\n/* harmony export */ });\n/* harmony import */ var _shared_trial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/trial */ \"./shared/trial.js\");\n\n\nclass Trial extends _shared_trial__WEBPACK_IMPORTED_MODULE_0__.BaseTrial {\n    constructor(config) {\n        super()\n        this.ItemNum = config.ItemNum\n        this.TrialType = config.TrialType\n        this.Item = config.Item\n        this.Lexicality = config.Lexicality\n        this.CRESP = config.CRESP\n        this.WordType = config.WordType\n        this.Frequency = config.Frequency\n        this.Regularity = config.Regularity\n        this.Imageability = config.Imageability\n        this.PartofSpeech = config.PartofSpeech\n        this.Response = null\n        this.startTime = null\n        this.responseTime = null\n    }\n\n    get RT() {\n        return this.responseTime - this.startTime\n    }\n\n    get TimedOut() {\n        return this.Response === 'NR'\n    }\n\n    get Accuracy() {\n        return this.Response === this.CRESP ? 1 : 0\n    }\n\n    get Time() {\n        return this.startTime.toTimeString().split(' ')[0]\n    }\n\n    get audioSource() {\n        return `https://jslawjslaw.github.io/js-crlab/static/auditory_lexical_decision_normalized_wav_files/${this.Item}.wav`\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./lexicalDecision/trial.js?");

/***/ }),

/***/ "./shared/components/beginOrPractice.js":
/*!**********************************************!*\
  !*** ./shared/components/beginOrPractice.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BEGIN_OR_PRACTICE_CONTAINER\": () => (/* binding */ BEGIN_OR_PRACTICE_CONTAINER)\n/* harmony export */ });\nconst BEGIN_OR_PRACTICE_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginTop: 'auto',\n        marginBottom: '4vh',\n        fontFamily: 'Arial',\n        textAlign: 'center'\n    }\n})\n\n\nconst PRACTICE_BUTTON = jQuery('<div/>', {\n    id: 'practiceButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '25pt',\n        padding: '0.5em',\n        marginRight: 'auto',\n        marginLeft: '5vw'\n    \n    },\n    text: '<< Practice'\n}).hover(\n    () => PRACTICE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => PRACTICE_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nconst BEGIN_BUTTON = jQuery('<div/>', {\n    id: 'beginButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '25pt',\n        padding: '0.5em',\n        marginRight: '5vw'\n    },\n    text: 'Begin >>'\n}).hover(\n    () => BEGIN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => BEGIN_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nBEGIN_OR_PRACTICE_CONTAINER.append(PRACTICE_BUTTON, BEGIN_BUTTON)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/beginOrPractice.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INPUT_DEVICE_CONTAINER\": () => (/* binding */ INPUT_DEVICE_CONTAINER),\n/* harmony export */   \"INPUT_DEVICE_LABEL_CONTAINER\": () => (/* binding */ INPUT_DEVICE_LABEL_CONTAINER)\n/* harmony export */ });\n/* harmony import */ var _static_images_joystick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/joystick.png */ \"./static/images/joystick.png\");\n/* harmony import */ var _static_images_mouse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/mouse.png */ \"./static/images/mouse.png\");\n/* harmony import */ var _static_images_touchscreen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/touchscreen.png */ \"./static/images/touchscreen.png\");\n/* harmony import */ var _static_images_trackpad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/trackpad.png */ \"./static/images/trackpad.png\");\n\n\n\n\n\n\nconst DEVICE_LABEL_CSS = {\n    color: '#000000',\n    width: '15%',\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    textAlign: 'center',\n    fontSize: '30px'\n}\n\n\nconst DEVICE_BUTTON_CSS = {\n    width: '15%',\n    marginLeft: 'auto',\n    marginRight: 'auto'\n}\n\n\nconst INPUT_DEVICE_CONTAINER = jQuery('<div/>', {\n    id: 'inputDeviceContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginTop: 'auto'\n    }\n})\n\n\nconst TOUCHSCREEN_BUTTON = jQuery('<img/>', {\n    id: 'touchscreenButton', \n    css: DEVICE_BUTTON_CSS,\n    src: _static_images_touchscreen_png__WEBPACK_IMPORTED_MODULE_2__,\n}).hover(\n    () => TOUCHSCREEN_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => TOUCHSCREEN_BUTTON.css({background: 'transparent'})\n)\n\n\nconst TRACKPAD_BUTTON = jQuery('<img/>', {\n    id: 'trackpadButton',\n    css: DEVICE_BUTTON_CSS,\n    src: _static_images_trackpad_png__WEBPACK_IMPORTED_MODULE_3__,\n}).hover(\n    () => TRACKPAD_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => TRACKPAD_BUTTON.css({background: 'transparent'})\n)\n\n\nconst MOUSE_BUTTON = jQuery('<img/>', {\n    id: 'mouseButton',\n    css: DEVICE_BUTTON_CSS,\n    src: _static_images_mouse_png__WEBPACK_IMPORTED_MODULE_1__,\n}).hover(\n    () => MOUSE_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => MOUSE_BUTTON.css({background: 'transparent'})\n)\n\n\nconst OTHER_BUTTON = jQuery('<img/>', {\n    id: 'otherButton',\n    css: DEVICE_BUTTON_CSS,\n    src: _static_images_joystick_png__WEBPACK_IMPORTED_MODULE_0__,\n}).hover(\n    () => OTHER_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => OTHER_BUTTON.css({background: 'transparent'})\n)\n\n\nconst INPUT_DEVICE_LABEL_CONTAINER = jQuery('<div/>', {id: 'inputDeviceLabelContainer', css: {\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'flex-end',\n    minWidth: '100%',\n    marginTop: '2.5%',\n    marginBottom: 'auto',\n    fontFamily: 'Arial'\n}})\n\n\nconst MOUSE_LABEL = jQuery('<div/>', {id: 'mouseLabel', css: DEVICE_LABEL_CSS}).text('Mouse')\nconst TRACKPAD_LABEL = jQuery('<div/>', {id: 'trackpadLabel', css: DEVICE_LABEL_CSS,}).text('Trackpad')\nconst TOUCHSCREEN_LABEL = jQuery('<div/>', {id: 'touchscreenLabel', css: DEVICE_LABEL_CSS}).text('Touchscreen')\nconst OTHER_LABEL = jQuery('<div/>', {id: 'otherLabel', css: DEVICE_LABEL_CSS}).text('Other')\n\n\nINPUT_DEVICE_CONTAINER.append(MOUSE_BUTTON, TRACKPAD_BUTTON, TOUCHSCREEN_BUTTON, OTHER_BUTTON)\nINPUT_DEVICE_LABEL_CONTAINER.append(MOUSE_LABEL, TRACKPAD_LABEL,TOUCHSCREEN_LABEL, OTHER_LABEL)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/inputDevices.js?");

/***/ }),

/***/ "./shared/components/instructionButtons.js":
/*!*************************************************!*\
  !*** ./shared/components/instructionButtons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INSTRUCTION_BUTTON_CONTAINER\": () => (/* binding */ INSTRUCTION_BUTTON_CONTAINER)\n/* harmony export */ });\nconst INSTRUCTION_BUTTON_CONTAINER = jQuery('<div/>', {\n    id: 'instructionButtonContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginTop: 'auto',\n        marginBottom: '4vh',\n        fontFamily: 'Arial',\n        textAlign: 'center'\n    }\n})\n\n\nconst NEXT_BUTTON = jQuery('<div/>', {\n    id: 'nextButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '2vw',\n        padding: '0.5em',\n        marginLeft: 'auto',\n        marginRight: '5vw',\n    },\n    text: 'Next >>'\n}).hover(\n    () => NEXT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => NEXT_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nconst PREVIOUS_BUTTON = jQuery('<div/>', {\n    id: 'previousButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '2vw',\n        padding: '0.5em',\n        marginLeft: '5vw',\n    },\n    text: '<< Previous'\n}).hover(\n    () => PREVIOUS_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => PREVIOUS_BUTTON.css({background: '#A8A8A8'})\n)\n\n\nINSTRUCTION_BUTTON_CONTAINER.append(PREVIOUS_BUTTON, NEXT_BUTTON)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/instructionButtons.js?");

/***/ }),

/***/ "./shared/components/participantID.js":
/*!********************************************!*\
  !*** ./shared/components/participantID.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PARTICIPANT_ID_CONTAINER\": () => (/* binding */ PARTICIPANT_ID_CONTAINER)\n/* harmony export */ });\nconst PARTICIPANT_ID_CONTAINER = jQuery(\"<div/>\", {\n    id: 'participantIdContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        fontFamily: 'Arial',\n        alignItems: 'center',\n        minWidth: '100%'\n    }\n})\n\n\nconst PARTICIPANT_ID_LABEL = jQuery('<div/>', {\n    id: 'participantIdLabel',\n    text: 'Participant ID',\n    css: {\n        fontSize: '35pt',\n        color: '#000000',\n        marginLeft: 'auto',\n        marginRight: '20px'\n    }\n})\n\nconst PARTICIPANT_ID_INPUT = jQuery('<input/>', {\n    id: 'participantIdInput',\n    css: {\n        fontSize: '25pt',\n        height: '65px'\n    }\n})\n\n\nconst SUBMIT_BUTTON = jQuery('<div/>', {\n    id: 'submitButton',\n    css: {\n        color: '#000000',\n        background: '#A8A8A8',\n        fontSize: '25pt',\n        padding: '0.5em',\n        marginLeft: '20px',\n        marginRight: 'auto'\n    },\n    text: 'Submit'\n\n}).hover(\n    () => SUBMIT_BUTTON.css({background: '#B0B0B0', cursor: 'pointer'}),\n    () => SUBMIT_BUTTON.css({background: '#A8A8A8'})\n)\n\nPARTICIPANT_ID_CONTAINER.append(PARTICIPANT_ID_LABEL, PARTICIPANT_ID_INPUT, SUBMIT_BUTTON)\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/participantID.js?");

/***/ }),

/***/ "./shared/components/responseButtons.js":
/*!**********************************************!*\
  !*** ./shared/components/responseButtons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BUTTON_CONTAINER\": () => (/* binding */ BUTTON_CONTAINER),\n/* harmony export */   \"BUTTON_LABEL_CONTAINER\": () => (/* binding */ BUTTON_LABEL_CONTAINER),\n/* harmony export */   \"GREEN_BUTTON\": () => (/* binding */ GREEN_BUTTON),\n/* harmony export */   \"RED_BUTTON\": () => (/* binding */ RED_BUTTON)\n/* harmony export */ });\n/* harmony import */ var _static_images_check_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/check.png */ \"./static/images/check.png\");\n/* harmony import */ var _static_images_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/remove.png */ \"./static/images/remove.png\");\n\n\n\n\nconst BUTTON_CONTAINER = jQuery('<div/>', {id: 'buttonContainer', css: {\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'flex-end',\n    minWidth: '100%'\n}})\n\n\nconst GREEN_BUTTON = jQuery('<img/>', {\n    id: 'greenButton',\n    src: _static_images_check_png__WEBPACK_IMPORTED_MODULE_0__,\n    css: {\n        marginLeft: 'auto',\n        marginRight: '2.5%',\n        padding: '1%',\n        width: '200px',\n        height: '200px',\n}}).hover(\n    () => GREEN_BUTTON.css({background: '#E3E3E3'}),\n    () => GREEN_BUTTON.css({background: 'transparent'})\n)\n\n\nconst RED_BUTTON = jQuery('<img/>', {\n    id: 'redButton',\n    src: _static_images_remove_png__WEBPACK_IMPORTED_MODULE_1__,\n    css: {\n        marginLeft: '2.5%',\n        marginRight: 'auto',\n        padding: '1%',\n        width: '200px',\n        height: '200px',\n}}).hover(\n    () => RED_BUTTON.css({background: '#E3E3E3'}),\n    () => RED_BUTTON.css({background: 'transparent'})\n)\n\n\nconst BUTTON_LABEL_CONTAINER = jQuery('<div/>', {\n    id: 'labelContainer', \n    css: {\n        display: 'flex',\n        flexDirection: 'row',\n        justifyContent: 'flex-end',\n        minWidth: '100%',\n        marginBottom: 'auto',\n        fontFamily: 'Arial'\n    }\n})\n\n\nconst GREEN_LABEL = jQuery('<div/>', {\n    id: 'greenLabel', \n    css: {\n        color: '#000000',\n        marginLeft: 'auto',\n        marginRight: '2.5%',\n        padding: '1%',\n        justifyContent: 'center',\n        display: 'flex',\n        width: '200px',\n        height: '35px',\n        fontSize: '30px'\n    }\n}).text('Real word')\n\n\nconst RED_LABEL = jQuery('<div/>', {\n    id: 'redLabel', \n    css: {\n        color: '#000000',\n        marginLeft: '2.5%',\n        marginRight: 'auto',\n        padding: '1%',\n        justifyContent: 'center',\n        display: 'flex',\n        width: '200px',\n        height: '35px',\n        fontSize: '30px'\n    }\n}).text('Not a word')\n\n\nBUTTON_CONTAINER.append(GREEN_BUTTON, RED_BUTTON)\nBUTTON_LABEL_CONTAINER.append(GREEN_LABEL, RED_LABEL)\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/responseButtons.js?");

/***/ }),

/***/ "./shared/components/textContainer.js":
/*!********************************************!*\
  !*** ./shared/components/textContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TEXT_CONTAINER\": () => (/* binding */ TEXT_CONTAINER)\n/* harmony export */ });\nconst TEXT_CONTAINER = jQuery(\"<div/>\", {\n    id: 'textContainer', \n    css: {\n        color: '#000000',\n        textAlign: 'center',\n        fontSize: '60pt',\n        minWidth: '100vw',\n        whiteSpace: 'pre-line',\n        lineHeight: '1.7em',\n        marginTop: 'auto',\n        marginBottom: 'auto',\n        fontFamily: 'Arial'\n    }\n})\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/components/textContainer.js?");

/***/ }),

/***/ "./shared/screens/base.js":
/*!********************************!*\
  !*** ./shared/screens/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var _shared_components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/container */ \"./shared/components/container.js\");\n\n\n\nclass Screen {\n    constructor(task) {\n        this.task = task\n        this.previousScreen = null\n        this.nextScreen = null\n        this.renderTime = null\n    }\n\n    get clickHandlers() {\n        return {}\n    }\n\n    render() {\n        _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.children().detach()\n        for (const [component, settings] of this.components.entries()) {\n            for (const [setting, value] of Object.entries(settings)) {\n                component[setting](value)\n            }\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.append(component)\n        }\n        this.updateClickHandlers()\n        this.renderTime = Date.now()\n    }\n\n    updateClickHandlers() {\n        for (const [id, callback] of Object.entries(this.clickHandlers)) {\n            const element = jQuery(`#${id}`)\n            element.off('click')\n            element.click(callback)\n        }\n    }\n\n    updateText(text, css={fontSize: '60pt', fontColor: '#000000'}) {\n        jQuery('#textContainer').text(text).css(css)\n    }\n\n    inputDeviceClickHandler(inputDevice) {\n        this.task.inputDevice = inputDevice\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n\n    instructionButtonClickHandler(action) {\n        switch (action) {\n            case 'previous':\n                this.task.currentScreen = this.previousScreen\n                break\n            case 'next':\n                this.task.currentScreen = this.nextScreen\n                break\n        }\n        this.task.currentScreen.render()\n    }\n\n    containerClickHandler(nextItem) {\n        if (Date.now() - this.renderTime > 500) {\n            _shared_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER.off('click')\n            if (nextItem) {\n                this.task.dataIndex++\n            }\n            this.task.currentScreen = this.task.trialScreen\n            this.task.currentScreen.render()\n        }\n    }\n}\n\n//# sourceURL=webpack://js-crlab/./shared/screens/base.js?");

/***/ }),

/***/ "./shared/screens/inputDevices.js":
/*!****************************************!*\
  !*** ./shared/screens/inputDevices.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputDevicesScreen\": () => (/* binding */ InputDevicesScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_inputDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/inputDevices */ \"./shared/components/inputDevices.js\");\n/* harmony import */ var _components_textContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/textContainer */ \"./shared/components/textContainer.js\");\n\n\n\n\nclass InputDevicesScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    components = new Map([\n        [_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_CONTAINER, {}],\n        [_components_inputDevices__WEBPACK_IMPORTED_MODULE_1__.INPUT_DEVICE_LABEL_CONTAINER, {}],\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_2__.TEXT_CONTAINER, {\n            text: 'Please choose your input device to start.',\n            css: {fontSize: '45pt', marginBottom: 'auto'}\n        }],\n    ])\n\n    get clickHandlers() {\n        return {\n            mouseButton: () => this.inputDeviceClickHandler('mouse'),\n            trackpadButton: () => this.inputDeviceClickHandler('trackpad'),\n            touchscreenButton: () => this.inputDeviceClickHandler('touchscreen'),\n            otherButton: () => this.inputDeviceClickHandler('other'),\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/inputDevices.js?");

/***/ }),

/***/ "./shared/screens/participantID.js":
/*!*****************************************!*\
  !*** ./shared/screens/participantID.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParticipantIdScreen\": () => (/* binding */ ParticipantIdScreen)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n/* harmony import */ var _components_participantID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/participantID */ \"./shared/components/participantID.js\");\n\n\n\n\nclass ParticipantIdScreen extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    components = new Map([\n        [_components_participantID__WEBPACK_IMPORTED_MODULE_1__.PARTICIPANT_ID_CONTAINER, {}],\n    ])\n\n    get clickHandlers() {\n        return {submitButton: () => this.handleSubmit()}\n    }\n\n    handleSubmit() {\n        this.task.participantID = jQuery('#participantIdInput')[0].value\n        this.task.currentScreen = this.nextScreen\n        this.task.currentScreen.render()\n    }\n}\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/participantID.js?");

/***/ }),

/***/ "./shared/screens/transitions.js":
/*!***************************************!*\
  !*** ./shared/screens/transitions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BeginOrPracticeAgain\": () => (/* binding */ BeginOrPracticeAgain),\n/* harmony export */   \"Break\": () => (/* binding */ Break),\n/* harmony export */   \"Finished\": () => (/* binding */ Finished),\n/* harmony export */   \"Incorrect\": () => (/* binding */ Incorrect),\n/* harmony export */   \"TimeOut\": () => (/* binding */ TimeOut)\n/* harmony export */ });\n/* harmony import */ var _components_textContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/textContainer */ \"./shared/components/textContainer.js\");\n/* harmony import */ var _components_beginOrPractice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/beginOrPractice */ \"./shared/components/beginOrPractice.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./shared/screens/base.js\");\n\n\n\n\n\nclass BeginOrPracticeAgain extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `Any questions?\\nLet's begin`}],\n        [_components_beginOrPractice__WEBPACK_IMPORTED_MODULE_1__.BEGIN_OR_PRACTICE_CONTAINER, {}]\n    ])\n\n    get clickHandlers() {\n        return {\n            practiceButton: () => this.handle('practice'),\n            beginButton: () => this.handle('begin')\n        }\n    }\n\n    handle(action) {\n        switch (action) {\n            case 'practice':\n                this.task.dataIndex = 0\n                break\n            case 'begin':\n                this.task.dataIndex++\n                break\n        }\n        this.task.currentScreen = this.task.trialScreen\n        this.task.currentScreen.render()\n    }\n}\n\n\nclass Break extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [\n            _components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, \n            {\n                text: 'Take a break. Click or touch anywhere to continue.',\n                css: {color: '#0000FF'}\n            }\n        ]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(true)}\n    }\n}\n\n\nclass Incorrect extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [\n            _components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, \n            {\n                text: 'Incorrect, click or touch anywhere to try again.',\n                css: {color: '#FF0000'}\n            }\n        ]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(false)}\n    }\n}\n\n\nclass Finished extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: `You've completed this exercise!`}]\n    ])\n\n    render() {\n        setTimeout(() => this.task.submit())\n        super.render()\n    }\n}\n\n\nclass TimeOut extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    components = new Map([\n        [_components_textContainer__WEBPACK_IMPORTED_MODULE_0__.TEXT_CONTAINER, {text: 'Click or touch to continue.'}]\n    ])\n\n    get clickHandlers() {\n        return {container: () => this.containerClickHandler(true)}\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/screens/transitions.js?");

/***/ }),

/***/ "./shared/task.js":
/*!************************!*\
  !*** ./shared/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseTask\": () => (/* binding */ BaseTask)\n/* harmony export */ });\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container */ \"./shared/components/container.js\");\n\n\nclass BaseTask {\n\n    constructor() {\n        this.recordMouseMove = this.recordMouseMove.bind(this)\n        jQuery(document).mousemove(this.recordMouseMove)\n    }\n    \n    setupDOM() {\n        jQuery(\"#Questions\").remove()\n        jQuery(\"#PushStickyFooter\").remove()\n        jQuery(\"#Plug\").hide()\n        jQuery(\".SkinInner\").hide()\n        jQuery(\"#Wrapper\").append(_components_container__WEBPACK_IMPORTED_MODULE_0__.CONTAINER)\n    }\n\n    setupInstructionScreens() {\n        for (let i=0; i<this.instructionScreens.length; i++) {\n            if (i < this.instructionScreens.length - 1) {\n                this.instructionScreens[i].nextScreen = this.instructionScreens[i + 1]\n            }\n            if (i > 0) {\n                this.instructionScreens[i].previousScreen = this.instructionScreens[i - 1]\n            }\n        }\n\n        this.currentScreen = this.instructionScreens[0]\n        this.currentScreen.render()\n    }\n\n    recordMouseMove(event) {\n        if (this.inTrial) {\n            this.currentTrial.recordMouseMove(Date.now(), event.clientX, event.clientY)\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/task.js?");

/***/ }),

/***/ "./shared/trial.js":
/*!*************************!*\
  !*** ./shared/trial.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseTrial\": () => (/* binding */ BaseTrial)\n/* harmony export */ });\nclass BaseTrial {\n    constructor() {\n        this.mouseMoveTimes = []\n        this.mouseMoveXPositions = []\n        this.mouseMoveYPositions = []\n    }\n\n    recordMouseMove(time, xPosition, yPosition) {\n        this.mouseMoveTimes.push(time)\n        this.mouseMoveXPositions.push(xPosition)\n        this.mouseMoveYPositions.push(yPosition)\n    }\n\n    computeMousemoveStats() {\n        const firstMouseMoveTime = this.mouseMoveTimes.length > 0 ? this.mouseMoveTimes[0] - this.startTime : 'N/A'\n        let duration = 0\n        let distance = 0\n        let avgVelocity = 'N/A'\n        let startTime = null\n        let startX = null\n        let startY = null\n        while (this.mouseMoveTimes.length > 0) {\n            let currentTime = this.mouseMoveTimes.shift() \n            let currentX = this.mouseMoveXPositions.shift()\n            let currentY = this.mouseMoveYPositions.shift()\n            if (startTime !== null || currentTime - startTime < 500) {\n                const aSquared = Math.pow(startX - currentX, 2)        \n                const bSquared = Math.pow(startY - currentY, 2)\n                distance += Math.round(Math.sqrt(aSquared + bSquared))\n                duration += currentTime - startTime\n                avgVelocity = (distance / duration).toFixed(3)\n            }\n            startTime = currentTime\n            startX = currentX\n            startY = currentY\n        }\n\n        return [firstMouseMoveTime, duration, distance, avgVelocity]\n    }\n}\n\n\n\n\n//# sourceURL=webpack://js-crlab/./shared/trial.js?");

/***/ }),

/***/ "./static/images/check.png":
/*!*********************************!*\
  !*** ./static/images/check.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2b4bba181f6ccf84f84.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/check.png?");

/***/ }),

/***/ "./static/images/joystick.png":
/*!************************************!*\
  !*** ./static/images/joystick.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"09266e10475fea030f5d.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/joystick.png?");

/***/ }),

/***/ "./static/images/mouse.png":
/*!*********************************!*\
  !*** ./static/images/mouse.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61b7cb57c03ffecee052.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/mouse.png?");

/***/ }),

/***/ "./static/images/remove.png":
/*!**********************************!*\
  !*** ./static/images/remove.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3032c2aacc989cb25071.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/remove.png?");

/***/ }),

/***/ "./static/images/touchscreen.png":
/*!***************************************!*\
  !*** ./static/images/touchscreen.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fb8531231b5724cb5de.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/touchscreen.png?");

/***/ }),

/***/ "./static/images/trackpad.png":
/*!************************************!*\
  !*** ./static/images/trackpad.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20da724564a7fae46e8b.png\";\n\n//# sourceURL=webpack://js-crlab/./static/images/trackpad.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lexicalDecision/task.js");
/******/ 	lexicalDecision = __webpack_exports__;
/******/ 	
/******/ })()
;