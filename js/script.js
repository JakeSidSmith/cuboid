'use strict';

var myCuboids;

$(document).ready(function () {
  myCuboids = [];
  myCuboids.push(cuboid.newCuboid());
  myCuboids.push(cuboid.newCuboid(0, 0, 50));
  myCuboids.push(cuboid.newCuboid(0, 0, 100));
  myCuboids.push(cuboid.newCuboid(0, 0, 150));

  for (var i = 0; i < myCuboids.length; i += 1) {
    myCuboids[i].texture('img/grass-side.png')
      .textureTop('img/grass-top.png')
      .textureBottom('img/grass-bottom.png');
  }

  $('.camera').append(myCuboids);

  setInterval(function () {
    for (var i = 0; i < myCuboids.length; i += 1) {
      var yRotation = myCuboids[i].rotateY();
      myCuboids[i].rotateX(0.5 * (i + 0.5) / 2)
        .rotateY(1 * (i + 0.5) / 2)
        .translateY(Math.cos(yRotation / 360 * 25 / 4) * 100 * i)
        .translateX(Math.sin(yRotation / 360 * 25 / 4) * 100 * i);
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
      myCuboids[i].apply();
    }
  }, 1000/60);
});
