export function toglePw(id) {
    var x = document.getElementById(id)

    if(x.type === "password")
        x.type = "text";
    else
        x.type = "password";
}



export function showHide(){
    this.setState({
      type: this.state.type === 'password' ? 'input' : 'password'
    })  
  }

  export default showHide; toglePw;