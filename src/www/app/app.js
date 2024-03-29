var app = angular.module('NewApp', ['ngRoute', 'NewApp.IndexCtrl'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'app/views/index.html',
            controller: 'IndexCtrl'
          }
        )
        .when('/search', {
            templateUrl: 'app/views/search.html',
            controller: 'SearchCtrl'
          }
        )
        .when('/explore', {
            templateUrl: 'app/views/explore.html',
            controller: 'ExploreCtrl'
          }
        )
        .when('/tags', {
            templateUrl: 'app/views/tags.html',
            controller: 'TagsCtrl'
          }
        )
        .when('/tags-view', {
            templateUrl: 'app/views/tags-view.html',
            controller: 'TagsViewCtrl'
          }
        )
        .when('/category', {
            templateUrl: 'app/views/category.html',
            controller: 'CategoryCtrl'
          }
        )
        .when('/category-view', {
            templateUrl: 'app/views/category-view.html',
            controller: 'CategoryViewCtrl'
          }
        )
        .otherwise({redirectTo: '/explore'});
    }]);

app.run(function($rootScope) {
  $rootScope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase === '$apply' || phase === '$digest') {
          if(fn && (typeof(fn) === 'function')) {
              fn();
          }
      } else {
          this.$apply(fn);
      }
  };
  $rootScope.error = {
    error: false,
    message: ''
  };
  $rootScope.handleError = function(message) {
    $rootScope.error.error = true;
    $rootScope.error.message = message;
  };
  $rootScope.dismissError = function() {
    $rootScope.error.error = false;
    $rootScope.error.message = '';
  };
});