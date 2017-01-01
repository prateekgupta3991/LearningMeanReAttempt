var app = angular.module('StayUpdated',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home',
			{
			url:'/home',
			templateUrl:'/home.html',
			controller:'MainCtrl'
		});

		$stateProvider.state('posts',
			{
			url:'/posts/{postId}',
			templateUrl:'/posts.html',
			controller:'PostsCtrl'
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
		$scope.posts = userPost.post;

		$scope.addPost = function() {
			if($scope.title == '')
				return;
			$scope.posts.push({title: $scope.title, 
								link: $scope.link,
								upvotes: 0,
								comments: [
							    {author: 'Joe', body: 'Cool post!'},
							    {author: 'Bob', body: 'Great idea but everything is wrong!'}
							  	]
			});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
  			post.upvotes += 1;
		};
	}
]);

app.controller('PostsCtrl',['$scope', 'userPost', '$stateParams',
	function($scope, userPost, $stateParams) {
		$scope.postInfo = userPost.post[$stateParams.postId];
		$scope.addComment = function() {
			if($scope.body == '') {
				return;
			}
			$scope.postInfo.comments.push({
				author: 'user',
				body: $scope.body
				});
			$scope.body = '';
		};
	}
	]);