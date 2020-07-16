import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    const { id, image, price, title, category } = this.props.product;
    const numInCart = this.props.numInCart;
    const itemTotal = (price * numInCart).toFixed(2);
    return (
      <tr>
        <th scope="row" className="border-0">
          <div className="p-2">
            <img
              src={image}
              alt=""
              width="70"
              className="img-fluid rounded shadow-sm"
            />
            <div className="ml-3 d-inline-block align-middle">
              <h5 className="mb-0">
                {" "}
                <a
                  href="/store"
                  className="text-dark d-inline-block align-middle"
                >
                  {title}
                </a>
              </h5>
              <span className="text-muted font-weight-normal font-italic d-block">
                Category: {category}
              </span>
            </div>
          </div>
        </th>
        <td className="border-0 align-middle">
          <strong>${price.toFixed(2)}</strong>
        </td>
        <td className="border-0 align-middle">
          <strong>{numInCart}</strong>
        </td>
        <td className="border-0 align-middle">
          <strong>${itemTotal}</strong>
        </td>
        <td className="border-0 align-middle">
          <i
            className="fa fa-trash"
            onClick={() => this.props.removeFromOrder(id)}
          ></i>
        </td>
      </tr>
    );
  }
}
