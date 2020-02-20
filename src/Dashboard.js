import React, { Component } from 'react';
import logo from './logo.svg';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <header className="App-header">
          <h1>Dashboard</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Dashboard;
