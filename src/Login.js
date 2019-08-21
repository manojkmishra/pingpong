import React , {Component} from "react";
import axios from 'axios';
import cookie from 'js-cookie';
import { connect } from 'react-redux';


 class Login extends Component 
{   
    constructor(props){
             super(props);
             this.state={email:'',password:'',errors:{}}
          }
    handleForm = (e) => {   //arrow function
         e.preventDefault();

         const data={email:this.state.email, password:this.state.password} ;
        // fetch("http://localhost:8000/api/auth/login",{ method:"post", body: JSON.stringify(data), headers:{"Content-Type":"application/json"} })
         axios.post("http://localhost:8000/api/auth/login",data)
         .then(res=> {  //console.log('login props=',this.props)
                       // console.log('login state=', this.state)
                      
                        console.log('login api res=',res)
                        cookie.set("token",res.data.access_token);
                       // cookie.set("user",res.data.user);    //we want user in redux and token in cookie now
                        this.props.setLogin(res.data.user); //send user inside props
                        console.log('login.js--after auth api-- props=',this.props)
                        console.log('login.js--after auth api-- state=', this.state)
                        this.props.history.push("/profile")
                      })
         .catch(err=>{console.log('login.js login api err.response=',err.response); 
                      console.log('login.api after err catch this.state=',this.state) ;
                      this.setState({errors:err.response.data}); 
                      console.log('login.api after setstate this.state=',this.state)
                    });

        // this.props.history.push("/profile")
       }
    handleInput =(e) => {
        e.preventDefault();
        const name= e.target.name;
        const value=e.target.value;
        this.setState({[name]:value});  //dynamic binding
      //  console.log('e',e); 
      //  console.log('state',this.state); 
      //  console.log('props',this.props); 
       // console.log(e.target.value);  //target is email text field
    }

    render()
    {        // console.log('inside Login page render before return this.state=',this.state)  ;
            //  console.log('inside Login page render before return this.props=',this.state)  ;
        return(
             <div>
               <h1> Login Page</h1>
               <div className="flex">
                 <div className="w-1/3"></div>  {/* this one third page column is just for left gap  */}
                 <div className="w-1/3 mt-10 p-4 bg-yellow-300">   {/* mt- margin top, p-padding  */}
                  <form className="border border-gray-500" onSubmit={this.handleForm }>
                   {this.state.errors.error ? <p className="text-red-500 text-sm" > { this.state.errors.error } </p> : "" }
                    <div className="p-4">  {/* tcontainer for below input, padding=4  */}
                      <h1 className="text-lg border-b border-gray-400">Login Form</h1>  {/*border-b =  border of bottom  */}
                      <div className="mt-4"> 
                          <label>Email</label>
                          <input type="email" name="email" placeholder="email" onChange={this.handleInput } className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"></input>
                      </div>
                      <div className="mt-4"> 
                          <label>Password</label>
                          <input type="password" name="password" placeholder="password" onChange={this.handleInput } className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"></input>
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
const mapDispatchToProps = dispatch=>{  console.log('Login.js--mapDispatchToProps- SET_LOGIN ');   //2- dispatch action name=setLogin, type(mutation=SET_LOGIN) and values=user
  return {setLogin: user=>dispatch({type:"SET_LOGIN", payload: user})}
}
export default connect (null,mapDispatchToProps)(Login);    //1-connect login page and two arguments
//first arg null=map state to props
//sec = mapdespatchtoprops

//3.  this.props.setLogin(res.data.user);   ----used above