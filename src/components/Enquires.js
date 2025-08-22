import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Camera, Heart, Star, Award } from 'lucide-react';
import './Enquires.css';

const Enquires = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create email content
      const emailBody = `
New Enquiry from Skyblessing Films Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Location: ${formData.location}
Budget Range: ${formData.budget}

Message:
${formData.message}

---
This enquiry was submitted from the Skyblessing Films website contact form.
      `;

      // Use mailto to open email client
      const mailtoLink = `mailto:skyblessingfilms@gmail.com?subject=New Enquiry from ${encodeURIComponent(formData.name)} - ${formData.eventType}&body=${encodeURIComponent(emailBody)}`;
      
      window.open(mailtoLink);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="enquires" id="enquires">
      <div className="container">
        {/* Hero Section */}
        <div 
          className="enquiry-hero"
          style={{
            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%), url(${process.env.PUBLIC_URL + '/Img/namanverma-cover.jpg'})`
          }}
        >
          <div className="hero-content">
            <h1>Let's Create Magic Together</h1>
            <p>Transform your special moments into timeless memories with our cinematic photography & videography services</p>
            <div className="hero-stats">
              <div className="stat-item">
                <Award className="stat-icon" />
                <span>500+ Happy Couples</span>
              </div>
              <div className="stat-item">
                <Camera className="stat-icon" />
                <span>1000+ Events</span>
              </div>
              <div className="stat-item">
                <Star className="stat-icon" />
                <span>5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="enquiry-content">
          {/* Left Side - Information */}
          <div className="enquiry-info">
            <div className="info-card">
              <h3>Why Choose Skyblessing Films?</h3>
              <p>
                We don't just capture moments; we create cinematic stories that last forever. 
                Our passion for storytelling through lens has made us the most trusted name in 
                wedding photography and videography across Chhattisgarh.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <Heart className="feature-icon" />
                  <div>
                    <h4>Emotional Storytelling</h4>
                    <p>We capture the raw emotions and candid moments that make your day special</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <Camera className="feature-icon" />
                  <div>
                    <h4>Cinematic Quality</h4>
                    <p>Professional equipment and artistic vision for Hollywood-style results</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <Star className="feature-icon" />
                  <div>
                    <h4>Personal Touch</h4>
                    <p>Every couple gets personalized attention and custom packages</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h4>Get In Touch</h4>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:skyblessingfilms@gmail.com">skyblessingfilms@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+917777870725">+91 7777870725</a>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <strong>Location</strong>
                  <span>Rajnandgaon, Chhattisgarh, India</span>
                </div>
              </div>
            </div>

            <div className="services-card">
              <h4>Our Premium Services</h4>
              <ul>
                <li>Complete Wedding Photography & Videography</li>
                <li>Engagement & Pre-wedding Shoots</li>
                <li>Reception & Sangeet Coverage</li>
                <li>Haldi & Mehendi Ceremonies</li>
                <li>Destination Wedding Packages</li>
                <li>Family Portraits & Events</li>
                <li>Corporate Events & Functions</li>
                <li>Custom Photography Collections</li>
              </ul>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="enquiry-form">
            <div className="form-header">
              <h3>Start Your Journey</h3>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="eventType">Event Type *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding Ceremony</option>
                    <option value="engagement">Engagement</option>
                    <option value="pre-wedding">Pre-wedding Shoot</option>
                    <option value="reception">Reception</option>
                    <option value="sangeet">Sangeet & Haldi</option>
                    <option value="family">Family Event</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other Special Occasion</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date *</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Event Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Venue Name"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                  <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                  <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                  <option value="above-5l">Above ₹5,00,000</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Vision *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your vision, special requirements, number of guests, and any specific moments you want us to capture..."
                  required
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  🎉 Thank you! Your enquiry has been sent. We'll contact you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Something went wrong. Please try again or contact us directly.
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquires;
