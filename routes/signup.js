var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'CAMAP-SIGNUP' });
});

module.exports = router;
