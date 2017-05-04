export default class HomeController {
  constructor($state, $http) {
    console.log('Initializing HomeController');
    this.$state = $state
    this.$http = $http
    this.validationError = false;
    this.model = {email: "", password: ""}
  }

  login() {
    this.$http({
      method: 'POST',
      url: '/api/v1/auth/',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(this.model)
    }).then(response => {
      this.$state.go('application')
    }).catch(response => {
      console.log('le wild error appeared:');
      console.log(response);
      this.validationError = true;

    })
  }

  goToRegister() {
    this.$state.go('application.login')
  }
}

HomeController.$inject = ['$state', '$http']
