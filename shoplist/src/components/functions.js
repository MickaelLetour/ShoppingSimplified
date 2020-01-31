
/* export function toglePw(id) {
    var x = document.getElementById(id)

    if(x.type === "password")
        x.type = "text";
    else
        x.type = "password";
} */



/* export function showHide(){
    this.setState({
      type: this.state.type === 'password' ? 'input' : 'password'
    })  
  }

  import fetch from 'isomorphic-fetch';
 */
  // * snip *
  
export function createUser(url,data) {
      return fetch(url, {
          method: 'POST',
          //mode: 'CORS',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(res =>res.json()) 
          
      .catch(err => err)

      .then(res=>{
          console.log(res);
      })

  } 


/*   export function test(){
      console.log("i'm a function");
  } */