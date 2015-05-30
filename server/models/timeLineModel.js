var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	db 	= mongoose.connect('mongodb://localhost/JobAppDB');


var timeLineModel = new Schema({
	title:String,
	description:String,
	type:String,
	date:{type:Date,default:Date.now}
});

module.exports  = mongoose.model('time_line',timeLineModel);