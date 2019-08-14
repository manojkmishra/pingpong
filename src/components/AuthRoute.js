import React from "react";
import { Route, Redirect, } from "react-router-dom";
import cookie from 'js-cookie';

const AuthRoute = ({ component: Component, ...rest }) => {
    const token = cookie.get('token')
    console.log('inside authroute.js token=',token);
  
    return (  
      <Route  {...rest}
        render={props => /* if token is not present remain on same coponent else redirect to profile component */
          token ? ( <Component {...props } /> ) : (  <Redirect to={{  pathname: "/login", state: { from: props.location }    }}   />   )
        }
      />
    );
  };

  export default AuthRoute;