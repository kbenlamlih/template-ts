import { Time } from './Time';
import { ModeButton, IncreaseButton, LightButton } from "./Button";
var Watch = /** @class */ (function () {
    function Watch() {
        this.time = new Time();
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
        this.modeButton = new ModeButton(this.watchContainer, this);
        this.increaseButton = new IncreaseButton(this.watchContainer, this);
        this.lightButton = new LightButton(this.watchContainer, this);
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
export { Watch };
