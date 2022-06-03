import React from "react";
import GlobalStyle from './GlobalStyles';
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import Register from "./assets/Pages/Register";
import Category1 from "./assets/Pages/Categories/Category1";
import Category2 from "./assets/Pages/Categories/Category2";
import CreateCard from "./assets/Pages/CreateCard";
import PrivateRoute from "./assets/Utils/PrivateRoute";
import CreateCategory from "./assets/Pages/CreateCategory";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
	<div className="App">
    	<Router>
			
			<GlobalStyle />
			
			<Switch>
				
				<Route exact path="/" component={Home} />
				<Route path="/category1" component={Category1} />
				<Route path="/category2" component={Category2} />
				<Route path="/login" component={Login} />
            	<Route path="/register" component={Register} />
				<Route path="/createCard" component={CreateCard} />
				<PrivateRoute path="/createCategory" component={CreateCategory} />
				
			</Switch>
		
		</Router>
	</div>
  );
}

export default App;
