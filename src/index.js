import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/index';
import {Provider} from 'react-redux';
import axios from 'axios';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

const jwt_secret='Vn7gW0JKjWuh14RfhLQbwgjd23YHZDFmFBsiwvbs93EKZZKbEeFIONOSVLQrR9wY'

let token = cookie.get("token")
if(token)
{   //jwt.verify(token, jwt_secret, function(err, decoded) 
    jwt.verify(token, jwt_secret, (err, decoded)  => {   //arrow function in place of above 
       if(err){token=null;
                cookie.remove('token');
                console.log('index.js--err in token, so removed token from cookie',cookie);
               }else{
                   if( decoded.iss !='http://localhost:8000/api/auth/login'){
                    token=null;
                    cookie.remove('token');
                    console.log('index.js--issues is not same, so removed token from cookie',cookie);
                   }
               }
         console.log('index.js--decoded jwt=',decoded)
    });

}
const render = () =>{
     ReactDOM.render(<Provider store={store}> {console.log('index.js--render ,store=',store)} <App /></Provider>,
     document.getElementById('root'));
}

if(token)
{    axios.defaults.headers.common["Authorization"] = `Bearer ${token}` 
     axios.post("http://localhost:8000/api/auth/me")
          .then(res=>{ console.log('index.js--me api response',res);
                      store.dispatch({ type: "SET_LOGIN", payload: res.data})
                      render();
                    })
    
}
else{
     render();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
