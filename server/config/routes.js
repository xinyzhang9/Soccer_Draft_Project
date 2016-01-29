//require controllers
var goldRarePlayers = require('./../controllers/goldRarePlayers.js');
var goldRareGKs = require('./../controllers/goldRareGKs.js');
var drafts = require('./../controllers/drafts.js');

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

	//draft
	app.get('/getDraftByUser/:username',function(req,res){
		drafts.getDraftByUser(req,res);
	});

	app.post('/addDraft',function(req,res){
		drafts.addDraft(req,res);
	});

	app.post('/removeDraftByUser/:username',function(req,res){
		drafts.removeDraftByUser(req,res);
	});

	app.post('/updateFormation',function(req,res){
		drafts.updateFormation(req,res);
	});

	//request by array
	app.post('/getPlayersArray',function(req,res){
		goldRarePlayers.getPlayersArray(req,res);
	});
	app.post('/getGKsArray',function(req,res){
		goldRareGKs.getPlayersArray(req,res);
	});

}

