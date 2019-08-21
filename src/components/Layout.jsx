import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


export default function Layout(props) {
  console.log('inside layout ');

  
    return (  
     <div>
         <nav className="flex"> <h1 className="w-3/4 py-4 mx-10">Layout Page</h1>  {/*w-width, py padding on y axis, mx-margin on x axis  */}
            <div className="w-1/4 justify-end"> 
              <Link className="m-3 py-1 px-2 bg-orange-500 text-white rounded inline-block" to="/login">  {/*py padding on y axis, mx-margin on x axis  */}
                Login 
              </Link>
             
              <Link className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"  to="/register" >
                Register
              </Link>

            </div>
          </nav>
        {props.children}
       
     </div>
    );
  };

 