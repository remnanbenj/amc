var express = require('express');
var router = express.Router();


/* HOME */

router.get('/', function(req, res, next) {
  res.render('index');
});


/* PRODUCTS */

router.get('/products', function(req, res, next) {
  res.render('products');
});


/* SEMINARS */

router.get('/seminars', function(req, res, next) {
  res.render('seminars');
});


/* TECH INFO */

router.get('/techinfo', function(req, res, next) {
  res.render('techinfo');
});


/* CALCULATOR */

router.get('/calculator', function(req, res, next) {
  res.render('calculator');
});


/* ABOUT US */

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus');
});
router.get('/ourpeople', function(req, res, next) {
  res.render('ourpeople');
});
router.get('/ourhistory', function(req, res, next) {
  res.render('ourhistory');
});


/* CONTACT US */

router.get('/contactus', function(req, res, next) {
  res.render('contactus');
});


module.exports = router;
