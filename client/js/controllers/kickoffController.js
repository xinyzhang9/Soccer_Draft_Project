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
				$("#simulator").prop("disabled",false);
				//reset all game parameters
				$scope.gamelogs = "";
				$("#logs").html("Game is ready to begin...");
				end = false;
				time = 0;
				myScore = 0;
				AIScore = 0;
				start1 = false;
				start2 = false;
				halfbreak = false;
				end = false;
				mygkAction = false;
				AIgkAction = false;
				myAction = true;
				AIAction = false;

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

			var myScore = 0;
			var AIScore = 0;
			var time = 0;
			var attackList = ["tried a longshot","shot inside the box","dribbled into the box","tried to beat the defend line","lost the ball to opponent"];
			var midList = ["passed the ball to forwards","launched a though ball","successfully defended the ball","tried a longshot","gave the possession to opponent"];
			var defendList = ["dives into tackles","blocks the passing successfully","had great advantage in the air","lost the possession"];
			var gkList = ["made a brilliant save","got the ball right in his hands","had no chance to save that goal"];
			var start1 = false;
			var start2 = false;
			var halfbreak = false;
			var end = false;
			var mygkAction = false;
			var AIgkAction = false;
			var myAction = true;
			var AIAction = false;
			$scope.simulator = function(){
				$("#scores").html(myScore +" : "+AIScore);
				if(!end){
					if(!start1){
						var str = "<p> Game starts! You are watching friendly match between "+$scope.username+" and " + $scope.AI_name +"</p>";
						$scope.gamelogs = str.concat($scope.gamelogs);
						start1 = true;
					}
					var randomMin = Math.floor(Math.random()*6+1);
					var randomSecond = Math.floor(Math.random()*60);
					time = time + randomMin;

					if(time >45 && !halfbreak){
						var str = "<p> Referee blows to end the first half. Current score is "+myScore +" : "+AIScore+"</p>";
						$scope.gamelogs = str.concat($scope.gamelogs);
						halfbreak = true;
					}
					if(time >45 && !start2){
						var str = "<p> Second Half starts! You are watching friendly match between "+$scope.username+" and " + $scope.AI_name +"</p>";
						$scope.gamelogs = str.concat($scope.gamelogs);
						start2 = true;
					}
					if(time >=90 && !end){
						var str = "<p> Referee blowed the final whistle! Final score is "+$scope.username+" "+myScore+" and " + $scope.AI_name +" "+AIScore+"</p>";
						$scope.gamelogs =  str.concat($scope.gamelogs);
						end = true;
						$("#logs").html($scope.gamelogs);
						$("#time").html("90\'00\"");
					}else{
						var currentTime = time +"\'"+randomSecond+"\"";
						$("#time").html(currentTime);
						if(myAction){
							var rand = Math.floor(Math.random()*3);
							if(rand == 0){
								var str = "<p>"+currentTime+" "+getMyAttacker() +" "+ getMyAttackerStatus() + "</p>";
								if(AIgkAction){
									var str2 = "<p>"+currentTime+" "+getAIGK() +" "+ getAIGKStatus() + "</p>";
									str = str2.concat(str);
									$scope.gamelogs = str.concat($scope.gamelogs);
									AIgkAction = false;
								}else{
									$scope.gamelogs = str.concat($scope.gamelogs);
								}
								

							}else if(rand == 1){
								var str = "<p>"+currentTime+" "+getMyMidfielder() +" "+ getMyMidfielderStatus() + "</p>";
								$scope.gamelogs = str.concat($scope.gamelogs);
							}else{
								var str = "<p>"+currentTime+" "+getMyDefender() +" "+ getMyDefenderStatus() + "</p>";
								$scope.gamelogs = str.concat($scope.gamelogs);
							}
						}else if(AIAction){
							var rand = Math.floor(Math.random()*3);
							if(rand == 0){
								var str = "<p>"+currentTime+" "+getAIAttacker() +" "+ getAIAttackerStatus() + "</p>";
								if(mygkAction){
									var str2 = "<p>"+currentTime+" "+getMyGK() +" "+ getMyGKStatus() + "</p>";
									str = str2.concat(str);
									$scope.gamelogs = str.concat($scope.gamelogs);
									mygkAction = false;
								}else{
									$scope.gamelogs = str.concat($scope.gamelogs);
								}

							}else if(rand == 1){
								var str = "<p>"+currentTime+" "+getAIMidfielder() +" "+ getAIMidfielderStatus() + "</p>";
								$scope.gamelogs = str.concat($scope.gamelogs);
							}else{
								var str = "<p>"+currentTime+" "+getAIDefender() +" "+ getAIDefenderStatus() + "</p>";
								$scope.gamelogs = str.concat($scope.gamelogs);
							}
						}
						
						
						$("#logs").html($scope.gamelogs);
					}
						
					

				}
				

			}

			//get player
			var getMyAttacker = function(){
				var len = $scope.attackers.length;
				var rand = Math.floor(Math.random()*len);
				return $scope.attackers[rand].alias;
			}
			var getAIAttacker = function(){
				var len = $scope.AIattackers.length;
				var rand = Math.floor(Math.random()*len);
				return $scope.AIattackers[rand].alias;
			}

			var getMyMidfielder = function(){
				var len = $scope.midfielders.length;
				var rand = Math.floor(Math.random()*len);
				return $scope.midfielders[rand].alias;
			}
			var getAIMidfielder = function(){
				var len = $scope.AImidfielders.length;
				var rand = Math.floor(Math.random()*len);
				return $scope.AImidfielders[rand].alias;
			}

			var getMyDefender = function(){
				var len = $scope.defenders.length;
				var rand = Math.floor(Math.random()*len);
				return $scope.defenders[rand].alias;
			}
			var getAIDefender = function(){
				var len = $scope.AIdefenders.length;
				var rand = Math.floor(Math.random()*len);
				return $scope.AIdefenders[rand].alias;
			}

			var getMyGK = function(){
				return $scope.gks[0].alias;
			}
			var getAIGK = function(){
				return $scope.AIgks[0].alias;
			}

			//get status
			var getMyAttackerStatus = function(){
				var len = attackList.length;
				var rand = Math.floor(Math.random()*len);
				if(rand == 4){
					myAction = false;
					AIAction = true;
				}
				if(rand == 0 || rand == 1){
					AIgkAction = true;
				}
				return attackList[rand];
			}
			var getAIAttackerStatus = function(){
				var len = attackList.length;
				var rand = Math.floor(Math.random()*len);
				if(rand == 4){
					myAction = true;
					AIAction = false;
				}
				if(rand == 0 || rand == 1){
					mygkAction = true;
				}
				return attackList[rand];
			}
			var getMyMidfielderStatus = function(){
				var len = midList.length;
				var rand = Math.floor(Math.random()*len);
				if(rand == 4){
					myAction = false;
					AIAction = true;
				}
				return midList[rand];
			}
			var getAIMidfielderStatus = function(){
				var len = midList.length;
				var rand = Math.floor(Math.random()*len);
				if(rand == 4){
					myAction = true;
					AIAction = false;
				}
				return midList[rand];
			}
			var getMyDefenderStatus = function(){
				var len = defendList.length;
				var rand = Math.floor(Math.random()*len);
				if(rand == 4){
					myAction = false;
					AIAction = true;
				}
				return defendList[rand];
			}
			var getAIDefenderStatus = function(){
				var len = defendList.length;
				var rand = Math.floor(Math.random()*len);
				if(rand == 4){
					myAction = true;
					AIAction = false;
				}
				return defendList[rand];
			}
			var getMyGKStatus = function(){
				var len = gkList.length;
				var rand = Math.floor(Math.random()*len);
				if(rand == 2){
					AIScore += 1;
					myAction = true;
					AIAction = false;
				}
				return gkList[rand];
			}
			var getAIGKStatus = function(){
				var len = gkList.length;
				var rand = Math.floor(Math.random()*len);
				if(rand == 2){
					myScore += 1;
					myAction = false;
					AIAction = true;
				}
				return gkList[rand];
			}




			//get all players in a list
			getDraftByUser();


		});