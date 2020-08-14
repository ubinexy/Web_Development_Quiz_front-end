import React from 'react';
import './Product.scss';
import defaultImage from './assets/product_image_placeholder.png';

function Products(props) {
  console.log(props);
  return (<div className="products">
    {
      props.products.map(item=> 
        (<div key={item.name} className="product">
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
        )
      )
    }
    </div>
  );
}

export default Products;
