var User = require('../models/AboutModel');
//
var About = require('../models/AboutModel');

var About = function (route){
	route
	.use('/About/:id',function(req,res,nxt){
		if(req.params.id== null){
	   			res.status(500).send({message:'Invalid request'});
	   			nxt();
	    
	       }
	 		nxt();
     })
     .get('/About',function(req,res){
        About.find({},function(err,data){
         if(err)
            res.status(500).send(err);
         else
            res.status(200).send(data);
        });
     })
      .post('/About',function(req,res){
      	var About = new About(req.body);
      	About.save(function(err,data){
      		if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
      	});
      })
      .put('/About/:id',function(req,res){
		About.update({_id:req.params.id},req.body,function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	 })
      .delete('/About/:id',function(req,res){
      	About.remove({_id:req.params.id},function(err,data){
      		if(err)
      			res.status(500).send(err);
      		else
      			res.status(200).send(data);
      	});
      });
 }

 module.exports = About;
