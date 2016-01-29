//model
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;
var DraftSchema = new mongoose.Schema({
	username:String,
	teamMembers_player:[String],
	teamMembers_gk:[String],
	created_at:Date,
	att_rating:Number,
	mid_rating:Number,
	def_rating:Number,
	num_nations:Number,
	num_leagues:Number,
	attackers_on:[String],
	midfielders_on:[String],
	defenders_on:[String],
	gks_on:[String],
	formation:String,
	titles:[String],

});

mongoose.model('drafts',DraftSchema);