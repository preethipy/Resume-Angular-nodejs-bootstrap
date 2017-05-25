angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap','signinService'/*,'signupservice'*/]);

/*angular.module('ui.bootstrap.demo').config(['$routeProvider', function($routeProvider){

    $routeProvider.otherwise({
        redirectTo: "../../index.html"
    });
}])*/

angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//unsplash.it/' + newWidth + '/300',
            text: ['Upload Resume','Generate Resume','Share it!','You are done!!!'][slides.length % 4],
            id: currIndex++,
        });
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
});

/*angular.module('ui.bootstrap.demo').controller('SignInCtrl',['$scope','$http','SignIn','SignUp', function($scope, $http, SignIn,SignUp) {

    $scope.SignIn = function() {
        SignIn.signin($scope.formData).success(function(data){
            alert(data)
        })
    };

    $scope.SignUp = function() {
        SignUp.signup($scope.formData)
    };

}]);*/

angular.module('ui.bootstrap.demo').controller('SignInCtrl',['$scope','$http','SignIn', function($scope, $http, SignIn) {

    $scope.SignIn = function() {
        SignIn.signin($scope.formData).success(function(data){
            alert(data)
        })
    };
}]);




