import { Watch } from './Watch';

export class ClockManager {
    private watches: Watch[];

    constructor() {
        this.watches = [];
    }

    padNumber(num: number, size: number): string {
        let s = num.toString();
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    }

    addWatch(timeZone: number) {
        const is24HourFormat = true; 
        const newWatch = new Watch(timeZone, is24HourFormat);
        this.watches.push(newWatch);
    }

    changeTimeFormat(is24HourFormat: boolean) {
        this.watches.forEach(watch => watch.setTimeFormat(is24HourFormat));
    }

    resetAllClocks() {
        this.watches.forEach(watch => watch.resetTime());
    }

}
