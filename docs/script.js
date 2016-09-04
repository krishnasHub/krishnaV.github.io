
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
        $scope.message = 'Please add your name and drop in your thoughts or feedback.';
		$scope.senderName = '';
		$scope.emailId = '';
		$scope.feedbackMessage = '';
		
		$scope.showErrorMessage = function(message) {
				alertify.error(message);
		}
		
		$scope.showSuccessMessage = function(message) {
			alertify.success(message);
		}
		
		$scope.feedbackCallback = function() {
			$scope.senderName = '';
			$scope.feedbackMessage = '';
			$scope.showSuccessMessage('Thank you for your feedback!');
			$scope.$digest();
		}
		
		$scope.emailCallback = function() {
			
		}
		
		$scope.sendFeedbackToMe = function() {
			if($scope.senderName == '' || $scope.feedbackMessage == '') {
				$scope.showErrorMessage('Please fill in your name and a feedback.');
				return;
			}
			
			var name = $scope.senderName;
			
			sendFeedback($scope.feedbackMessage, $scope.senderName, $scope.feedbackCallback);
			
			if($scope.emailId != '') {
				var subject = 'Thank you for contacting me';
				var message = name + ',\n\nThank you for contacting me. \nI am thrilled that you liked what I\'ve done so far and truly appreciate your feedback.';
				
				sendEmailTo($scope.emailId, subject, message, $scope.emailCallback);
			}
		}
    });
	