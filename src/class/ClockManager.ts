import { Watch } from './Watch';
import { Vector2, Matrix3 } from './Maths';


export class ClockManager {
    watches: Watch[];
    animationInterval: number | undefined;


    constructor() {
        this.watches = [];
        this.animationInterval = undefined; 
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

    animateAllClocks() {

        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }

        this.animationInterval = setInterval(() => {
            this.watches.forEach((watch, index) => {
                const angle = Math.random() * 360;
                const scale = 0.5 + Math.random() * 1.5;
                const scaleDirection = Math.random() < 0.5 ? -1 : 1;

                const translationMatrix = Matrix3.translation(index * 100, 0);
                const rotationMatrix = Matrix3.rotation(angle);
                const scalingMatrix = Matrix3.scaling(scale, scale);

                const transformedVector = translationMatrix
                    .multiply(rotationMatrix)
                    .multiply(scalingMatrix)
                    .transformVector(new Vector2(0, 0));

                watch.setTransform(transformedVector, angle, scale, scaleDirection);
            });
        }, 16) as unknown as number; ; 
    }

    stopAnimation() {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = undefined;
        }
    }


}
