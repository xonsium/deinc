var express = require('express');
var router = express.Router();
const fs = require('node:fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/agreement', function (req, res) {
  var content = req.body.name + ' ' + req.body.soul + ' ' + req.body.message;
  fs.writeFile('data.txt', content, {flag: 'a+'}, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('file written successfully');
  }
});
  res.render('congo', {name: req.body.name});
});

module.exports = router;
