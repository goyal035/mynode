var express = require('express');
var router = express.Router();
var Users = require('../models/UserModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  Users.findOne(function(err, result){
  	if(err)
    	return res.send({message:err.message, stack: err.stack, errors: err.errors});
    res.render('index', { title: 'Express',response:result});

  })
  
});

module.exports = router;
