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
          console.log("User Created");
      })
  } 
