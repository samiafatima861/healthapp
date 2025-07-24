const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Your Health Companion',
    description: 'Your trusted partner in healthcare management'
  });
});

module.exports = router;