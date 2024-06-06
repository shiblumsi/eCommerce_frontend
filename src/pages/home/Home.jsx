import React from 'react'
import './Home.css'
import Category from '../../components/category/Category'
import ImageSlider from '../../components/imageSlider/ImageSlider'
import Header from '../../components/header/Header'
import FlashSell from '../../components/flashSell/FlashSell'
import ProductList from '../../components/productList/ProductList'


export default function Home() {
  return (
    <div className='home'>
        <div className="header">
          <Header />
          <FlashSell />
          <ProductList />
        </div>
    </div>
  )
}
