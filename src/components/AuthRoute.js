import React from "react";
import { Route, Redirect, } from "react-router-dom";
import cookie from 'js-cookie';
import { connect } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
    console.log('AuthRoute  ...rest=',{...rest})
    const token = cookie.get('token')
    console.log('inside authroute.js token=',token);
  
    return (  
      <Route  {...rest}
        render={props => /* if token is not present remain on same coponent else redirect to profile component */
          rest.loggedIn ? ( <Component {...props } /> ) : (  <Redirect to={{  pathname: "/login", state: { from: props.location }    }}   />   )
        }
      />
    );
  };

 // export default AuthRoute;
  const mapStateToProps = state=>{  console.log('mapDispatchToProps from login');   //2- dispatch action name=setLogin, type(mutation=SET_LOGIN) and values=user
  return {loggedIn: state.auth.loggedIn}
}
export default connect (mapStateToProps)(AuthRoute);    //1-connect login page and two arguments