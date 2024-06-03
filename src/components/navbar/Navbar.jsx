import React from 'react'
import SmallNav from '../smallNav/SmallNav'
import MainNav from '../mainNav/MainNav'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-child">
        <SmallNav />
        <MainNav />
      </div>
        
    </div>
  )
}
