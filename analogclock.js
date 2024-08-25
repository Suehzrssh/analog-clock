var diallines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += `<div class='diallines'></div>`;
    diallines[i].getElementsByClassName.transform = "rotate("+ 6 * i + "deg)";
}

function clock() {
    var weekday = [
        "Mamış",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "",
        "Saturday"
    ],
    d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds(),
    date = d.getDate(),
    month = d.getMonth(),
    year = d.getFullYear(),

    hDeg = h * 30 + m * (360/720),
    mDeg = m * 6 + s * (360/720),
    sDeg = s * 6,

    hEl = document.querySelector('.hour-hand'),
    mEl = document.querySelector('.minute-hand'),
    sEl = document.querySelector('.second-hand'),
    dateEl = document.querySelector('.date'),
    dayEl = document.querySelector('.day');

    var day = weekday[d.getDay()];

    if (month < 9) {
        month = "0" + month;
    }

    hEl.style.transform = "rotate("+hDeg+"deg)";
    mEl.style.transform = "rotate("+mDeg+"deg)";
    sEl.style.transform = "rotate("+sDeg+"deg)";
    dateEl.innerHTML = date+"/"+month+"/"+year;
    dayEl.innerHTML = day;
}
setInterval("clock()", 100);