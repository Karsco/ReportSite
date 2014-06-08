'use strict'

var app = angular.module('AngularAnimation', ["ngAnimate", "ngDialog"]);

app.controller('SlideCtrl', function($scope, $timeout, $animate) {
	$scope.ready = 'true';
	$scope.article = '1';
	
	var maxArticles = '4';
	var timeToChange = 3000;
	
	$scope.nextClicked = function(){
		$scope.article = ($scope.article % maxArticles) + 1;
	}
	
	var articleTimer =
		$timeout(function interval() {
			articleTimer = $timeout(interval, timeToChange);
    }, timeToChange);
	
});

app.controller('dialogCtrl', function ($scope, ngDialog) {
	$scope.open = function (dialogId) {
		ngDialog.open( {
			template: dialogId,
			className: 'ngdialog-theme-default ngdialog-theme-custom'
		});
	};	
	$scope.close = function(dialogId){	
		ngDialog.close(dialogId);
	};
});



