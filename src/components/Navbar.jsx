import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    function handleHamburgerOpen(){
        setMenuOpen((prevState) => !prevState)
    }

    function handleLinkClick(){
        setMenuOpen(false)
    }

  return (
    <header className='navbar'>
        <div className="left-nav">
            <h1 className="logo">
                <Link to="/" onClick={handleLinkClick}>
                    <FontAwesomeIcon icon={faTasks} />
                    <span className='logo-text'>FlowSpace</span>
                </Link>
            </h1>
        </div>

        <div className="center-nav">
            <NavLink to="/" end className={({isActive}) => {
                return isActive ? "nav-link active" : "nav-link"
            }}>Home</NavLink>

            <NavLink to="/about" className={({isActive}) => {
                return isActive ? "nav-link active" : "nav-link"
            }}>About</NavLink>

            <NavLink to="/pricing" className={({isActive}) => {
                return isActive ? "nav-link active" : "nav-link"
            }}>Pricing</NavLink>

            <NavLink to="/blog" className={({isActive}) => {
                return isActive ? "nav-link active" : "nav-link"
            }}>Blog</NavLink>

            <NavLink to="/contact" className={({isActive}) => {
                return isActive ? "nav-link active" : "nav-link"
            }}>Contact</NavLink>
        </div>

        <div className="right-nav">
            <button className="btn-ghost">Sign in</button>
            <button className="btn-solid">Get started</button>
        </div>

        <button className="hamburger-btn" onClick={handleHamburgerOpen}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        <div className={`mobile-dropdown ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={handleLinkClick} end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/about" onClick={handleLinkClick} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/pricing" onClick={handleLinkClick} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Pricing</NavLink>
            <NavLink to="/blog" onClick={handleLinkClick} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
            <NavLink to="/contact" onClick={handleLinkClick} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        
            <div className="mobile-dropdown-actions">
                <Link to="/" className="btn-ghost" onClick={handleLinkClick}>Sign in</Link>
                <Link to="/" className="btn-solid" onClick={handleLinkClick}>Get started</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar