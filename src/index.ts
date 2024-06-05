import { ClockManager } from './class/ClockManager';

document.addEventListener('DOMContentLoaded', () => {
    const addWatchButton = document.getElementById('add-watch')!;
    const timezoneSelect = document.getElementById('timezone-select') as HTMLSelectElement;
    const formatButton = document.getElementById('format') as HTMLButtonElement;
    const resetButton = document.getElementById('reset-all') as HTMLButtonElement;
    const animate = document.getElementById('animate') as HTMLButtonElement;
    const stopAnimate = document.getElementById('stop') as HTMLButtonElement;



    const clockManager = new ClockManager();

    addWatchButton.addEventListener('click', () => {
        const selectedTimezone = parseInt(timezoneSelect.value);
        clockManager.addWatch(selectedTimezone);
    });

    formatButton.addEventListener('change', () => {
        const is24HourFormat = formatButton.value === '0';
        clockManager.changeTimeFormat(is24HourFormat);

    });

    resetButton.addEventListener('click', () => {
        clockManager.resetAllClocks();
    });

    animate.addEventListener('click', () => {
        clockManager.animateAllClocks();
    });

    stopAnimate.addEventListener('click', () => clockManager.stopAnimation());



});
