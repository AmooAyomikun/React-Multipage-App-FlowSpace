import React from 'react'
import pricingTiers from '../data/pricing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faX } from '@fortawesome/free-solid-svg-icons/faX'

const PricingPage = () => {
    const[billingPeriod, setBillingPeriod] = React.useState('monthly')

    function handleToggle(period){
        setBillingPeriod(period)
    }

  return (
    <div className='pricing-page'>
        <div className="pricing-header">
            <div className="pricing-badge">Pricing</div>
            <h1 className="pricing-title">Simple, honest pricing</h1>
            <p className="pricing-subtitle">No hidden fees. Upgrade or downgrade any time.</p>

            <div className="billing-toggle">
                <button className={`toggle-btn ${billingPeriod === 'monthly' ? 'active' : ''}`} onClick={() => handleToggle('monthly')}>Monthly</button>
                <button className={`toggle-btn ${billingPeriod === 'annual' ? 'active' : ''}`} onClick={() => handleToggle('annual')}>Annually</button>

                {billingPeriod === 'annual' && (
                    <span className="save-badge">Save 20%</span>
                )}
            </div>
        </div>

        <div className="pricing-grid">
            {pricingTiers.map((pricingTier) => {
                return (
                    <div className={`pricing-card ${pricingTier.featured ? "featured-highlight" : ""}` } key={pricingTier.id}>
                        <div className="pricing-tag">{pricingTier.featured && <span className="pricing-tag">Most popular</span>}</div>
                        <h3 className="feature-name">{pricingTier.name}</h3>
                        <p className="feature-description">{pricingTier.description}</p>

                        <div className="price-box">
                            <span className="price-amount">${billingPeriod === 'monthly' ? pricingTier.monthlyPrice : pricingTier.annualPrice}</span>
                            <span className="price-duration">{billingPeriod === 'monthly' ? '/mo' : '/yr'}</span>
                        </div>

                        <hr className="card-divider" />

                        <div className="pricing-features">
                            {pricingTier.features.map((feature) => {
                                return (
                                        <div className="features" key={feature.text}>
                                            <span className={`icon-wrap ${feature.included ? 'text-emerald' : 'text-slate'}`}><FontAwesomeIcon icon={feature.included ? faCheck : faX} /></span>
                                            <span className="feature-text">{feature.text}</span>
                                        </div>)
                            })}
                        </div>

                        <button className={`btn-action ${pricingTier.featured ? 'btn-solid' : 'btn-ghost'}`}>
                            Get started
                        </button>
                    </div>
                )
            })

            }
        </div>
    </div>
  )
}

export default PricingPage