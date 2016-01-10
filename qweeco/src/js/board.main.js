var app;

app = angular.module('qweeco.board.main', []);

app.controller('AppController', [
  '$scope', '$http', function($scope, $http) {
    $scope.posts = [];
    return $http.get('/posts').then(function(result) {
      return angular.forEach(result.data, function(item) {
        return $scope.posts.push(item);
      });
    });
  }
]);