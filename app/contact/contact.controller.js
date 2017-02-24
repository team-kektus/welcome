class ContactController {
  constructor() {
    console.log('Initializing ContactController');
  }
}

angular.module('welcome.contact')
  .controller('ContactController', [
    ContactController
])
