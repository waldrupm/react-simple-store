import React, { Component } from "react";
import StoreItem from "../components/StoreItem";

export default class Store extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="h3">Products </h3>
        <div className="row">
          {this.props.products.map((product, idx) => {
            return (
              <StoreItem
                addToOrder={this.props.addToOrder}
                key={idx}
                itemInfo={product}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
