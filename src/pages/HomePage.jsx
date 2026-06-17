import React from 'react'
import features from '../data/features'
import testimonialsWithInitials from '../data/testimonials'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  return (
    <div className='homepage'>
        <section className="hero-section">
            <h1 className="hero-heading">Project management built for modern teams</h1>
            <p className="hero-subheading">Flowspace brings your tasks, docs, and team communication into one place - so nothing falls through the cracks.</p>

            <div className="hero-btn">
                <Link to="/pricing" className="btn-solid">Start for free</Link>
                <Link to="/" className="btn-ghost">Watch a demo</Link>
            </div>
        </section>

        <section className="stats-section container">
            <div className="stats-grid">
                <div className="stat-card">
                    <h2>12k+</h2>
                    <p>Active teams</p>
                </div>

                <div className="stat-card">
                    <h2>98%</h2>
                    <p>Satisfaction</p>
                </div>

                <div className="stat-card">
                    <h2>
                        4.9 <FontAwesomeIcon icon={faStar} className="star-icon" />
                    </h2>
                    <p>App store rating</p>
                </div>
            </div>
        </section>

        <section className="features-section">
            <div className="feature-badge">
                Features
            </div>

            <h2 className="section-title">Everything your team needs</h2>
            <p className="section-subtitle">From task boards to time tracking - one platform, zero friction.</p>
            
            <div className="features-grid">
                {
                    features.map((feature) => {
                        return (
                            <div className="feature-card" key={feature.id}>
                                <i className={feature.icon}></i>
                                <h3 className='feature-title'>{feature.title}</h3>
                                <p className='feature-description'>{feature.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>

        <section className="testimonials-section">
            <h2 className="section-title">Loved by engineering teams worldwide</h2>

            <div className="testimonials-grid">
                {testimonialsWithInitials.map((testimonial) => {
                        return(
                            <div className="testimonial-card" key={testimonial.id}>
                                <p className='testimonial-quote'>"{testimonial.quote}"</p>

                                <div className="testimonial-details">
                                    <div className="avatar">{testimonial.initials}</div>
                                    <div className="profile-meta">
                                        <h3>{testimonial.name}</h3>
                                        <h4>{testimonial.role} at <strong>{testimonial.company}</strong></h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>

        <section className="final-section">
            <div className="cta-content">
                <h2>Ready to clear the friction out of your workflows?</h2>
                <p>Sign up today and join thousands of high-velocity teams operating smoothly in Flowspace.</p>
                
                <Link to="/pricing" className="btn-ghost large-btn">View Our Pricing Tiers</Link>
            </div>
        </section>
    </div>
  )
}

export default HomePage