import React, { Component } from "react";
import StoreItem from "../components/StoreItem";

export default class Store extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }

  render() {
    return (
      <div className="container">
        <h3 className="h3">Products </h3>
        <div className="row">
          {this.state.products.map((product, idx) => {
            return <StoreItem key={idx} itemInfo={product} />;
          })}
        </div>
      </div>
    );
  }
}
