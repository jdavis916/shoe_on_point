const express = require('express');
const router = express.Router();
const mongoose = require('mongoose').set('debug', true);

/* GET home page */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Simple Node Template',
  	msg: 'This sample template should help get you on your way.',
  	pageMainClass: 'pgHome'
  });
})
.get('/shop', function(req, res) {
  res.render('shop', { 
  	title: 'Simple Node Template',
  	msg: 'This sample template should help get you on your way.',
  	pageMainClass: 'pgShop'
  });
})
.get('/checkout', function(req, res) {
  res.render('checkout', { 
  	title: 'Simple Node Template',
  	msg: 'This sample template should help get you on your way.',
  	pageMainClass: 'pgCheckout'
  });
})
.get('/search', function(req, res) {
  res.render('search', { 
  	title: 'Simple Node Template',
  	msg: 'This sample template should help get you on your way.',
  	pageMainClass: 'pgSearch'
  });
})
.get('/contact', function(req, res) {
  res.render('contact', { 
  	title: 'Simple Node Template',
  	msg: 'This sample template should help get you on your way.',
  	pageMainClass: 'pgContact'
  });
});

module.exports = router;
