'use strict';

var myCuboid;

$(document).ready(function () {
  myCuboid = cuboid.newCuboid();
  $('.viewport').append(myCuboid);

  setInterval(function () {
    myCuboid.rotateX(1)
      .rotateY(2);
  }, 1000/60);
});
