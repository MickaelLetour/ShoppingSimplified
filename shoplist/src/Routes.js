import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from "./components/Header.js";
import App from "./App.js";

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
        {<Route path="/" component={App} />}
      </div>
    </Router>
    )
  }
}

 export default Routes
  
