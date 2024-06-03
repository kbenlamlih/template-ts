import { Time } from '../src/class/Time';

describe('Time', () => {
  test('should initialize with current time', () => {
    const time = new Time(0);
    const now = new Date();
    expect(time.getTime().getTime()).toBeCloseTo(now.getTime(), -2);
  });

  test('should increase hours', () => {
    const time = new Time(0);
    time.increaseHours();
    const expectedHours = new Date().getHours() + 1;
    expect(time.getTime().getHours()).toBe(expectedHours % 24);
  });

  test('should increase minutes', () => {
    const time = new Time(0);
    time.increaseMinutes();
    const expectedMinutes = new Date().getMinutes() + 1;
    expect(time.getTime().getMinutes()).toBe(expectedMinutes % 60);
  });

  test('should reset time', () => {
    const time = new Time(0);
    time.increaseHours();
    time.increaseMinutes();
    time.resetTime();
    const now = new Date();
    expect(time.getTime().getTime()).toBeCloseTo(now.getTime(), -2);
  });
});
