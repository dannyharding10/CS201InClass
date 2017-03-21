var app = window.angular.module('app', [])

app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)

function pokemonFetcher ($http) {

  var API_ROOT = 'pokemon'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    },
    post: function (formData) {
      return $http
        .post(API_ROOT, formData)
        .then(function (resp) {
         console.log("Post worked");
        })
    } 
  }
}

function mainCtrl ($scope, pokemonFetcher) {

  $scope.pokemon = [];

  $scope.addPoki = function() {
    console.log('aaaaayy');
    debugger;
    var formData = {name:$scope.Name,avatarUrl:$scope.Url};
    alert(formData);
    pokemonFetcher.post(formData); // Send the data to the back end
    $scope.pokemon.push(formData); // Update the model
  }

  pokemonFetcher.get()
    .then(function (data) {
      console.log(data);
      $scope.pokemon = data
    });

}
