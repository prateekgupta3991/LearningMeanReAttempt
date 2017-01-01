angular.module('Routes',[])
.config(['$stateProvider', '$urlRouterProvider',
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