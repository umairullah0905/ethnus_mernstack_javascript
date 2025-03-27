function showDate() {
    let currentDate = new Date();
    document.getElementById("date").innerText = currentDate.toDateString();
}

function showTime() {
    let currentTime = new Date();
    document.getElementById("time").innerText = currentTime.toLocaleTimeString();
}
