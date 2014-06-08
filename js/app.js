(function(){
	var app = angular.module('refStore', []);
	
	app.controller('RefController', function($scope, $http){
		$http({method: 'GET', url: 'http://localhost:8000/ReportSite/data/refs.json'}).
			success(function(data, status, headers, config) {
				$scope.refList = data.references;
				$scope.response = "success";
			}).
			error(function(data, status, headers, config) {
				$scope.response = "error";
			});
	});
})();