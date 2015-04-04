var scannerapp = angular.module('scannerapp', ['ngRoute', 'appControllers', 'firebase']).constant('FIREBASE_URL', 'https://shining-torch-5764.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

scannerapp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
		when('/results', {
		    templateUrl: 'views/results.html'
	}).
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'registrationController'
	}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'registrationController'
	}).
	    when('/accounts', {
		    templateUrl: 'views/accounts.html',
		    controller: 'accountDetails'
	}).
	    when('/', {
		    templateUrl: 'views/home.html'
	}).
		otherwise({
			redirectTo: '/'
	});
	
	$locationProvider.html5Mode(true);
	
}]);