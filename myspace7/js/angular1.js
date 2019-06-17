angular.module('myApp', [])
  .controller('myCtrl', ['$scope', function($scope){
    // ここにコードを書いていく
var countries =['Japan','Amecica','Africa','English'];
var selectedCountry = 'Japan';

$scope.countries = countries;
$scope.selectedCountry = selectedCountry;
  }]);