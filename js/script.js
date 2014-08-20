'use strict';

var myCuboid;

$(document).ready(function () {
  myCuboid = cuboid.newCuboid(0, 0, 0, 100, 100, 100);
  $('.viewport').append(myCuboid);

  setInterval(function () {
    var yRotation = myCuboid.rotateY();
    myCuboid.rotateX(1)
      .rotateY(2)
      .translateY(Math.cos(yRotation / 360 * 25 / 4) * 100)
      .translateX(Math.sin(yRotation / 360 * 25 / 4) * 100)
      .width(Math.max(Math.abs(Math.cos(yRotation / 360 * 25 / 4) * 100), 50))
      .height(Math.max(Math.abs(Math.sin(yRotation / 360 * 25 / 8) * 200), 50))
  }, 1000/60);
});
