import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';

//const dotenv = require('dotenv');

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>{"Pravin's React App"}</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/blog'} className="nav-link">Blog</Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' exact component={Blog} />
              <Route path='/blog/:postid' component={SingleBlog} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
