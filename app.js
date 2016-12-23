var app = angular.module('StayUpdated',[]);

app.controller('MainCtrl', ['$scope',
	function($scope) {
		$scope.test = 'hey guys';
		$scope.posts = [];

		$scope.addPost = function() {
			if($scope.title == '')
				return;
			$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
			$scope.title = '';
			$scope.link = '';
		}

		$scope.incrementUpvotes = function(post) {
  			post.upvotes += 1;
		};
	}
]);