myApp.controller('draftController',function($scope,$routeParams,draftFactory,playerFactory){
			$scope.username = $routeParams.username;
			console.log($scope.username);
			$scope.draft = {};
			$scope.gks = [];
			$scope.players = [];
			$scope.test=[];
			$scope.attackers_on = [];
			$scope.midfielders_on = [];
			$scope.defenders_on = [];
			$scope.gks_on = [];


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
						playerFactory.getGKsArray({arr:$scope.gk_id_array},function(data){
							console.log('data');
							console.log(data);
							for(var x in data){
								$scope.players.push(data[x]);
							}

						});
					});

				})
			};

			$scope.removeTeam = function(){
				draftFactory.removeDraftByUser($scope.username,function(){
					$scope.messages = "draft deleted from database successfully!"
					alert('your draft has been deleted!');
				})
			};

			$scope.saveFormation = function(){
				//save 442
				var info = {
					username:$scope.username,
					formation:$scope.formation,
				}
				console.log(info);
				draftFactory.updateFormation(info,function(){
					$scope.messages = "formation updated database successfully!"
					alert('your formation is saved!');
					//
					draftFactory.updateAttackers($scope.attackers_on,$scope.username,function(){
						// alert('your attackers are saved!');
						draftFactory.updateMidfielders($scope.midfielders_on,$scope.username,function(){
							// alert('your midfielders are saved!');
							draftFactory.updateDefenders($scope.defenders_on,$scope.username,function(){
								// alert('your defenders are saved!');
								draftFactory.updateGKs($scope.gks_on,$scope.username,function(){
									// alert('your gks are saved!');
								})
							})
						})
					})

				})
			};





			//getDraft when loading the page
			getDraftByUser();

	$(document).ready(function(){
        var bench_counter = 0;
        var attacker_counter = 0;
        var midfielder_counter = 0;
        var defender_counter = 0;
        var goalkeeper_counter = 0;


      $(function() {     

        $("#launchPad").height($(window).height() - 20);
        var dropSpace = $(window).width() - $("#launchPad").width();
        $("#dropZone").width(dropSpace - 70);
        $("#dropZone").height($("#launchPad").height());

        var sPositions = localStorage.positions || "{}";
        var positions = JSON.parse(sPositions);
        $.each(positions, function (id, pos) {
            $("#" + id).css(pos)
        })

        $(".card").draggable({
            appendTo: "body",
            cursor: "move",
            helper: 'clone',
            revert: "invalid",
            stop: function (event, ui) {
                positions[this.id] = ui.position
                localStorage.positions = JSON.stringify(positions)
            }
        });

        $(".gkcard").draggable({
            appendTo: "body",
            cursor: "move",
            helper: 'clone',
            revert: "invalid",
            stop: function (event, ui) {
                positions[this.id] = ui.position
                localStorage.positions = JSON.stringify(positions)
            }
        });

        $("#launchPad").droppable({
            tolerance: "intersect",
            accept: ".card",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function(event, ui) {
                $("#launchPad").append($(ui.draggable));
            }
        });

        $(".stackDrop1").droppable({
          tolerance: "intersect",
          accept: ".card",
          activeClass: "ui-state-default",
          hoverClass: "ui-state-hover",
          drop: function(event, ui) {        
              $(this).append($(ui.draggable));
          }
         });

        $(".stackDrop2").droppable({
          tolerance: "intersect",
          accept: ".card",
          activeClass: "ui-state-default",
          hoverClass: "ui-state-hover",
          drop: function(event, ui) {        
              $(this).append($(ui.draggable));
          }
         });

        $(".stackDrop3").droppable({
          tolerance: "intersect",
          accept: ".card",
          activeClass: "ui-state-default",
          hoverClass: "ui-state-hover",
          drop: function(event, ui) {        
              $(this).append($(ui.draggable));
          }
         });

        $(".stackDrop_gk").droppable({
          tolerance: "intersect",
          accept: ".gkcard",
          activeClass: "ui-state-default",
          hoverClass: "ui-state-hover",
          drop: function(event, ui) {        
              $(this).append($(ui.draggable));
          }
         });

        $(".stackDrop1").bind('drop',function(event,ui){
          if(attacker_counter+midfielder_counter+defender_counter+goalkeeper_counter >= 11){
            alert("Maximum players on the pitch is 11!");
          }
              $(ui.draggable).addClass('dropped');
              $(ui.draggable).addClass('attacker');
             
        
        });

        $(".stackDrop2").bind('drop',function(event,ui){
          if(attacker_counter+midfielder_counter+defender_counter+goalkeeper_counter >= 11){
            alert("Maximum players on the pitch is 11!");
          }
            $(ui.draggable).addClass('dropped');
            $(ui.draggable).addClass('midfielder');
          
          
        });

        $(".stackDrop3").bind('drop',function(event,ui){
          if(attacker_counter+midfielder_counter+defender_counter+goalkeeper_counter >= 11){
            alert("Maximum players on the pitch is 11!");
          }
            $(ui.draggable).addClass('dropped');
            $(ui.draggable).addClass('defender');
          
        });

        $(".stackDrop_gk").bind('drop',function(event,ui){
          if(attacker_counter+midfielder_counter+defender_counter+goalkeeper_counter >= 11){
            alert("Maximum players on the pitch is 11!");
          }
            $(ui.draggable).addClass('dropped');
            $(ui.draggable).addClass('goalkeeper');
           
        });

        $("#launchPad").bind('drop',function(event,ui){
          $(ui.draggable).attr("class","card ui-draggable ui-draggable-handle")
          // bench_counter = $("#launchPad .card:not(.dropped)").length;
        });

        $('#count').click(function(){
          attacker_counter = $('.attacker').length;
           midfielder_counter = $('.midfielder').length;
           defender_counter = $('.defender').length;
           goalkeeper_counter = $('.goalkeeper').length;
           var arr = [];
           arr.push(attacker_counter);
            arr.push(midfielder_counter);
             arr.push(defender_counter);
              arr.push(goalkeeper_counter);
              $scope.count_arr=arr;
              alert($scope.count_arr);
        })

        $('#validator').click(function(){
          if((attacker_counter + midfielder_counter + defender_counter + goalkeeper_counter == 11) && (goalkeeper_counter == 1)){
            var str = "";           
            str+=defender_counter.toString();
            str+=midfielder_counter.toString();
            str+=attacker_counter.toString();
            $scope.formation = str;
            alert("your Formation is: "+$scope.formation);
            //record each player's id on the pitch
            $('.attacker').on('click',function(){
            	$scope.attackers_on.push(this.id);
            });
            $('.midfielder').on('click',function(){
            	$scope.midfielders_on.push(this.id);
            });
            $('.defender').on('click',function(){
            	$scope.defenders_on.push(this.id);
            });
            $('.goalkeeper').on('click',function(){
            	$scope.gks_on.push(this.id);
            });
            $('.attacker').trigger('click');
            $('.midfielder').trigger('click');
            $('.defender').trigger('click');
            $('.goalkeeper').trigger('click');

            //we have saved the 4 id arrays! then call $scope function to start http request

          }else{
            alert('your squad is not valid!!!');
          }   
        })

       
        



      });//function

   
  })

		});