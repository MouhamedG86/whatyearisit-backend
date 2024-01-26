var express = require('express');
var router = express.Router();
let  year = new Date().getUTCFullYear();


/* GET home page. */
router.get('/year', function(req, res, next) {
  res.json({ year: year.toString() });
});

module.exports = router;
