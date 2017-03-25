class HomeController {
  constructor($location) {
    console.log('Initializing HomeController');
    this.$location = $location

    this.model = {email: "", password: ""}
  }

  login() {
    console.log(this.model);
    fetch('/api/v1/auth/', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(this.model)
    }).then(() => {
      window.location.path = '/app/'
      window.location.reload()
    }).catch(response => {
      console.log(response)
    })
  }
}

angular.module('welcome.home')
  .controller('HomeController', [
    '$location',
    HomeController
  ])
