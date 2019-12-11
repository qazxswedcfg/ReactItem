"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../db/db'),
    find = _require.find,
    find2 = _require.find2,
    find3 = _require.find3,
    insert = _require.insert,
    remove = _require.remove;
/* GET home page. */


router.get('/cha', function _callee(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context.next = 3;
          return regeneratorRuntime.awrap(find('userinf'));

        case 3:
          data = _context.sent;
          res.json(data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/cha1', function _callee2(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context2.next = 3;
          return regeneratorRuntime.awrap(find('liuyanban'));

        case 3:
          data = _context2.sent;
          res.json(data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/cha2', function _callee3(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context3.next = 3;
          return regeneratorRuntime.awrap(find('musiclist'));

        case 3:
          data = _context3.sent;
          res.json(data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/cha3', function _callee4(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context4.next = 3;
          return regeneratorRuntime.awrap(find3('musiclist'));

        case 3:
          data = _context4.sent;
          res.json(data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get('/cha4', function _callee5(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context5.next = 3;
          return regeneratorRuntime.awrap(find2('musiclist'));

        case 3:
          data = _context5.sent;
          res.json(data);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.get('/del', function _callee6(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context6.next = 3;
          return regeneratorRuntime.awrap(remove('userinf', {
            key: req.query.test
          }));

        case 3:
          data = _context6.sent;
          res.json(data);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
});
router.get('/del1', function _callee7(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context7.next = 3;
          return regeneratorRuntime.awrap(remove('liuyanban', {
            name: req.query.test
          }));

        case 3:
          data = _context7.sent;
          res.json(data);

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
});
router.get('/add', function _callee8(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context8.next = 3;
          return regeneratorRuntime.awrap(insert('userinf', [{
            key: req.query.key,
            name: req.query.name,
            psw: req.query.psw,
            photo: req.query.photo
          }]));

        case 3:
          data = _context8.sent;
          res.json(data);

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
});
router.get('/add1', function _callee9(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context9.next = 3;
          return regeneratorRuntime.awrap(insert('liuyanban', [{
            num: req.query.num,
            name: req.query.name,
            content: req.query.content,
            data: req.query.data
          }]));

        case 3:
          data = _context9.sent;
          res.json(data);

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
});
module.exports = router;