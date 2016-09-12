angular.module("Site")
  .controller("HomeController", function($scope, $http) {
    $scope.projects = [];
    $http({
      method: "GET",
      url: "/projects"
    }).then(function(response) {
      $scope.projects = response.data;
    })
  })
