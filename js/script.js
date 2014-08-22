'use strict';

var myCuboid;

$(document).ready(function () {
  myCuboid = cuboid.newCuboid();

  myCuboid.texture('img/grass-side.png')
    .textureTop('img/grass-top.png')
    .textureBottom('img/grass-bottom.png');

  $('.camera').append(myCuboid);

  setInterval(function () {
    var yRotation = myCuboid.rotateY();
    myCuboid.rotateX(0.5)
      .rotateY(1)
      .translateY(Math.cos(yRotation / 360 * 25 / 4) * 100)
      .translateX(Math.sin(yRotation / 360 * 25 / 4) * 100);
      //.width(Math.max(Math.abs(Math.cos(yRotation / 360 * 25 / 4) * 200), 100))
      //.height(Math.max(Math.abs(Math.cos(yRotation / 360 * 25 / 8) * 400), 100));

    /*if (yRotation % 40 === 0) {
      myCuboid.size(
        Math.max(Math.random(), 0.2) * 100,
        Math.max(Math.random(), 0.2) * 100,
        Math.max(Math.random(), 0.2) * 100
      );
    }

    myCuboid.scale(1.01, 1.01, 1.01);*/
    myCuboid.apply();
  }, 1000/60);
});
