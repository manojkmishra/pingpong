import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/index';
import {Provider} from 'react-redux';
import axios from 'axios';
import cookie from 'js-cookie';

const token = cookie.get("token")

if(token)
{    axios.defaults.headers.common["Authorization"] = `Bearer ${token}` 
     axios.post("http://localhost:8000/api/auth/me")
          .then(res=>{ console.log('me api response',res);
                      store.dispatch({ type: "SET_LOGIN", payload: res.data})

                      ReactDOM.render(<Provider store={store}> {console.log('render  after me api store=',store)} <App /></Provider>,
                      document.getElementById('root'));
                    })
    
}
else{
     ReactDOM.render(<Provider store={store}> {console.log('render  outside me api store=',store)} <App /></Provider>,
     document.getElementById('root'));

}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
