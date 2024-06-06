import React from 'react';
import './Product.css';
import productD from '../../assets/default/product-d.png'

const Product = ({ product }) => {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
          { product.image ? <img className='food-item-image' src={product.image} alt="" /> : 
          <img className='food-item-image' src={productD} alt="" />
          }
            
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{product.name}</p>
            </div>
            <p className='food-item-price'>${product.price}</p>
        </div>
    </div>
  );
};

export default Product;