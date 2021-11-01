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

  const [ user, setUser ] = useState(null);

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => setUser(user));  
      return () => unsubscribe();
  }, []);
  
  return (
    <div className="App">
      <Nav user={user} />
      <Main user={user} />
      <Footer />
    </div>
  );
}

export default App;
