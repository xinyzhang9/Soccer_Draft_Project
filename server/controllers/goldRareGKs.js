var mongoose = require('mongoose');
var GoldRareGKs = mongoose.model('gold_rare_gks');

module.exports = (function(){
	return{
		getAll:function(req,res){
			GoldRareGKs.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		getOnePlayer:function(req,res){
			var tmp = Math.floor((Math.random() * 543));
			GoldRareGKs
	            .findOne({id:tmp},function(err,output){
	            	if(err){
	            		console.log(err);
	            	}else{
	            		res.json(output);
	            	}
	            })

		},
		get5Player:function(req,res){
			GoldRareGKs.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					var players = [];
					for(var i = 0; i < 5; i++){
						var length= output.length;
						var tmp = Math.floor((Math.random() * length));
						players.push(output[tmp]);
						output.splice(output.indexOf(tmp),1);
					}
					res.json(players);
				}
			})
		},
		getPlayerbyId:function(req,res){
			var playerId = req.params.id;
			GoldRareGKs.findOne({id:playerId},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},

	
	}//return
})()