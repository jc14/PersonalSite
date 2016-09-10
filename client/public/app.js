angular.module("Site", ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when("/blog", {
        templateUrl: 'views/blog.html',
        controller: 'BlogController'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
