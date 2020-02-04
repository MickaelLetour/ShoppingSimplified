import React from "react";
import Header from "./components/Header.js"
import NewUser from "./components/NewUser.js"
import Footer from "./components/Footer.js"
<<<<<<< HEAD
//import {dbGETFetch} from "./components/functions"
//import {dbPOSTFetch} from "./components/functions"
=======
import Navbar from "./components/Navbar.js"

import {dbGETFetch} from "./components/functions"
>>>>>>> master

class App extends React.Component {
    /* constructor() {
        super();
        this.state ={
            type: 'password',
            nickname: '',
            password: '',
            logged:false,
        }
        this.showHide = this.showHide.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.componentDidMount=this.componentDidMount.bind(this);
    }

    showHide(){
        this.setState({
          type: this.state.type === 'password' ? 'input' : 'password'
          
        }) 
        console.log(this.state.type); 
      } 

    

      handleChange(event) {
        const {name, value} = event.target
        
        this.setState({
            [name]: value
        })
    } */

    /* handleSubmit(event) {
        let nick =this.state.nickname;
        let pass= this.state.password;
        event.preventDefault();
        

        const url = `http://localhost:2112/users/pass/${nick}&${pass}`;

        //let response = dbGETFetch(url);

        dbGETFetch(url).then((res) => {
            console.log("result "+res);
            this.setState({
                 logged: res  
             })

             console.log(this.state.logged)
         });

         console.log(this.state.logged);
           
    } */

/*     componentDidMount() {
         this.handleSubmit().then(result=> this.setState({
            logged : result,
        }))
        console.log(this.state.logged); 
    } */
    


    render() {
        return (
            <div>
                <Header />
<<<<<<< HEAD
                {/* <Login showHide={this.showHide} 
=======
                <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
                <Login showHide={this.showHide} 
>>>>>>> master
                    type={this.state.type}
                    handleChange={this.handleChange}
                    nickname={this.state.nickname}
                    password={this.state.password}
                    handleSubmit={this.handleSubmit}
                /> */}
                <NewUser />
                <Footer />
            </div>
        )
    }
}

export default App;