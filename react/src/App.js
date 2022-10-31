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
import store, { persistor } from "./assets/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Quiz from "./assets/quiz/Quiz";
import PrivateRoute from "./assets/routes/PrivateRoute";
import { Profile} from "./assets/Pages/Profile";
import Fiszki from "./assets/Pages/Fiszki";
import { Fiszka } from "./assets/components/fiszki/Fiszka";
import {NotFound} from "./assets/Pages/NotFound";
import Home1 from "./assets/Pages/Home1";
import Create from './assets/Pages/Create';
import Ranking from "./assets/Pages/Ranking";
import Navbar from "./assets/components/Navbar";



function App() {

  return (
	<Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <GlobalStyle />
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home1} />
              <Route exact path="/home" component={Home1} />
				      <Route path="/login" component={Login} />
              <Route path="/create" component={Create} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/register" component={Register} />
              <Route path="/fiszki" component={Fiszki} />
				      <Route path="/createCard" component={CreateCard} />
				      <Route path="/createCategory" component={CreateCategory} />
				      <Route path="/education" component={Education} />
              <Route path="/profile" component={Profile} />
				      <Route path="/article/:slug" component={Details} />
              <Route path="/card/:id" component={Fiszka} />
              <Route path="/ranking" component={Ranking} />
              <Route component={NotFound} />
            </Switch>
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
