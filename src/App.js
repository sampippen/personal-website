import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Education from './components/pages/Education';
import Sports from './components/pages/Sports';
import Professional from './components/pages/Professional';
import Projects from './components/pages/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/education' component={Education} />
          <Route path='/sports' component={Sports} />
          <Route path='/professional' component={Professional} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

//code used from https://github.com/briancodex/react-website-v1