import './app.scss'

import angular from 'angular'
import uirouter from 'angular-ui-router'
import translate from 'angular-translate'

import aboutview from './about'
import homeview from './home'
import contactview from './contact'

import routing from './app.routes'
import translationConfig from './translation.config'
import MainController from './app.controller'

angular.module('welcome', [
  uirouter,
  homeview,
  contactview,
  aboutview,
  translate
])

.config(translationConfig)

.controller('MainController', MainController)
.config(routing)
