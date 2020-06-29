app.controller('MainController', ['$scope', function ($scope) {

    $scope.image ={
         icon: 'img/cherry-50.png',
         header: "Yayy, you're back",
        para: 'Login and lets setup your ideas'
    };

    $scope.signup = {
        icon: 'img/message-sent.png',
        header: 'Hello, Friend!',
        para: 'Enter your personal details and start journey with us'
    };


}]);