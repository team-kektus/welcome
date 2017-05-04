export default function MainController($translate) {
  this.language = localStorage.getItem('languagePreference') || 'ee'
  this.languages = ['ee', 'en']

  this.updateLanguage = () => {
    $translate.use(this.language)
    localStorage.setItem('languagePreference', this.language)
  }
}

MainController.$inject = ['$translate']
