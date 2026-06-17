import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons/faLocation'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
    const[formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email: "",
        subject: "",
        message: ""
    })

    const[error, setError] = React.useState({})
    const[submitted, setSubmitted] = React.useState(false)

    function handleChange(event){
        const{name, value} = event.target

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))

        if(error){
            setError((prevError) => ({
                ...prevError, 
                [name]: ""
            }))
        }
    }

    function handleSubmit(event){
        event.preventDefault()

        let validationErrors = {}

        if(!formData.firstName.trim()){
            validationErrors.firstName = "First name is required"
        }

        if(!formData.lastName.trim()){
            validationErrors.lastName = "Last name is required"
        }

        if(!formData.subject.trim()){
            validationErrors.subject = "Subject is required"
        }

        if(!formData.message.trim()){
            validationErrors.message = "Message cannot be empty"
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!formData.email.trim()){
            validationErrors.email = "Email is required"
        }else if(!emailRegex.test(formData.email)){
            validationErrors.email="Please enter a valid email"
        }

        if(Object.keys(validationErrors).length > 0){
            setError(validationErrors)
        }else{
            setError({})
            setSubmitted(true)
            console.log("Form Submitted Successfully:", formData)
        }
    }

    const navigate = useNavigate();
    function handleNavigation(){
        setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject: "",
                    message: ""
        })

        setSubmitted(false)
        navigate('/contact')
    }

    if(submitted){
        return(
            <div className="contact-success-view">
                <h1>Thank You, {formData.firstName}</h1>
                <p>Your message has been sent successfully. we'll be in touch soon.</p>
                <button className="btn-solid" onClick={handleNavigation}>Send another message</button>
            </div>
        )
    }
    
  return (
    <div className='contact-page'>
        <div className="left-contact">
            <div className="contact-badge">Contact</div>
            <h1 className="contact-heading">Get in touch</h1>
            <p className="contact-title">Have a question or want to see a demo? We respond within 24 hours.</p>
            <div className="contact-socials">
                <div className="social-row-item">
                    <FontAwesomeIcon icon={faEnvelope} className='social-icon' />
                    <span className='social-content'>hello@flowspace.io</span>
                </div>

                <div className="social-row-item">
                    <FontAwesomeIcon icon={faLocation} className='social-icon' />
                    <span className='social-content'>Asaba, Nigeria</span>
                </div>

                <div className="social-row-item">
                    <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                    <span className='social-content'>@flowspaceapp</span>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                            type="text"
                            id='firstName'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange} 
                            className={error.firstName ? 'input-error' : ''}
                    />
                    {error.firstName && <span className='error-text'>{error.firstName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                            type="text"
                            id='lastName'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            className={error.lastName ? 'input-error' : ''}
                    />
                    {error.lastName && <span className='error-text'>{error.lastName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                            type="text" 
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className={error.email ? 'input-error' : ""}
                    />
                    {error.email && <span className='error-text'>{error.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                            type="text" 
                            id='subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            className={error.subject ? 'input-error' : ""}
                    />
                    {error.subject && <span className='error-text'>{error.subject}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                            name="message" 
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={error.message ? 'input-error' : ""}
                    />
                    {error.message && <span className='error-text'>{error.message}</span>}
                </div>

                <button type='submit' className='btn-solid'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactPage