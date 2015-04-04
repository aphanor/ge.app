scannerapp.controller('accountDetails', ['$scope', '$firebaseObject', '$firebaseArray', function($scope, $firebaseObject, $firebaseArray) {
	var ref = new Firebase('https://shining-torch-5764.firebaseio.com/accounts');
	
	$scope.accounts = $firebaseObject(ref);
	
	console.log($scope.accounts)
	
	$scope.addAccounts = function() {
		$scope.accounts = $firebaseArray(ref);
		$scope.accounts.$add({
			username: $scope.username
		});
	}
	
	$scope.deleteUser = function(key) {
		$scope.accounts.$remove(key);
	}
}]);