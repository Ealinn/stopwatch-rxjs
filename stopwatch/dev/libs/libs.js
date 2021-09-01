const secondsToHms = (secInput) => {
    const secs = Number(secInput);

    let h = Math.floor(secs / 3600);
    let m = Math.floor(secs % 3600 / 60);
    let s = Math.floor(secs % 3600 % 60);

    let hours = (h < 1 || h > 23) ? "00" : (h >=1 || h < 9) ? `0${h}` : h;
    let minutes = (m < 1) ? "00" : (m < 10) ? `0${m}` : m;
    let seconds = (s < 1) ? "00" : (s < 10) ? `0${s}` : s;
    
    let obj = {
        "hour": hours,
        "min": minutes,
        "sec": seconds
    };
    return obj;
}

export default secondsToHms;