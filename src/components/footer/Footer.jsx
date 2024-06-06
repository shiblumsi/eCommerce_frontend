import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1>SOB</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae, numquam libero voluptate molestiae iure.</p>
                <div className="footer-social-icons">
                    <p>F</p>
                    <p>X</p>
                    <p>L</p>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>Aboutus</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+880 1772115060</li>
                    <li>contact@omato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  )
}
