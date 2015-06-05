angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};
  $scope.searchData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    //console.log('Doing login', $scope.loginData);
	if($scope.loginData.username == "Lalit" && $scope.loginData.username == "Lalit"){
		alert("Login Sucessfull");
	}
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
  $scope.doSearch = function() { 	
	if ($scope.searchData.searchVal == "Entertainment"){
		$scope.movies = [
		{ title: 'Entertainment 1', id: 1 },
		{ title: 'Entertainment 2', id: 2 },
		{ title: 'Entertainment 3', id: 3 },
		{ title: 'Entertainment 4', id: 4 }
	  ];
	}
	else if ($scope.searchData.searchVal == "Action"){
		$scope.movies = [
		{ title: 'Action 1', id: 1 },
		{ title: 'Action 2', id: 2 },
		{ title: 'Action 3', id: 3 },
		{ title: 'Action 4', id: 4 }
	  ];
	}
	else if ($scope.searchData.searchVal == "Drama"){
		$scope.movies = [
		{ title: 'Drama 1', id: 1 },
		{ title: 'Drama 2', id: 2 },
		{ title: 'Drama 3', id: 3 },
		{ title: 'Drama 4', id: 4 }
	  ];
	}
	else if ($scope.searchData.searchVal == "Comedy"){
		$scope.movies = [
		{ title: 'Comedy 1', id: 1 },
		{ title: 'Comedy 2', id: 2 },
		{ title: 'Comedy 3', id: 3 },
		{ title: 'Comedy 4', id: 4 }
	  ];
	}
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    
  };
})

.controller('PlaylistsCtrl', function($scope) {		
	$scope.playlists = [
    { title: 'Entertainment', id: 1 },
    { title: 'Action', id: 2 },
    { title: 'Drama', id: 3 },
    { title: 'Comedy', id: 4 }
  ];
})

.controller('testingCtrl', function($scope, Post) {			
	$scope.studentData = {};	
	
	Post.get(function(data) {
		$scope.post = data.records;		
  });
  
  $scope.doAdd = function() {		
	 Post.Save($scope.studentData);
  }	
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
	if ($stateParams.playlistId == 1){	
		$scope.movies = [
		{ title: 'Entertainment 1', id: 1 },
		{ title: 'Entertainment 2', id: 2 },
		{ title: 'Entertainment 3', id: 3 },
		{ title: 'Entertainment 4', id: 4 }
	  ];
	}
	else if ($stateParams.playlistId == 2){
		$scope.movies = [
		{ title: 'Action 1', id: 1 },
		{ title: 'Action 2', id: 2 },
		{ title: 'Action 3', id: 3 },
		{ title: 'Action 4', id: 4 }
	  ];
	}
	else if ($stateParams.playlistId == 3){
		$scope.movies = [
		{ title: 'Drama 1', id: 1 },
		{ title: 'Drama 2', id: 2 },
		{ title: 'Drama 3', id: 3 },
		{ title: 'Drama 4', id: 4 }
	  ];
	}
	else {
		$scope.movies = [
		{ title: 'Comedy 1', id: 1 },
		{ title: 'Comedy 2', id: 2 },
		{ title: 'Comedy 3', id: 3 },
		{ title: 'Comedy 4', id: 4 }
	  ];
	}
});
