angular.module('friendsList')
    .controller('mainCtrl', function($scope){
        $scope.friends = ["Sarah", "Jason", "Colton", "Dayton", "Logan"];

        $scope.addFriend = function(){
            $scope.friends.push($scope.newFriend);
            $scope.newFriend = '';
        }
});
