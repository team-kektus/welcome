class IndexController {
  constructor() {
    console.log('Initializing IndexController');
  }
}

angular.module('welcome')
  .controller('IndexController', [
    IndexController
  ])
