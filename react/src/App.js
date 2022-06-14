import React,{ useState } from "react";
import GlobalStyle from './GlobalStyles';
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import Register from "./assets/Pages/Register";
import CreateCard from "./assets/Pages/CreateCard";
import CreateCategory from "./assets/Pages/CreateCategory";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Education from "./assets/Pages/Education";
import { Details } from "./assets/education/Details";
import ProtectedRoute from "./assets/routes/ProtectedRoute";
import Profile from "./assets/Pages/Profile";
import store, { persistor } from "./assets/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";





function App() {


  return (
	<Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
				      <Route path="/login" component={Login} />
				      <ProtectedRoute exact path="/profile" component={Profile} />
              <Route path="/register" component={Register} />
				      <Route path="/createCard" component={CreateCard} />
				      <ProtectedRoute path="/createCategory" component={CreateCategory} />
				      <Route path="/education" component={Education} />
				      <Route path="/article/:title" component={Details} />
            </Switch>
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
