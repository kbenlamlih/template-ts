var __extends = (this && this.__extends) || (function () {
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
export { Button };
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
export { ModeButton };
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
export { IncreaseButton };
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
export { LightButton };
