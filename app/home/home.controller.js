class HomeController {
  constructor() {
    console.log('Initializing HomeController');
  }
}

angular.module('welcome.home')
  .controller('HomeController', [
    HomeController
  ])
