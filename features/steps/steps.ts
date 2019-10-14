import { deepEqual, equal } from "assert";
import { Given, Then, When } from "cucumber";
import { Direction, Hoover } from "../../index";

const init = {
  dirty: [[1, 1], [2, 2], [3, 3], [1, 2], [1, 4], [0, 2]],
  location: undefined,
  room: [5, 5]
};
// Happy path
Given("hoover initial location [{int},{int}]", function(x, y) {
  init.location = [x, y];
  this.hoover = new Hoover(init);
});

When("it moves {string}", function(direction) {
  this.hoover.move(Direction[direction] || direction);
});

Then("new location is [{int},{int}]", function(x, y) {
  deepEqual(this.hoover.getLocation(), [x, y]);
});

Then("dirty patch removed", function() {
  equal(this.hoover.dirty.length, init.dirty.length - 1);
});

Then("total cleaned {int} spots", function(cleaned) {
  equal(this.hoover.cleaned(), cleaned);
});
