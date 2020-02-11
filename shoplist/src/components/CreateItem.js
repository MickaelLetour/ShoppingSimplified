import React, {Component} from "react"
/* import avatar from "../img/user.png"
import {dbGETFetch} from "./functions" */


class CreateItem extends Component {
    constructor(props){
        super(props)
          this.state = {
            category : "",
            icon : "",
            name :"",
            category_id :"",
            icon_id:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);

        fetch("http://localhost:2112/categories" ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ category : res})
            return res;
        })

        fetch("http://localhost:2112/icons" ,{
            method: 'GET',
            mode : 'cors',
    
        }).then(res => res.json())
    
        .catch(err => err)
    
        .then(res => {
            this.setState({ icon : res})
            return res;
        })
      }

        handleSubmit(event) {
            event.preventDefault();
            const data = 
                {
                    category_id:this.state.category_id,
                    icon_id: this.state.icon_id,
                    name: this.state.name
                };
            console.log(data);
            fetch("http://localhost:2112/items", {
                method : 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res =>res.json()) 
        
            .catch(err => err)
        
            .then(res=>{
                console.log(res);
                console.log("Item Created");
            })
        }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>ItemCategory:<br/>
                    <select name="category_id" value={this.state.category_id} onChange={e => this.setState({category_id : e.target.value})} required>
                            <option></option>
                        {Object.entries(this.state.category).map(([key, category], i) => (
                            <option name="category" key={i} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                    </label><br/>

                    <label>ItemIcon:<br/>
                    <select name="icon_id" value={this.state.icon_id} onChange={e => this.setState({icon_id : e.target.value})} required>
                            <option></option>
                        {Object.entries(this.state.icon).map(([key, icons], i) => (
                            <option key={i}  value={icons.id}>{icons.icon}</option>
                        ))}
                    </select>
                    </label><br/>

                    <label>ItemName:<br/>
                        <input 
                            type="text" 
                            placeholder="Enter Name of item" 
                            value= {this.state.name}
                            name="name" 
                            onChange={e => this.setState({name : e.target.value})}
                            required 
                        />
                    </label>
                
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default CreateItem