'use strict';

var myCuboid;

$(document).ready(function () {
  myCuboid = cuboid.newCuboid(0, 0, 0, 100, 100, 100);
  $('.viewport').append(myCuboid);

  setInterval(function () {
    var yRotation = myCuboid.rotateY();
    myCuboid.rotateX(0.5)
      .rotateY(1)
      .translateY(Math.cos(yRotation / 360 * 25 / 4) * 100)
      .translateX(Math.sin(yRotation / 360 * 25 / 4) * 100)
      //.width(Math.max(Math.abs(Math.cos(yRotation / 360 * 25 / 4) * 200), 100))
      //.height(Math.max(Math.abs(Math.cos(yRotation / 360 * 25 / 8) * 400), 100));
      .size(
        yRotation % 10 === 0 ? Math.max(Math.random(), 0.2) * 100 : undefined,
        yRotation % 10 === 0 ? Math.max(Math.random(), 0.2) * 100 : undefined,
        yRotation % 10 === 0 ? Math.max(Math.random(), 0.2) * 100 : undefined
      );
  }, 1000/60);
});
