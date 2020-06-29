app.controller('MainController', ['$scope', function ($scope) {
    $scope.apps = {
        Fusername: "",
        Lusername: "",
        username: "",
        password: "",
        bod: "",
        country: ""
    };

    $scope.image ={
         icon: 'img/cherry-50.png',
         
    };

    $scope.signin ={
        Fusername: '',
        password: '',
    }

    $scope.signup = {
        icon: 'img/message-sent.png'
    };


}]);