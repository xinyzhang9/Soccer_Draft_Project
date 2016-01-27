myApp.controller('packsController',function($scope,$routeParams,packFactory,playerFactory){
			$scope.username = $routeParams.username;
			console.log($scope.username);
			$scope.players = [];
			$scope.captains = [];
			$scope.gks = [];
			$scope.getCaptain = function(){
				packFactory.getCaptain(function(data){
					$scope.captains = data;
					console.log(data);
				})
			};

			$scope.getGoldRarePlayer = function(){
				packFactory.getGoldRarePlayer(function(data){
					$scope.players = data;
					console.log(data);
				})
			};

			$scope.getGoldRareGK = function(){
				packFactory.getGoldRareGK(function(data){
					$scope.gks = data;
					console.log(data);
				})
			};


		});