//var User = require('../models/AboutModel');
//
var About = require('../models/AboutModel');

var about = function (route){
	route
	.use('/about/:id',function(req,res,nxt){
		if(req.params.id== null){
	   			res.status(500).send({message:'Invalid request'});
	   			nxt();
	    
	       }
	 		nxt();
     })
     .get('/about',function(req,res){
        About.find({},function(err,data){
			console.log("Inside About GET");
         if(err)
            res.status(500).send(err);
         else
		 console.log(data);
            res.status(200).send(data);
        });
     })
      .post('/about',function(req,res){
			console.log(req.body);
      	var about = new About(req.body);
      	about.save(function(err,data){
      		if(err) {
				console.log(err);
				res.status(500).send(err);
			}else
				res.status(200).send(data);
      	});
      })
      .put('/about/:id',function(req,res){
		About.update({_id:req.params.id},req.body,function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	 })
      .delete('/about/:id',function(req,res){
      	About.remove({_id:req.params.id},function(err,data){
      		if(err)
      			res.status(500).send(err);
      		else
      			res.status(200).send(data);
      	});
      });
 }

 module.exports = about;
