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
			factory.updateAttackers = function(arr,username,callback){
				var info = {attackers_on:arr,username:username};
				$http.post('/updateAttackers',info).success(function(output){
					console.log('updateAttackers success');
					callback(output);
				})
			};
			factory.updateMidfielders = function(arr,username,callback){
				var info = {midfielders_on:arr,username:username};
				$http.post('/updateMidfielders',info).success(function(output){
					console.log('updateMidfielders success');
					callback(output);
				})
			};
			factory.updateDefenders = function(arr,username,callback){
				var info = {defenders_on:arr,username:username};
				$http.post('/updateDefenders',info).success(function(output){
					console.log('updateDefenders success');
					callback(output);
				})
			};
			factory.updateGKs = function(arr,username,callback){
				var info = {gks_on:arr,username:username};
				$http.post('/updateGKs',info).success(function(output){
					console.log('updateGKs success');
					callback(output);
				})
			};
			
			return factory;
		})