const express = require('express');
const router = express.Router();
const mongoose = require('mongoose').set('debug', true);

/* GET home page */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Shoe On Point',
  	msg: 'This will be an awesome sneaker site',
		bodyClass: 'bdHome',
  	pageMainClass: 'pgHome',
  });
})
.get('/shop', function(req, res) {
  res.render('shop', { 
  	title: 'Shop',
  	msg: 'This is the shop page',
		bodyClass: 'bdShop',
  	pageMainClass: 'pgShop'
  });
})
.get('/checkout', function(req, res) {
  res.render('checkout', { 
  	title: 'Checkout',
  	msg: 'This is the checkout page',
		bodyClass: 'bdCheckout',
  	pageMainClass: 'pgCheckout'
  });
})
.get('/search', function(req, res) {
  res.render('search', { 
  	title: 'Search',
  	msg: 'This is the search page',
		bodyClass: 'bdSearch',
  	pageMainClass: 'pgSearch'
  });
})
.get('/contact', function(req, res) {
  res.render('contact', { 
  	title: 'Contact',
  	msg: 'This is the contact page',
		bodyClass: 'bdContact',
  	pageMainClass: 'pgContact'
  });
});

module.exports = router;
