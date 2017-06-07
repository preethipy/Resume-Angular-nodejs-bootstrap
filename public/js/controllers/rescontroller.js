angular.module('CarouselDemoCtrl',[]).controller('CarouselDemoController', function ($scope) {
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