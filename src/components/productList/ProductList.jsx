// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import Product from '../product/Product'
import './ProductList.css';
import axios from 'axios';



const ProductList = () => {
  const [productList, setProductList] = useState([])
  useEffect(()=>{
    const fetchProductList = async ()=>{
      try{
        const response = await axios.get('http://127.0.0.1:8000/product-list/')
        setProductList(response.data)
      }catch(error){
        console.error('error',error)
      }
    }
    fetchProductList()
  },[])
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
        {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
        </div>
    </div>
  );
};

export default ProductList;
