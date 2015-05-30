var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var projectModel = new Schema({
	_id:{type: mongoose.Schema.Types.ObjectId, ref: 'time_line'},
	name:String,
	description:String,
	url:String,
	startDate:Date,
	endDate:Date,
	teamMembers:[String]
});

module.exports  = mongoose.model('projects',projectModel);