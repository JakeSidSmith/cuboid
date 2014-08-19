'use strict';

var myCuboid;

$(document).ready(function () {
  myCuboid = cuboid.newCuboid();
  $('.viewport').append(myCuboid);

  setInterval(function () {
    myCuboid.rotateX(1)
      .rotateY(2)
      .translateY(Math.cos(myCuboid.rotateY() / 360 * 25 / 4) * 100)
      .translateX(Math.sin(myCuboid.rotateY() / 360 * 25 / 4) * 100);
  }, 1000/60);
});
