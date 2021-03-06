
var app = angular.module('myApp', []);
app.controller('emp', ['$scope', 'calService', '$http', '$log', function($scope, calService, $http, $log){
  $scope.sal = '';
  $scope.doSearch = function(){
    calService.getEmpById($scope.searchEmpId, function(r){
      $scope.empId = r.id;
      $scope.name = r.name;
      $scope.age = r.age;
      $scope.dob = r.dob;
      $scope.sal = r.sal;
      $scope.city = r.city;
    });
}

$scope.getEmployees = function(){
  calService.fetchEmployees(function(r){
    $scope.employees = r;
});
}

}]);

app.service('calService', ['$http', '$log', function($http, $log){
  // With restfull web services
   this.getEmpById = function(empId, cb){
     $http({
       url: 'http://localhost:8080/webServices/resources/utils/empById?empId=' +empId,
       method: 'GET'
     }).then(function(resp){
       cb(resp.data);
     }, function(resp){
       cb('Error occurred!!');
     })
   }

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
