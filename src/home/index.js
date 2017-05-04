import uirouter from 'angular-ui-router'

import Controller from './home.controller'

export default angular.module('welcome.home', [
  uirouter
])
.controller('HomeController', Controller)
.name
