//Controllers 
//Main controller
myApp.controller('mainController',['$scope','$log','$filter','$resource','$timeout','$http','cityService','$location',function($scope, $log, $filter, $resource, $timeout, $http, cityService,$location){
    $scope.city = cityService.city;
    $scope.validationFailed = false;
    $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });
    $scope.submit = function(){
        if($scope.city !== ''){
            $location.path('/forecast');    
        }else{
            $scope.validationFailed = true;
        }
        
    }
}]);

//second page controller
myApp.controller('secondController',['$scope','$log','$filter','$location','$routeParams','cityService','weatherService','$timeout',function($scope, $log, $filter,$location, $routeParams ,cityService,weatherService,$timeout){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.apiError = false;
    var api_url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    //call the weather service to get the weather object
    $scope.getWeatherResult = weatherService.getWeather(api_url, $scope.city, $scope.days).success(function(d){
        $scope.weatherResult = d;
    }).error(function(e){
        $scope.apiError = true;
        $scope.weatherResult = e;
    });
    
    $scope.convertToCelcius = function(degK){
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(date){
        return new Date(date * 1000);
    }
}]);

