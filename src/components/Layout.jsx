import React , { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//export default function Layout(props) {
function Layout(props) 
{
  console.log('inside layout props= ', props);
 
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
            ) :null }

            </div>
          </nav>
        {props.children}
       
     </div>
    );
 };

  const mapStateToProps = state => { console.log('layout.js--,mapStateToProps--state=',state);  return {  loggedIn: state.auth.loggedIn   };  };  //take out loggedIn value from auth and put it here
  export default connect(  mapStateToProps )(Layout);