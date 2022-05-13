import React from "react";
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
    /*<Router>
       <Routes>
           <Route exact path="/" component ={Home} />
           <Route path="/login" element={Login} />
       </Routes>
    </Router>*/
    <Home />
  );
}

export default App;
