/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/

var express = require('express');
var router = express.Router();
var Users = require('../models/UserModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  var u = new Users({
   title: "Mr",
   lastname : "Goyal",
   firstname : "Ganpat",
   mail : "goyal@gmail.com"
  })
  u.save(function(err, result){
   if(err)
    return res.send({message:err.message, stack: err.stack, errors: err.errors});

   res.send(result);
  })
});

module.exports = router;
