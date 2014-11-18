

angular.module('app', ['ngSanitize', 'ui.highlight'])
  .controller('ModulesControler', ['$scope', '$http',
    function($scope, $http) {
      $scope.loading = true;

      $http.get('/zero-packages')
        .success(function(data) {
          $scope.packages = data;
        })
        .finally(function() {
          $scope.loading = false;
        })
    }
  ])


angular.module('ui.highlight',[]).filter('highlight', function () {
  return function (text, search, caseSensitive) {
    if (text && (search || angular.isNumber(search))) {
      text = text.toString();
      search = search.toString();
      if (caseSensitive) {
        return text.split(search).join('<span class="ui-match">' + search + '</span>');
      } else {
        return text.replace(new RegExp(search, 'gi'), '<span class="ui-match">$&</span>');
      }
    } else {
      return text;
    }
  };
});
