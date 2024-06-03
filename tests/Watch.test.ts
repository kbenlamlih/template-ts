import { Watch } from '../src/class/Watch';
import { Time } from '../src/class/Time';

describe('Watch class', () => {
  let watch: Watch;


  beforeEach(() => {
    document.body.innerHTML = '<div id="content"></div>';
  });

  it('should initialize correctly', () => {
    watch = new Watch(0, true); // GMT+0

    expect(watch).toBeInstanceOf(Watch);

  });

  it('should change mode', () => {
    watch.setMode(1);
    expect(watch.mode).toBe(1);
  });

  it('should increase time correctly in edit mode', () => {
    watch.setMode(1); // edit hours
    const initialHours = watch.time.getTime().getHours();
    watch.increaseTime();
    expect(watch.time.getTime().getHours()).toBe(initialHours + 1);

    watch.setMode(2); // edit minutes
    const initialMinutes = watch.time.getTime().getMinutes();
    watch.increaseTime();
    expect(watch.time.getTime().getMinutes()).toBe(initialMinutes + 1);
  });

  it('should reset time correctly', () => {
    watch.setMode(1);
    watch.increaseTime();
    watch.resetTime();
    expect(watch.time.getTime().getHours()).toBe(new Date().getHours());
    expect(watch.time.getTime().getMinutes()).toBe(new Date().getMinutes());
  });
});
