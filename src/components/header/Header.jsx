import React from 'react'
import Category from '../category/Category'
import ImageSlider from '../imageSlider/ImageSlider'
import './Header.css'

export default function Header() {
  return (
    <div className='header-container row'>
        <div className="col col-3">
            <Category />
        </div>
        <div className="col col-9">
            <ImageSlider />
        </div>
    </div>
  )
}
