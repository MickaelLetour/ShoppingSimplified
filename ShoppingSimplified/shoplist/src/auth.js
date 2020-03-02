class Auth {
    constructor() {
      this.authenticated = false; //user log status
      this.Button="Register"; //header button text
      this.userid = ""; //logged user id
      this.activeList = null; //active list id
      this.activeItems = null; //active items array
    }
  
    login(cb) {//logs in with callback
      this.authenticated = true;
      cb();
    }
  
    logout(cb) { //loggs out with callback
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() { //return authenticated value
      return this.authenticated;
    }

    setLoginButton() { //button text
      this.Button = "Login";
      return this.Button
    }

    setRegister() { //button text
      this.Button = "Register";
      return this.Button
    }

    setLogout() { //button text
      this.Button = "Logout";
      return this.Button
    }

    storeID(id) { //saves user id
      this.userid =id;
      return this.userid;
    }

    sendID(){ //returns user id
      return this.userid;
    }

    button() { //returns header button text
      return this.Button;
    }

    saveActivelist(id){ //saves id of active list
      this.activeList = id;
      return this.activeList;
    }

    getActiveList(){ //returns active list id
      return this.activeList;
    }

    setActiveItems(data){//saves locally array of ids of active items
      this.activeItems = data;
      return this.activeItems;
    }

    getActiveItems(){ //returns array of active items
      return this.activeItems;
    }


  }
  
  export default new Auth();