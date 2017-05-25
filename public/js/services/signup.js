var app = angular.module('signupservice', ['ngRoute'])


app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/signup', {
        templateUrl: "../../signup.html",
        controller: "SignUpCtrl"
        });
}])

app.controller('SignUpCtrl',[function(){}])