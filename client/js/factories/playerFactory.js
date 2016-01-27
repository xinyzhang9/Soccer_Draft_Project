myApp.factory('playerFactory',function($http){
			factory = {};
			var player = {};

			factory.getPlayerById = function(id,callback){
				$http.get('/player/'+id).success(function(output){
					console.log('playerFactory.getPlayerById success');
					console.log(output);
					player = output;
					callback(player);
				})
			};
			
			return factory;
		})