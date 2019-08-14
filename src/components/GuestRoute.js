import React , {Component} from "react";
import { Route, Redirect, } from "react-router-dom";
import cookie from 'js-cookie';

const GuestRoute = ({ component: Component, ...rest }) => {
    const token = cookie.get('token')
    console.log('inside guestroute.js token=',token);
  
    return (  
      <Route  {...rest}
        render={props => /* if token is not present remain on same coponent else redirect to profile component */
          !token ? ( <Component {...props } /> ) : (  <Redirect to={{  pathname: "/profile", state: { from: props.location }    }}   />   )
        }
      />
    );
  };

  export default GuestRoute;