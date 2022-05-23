import React from "react";
import GlobalStyle from './GlobalStyles';
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import Register from "./assets/Pages/Register";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
			<GlobalStyle />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
			</Switch>
		</Router>
  );
}

export default App;
