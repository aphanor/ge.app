scannerapp.controller('registrationController', ['$scope', '$location', function($scope, $location) {
	$scope.soumettre = function() {
		$location.path('/');
	}
}]);