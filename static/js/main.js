/**
 * Created by florije on 2015/3/18.
 */
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {

    var partialsDir = '/static/partials/';

    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: partialsDir + 'home.html',
            controller: 'mainController'
        })

        .when('/register', {
            templateUrl: partialsDir + 'register.html',
            controller: 'registerController'
        })

        .when('/login', {
            templateUrl: partialsDir + 'login.html'
        })

        // route for the about page
        .when('/about', {
            templateUrl: partialsDir + 'about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: partialsDir + 'contact.html',
            controller: 'contactController'
        })

        .otherwise({
            redirectTo: '/'
        });
    //$locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});