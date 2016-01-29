var mongoose = require('mongoose');
var Draft = mongoose.model('drafts');
var GoldRareGKs = mongoose.model('gold_rare_gks');
var GoldRarePlayers = mongoose.model('gold_rare_players');


module.exports = (function(){
	return{
		getDraftByUser:function(req,res){
			var username = req.params.username;
			Draft.findOne({username:username},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		addDraft:function(req,res){
			var teamMembers = req.body.teamMembers;
			var teamMembers_player = [];
			var teamMembers_gk = [];

			var att_pos = ["ST","CF","LW","RW","LF","RF"];
			var mid_pos = ["CAM","CDM","CM","LM","RM"];
			var def_pos = ['LB','LWB','CB','RB','RWB'];

			var sum_att = 0,sum_mid = 0,sum_def = 0;
			var att_rating = 0,mid_rating = 0,def_rating = 0;
			var att_counter = 0,mid_counter = 0,def_counter = 0;

			var nations = [];
			var leagues = [];
			var num_nations = 0, num_leagues = 0;
			var num_pacer = 0, num_shooter= 0, num_stronger = 0, num_passer = 0, num_dribbler = 0,num_defender = 0;
			var titles = [];
			for(var x in teamMembers){
				if(teamMembers[x].position == 'GK'){		
					if(parseInt(teamMembers[x].rating) >= 85){
						num_defender++;
					}
					teamMembers_gk.push(teamMembers[x]._id); //save _id
				}else{

					if(parseInt(teamMembers[x].pace) >= 90){
						num_pacer++;
					}
					if(parseInt(teamMembers[x].shooting) >= 84){
						num_shooter++;
					}
					if(parseInt(teamMembers[x].passing) >= 84){
						num_passer++;
					}
					if(parseInt(teamMembers[x].physical) >= 84){
						num_stronger++;
					}
					if(parseInt(teamMembers[x].dribbling) >= 84){
						num_dribbler++;
					}
					if(parseInt(teamMembers[x].defending) >= 84){
						num_defender++;
					}
					teamMembers_player.push(teamMembers[x]._id);
				}
				if(att_pos.indexOf(teamMembers[x].position) != -1){
					sum_att += parseInt(teamMembers[x].rating);
					att_counter++;
				}else if(mid_pos.indexOf(teamMembers[x].position) != -1){
					sum_mid += parseInt(teamMembers[x].rating);
					mid_counter++;
				}else{
					sum_def += parseInt(teamMembers[x].rating);
					def_counter++;
				}

				
				if(nations.indexOf(teamMembers[x].nation) == -1){
					nations.push(teamMembers[x].nation);
				}
				if(leagues.indexOf(teamMembers[x].league) == -1){
					leagues.push(teamMembers[x].league);
				}

			}//for

			if(num_pacer >=5 && num_shooter >=3){
				titles.push('Hunter');
			}
			if(num_shooter >=4 && num_dribbler >=3){
				titles.push('Sniper');
			}
			if(num_shooter >=4 && num_stronger >=3){
				titles.push('Finisher');
			}
			if(num_passer >=4 && num_shooter >=3){
				titles.push('Deadeye');
			}
			if(num_passer >=4 && num_dribbler >=3){
				titles.push('Artist');
			}
			if(num_passer >=4 && num_defender >=3){
				titles.push('Architect');
			}
			if(num_defender >=4 && num_stronger >=3){
				titles.push('Sentinel');
			}
			if(num_defender >=4 && num_pacer >=3){
				titles.push('Anchor');
			}
			if(num_defender >=4 && num_shooter >=3){
				titles.push('Gladiator');
			}

			var draft = new Draft({
					username:req.body.username,
					teamMembers_player:teamMembers_player,
					teamMembers_gk:teamMembers_gk,
					created_at:Date(),
					att_rating:sum_att/att_counter,
					mid_rating:sum_mid/mid_counter,
					def_rating:sum_def/def_counter,
					titles:titles,
					num_nations:nations.length,
					num_leagues:leagues.length,
				});
			draft.save(function(err,output){
				if(err){
					console.log(err);
				}else{
					console.log('add draft successfully');
					res.json(output);
				}
			})
		},

		removeDraftByUser:function(req,res){
			var username = req.params.username;
		    Draft.remove({username:username},function(err,status){
		      if(err){
		        console.log(err);
		      }else{
		        console.log('remove successfully');
		        res.json({status:'success'});
		      }
		    })
		},
		updateFormation:function(req,res){
			var username = req.body.username;
			var formation = req.body.formation;
			var attackers_id = req.body.attackers_on;
			var midfielders_id = req.body.midfielders_on;
			var defenders_id = req.body.defenders_on;
			var gks_id = req.body.gks_on;

			var attackers_on = [];
			var midfielders_on = [];
			var defenders_on = [];
			var gks_on = [];
			var results = {
							attackers_on:attackers_on,
							midfielders_on:midfielders_on,
							defenders_on:defenders_on,
							gks_on:gks_on,
			};

			while(results.attackers_on.length + results.midfielders_on.length
					 + results.defenders_on.length + results.gks_on.length < 11){
				for(x in attackers_id){
					GoldRarePlayers.findOne({_id:attackers_id[x]},function(err,player){
						if(err){
							console.log(err);
						}else{
							 attackers_on.push(player);
						}
					})
				}
				for(x in midfielders_id){
					GoldRarePlayers.findOne({_id:midfielders_id[x]},function(err,player){
						if(err){
							console.log(err);
						}else{
							 midfielders_on.push(player);
						}
					})
				}
				for(x in defenders_id){
					GoldRarePlayers.findOne({_id:defenders_id[x]},function(err,player){
						if(err){
							console.log(err);
						}else{
							 defenders_on.push(player);
						}
					})
				}
				for(x in gks_id){
					GoldRarePlayers.findOne({_id:gks_id[x]},function(err,player){
						if(err){
							console.log(err);
						}else{
							 gks_on.push(player);
						}
					})
				}

			}
			console.log(results);
			

			Draft.update({username:username},{
												$set:{
														formation:formation,
													}
											  },function(err,output){
											  	if(err){
											  		console.log(err);
											  	}else{
											  		res.json(output);
											  	}
											  });
		}


	
	}//return
})()