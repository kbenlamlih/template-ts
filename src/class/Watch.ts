
import { Time } from './Time';
import { ModeButton, IncreaseButton, LightButton, ResetButton } from "./Button";

export class Watch {
    time: Time;
    mode: number;
    timeDisplay: HTMLDivElement;
    watchScreen: HTMLDivElement;
    watchContainer: HTMLDivElement;
    modeButton: ModeButton;
    increaseButton: IncreaseButton;
    lightButton: LightButton;
    resetButton: ResetButton;
    isLightOn: boolean;
    intervalId: number | null;
    is24HourFormat: boolean; 

    constructor(timeZone: number, is24HourFormat: boolean) {
        this.time = new Time(timeZone, is24HourFormat);
        this.mode = 0;
        this.is24HourFormat = is24HourFormat;


        const content = document.getElementById('content')!;

        this.watchContainer = document.createElement("div");
        this.watchContainer.classList.add("watch");

        content.appendChild(this.watchContainer);

        this.watchScreen = document.createElement("div");
        this.watchScreen.classList.add("watch-screen");

        this.watchContainer.appendChild(this.watchScreen);

        this.timeDisplay = document.createElement("div");
        this.timeDisplay.classList.add("time-display");

        this.watchScreen.appendChild(this.timeDisplay);

        this.isLightOn = false;
        this.intervalId = null;

        this.modeButton = new ModeButton(this.watchContainer, this);
        this.increaseButton = new IncreaseButton(this.watchContainer, this);
        this.lightButton = new LightButton(this.watchContainer, this);
        this.resetButton = new ResetButton(this.watchContainer, this);

        this.startTicking();
    }

    startTicking() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
        this.intervalId = window.setInterval(() => {
            if (this.mode === 0) {
                this.time.tick();
            }
            this.updateTime();
        }, 1000);
    }

    updateTime() {
        this.displayTime(this.time.getTimeString());
    }

    setMode(mode: number) {
        this.mode = mode;
    }

    displayTime(time: string) {
        this.timeDisplay.textContent = time;
    }

    increaseTime() {
        if (this.mode === 1) {
            this.time.increaseHours();
        } else if (this.mode === 2) {
            this.time.increaseMinutes();
        }
        this.updateTime();
    }

    setTimeFormat(is24HourFormat: boolean) {
        this.time.setTimeFormat(is24HourFormat);
        this.updateTime();
    }

    resetTime() {
        this.time.resetTime();
        this.updateTime();
    }

}
