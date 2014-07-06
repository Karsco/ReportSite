'use strict'

var app = angular.module('AngularSounds', []);

app.controller('soundCtrl', function($scope) {
	$scope.currentVoice = 1;
	$scope.playVoice = function(firstVoice, maxVoices){
		if(($scope.currentVoice > maxVoices) || ($scope.currentVoice < firstVoice))
			$scope.currentVoice = firstVoice;
		var currentVoiceElement = "audioHM" + $scope.currentVoice;
		var audio = document.getElementById(currentVoiceElement);
		audio.play();
		if($scope.currentVoice == maxVoices)
			$scope.currentVoice = firstVoice;
		else
			$scope.currentVoice++;
	};
	$scope.playClip = function(clipId){
		var audio = document.getElementById(clipId);
		audio.play();
	};
});