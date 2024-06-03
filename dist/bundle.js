/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class/Button.ts":
/*!*****************************!*\
  !*** ./src/class/Button.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   IncreaseButton: () => (/* binding */ IncreaseButton),
/* harmony export */   LightButton: () => (/* binding */ LightButton),
/* harmony export */   ModeButton: () => (/* binding */ ModeButton)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Button = /** @class */ (function () {
    function Button(watchContainer, id, clickHandler) {
        this.element = document.createElement('button');
        this.element.id = id;
        this.clickHandler = clickHandler;
        this.watchContainer = watchContainer;
        this.element.addEventListener('click', this.handleClick.bind(this));
        this.watchContainer.appendChild(this.element);
    }
    Button.prototype.handleClick = function () {
        this.clickHandler();
    };
    return Button;
}());

var ModeButton = /** @class */ (function (_super) {
    __extends(ModeButton, _super);
    function ModeButton(watchContainer, watch) {
        var _this = _super.call(this, watchContainer, "mode", function () { return _this.changeMode(); }) || this;
        _this.element.classList.add("button-mode");
        _this.watch = watch;
        _this.mode = watch.mode;
        return _this;
    }
    ModeButton.prototype.changeMode = function () {
        this.mode = (this.mode + 1) % 3;
        this.watch.setMode(this.mode);
        if (this.mode = 0) {
            this.isPressed = true;
        }
        else {
            this.isPressed = false;
        }
    };
    return ModeButton;
}(Button));

var IncreaseButton = /** @class */ (function (_super) {
    __extends(IncreaseButton, _super);
    function IncreaseButton(watchContainer, watch) {
        var _this = _super.call(this, watchContainer, "changeIncreaseButton", function () { return _this.increaseTime(); }) || this;
        _this.element.classList.add("button-increase");
        _this.watch = watch;
        _this.time = watch.time;
        _this.mode = watch.mode;
        return _this;
    }
    IncreaseButton.prototype.increaseTime = function () {
        if (this.mode === 1) {
            this.time.increaseHours();
        }
        else if (this.mode === 2) {
            this.time.increaseMinutes();
        }
    };
    return IncreaseButton;
}(Button));

var LightButton = /** @class */ (function (_super) {
    __extends(LightButton, _super);
    function LightButton(watchContainer, watch) {
        var _this = _super.call(this, watchContainer, "changeColorButton", function () { return _this.toggleLight(); }) || this;
        _this.element.classList.add("button-light ");
        _this.timeDisplay = watch.timeDisplay;
        _this.isLightOn = watch.isLightOn;
        return _this;
    }
    LightButton.prototype.toggleLight = function () {
        this.isLightOn = !this.isLightOn;
        if (this.isLightOn) {
            this.timeDisplay.style.backgroundColor = 'red';
        }
        else {
            this.timeDisplay.style.backgroundColor = 'white';
        }
    };
    return LightButton;
}(Button));



/***/ }),

/***/ "./src/class/Time.ts":
/*!***************************!*\
  !*** ./src/class/Time.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Time: () => (/* binding */ Time)
/* harmony export */ });
var Time = /** @class */ (function () {
    function Time() {
        this.currentTime = new Date();
        this.lastEditedTime = null;
    }
    Time.prototype.tick = function () {
        this.currentTime.setSeconds(this.currentTime.getSeconds() + 1);
    };
    Time.prototype.setLastEditedTime = function () {
        this.lastEditedTime = new Date(this.currentTime.getTime());
    };
    Time.prototype.clearLastEditedTime = function () {
        if (this.lastEditedTime) {
            this.currentTime = new Date(this.lastEditedTime.getTime());
        }
        this.lastEditedTime = null;
    };
    Time.prototype.getTime = function () {
        return this.lastEditedTime ? this.lastEditedTime : this.currentTime;
    };
    Time.prototype.increaseHours = function () {
        if (this.lastEditedTime) {
            this.lastEditedTime.setHours(this.lastEditedTime.getHours() + 1);
        }
        else {
            this.currentTime.setHours(this.currentTime.getHours() + 1);
        }
    };
    Time.prototype.increaseMinutes = function () {
        if (this.lastEditedTime) {
            this.lastEditedTime.setMinutes(this.lastEditedTime.getMinutes() + 1);
        }
        else {
            this.currentTime.setMinutes(this.currentTime.getMinutes() + 1);
        }
    };
    return Time;
}());



/***/ }),

/***/ "./src/class/Watch.ts":
/*!****************************!*\
  !*** ./src/class/Watch.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Watch: () => (/* binding */ Watch)
/* harmony export */ });
/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Time */ "./src/class/Time.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/class/Button.ts");


var Watch = /** @class */ (function () {
    function Watch() {
        this.time = new _Time__WEBPACK_IMPORTED_MODULE_0__.Time();
        this.mode = 0; // 0: normal, 1: edit hours, 2: edit minutes
        // HTML contents 
        var content = document.getElementById('content');
        this.watchContainer = document.createElement("div");
        this.watchContainer.classList.add("watch");
        content.appendChild(this.watchContainer);
        // Watch Screen
        this.watchScreen = document.createElement("div");
        this.watchScreen.classList.add("watch-screen");
        this.watchContainer.appendChild(this.watchScreen);
        // Display Screen
        this.timeDisplay = document.createElement("div");
        this.timeDisplay.classList.add("time-display");
        this.watchScreen.appendChild(this.timeDisplay);
        this.isLightOn = false;
        this.intervalId = null;
        this.modeButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.ModeButton(this.watchContainer, this);
        this.increaseButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.IncreaseButton(this.watchContainer, this);
        this.lightButton = new _Button__WEBPACK_IMPORTED_MODULE_1__.LightButton(this.watchContainer, this);
        this.startTicking();
    }
    Watch.prototype.startTicking = function () {
        var _this = this;
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
        this.intervalId = window.setInterval(function () {
            if (_this.mode === 0) {
                _this.time.tick();
            }
            _this.updateTime();
        }, 1000);
    };
    Watch.prototype.updateTime = function () {
        this.displayTime(this.time.getTime());
    };
    Watch.prototype.setMode = function (mode) {
        this.mode = mode;
    };
    Watch.prototype.displayTime = function (time) {
        var hours = this.padNumber(time.getHours(), 2);
        var minutes = this.padNumber(time.getMinutes(), 2);
        var seconds = this.padNumber(time.getSeconds(), 2);
        this.timeDisplay.textContent = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    };
    Watch.prototype.increaseTime = function () {
        if (this.mode === 1) {
            this.time.increaseHours();
        }
        else if (this.mode === 2) {
            this.time.increaseMinutes();
        }
        this.updateTime();
    };
    Watch.prototype.padNumber = function (num, size) {
        var s = num.toString();
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    };
    return Watch;
}());



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Watch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Watch */ "./src/class/Watch.ts");
// Import the necessary classes

// Create a new instance of the Watch class when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    new _class_Watch__WEBPACK_IMPORTED_MODULE_0__.Watch();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map