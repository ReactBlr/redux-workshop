import React from "react";
import ReactDOM from "react-dom";
import App from "./client/components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./client/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
