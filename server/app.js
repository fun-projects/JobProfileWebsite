var express 	= require('express');
var routes 		= require('./routes/route');
var bodyParser	= require('body-parser');
var app 		= express();
var session = require('express-session')
var path 		= require('path');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//app.set('views', __dirname + './../client/views');

passport.use(new LocalStrategy(
    function(username, password, done) {
      if (username === "admin" && password === "admin") // stupid example
        return done(null, {name: "admin"});

      return done(null, false, { message: 'Incorrect username.' });
    }
));
// Serialized and deserialized methods when got from session

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// Define a middleware function to be used for every secured routes
var auth = function(req, res, next){
  if (!req.isAuthenticated())
    res.send(401);
  else
    next();
};

//middleware
app.use('/', express.static(path.join(__dirname,'./../public')));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({resave:false,saveUninitialized: true, secret: 'securedsession' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',routes);


//create and start server
var port   = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Job App listening at http://%s:%s', host, port);

});

//module.exports = app;