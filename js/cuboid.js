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

    var newSide = function (side) {
      return $('<div>').addClass(side)
        .css('background-size', '100% 100%')
        .css('background-color', 'white')
        .css('position', 'absolute')
        .append($('<div>').addClass('shading'));
    };

    var newCuboid = $('<div>').addClass('cuboid')
      .css('position', 'absolute')
      .css('width', 0).css('height', 0)
      .css('overflow', 'visible')
      .css('top', '50%').css('left', '50%')
      .css('transform-style', 'preserve-3d')
      .append(newSide('front'))
      .append(newSide('back'))
      .append(newSide('left'))
      .append(newSide('right'))
      .append(newSide('top'))
      .append(newSide('bottom'));

    newCuboid.children().children()
      .css('position', 'absolute').css('width', '100%').css('height', '100%')
      .css('background-color', 'black').each(function (index) {
        $(this).fadeTo(0, index / 10);
      });

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

    newCuboid.color = function (c) {
      if (c !== undefined) {
        newCuboid.children().css('background-color', c);
      } else {
        return newCuboid.children().css('background-color');
      }
      return newCuboid;
    };

    var colorSide = function (side) {
      return function (c) {
        if (c !== undefined) {
          newCuboid.children(side).css('background-color', c);
        } else {
          return newCuboid.children(side).css('background-color');
        }
        return newCuboid;
      };
    };

    newCuboid.colorFront = colorSide('.front');
    newCuboid.colorBack = colorSide('.back');
    newCuboid.colorLeft = colorSide('.left');
    newCuboid.colorRight = colorSide('.right');
    newCuboid.colorTop = colorSide('.top');
    newCuboid.colorBottom = colorSide('.bottom');

    newCuboid.texture = function (url) {
      if (url !== undefined) {
        newCuboid.children().css('background-image', 'url(' + url + ')');
      } else {
        return newCuboid.children().css('background-image');
      }
      return newCuboid;
    };

    var textureSide = function (side) {
      return function (url) {
        if (url !== undefined) {
          newCuboid.children(side).css('background-image', 'url(' + url + ')');
        } else {
          return newCuboid.children(side).css('background-image');
        }
        return newCuboid;
      };
    };

    newCuboid.textureFront = textureSide('.front');
    newCuboid.textureBack = textureSide('.back');
    newCuboid.textureLeft = textureSide('.left');
    newCuboid.textureRight = textureSide('.right');
    newCuboid.textureTop = textureSide('.top');
    newCuboid.textureBottom = textureSide('.bottom');

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

    newCuboid.scale = function (w, h, d) {
      if (w === undefined && h === undefined && d === undefined) {
        return {
          width: transforms.w,
          height: transforms.h,
          depth: transforms.d
        };
      }
      if (w !== undefined) {
        transforms.w *= w;
      }
      if (h !== undefined) {
        transforms.h *= h;
      }
      if (d !== undefined) {
        transforms.d *= d;
      }
      updateSizes();
      return newCuboid;
    };

    var setAttribute = function (attr) {
      return function (num) {
        if (num !== undefined) {
          transforms[attr] = num;
        } else {
          return transforms[attr];
        }
        updateSizes();
        return newCuboid;
      };
    };

    newCuboid.width = setAttribute('w');
    newCuboid.height = setAttribute('h');
    newCuboid.depth = setAttribute('d');

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

    var addRotation = function (angle) {
      return function (num) {
        if (num !== undefined) {
          transforms[angle] += num;
          transforms[angle] %= 360;
        } else {
          return transforms[angle];
        }
        updateTransforms();
        return newCuboid;
      };
    };

    newCuboid.rotateX = addRotation('rx');
    newCuboid.rotateY = addRotation('ry');
    newCuboid.rotateZ = addRotation('rz');

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

    var setRotation = function (angle) {
      return function (num) {
        if (num !== undefined) {
          transforms[angle] = num;
          transforms[angle] %= 360;
        } else {
          return transforms[angle];
        }
        updateTransforms();
        return newCuboid;
      };
    };

    newCuboid.rotationX = setRotation('rx');
    newCuboid.rotationY = setRotation('ry');
    newCuboid.rotationZ = setRotation('rz');

    newCuboid.translateX = setAttribute('x');
    newCuboid.translateY = setAttribute('y');
    newCuboid.translateZ = setAttribute('z');

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
