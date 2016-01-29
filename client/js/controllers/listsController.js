myApp.controller('listsController',function($scope,$routeParams,playerFactory,draftFactory){
			$scope.username = $routeParams.username;
			$scope.attackers = [];
			$scope.midfielders = [];
			$scope.defenders = [];
			$scope.gks = [];
			$scope.players = [];
			// $scope.player_id_array = [];
			// $scope.gk_id_array = [];
			var att_pos = ["ST","CF","LW","RW","LF","RF"];
			var mid_pos = ["CAM","CDM","CM","LM","RM"];
			var def_pos = ['LB','LWB','CB','RB','RWB'];

			var getDraftByUser = function(){
				draftFactory.getDraftByUser($scope.username,function(data){
					$scope.draft = data;
					console.log("$scope.draft");
					console.log($scope.draft);
					$scope.player_id_array = $scope.draft.teamMembers_player;
					$scope.gk_id_array = $scope.draft.teamMembers_gk;
					console.log("$scope.player_id_array");
					console.log($scope.player_id_array);
					console.log("$scope.gk_id_array");
					console.log($scope.gk_id_array);

					playerFactory.getPlayersArray({arr:$scope.player_id_array},function(data){
						$scope.players = data;
						console.log('data');
						console.log(data);
						for(var x in data){
							if(att_pos.indexOf(data[x].position) != -1){
								$scope.attackers.push(data[x]);
							}else if(mid_pos.indexOf(data[x].position) != -1){
								$scope.midfielders.push(data[x]);
							}else{
								$scope.defenders.push(data[x]);
							}
						}
						console.log('$scope.attackers');
						console.log($scope.attackers);
						console.log('$scope.midfielders');
						console.log($scope.midfielders);
						console.log('$scope.defenders');
						console.log($scope.defenders);
						
						
					});

					playerFactory.getGKsArray({arr:$scope.gk_id_array},function(data){
						console.log('data');
						console.log(data);
						for(var x in data){
							$scope.gks.push(data[x]);
						}
						console.log('$scope.gks');
						console.log($scope.gks);

					});

				})
			}

			var getPlayerById = function(id){
				playerFactory.getPlayerById(id,function(data){
					console.log('data');
					console.log(data);
					$scope.player = data;
					
				})
			};



			//get all players in a list
			getDraftByUser();


		});