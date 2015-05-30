var Project = require('../models/projectModel');

var project = function(route){
	route
	.use('/project/:id',function(req,res,nxt){
		if(req.params.id === null){
			res.status(500).send({message:'Invalid request'});
			nxt();
		}
		nxt();
	})
	.get('/project',function(req,res){
		Project.find({},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});	
	})
	.post('/project',function(req,res){
		var project = new Project(req.body);
		project.save(function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(201).send(data);
		});
	})
	.get('/project/:id',function(req,res){
		Project.find({_id:req.params.id},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	})
	.put('/project/:id',function(req,res){
		Project.update({_id:req.params.id},req.body,function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	})
	.delete('/project/:id',function(req,res){
		Project.remove({_id:req.params.id},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});
	});
}

module.exports = project;