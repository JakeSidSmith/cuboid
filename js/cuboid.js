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

    var transforms = {
      x: x || 0,
      y: y || 0,
      z: z || 0,
      w: w !== undefined ? w : 100,
      h: h !== undefined ? h : 100,
      d: d !== undefined ? d : 100,
      rx: rx || 0,
      ry: ry || 0,
      rz: rz || 0
    };

    var updateTransforms = function () {
      newCuboid.css('transform', function () {
        return 'translate3d(' + [transforms.x + 'px', transforms.y + 'px', transforms.z + 'px'].join(',') + ')' +
          'rotateX(' + transforms.rx + 'deg)' +
          'rotateY(' + transforms.ry + 'deg)' +
          'rotateZ(' + transforms.rz + 'deg)'
      }());
    };

    newCuboid.rotateX = function (num) {
      if (num !== undefined) {
        transforms.rx += num;
        transforms.rx %= 360;
      } else {
        return transforms.rx;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.rotateY = function (num) {
      if (num !== undefined) {
        transforms.ry += num;
        transforms.ry %= 360;
      } else {
        return transforms.ry;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.rotateZ = function (num) {
      if (num !== undefined) {
        transforms.rz += num;
        transforms.rz %= 360;
      } else {
        return transforms.rz;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.rotationX = function (num) {
      if (num !== undefined) {
        transforms.rx = num;
        transforms.rx %= 360;
      } else {
        return transforms.rx;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.rotationY = function (num) {
      if (num !== undefined) {
        transforms.ry = num;
        transforms.ry %= 360;
      } else {
        return transforms.ry;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.rotationZ = function (num) {
      if (num !== undefined) {
        transforms.rz = num;
        transforms.rz %= 360;
      } else {
        return transforms.rz;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.translateX = function (num) {
      if (num !== undefined) {
        transforms.x = num;
      } else {
        return transforms.x;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.translateY = function (num) {
      if (num !== undefined) {
        transforms.y = num;
      } else {
        return transforms.y;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.translateZ = function (num) {
      if (num !== undefined) {
        transforms.z = num;
      } else {
        return transforms.z;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.moveX = function (num) {
      if (num !== undefined) {
        transforms.x += num;
      } else {
        return transforms.x;
      }
      updateTransforms();
      return newCuboid;
    };


    newCuboid.moveY = function (num) {
      if (num !== undefined) {
        transforms.y += num;
      } else {
        return transforms.y;
      }
      updateTransforms();
      return newCuboid;
    };


    newCuboid.moveZ = function (num) {
      if (num !== undefined) {
        transforms.z += num;
      } else {
        return transforms.z;
      }
      updateTransforms();
      return newCuboid;
    };

    newCuboid.rotate = function (rx, ry, rz) {
      transforms.rx += rx !== undefined ? rx : 0;
      transforms.ry += ry !== undefined ? ry : 0;
      transforms.rz += rz !== undefined ? rz : 0;
      updateTransforms();
      return newCuboid;
    };

    newCuboid.rotation = function (rx, ry, rz) {
      transforms.rx = rx !== undefined ? rx : 0;
      transforms.ry = ry !== undefined ? ry : 0;
      transforms.rz = rz !== undefined ? rz : 0;
      updateTransforms();
      return newCuboid;
    };

    newCuboid.move3d = function (x, y, z) {
      transforms.x += x !== undefined ? x : 0;
      transforms.y += y !== undefined ? y : 0;
      transforms.z += z !== undefined ? z : 0;
      updateTransforms();
      return newCuboid;
    };

    newCuboid.translate3d = function (x, y, z) {
      transforms.x = x !== undefined ? x : 0;
      transforms.y = y !== undefined ? y : 0;
      transforms.z = z !== undefined ? z : 0;
      updateTransforms();
      return newCuboid;
    };

    return newCuboid;
  };

  $(document).ready(cuboid.init);

  window.cuboid = cuboid;

})();
