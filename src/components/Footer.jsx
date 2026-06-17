import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-bar1">
            <div className="footer-description">
                <Link to="/"><FontAwesomeIcon icon={faTasks} className='footer-logo' /></Link>
                <span className='footer-logoName'>Flowspace</span>
                <p className="footer-text">Project management built for modern, distributed teams.</p>
            </div>

            <div className="footer-column1">
                <Link to="/"><h3>Product</h3></Link>
                <Link to="/pricing">Features</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/">Changelog</Link>
                <Link to="/">Roadmap</Link>
            </div>

            <div className="footer-column2">
                <Link to="/"><h3>Company</h3></Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Press</Link>
            </div>

            <div className="footer-column3">
                <Link to="/"><h3>Support</h3></Link>
                <Link to="/">Documentation</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">Status</Link>
                <Link to="/">Privacy</Link>
            </div>
        </div>

        <div className="footer-bar2">
            <h3>&copy; 2026 Flowspace. All rights reserved.</h3>
            <h3>Built by Ayomikun_The_Developer</h3>
        </div>
    </footer>
  )
}

export default Footer