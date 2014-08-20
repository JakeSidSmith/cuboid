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
      .translateX(Math.sin(yRotation / 360 * 25 / 4) * 100);
      //.width(Math.max(Math.abs(Math.cos(yRotation / 360 * 25 / 4) * 200), 100))
      //.height(Math.max(Math.abs(Math.cos(yRotation / 360 * 25 / 8) * 400), 100));

    if (yRotation % 40 === 0) {
      myCuboid.size(
        Math.max(Math.random(), 0.2) * 100,
        Math.max(Math.random(), 0.2) * 100,
        Math.max(Math.random(), 0.2) * 100
      );
    }

    myCuboid.scale(1.01, 1.01, 1.01);
>>>>>>> Stashed changes
  }, 1000/60);
});
