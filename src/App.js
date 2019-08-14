import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "./css/tailwind.css" ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import GuestRoute from './components/GuestRoute' ;

function App() {

  return (
    <div >
        <h1 className="bg-purple-500">  Tailwind css - Strip outside router </h1>
        <Router>
          <div className="bg-gray-300 h-screen">
             <GuestRoute path="/login" component={Login} />
             <Route path="/profile" component={Profile} />
             <GuestRoute path="/register" component={Register} />
           </div>
        </Router>
    </div>
  );
}

export default App;
