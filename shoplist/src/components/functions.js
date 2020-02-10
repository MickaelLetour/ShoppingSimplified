
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
  

  /* const Data = {nickname: "alfatester",
        password: "ultiass",
        email: "two@mail.com",
        photo: "superphotourl"} ; */
export function dbPOSTFetch(url,data) {
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
          /* console.log(res);
          console.log("item created"); */
          return res;
      })
  } 

  export async function dbGETFetch(url) {
    return await fetch(url, {
        method: 'GET',
        mode: 'cors',
       
    }).then(res =>res.json()) 
        
    .catch(err => err)

    .then(res=>{
        return res;
    })
} 

/* 
export async function dbGETFetch(url) {
    return await fetch(url, {
        method: 'GET',
        //mode: 'CORS',
        //body: JSON.stringify(data),
       /*  headers: {
            'Content-Type': 'application/json'
        } */
    //}).then(res =>{ return res.json().catch((res) => {return res;})}).catch(err => err); */



/*   export function test(){
      console.log("i'm a function");
  } */


  /* export async function fetchData(resp){
    let response = await fetch(resp);
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
   } */

  /*  export async function fetchData(resp){
    let response = await fetch(resp);
    return response.json();
   } */
