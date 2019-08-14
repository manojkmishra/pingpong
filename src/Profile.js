import React , {Component} from "react";

export default class Profile extends Component 
{   
   
    render()
    {   console.log('inside profile page')      
        return(
             <div className="flex w-full justify-center">
              <h1 className="text-lg text-white mt-10 p-5 rounded-lg bg-black">Profile Page</h1>
             </div> 
           );
    }
}

