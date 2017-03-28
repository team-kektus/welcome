angular.module('welcome')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'home/home.template.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
          }
        }
      })

      .state('contact', {
        url: '/contact',
        views: {
          '@': {
            templateUrl: 'contact/contact.template.html',
            controller: 'ContactController',
            controllerAs: 'ctrl'
          }
        }
      })

    .state('about', {
      url: '/about',
      views: {
        '@': {
          templateUrl: 'about/about.template.html',
          controller: 'AboutController',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('application', {
      resolve: {
        redirect($window) {
          $window.location.href = '/app/'
        }
      }
    })

    .state('application.login', {
      resolve: {
        redirect($window) {
          $window.location.href = '/app/login/'
        }
      }
    })

  })
