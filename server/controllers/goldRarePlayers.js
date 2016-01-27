var mongoose = require('mongoose');
var GoldRarePlayers = mongoose.model('gold_rare_players');

module.exports = (function(){
	return{
		getAll:function(req,res){
			GoldRarePlayers.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		getOnePlayer:function(req,res){
			var tmp = Math.floor((Math.random() * 543));
			GoldRarePlayers
	            .findOne({id:tmp},function(err,output){
	            	if(err){
	            		console.log(err);
	            	}else{
	            		res.json(output);
	            	}
	            })

		},
		get5Player:function(req,res){
			GoldRarePlayers.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					var players = [];
					var tmps = [];
					while(tmps.length <5){
						var tmp = Math.floor((Math.random() * output.length));
						if(tmps.indexOf(tmp) == -1){
							tmps.push(tmp);
							players.push(output[tmp]);
						}
					}
					res.json(players);
				}
			})
		},
		get5HighPlayer:function(req,res){
			GoldRarePlayers.find({rating:{$gt :87}},function(err,output){
				if(err){
					console.log(err);
				}else{
					var players = [];
					var tmps = [];
					while(tmps.length <5){
						var tmp = Math.floor((Math.random() * output.length));
						if(tmps.indexOf(tmp) == -1){
							tmps.push(tmp);
							players.push(output[tmp]);
						}
					}
					res.json(players);
				}
			})
		},
		getPlayerbyId:function(req,res){
			var playerId = req.params.id;
			GoldRarePlayers.findOne({id:playerId},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},

	
	}//return
})()