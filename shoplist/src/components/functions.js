export function dbPOSTFetch(url,data) { //fetch funtion of type POST
      return fetch(url, {
          method: 'POST',
          mode: 'cors',
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

  export function dbPUTFetch(url,data) { //fetch funtion of type PUT
    return fetch(url, { //uses the URL passed as parametter to connect to the right URL of the API
        method: 'PUT', //method we are using for this request
        mode: 'cors', //mode to let the browser grant access to information from other origin
        body: JSON.stringify(data), //object body containing all information to be updated into the database
        headers: { //informs the browser that it will be passing JSON information
            'Content-Type': 'application/json'
        }
    }).then(res =>res.json()) //receives API response into a json object
        
    .catch(err => err) //returns any error message received

    .then(res=>{
        return res; //returns the request response
    })
}

  export async function dbGETFetch(url) { //fetch funtion of type GET
    return await fetch(url, { //uses the URL passed as parametter to connect to the right URL of the API
        method: 'GET', //method we are using for this request
        mode: 'cors', //mode to let the browser grant access to information from other origin
       
    }).then(res =>res.json()) //passes API responso into a json object
        
    .catch(err => err) //returns any error message received

    .then(res=>{
        return res; //returns the request response
    })
} 

export async function dbDeleteFetch(url) { //fetch funtion of type DELETE
    return await fetch(url, {
        method: 'DELETE',
        //mode: 'cors',
       
    }).then(res =>res.json()) 
        
    .catch(err => err)

    .then(res=>{
        return res;
    })
}
