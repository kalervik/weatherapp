//directive
myApp.directive('weatherReport', function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherreport.html',
       replace: true,
       scope: {
           weatherDay: '=',
           convertToStandard: '&',
           convertToDate: '&',
           datFormat: '@'
       }
   } 
});