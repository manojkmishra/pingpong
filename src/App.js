import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "./css/tailwind.css" ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <div >
        <h1 className="bg-purple-500">  Tailwind css working </h1>
        <Router>
           <Route path="/login" component={Login} />
        </Router>
    </div>
  );
}

export default App;
