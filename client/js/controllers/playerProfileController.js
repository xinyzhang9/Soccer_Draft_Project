myApp.controller('playerProfileController',function($scope,$routeParams,playerFactory){
			$scope.playerId = $routeParams.id;
			console.log($scope.playerId);
			$scope.player = {};
			
			var index = function(){
				playerFactory.getPlayerById($scope.playerId,function(data){
					$scope.player = data;
					console.log(data);
				})
			};

			index();

		});