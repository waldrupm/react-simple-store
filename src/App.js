import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Store from "./views/Store";
import StoreItemPage from "./views/StoreItemPage";
import Cart from "./views/Cart";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      order: {},
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  getOrderProducts = () => {
    const order = this.state.order;
    let orderProducts = Object.keys(order).map((key) => {
      return this.getProductByKey(parseInt(key));
    });
    return orderProducts;
  };

  getProductByKey = (key) => {
    return this.state.products.filter((product) => product.id === key)[0];
  };

  render() {
    const orderItems = Object.keys(this.state.order);
    const numItemsInCart = orderItems.reduce((prevTotal, key) => {
      return prevTotal + this.state.order[key];
    }, 0);
    return (
      <div>
        <Router>
          <header>
            <Navbar numItemsInCart={numItemsInCart} />
          </header>
          ​
          <main className="container">
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route
                exact
                path="/store"
                render={() => (
                  <Store
                    addToOrder={this.addToOrder}
                    products={this.state.products}
                  />
                )}
              />
              <Route
                exact
                path="/cart"
                render={() => (
                  <Cart
                    removeFromOrder={this.removeFromOrder}
                    orderProducts={this.getOrderProducts()}
                    order={this.state.order}
                  />
                )}
              />
              <Route
                exact
                path="/store/:id"
                render={({ match }) => (
                  <StoreItemPage addToOrder={this.addToOrder} match={match} />
                )}
              />
            </Switch>
          </main>
          ​<footer>​</footer>
        </Router>
      </div>
    );
  }
}
