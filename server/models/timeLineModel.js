var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

if(process.env.ENV === "developement")
	mongoose.connect('mongodb://localhost/JobAppDB');
else
	mongoose.connect(process.env.DB_CONN);


var timeLineModel = new Schema({
	title:String,
	description:String,
	type:String,
	date:{type:Date,default:Date.now}
});

module.exports  = mongoose.model('time_line',timeLineModel);