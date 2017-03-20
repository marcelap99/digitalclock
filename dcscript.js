

var clock = document.getElementById('digitalClock');
var clock_hours = document.getElementById('hourSpan');
var clock_minutes = document.getElementById('minuteSpan');
var clock_seconds = document.getElementById('secondSpan');
var body = document.getElementsByTagName('Body');


function spanHours() {
  var date = new Date();
  var hours = date.getHours();

  if(hours < 10) {
    clock_hours.innerHTML = '0'+ hours +':';
  }
  else {
    clock_hours.innerHTML = hours +':';
  }
  if(hours > 12) {
    clock_hours.innerHTML = hours - 12 +':';
    document.getElementById('ampm').innerHTML = "PM"
  }
  else if (hours >= 15 && hours<18){
    document.getElementById("greeting").style.backgroundImage = "url('IMG_0221-2.jpg')";
    message.innerHTML= "Good Afternoon!";
  }
}


function spanMinutes() {
  var date = new Date();
  if(date.getMinutes() < 10) {
    clock_minutes.innerHTML = '0'+date.getMinutes();
  } else {
    clock_minutes.innerHTML = date.getMinutes();
  }
}

function spanSeconds() {
  var date = new Date();
  if(date.getSeconds() < 10) {
    clock_seconds.innerHTML = '0'+date.getSeconds();
  } else {
    clock_seconds.innerHTML = date.getSeconds();
  }
}

window.setInterval(function() {
  spanHours();
  spanMinutes();
  spanSeconds();

},1000);
// 1000 is miliseconds = 1 second
