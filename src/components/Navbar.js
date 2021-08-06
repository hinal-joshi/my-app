import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes, FaTty } from 'react-icons/fa';
import Button from './Button'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <MdFingerprint className='navbar-icon' />
                    LAVISH
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars" />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link className="nav-link" to='/' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/services' onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/products' onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className='btn-link' >
                                <Button buttonStyle='btn--outline'>SIGN UP</Button>
                            </Link>
                        ) : (
                            <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;