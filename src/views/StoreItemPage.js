import React, { Component } from "react";

export default class StoreItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      product: {},
      fixedPrice: null,
      lineThroughPrice: null,
    };
  }

  componentDidMount() {
    fetch(`https://fakestoreapi.com/products/${this.state.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ product: json });
        this.setState({ fixedPrice: this.state.product.price.toFixed(2) });
        this.setState({
          lineThroughPrice: (this.state.fixedPrice * 1.4).toFixed(2),
        });
        console.log("this.state.product", this.state.product);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="heading-section">
          <h2>{this.state.product.title}</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={this.state.product.image} alt="" />
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-price-discount">
                  <span>${this.state.fixedPrice}</span>
                  <span className="line-through">
                    ${this.state.lineThroughPrice}
                  </span>
                </div>
              </div>
              <p>{this.state.product.description}</p>
              <div className="product-count">
                <button
                  onClick={() => this.props.addToOrder(this.state.id)}
                  className="round-black-btn"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
