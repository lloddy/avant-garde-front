import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import Index from './pages/Index';
import Login from './pages/Login';
import { auth } from './services/firebase';



function App() {  
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
