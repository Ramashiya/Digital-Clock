var timeElement = document.getElementById("time");
var toggleFormatButton = document.getElementById("toggleFormat");

var is24HourFormat = false;

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();


  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (!is24HourFormat) {
    var period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    timeElement.innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
  } else {
    hours = hours < 10 ? "0" + hours : hours;
    timeElement.innerHTML = hours + ":" + minutes + ":" + seconds;
  }
}

toggleFormatButton.onclick = function () {
  is24HourFormat = !is24HourFormat;
  toggleFormatButton.innerHTML = is24HourFormat ? "Switch to 12-hour" : "Switch to 24-hour";
};

setInterval(updateClock, 1000); 
updateClock(); 