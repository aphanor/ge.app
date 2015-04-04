scannerapp.factory('Authentication', ['$location', '$firebaseAuth', '$firebase', 'FIREBASE_URL', '$firebaseObject', '$rootScope', function($location, $firebaseAuth, $firebase, FIREBASE_URL, $firebaseObject, $rootScope) {
		
		var ref = new Firebase(FIREBASE_URL);
		var auth= $firebaseAuth(ref);
		
		var Authentication = {
			login: function(user) {
				
				var userRef = new Firebase(FIREBASE_URL + '/users/' + user.uid);
				var userObj = $firebaseObject(userRef);
				
				userObj.$loaded().then(function() {
					$rootScope.currentUser = userObj.firstname;
				});
				
				return auth.$authWithPassword({
					email: user.email, 
					password: user.password
				});
			},
			register: function(user) {
				return auth.$createUser({
					email: user.email, 
					password: user.password
				}).
				then(function(regUser) {
					var ref = new Firebase(FIREBASE_URL + 'users');
					var firebaseUsers = $firebaseObject(ref);
					
					var id = regUser.uid;
					
					var userInfo = {
							date: Firebase.ServerValue.TIMESTAMP,
							regUser: regUser.uid,
							firstname: user.firstname,
							lastname: user.lastname,
							email: user.email
			        };
			
			        //ref.set(userInfo)};
			        ref.child(regUser.uid).set(userInfo);
				})
			},
			logout: function() {
				return auth.$unauth();
			},
			signedIn: function() {
				return auth.user != null;
			}	
		}
		
		$rootScope.signedIn = function() {
			return auth.signedIn();
		}
		
		return Authentication;
}]);