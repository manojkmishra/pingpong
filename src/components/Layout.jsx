import React , { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cookie from "js-cookie";

//export default function Layout(props) {
function Layout(props) 
{
  console.log('inside layout props= ', props);
  const handleLogout = e => 
  { console.log('layout handleLogout cookie=');e.preventDefault();   cookie.remove("token");   props.logout();
  };
     return (  
     <div>
         <nav className="flex"> <h1 className="w-3/4 py-4 mx-10">Layout Page</h1>  {/*w-width, py padding on y axis, mx-margin on x axis  */}
            <div className="w-1/4 justify-end"> 
            {!props.loggedIn ? 
            (
              <Fragment>
                  <Link className="m-3 py-1 px-2 bg-orange-500 text-white rounded inline-block" to="/login"> Login </Link> {/*py padding on y axis, mx-margin on x axis  */}
                  <Link className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"  to="/register" >Register </Link>
              </Fragment>
            ) :  <Link className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"  to="/logout"  onClick={handleLogout} >Logout </Link>
             }
            </div>
          </nav>
        {props.children}
     </div>
    );
 };
const mapDispatchToProps = dispatch => {   return {  logout: () => dispatch({ type: "SET_LOGOUT" })  }; };
 const mapStateToProps = state => { console.log('layout.js--,mapStateToProps--state=',state);  return {  loggedIn: state.auth.loggedIn   };  };  //take out loggedIn value from auth and put it here
 export default connect(  mapStateToProps,mapDispatchToProps  )(Layout);