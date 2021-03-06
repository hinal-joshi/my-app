import React from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

function Pricing() {
    return (
        <IconContext.Provider value={{color:'#fff',size:64}}>
            <div className="pricing-section">
                <div className="pricing-wrapper">
                    <h1 className="pricing-heading">Pricing</h1>
                    <div className="pricing-container">
                        <Link to='/sign-up' className='pricing-container-card'>
                            <div className="pricing-container-cardInfo">
                                <div className="icon">
                                    <FaFire/>
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className="pricing-container-features">
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing-container-card'>
                            <div className="pricing-container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Gold</h3>
                                <h4>$29.99</h4>
                                <p>per month</p>
                                <ul className="pricing-container-features">
                                    <li>1000 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                    <li>$100,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing-container-card'>
                            <div className="pricing-container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>$99.99</h4>
                                <p>per month</p>
                                <ul className="pricing-container-features">
                                    <li>Unlimited Transactions</li>
                                    <li>5% Cash Back</li>
                                    <li>Unlimited Spending</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Pricing
