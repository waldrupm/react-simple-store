import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Store from "./views/Store";
import StoreItemPage from "./views/StoreItemPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <header>
            <Navbar />
          </header>
          ​
          <main className="container">
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route
                exact
                path="/store"
                render={({ match }) => <Store match={match} />}
              />
              <Route
                exact
                path="/store/:id"
                render={({ match }) => <StoreItemPage match={match} />}
              />
            </Switch>
          </main>
          ​<footer>​</footer>
        </Router>
      </div>
    );
  }
}
