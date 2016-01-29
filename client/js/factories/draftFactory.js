		myApp.factory('draftFactory',function($http){
			factory = {};
			var draft = {};

			factory.getDraftByUser = function(username,callback){
				$http.get('/getDraftByUser/'+username).success(function(output){
					console.log('draftFactory.getDraftByUser success');
					console.log(output);
					draft = output;
					callback(draft);
				})
			};
			factory.create = function(username,teamMembers,callback){
				console.log('draftFactory.create');
				draft_info = {
								username:username,
								teamMembers:teamMembers,
							}
				$http.post('/addDraft',draft_info).success(function(output){
					callback(output);
				})
			};
			factory.removeDraftByUser = function(username,callback){
				$http.post('/removeDraftByUser/'+username).success(function(output){
					callback(output);
				})
			};
			factory.updateFormation = function(info,callback){
				$http.post('/updateFormation',info).success(function(output){
					console.log('updateFormation success');
					callback(output);
				})
			};
			factory.updateAttackers = function(info,callback){
				var info = {attackers_on:info.attackers_on};
				$http.post('/updateAttakers_on',info).success(function(output){
					console.log('updateAttakers_on success');
					callback(output);
				})
			};
			factory.updateMidfielders = function(info,callback){
				var info = {midfielders_on:info.midfielders_on};
				$http.post('/updateMidfielders_on',info).success(function(output){
					console.log('updateMidfielders_on success');
					callback(output);
				})
			};
			factory.updateDefenders = function(info,callback){
				var info = {defenders_on:info.defenders_on};
				$http.post('/updateDefenders_on',info).success(function(output){
					console.log('updateDefenders_on success');
					callback(output);
				})
			};
			factory.updateGKs = function(info,callback){
				var info = {gks_on:info.gks_on};
				$http.post('/updateGKs_on',info).success(function(output){
					console.log('updateGKs_on success');
					callback(output);
				})
			};
			
			return factory;
		})