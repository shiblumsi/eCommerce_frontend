import React from 'react'
import './MainNav.css'


export default function MainNav() {
  return (
    <div className='m-nav'>
        <div className="logo">SOB</div>
        <div className="search">
            <div className="s-input">
                <input className='s-i-field' type='text' placeholder='Search your product' />
                <button className='s-button'>X</button>
            </div>
        </div>
        <div className="m-right-nav">
            <p>Login</p>
            <p>|</p>
            <p>Signup</p>
            <p>cart</p>
        </div>
        
    </div>
  )
}
