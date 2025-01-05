import { useState } from 'react';
import axios from 'axios';
import Map from './Map';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        email: '',
        message: ''
    });

    const [submissionStatus, setSubmissionStatus] = useState(null); // New state for submission status

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formspreeUrl = 'https://formspree.io/f/xwpkprav'; // Replace with your Formspree URL
    
        axios.post(formspreeUrl, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            gender: formData.gender,
            email: formData.email,
            message: formData.message
        })
        .then((response) => {
            if (response.status === 200) { // Check for successful status
                setSubmissionStatus('success'); // Set success state
                // Reset form fields after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    gender: '',
                    email: '',
                    message: ''
                });
            } else {
                setSubmissionStatus('error'); // Set error state if not 200
            }
        })
        .catch((error) => {
            setSubmissionStatus('error'); // Set error state
            console.error('There was an error submitting the form!', error); // Log the error for debugging
        });
    };

    return (
            
        <div className="page">
            <div className="container">
        <div className="map-container">

            <Map />
        </div>
                <div className="cont-wrapper">
                    <div className="top-Contact">
                        <span>Contact Us</span>
                        <h1>Want some advice on Style?</h1>
                    </div>
                    <div className="bottom-Contact">
                        <div className="left">
                        <div className="cta">

                            <p>We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.</p>
                            <span>

                            <a href="tel:+233543062425"> Call us at : +233543062425</a>
                            
                            </span>
                            <span>
                            <a href="mailto:info@exclusivebabydiva.com">Email us : info@exclusivebabydiva.com</a>
                            </span>
                        </div>

                        </div>
                        <div className="right">
                        <div className="form-content">

                        <div>
                                {/* Conditionally display submission status */}
                    {submissionStatus === 'success' && (
                        <div className="status-message success">
                            Thank you for contacting ExclusiveBabyDiva.
                        </div>
                    )}
                    {submissionStatus === 'error' && (
                        <div className="status-message error">
                            There was an error submitting the form. Please try again.
                        </div>
                    )}
                        </div>
                            <form onSubmit={handleSubmit}>
                            <div className="contact-group-g">

                                <div className="contact-group">
                                    <label>First Name:</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact-group">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="contact-group-g">

                                <div className="contact-group">
                                    <label>Phone Number:</label>
                                    <input
                                        type="number"
                                        name="phoneNumber"
                                        pattern="[\+][0-9]{1,4}[ \-]?[0-9]{1,3}[ \-]?[0-9]{4,10}" placeholder="0123 456 789"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact-group">
                                    <label>Gender:</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                                <div className="contact-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact-group">
                                    <label>Message:</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                    />
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
