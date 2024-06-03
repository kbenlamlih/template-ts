import { ClockManager } from '../src/class/ClockManager';

describe('ClockManager class', () => {
  let clockManager: ClockManager;

  beforeEach(() => {
    document.body.innerHTML = '<div id="content"></div>';
    clockManager = new ClockManager();
  });

  it('should initialize correctly', () => {
    expect(clockManager).toBeTruthy();
  });

  it('should add a watch', () => {
    clockManager.addWatch(0); // Add watch with GMT+0 timezone
    expect(clockManager.watches.length).toBe(1);
  });

  it('should reset all watches', () => {
    const clockManager = new ClockManager();

    // Store the initial number of watches
    const initialWatchCount = clockManager.watches.length;

    // Reset all watches
    clockManager.resetAllClocks();

    // Verify the number of watches after reset
    expect(clockManager.watches.length).toBe(initialWatchCount);

    // Verify each watch has the correct time after reset
    clockManager.watches.forEach((watch) => {
      expect(watch.time.getTime().getHours()).toBe(new Date().getHours());
      expect(watch.time.getTime().getMinutes()).toBe(new Date().getMinutes());
    });
  });

  it('should change time format for all watches', () => {
    clockManager.addWatch(0);
    clockManager.addWatch(1);
    clockManager.changeTimeFormat(true);
    clockManager.watches.forEach((watch) => {
      expect(watch.is24HourFormat).toBe(true);
    });
  });
});
