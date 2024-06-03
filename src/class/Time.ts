export class Time {
    currentTime: Date;
    lastEditedTime: Date | null;
    timeZone: number;
    is24HourFormat: boolean;

    constructor(timeZone: number,  is24HourFormat = true) {
        this.currentTime = new Date();
        this.lastEditedTime = null;
        this.timeZone = timeZone;
        this.is24HourFormat = true;
        this.updateTimeZone();
    }

    private updateTimeZone() {
        const offsetInMilliseconds = this.timeZone * 60 * 60 * 1000;
        this.currentTime = new Date(Date.now() + offsetInMilliseconds);
    }

    padNumber(num: number, size: number): string {
        let s = num.toString();
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    }

    tick() {
        this.currentTime.setSeconds(this.currentTime.getSeconds() + 1);
    }

    setLastEditedTime() {
        this.lastEditedTime = new Date(this.currentTime.getTime());
    }

    clearLastEditedTime() {
        if (this.lastEditedTime) {
            this.currentTime = new Date(this.lastEditedTime.getTime());
        }
        this.lastEditedTime = null;
    }

    getTime(): Date {
        return this.lastEditedTime ? this.lastEditedTime : this.currentTime;
    }

    getTimeZone(): number {
        return this.timeZone;
    }

    increaseHours() {
        if (this.lastEditedTime) {
            this.lastEditedTime.setHours(this.lastEditedTime.getHours() + 1);
        } else {
            this.currentTime.setHours(this.currentTime.getHours() + 1);
        }
    }

    increaseMinutes() {
        if (this.lastEditedTime) {
            this.lastEditedTime.setMinutes(this.lastEditedTime.getMinutes() + 1);
        } else {
            this.currentTime.setMinutes(this.currentTime.getMinutes() + 1);
        }
    }

    setTimeFormat(is24HourFormat: boolean) {
        this.is24HourFormat = is24HourFormat;
    }

    resetTime() {
        this.currentTime = new Date();
        this.updateTimeZone();
    }

    formatTime(date: Date): string {
        const hours = date.getHours();
        const minutes = this.padNumber(date.getMinutes(), 2);
        const seconds = this.padNumber(date.getSeconds(), 2);

        if (this.is24HourFormat) {
            return `${this.padNumber(hours, 2)}:${minutes}:${seconds}`;
        } else {
            const amPM = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours % 12 || 12;
            return `${this.padNumber(displayHours, 2)}:${minutes}:${seconds} ${amPM}`;
        }
    }

    getTimeString(): string {
        return this.formatTime(this.getTime());
    }
}
