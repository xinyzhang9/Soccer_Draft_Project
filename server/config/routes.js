//require controllers
var goldRarePlayers = require('./../controllers/goldRarePlayers.js');
var goldRareGKs = require('./../controllers/goldRareGKs.js');

module.exports = function(app){
	//root
	app.get('/',function(req,res){
		res.render('index');
	});

	//get gold rare player
	app.get('/getGoldRarePlayer',function(req,res){
		goldRarePlayers.getAll(req,res);
	});

	app.get('/getOneGoldRarePlayer',function(req,res){
		goldRarePlayers.getOnePlayer(req,res);
	});

	app.get('/get5GoldRarePlayer',function(req,res){
		goldRarePlayers.get5Player(req,res);
	});

	app.get('/get5HighGoldRarePlayer',function(req,res){
		goldRarePlayers.get5HighPlayer(req,res);
	});

	app.get('/player/:id',function(req,res){
		goldRarePlayers.getPlayerbyId(req,res);
	});


	//get gold rare gk
	app.get('/getGoldRareGK',function(req,res){
		goldRareGKs.getAll(req,res);
	});

	app.get('/getOneGoldRareGK',function(req,res){
		goldRareGKs.getOnePlayer(req,res);
	});

	app.get('/get5GoldRareGK',function(req,res){
		goldRareGKs.get5Player(req,res);
	});

	app.get('/gk/:id',function(req,res){
		goldRareGKs.getPlayerbyId(req,res);
	});

	




	



	app.get('/getGoldRareGK',function(req,res){
		goldRareGKs.getPlayer(req,res);
	});

}

