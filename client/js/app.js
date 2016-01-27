//=======================================================
//APP.JS -- myApp stores angular app 'myApp'
//=======================================================

var myApp = angular.module('myApp',['ngRoute']);

		myApp.config(function($routeProvider){
			$routeProvider
			.when('/',{
				templateUrl : './partials/welcome.html',
			})
			.when('/list/:username',{
				templateUrl : './partials/draft_team_list.html',
			})
			.when('/newDraft/:username',{
				templateUrl : './partials/newDraft.html',
			})
			.when('/team_profile/:username',{
				templateUrl : './partials/team_profile.html'
			})
			.when('/player_profile/:id',{
				templateUrl : './partials/player_profile.html'
			})
			.when('/teamSummary/:username',{
				templateUrl : './partials/teamSummary.html'
			})
			.when('/competition/:username',{
				templateUrl : './partials/cup.html'
			})
			.when('/openPacks/:username',{
				templateUrl : './partials/openpacks.html'
			})
			.when('/f/442',{
				templateUrl : './partials/formations/f442.html'
			})
			.when('/f/433',{
				templateUrl : './partials/formations/f433.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		});

// myApp.run(['$location', '$rootScope', function($location, $rootScope) {
//     $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
//         $rootScope.title = current.$$route.title;
//     });
// }]);