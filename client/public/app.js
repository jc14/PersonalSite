angular.module("Site", [require('angular-route')])
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
