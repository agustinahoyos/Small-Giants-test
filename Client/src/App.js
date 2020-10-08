import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <React.Fragment>
    <div className="App">
     <Route path= '/' component={NavBar} />
  
    <Route path= '/about' component={About} />
    </div>
    </React.Fragment>
  );
}

export default App;
