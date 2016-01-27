//=======================================================
//client side: usersController
//=======================================================
myApp.controller('usersController', function($scope, $rootScope,userFactory)
{	
	$rootScope.users = [];
	$rootScope.currentUser = {};
	var getUser = function(){
		$rootScope.users = userFactory.getUser();
		console.log('$rootscope.users')
		console.log($rootScope.users)
		$rootScope.currentUser = {username:currentUser};
		console.log('$rootScope.currentUser');
		console.log($rootScope.currentUser);
	}
	


	$scope.addUser = function() 
	{	
		$('#username_error').text('');
		$('#username_success').text('');		
		if(!userFactory.addUser($scope.newUser.username)){
			$('#username_error').text('username has been used. Pick another username!');
		}else{
			currentUser = $scope.newUser.username;
			$rootScope.currentUser.username = currentUser;
			$('#username_success').text('username added successfully!');
			$scope.newUser = {};
			getUser();
		}
		
	}

	$scope.loginUser = function(){
		$('#username_error').text('');
		$('#username_success').text('');	
		if(!userFactory.checkUserExists($scope.oldUser.username)){
			$('#username_error').text('username not found in database. Please register first!');
		}else{
			currentUser = $scope.oldUser.username;
			$rootScope.currentUser.username = currentUser;
			$scope.oldUser = {};
			$('#username_success').text('logged in as '+currentUser);
			getUser();
		}
	}

	getUser();
	
})