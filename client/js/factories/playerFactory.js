myApp.factory('playerFactory',function($http){
			factory = {};
			var player = {};
			var gk = {};
			var players = [];
			var gks = [];

			factory.getPlayerById = function(id,callback){
				$http.get('/player/'+id).success(function(output){
					console.log('playerFactory.getPlayerById success');
					console.log(output);
					player = output;
					callback(player);
				})
			};
			factory.getGKById = function(id,callback){
				$http.get('/gk/'+id).success(function(output){
					console.log('playerFactory.getGKById success');
					console.log(output);
					console.log(output);
					gk = output;
					callback(gk);
				})
			};
			factory.getPlayersArray = function(info,callback){
				
				$http.post('/getPlayersArray',info).success(function(output){
					console.log('playerFactory.getPlayersArray success');
					console.log(output);
					players = output;
					callback(players);
				})
			};
			factory.getGKsArray = function(info,callback){
				console.log('info');
				console.log(info);
				$http.post('/getGKsArray',info).success(function(output){
					console.log('playerFactory.getGKsArray success');
					console.log(output);
					gks = output;
					callback(gks);
				})
			}
			return factory;
		})