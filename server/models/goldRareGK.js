//model
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;
var GoldRareGKSchema = new mongoose.Schema({
	alias:String,
	position:String,
	rating:String,
	nation:String,
	league:String,
	club:String,

	dive:String,
	hand:String,
	kick:String,
	reflex:String,
	speed:String,
	pos:String,

	img_nation:String,
	img_club:String,
	img_player:String,

	name:String,
	age:String,
	height:String,
	workrates:String,
	traits:String,

	id:Number,

});

mongoose.model('gold_rare_gks',GoldRareGKSchema);