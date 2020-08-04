var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("Porque no renderisa");
    res.render('react');
});

module.exports = router;
