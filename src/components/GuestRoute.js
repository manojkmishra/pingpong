import React from "react";
import { Route, Redirect, } from "react-router-dom";
import cookie from 'js-cookie';
import { connect } from 'react-redux';

const GuestRoute = ({ component: Component, ...rest }) => {
    const token = cookie.get('token')  //not required anymore
    console.log('inside guestroute.js token=',token);
  
    return (  
      <Route  {...rest}
        render={props => /* if token is not present remain on same coponent else redirect to profile component */
          !rest.loggedIn ? ( <Component {...props } /> ) : (  <Redirect to={{  pathname: "/profile", state: { from: props.location }    }}   />   )
        }
      />
    );
  };

  //export default GuestRoute;
  const mapStateToProps = state=>{  console.log('mapDispatchToProps from login');   //2- dispatch action name=setLogin, type(mutation=SET_LOGIN) and values=user
  return {loggedIn: state.auth.loggedIn}
}
export default connect (mapStateToProps)(GuestRoute);    //1-connect login page and two arguments