import React from "react";
//import auth from "./auth";
//import createList from "./createList"
import {dbGETFetch} from "./functions"


class Lists extends React.Component {
    constructor() {
      super();
      this.state={

      }
      this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount() {
      const url = "http://localhost:2112/items"
      dbGETFetch(url);
    }

    render(){
      return (
        <div>
        <h1>Lists</h1>
        {/* <createList /> */}
      </div>
      )
    }


}

export default Lists