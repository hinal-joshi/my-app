import React from 'react';
import './Footer.css';
import Button from './Button';
import {Link} from 'react-router-dom';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our exclusive membership to recieve the latest news and trends
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" className="footer-input" placeholder="Your Email"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>   
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponserships</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <MdFingerprint className='navbar-icon'/>
                        LAVISH
                    </div>
                    <small className="website-rights">LAVISH &copy; 2021</small>
                    <div className="social-icons">
                        <Link to="/" target='_blank' className="social-icon-link"
                        aria-label='Facebook'>
                            <FaFacebook/>
                        </Link>
                        <Link to="/" target='_blank' className="social-icon-link"
                        aria-label='Instagram'>
                            <FaInstagram/>
                        </Link>
                        <Link to="/" target='_blank' className="social-icon-link"
                        aria-label='Youtube'>
                            <FaYoutube/>
                        </Link>
                        <Link to="/" target='_blank' className="social-icon-link"
                        aria-label='Twitter'>
                            <FaTwitter/>
                        </Link>
                        <Link to="/" target='_blank' className="social-icon-link"
                        aria-label='Linkedin'>
                            <FaLinkedin/>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
