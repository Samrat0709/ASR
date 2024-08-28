// Filename: App.js
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./page/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavCom from "./components/NavCom";



function App() {
  return (
    <div className="App">

      <Router>
        <NavCom/>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
