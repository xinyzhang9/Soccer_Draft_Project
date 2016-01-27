myApp.controller('playerCardsController',function($scope,$routeParams,playerFactory,packFactory){
			$scope.playerIds = $routeParams.playerIds; //[id1,id2,id3,id4,id5]
			$scope.players = [];
			console.log($scope.playerIds);

			var getPlayerById = function(id){
					console.log('get player by id: '+id);
					playerFactory.getPlayerById(id,function(data){
						console.log(data);
						$scope.players.push(data);

					});
				};
			var get5Players = function(){
				for(var x in $scope.playerIds){
					getPlayerById($scope.playerIds[x]);
				}
			}
			

		});