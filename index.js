function displayTime() {
  var now = new Date();
  now = now.toLocaleTimeString();
  var eastern = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" });
  var london = new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London" });
  var tokyo = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });

  var clockDiv = document.getElementById("clock");
  var easternDiv = document.getElementById("eastern");
  var londonDiv = document.getElementById("london");
  var tokyoDiv = document.getElementById("tokyo");
  // var hour = now.getHours();
  // var minutes = now.getMinutes();
  // var seconds = now.getSeconds();
  // console.log(minutes.length);

  // hour = twelveHourDisplay(hour);
  // minutes = doubleDigitDisplay(minutes);
  // seconds = doubleDigitDisplay(seconds);

  clockDiv.innerText = now;
  easternDiv.innerText = eastern;
  londonDiv.innerText = london;
  tokyoDiv.innerText = tokyo;
}

// function doubleDigitDisplay(num) {
//   var numString = num.toString();
//   if (numString.length == 1) { 
//     return ("0" + numString);
//   } else {
//     return numString;
//   }
// }

// function twelveHourDisplay(num) {
//   if (num > 12) { 
//     return (num - 12); 
//   } else {
//     return num;
//   }
// }


window.setInterval(displayTime, 500);
