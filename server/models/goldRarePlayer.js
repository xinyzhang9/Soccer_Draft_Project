//model
var counter = 0;
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;
var GoldRarePlayerSchema = new mongoose.Schema({
	alias:String,
	position:String,
	rating:String,
	nation:String,
	league:String,
	club:String,

	pace:String,
	shooting:String,
	passing:String,
	dribbling:String,
	defending:String,
	physical:String,
	img_nation:String,
	img_club:String,
	img_player:String,

	name:String,
	age:String,
	height:String,
	workrates:String,
	traits:String,
	specialities:String,

	acceleration:String,
	sprint_speed:String,
	agility:String,
	balance:String,
	reactions:String,
	ball_control:String,
	dribbling_skill:String,
	positioning:String,
	finishing:String,
	shot_power:String,
	long_shots:String,
	volleys:String,
	penalties:String,
	interceptions:String,
	heading:String,
	marking:String,
	standing_tackle:String,
	sliding_tackle:String,
	vision:String,
	crossing:String,
	free_kick:String,
	short_passing:String,
	long_passing:String,
	curve:String,
	jumping:String,
	stamina:String,
	strength:String,
	aggression:String,

	id:Number,

	

});

mongoose.model('gold_rare_players',GoldRarePlayerSchema);