import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Footer from "components/Footer";

function App(props) {
  return (
    <Router>
      <div className="app">
        <Switch>
          {props.routes.map(route => (
            <Route path={route.path} key={route.name}>
              <route.component />
            </Route>
          ))}
          <Redirect to="/home" from="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
