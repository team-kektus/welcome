export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '@': {
          template: require('./home/home.template.html'),
          controller: 'HomeController',
          controllerAs: 'ctrl'
        }
      }
    })

    .state('contact', {
      url: '/contact',
      views: {
        '@': {
          template: require('./contact/contact.template.html'),
          controller: 'ContactController',
          controllerAs: 'ctrl'
        }
      }
    })

  .state('about', {
    url: '/about',
    views: {
      '@': {
        template: require('./about/about.template.html'),
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

}

routes.$inject = ['$stateProvider']
