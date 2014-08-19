'use strict';

(function () {

  var cuboid = {
    // Variables
    cuboids: [],
    // Methods
    init: undefined
  };

  cuboid.init = function () {
    cuboid.cuboids = $('.cuboid');
  };

  cuboid.newCuboid = function (x, y, z, w, h, d, rx, ry, rz) {
    var newCuboid = $('<div>').addClass('cuboid')
      .append($('<div>').addClass('front').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('back').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('top').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('bottom').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('left').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('right').append($('<div>').addClass('shading')));

    newCuboid.transforms = {};
    newCuboid.transforms.x = x || 0;
    newCuboid.transforms.y = y || 0;
    newCuboid.transforms.z = z || 0;
    newCuboid.transforms.w = w || 0;
    newCuboid.transforms.h = h || 0;
    newCuboid.transforms.d = d || 0;
    newCuboid.transforms.rx = rx || 0;
    newCuboid.transforms.ry = ry || 0;
    newCuboid.transforms.rz = rz || 0;

    var updateCuboid = function () {
      newCuboid.css('transform', function () {
        return 'translate3d(' + [newCuboid.transforms.x + 'px', newCuboid.transforms.y + 'px', newCuboid.transforms.z + 'px'].join(',') + ')' +
          'rotateX(' + newCuboid.transforms.rx + 'deg)' +
          'rotateY(' + newCuboid.transforms.ry + 'deg)' +
          'rotateZ(' + newCuboid.transforms.rz + 'deg)'
      }());
    };

    newCuboid.rotateX = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.rx += num;
        newCuboid.transforms.rx %= 360;
      } else {
        return newCuboid.transforms.rx;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.rotateY = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.ry += num;
        newCuboid.transforms.ry %= 360;
      } else {
        return newCuboid.transforms.ry;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.rotateZ = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.rz += num;
        newCuboid.transforms.rz %= 360;
      } else {
        return newCuboid.transforms.rz;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.rotationX = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.rx = num;
        newCuboid.transforms.rx %= 360;
      } else {
        return newCuboid.transforms.rx;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.rotationY = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.ry = num;
        newCuboid.transforms.ry %= 360;
      } else {
        return newCuboid.transforms.ry;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.rotationZ = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.rz = num;
        newCuboid.transforms.rz %= 360;
      } else {
        return newCuboid.transforms.rz;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.translateX = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.x = num;
      } else {
        return newCuboid.transforms.x;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.translateY = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.y = num;
      } else {
        return newCuboid.transforms.y;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.translateZ = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.z = num;
      } else {
        return newCuboid.transforms.z;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.moveX = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.x += num;
      } else {
        return newCuboid.transforms.x;
      }
      updateCuboid();
      return newCuboid;
    };


    newCuboid.moveY = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.y += num;
      } else {
        return newCuboid.transforms.y;
      }
      updateCuboid();
      return newCuboid;
    };


    newCuboid.moveZ = function (num) {
      if (num !== undefined) {
        newCuboid.transforms.z += num;
      } else {
        return newCuboid.transforms.z;
      }
      updateCuboid();
      return newCuboid;
    };

    newCuboid.move3d = function (x, y, z) {
      newCuboid.transforms.x += x !== undefined ? x : 0;
      newCuboid.transforms.y += y !== undefined ? y : 0;
      newCuboid.transforms.z += z !== undefined ? z : 0;
      updateCuboid();
      return newCuboid;
    };

    newCuboid.translate3d = function (x, y, z) {
      newCuboid.transforms.x = x !== undefined ? x : 0;
      newCuboid.transforms.y = y !== undefined ? y : 0;
      newCuboid.transforms.z = z !== undefined ? z : 0;
      updateCuboid();
      return newCuboid;
    };

    return newCuboid;
  };

  $(document).ready(cuboid.init);

  window.cuboid = cuboid;

})();
