class HomeController {
  constructor() {
    console.log('Initializing HomeController');
    this.model = {username: "", password: ""}

  }
  consolelog() {
      console.log("Clicked button");
      if (this.model.username == "tere" && this.model.password == "1234 ") {
        window.location.href="http://kodu.ut.ee/~qristjan/protot%C3%BC%C3%BCp/profile.html";
      }
      else (
        console.log("Tere")
      )
  }
}

angular.module('welcome.home')
  .controller('HomeController', [
    HomeController
  ])
