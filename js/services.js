//Services

myApp.service('cityService', function() {
    this.city = 'New york, NY';
});

myApp.service('weatherService', ['$http', function($http){
    this.getWeather = function(api_url, city, days){
     return $http({
            method: 'GET',
            url: api_url,
            params: {
            q: city,
            cnt: days,
            appid: '2724f5a70b4bccac316ba3ff6783a1f8'
            }
        });
    };
}]);