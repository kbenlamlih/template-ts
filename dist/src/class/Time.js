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
export { Time };
