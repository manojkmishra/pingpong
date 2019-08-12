import React , {Component} from "react";

export default class Login extends Component 
{
    render()
    { return(
             <div>
               <h1> Login Page</h1>
               <div className="flex">
                 <div className="w-1/3"></div>  {/* this one third page column is just for left gap  */}
                 <div className="w-1/3 mt-10 p-4 bg-yellow-300">   {/* mt- margin top, p-padding  */}
                  <form className="border border-gray-500">
                    <div className="p-4">  {/* tcontainer for below input, padding=4  */}
                      <h1 className="text-lg border-b border-gray-400">Login Form</h1>  {/*border-b =  border of bottom  */}
                      <div className="mt-4"> 
                          <label>Email</label>
                          <input type="email" name="email" placeholder="email" className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"></input>
                      </div>
                      <div className="mt-4"> 
                          <label>Password</label>
                          <input type="password" name="password" placeholder="password" className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"></input>
                      </div>
                      <div className="mt-4"> 
                          <input type="submit" className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"></input>
                      </div>
                    </div>
                  </form>
                  </div>
               </div>
             </div> 
           
           
           );
    }
}

