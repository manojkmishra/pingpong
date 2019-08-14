import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "./css/tailwind.css" ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Profile from './Profile';
import Register from './Register';

function App() {
  return (
    <div >
        <h1 className="bg-purple-500">  Tailwind css - Strip outside router </h1>
        <Router>
          <div className="bg-gray-300 h-screen">
             <Route path="/login" component={Login} />
             <Route path="/profile" component={Profile} />
             <Route path="/register" component={Register} />
           </div>
        </Router>
    </div>
  );
}

export default App;
