import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Log from "./Log.js";
import ShopList from "./ShopList.js";
import { ProtectedRoute } from './protRoute.js';

class Routes extends React.Component {

  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Log} />
          <ProtectedRoute exact path="/ShopList" component={ShopList} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </Router>
    )
  }
}

 export default Routes
  
