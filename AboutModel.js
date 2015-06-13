var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var AboutModel = new Schema({
	_id:{type: mongoose.Schema.Types.ObjectId, ref:},
	name:String,
	currentrole:String,
	comapnyname:String,
	place:String,
	summary:[String]
});

module.exports = mongoose.model('About',AboutModel);
