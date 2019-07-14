function formatTime(time) {
    let day = Math.floor(time / 1440);
    let  hour = Math.floor((time - day * 1440) / 60);
    let min = time % 60;
    return `${day} day, ${hour} hours, ${min} minutes`;
}
formatTime(57566);