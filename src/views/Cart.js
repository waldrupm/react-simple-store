import React, { Component } from "react";
import CartItem from "../components/CartItem";

export default class Cart extends Component {
  render() {
    const removeFromOrder = this.props.removeFromOrder;
    const orderProducts = this.props.orderProducts;
    const shipping = 25;
    let subtotal = this.props.orderProducts.reduce((prevTotal, product) => {
      const count = this.props.getNumOfProductInOrder(product.id);
      return prevTotal + count * product.price;
    }, 0);
    const tax = Math.round((subtotal * 0.06 * 100) / 100);
    const total = subtotal + shipping + tax;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Product</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Each</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Item Total</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderProducts.map((product) => {
                    let numInCart = this.props.getNumOfProductInOrder(
                      product.id
                    );
                    return (
                      <CartItem
                        product={product}
                        removeFromOrder={removeFromOrder}
                        numInCart={numInCart}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row py-5 p-4 bg-white rounded shadow-sm">
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Coupon code
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                If you have a coupon code, please tear it up because we hate
                them.
              </p>
              <div className="input-group mb-4 border rounded-pill p-2">
                <input
                  type="text"
                  placeholder="Apply coupon"
                  aria-describedby="button-addon3"
                  className="form-control border-0"
                />
                <div className="input-group-append border-0">
                  <button
                    id="button-addon3"
                    type="button"
                    className="btn btn-dark px-4 rounded-pill"
                  >
                    <i className="fa fa-gift mr-2"></i>(try to) Apply coupon
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Instructions for seller
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                If you have some information for the seller you can leave them
                in the box below
              </p>
              <textarea
                name=""
                cols="30"
                rows="2"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Order summary{" "}
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                Shipping and additional costs are calculated based on values you
                have entered.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Order Subtotal </strong>
                  <strong>${subtotal.toFixed(2)}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Shipping and handling</strong>
                  <strong>${shipping.toFixed(2)}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Tax</strong>
                  <strong>${tax.toFixed(2)}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">${total.toFixed(2)}</h5>
                </li>
              </ul>
              <a href="#" className="btn btn-dark rounded-pill py-2 btn-block">
                Procceed to checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
