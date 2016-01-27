myApp.factory('packFactory',function($http){
		factory = {};
		var pack_players = [];
		// var pack_gks = [];
		factory.getCaptain = function(callback){
			console.log('packFactory is loading data.');
			$http.get('/get5HighGoldRarePlayer').success(function(output){
				console.log('packFactory.getCaptain success');
				console.log(output);
				pack_players = output;
				callback(pack_players);
			})
		};

		factory.getGoldRarePlayer = function(callback){
			console.log('packFactory is loading data.');
			$http.get('/get5GoldRarePlayer').success(function(output){
				console.log('packFactory.getGoldRarePlayer success');
				console.log(output);
				pack_players = output;
				callback(pack_players);
			})
		};

		factory.getGoldRareGK = function(callback){
			console.log('packFactory is loading data.');
			$http.get('/get5GoldRareGK').success(function(output){
				console.log('packFactory.getGoldRareGK success');
				console.log(output);
				pack_players = output;
				callback(pack_players);
			})
		};


		return factory;
})