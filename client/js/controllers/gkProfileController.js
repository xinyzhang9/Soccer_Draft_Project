myApp.controller('gkProfileController',function($scope,$routeParams,playerFactory){
			$scope.playerId = $routeParams.id;
			console.log($scope.playerId);
			$scope.gk = {};
			
			var index = function(){
				playerFactory.getGKById($scope.playerId,function(data){
					$scope.gk = data;
					console.log(data);
				})
			};

			index();
		});