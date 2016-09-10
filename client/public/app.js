angular.module("Site", ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
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

      $locationProvider.html5Mode(true);
  })
