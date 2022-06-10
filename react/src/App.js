import React from "react";
import GlobalStyle from './GlobalStyles';
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import Register from "./assets/Pages/Register";
import CreateCard from "./assets/Pages/CreateCard";
import CreateCategory from "./assets/Pages/CreateCategory";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Education from "./assets/Pages/Education";




function App() {
  return (
    <Router>
			<GlobalStyle />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
				<Route path="/createCard" component={CreateCard} />
				<Route path="/createCategory" component={CreateCategory} />
				<Route path="/education" component={Education} />
			</Switch>
		</Router>
  );
}

export default App;
