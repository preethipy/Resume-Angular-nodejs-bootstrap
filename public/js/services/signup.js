angular.module('SignUpService',[]).factory('SignUp', ['$http', function($http) {
    return {
        // call to get all nerds
        get: function () {
            alert("came this far")
            return $http.get('/api/signup');
        }
    }

}]);