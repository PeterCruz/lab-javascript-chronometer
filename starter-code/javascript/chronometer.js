// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.setTime();
    this.currentTime++;
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function() {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    number = number.toString();
    if(number.length == 1) {
        return '0' + number;
    }
    return number;
};

Chronometer.prototype.setTime = function () {
    this.twoDigitsNumber(this.setMinutes());
    this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
