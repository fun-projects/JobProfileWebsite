var express 	= require('express');
var router 		= express.Router();


//welcome page
router.get('/', function(req, res) {
  res.sendFile('index.html',{root: '../public/views'});
});

require('./timelineRoute')(router);
require('./projectRoute')(router);



module.exports = router;