export default function translationConfig($locationProvider, $urlRouterProvider, $stateProvider, $translateProvider) {
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')
  $translateProvider.useSanitizeValueStrategy(null)

  $translateProvider
    .translations('ee', require('./i18n/ee.json'))
    .translations('en', require('./i18n/en.json'))

  $translateProvider.preferredLanguage('ee')
}

translationConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider', '$translateProvider']
