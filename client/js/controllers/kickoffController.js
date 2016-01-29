myApp.controller('kickoffController',function($scope,$routeParams,playerFactory,draftFactory){
			$scope.username = $routeParams.username;
			$scope.attackers = [];
				$scope.midfielders = [];
				$scope.defenders = [];
				$scope.gks = [];

			$scope.AIattackers = [];
			$scope.AImidfielders = [];
			$scope.AIdefenders = [];
			$scope.AIgks = [];



			var att_pos = ["ST","CF","LW","RW","LF","RF"];
			var mid_pos = ["CAM","CDM","CM","LM","RM"];
			var def_pos = ['LB','LWB','CB','RB','RWB'];

			var getDraftByUser = function(){
				$scope.attackers = [];
				$scope.midfielders = [];
				$scope.defenders = [];
				$scope.gks = [];
				draftFactory.getDraftByUser($scope.username,function(data){
					$scope.draft = data;
					console.log("$scope.draft");
					console.log($scope.draft);
					var attackers_id = $scope.draft.attackers_on;
					var midfielders_id = $scope.draft.midfielders_on;
					var defenders_id = $scope.draft.defenders_on;
					var gks_id = $scope.draft.gks_on;

					playerFactory.getPlayersArray({arr:attackers_id},function(data){
						$scope.attackers = data;
						var sum = 0;
						for(var x in data){
							sum+=parseInt(data[x].rating);
						}
						$scope.att_rating = sum/data.length;
						playerFactory.getPlayersArray({arr:midfielders_id},function(data){
							$scope.midfielders = data;
							var sum = 0;
							for(var x in data){
								sum+=parseInt(data[x].rating);
							}
							$scope.mid_rating = sum/data.length;
							playerFactory.getPlayersArray({arr:defenders_id},function(data){
								$scope.defenders = data;
								var sum = 0;
								for(var x in data){
									sum+=parseInt(data[x].rating);
								}
								$scope.def_rating = sum/data.length;
								playerFactory.getGKsArray({arr:gks_id},function(data){
									$scope.gks = data;
								})
							})
						})
						
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

			$scope.getAITeam = function(){
				if($scope.AI_name == 'Arsenal'){
					var attackers_id = ["56a7e53a1c2d5ed1dd65038e","56a7e53a1c2d5ed1dd650353"];
					var midfielders_id = ["56a7e53a1c2d5ed1dd6502a7","56a7e53a1c2d5ed1dd650380","56a7e53a1c2d5ed1dd650397","56a7e53a1c2d5ed1dd650484"];
					var defenders_id = ["56a7e53a1c2d5ed1dd6503a4","56a7e53a1c2d5ed1dd6502b6","56a7e53a1c2d5ed1dd650306","56a7e53a1c2d5ed1dd6503fb"];
					var gks_id = ["56a7e5811c2d5ed1dd6504eb"];
					$scope.AIFormation = "442";

					playerFactory.getPlayersArray({arr:attackers_id},function(data){
						$scope.AIattackers = data;
						var sum = 0;
						for(var x in data){
							sum+=parseInt(data[x].rating);
						}
						$scope.AI_att_rating = sum/data.length;
						playerFactory.getPlayersArray({arr:midfielders_id},function(data){
							$scope.AImidfielders = data;
							var sum = 0;
							for(var x in data){
								sum+=parseInt(data[x].rating);
							}
							$scope.AI_mid_rating = sum/data.length;
							playerFactory.getPlayersArray({arr:defenders_id},function(data){
								$scope.AIdefenders = data;
								var sum = 0;
								for(var x in data){
									sum+=parseInt(data[x].rating);
								}
								$scope.AI_def_rating = sum/data.length;
								playerFactory.getGKsArray({arr:gks_id},function(data){
									$scope.AIgks = data;
								})
							})
						})
					});
				}else if($scope.AI_name == 'Real_Madrid'){
					var attackers_id = ["56a7e53a1c2d5ed1dd6503a2","56a7e53a1c2d5ed1dd650396","56a7e53a1c2d5ed1dd65030a"];
					var midfielders_id = ["56a7e53a1c2d5ed1dd65039a","56a7e53a1c2d5ed1dd650399","56a7e53a1c2d5ed1dd6502d1"];
					var defenders_id = ["56a7e53a1c2d5ed1dd6502b2","56a7e53a1c2d5ed1dd650392","56a7e53a1c2d5ed1dd6503d4","56a7e53a1c2d5ed1dd650412"];
					var gks_id = ["56a7e5811c2d5ed1dd6504d9"];
					$scope.AIFormation = "433";

					playerFactory.getPlayersArray({arr:attackers_id},function(data){
						$scope.AIattackers = data;
						var sum = 0;
						for(var x in data){
							sum+=parseInt(data[x].rating);
						}
						$scope.AI_att_rating = sum/data.length;
						playerFactory.getPlayersArray({arr:midfielders_id},function(data){
							$scope.AImidfielders = data;
							var sum = 0;
							for(var x in data){
								sum+=parseInt(data[x].rating);
							}
							$scope.AI_mid_rating = sum/data.length;
							playerFactory.getPlayersArray({arr:defenders_id},function(data){
								$scope.AIdefenders = data;
								var sum = 0;
								for(var x in data){
									sum+=parseInt(data[x].rating);
								}
								$scope.AI_def_rating = sum/data.length;
								playerFactory.getGKsArray({arr:gks_id},function(data){
									$scope.AIgks = data;
								})
							})
						})
					});
				}else if($scope.AI_name == 'Barcelona'){
					var attackers_id = ["56a7e53a1c2d5ed1dd65039d","56a7e53a1c2d5ed1dd6503a1","56a7e53a1c2d5ed1dd6503e0"];
					var midfielders_id = ["56a7e53a1c2d5ed1dd65039c","56a7e53a1c2d5ed1dd6502b8","56a7e53a1c2d5ed1dd650341"];
					var defenders_id = ["56a7e53a1c2d5ed1dd650426","56a7e53a1c2d5ed1dd6503fc","56a7e53a1c2d5ed1dd6502b7","56a7e53a1c2d5ed1dd650422"];
					var gks_id = ["56a7e5811c2d5ed1dd6504e4"];
					$scope.AIFormation = "433";

					playerFactory.getPlayersArray({arr:attackers_id},function(data){
						$scope.AIattackers = data;
						var sum = 0;
						for(var x in data){
							sum+=parseInt(data[x].rating);
						}
						$scope.AI_att_rating = sum/data.length;
						playerFactory.getPlayersArray({arr:midfielders_id},function(data){
							$scope.AImidfielders = data;
							var sum = 0;
							for(var x in data){
								sum+=parseInt(data[x].rating);
							}
							$scope.AI_mid_rating = sum/data.length;
							playerFactory.getPlayersArray({arr:defenders_id},function(data){
								$scope.AIdefenders = data;
								var sum = 0;
								for(var x in data){
									sum+=parseInt(data[x].rating);
								}
								$scope.AI_def_rating = sum/data.length;
								playerFactory.getGKsArray({arr:gks_id},function(data){
									$scope.AIgks = data;
								})
							})
						})
					});
				}
					

				
			}



			//get all players in a list
			getDraftByUser();


		});