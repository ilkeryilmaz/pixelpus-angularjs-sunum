var app = angular.module('app',[]);

// Factory
app.factory('getDataList', function($http){
   function getRepo(usermame) {
     var data = $http({
       url: "https://api.github.com/users/"+usermame+"/repos",
       method: "GET",
     });
     return data;
   };

   var service = {
      getRepo: getRepo
    };
    return service;
});

// Controller
app.controller('listController', function($scope,getDataList) {
  $scope.repos = [];
  $scope.usermame = "ilkeryilmaz";
  getDataList.getRepo($scope.usermame).success(function(data){
    $scope.repos = data;
  });

  $scope.getOtherRepo = function(username) {
    getDataList.getRepo(username).success(function(data){
      $scope.repos = data;
    });
  }

  $scope.getTotal = function(){
    return $scope.repos.length;
  }
});
