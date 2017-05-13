var _0x51c5 = ["\x78","\x79","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x70\x6F\x77","\x5B","\x72\x6F\x75\x6E\x64","\x2C\x20","\x5D","\x73\x71\x72\x74","\x6D\x61\x67\x6E\x69\x74\x75\x64\x65","\x63\x6C\x6F\x6E\x65","\x6D\x75\x6C\x74\x69\x70\x6C\x79\x45\x71","\x64\x69\x76\x69\x64\x65\x45\x71","\x61\x74\x61\x6E\x32","\x54\x4F\x5F\x44\x45\x47\x52\x45\x45\x53","\x54\x4F\x5F\x52\x41\x44\x49\x41\x4E\x53","\x63\x6F\x73","\x73\x69\x6E","\x63\x6F\x70\x79\x46\x72\x6F\x6D","\x74\x65\x6D\x70","\x65\x71\x75\x61\x6C\x73","\x6D\x69\x6E\x75\x73\x45\x71","\x6D\x61\x67\x6E\x69\x74\x75\x64\x65\x53\x71\x75\x61\x72\x65\x64","\x72\x6F\x74\x61\x74\x65","\x70\x6C\x75\x73\x45\x71","\x50\x49"];
var Vector2 = function(_0x9e2dx2, _0x9e2dx3) {
  this['x'] = _0x9e2dx2 || 0;
  this['y'] = _0x9e2dx3 || 0;
};
Vector2['prototype'] = {
  reset: function(_0x9e2dx2, _0x9e2dx3) {
    this['x'] = _0x9e2dx2;
    this['y'] = _0x9e2dx3;
    return this;
  },
  toString: function(_0x9e2dx4) {
    _0x9e2dx4 = _0x9e2dx4 || 3;
    var _0x9e2dx5 = Math['pow'](10, _0x9e2dx4);
    return '[' + Math['round'](this['x'] * _0x9e2dx5) / _0x9e2dx5 + ', ' + Math['round'](this['y'] * _0x9e2dx5) / _0x9e2dx5 + ']';
  },
  clone: function() {
    return new Vector2(this['x'], this['y']);
  },
  copyTo: function(_0x9e2dx6) {
    _0x9e2dx6['x'] = this['x'];
    _0x9e2dx6['y'] = this['y'];
  },
  copyFrom: function(_0x9e2dx6) {
    this['x'] = _0x9e2dx6['x'];
    this['y'] = _0x9e2dx6['y'];
  },
  magnitude: function() {
    return Math['sqrt']((this['x'] * this['x']) + (this['y'] * this['y']));
  },
  magnitudeSquared: function() {
    return (this['x'] * this['x']) + (this['y'] * this['y']);
  },
  normalise: function() {
    var _0x9e2dx7 = this['magnitude']();
    this['x'] = this['x'] / _0x9e2dx7;
    this['y'] = this['y'] / _0x9e2dx7;
    return this;
  },
  reverse: function() {
    this['x'] = -this['x'];
    this['y'] = -this['y'];
    return this;
  },
  plusEq: function(_0x9e2dx6) {
    this['x'] += _0x9e2dx6['x'];
    this['y'] += _0x9e2dx6['y'];
    return this;
  },
  plusNew: function(_0x9e2dx6) {
    return new Vector2(this['x'] + _0x9e2dx6['x'], this['y'] + _0x9e2dx6['y']);
  },
  minusEq: function(_0x9e2dx6) {
    this['x'] -= _0x9e2dx6['x'];
    this['y'] -= _0x9e2dx6['y'];
    return this;
  },
  minusNew: function(_0x9e2dx6) {
    return new Vector2(this['x'] - _0x9e2dx6['x'], this['y'] - _0x9e2dx6['y']);
  },
  multiplyEq: function(_0x9e2dx5) {
    this['x'] *= _0x9e2dx5;
    this['y'] *= _0x9e2dx5;
    return this;
  },
  multiplyNew: function(_0x9e2dx5) {
    var _0x9e2dx8 = this['clone']();
    return _0x9e2dx8['multiplyEq'](_0x9e2dx5);
  },
  divideEq: function(_0x9e2dx5) {
    this['x'] /= _0x9e2dx5;
    this['y'] /= _0x9e2dx5;
    return this;
  },
  divideNew: function(_0x9e2dx5) {
    var _0x9e2dx8 = this['clone']();
    return _0x9e2dx8['divideEq'](_0x9e2dx5);
  },
  dot: function(_0x9e2dx6) {
    return (this['x'] * _0x9e2dx6['x']) + (this['y'] * _0x9e2dx6['y']);
  },
  angle: function(_0x9e2dx9) {
    return Math['atan2'](this['y'], this['x']) * (_0x9e2dx9 ? 1 : Vector2Const['TO_DEGREES']);
  },
  rotate: function(_0x9e2dxa, _0x9e2dx9) {
    var _0x9e2dxb = Math['cos'](_0x9e2dxa * (_0x9e2dx9 ? 1 : Vector2Const['TO_RADIANS']));
    var _0x9e2dxc = Math['sin'](_0x9e2dxa * (_0x9e2dx9 ? 1 : Vector2Const['TO_RADIANS']));
    Vector2Const['temp']['copyFrom'](this);
    this['x'] = (Vector2Const['temp']['x'] * _0x9e2dxb) - (Vector2Const['temp']['y'] * _0x9e2dxc);
    this['y'] = (Vector2Const['temp']['x'] * _0x9e2dxc) + (Vector2Const['temp']['y'] * _0x9e2dxb);
    return this;
  },
  equals: function(_0x9e2dx6) {
    return ((this['x'] == _0x9e2dx6['x']) && (this['y'] == _0x9e2dx6['x']));
  },
  isCloseTo: function(_0x9e2dx6, _0x9e2dxd) {
    if (this['equals'](_0x9e2dx6)) {
      return true;
    }
    ;
    Vector2Const['temp']['copyFrom'](this);
    Vector2Const['temp']['minusEq'](_0x9e2dx6);
    return (Vector2Const['temp']['magnitudeSquared']() < _0x9e2dxd * _0x9e2dxd);
  },
  rotateAroundPoint: function(_0x9e2dxe, _0x9e2dxa, _0x9e2dx9) {
    Vector2Const['temp']['copyFrom'](this);
    Vector2Const['temp']['minusEq'](_0x9e2dxe);
    Vector2Const['temp']['rotate'](_0x9e2dxa, _0x9e2dx9);
    Vector2Const['temp']['plusEq'](_0x9e2dxe);
    this['copyFrom'](Vector2Const['temp']);
  },
  isMagLessThan: function(_0x9e2dxf) {
    return (this['magnitudeSquared']() < _0x9e2dxf * _0x9e2dxf);
  },
  isMagGreaterThan: function(_0x9e2dxf) {
    return (this['magnitudeSquared']() > _0x9e2dxf * _0x9e2dxf);
  }
};
Vector2Const = {
  TO_DEGREES: 180 / Math['PI'],
  TO_RADIANS: Math['PI'] / 180,
  temp: new Vector2()
};