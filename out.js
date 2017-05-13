var _0x258d = ["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x20","\x3B","\x73\x70\x6C\x69\x74","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x68\x61\x72\x41\x74","\x20","\x69\x6E\x64\x65\x78\x4F\x66","","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x74\x6F\x6B\x65\x6E","\x66\x61\x69\x6C","\x73\x74\x61\x74\x65","\x73\x75\x63\x63\x65\x73\x73","\x6C\x6F\x67\x67\x65\x64","\x64\x6F\x6E\x65","\x47\x45\x54","\x68\x74\x74\x70\x3A\x2F\x2F\x6D\x61\x71\x2D\x31\x2E\x61\x67\x61\x72\x69\x6F\x68\x75\x62\x2E\x6E\x65\x74\x3A\x32\x30\x30\x30\x2F\x63\x68\x65\x63\x6B\x2D\x6C\x6F\x67\x69\x6E\x2F","\x61\x6A\x61\x78","\x70\x6F\x77","\x66\x6C\x6F\x6F\x72"];
function setCookie(_0xa574x2, _0xa574x3, _0xa574x4) {
  var _0xa574x5 = new Date();
  _0xa574x5['setTime'](_0xa574x5['getTime']() + (_0xa574x4 * 24 * 60 * 60 * 1000));
  var _0xa574x6 = 'expires=' + _0xa574x5['toUTCString']();
  document['cookie'] = _0xa574x2 + '=' + _0xa574x3 + '; ' + _0xa574x6;
}
function getCookie(_0xa574x2) {
  var _0xa574x8 = _0xa574x2 + '=';
  var _0xa574x9 = document['cookie']['split'](';');
  for (var _0xa574xa = 0; _0xa574xa < _0xa574x9['length']; _0xa574xa++) {
    var _0xa574xb = _0xa574x9[_0xa574xa];
    while (_0xa574xb['charAt'](0) == ' ') {
      _0xa574xb = _0xa574xb['substring'](1);
    }
    ;
    if (_0xa574xb['indexOf'](_0xa574x8) == 0) {
      return _0xa574xb['substring'](_0xa574x8['length'], _0xa574xb['length']);
    }
  }
  ;
  return '';
}
function createData(_0xa574xd) {
  return btoa(JSON['stringify'](_0xa574xd));
}
function checkLogin(_0xa574xf) {
  if (getCookie('token') == '') {
    _0xa574xf(false);
    return;
  }
  ;
  var _0xa574x10 = {
  };
  _0xa574x10['token'] = getCookie('token');
  $['ajax']({
    type: 'GET',
    url: 'http://maq-1.agariohub.net:2000/check-login/' + createData(_0xa574x10)
  })['done'](function(_0xa574x11) {
    if (_0xa574x11['state'] == 'success') {
      _0xa574xf(_0xa574x11['logged']);
    } else {
      _0xa574xf(false);
    }
  })['fail'](function() {
    _0xa574xf(false);
  });
}
function xpToLevel(_0xa574x13, _0xa574xf) {
  var _0xa574x14 = _0xa574x13;
  for (var _0xa574xa = 0; _0xa574xa < 200; _0xa574xa++) {
    if (_0xa574x14 - xpTl(_0xa574xa) >= 0) {
      _0xa574x14 -= xpTl(_0xa574xa);
    } else {
      _0xa574xf(_0xa574xa, _0xa574x14, xpTl(_0xa574xa));
      break;
    }
  }
}
function xpTl(_0xa574xa) {
  return Math['floor'](100 * Math['pow'](_0xa574xa, 2) - 50 * _0xa574xa + 250);
}