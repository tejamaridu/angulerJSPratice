
var app = angular.module('myApp', []);
app.controller('emp', ['$scope', 'calService', function($scope, calService){
  $scope.msg = 'This second message';

  $scope.getEmployees = function(){
    calService.fetchEmployees(function(r){
      $scope.employees = r;
  });
}
}]);

app.directive('empDetails', function(){
  return {
      templateUrl: "emp-details.html"
  };
});

app.directive('myInfoMsg', function(){
  return {
      // First way
      // template: "<strong>This is First Message</strong>" or template: "<strong>{{msg}}</strong>"

      // Second way
      // templateUrl: "my-info-msg.html"

      // Third way
      templateUrl: "my-info-msg.html"
  };
});

app.directive('empsInfo', function(){
  return {
      templateUrl: "emps-info.html"
  };
});

app.service('calService', ['$http', '$log', function($http, $log){
   this.fetchEmployees = function(cb){
     $http({
       url: 'http://localhost:8080/webServices/resources/utils/sampleListJson',
       method: 'GET'
     }).then(function(resp){
       cb(resp.data);
     }, function(resp){
       cb('Error occurred!!');
     })
   }
}]);
