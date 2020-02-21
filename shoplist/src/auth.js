class Auth {
    constructor() {
      this.authenticated = false;
      this.Button="Register";
      this.id = "";
      this.activeList = null;
      this.updated = null;
      this.activeItems = null;
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

    storeID(id) {
      this.id =id;
      return this.id;
    }

    sendID(){
      return this.id;
    }

    button() {
      return this.Button;
    }

    saveActivelist(id){
      this.activeList = id;
      return this.activeList;
    }

    getActiveList(){
      return this.activeList;
    }

    setActiveItems(data){
      this.activeItems = data;
      return this.activeItems;
    }

    getActiveItems(){
      return this.activeItems;
    }


  }
  
  export default new Auth();