angular.module('welcome', [
  'ui.router',
  'welcome.home',
  'welcome.contact',
  'welcome.about'
])


angular.module('welcome')
  .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  })
