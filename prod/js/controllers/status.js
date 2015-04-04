scannerapp.controller('loginController', ['$scope', '$rootScope', '$firebaseAuth', '$location', 'Authentication', 'FIREBASE_URL', '$firebaseObject', function($scope, $rootScope, $firebaseAuth, $location, Authentication, FIREBASE_URL, $firebaseObject){
	/*
	function authDataCallback(authData) {
	  if (authData) {
	    console.log(authData.password.email);
	    $scope.userEmail = authData.password.email;
	  } else {
	    console.log("User is logged out");
	  }
	}

	var ref = new Firebase("https://shining-torch-5764.firebaseio.com/");
	ref.onAuth(authDataCallback);
	
	$scope.authOut = function() {
		$scope.userEmail = ''
		ref.unauth();
	}*/
	
	$scope.logOut = function() {
		Authentication.logout();
	    $location.path('/');
	}
	
	var ref = new Firebase(FIREBASE_URL);
    $scope.authObj = $firebaseAuth(ref);
	
	$scope.authObj.$onAuth(function(authData) {
		if (authData) {
			var userRef = new Firebase(FIREBASE_URL + '/users/' + authData.uid);
			var userObj = $firebaseObject(userRef);
			
			userObj.$loaded().then(function() {
				$rootScope.currentUser = userObj.firstname;
			});
			
		} else {
			$rootScope.currentUser = null;
		}
	});
}]);