'use strict';
var idCounter = 0;

function Event() {
  this.id = idCounter++;
}

module.exports = Event;
