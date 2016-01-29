myApp.controller('packsController',function($scope,$routeParams,packFactory,playerFactory,draftFactory){
			$scope.username = $routeParams.username;
			$scope.players = [];
			$scope.captains = [];
			$scope.gks = [];
			$scope.teamMembers = [];
			$scope.messages = "";
			$scope.counter = 18;
			$scope.num_def = 0;
			$scope.num_mid = 0;
			$scope.num_att = 0;
			$scope.num_gk = 0;
			var att_pos = ["ST","CF","LW","RW","LF","RF"];
			var mid_pos = ["CAM","CDM","CM","LM","RM"];
			var def_pos = ['LB','LWB','CB','RB','RWB'];

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

			$scope.addPlayerToTeam = function(player){
				if($scope.counter>0){
					var status = 0;
					for(x in $scope.teamMembers){
						if($scope.teamMembers[x]._id == player._id){
							$scope.messages = ">>Cannot add duplicate player!";
							status = 1;
							break;
						}
					}
					if(status == 0){
						$scope.teamMembers.push(player);
						$scope.messages = ">>Player added to your team."
						$scope.counter--;
						if(att_pos.indexOf(player.position) != -1){
							$scope.num_att++;
						}else if(mid_pos.indexOf(player.position) != -1){
							$scope.num_mid++;
						}else if(def_pos.indexOf(player.position) != -1){
							$scope.num_def++;
						}else{
							$scope.num_gk++;
						}
					}

				}
				else{
					$scope.messages = ">>Your Team is full."
				}
			};

			$scope.saveTeam = function(){
				draftFactory.create($scope.username,$scope.teamMembers,function(){
					$scope.messages = "draft saved to database successfully!"
				})
			};
			$scope.removeTeam = function(){
				draftFactory.removeDraftByUser($scope.username,function(){
					$scope.messages = "draft deleted from database successfully!"

				})
			};

	$(document).ready(function(){
		$( document ).on( 'click',".chooseButton",function() {
			$('#pack_player').fadeOut("slow");
		});
		$('#getGoldPlayer').click(function(){
			$('#pack_player').fadeIn("slow");
		});
		$( document ).on( 'click',".chooseCapButton",function() {
			$('.chooseCapButton').prop("disabled",true);
			$('#captain').fadeOut("slow");
		});
		$('#getCaptain').click(function(){
			$('#getCaptain').fadeOut("slow");
		})
		$( document ).on( 'click',".chooseGKButton",function() {
			$('.chooseGKButton').prop("disabled",true);
			$('#goalkeeper').fadeOut("slow");
		});
		$('#getGK').click(function(){
			$('#goalkeeper').fadeIn("slow");
		});
	})

	//check if user has a team
	





});