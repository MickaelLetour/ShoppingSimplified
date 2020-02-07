class Auth {
    constructor() {
      this.authenticated = false;
      this.Button="Register";
    }
  
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    setLoginButton() {
      this.Button = "Login";
      return this.Button
    }

    setRegister() {
      this.Button = "Register";
      return this.Button
    }

    setLogout() {
      this.Button = "Logout";
      return this.Button
    }

    button() {
      return this.Button;
    }
  }
  
  export default new Auth();