var app = angular.module('StayUpdated',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home',
			{
			url:'/home',
			templateUrl:'/home.html',
			controller:'MainCtrl'
		});
		$urlRouterProvider.otherwise('home');
	}
]);

app.factory('userPost',[function() {
		var o = {
			post:[]
		};
		return o;
	}
]);

app.controller('MainCtrl', ['$scope','userPost',
	function($scope, userPost) {
		$scope.test = 'hey guys';
		$scope.posts = userPost.post;

		$scope.addPost = function() {
			if($scope.title == '')
				return;
			$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
  			post.upvotes += 1;
		};
	}
]);