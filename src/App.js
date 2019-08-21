import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "./css/tailwind.css" ;
import { BrowserRouter as Router } from "react-router-dom";
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import GuestRoute from './components/GuestRoute' ;
import AuthRoute from './components/AuthRoute' ;
import Layout from './components/Layout' ;


function App() {

  return (
    <div >
        <h1 className="bg-purple-500">  Tailwind css - Strip outside router </h1>
        <Router>
          <Layout>
          <div className="bg-gray-500 h-screen">
             <GuestRoute path="/login" component={Login} />
             <AuthRoute path="/profile" component={Profile} />
             <GuestRoute path="/register" component={Register} />
           </div>
           </Layout>
        </Router>
    </div>
  );
}

export default App;
