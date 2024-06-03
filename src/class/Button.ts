import { Time } from "./Time";
import { Watch } from "./Watch";

export class Button {
    element: HTMLButtonElement;
    watchContainer: HTMLDivElement;
    isPressed : boolean;
    clickHandler: () => void;
  
    constructor(watchContainer: HTMLDivElement,id: string, clickHandler: () => void) {
        this.element = document.createElement('button');
        this.element.id = id;
        this.clickHandler = clickHandler;
        this.watchContainer = watchContainer;
        this.element.addEventListener('click', this.handleClick.bind(this));  
        this.watchContainer.appendChild(this.element);
      }

    private handleClick() {
        this.clickHandler();
    }
    
}


export class ModeButton extends Button {

  watch: Watch;

  constructor(watchContainer: HTMLDivElement, watch: Watch) {
    super(watchContainer, "mode", () => this.changeMode());
    this.element.classList.add("button", "button-mode");
    this.element.textContent = "Mode";
    this.watch = watch;

  }

  public changeMode() {
    this.watch.setMode((this.watch.mode + 1) % 3);
}
}

export class IncreaseButton extends Button {

  watch: Watch;
  time: Time;
  mode : Number;

  constructor(watchContainer: HTMLDivElement, watch: Watch) {
    super(watchContainer, "changeIncreaseButton", () => this.increaseTime());
    this.element.classList.add("button", "button-increase");
    this.element.textContent = "Increase";
    this.watch = watch;
    this.time = watch.time;
    this.mode = watch.mode;

}

    public increaseTime() {
        this.watch.increaseTime();
    }
    
}

export class LightButton extends Button {

    watch: Watch;
    timeDisplay : HTMLElement;
    isLightOn : boolean;

    constructor(watchContainer: HTMLDivElement, watch: Watch) {
        super(watchContainer, "changeColorButton", () => this.toggleLight());
        this.element.classList.add("button", "button-light");
        this.element.textContent = "Light";

        this.timeDisplay = watch.timeDisplay;
        this.isLightOn = watch.isLightOn;

    }

    toggleLight() {
        this.isLightOn = !this.isLightOn;
        if (this.isLightOn) {
            this.timeDisplay.style.backgroundColor = 'red';
        } else {
            this.timeDisplay.style.backgroundColor = 'white';
        }
    }
}

export class ResetButton extends Button {    
     constructor(watchContainer: HTMLDivElement, watch: Watch) {
        super(watchContainer, "reset", () => watch.resetTime());
        this.element.classList.add("button", "button-reset");
        this.element.textContent = "Reset";
    }
    


}