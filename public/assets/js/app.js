angular.module('yomiElu', ['routerRoutes',])


.factory('instagram', ['$http', function($http){

	return {
		fetchPopular: function(callback){
            
            var endPoint = "https://api.instagram.com/v1/users/self/media/recent/?access_token=320358671.1677ed0.84f02445ecc24c4c92bfc25b15e47e40&callback=JSON_CALLBACK";
            
            $http.jsonp(endPoint).success(function(response){
                callback(response.data);
            });
		}
	}

}])

.controller('showImages', ['$scope', 'instagram' ,
function ($scope, instagram){

	$scope.pics = [];

	instagram.fetchPopular(function(data){

		$scope.pics = data;
	});

}]);