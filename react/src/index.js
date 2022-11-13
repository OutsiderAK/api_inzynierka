import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import store from "./assets/Categories/store";

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
