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
    return fetch(url, {
        method: 'PUT',
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

  export async function dbGETFetch(url) { //fetch funtion of type GET
    return await fetch(url, {
        method: 'GET',
        mode: 'cors',
       
    }).then(res =>res.json()) 
        
    .catch(err => err)

    .then(res=>{
        return res;
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
