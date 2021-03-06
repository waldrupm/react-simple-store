import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StoreItem extends Component {
  render() {
    let { id, title, price, image } = this.props.itemInfo;
    title = title.length < 30 ? title : title.substr(0, 27) + "...";
    price = price.toFixed(2);
    image = this.props.itemInfo.image;

    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="product-grid2 h-100 d-flex flex-column justify-content-between">
          <div className="product-image2 text-center">
            <Link to={"/store/" + id}>
              <img className="img-fluid pic-1" src={image} alt="" />
            </Link>
          </div>
          <div className="product-content text-center mt-4">
            <h5 className="title">
              <Link to={"/store/" + id}>{title}</Link>
            </h5>
            <button
              className="add-to-cart mt-3 mb-2 w-100 btn btn-success"
              onClick={() => this.props.addToOrder(id)}
            >
              Add to cart
            </button>
            <span className="price">${price}</span>
          </div>
        </div>
      </div>
    );
  }
}
