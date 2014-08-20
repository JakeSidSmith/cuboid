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

    var newCuboid = $('<div>').addClass('cuboid')
      .append($('<div>').addClass('front').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('back').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('top').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('bottom').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('left').append($('<div>').addClass('shading')))
      .append($('<div>').addClass('right').append($('<div>').addClass('shading')));

    var updateSizes = function () {
      newCuboid.children('.front, .back')
        .css('width', transforms.w).css('height', transforms.h);
      newCuboid.children('.left, .right')
        .css('width', transforms.d).css('height', transforms.h);
      newCuboid.children('.top, .bottom')
        .css('width', transforms.w).css('height', transforms.d);

      newCuboid.children('.front')
        .css('transform', 'translate3d(' + [-transforms.w / 2 + 'px', -transforms.h / 2 + 'px', transforms.d / 2 + 'px'].join(',') + ')');
      newCuboid.children('.back')
        .css('transform', 'translate3d(' + [-transforms.w / 2 + 'px', -transforms.h / 2 + 'px', -transforms.d / 2 + 'px'].join(',') + ') rotateY(180deg)');
      newCuboid.children('.left')
        .css('transform', 'translate3d(' + [-transforms.w / 2 -transforms.d / 2 + 'px', -transforms.h / 2 + 'px', 0 + 'px'].join(',') + ') rotateY(-90deg)');
      newCuboid.children('.right')
        .css('transform', 'translate3d(' + [transforms.w / 2 - transforms.d / 2 + 'px', -transforms.h / 2 + 'px', 0 + 'px'].join(',') + ') rotateY(90deg)');
      newCuboid.children('.top')
        .css('transform', 'translate3d(' + [-transforms.w / 2 + 'px', -transforms.d / 2 -transforms.h / 2 + 'px', 0 + 'px'].join(',') + ') rotateX(90deg)');
      newCuboid.children('.bottom')
        .css('transform', 'translate3d(' + [-transforms.w / 2 + 'px', -transforms.d / 2 + transforms.h / 2 + 'px', 0 + 'px'].join(',') + ') rotateX(-90deg)');
    }

    updateSizes();

    var updateTransforms = function () {
      newCuboid.css('transform', function () {
        return 'translate3d(' + [transforms.x + 'px', transforms.y + 'px', transforms.z + 'px'].join(',') + ')' +
          'rotateX(' + transforms.rx + 'deg)' +
          'rotateY(' + transforms.ry + 'deg)' +
          'rotateZ(' + transforms.rz + 'deg)'
      }());
    };

    newCuboid.width = function (num) {
      if (num !== undefined) {
        transforms.w = num;
      } else {
        return transforms.w;
      }
      updateSizes();
      return newCuboid;
    };

    newCuboid.height = function (num) {
      if (num !== undefined) {
        transforms.h = num;
      } else {
        return transforms.h;
      }
      updateSizes();
      return newCuboid;
    };

    newCuboid.depth = function (num) {
      if (num !== undefined) {
        transforms.d = num;
      } else {
        return transforms.d;
      }
      updateSizes();
      return newCuboid;
    };

    newCuboid.size = function (w, h, d) {
      if (w === undefined && h === undefined && d === undefined) {
        return {
          width: transforms.w,
          height: transforms.h,
          depth: transforms.d
        };
      }
      if (w !== undefined) {
        transforms.w = w;
      }
      if (h !== undefined) {
        transforms.h = h;
      }
      if (d !== undefined) {
        transforms.d = d;
      }
      updateSizes();
      return newCuboid;
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
      if (rx === undefined && ry === undefined && rz === undefined) {
        return {
          x: transforms.rx,
          y: transforms.ry,
          z: transforms.rz
        };
      }
      transforms.rx += rx !== undefined ? rx : 0;
      transforms.ry += ry !== undefined ? ry : 0;
      transforms.rz += rz !== undefined ? rz : 0;
      updateTransforms();
      return newCuboid;
    };

    newCuboid.rotation = function (rx, ry, rz) {
      if (rx === undefined && ry === undefined && rz === undefined) {
        return {
          x: transforms.rx,
          y: transforms.ry,
          z: transforms.rz
        };
      }
      transforms.rx = rx !== undefined ? rx : 0;
      transforms.ry = ry !== undefined ? ry : 0;
      transforms.rz = rz !== undefined ? rz : 0;
      updateTransforms();
      return newCuboid;
    };

    newCuboid.move3d = function (x, y, z) {
      if (x === undefined && y === undefined && z === undefined) {
        return {
          x: transforms.x,
          y: transforms.y,
          z: transforms.z
        };
      }
      transforms.x += x !== undefined ? x : 0;
      transforms.y += y !== undefined ? y : 0;
      transforms.z += z !== undefined ? z : 0;
      updateTransforms();
      return newCuboid;
    };

    newCuboid.translate3d = function (x, y, z) {
      if (x === undefined && y === undefined && z === undefined) {
        return {
          x: transforms.x,
          y: transforms.y,
          z: transforms.z
        };
      }
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
