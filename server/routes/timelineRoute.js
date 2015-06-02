var TimeLine 	= require('../models/timeLineModel');

var timeline = function(route){
	route
	.use('/timeline/:id',function(req,res,nxt){
		if(req.params.id === null){
			res.status(500).send({message:'Invalid request'});
			nxt();
		}
		nxt();
	})
	.get('/timeline',function(req,res){
		TimeLine.find({},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});	
	})
	.post('/timeline',function(req,res){
		var timeline = new TimeLine(req.body);
		timeline.save(function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(201).send(data);
		});
	})
	.get('/timeline/:id',function(req,res){
		TimeLine.findOne({_id:req.params.id},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	})
	.put('/timeline/:id',function(req,res){
		TimeLine.update({_id:req.params.id},req.body,function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	})
	.delete('/timeline/:id',function(req,res){
		TimeLine.remove({_id:req.params.id},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	});
}

module.exports = timeline;