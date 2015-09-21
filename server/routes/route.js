var express 	= require('express');
var router 		= express.Router();
var path 		= require('path');
var passport = require('passport');


//var jwt = require('express-jwt');
//var auth = jwt({secret: 'SECRET', userProperty: 'payload'});
var auth = function(req, res, next){
  if (!req.isAuthenticated())
    res.send(401);
  else
    next();
};
//welcome page
router.get('/', function(req, res) {
  res.sendFile('index.html',{root: path.join(__dirname,'./../../public/views')});
});
/*
router.get('/test',function(req,res){
  console.log("in test");
  res.send(200).json({message:'this is test'});
});*/
router.get('/users', auth, function(req, res){
  res.send([{name: "user1"}, {name: "user2"}]);
});

// route to test if the user is logged in or not
router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

// route to log in
router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log(req.user);
  res.send(req.user);

});

// route to log out
router.post('/logout', function(req, res){
  req.logOut();
  res.send(200);
});

require('./timelineRoute')(router);
require('./projectRoute')(router);
require('./aboutRoute')(router);



module.exports = router;
