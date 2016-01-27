myApp.controller('draftController',function($scope,$routeParams,packFactory,playerFactory){
			$scope.username = $routeParams.username;
			console.log($scope.username);

		});