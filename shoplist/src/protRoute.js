import React from "react"; //Imports react, allow implementation of JSX
import { Route, Redirect } from "react-router-dom"; //imports react router components
import Auth from "./auth"; //imports local storage class auth

export const ProtectedRoute = ({ //opens and exports Protected route
    component: Component, //stores component received in props
    ...rest //all other info
  }) => {
    return ( //returns JSX elements
      <Route //Opens route component
        {...rest} //Loads all info
        render={props => { //opens props sent
          if (Auth.isAuthenticated()) { //verify if the session is active in Auth
            return <Component {...props} />; //if it is, returns the component and all 
            //props that should contain a Route Exact Path
          } else {//if autentication is not active or equl to true
            return (
              <Redirect //redirects user to loginpage
                to={{
                  pathname: "/", //root path or login path
                  state: {//history state
                    from: props.location,
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };