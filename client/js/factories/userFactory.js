myApp.factory('userFactory', function($http)
{
	var factory = {};
	var users = [];

	factory.checkUserExists = function (name)
	{	
		var status;
		if(users.indexOf(name) != -1){
			status = true;
		}else{
			status = false;
		}
		return status;
	}
	factory.getUser = function(){
		return users;
	}

	factory.addUser = function(name)
	{
		if(!factory.checkUserExists(name)){
			users.push(name);
			return true;
		}
		else{
			return false;
		}

	}

	return factory;
});