scannerapp.controller('registrationController', ['$scope', '$location', '$firebaseAuth', 'Authentication', function($scope, $location, $firebaseAuth, Authentication) {
		
		// Registration
		$scope.regist = function() {
				Authentication.register($scope.user)
			.then(function(authData) {
				Authentication.login($scope.user)
	            $location.path('/');
            }).catch(function(error) {
	            console.error("Authentication failed:", error);
            });
		}
		
		// Login
		$scope.soumettre = function() {
	        Authentication.login($scope.user)
	        .then(function(authData) {
	            $location.path('/');
            }).catch(function(error) {
	            console.error("Authentication failed:", error);
            });
        }	
	}]
);