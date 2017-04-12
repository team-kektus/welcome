angular.module('welcome', [
  'ui.router',
  'welcome.home',
  'welcome.contact',
  'welcome.about',
  'pascalprecht.translate'
])

angular.module('welcome')
  .config(function ($locationProvider, $urlRouterProvider, $stateProvider, $translateProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
    $translateProvider.useSanitizeValueStrategy(null);

    $translateProvider.translations('ee', {
      ABOUT: 'Meist',
      CONTACT: 'Kontakt',
      HOME: 'Kodu',
      CPY: 'Kõik õigused reserveeritud.',
      LOGIN: 'Palun logi sisse',
      ABOUTTXT1: 'Lühidalt meist ja projektist',
      ABOUTTXT2: 'Käesolev veebileht on loodud Tartu Ülikooli "Veebirakenduste loomine" aine raames. Veebilehe loomisel on kasutatud mitmeid erinevaid keeli ja lahendusi nagu näiteks HTML, CSS, JavaScript, Bootstrap4, AngularJS.',
      ABOUTTXT3: 'Meist nii palju, et oleme 3 kasutut looma, kes üritavad kuidagi hommiku õhtusse veeretada.',
      CONTACTTXT1: 'Kontaktid',
      CONTACTTXT2: 'Infotelefon:',
      CONTACTTXT3: 'Aadress',
      en: 'English',
      ee: 'Eesti'
    })
    .translations('en', {
      ABOUT: 'About us',
      CONTACT: 'Contact',
      HOME: 'Home',
      LOGIN: 'Please log in',
      CPY: 'All rights reserved.',
      ABOUTTXT1: 'Shortly about us and the project',
      ABOUTTXT2: 'Current webpage is created for the "Web Application Development" course. In the development of the page there are used different languages and solutions like HTML, CSS, JavaScript, Bootstrap4, AngularJS.',
      ABOUTTXT3: 'So much about us that we are 3 useless animals trying to get over with the day.',
      CONTACTTXT1: 'Contacts',
      CONTACTTXT2: 'Support number:',
      CONTACTTXT3: 'Address',
      en: 'English',
      ee: 'Eesti'
    });

    $translateProvider.preferredLanguage('ee');
  })

  .controller('welcomeCtrl', function($translate) {
    var ctrl = this;

    ctrl.language = 'ee';
    ctrl.languages = ['ee', 'en'];
    ctrl.updateLanguage = function() {
      $translate.use(ctrl.language);
    };
  });
