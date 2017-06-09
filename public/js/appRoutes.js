// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'CarouselDemoController'
        })

        // nerds page that will use the NerdController
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignUpController'
        });

    $locationProvider.html5Mode(true);

}]);
