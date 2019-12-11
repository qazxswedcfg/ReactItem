var express = require('express');
var router = express.Router();
const {
  find,
  find2,
  find3,
  insert,
  remove
} = require('../db/db');
/* GET home page. */
router.get('/cha', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('userinf')
  res.json(data);
});
router.get('/cha1', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('liuyanban')
  res.json(data);
});
router.get('/cha2', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('musiclist')
  res.json(data);
});
router.get('/cha3', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find3('musiclist')
  res.json(data);
});
router.get('/cha4', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find2('musiclist')
  res.json(data);
});
router.get('/del', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await remove('userinf', {
    key: req.query.test
  })
  res.json(data);
});
router.get('/del1', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await remove('liuyanban', {
    name: req.query.test
  })
  res.json(data);
});
router.get('/add', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await insert('userinf', [{
    key: req.query.key,
    name: req.query.name,
    psw: req.query.psw,
    photo: req.query.photo
  }])
  res.json(data);
});
router.get('/add1', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await insert('liuyanban', [{
    num: req.query.num,
    name: req.query.name,
    content: req.query.content,
    data: req.query.data
  }])
  res.json(data);
});

module.exports = router;
