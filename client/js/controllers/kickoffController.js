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

			$scope.gamelogs = "";



			var att_pos = ["ST","CF","LW","RW","LF","RF"];
			var mid_pos = ["CAM","CDM","CM","LM","RM"];
			var def_pos = ['LB','LWB','CB','RB','RWB'];

			var getDraftByUser = function(){
				draftFactory.checkUserDraft($scope.username,function(res){
		          if(res.result == false){
		            window.location.replace("#/openPacks/"+$scope.username);
		          }
		        });
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
					var attackers_id = ["56e67755d259301e672e8d32","56e67755d259301e672e8cd8"];
					var midfielders_id = ["56e67755d259301e672e8d43","56e67755d259301e672e8ce3","56e67755d259301e672e8c63","56e67755d259301e672e8c15"];
					var defenders_id = ["56e67755d259301e672e8c84","56e67755d259301e672e8d0a","56e67755d259301e672e8d01","56e67755d259301e672e8c82"];
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
					var attackers_id = ["56e67755d259301e672e8d5c","56e67755d259301e672e8d44","56e67755d259301e672e8d2b"];
					var midfielders_id = ["56e67755d259301e672e8d4c","56e67755d259301e672e8d4b","56e67755d259301e672e8d46"];
					var defenders_id = ["56e67755d259301e672e8d41","56e67755d259301e672e8d12","56e67755d259301e672e8c36","56e67755d259301e672e8cad"];
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
					var attackers_id = ["56e67755d259301e672e8d66","56e67755d259301e672e8aa5","56e67755d259301e672e8d4e"];
					var midfielders_id = ["56e67755d259301e672e8d4a","56e67755d259301e672e8c41","56e67755d259301e672e8d2f"];
					var defenders_id = ["56e67755d259301e672e8c3d","56e67755d259301e672e8c47","56e67755d259301e672e8d04","56e67755d259301e672e8c5b"];
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

			$scope.simulator = function(){
				$scope.gamelogs += "<p>"+$scope.AIattackers[0].alias +" tries a longshot from 25 yards!" + "</p>";
				$("#logs").html($scope.gamelogs);
			}



			//get all players in a list
			getDraftByUser();


		});