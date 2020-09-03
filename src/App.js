import React from 'react';
import './App.css';
import Myform from './pages/Myform/index.js'
import Redux from './pages/redux'
import "antd/dist/antd.css"
// import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Link, Route, Redirect } from "./components/react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
        <Link to="/form">表单</Link>
        <Link to="/redux">Redux</Link>
        {/* <Redirect to="/form" /> */}
        <Route  path="/" component={Myform} />
        <Route  path="/form" component={Myform} />
        <Route  path="/redux" component={Redux} />
      </Router>
    </div>
  );
}

export default App;
