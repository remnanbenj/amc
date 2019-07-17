var express = require('express');
var router = express.Router();


/* HOME */

router.get('/', function(req, res, next) {
  res.render('index');
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


module.exports = router;
