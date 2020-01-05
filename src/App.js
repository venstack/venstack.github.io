import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import CV from './components/CV/CV'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NavigationBar from './components/Navigation/NavigationBar';

function App() {
  return (
  <Router>
    <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/cv' component={CV} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
  </Router>
  );
}

export default App;
