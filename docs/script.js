
// script.js

    // create the module and name it scotchApp
    var app = angular.module('krishIntroApp', ['ngRoute']);
	
	app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Inside Main';
    });
	
	app.controller('aboutController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Inside About';
    });
	
	
	app.controller('contactController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Inside Contact';
		$scope.senderName = '';
		$scope.feedbackMessage = '';
		
		$scope.sendFeedbackToMe = function() {
			sendFeedback($scope.feedbackMessage, $scope.senderName, function() {
					alert('Message Sent Successfully');
			};
		}
    });
	