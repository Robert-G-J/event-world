'use strict';

const Event = require('../src/Event.js')

describe("An Event", function() {
  it("has a numerical id", function() {
    var event = new Event();
    expect(event.id).toEqual(0);
  });
  it("has an integer>0 id that increments", function() {
    var event0 = new Event();
    var event1 = new Event();
    expect(event1.id - event0.id).toEqual(1);
  });
});
