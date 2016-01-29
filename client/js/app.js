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
			.when('/manageTeam/:username',{
				templateUrl : './partials/manage_team.html',
			})
			.when('/team_profile/:username',{
				templateUrl : './partials/team_profile.html'
			})
			.when('/player_profile/:id',{
				templateUrl : './partials/player_profile.html'
			})
			.when('/gk_profile/:id',{
				templateUrl : './partials/gk_profile.html'
			})
			.when('/teamSummary/:username',{
				templateUrl : './partials/teamSummary.html'
			})
			.when('/tournament/:username',{
				templateUrl : './partials/tournament.html'
			})
			.when('/kickoff/:username',{
				templateUrl : './partials/kickoff.html'
			})
			.when('/openPacks/:username',{
				templateUrl : './partials/openpacks.html'
			})
			.when('/about/:username',{
				templateUrl : './partials/about.html'
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