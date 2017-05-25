angular.module('signinService', [])
    .factory('SignIn', ['$http',function($http){
        return{
            get : function() {
                return $http.get('/api/get');
            },
            signin : function(postData) {
                return $http.post('/api/signin', postData);
            },
            delete: function(id) {
                return $http.delete('/api/delete/id');
            }
        }
    }]);

/*app.factory('SignUp', ['$http',function($http){
    return{
        signup : function(postData) {
            return $http.post('/api/signup', postData);
        },
    }
}]);*/

