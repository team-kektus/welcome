angular.module('welcome', [
  'ui.router'
])


angular.module('welcome')
  .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  })
