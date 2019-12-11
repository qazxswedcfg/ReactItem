"use strict";

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
var dbName = 'react-project'; // 连接

var connect = function connect() {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, {
      useUnifiedTopology: true
    }, function (err, client) {
      err ? reject(err) : resolve(client);
      console.log("Connected successfully to server");
    });
  });
}; // 查


var find = function find(col, query) {
  return new Promise(function _callee(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.find(query ? query : {}).toArray(function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
}; // 增


var insert = function insert(col, query) {
  return new Promise(function _callee2(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context2.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.insertMany(query, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
}; // 更


var updata = function updata(col, before, after) {
  return new Promise(function _callee3(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context3.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.updateOne(before, {
              $set: after
            }, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
}; // 删


var remove = function remove(col, query) {
  return new Promise(function _callee4(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context4.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.deleteOne(query, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
};

var find2 = function find2(col, query) {
  return new Promise(function _callee5(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context5.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.find(query ? query : {}).sort({
              like: 1
            }).toArray(function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
};

var find3 = function find3(col, query) {
  return new Promise(function _callee6(resolve, reject) {
    var client, db, collection;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context6.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.find(query ? query : {}).sort({
              like: -1
            }).toArray(function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    });
  });
};

module.exports = {
  find: find,
  insert: insert,
  updata: updata,
  remove: remove,
  find2: find2,
  find3: find3
};