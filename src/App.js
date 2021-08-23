import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import Tour from "./pages/Tour";
import Sistema from "./pages/Sistema";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/quemsomos" component={QuemSomos} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/tour" component={Tour} />
            <Route exact path="/sistema" component={Sistema} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
