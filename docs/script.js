
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
            })
			
			// route for the game page
			.when('/games', {
				templateUrl : 'pages/games.html',
                controller  : 'gamesController'
			})
			
			// route for the software page
			.when('/softwares', {
				templateUrl : 'pages/softwares.html',
                controller  : 'softwaresController'
			})
			;
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
		
		$scope.getGreeting = function() {
			var dt = new Date();
			var hours = dt.getHours();
			
			if(hours >= 0 && hours < 12)
				return "Morning"
			
			if(hours >= 12 && hours < 16)
				return "Afternoon"
			
			if(hours >= 16)
				return "Evening"
		}
		
		$scope.welcomeMessage = "Good " + $scope.getGreeting();

        // create a message to display in our view
        $scope.message = 'Inside Main';
    });
	
	app.controller('aboutController', function($scope) {

        // create a message to display in our view
        $scope.showMessage = function() {
			alertify.success("This page will be ready shortly (Way before Half Life 3 is released anyway)");
		}
    });
	
	
	app.controller('gamesController', function($scope) {

        // create a message to display in our view
        $scope.showMessage = function() {
			alertify.success("This page will be ready shortly (Way before Half Life 3 is released anyway)");
		}
    });
	
	
	app.controller('softwaresController', function($scope) {

        // create a message to display in our view
        $scope.showMessage = function() {
			alertify.success("This page will be ready shortly (Way before Half Life 3 is released anyway)");
		}
    });
	
	app.controller('contactController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Please add your name and drop in your thoughts or feedback.';
		$scope.senderName = '';
		$scope.emailId = '';
		$scope.feedbackMessage = '';
		$scope.ToggleText = 'Use my google account to send feedback';
		$scope.UseGoogleLogin = false;
		
		$scope.showErrorMessage = function(message) {
				alertify.error(message);
		}
		
		$scope.OnLoad = function() {
			//$(':checkbox').checkboxpicker();
			//if(!$scope.$$phase) $scope.$digest();
		}
		
		$scope.toggleLogin = function() {
			$scope.UseGoogleLogin = !$scope.UseGoogleLogin;
			
			if($scope.UseGoogleLogin)
				$scope.ToggleText = 'Do not use my google account to send feedback';
			else
				$scope.ToggleText = 'Use my google account to send feedback';
		}
		
		$scope.showSuccessMessage = function(message) {
			alertify.success(message);
		}
		
		$scope.feedbackCallback = function() {
			$scope.senderName = '';
			$scope.feedbackMessage = '';
			$scope.showSuccessMessage('Thank you for your feedback!');
			if(!$scope.$$phase) $scope.$digest();
		}
		
		$scope.emailCallback = function() {
			$scope.emailId = '';
			if(!$scope.$$phase) $scope.$digest();
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
	