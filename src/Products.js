import React, { Component } from 'react';
import './Product.scss';
import defaultImage from './assets/product_image_placeholder.png';

class Products extends Component {
  render() {
    if (this.props.products === undefined) {
      return <div className="products"></div>;
    }
    return (
      <div className="products">
        {this.props.products.map((item) => (
          <div key={item.name} className="product">
            <img
              src={defaultImage}
              className="product-image"
              alt="product-image"
            />
            <p className="product-name">{item.name}</p>
            <p className="prodcut-price">
              单价:{item.price}/{item.unit}
            </p>
            <div className="add-product">
              <button>+</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
