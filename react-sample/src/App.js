import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetAllArticle from './component/getallArticle'
import './App.css';
import Login from './component/login.js'

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
