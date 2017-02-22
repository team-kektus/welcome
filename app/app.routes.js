angular.module('welcome')
  .config(function ($stateProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'index/index.template.html',
            controller: 'IndexController',
            controllerAs: 'ctrl'
          }
        }
      })

  })
