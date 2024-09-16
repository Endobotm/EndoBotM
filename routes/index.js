var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/gameplay', function(req, res, next) {
  res.render('gmplay');
});
router.get('/help', function(req, res, next) {
  res.render('help');
});
router.get('/levelsets', function(req, res, next) {
  res.render('lvlset');
});

module.exports = router;
