class AboutController {
  constructor() {
    console.log('Initializing AboutController');
  }
}

angular.module('welcome.about')
  .controller('AboutController', [
    AboutController
])
