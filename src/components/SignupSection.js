import React from 'react'
import Button from './Button'
import './SignupSection.css'

function SignupSection() {
    return (
        <div className="signup-section">
            <div className="signup-container">
                <h1 className="signup-heading">Get On Board</h1>
                <form className="signup-form">
                    <input type="text" name="name" placeholder="Name" className="signup-input" />
                    <input type="email" name="email" placeholder="Email" className="signup-input" />
                    <input type="password" name="password" placeholder="Password" className="signup-input" />
                    <small className="signup-text">By creating an account you agree to the <span>Terms of Use</span> and <span>Privacy Policy</span></small>
                    <button className="signup-btn">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignupSection
