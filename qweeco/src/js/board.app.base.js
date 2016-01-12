var app;

app = angular.module('board.app.base', []);

var list_uri = '/api/messages/';

app.controller('AppController', function($scope, $http) {

	$scope.init = function(){
		$http.get(list_uri).success(function(data) {
			$scope.messages = data.results;

			// pager
			$scope.pager = {
				countItems: data.count,
				next: data.next,
				previous: data.previous
			}

		});
	}

	$scope.go = function(link) {
		list_uri = link;
		$scope.init();
	}

	$scope.init();
});

app.controller('PostController', function($scope, $http) {
	self = this;
	self.post = {};
	self.addMessage = function() {
		$http.post(list_uri, this.post).success(function(data){
			$scope.messages.push(data);
			self.post = {};
		});
	}
});
