   function GitHubCtrl($scope, $http) {
      $scope.userNotFound = false;
      $scope.loaded = false;
      $scope.getGitInfo = function () {
         $http.get("https://api.github.com/users/" + $scope.username)
               .success(function (data) {
                  if (data.name == "") data.name = data.login;
                  $scope.user = data;
                  $scope.loaded = true;
                  $scope.loaded = true;
               })
               .error(function () {
                  $scope.userNotFound = true;
                  //this is an other branch and changed in server...clone
               });
         $http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
            $scope.repos = data;
            $scope.reposFound = data.length > 0;
         });
      }
   }
