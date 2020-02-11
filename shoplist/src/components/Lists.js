import React from "react";
//import auth from "./auth";
import CreateList from "./CreateList.js"
import {dbGETFetch} from "./functions"
//import CreateList from "./createList";


class Lists extends React.Component {
    constructor() {
      super();
      this.state={
        itemlist : "",
      }
      this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount() {
      const url = "http://localhost:2112/items"
      dbGETFetch(url)
      .then((res)=>{
        //console.log(res)
        this.setState({
          itemlist : res,
        })
        console.log(this.state.itemlist);
      })

      
    }


    render(){
      if(this.state.itemlist!="")
      {
      const items =  this.state.itemlist.map(item => <CreateList key={item.id} item={item} 
      componentDidMount={this.componentDidMount}
      />)
      return (
        <div>
        
        {items}
      </div>
      )
      }

      else {
        return(
          <div>Loading...</div>
        )
      }
    }
}

export default Lists