var scannerapp = angular.module('scannerapp', ['ngRoute', 'appControllers', 'firebase']);

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
		when('/registration', {
			templateUrl: 'views/registration.html',
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